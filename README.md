# ATM: Omega Edition

Ein eigenständiges Minecraft-Expert-Modpack: Technik, Magie, Erkundung, Kampf und Landwirtschaft bilden eine gemeinsame Progression bis zur Infinity Omega Star.

**Version 0.2.0-alpha.1 · 21. Oktober 2026.** Survival → Primitive Core → Create-Wasserkraft → Mechanical Core → Mekanism-Stromnetz → Electrical Core. Enthalten sind 15 festgelegte Moddateien, 22 Quests auf Deutsch und Englisch, sieben eigene Items und elf Custom-Rezepte. Die [neue Evidenz](tests/evidence/v0.2.0-alpha.1/REPORT.md) dokumentiert Rezept-Eindeutigkeit, echten Kohlebetrieb, Infusion, Stahl, Energiespeicherung und Save-Erhalt.

**Starten:** [Installationsanleitung](docs/installation.md) lesen. Den Client-ZIP im CurseForge-Minecraft-Launcher importieren. Java 21 verwenden. Exporte gibt es als [GitHub-Actions-Artefakt](https://github.com/ACABadAngel/ATM-Omega-Edition/actions/workflows/build-alpha.yml) oder lokal mit `python3 tools/pack.py build`.

Clientdarstellung, Questoberfläche und ein echter Zwei-Spieler-Durchlauf sind noch nicht geprüft. Dies ist ein früher Teststand. Der Name ist ein Arbeitstitel; eine Zugehörigkeit zu All the Mods wird nicht behauptet.

Neu: [Elektrische Werkstatt](docs/electrical-age.md) und behobener Brot-/Faser-Rezeptkonflikt. [Erste Fabrik](docs/first-factory.md) und [Backup/Restore](docs/backups.md) bleiben als Grundlage erhalten. Vor Übernahme einer bestehenden Welt die [Update-Anleitung](docs/installation.md) lesen.

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
| Technische Basis | Minecraft 1.21.1, NeoForge 21.1.264, Java 21 |

Alle Zahlen beschreiben Ziele, keine getesteten Eigenschaften. Die Modanzahl wird nicht durch funktionslose Füllmods erreicht. Ältere Mods können über das [Omega Legacy Project](docs/legacy-porting.md) aufgenommen werden.

## Hier anfangen

Für den Kollegen mit Claude: **[CLAUDE.md](CLAUDE.md)** und [STATUS.md](STATUS.md) lesen. Zuerst die offene Client-/Multiplayer-Abnahme der Alpha durchführen, danach den arkanen Einstieg vorbereiten. Der vollständige Entwurf bis zur Infinity Omega Star bleibt das langfristige Ziel.

Die **[vollständige aktuelle Mod-Wunschliste](MODLIST.md)** enthält 473 benannte Projekte einschließlich Alternativen, bedingter Bibliotheken und der eigenen Omega-Core-Mod. Jedes Projekt hat einen Link, einen Zweck, eine Aufnahmephase und eine Auswahlkennzeichnung. Der Ausbau auf 1.000+ bleibt ein langfristiges Ziel; die Wunschliste behauptet keine bereits getestete Installation.

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
| [Vollständige Mod-Wunschliste](MODLIST.md) | Alle 473 aktuell benannten Projekte, Zwecke, Quellen und Auswahlregeln |
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

Die Modliste wird aus `planning/mod-candidates.csv` erzeugt: nach Änderungen `python3 tools/render_modlist.py` ausführen. Der Validator prüft auch Projektduplikate, Elternreferenzen und die Übereinstimmung zwischen CSV und sichtbarer Wunschliste.

`pack/lock.json` definiert die 15 installierten Moddateien der Alpha; die 473 Wünsche bleiben ein separates Register. `pack/content/quests.json` erzeugt das echte Questbuch. Eine eigene Java-Mod existiert noch nicht.

```sh
python3 tools/pack.py validate
python3 tools/generate_quests.py --check
python3 -m unittest discover -s tests -v
python3 tools/pack.py build
```

Siehe [Alpha-Änderungen](docs/releases/0.2.0-alpha.1.md), [Testbericht](tests/evidence/v0.2.0-alpha.1/REPORT.md) und [STATUS.md](STATUS.md).
