"""Backup/restore regression tests. Minecraft evidence is recorded separately."""
import importlib.util
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
import zipfile

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('backup', ROOT / 'tools/backup.py')
backup = importlib.util.module_from_spec(spec)
spec.loader.exec_module(backup)


class BackupTests(unittest.TestCase):
    def setUp(self):
        self.folder = tempfile.TemporaryDirectory()
        self.addCleanup(self.folder.cleanup)
        self.root = Path(self.folder.name)
        self.instance = self.root / 'server'
        self.fresh = self.root / 'fresh'
        self.archive = self.root / 'backup.zip'
        for directory in (self.instance, self.fresh):
            directory.mkdir()
            (directory / '.omega-instance.json').write_text(json.dumps({'version': 'test', 'lock_hash': '0' * 128}))
            (directory / 'config').mkdir()
            (directory / 'config/settings.txt').write_text('initial')
        world = self.instance / 'custom-world'
        (world / 'ftbquests').mkdir(parents=True)
        (world / 'level.dat').write_bytes(b'world fixture')
        (world / 'session.lock').write_bytes(b'\0')
        (world / 'ftbquests/team.snbt').write_text('{ progress: 120L }')
        (self.instance / 'server.properties').write_text('level-name=custom-world\n')
        (self.instance / 'mods').mkdir()
        (self.instance / 'mods/not-backed-up.jar').write_bytes(b'redownload from lock')

    def test_roundtrip_preserves_world_team_config_and_identity(self):
        (self.instance / 'config/settings.txt').write_text('customized')
        manifest = backup.create(self.instance, self.archive)
        self.assertEqual(manifest, backup.verify(self.archive))
        paths = {entry['path'] for entry in manifest['files']}
        self.assertNotIn('custom-world/session.lock', paths)
        self.assertNotIn('mods/not-backed-up.jar', paths)
        backup.restore(self.archive, self.fresh)
        for entry in manifest['files']:
            self.assertEqual((self.instance / entry['path']).read_bytes(), (self.fresh / entry['path']).read_bytes())
        self.assertEqual((self.fresh / 'config/settings.txt').read_text(), 'customized')

    def test_restore_refuses_existing_world_and_mismatched_lock(self):
        backup.create(self.instance, self.archive)
        with self.assertRaisesRegex(ValueError, 'existing world'):
            backup.restore(self.archive, self.instance)
        (self.fresh / '.omega-instance.json').write_text(json.dumps({'version': 'other', 'lock_hash': '1' * 128}))
        with self.assertRaisesRegex(ValueError, 'same mod lock'):
            backup.restore(self.archive, self.fresh)
        self.assertEqual((self.fresh / 'config/settings.txt').read_text(), 'initial')

    def test_corruption_does_not_modify_destination(self):
        backup.create(self.instance, self.archive)
        with zipfile.ZipFile(self.archive) as source:
            files = {name: source.read(name) for name in source.namelist()}
        files['custom-world/level.dat'] = b'badld fixture'
        with zipfile.ZipFile(self.archive, 'w') as target:
            for name, content in files.items():
                target.writestr(name, content)
        with self.assertRaisesRegex(ValueError, 'mismatch'):
            backup.restore(self.archive, self.fresh)
        self.assertFalse((self.fresh / 'custom-world').exists())
        self.assertEqual((self.fresh / 'config/settings.txt').read_text(), 'initial')

    def test_unsafe_paths_and_recursive_outputs_rejected(self):
        for value in ('../escape', '/absolute', 'C:/world', 'world\\evil', 'a//b'):
            with self.subTest(value=value), self.assertRaises(ValueError):
                backup.safe_path(value)
        with self.assertRaisesRegex(ValueError, 'outside'):
            backup.create(self.instance, self.instance / 'recursive.zip')
        with self.assertRaisesRegex(ValueError, 'level-name'):
            backup.create(self.instance, self.archive, world='wrong-world')
        backup.create(self.instance, self.archive)
        with zipfile.ZipFile(self.archive, 'a') as target:
            target.writestr('../escape', b'invalid')
        with self.assertRaises(ValueError):
            backup.restore(self.archive, self.fresh)
        self.assertFalse((self.root / 'escape').exists())

    @unittest.skipUnless(os.name == 'posix', 'POSIX record-lock test; Windows needs native testing')
    def test_running_world_record_lock_rejected(self):
        script = ('import fcntl,sys; f=open(sys.argv[1], "r+b"); '
                  'fcntl.lockf(f, fcntl.LOCK_EX | fcntl.LOCK_NB); '
                  'print("locked", flush=True); sys.stdin.read()')
        process = subprocess.Popen([sys.executable, '-c', script,
                                    str(self.instance / 'custom-world/session.lock')],
                                   stdin=subprocess.PIPE, stdout=subprocess.PIPE, text=True)
        try:
            self.assertEqual(process.stdout.readline().strip(), 'locked')
            with self.assertRaisesRegex(ValueError, 'Stop Minecraft'):
                backup.create(self.instance, self.archive)
            self.assertFalse(self.archive.exists())
        finally:
            process.communicate('', timeout=5)


if __name__ == '__main__':
    unittest.main()
