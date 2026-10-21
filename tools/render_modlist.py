#!/usr/bin/env python3
"""Render the human mod wishlist from the canonical candidate CSV; no downloads."""

import argparse
import csv
import json
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SELECTIONS = {
    'core': 'Kernwunsch',
    'expansion': 'Ausbauwunsch',
    'alternative': 'Alternative',
    'dependency': 'Abhängigkeit',
    'legacy': 'Legacy-Prüfung',
    'custom': 'Eigenentwicklung',
}
PHASES = {
    'foundation': 'Fundament', 'early': 'Frühspiel', 'mid': 'Mittlere Progression',
    'late': 'Späte Progression', 'optional': 'Optionales Profil',
    'dependency': 'Mit benötigtem Elternmod', 'legacy': 'Separater Legacy-Pilot',
}
EVIDENCE = {
    'catalog-listed': 'Projektlink im offiziellen ATM-Projektverzeichnis beobachtet',
    'project-page': 'Eigenständige Projektseite recherchiert',
    'internal-design': 'Eigenes noch zu entwickelndes System',
}


def cell(value):
    return str(value).replace('|', '\\|').replace('\n', ' ').strip()


def render(rows, budgets):
    counts = Counter(row['selection'] for row in rows)
    categories = Counter(row['category'] for row in rows)
    statuses = Counter(row['status'] for row in rows)
    choice_groups = {}
    for row in rows:
        if row['choice_group']:
            choice_groups.setdefault(row['choice_group'], []).append(row['name'])
    out = [
        '# Vollständige aktuelle Mod-Wunschliste',
        '',
        'Stand der Auswahl: 2026-10-21. Zielplattform: **Minecraft 1.21.1 / NeoForge / Java 21**.',
        '',
        f'**{len(rows)} benannte Projekte**: {len(rows) - counts["custom"]} externe Kandidaten und '
        f'{counts["custom"]} eigene geplante Mod. Diese Datei enthält die gesamte aktuell benannte '
        'Auswahl einschließlich Alternativen und bedingter Bibliotheken. Sie ist eine Wunschliste, '
        'kein installiertes oder getestetes Modpack.',
        '',
        'Das langfristige Budget von **1.085 Mods / 1.000+** bleibt bestehen. Dafür sind noch weitere '
        'sinnvolle Projekte und echte Abhängigkeiten auszuwählen. Es gibt keine erfundenen Füllzeilen; '
        'die Zahl der gewünschten Kandidaten ist nicht die Zahl später gleichzeitig installierter Mods.',
        '',
        '**Leseschlüssel:** Kernwunsch = bevorzugte Grundlage; Ausbauwunsch = gewünschter zusätzlicher '
        'Inhalt; Alternative = nur nach Rollenentscheidung; Abhängigkeit = nur wenn ein gewählter Build '
        'sie benötigt; Legacy-Prüfung = offizielle Ausgabe/Fortsetzung zuerst suchen, andernfalls '
        'separaten erlaubten Port prüfen; Eigenentwicklung = im Projekt selbst bauen.',
        '',
        'Die Phase bezeichnet die geplante Aufnahme-/Spielrolle, kein zugesichertes Freischaltungsalter. '
        'Fundament bedeutet keine Anweisung, alle so markierten Projekte im ersten Batch zu installieren. '
        'Versionen, Loaderunterstützung, vollständige Abhängigkeiten, Lizenzen und Laufzeitkompatibilität '
        'bleiben bis zur echten Prüfung offen. Statusverteilung: '
        + ', '.join(f'**{count} × `{status}`**' for status, count in sorted(statuses.items())) + '.',
        '',
        '## Übersicht',
        '',
        '| Auswahl | Projekte |', '| --- | ---: |',
    ]
    out.extend(f'| {label} | {counts[key]} |' for key, label in SELECTIONS.items())
    out += ['', '| Kategorie | Benannte Kandidaten | Langfristiges Budget |', '| --- | ---: | ---: |']
    out.extend(f'| {name} | {categories[name]} | {budget} |' for name, budget in budgets['mods'].items())
    out += [
        '',
        'Die Kategorienbudgets sind Zielgrößen; Alternativen und konditionale Abhängigkeiten werden '
        'vor einer tatsächlichen Installation aufgelöst. Bibliotheken zählen nur als eindeutige wirklich '
        'benötigte Projekte. Mod-/Datapack-Ausgaben desselben Projekts werden nicht doppelt gezählt.',
        '',
        '## Entscheidungsgruppen',
        '',
        '| Gruppe | Benannte Optionen | Regel |', '| --- | --- | --- |',
    ]
    rules = {
        'primary_storage': 'AE2 bevorzugt; RS bleibt ein alternativer Gesamtzweig samt Add-ons.',
        'recipe_viewer': 'JEI bevorzugt; EMI nach Vergleich der tatsächlichen Rezeptintegration.',
        'renderer': 'Genau einen primären Renderer auswählen und mit dem Clientprofil testen.',
        'pack_menu': 'Eine primäre Menüplattform auswählen.',
        'ice_fire_distribution': 'Original oder Community-Ausgabe nach Versions-/Rechteprüfung.',
        'harvest_input': 'Ein konsistentes Ernteverhalten wählen.',
        'inventory_sorting': 'Überlappende Tastatur-/Inventaraktionen gegeneinander prüfen.',
        'multiblock_recipe_platform': 'Externe Rezeptplattform optional prüfen; Omega Core bleibt für eigene persistente Systeme vorgesehen.',
    }
    for group, names in sorted(choice_groups.items()):
        out.append(f'| `{group}` | {cell(", ".join(sorted(names)))} | {cell(rules[group])} |')
    out += [
        '',
        'Terrainmods sind bewusst keine einfache Entweder-oder-Gruppe: Ein getestetes Profil kann '
        'mehrere kombinieren. Feste Seeds, Ressourcenverteilung und Save-Verhalten entscheiden. '
        'JEI-/RS-/AE2-/Create-Add-ons werden nur mit ihrem gewählten Hauptsystem aufgenommen.',
        '',
        '## Umsetzung und Nachweise',
        '',
        'Die unveränderten bisherigen 51 Kandidaten-IDs bleiben im Register erhalten. Hinzugekommene '
        'Projekte sind Vorschläge dieser Ausarbeitung, keine behaupteten früheren Einzelentscheidungen '
        'des Teams. Namen und Links wurden anhand des offiziellen '
        '[ATM-Projektverzeichnisses](https://github.com/AllTheMods/ATM-10/blob/d12e72c4e5fd5f8f8eb9fd25914cf52384834ba2/MOD_ISSUES.md) '
        'und ergänzender Projektseiten recherchiert. Ein Eintrag in diesem Verzeichnis belegt weder '
        'eine aktuelle ATM-Installation noch Kompatibilität mit Omega.',
        '',
        'Die CSV führt pro Zeile `project_url`, `catalog_source`, `evidence_level`, Auswahl, Priorität, '
        'Phase und mögliche Elternkandidaten. `parent_candidates` beschreibt gewünschte Integrationsbeziehungen, '
        'keine bereits verifizierte Loader-Abhängigkeitsliste. Quellcode, Lizenz, konkrete Datei und Testevidenz '
        'müssen separat erfasst werden. Kein Projekt ist wegen eines beobachteten Links freigegeben.',
        '',
        '1. Mit `FND-01`/`FND-02` aus dem [Backlog](docs/backlog.md) beginnen; passende Builds und '
        'Pflichtabhängigkeiten auflösen.',
        '2. Als ersten spielbaren Inhalt Create, die benötigte Rezeptanzeige, Quests und wenige '
        'Bedienungshilfen aufnehmen. Das vollständige Kernprofil wird in mehreren Batches umgesetzt.',
        '3. In Batches von 5–15 neuen Projekten Client, Dedicated Server und Save/Reload testen.',
        '4. Erst danach Technik-/Magie-/Farmzweige, Weltprofil, weitere Dimensionen und Legacy-Piloten ausbauen.',
        '',
        'Vorgehen: [Mod-Auswahl](docs/mod-selection.md), [Legacy-Ports](docs/legacy-porting.md), '
        '[Qualität](docs/quality.md), [CLAUDE.md](CLAUDE.md).',
        '',
        '**Bearbeitung:** [planning/mod-candidates.csv](planning/mod-candidates.csv) ändern, dann '
        '`python3 tools/render_modlist.py` und `python3 tools/validate_plan.py` ausführen. '
        'Die folgenden Tabellen werden aus dieser einen Quelle erzeugt.',
    ]
    for category in budgets['mods']:
        out += ['', f'## {category}', '', '| Mod / Projektseite | Geplante Rolle | Auswahl / Priorität | Aufnahmephase | Hinweise |',
                '| --- | --- | --- | --- | --- |']
        for row in sorted((r for r in rows if r['category'] == category), key=lambda r: r['name'].casefold()):
            notes = [row['notes']] if row['notes'] else []
            if row['parent_candidates']:
                notes.append('Elternkandidaten: ' + row['parent_candidates'].replace('|', ', '))
            if row['choice_group']:
                notes.append('Gruppe: ' + row['choice_group'])
            out.append(
                f'| [{cell(row["name"])}]({row["project_url"]}) (`{row["id"]}`) '
                f'| {cell(row["role"])} | {SELECTIONS[row["selection"]]} / {row["priority"]} '
                f'| {PHASES[row["phase"]]} | {cell(" ".join(notes)) or "—"} |'
            )
    return '\n'.join(out) + '\n'


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Fail if MODLIST.md differs from the CSV')
    args = parser.parse_args()
    with (ROOT / 'planning/mod-candidates.csv').open(encoding='utf-8', newline='') as handle:
        rows = list(csv.DictReader(handle))
    budgets = json.loads((ROOT / 'planning/budgets.json').read_text(encoding='utf-8'))
    text = render(rows, budgets)
    output = ROOT / 'MODLIST.md'
    if args.check:
        if not output.exists() or output.read_text(encoding='utf-8') != text:
            parser.exit(1, 'MODLIST.md is stale; run python3 tools/render_modlist.py\n')
        print(f'PASS: MODLIST.md matches {len(rows)} candidate projects.')
    else:
        output.write_text(text, encoding='utf-8')
        print(f'Rendered MODLIST.md with {len(rows)} candidate projects.')


if __name__ == '__main__':
    main()
