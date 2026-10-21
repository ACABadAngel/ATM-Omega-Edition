# Planungsdaten

Diese Daten beschreiben den Entwurf. Sie sind kein installierbares Manifest und keine ladbaren Minecraft-Konfigurationen.

| Datei | Zweck | Bearbeitungsregel |
| --- | --- | --- |
| [budgets.json](budgets.json) | Kategorienbudgets für 1.085 Mods und 3.000 Quests | Kategorie genau einmal zählen; Tabellen in den Dokumenten mitändern |
| [ages.json](ages.json) | Zwölf Hauptzeitalter und optionaler Epilog | Stabile IDs, keine Zyklen, Meilenstein-Beispiele aktualisieren |
| [endgame.json](endgame.json) | Drei Sternrezepte und Bootstrap-Arithmetik | Ganze positive Mengen; FE und Ticks nicht mit Sekunden verwechseln |
| [mod-candidates.csv](mod-candidates.csv) | 51 konkrete Kandidaten und ihre Rollen | Leere Versions-/Lizenz-/Quellfelder bedeuten ungeprüft |
| [quest-samples.csv](quest-samples.csv) | 42 repräsentative Questentwürfe | Lesbare IDs; Abhängigkeiten mit `|`; Nachweisart korrekt benennen |

`kind: design_only` kennzeichnet JSON-Entwürfe. `schema_version` versioniert das Planungsformat, nicht die spätere Minecraft-Save-Struktur. In CSV-Dateien ist der Status explizit; alle aktuellen Modzeilen stehen auf `candidate`, alle Questbeispiele auf `design`.

`target_minecraft` und `target_loader` beschreiben das gewünschte Ziel einer Prüfung, nicht die bestätigte Unterstützung eines Fremdprojekts. `native-first` fordert die Suche nach einer passenden offiziellen Ausgabe; `port-assessment` beginnt mit einem historischen Port-Dossier. Beide Wege können an fehlenden Quellen, Rechten, Abhängigkeiten oder technischen Tests scheitern.

Der Kandidatenstatus `approved` benötigt genaue Version, Quelle, Lizenz, Verteilstatus, Abhängigkeiten, Client-/Serverseite und Testevidenz. Ein zukünftiges installiertes Lockfile bleibt getrennt. Ein CSV-Status ersetzt keine tatsächliche Testdurchführung.

Die Questziele enthalten teilweise nur Rollenbezeichnungen. Auch `omega:*` ist in diesem Stand eine geplante Registry, kein Beweis für registrierte Items. Vor der Umsetzung müssen Rollen und APIs gegen echte Modversionen aufgelöst werden. Die sichtbare erste Zehnerfolge bietet den Inhalt für den MVP, ist aber noch kein FTB-SNBT.

Nach Änderungen vom Repository-Hauptverzeichnis aus `python3 tools/validate_plan.py` ausführen. Der Validator prüft bewusst die Konsistenz dieses Entwurfs; der spätere vollständige Rezeptgraph und Spieltests bleiben eigene Aufgaben.
