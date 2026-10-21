# ATM: Omega Edition

Ein eigenständiges Minecraft-Expert-Modpack: Technik, Magie, Erkundung, Kampf und Landwirtschaft bilden eine gemeinsame Progression bis zur Infinity Omega Star.

**Stand: 21. Oktober 2026 · Planungsgrundlage, noch kein installierbares Modpack.** Dieses Repository enthält den ausgearbeiteten Entwurf und die Arbeitsgrundlage für die Umsetzung. Es enthält aktuell keine freigegebenen Mod-JARs, keinen Launcher-Export und keine getestete Omega-Core-Mod. Der Name ist ein Arbeitstitel; eine Zugehörigkeit zu All the Mods wird nicht behauptet.

## Zielbild

| Bereich | Designziel für das vollständige Pack |
| --- | --- |
| Umfang | 1.085 Mods einschließlich tatsächlich benötigter Bibliotheken; mindestens 1.000 als langfristiges Ziel |
| Schwierigkeit | Extremes Expert-Pack, komplexe Automation statt wiederholtem Handgrind |
| Progression | 12 Hauptzeitalter, optionaler Legacy-Ascension-Epilog |
| Quests | 3.000 sorgfältig integrierte Quests |
| Endgame | Omega Star → Transcendence Star → Infinity Omega Star → Infinity Core |
| Erkundung | 15+ eigenständige Dimensionen; Arenen zählen separat |
| Kampf | 25+ integrierte Begegnungen und 5 eigene Bosskonzepte |
| Spielzeit | 500–1.000+ Stunden als Hypothese für vollständige Meisterung |
| Technische Basis | Minecraft 1.21.1, NeoForge, Java 21; konkrete Builds noch auszuwählen |

Alle Zahlen beschreiben Ziele, keine getesteten Eigenschaften. Die Modanzahl wird nicht durch funktionslose Füllmods erreicht. Ältere Mods können über das [Omega Legacy Project](docs/legacy-porting.md) aufgenommen werden.

## Hier anfangen

Für den Kollegen mit Claude: **[CLAUDE.md](CLAUDE.md)** lesen und mit Aufgabe `FND-01` aus dem [Backlog](docs/backlog.md) beginnen. Die erste spielbare Lieferung ist ein kurzer Survival→Mechanical-Abschnitt; danach folgt eine vollständige, zunächst komprimierte Kette bis zur ersten Omega Star.

| Dokument | Inhalt |
| --- | --- |
| [Masterplan](docs/masterplan.md) | Umfang, Leitlinien, Spielablauf, Prioritäten und Entscheidungen |
| [Feature-Katalog](docs/features.md) | Geplante Features mit IDs, Abhängigkeiten und Abnahme |
| [Progression](docs/progression.md) | Alle Zeitalter, Freischaltungen und Schutz vor Softlocks |
| [Endgame & Rezepte](docs/endgame.md) | Komponenten, Sternrezepte, Energie, Zeit und Bootstrap |
| [Maschinen & Systeme](docs/omega-systems.md) | Eigene Maschinen, Forschung, Verträge, Rüstung, Zustandsmodelle |
| [Dimensionen & Bosse](docs/worlds-and-bosses.md) | Expeditionsrollen, Arenen und fünf eigene Bossentwürfe |
| [Quests](docs/quests.md) | 3.000er-Budget, Kapitelstruktur und ausführbare spätere Nachweise |
| [Mod-Auswahl](docs/mod-selection.md) | Kategorienbudget, Kandidaten und Aufnahmeverfahren |
| [Legacy-Portierung](docs/legacy-porting.md) | Ports, Quellcode, Abhängigkeiten und Testmatrix |
| [Architektur](docs/architecture.md) | Ordner, Zuständigkeiten, Daten und Versionierung |
| [Balancing](docs/balancing.md) | Automationsraten, Abkürzungen, Multiplayer und Ökonomie |
| [Qualität & Performance](docs/quality.md) | Messverfahren, Testfälle und Release-Gates |
| [Roadmap](docs/roadmap.md) | Phasen, Lieferungen, Aufwandsspannen und Stop-Kriterien |
| [Backlog](docs/backlog.md) | Priorisierte, an Claude übergebbare Arbeitspakete |
| [Entscheidungen & Risiken](docs/decisions.md) | Annahmen, offene Entscheidungen und Ausweichpfade |
| [Quellen](docs/sources.md) | Primärdokumentation und Grenzen der Verifikation |
| [Originalplan](docs/source/original-plan.txt) | Unveränderte Vorlage inklusive Legacy-Nachtrag |

## Struktur und lokale Prüfung

`planning/` enthält maschinenlesbare Planungsdaten: Zeitalter, Mod-Kandidaten, Quest-Beispiele und Budgets. Diese Dateien sind **keine** Minecraft-, KubeJS- oder FTB-Quests-Laufzeitkonfiguration.

```sh
python3 tools/validate_plan.py
```

Unter Windows kann alternativ `py -3 tools/validate_plan.py` verwendet werden. Die Prüfung benötigt nur die Python-Standardbibliothek und wird auch in GitHub Actions ausgeführt. Sie prüft Summen, Referenzen, Progressionszyklen, Rezeptarithmetik und interne Markdown-Links. Ein erfolgreicher Lauf belegt keine Spielkompatibilität.

Die eigentlichen Pack-Ordner und das Java-Projekt werden erst mit verifizierten Toolchain- und Modversionen angelegt. Der aktuelle Implementierungsstand steht in [STATUS.md](STATUS.md).
