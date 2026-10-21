#!/usr/bin/env python3
"""Validate design data, not Minecraft runtime compatibility. Standard library only."""

import csv
import json
import re
import sys
from fractions import Fraction
from pathlib import Path
from urllib.parse import unquote, urlsplit

from render_modlist import EVIDENCE, PHASES, SELECTIONS, render

ROOT = Path(__file__).resolve().parents[1]
ERRORS = []


def require(condition, message):
    if not condition:
        ERRORS.append(message)


def read_json(name):
    return json.loads((ROOT / 'planning' / name).read_text(encoding='utf-8'))


def read_csv(name):
    with (ROOT / 'planning' / name).open(encoding='utf-8', newline='') as handle:
        return list(csv.DictReader(handle))


def index_by_id(rows, label):
    ids = [row['id'] for row in rows]
    require(len(ids) == len(set(ids)), f'{label}: duplicate IDs')
    require(all(ids), f'{label}: empty ID')
    return {row['id']: row for row in rows}


def check_graph(graph, label):
    """Check references and cycles in a dependency graph, including disconnected nodes."""
    active, complete = set(), set()

    def visit(node):
        if node in complete:
            return
        if node in active:
            require(False, f'{label}: dependency cycle at {node}')
            return
        active.add(node)
        for dep in graph[node]:
            if dep not in graph:
                require(False, f'{label}: {node} references missing dependency {dep}')
            else:
                visit(dep)
        active.remove(node)
        complete.add(node)

    for node in graph:
        visit(node)


def positive_integer(value):
    return type(value) is int and value > 0


def validate():
    budgets = read_json('budgets.json')
    for group, target in [('mods', 'mod_target'), ('quests', 'quest_target')]:
        values = budgets[group]
        require(all(positive_integer(v) for v in values.values()), f'{group}: invalid budget')
        require(sum(values.values()) == budgets[target], f'{group}: budget sum does not match target')

    ages_data = read_json('ages.json')
    ages = ages_data['ages']
    age_index = index_by_id(ages, 'ages')
    require(list(age_index) == [f'A{i:02}' for i in range(1, 13)], 'ages: expected A01 through A12 in order')
    require(len({row['milestone'] for row in ages}) == len(ages), 'ages: duplicate milestones')
    check_graph({row['id']: row['prerequisites'] for row in ages}, 'ages')
    for i, row in enumerate(ages):
        expected = [] if i == 0 else [ages[i - 1]['id']]
        require(row['prerequisites'] == expected, f"ages: {row['id']} violates the main age sequence")
    epilogue = ages_data['optional_epilogue']
    require(epilogue['requires'] in age_index, 'epilogue: missing main-age reference')
    require(epilogue['id'] not in age_index, 'epilogue must be separate from the main path')

    mods = read_csv('mod-candidates.csv')
    mod_index = index_by_id(mods, 'mod candidates')
    project_urls = [row['project_url'].rstrip('/') for row in mods]
    require(len(project_urls) == len(set(project_urls)), 'mod candidates: duplicate project identity')
    valid_statuses = {'candidate', 'source_checked', 'resolved', 'compiled', 'isolated_tested',
                      'integrated_tested', 'approved', 'blocked', 'rejected'}
    provenance = ('exact_version', 'source_url', 'license', 'redistribution',
                  'dependencies', 'side', 'test_evidence')
    for row in mods:
        label = f"mod {row['id']}"
        require(row['category'] in budgets['mods'], f'{label}: unknown category')
        require(row['status'] in valid_statuses, f'{label}: unknown status')
        require(row['admission_route'] in {'native-first', 'port-assessment', 'own-development'}, f'{label}: invalid route')
        require(bool(row['role'] and row['fallback']), f'{label}: missing role or fallback')
        require(row['selection'] in SELECTIONS, f'{label}: invalid selection')
        require(row['phase'] in PHASES, f'{label}: invalid phase')
        require(row['priority'] in {'P0', 'P1', 'P2', 'P3', 'conditional'}, f'{label}: invalid priority')
        require(row['evidence_level'] in EVIDENCE, f'{label}: invalid identity-evidence level')
        require(row['project_url'].startswith('https://'), f'{label}: missing HTTPS project URL')
        require(row['choice_group'] in {'', 'primary_storage', 'recipe_viewer', 'renderer', 'pack_menu',
                                       'ice_fire_distribution', 'harvest_input', 'inventory_sorting',
                                       'multiblock_recipe_platform'}, f'{label}: unknown choice group')
        if row['selection'] == 'custom':
            require(row['admission_route'] == 'own-development', f'{label}: custom project needs own-development route')
        else:
            require(row['admission_route'] != 'own-development', f'{label}: own-development must be custom')
            require(row['catalog_source'].startswith('https://'), f'{label}: missing identity source')
        if row['selection'] == 'dependency':
            require(row['category'] == 'Bibliotheken' and row['priority'] == 'conditional',
                    f'{label}: dependency must be conditional library')
        for parent in filter(None, row['parent_candidates'].split('|')):
            require(parent in mod_index and parent != row['id'], f'{label}: invalid parent candidate {parent}')
        require(row['target_minecraft'] == '1.21.1' and row['target_loader'] == 'NeoForge',
                f'{label}: baseline changed without updating validation policy')
        if row['status'] == 'approved':
            for field in provenance:
                require(bool(row[field].strip()), f'{label}: approved without {field}')
            require(row['side'] in {'client', 'server', 'both'}, f'{label}: invalid approved side')

    if not ERRORS:
        require((ROOT / 'MODLIST.md').read_text(encoding='utf-8') == render(mods, budgets),
                'MODLIST.md differs from candidate CSV; run python3 tools/render_modlist.py')

    quests = read_csv('quest-samples.csv')
    quest_index = index_by_id(quests, 'quest samples')
    quest_graph = {row['id']: [x for x in row['dependencies'].split('|') if x] for row in quests}
    check_graph(quest_graph, 'quest samples')
    for row in quests:
        label = f"quest {row['id']}"
        require(row['age'] in age_index, f'{label}: missing age')
        require(row['category'] in budgets['quests'], f'{label}: unknown category')
        require(row['scope'] in {'team', 'personal'}, f'{label}: invalid scope')
        require(row['type'] in {'manual', 'item', 'milestone', 'discovery', 'delivery', 'production', 'boss'},
                f'{label}: unknown evidence type')
        require(row['status'] in {'design', 'implemented', 'tested'}, f'{label}: invalid status')
        require(all(row[x].strip() for x in ('title', 'target', 'condition', 'reward')),
                f'{label}: incomplete quest definition')
        for dep in quest_graph[row['id']]:
            if dep in quest_index and row['age'] in age_index and quest_index[dep]['age'] in age_index:
                require(quest_index[dep]['age'] <= row['age'], f'{label}: requires a future age')
    for row in ages:
        require(any(q['target'] == row['milestone'] and q['age'] == row['id'] for q in quests),
                f"age {row['id']}: no matching milestone quest example")

    endgame = read_json('endgame.json')
    recipes = endgame['recipes']
    recipe_index = index_by_id(recipes, 'endgame recipes')
    check_graph({r['id']: [key for key in r['inputs'] if key in recipe_index] for r in recipes},
                'endgame recipe references')
    for row in recipes:
        label = f"recipe {row['id']}"
        require(row['age'] in age_index, f'{label}: missing age')
        require(positive_integer(row['energy_fe']) and positive_integer(row['duration_ticks']),
                f'{label}: energy/time must be positive integers')
        require(row['energy_fe'] < 2**63, f'{label}: exceeds signed 64-bit energy')
        require(all(positive_integer(v) for v in row['inputs'].values()), f'{label}: invalid input amount')
    singularities = endgame['singularities']
    require(len(singularities) == len(set(singularities)) == 6, 'expected six distinct singularities')
    first = recipe_index['omega:omega_star']
    require(all(first['inputs'].get(key) == 1 for key in singularities),
            'first star must include one of each singularity')
    bootstrap = endgame['bootstrap']
    first_rate = Fraction(first['energy_fe'], first['duration_ticks'])
    require(bootstrap['pre_omega_array_net_fe_per_tick'] * bootstrap['array_count_for_first_star'] >= first_rate,
            'bootstrap generators cannot supply first star at its planned rate')
    require(bootstrap['omega_reactor_requires'] == first['id'], 'reactor unlock must follow first star')
    require(bootstrap['architect_arena_requires'] == 'omega:transcendence_star',
            'Architect must be accessible before final star')

    def expand(recipe_id):
        """Count first-tier star crafts and total energy, recursively, per one output."""
        row = recipe_index[recipe_id]
        count = int(recipe_id == 'omega:omega_star')
        energy = row['energy_fe']
        for input_id, amount in row['inputs'].items():
            if input_id in recipe_index:
                sub_count, sub_energy = expand(input_id)
                count += amount * sub_count
                energy += amount * sub_energy
        return count, energy

    # Skip recursion if the graph is invalid; cycle diagnostics above remain actionable.
    if not ERRORS:
        omega_count, energy = expand('omega:infinity_omega_star')
        targets = endgame['derived_targets']
        require(omega_count == targets['omega_stars_for_first_infinity'], 'derived Omega Star total differs')
        require(energy == targets['total_star_recipe_energy_fe'], 'derived star-recipe energy differs')

    # Validate the dependency references in the handoff backlog as well.
    backlog = (ROOT / 'docs/backlog.md').read_text(encoding='utf-8')
    work_graph = {}
    for line in backlog.splitlines():
        cells = [cell.strip() for cell in line.strip().strip('|').split('|')]
        if len(cells) == 5 and re.fullmatch(r'[A-Z]+-\d{2}', cells[0]):
            require(cells[0] not in work_graph, f'backlog: duplicate {cells[0]}')
            work_graph[cells[0]] = re.findall(r'\b[A-Z]+-\d{2}\b', cells[3])
    require(bool(work_graph), 'backlog: no work packages parsed')
    check_graph(work_graph, 'backlog')

    local_links = 0
    for path in ROOT.rglob('*.md'):
        content = path.read_text(encoding='utf-8')
        for match in re.finditer(r'!?\[[^\]\n]*\]\(([^)\n]+)\)', content):
            target = match.group(1).split(' "', 1)[0].strip('<>')
            parsed = urlsplit(target)
            if parsed.scheme or parsed.netloc or not parsed.path:
                continue
            destination = (path.parent / unquote(parsed.path)).resolve()
            local_links += 1
            require(destination.is_relative_to(ROOT), f'{path.name}: link escapes repository: {target}')
            require(destination.exists(), f'{path.relative_to(ROOT)}: missing target {target}')

    if ERRORS:
        for message in ERRORS:
            print(f'ERROR: {message}', file=sys.stderr)
        return 1
    print(f'PASS: {len(ages)} ages, {len(mods)} candidate mods, {len(quests)} quest designs, '
          f'{len(recipes)} star recipes, {len(work_graph)} work packages, {local_links} local links.')
    print(f'Budgets: {budgets["mod_target"]} mods / {budgets["quest_target"]} quests. '
          f'First Infinity Star: {omega_count} Omega Stars; {energy:,} FE in star recipes.')
    print('Design consistency only. Minecraft runtime, ports and mod compatibility: NOT TESTED.')
    return 0


if __name__ == '__main__':
    try:
        sys.exit(validate())
    except (OSError, ValueError, KeyError, TypeError) as error:
        print(f'ERROR: invalid or unreadable planning input: {error}', file=sys.stderr)
        sys.exit(1)
