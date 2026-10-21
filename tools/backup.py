#!/usr/bin/env python3
"""Offline world/config backups for Omega. Python 3.11+, no additional packages."""
import argparse
from contextlib import contextmanager
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import tempfile
from datetime import datetime, timezone
import zipfile

FOLDERS = ('config', 'defaultconfigs', 'kubejs')
FILES = ('.omega-instance.json', 'server.properties', 'user_jvm_args.txt', 'eula.txt',
         'ops.json', 'whitelist.json', 'banned-ips.json', 'banned-players.json')
MANIFEST = 'omega-backup.json'


def safe_path(name):
    parts = name.split('/')
    if (not name or '\\' in name or ':' in name or name.startswith('/')
            or any(part in ('', '.', '..') for part in parts)):
        raise ValueError(f'Unsafe backup path: {name!r}')
    return PurePosixPath(name)


def identity(instance):
    path = instance / '.omega-instance.json'
    if not path.is_file() or path.is_symlink():
        raise ValueError('Expected an Omega server prepared by tools/pack.py')
    data = json.loads(path.read_text(encoding='utf-8'))
    if not isinstance(data.get('lock_hash'), str) or len(data['lock_hash']) != 128:
        raise ValueError('Invalid Omega lock identity')
    return data


@contextmanager
def stopped_world(world):
    """Minecraft DirectoryLock uses Java FileLock (POSIX record locks on Linux)."""
    lock_path = world / 'session.lock'
    if not (world / 'level.dat').is_file() or not lock_path.is_file():
        raise ValueError('Expected a saved world with level.dat and session.lock')
    if lock_path.is_symlink():
        raise ValueError('World lock must not be a symlink')
    with lock_path.open('r+b') as handle:
        if os.name == 'nt':
            import msvcrt
            try:
                msvcrt.locking(handle.fileno(), msvcrt.LK_NBLCK, 1)
            except OSError as error:
                raise ValueError('Stop Minecraft completely before backing up') from error
            try:
                yield
            finally:
                handle.seek(0)
                msvcrt.locking(handle.fileno(), msvcrt.LK_UNLCK, 1)
        else:
            import fcntl
            try:
                fcntl.lockf(handle, fcntl.LOCK_EX | fcntl.LOCK_NB)
            except OSError as error:
                raise ValueError('Stop Minecraft completely before backing up') from error
            try:
                yield
            finally:
                fcntl.lockf(handle, fcntl.LOCK_UN)


def world_name(instance, explicit=None):
    name = explicit or 'world'
    if explicit is None and (instance / 'server.properties').is_file():
        for line in (instance / 'server.properties').read_text(encoding='utf-8').splitlines():
            if line.strip().startswith('level-name='):
                name = line.strip().split('=', 1)[1]
    path = safe_path(name)
    if len(path.parts) != 1 or name in FOLDERS or name.startswith('.'):
        raise ValueError('World must be a plain folder name; use --world for custom names')
    return name


def create(instance, archive, world=None):
    instance, archive = instance.resolve(), archive.absolute()
    if archive.exists():
        raise ValueError('Backup already exists; choose a new filename')
    if archive.resolve().is_relative_to(instance):
        raise ValueError('Store backups outside the server directory')
    data = identity(instance)
    name = world_name(instance, world)
    if name != world_name(instance):
        raise ValueError('--world must match level-name in the stopped server.properties')
    roots = (name,) + FOLDERS + FILES
    archive.parent.mkdir(parents=True, exist_ok=True)
    with stopped_world(instance / name), tempfile.TemporaryDirectory(dir=archive.parent) as folder:
        staged = Path(folder) / 'backup.zip'
        manifest = {'format': 'omega-server-backup', 'schema_version': 1,
                    'created_utc': datetime.now(timezone.utc).isoformat(),
                    'pack_version': data['version'], 'lock_hash': data['lock_hash'],
                    'world': name, 'files': []}
        with zipfile.ZipFile(staged, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=6) as output:
            for root in roots:
                source = instance / root
                if source.is_symlink():
                    raise ValueError('Symlinks are not supported in backups')
                candidates = sorted(source.rglob('*')) if source.is_dir() else [source]
                for path in candidates:
                    if path.is_symlink():
                        raise ValueError('Symlinks are not supported in backups')
                    if not path.is_file() or path.name == 'session.lock':
                        continue
                    relative = path.relative_to(instance).as_posix()
                    safe_path(relative)
                    checksum, size = hashlib.sha256(), 0
                    with path.open('rb') as incoming, output.open(relative, 'w', force_zip64=True) as target:
                        while block := incoming.read(1024 * 1024):
                            checksum.update(block)
                            size += len(block)
                            target.write(block)
                    manifest['files'].append({'path': relative, 'size': size, 'sha256': checksum.hexdigest()})
            output.writestr(MANIFEST, json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
        staged.rename(archive)
    return manifest


def inspect(archive):
    entries = archive.infolist()
    names = [entry.filename for entry in entries]
    if len(names) != len(set(name.casefold() for name in names)):
        raise ValueError('Duplicate/case-colliding archive paths')
    if any(entry.is_dir() or (entry.external_attr >> 16) & 0o170000 == 0o120000 for entry in entries):
        raise ValueError('Unexpected directory/symlink entry')
    if MANIFEST not in names or archive.getinfo(MANIFEST).file_size > 16 * 1024 * 1024:
        raise ValueError('Missing or oversized backup manifest')
    manifest = json.loads(archive.read(MANIFEST))
    if manifest.get('format') != 'omega-server-backup' or manifest.get('schema_version') != 1:
        raise ValueError('Unsupported backup format')
    world = manifest['world']
    if world_name(Path('/unused'), world) != world:
        raise ValueError('Invalid backup world')
    listed = [entry['path'] for entry in manifest['files']]
    if len(listed) != len(set(listed)) or set(names) != set(listed) | {MANIFEST}:
        raise ValueError('Backup manifest does not match ZIP entries')
    if '.omega-instance.json' not in listed or world + '/level.dat' not in listed:
        raise ValueError('Incomplete world backup')
    total = 0
    for entry in manifest['files']:
        path = safe_path(entry['path'])
        if not (path.parts[0] in (world,) + FOLDERS or entry['path'] in FILES):
            raise ValueError('Unexpected backup content')
        if path.name == 'session.lock':
            raise ValueError('Active session locks must not be restored')
        if type(entry['size']) is not int or entry['size'] < 0 or archive.getinfo(entry['path']).file_size != entry['size']:
            raise ValueError('Backup size mismatch')
        total += entry['size']
    if total > 32 * 1024**3:
        raise ValueError('Backup exceeds the 32-GiB alpha restore limit')
    return manifest


def transfer(archive, manifest, destination=None):
    for entry in manifest['files']:
        checksum = hashlib.sha256()
        with archive.open(entry['path']) as incoming:
            if destination is None:
                while block := incoming.read(1024 * 1024):
                    checksum.update(block)
            else:
                path = destination / entry['path']
                path.parent.mkdir(parents=True, exist_ok=True)
                with path.open('wb') as output:
                    while block := incoming.read(1024 * 1024):
                        checksum.update(block)
                        output.write(block)
        if checksum.hexdigest() != entry['sha256']:
            raise ValueError('Backup checksum mismatch: ' + entry['path'])


def verify(path):
    with zipfile.ZipFile(path) as archive:
        manifest = inspect(archive)
        transfer(archive, manifest)
    return manifest


def restore(path, instance):
    """Restore only into an unused, separately installed server with the same lock."""
    instance = instance.resolve()
    data = identity(instance)
    if any(path.is_symlink() for path in instance.iterdir()):
        raise ValueError('Restore destination must not contain symlinked folders/files')
    if any(instance.rglob('level.dat')) or any(instance.rglob('session.lock')):
        raise ValueError('Restore requires a fresh server without any existing world')
    with zipfile.ZipFile(path) as archive, tempfile.TemporaryDirectory(dir=instance.parent) as folder:
        manifest = inspect(archive)
        if manifest['lock_hash'] != data['lock_hash']:
            raise ValueError('Install the same mod lock before restoring this backup')
        staging, previous = Path(folder) / 'incoming', Path(folder) / 'previous'
        staging.mkdir()
        previous.mkdir()
        transfer(archive, manifest, staging)
        if identity(staging)['lock_hash'] != manifest['lock_hash']:
            raise ValueError('Backup instance identity disagrees with its manifest')
        if world_name(staging) != manifest['world']:
            raise ValueError('Backup server.properties points to a different world')
        moved, replaced = [], []
        try:
            for source in sorted(staging.iterdir()):
                target = instance / source.name
                if target.exists() or target.is_symlink():
                    target.rename(previous / target.name)
                    replaced.append(target.name)
                source.rename(target)
                moved.append(target.name)
        except OSError:
            for name in reversed(moved):
                (instance / name).rename(staging / name)
            for name in reversed(replaced):
                (previous / name).rename(instance / name)
            raise
    return manifest


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest='command', required=True)
    create_parser = sub.add_parser('create')
    create_parser.add_argument('--instance', type=Path, required=True)
    create_parser.add_argument('--output', type=Path, required=True)
    create_parser.add_argument('--world')
    verify_parser = sub.add_parser('verify')
    verify_parser.add_argument('--archive', type=Path, required=True)
    restore_parser = sub.add_parser('restore')
    restore_parser.add_argument('--archive', type=Path, required=True)
    restore_parser.add_argument('--instance', type=Path, required=True)
    args = parser.parse_args()
    try:
        if args.command == 'create':
            result = create(args.instance, args.output, args.world)
        elif args.command == 'verify':
            result = verify(args.archive)
        else:
            result = restore(args.archive, args.instance)
        print(f'PASS: {args.command}: {len(result["files"])} files, world {result["world"]}, pack {result["pack_version"]}')
    except (OSError, ValueError, KeyError, zipfile.BadZipFile) as error:
        parser.exit(1, f'ERROR: {error}\n')


if __name__ == '__main__':
    main()
