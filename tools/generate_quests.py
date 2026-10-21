#!/usr/bin/env python3
"""Generate our original FTB Quests 2101.1.36 chapter and bilingual translations."""

import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / 'pack/overrides/config/ftbquests/quests'


def generated_files():
    content = json.loads((ROOT / 'pack/content/quests.json').read_text(encoding='utf-8'))
    definitions = [{'id': content['chapter_id'], 'filename': '01_from_survival_to_motion',
                    'title': content['chapter_title']}] + content.get('additional_chapters', [])
    chapters = {definition['id']: {
        'id': definition['id'], 'filename': definition['filename'],
        'group': '', 'order_index': index, 'default_quest_shape': 'square',
        'progression_mode': 'linear', 'quests': [],
    } for index, definition in enumerate(definitions)}
    languages = {locale: {
        'file.0000000000000001.title': 'ATM Omega Edition · 0.2',
    } for locale in ('en_us', 'de_de')}
    for definition in definitions:
        for locale, table in languages.items():
            table[f'chapter.{definition["id"]}.title'] = definition['title'][locale]
    for source in content['quests']:
        # Derive task/reward IDs from the stable quest ID, never its current list position.
        # This preserves all published alpha-1 IDs when chapters are reordered.
        number = int(source['id'][-4:], 16)
        quest = {
            'id': source['id'], 'x': float(source['x']), 'y': float(source['y']),
            'dependencies': source['dependencies'], 'tasks': [], 'rewards': [],
        }
        targets = source['items'] or [None]
        for index, target in enumerate(targets):
            task = {'id': f'200000000000{number * 16 + index:04X}'}
            if target is None:
                task['type'] = 'checkmark'
            else:
                task.update(type='item', item={'id': target['id'], 'count': 1},
                            count=target['count'], consume_items=source['consume'])
            quest['tasks'].append(task)
        if source.get('reward'):
            item, count = source['reward']
            quest['rewards'].append({
                'id': f'300000000000{number:04X}', 'type': 'item',
                'item': {'id': item, 'count': count},
            })
        chapters[source.get('chapter_id', content['chapter_id'])]['quests'].append(quest)
        for locale, table in languages.items():
            table[f'quest.{source["id"]}.title'] = source['title'][locale]
            table[f'quest.{source["id"]}.quest_desc'] = source['description'][locale]

    # JSON is a strict subset of the SNBT accepted by FTB Library. Numeric task counts
    # are read through CompoundTag.getLong(), which accepts any NumericTag.
    files = {f'chapters/{chapter["filename"]}.snbt': chapter for chapter in chapters.values()}
    files.update({f'lang/{locale}.snbt': table for locale, table in languages.items()})
    return {name: json.dumps(data, ensure_ascii=False, indent=2) + '\n' for name, data in files.items()}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    for name, text in generated_files().items():
        path = DEST / name
        if args.check:
            if not path.exists() or path.read_text(encoding='utf-8') != text:
                parser.exit(1, f'Stale quest file: {name}; run python3 tools/generate_quests.py\n')
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(text, encoding='utf-8')
    print('PASS: bilingual FTB chapters are ' + ('current.' if args.check else 'generated.'))


if __name__ == '__main__':
    main()
