#!/usr/bin/env python3
"""Build a locked CurseForge client ZIP or install a fresh dedicated server. Python 3.11+."""

import argparse
import hashlib
import html
import json
import os
from pathlib import Path, PurePosixPath
import re
import shutil
import subprocess
import sys
import urllib.parse
import urllib.request
import zipfile

ROOT = Path(__file__).resolve().parents[1]
ALLOWED_HOSTS = {'cdn.modrinth.com', 'maven.ftb.dev', 'maven.neoforged.net'}
SIDES = {'required', 'optional', 'unsupported'}
STAMP = (2026, 10, 21, 0, 0, 0)


def digest(data, algorithm='sha512'):
    return hashlib.new(algorithm, data).hexdigest()


def relative_path(value):
    """Reject portable absolute paths and traversal before using metadata on disk."""
    path = PurePosixPath(value)
    if (not value or '\\' in value or ':' in value or path.is_absolute()
            or any(part in {'..', '.'} for part in value.split('/'))):
        raise ValueError(f'Unsafe relative path: {value!r}')
    return path


def load(root=ROOT):
    meta = json.loads((root / 'pack/pack.json').read_text(encoding='utf-8'))
    lock = json.loads((root / 'pack/lock.json').read_text(encoding='utf-8'))
    validate(meta, lock, root)
    return meta, lock


def validate(meta, lock, root=ROOT):
    if lock['minecraft'] != meta['minecraft'] or lock['neoforge'] != meta['neoforge']:
        raise ValueError('Pack metadata and lock disagree about Minecraft/NeoForge')
    if meta['minecraft'] != '1.21.1' or meta['java_major'] != 21:
        raise ValueError('This first-version pipeline targets Minecraft 1.21.1 and Java 21')
    if lock['schema_version'] != 1 or not lock['mods']:
        raise ValueError('Unsupported or empty lock')
    ids, paths, project_ids = set(), set(), set()
    for mod in lock['mods']:
        if mod['id'] in ids or mod['filename'] in paths:
            raise ValueError('Duplicate locked project or filename')
        ids.add(mod['id'])
        paths.add(mod['filename'])
        path = relative_path(mod['filename'])
        if len(path.parts) != 1 or path.suffix != '.jar':
            raise ValueError('Mod filenames must be plain .jar basenames')
        cf = mod['curseforge']
        if (type(cf['project_id']) is not int or type(cf['file_id']) is not int
                or cf['project_id'] <= 0 or cf['file_id'] <= 0 or cf['project_id'] in project_ids):
            raise ValueError('Invalid/duplicate CurseForge project identity')
        project_ids.add(cf['project_id'])
        if mod['env']['client'] not in SIDES or mod['env']['server'] not in SIDES:
            raise ValueError('Invalid side declaration')
        validate_download(mod)
        if not mod['version'] or not mod['license'] or not mod['source']:
            raise ValueError('Missing version, license label or identity source')
    validate_download(lock['installer'])
    for side in ('client', 'server'):
        selected = [mod for mod in lock['mods'] if mod['env'][side] != 'unsupported']
        available = {'minecraft', 'neoforge'}
        for mod in selected:
            available.update(mod['mod_ids'])
            available.update(mod['embedded_mod_ids'])
        for mod in selected:
            missing = set(mod['declared_required_mods']) - available
            if missing:
                raise ValueError(f'{side}: {mod["id"]} is missing dependencies: {sorted(missing)}')
    overrides = root / relative_path(meta['overrides'])
    if not overrides.is_dir():
        raise ValueError('Missing pack overrides')
    for path in overrides.rglob('*'):
        if path.is_symlink():
            raise ValueError('Symlinks are not allowed inside distributable overrides')
        if path.is_file() and path.suffix in {'.jar', '.zip'}:
            raise ValueError('Third-party binaries belong in the lock, not overrides')


def validate_download(entry):
    parsed = urllib.parse.urlsplit(entry['url'])
    if parsed.scheme != 'https' or parsed.hostname not in ALLOWED_HOSTS or parsed.username or parsed.password:
        raise ValueError('Untrusted artifact URL')
    if type(entry['size']) is not int or not 0 < entry['size'] <= 512 * 1024 * 1024:
        raise ValueError('Invalid artifact size')
    for algorithm, length in [('sha1', 40), ('sha512', 128)]:
        if not re.fullmatch('[0-9a-f]{' + str(length) + '}', entry['hashes'].get(algorithm, '')):
            raise ValueError('Missing/invalid artifact hash')


def verified_file(path, entry):
    if not path.is_file() or path.stat().st_size != entry['size']:
        return False
    data = path.read_bytes()
    return all(digest(data, algorithm) == expected for algorithm, expected in entry['hashes'].items())


def download(entry, path):
    validate_download(entry)
    if verified_file(path, entry):
        return path
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_name(path.name + '.part')
    request = urllib.request.Request(entry['url'], headers={
        'User-Agent': 'ATM-Omega-Edition/0.1 (https://github.com/ACABadAngel/ATM-Omega-Edition)',
    })
    try:
        with urllib.request.urlopen(request, timeout=90) as source, temporary.open('wb') as output:
            if urllib.parse.urlsplit(source.url).scheme != 'https':
                raise ValueError('Artifact redirected to a non-HTTPS URL')
            received = 0
            while block := source.read(1024 * 1024):
                received += len(block)
                if received > entry['size']:
                    raise ValueError('Artifact exceeds its locked size')
                output.write(block)
        if not verified_file(temporary, entry):
            raise ValueError(f'Hash/size mismatch for {path.name}')
        temporary.replace(path)
    finally:
        temporary.unlink(missing_ok=True)
    return path


def archive(path, files):
    path.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(path, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as output:
        for name, value in sorted(files.items()):
            relative_path(name)
            data = value if isinstance(value, bytes) else value.encode('utf-8')
            info = zipfile.ZipInfo(name, STAMP)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            output.writestr(info, data)


def override_files(meta, root=ROOT):
    folder = root / meta['overrides']
    return {'overrides/' + path.relative_to(folder).as_posix(): path.read_bytes()
            for path in folder.rglob('*') if path.is_file()}


def build(output, root=ROOT):
    meta, lock = load(root)
    manifest = {
        'minecraft': {'version': meta['minecraft'], 'modLoaders': [
            {'id': 'neoforge-' + meta['neoforge'], 'primary': True}]},
        'manifestType': 'minecraftModpack', 'manifestVersion': 1,
        'name': meta['name'], 'version': meta['version'], 'author': meta['author'],
        'files': [{'projectID': mod['curseforge']['project_id'],
                   'fileID': mod['curseforge']['file_id'], 'required': True}
                  for mod in lock['mods'] if mod['env']['client'] != 'unsupported'],
        'overrides': 'overrides',
    }
    files = override_files(meta, root)
    files['manifest.json'] = json.dumps(manifest, ensure_ascii=False, indent=2) + '\n'
    links = ''.join(f'<li><a href="{html.escape(m["source"], quote=True)}">'
                    f'{html.escape(m["name"])} {html.escape(m["version"])}</a></li>' for m in lock['mods'])
    files['modlist.html'] = '<!doctype html><meta charset="utf-8"><title>Omega mods</title><ul>' + links + '</ul>'
    name = f'ATM-Omega-Edition-{meta["version"]}'
    client = output / (name + '-curseforge.zip')
    archive(client, files)

    # A server kit carries our scripts/configuration and the same lock. No mod JARs,
    # Minecraft server binaries, credentials or accepted EULA are redistributed.
    server_files = {key: (root / key).read_bytes() for key in [
        'tools/pack.py', 'pack/pack.json', 'pack/lock.json', 'pack/SERVER-README.md',
    ]}
    for key, data in override_files(meta, root).items():
        server_files['pack/' + key] = data
    server_files['install-server.bat'] = (
        '@echo off\r\ncd /d "%~dp0"\r\npy -3 tools\\pack.py install-server --directory server\r\npause\r\n')
    server_files['install-server.sh'] = '#!/bin/sh\nset -eu\ncd "$(dirname "$0")"\npython3 tools/pack.py install-server --directory server\n'
    server = output / (name + '-server-kit.zip')
    archive(server, server_files)
    for path in (client, server):
        checksum = digest(path.read_bytes(), 'sha256')
        path.with_suffix(path.suffix + '.sha256').write_text(checksum + '  ' + path.name + '\n')
        print(path)
    return client, server


def java_command(java):
    if "/" in java or "\\" in java:
        java = str(Path(java).resolve())
    result = subprocess.run([java, '-version'], text=True, capture_output=True, check=True)
    version = re.search(r'version "(\d+)', result.stderr + result.stdout)
    if not version or int(version.group(1)) != 21:
        raise ValueError('Java 21 is required. Select a Java 21 executable using --java.')
    command = [java, '-Xmx2G', '-XX:ActiveProcessorCount=4']
    proxy = urllib.parse.urlsplit(urllib.request.getproxies().get('https', ''))
    if proxy.username:
        raise ValueError('Authenticated Java proxies need explicit local configuration; credentials are never logged.')
    if proxy.hostname:
        for scheme in ('http', 'https'):
            command.extend([f'-D{scheme}.proxyHost={proxy.hostname}', f'-D{scheme}.proxyPort={proxy.port or 80}'])
        trust = Path('/etc/ssl/certs/java/cacerts')
        if trust.is_file():
            command.append('-Djavax.net.ssl.trustStore=' + str(trust))
    return command


def install_server(directory, java='java', root=ROOT):
    meta, lock = load(root)
    target = directory.resolve()
    sentinel = target / '.omega-instance.json'
    if (target / 'world').exists():
        raise ValueError('This command only creates fresh servers. Back up and migrate existing worlds separately.')
    if target.exists() and any(target.iterdir()) and not sentinel.is_file():
        raise ValueError('Refusing to write into an unrecognised nonempty directory')
    signature = digest(json.dumps(lock, sort_keys=True).encode('utf-8'))
    if sentinel.is_file() and json.loads(sentinel.read_text())['lock_hash'] != signature:
        raise ValueError('Server directory belongs to another lock. Use a new empty directory.')
    command = java_command(java)
    target.mkdir(parents=True, exist_ok=True)
    sentinel.write_text(json.dumps({'version': meta['version'], 'lock_hash': signature}, indent=2) + '\n')
    cache = target / '.omega-cache'
    installer = download(lock['installer'], cache / lock['installer']['filename'])
    # The installer fetches official Minecraft/NeoForge libraries and performs their own checksum checks.
    if not (target / 'run.sh').is_file() and not (target / 'run.bat').is_file():
        installer_env = os.environ.copy()
        # NeoForge processors may launch child JVMs. Bound their heap and worker count too.
        installer_env['JAVA_TOOL_OPTIONS'] = (installer_env.get('JAVA_TOOL_OPTIONS', '')
                                             + ' -Xmx2G -XX:ActiveProcessorCount=4').strip()
        subprocess.run(command + ['-jar', str(installer), '--installServer', str(target)],
                       check=True, cwd=target, env=installer_env)
    for mod in lock['mods']:
        if mod['env']['server'] == 'unsupported':
            continue
        print('Installing', mod['name'], mod['version'], flush=True)
        source = download(mod, cache / mod['filename'])
        destination = target / 'mods' / mod['filename']
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, destination)
    shutil.copytree(root / meta['overrides'], target, dirs_exist_ok=True)
    eula = target / 'eula.txt'
    if not eula.exists():
        eula.write_text('# Read https://aka.ms/MinecraftEULA before changing this value.\neula=false\n')
    print('Server prepared:', target)
    print('Read the Minecraft EULA, set eula=true if you agree, then use the generated run.bat or run.sh.')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest='command', required=True)
    sub.add_parser('validate')
    build_parser = sub.add_parser('build')
    build_parser.add_argument('--output', type=Path, default=ROOT / 'dist')
    install = sub.add_parser('install-server')
    install.add_argument('--directory', type=Path, required=True)
    install.add_argument('--java', default='java')
    args = parser.parse_args()
    try:
        if args.command == 'build':
            build(args.output)
        elif args.command == 'install-server':
            install_server(args.directory, args.java)
        else:
            meta, lock = load()
            print(f'PASS: {meta["version"]}, {len(lock["mods"])} locked mod files, Minecraft {meta["minecraft"]}, NeoForge {meta["neoforge"]}.')
    except (OSError, ValueError, KeyError, subprocess.SubprocessError) as error:
        parser.exit(1, f'ERROR: {error}\n')


if __name__ == '__main__':
    main()
