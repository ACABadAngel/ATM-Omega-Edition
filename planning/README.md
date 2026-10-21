# Planungsdaten

Diese Daten beschreiben den Entwurf. Sie sind kein installierbares Manifest und keine ladbaren Minecraft-Konfigurationen.

| Datei | Zweck | Bearbeitungsregel |
| --- | --- | --- |
| [budgets.json](budgets.json) | Kategorienbudgets für 1.085 Mods und 3.000 Quests | Kategorie genau einmal zählen; Tabellen in den Dokumenten mitändern |
| [ages.json](ages.json) | Zwölf Hauptzeitalter und optionaler Epilog | Stabile IDs, keine Zyklen, Meilenstein-Beispiele aktualisieren |
| [endgame.json](endgame.json) | Drei Sternrezepte und Bootstrap-Arithmetik | Ganze positive Mengen; FE und Ticks nicht mit Sekunden verwechseln |
| [mod-candidates.csv](mod-candidates.csv) | 473 benannte Projekte und ihre Rollen | Kanonische Quelle für [MODLIST.md](../MODLIST.md); exakte Builds/Lizenzen und Laufzeittests bleiben offen |
| [quest-samples.csv](quest-samples.csv) | 42 repräsentative Questentwürfe | Lesbare IDs; Abhängigkeiten mit `|`; Nachweisart korrekt benennen |

`kind: design_only` kennzeichnet JSON-Entwürfe. `schema_version` versioniert das Planungsformat, nicht die spätere Minecraft-Save-Struktur. In CSV-Dateien ist der Status explizit; alle aktuellen Modzeilen stehen auf `candidate`, alle Questbeispiele auf `design`.

`target_minecraft` und `target_loader` beschreiben das gewünschte Ziel einer Prüfung, nicht die bestätigte Unterstützung eines Fremdprojekts. `native-first` fordert die Suche nach einer passenden offiziellen Ausgabe; `port-assessment` beginnt mit einem historischen Port-Dossier. Beide Wege können an fehlenden Quellen, Rechten, Abhängigkeiten oder technischen Tests scheitern.

`own-development` ist der separate Weg für die eigene geplante Omega-Core-Mod. `selection` unterscheidet `core`, `expansion`, `alternative`, `dependency`, `legacy` und `custom`. `priority` und `phase` steuern die spätere Aufnahme, ohne alle Projekte derselben Phase in einen einzigen Batch zu zwingen.

`project_url` verlinkt die recherchierte Projektidentität; `catalog_source` dokumentiert deren Fundstelle, bei Katalogeinträgen mit festem Upstream-Commit. `evidence_level` unterscheidet `catalog-listed`, `project-page` und `internal-design`. Ein Projektlink ist kein geprüfter Quellcode-/Lizenznachweis und befüllt deshalb nicht automatisch `source_url`, `license` oder `exact_version`.

`choice_group` bezeichnet Rollenentscheidungen, z. B. einen primären Renderer. `parent_candidates` enthält mit `|` getrennte IDs von gewünschten Hauptsystemen; die tatsächlich von einem Modbuild geforderten Bibliotheken stehen erst nach Auflösung in `dependencies` bzw. im Lockfile. Die kompletten ursprünglichen 51 Kandidaten-IDs sind erhalten.

Der Kandidatenstatus `approved` benötigt genaue Version, Quelle, Lizenz, Verteilstatus, Abhängigkeiten, Client-/Serverseite und Testevidenz. Ein zukünftiges installiertes Lockfile bleibt getrennt. Ein CSV-Status ersetzt keine tatsächliche Testdurchführung.

Die Questziele enthalten teilweise nur Rollenbezeichnungen. Auch `omega:*` ist in diesem Stand eine geplante Registry, kein Beweis für registrierte Items. Vor der Umsetzung müssen Rollen und APIs gegen echte Modversionen aufgelöst werden. Die sichtbare erste Zehnerfolge bietet den Inhalt für den MVP, ist aber noch kein FTB-SNBT.

Nach Kandidatenänderungen vom Repository-Hauptverzeichnis aus `python3 tools/render_modlist.py` ausführen, dann `python3 tools/validate_plan.py`. Mit `python3 tools/render_modlist.py --check` lässt sich die erzeugte Liste ohne Schreibzugriff prüfen. Der Validator prüft auch Duplikate, Auswahl-/Quellenkennzeichnungen, Elternreferenzen und die Übereinstimmung der sichtbaren Liste mit der CSV. Der vollständige spätere Rezeptgraph und Spieltests bleiben eigene Aufgaben.
