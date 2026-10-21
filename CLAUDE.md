# CLAUDE.md — Arbeitsanleitung für ATM: Omega Edition

## Auftrag und aktueller Stand

Du arbeitest im Repository `ACABadAngel/ATM-Omega-Edition` für Paul und seinen Kollegen. Entwickle ein sehr großes, extrem anspruchsvolles Expert-Modpack, in dem Technik, Magie, Erkundung, Bosse und Automation gemeinsam benötigt werden. Antworte und dokumentiere standardmäßig auf Deutsch; verwende stabile englische technische IDs.

**Dieser Commit liefert Planung und Planungsprüfung. Es gibt noch kein startfähiges Pack.** Lies [STATUS.md](STATUS.md), bevor du Implementierung behauptest. Die Planung darf konkretisiert werden; ambitionierte Ziele dürfen nicht stillschweigend zu bereits erreichten Eigenschaften werden.

Die vollständige Quelle steht unter `docs/source/original-plan.txt`. Die ausgearbeiteten Dokumente haben Vorrang bei Widersprüchen innerhalb der ursprünglichen Diskussion. Die ursprünglichen 10/12/13 Zeitalter wurden zu **12 Hauptzeitaltern plus optionalem Legacy-Epilog** vereinheitlicht. Namen, Mengen und Raten sind Designwerte, bis sie durch Playtests bestätigt sind.

## Lesereihenfolge

1. `STATUS.md`, `docs/masterplan.md`, `docs/decisions.md`.
2. `docs/architecture.md`, `docs/mod-selection.md`, `docs/quality.md`.
3. `docs/progression.md`, `docs/endgame.md`, `docs/omega-systems.md`.
4. `docs/quests.md`, `docs/worlds-and-bosses.md`, `docs/balancing.md`.
5. `docs/roadmap.md`, `docs/backlog.md`, `planning/`.

Lies vor einem Port zusätzlich `docs/legacy-porting.md`. Ein nachträglich angelegtes `AGENTS.md` oder eine Verzeichnisanleitung ist ebenfalls zu beachten.

## Verbindliche technische Ausgangsentscheidungen

- Ziel ist Minecraft **1.21.1 / NeoForge / Java 21**. Ein Versionswechsel benötigt eine dokumentierte Entscheidung mit Migrationskosten. Keine stillen Wechsel auf Fabric oder ein anderes Minecraft.
- Wähle genaue NeoForge-, Mod-, Gradle-Plugin- und Wrapper-Versionen anhand offizieller Quellen und eines echten Starts; derzeit ist keine Buildnummer freigegeben.
- Baue ein eigenständiges Pack. Übernimm keine komplette ATM-Distribution oder fremde Assets ohne Prüfung der jeweiligen Rechte.
- Verwende KubeJS für registrierbare einfache Inhalte, Rezepte und Integrationen innerhalb der nachgewiesenen API. Komplexe persistente Maschinen, Netzwerkprotokolle, Boss-KI und Vertragsmessung gehören in `omega-core/`.
- Die Planungs-IDs `omega:*` sind zukünftige Registry-IDs, noch nicht registrierte Items. Jede ID bekommt genau einen Eigentümer. Vorzugsweise besitzt Omega Core langfristig die Gameplay-Registries; beim Prototyp keine späteren Registry-Umbenennungen ohne Migration einführen.
- FTB Quests wird gegen eine festgelegte Version entwickelt. Erzeuge ein Musterkapitel im Editor und verwende dessen Format. Die Daten unter `planning/` dürfen nicht als fertiges SNBT kopiert werden.
- `config/ftbquests/quests/` ist der vorgesehene Pack-Pfad, anhand der tatsächlich gewählten Version zu bestätigen. Ein lose angelegter Root-Ordner `ftbquests/` ist kein verifiziertes Format.
- Kein `latest`, keine frei geratenen Downloadlinks, Maven-Versionen, Item-IDs, Rezepttypen oder Event-APIs. Keine JARs unbekannter Herkunft. Keine CI, die angeblich einen Server startet, aber nur Dateien prüft.

## Nächster konkreter Auftrag

Bearbeite zuerst **FND-01**, danach **FND-02** und **MOD-01** aus `docs/backlog.md`:

1. Prüfe die offiziellen 1.21.1-Projekte für NeoForge, KubeJS, FTB Quests und deren Pflichtabhängigkeiten. Dokumentiere Version, Quelle, Lizenz und Client-/Serverrolle im Modregister.
2. Entscheide das reproduzierbare Pack-Werkzeug anhand von `ADR-02`; lege einen echten Lock-Stand an. Das Kandidatenregister bleibt vom installierten Manifest getrennt.
3. Erzeuge eine minimale Client- und dedizierte Serverinstanz und starte beide. Speichere bereinigte Protokolle, genaue Befehle, Hardware und Versionsstand unter `tests/evidence/`.
4. Implementiere **nur den ersten vertikalen Abschnitt**: Survival → mechanische Produktion → Primitive Core → Mechanical Core, mit mindestens 10 sinnvollen Quests und einem messbaren Automationsziel.
5. Prüfe in frischer Welt, nach Neustart und mit zwei Spielern. Aktualisiere `STATUS.md`, Register und Abnahmestatus.

Wenn Launcher, Grafikausgabe, Downloadrechte oder eine Java-Laufzeit fehlen, liefere die durchführbaren Änderungen und eine genaue reproduzierbare manuelle Prüfung. Benenne die fehlende Prüfung ausdrücklich. Eine Kompilierung allein ist keine Spielabnahme.

## Arbeitsweise für spätere Aufgaben

- Wähle ein klar begrenztes Backlog-Paket und prüfe dessen Voraussetzungen. Bearbeite notwendige vorbereitende Schritte eigenständig.
- Implementiere kleine vertikale Abschnitte mit tatsächlichem Spielnutzen; erzeuge keine 3.000 generischen Quests oder 1.000 leeren Modzeilen zur Erfüllung einer Zahl.
- Neue Mods in Batches von 5–15 aufnehmen, einschließlich neu eingeführter transitiver Abhängigkeiten. Worldgen, Renderer und große Ports separat integrieren.
- Prüfe alternative Erwerbswege: Loot, Trades, Recycling, Saatgut, Bienen, EMC-ähnliche Systeme, Dimensionsabbau und Dungeon-Belohnungen dürfen Gates nicht umgehen.
- Vor jedem Haupt-Gate muss dessen eigene Herstellungsmaschine erreichbar sein. Omega Star darf nicht den Omega Reactor für ihren ersten Craft benötigen; Infinity Architect darf nicht den Infinity Omega Star zum Betreten seiner Arena verlangen.
- Halte Planung und Laufzeitdaten konsistent. Aktualisiere `planning/ages.json`, `planning/endgame.json` und `planning/quest-samples.csv`, wenn sich die zugehörigen Regeln ändern.
- Erhalte feste Registry-, Quest- und Team-IDs. Entwerfe Save-Migrationen, bevor du veröffentlichte IDs oder Semantik änderst. Backups vor Weltmigrationen.
- Clientklassen dürfen den Dedicated Server nicht laden. Fortschritt, Maschinen und Belohnungen werden serverseitig geprüft. Niemals dem Client allein vertrauen.
- Arbeitskopien, Crashlogs und Schlüssel nicht einchecken. Modlizenzen bleiben den jeweiligen Autoren zugeordnet. Ports bekommen Upstream-Provenienz und eine eigene Regressionstestliste.

## Prüfungen und Definition of Done

Für reine Planungsänderungen: `python3 tools/validate_plan.py`, relevante Querverweise lesen und geänderte Designannahmen aktualisieren.

Für Laufzeitänderungen zusätzlich nach Verfügbarkeit: reproduzierbarer Build, Clientstart, Serverstart, frische Welt, Speichern/Laden, relevante Rezepte und Teamtests. Verwende erst nach dem echten MDK-Bootstrap dessen dokumentierte Gradle-Befehle; in diesem Stand existiert kein `gradlew`.

Ein Paket ist erst `done`, wenn seine Abnahme erfüllt ist und die Evidenz verlinkt wurde. Unausgeführte Prüfungen heißen `not_run`; `candidate`, `ported` und `compiled` sind keine Synonyme für `approved`.

Am Ende jeder Lieferung berichten: geändert, geprüft, noch offen, nächstes sinnvolles Paket. Pfade, Versionen und Befehle nennen. Keine Aussage „fertiges Modpack“, solange Installation und kompletter Progressionspfad nicht getestet sind.
