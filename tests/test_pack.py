"""Offline regression checks for exports, dependency closure and download integrity."""
import copy
import hashlib
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest import mock
import subprocess
import zipfile

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('pack', ROOT / 'tools/pack.py')
pack = importlib.util.module_from_spec(spec)
spec.loader.exec_module(pack)


class PackTests(unittest.TestCase):
    def test_portable_paths(self):
        for bad in ('../world', '/world', 'C:/world', 'mods\\evil.jar', 'a/../b', '', './a'):
            with self.subTest(path=bad), self.assertRaises(ValueError):
                pack.relative_path(bad)

    def test_verified_download_rejects_corruption(self):
        original = b'locked artifact'
        entry = {'size': len(original), 'hashes': {
            algorithm: hashlib.new(algorithm, original).hexdigest() for algorithm in ('sha1', 'sha512')}}
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / 'artifact.jar'
            path.write_bytes(original)
            self.assertTrue(pack.verified_file(path, entry))
            path.write_bytes(b'X' + original[1:])
            self.assertFalse(pack.verified_file(path, entry))
            path.write_bytes(original[:-1])
            self.assertFalse(pack.verified_file(path, entry))

    def test_missing_server_dependency_rejected(self):
        meta, lock = pack.load()
        lock = copy.deepcopy(lock)
        next(m for m in lock['mods'] if m['id'] == 'rhino')['env']['server'] = 'unsupported'
        with self.assertRaisesRegex(ValueError, 'missing dependencies'):
            pack.validate(meta, lock)

    def test_installer_refuses_custom_named_existing_world(self):
        with tempfile.TemporaryDirectory() as folder:
            instance = Path(folder)
            (instance / 'custom-world').mkdir()
            (instance / 'custom-world/level.dat').write_bytes(b'existing save')
            with self.assertRaisesRegex(ValueError, 'only creates fresh servers'):
                pack.install_server(instance)

    def test_partial_installer_with_launcher_files_is_retried(self):
        meta, lock = pack.load()
        with tempfile.TemporaryDirectory() as folder:
            instance = Path(folder)
            (instance / '.omega-instance.json').write_text(json.dumps({
                'version': meta['version'],
                'lock_hash': pack.digest(json.dumps(lock, sort_keys=True).encode()),
            }))
            for name in ('run.sh', 'run.bat', 'installer.jar'):
                (instance / name).write_bytes(b'partial installation')
            with mock.patch.object(pack, 'java_command', return_value=['java']), \
                    mock.patch.object(pack, 'download', return_value=instance / 'installer.jar'), \
                    mock.patch.object(pack.subprocess, 'run', side_effect=subprocess.CalledProcessError(1, 'java')) as run:
                with self.assertRaises(subprocess.CalledProcessError):
                    pack.install_server(instance)
                run.assert_called_once()
            self.assertFalse(json.loads((instance / '.omega-instance.json').read_text())['neoforge_install_complete'])

    def test_exports_are_reproducible_and_clean(self):
        meta, lock = pack.load()
        with tempfile.TemporaryDirectory() as a, tempfile.TemporaryDirectory() as b:
            first, second = pack.build(Path(a)), pack.build(Path(b))
            for left, right in zip(first, second):
                self.assertEqual(left.read_bytes(), right.read_bytes())
                with zipfile.ZipFile(left) as archive:
                    names = archive.namelist()
                    self.assertFalse(any(name.endswith('.jar') or 'smoke' in name or
                                         name.endswith('eula.txt') or '/world/' in name for name in names))
            with zipfile.ZipFile(first[0]) as archive:
                manifest = json.loads(archive.read('manifest.json'))
                self.assertEqual(len(manifest['files']), 21)
                self.assertEqual(manifest['minecraft']['modLoaders'][0]['id'], 'neoforge-' + meta['neoforge'])
            self.assertEqual(sum(m['env']['server'] != 'unsupported' for m in lock['mods']), 20)

    def test_quest_graph_and_consuming_contract(self):
        content = json.loads((ROOT / 'pack/content/quests.json').read_text())
        quests = {q['id']: q for q in content['quests']}
        self.assertEqual(len(quests), 38)
        visited = set()
        def visit(key, active):
            self.assertNotIn(key, active, 'Quest dependency cycle')
            if key in visited:
                return
            for dependency in quests[key]['dependencies']:
                self.assertIn(dependency, quests)
                visit(dependency, active | {key})
            visited.add(key)
        for key, quest in quests.items():
            visit(key, set())
            self.assertEqual(set(quest['title']), {'en_us', 'de_de'})
            self.assertEqual(set(quest['description']), {'en_us', 'de_de'})
        contracts = [q for q in quests.values() if q['consume']]
        self.assertEqual(len(contracts), 1)
        self.assertEqual(contracts[0]['items'], [{'id': 'create:copper_sheet', 'count': 120}])

    def test_published_quest_task_reward_ids_are_preserved(self):
        generator_spec = importlib.util.spec_from_file_location('quests', ROOT / 'tools/generate_quests.py')
        generator = importlib.util.module_from_spec(generator_spec)
        generator_spec.loader.exec_module(generator)
        generated = generator.generated_files()
        chapters = [json.loads(value) for name, value in generated.items() if name.startswith('chapters/')]
        self.assertEqual(len(chapters), 3)
        golden = json.loads((ROOT / 'tests/fixtures/alpha1_quest_ids.json').read_text())
        chapter = next(chapter for chapter in chapters if chapter['id'] == golden['chapter_id'])
        self.assertEqual({quest['id']: {'tasks': [task['id'] for task in quest['tasks']],
                                      'rewards': [reward['id'] for reward in quest['rewards']]}
                          for quest in chapter['quests']}, golden['quests'])
        alpha2 = json.loads((ROOT / 'tests/fixtures/alpha2_quest_ids.json').read_text())
        for chapter_id, expected in alpha2['chapters'].items():
            current = next(c for c in chapters if c['id'] == chapter_id)
            self.assertEqual({q['id']: {'tasks': [t['id'] for t in q['tasks']],
                                      'rewards': [r['id'] for r in q['rewards']]}
                              for q in current['quests']}, expected)
        kill_tasks = [t for c in chapters for q in c['quests'] for t in q['tasks'] if t['type'] == 'kill']
        self.assertEqual([(t['entity'], t['value']) for t in kill_tasks], [('ars_nouveau:wilden_boss', 1)])
        ids = [chapter['id'] for chapter in chapters]
        for chapter in chapters:
            for quest in chapter['quests']:
                ids.append(quest['id'])
                ids.extend(task['id'] for task in quest['tasks'])
                ids.extend(reward['id'] for reward in quest['rewards'])
        self.assertEqual(len(ids), len(set(ids)))
        content = json.loads((ROOT / 'pack/content/quests.json').read_text())
        content['quests'].reverse()
        with tempfile.TemporaryDirectory() as folder:
            alternate = Path(folder)
            (alternate / 'pack/content').mkdir(parents=True)
            (alternate / 'pack/pack.json').write_text((ROOT / 'pack/pack.json').read_text())
            (alternate / 'pack/content/quests.json').write_text(json.dumps(content))
            with mock.patch.object(generator, 'ROOT', alternate):
                reordered = generator.generated_files()
        for name in [name for name in generated if name.startswith('chapters/')]:
            before = {q['id']: (q['tasks'], q['rewards']) for q in json.loads(generated[name])['quests']}
            after = {q['id']: (q['tasks'], q['rewards']) for q in json.loads(reordered[name])['quests']}
            self.assertEqual(before, after)


if __name__ == '__main__':
    unittest.main()
