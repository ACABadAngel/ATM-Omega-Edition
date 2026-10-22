# CLAUDE.md — Arbeitsanleitung für ATM: Omega Edition

## Auftrag und aktueller Stand

Du arbeitest im Repository `ACABadAngel/ATM-Omega-Edition` für Paul und seinen Kollegen. Entwickle ein sehr großes, extrem anspruchsvolles Expert-Modpack, in dem Technik, Magie, Erkundung, Bosse und Automation gemeinsam benötigt werden. Antworte und dokumentiere standardmäßig auf Deutsch; verwende stabile englische technische IDs.

**Aktuell: 0.4.0-alpha.1 mit 26 Moddateien, zwölf Items, 25 Custom-Rezepten und 58 bilingualen FTB-Quests.** Lies [STATUS.md](STATUS.md), [Installation](docs/installation.md) und den [Testbericht](tests/evidence/v0.4.0-alpha.1/REPORT.md). Linux-Backup/Restore und physische Wasserpresse sind geprüft; die elektrischen Prüfungen bleiben erhalten. Der arkane Abschnitt hat echte Source-/Imbuement-/Apparatus-/Spirit-Fire-Prüfungen und einen getrennten FTB-KillTask-Adaptertest. Nutzerfeedback zur vorherigen Alpha war positiv mit Rezeptproblemen; daraus keine vollständige Abnahme ableiten. Serverprüfungen ersetzen keinen Client-/Multiplayer-Playtest. Langfristige Ziele bleiben Planung.

Die vollständige Quelle steht unter `docs/source/original-plan.txt`. Die ausgearbeiteten Dokumente haben Vorrang bei Widersprüchen innerhalb der ursprünglichen Diskussion. Die ursprünglichen 10/12/13 Zeitalter wurden zu **12 Hauptzeitaltern plus optionalem Legacy-Epilog** vereinheitlicht. Namen, Mengen und Raten sind Designwerte, bis sie durch Playtests bestätigt sind.

## Lesereihenfolge

1. `STATUS.md`, `docs/masterplan.md`, `docs/decisions.md`.
2. `docs/architecture.md`, `docs/mod-selection.md`, `MODLIST.md`, `docs/quality.md`.
3. `docs/progression.md`, `docs/endgame.md`, `docs/omega-systems.md`.
4. `docs/quests.md`, `docs/worlds-and-bosses.md`, `docs/balancing.md`.
5. `docs/roadmap.md`, `docs/backlog.md`, `planning/`.

Lies vor einem Port zusätzlich `docs/legacy-porting.md`. Ein nachträglich angelegtes `AGENTS.md` oder eine Verzeichnisanleitung ist ebenfalls zu beachten.

## Verbindliche technische Ausgangsentscheidungen

- Ziel ist Minecraft **1.21.1 / NeoForge / Java 21**. Ein Versionswechsel benötigt eine dokumentierte Entscheidung mit Migrationskosten. Keine stillen Wechsel auf Fabric oder ein anderes Minecraft.
- Wähle genaue NeoForge-, Mod-, Gradle-Plugin- und Wrapper-Versionen anhand offizieller Quellen und eines echten Starts; für diese Alpha ist NeoForge 21.1.264 serverseitig gestartet; alle Modbuilds stehen in `pack/lock.json`.
- Baue ein eigenständiges Pack. Übernimm keine komplette ATM-Distribution oder fremde Assets ohne Prüfung der jeweiligen Rechte.
- Verwende KubeJS für registrierbare einfache Inhalte, Rezepte und Integrationen innerhalb der nachgewiesenen API. Komplexe persistente Maschinen, Netzwerkprotokolle, Boss-KI und Vertragsmessung gehören in `omega-core/`.
- Zwölf `omega:*`-IDs sind in `pack/overrides/kubejs/startup_scripts/omega_items.js` registriert; die übrigen sind Planung. Jede ID bekommt genau einen Eigentümer. Vorzugsweise besitzt Omega Core langfristig die Gameplay-Registries; beim Prototyp keine späteren Registry-Umbenennungen ohne Migration einführen.
- FTB Quests wird gegen eine festgelegte Version entwickelt. Die Alpha erzeugt vier SNBT-Kapitel aus `pack/content/quests.json`; die bisherigen IDs sind durch `tests/fixtures/alpha1_quest_ids.json` sowie `tests/fixtures/alpha2_quest_ids.json` und `tests/fixtures/alpha3_quest_ids.json` eingefroren. Das Format ist gegen den gepinnten Upstream-Quellcode und durch echten Serverimport geprüft. Die Editor-/GUI-Abnahme steht aus. Die Daten unter `planning/` sind weiterhin kein fertiges SNBT.
- `config/ftbquests/quests/` ist der vorgesehene Pack-Pfad, anhand der tatsächlich gewählten Version zu bestätigen. Ein lose angelegter Root-Ordner `ftbquests/` ist kein verifiziertes Format.
- Kein `latest`, keine frei geratenen Downloadlinks, Maven-Versionen, Item-IDs, Rezepttypen oder Event-APIs. Keine JARs unbekannter Herkunft. Keine CI, die angeblich einen Server startet, aber nur Dateien prüft.

## Nächster konkreter Auftrag

1. Importiere den Alpha-Client, prüfe deutsche/englische Texte, JEI, Ponder und alle zwölf Itemmodelle. Dokumentiere tatsächliche Ergebnisse unter `tests/evidence/`.
2. Spiele in frischer Welt den Pfad bis Mechanical Core durch: mehrere Primitive Cores, Wasserrad, angetriebene Presse, Pressed Core und 120-Platten-Lieferung. Teste Platzierung und tatsächliche Maschinenverarbeitung; der isolierte Servertest betreibt inzwischen eine echte wassergetriebene Presse. Er ersetzt keinen vollständigen Survival-Durchlauf.
3. Prüfe mit zwei echten Spielern: FTB-Teambeitritt/-austritt, Lieferfortschritt, Belohnungen, Disconnect und Serverneustart. Die vorhandene synthetische Teamprüfung ersetzt das nicht.
4. Prüfe die neue elektrische Kette bis Electrical Core und noch gemeldete doppelte/unlogische Rezepte anhand konkreter Eingaben. Der Brot-/Faser-Konflikt ist behoben; dies ist kein vollständiger Rezeptaudit. Native spätere Mekanism-Inhalte sind noch nicht sämtlich gegated. Der arkane Einstieg ist mit Ars Nouveau/Occultism implementiert: Source und Spirit Fire, Runenkristall, Binder, Wilden Chimera und Omega Arcane Core. Prüfe den vollständigen nativen Ritual-/Bossablauf im Client. Industrial Age ist mit AE2, Industrial Foregoing und Applied Mekanistics implementiert. Prüfe Latex/Kunststoff, native Prozessoren, konsumierenden Omega-Schaltkreis, ME-Item-/Chemielager sowie Controller. Danach Dimensional Age vorbereiten; neue Mods zunächst verifizieren.
5. Halte Lock, Modregister, generierte Quests und Dokumentation konsistent. Bewahre die veröffentlichten Registry-/Quest-IDs; vor Omega-Core-Übernahme die KubeJS-Registrierung derselben IDs gleichzeitig entfernen.

Wenn Launcher, Grafikausgabe, Downloadrechte oder eine Java-Laufzeit fehlen, liefere die durchführbaren Änderungen und eine genaue reproduzierbare manuelle Prüfung. Benenne die fehlende Prüfung ausdrücklich. Eine Kompilierung allein ist keine Spielabnahme.

## Arbeitsweise für spätere Aufgaben

- Wähle ein klar begrenztes Backlog-Paket und prüfe dessen Voraussetzungen. Bearbeite notwendige vorbereitende Schritte eigenständig.
- Implementiere kleine vertikale Abschnitte mit tatsächlichem Spielnutzen; erzeuge keine 3.000 generischen Quests oder 1.000 leeren Modzeilen zur Erfüllung einer Zahl.
- Neue Mods in Batches von 5–15 aufnehmen, einschließlich neu eingeführter transitiver Abhängigkeiten. Worldgen, Renderer und große Ports separat integrieren.
- `MODLIST.md` ist die vollständige aktuell benannte Wunschliste, erzeugt aus `planning/mod-candidates.csv`. Kernwünsche sind bevorzugte Rollen, keine Testfreigabe. Bibliotheken nur bei tatsächlichem Bedarf aufnehmen; Alternativzweige wie Refined Storage und AE2 nicht blind gemeinsam installieren. `parent_candidates` sind Designbeziehungen, keine verifizierten Loader-Abhängigkeiten.
- Kandidaten zuerst in der CSV bearbeiten und danach `python3 tools/render_modlist.py` ausführen. Projektnamen und Links belegen keine 1.21.1-/NeoForge-Kompatibilität. `own-development` bezeichnet die geplante eigene Omega-Core-Mod.
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

## Hinweise zum arkanen Stand

Lies `docs/arcane-age.md`. `omega:arcane_core` ist das Omega-Meilenstein-Item; `ars_nouveau:arcane_core` bleibt der native Apparatus-Basisblock. Imbuement-Katalysatoren bleiben erhalten, Apparatus-Zutaten werden verbraucht. Ars 5.13.3 sammelt in der Imbuement Chamber passiv Source; keine unzutreffende harte Generatorpflicht behaupten. Der Apparatus bezahlt 1000 Source pro Binder.

Die Wilden Chimera (`ars_nouveau:wilden_boss`) ist nur der klar benannte Ancient-Titan-Prototyp. Keine eigene Boss-KI, kein eigener Titan-Nachweis und keine geschützte Arena sind vorhanden. FTB zählt den nativen Entitytyp; das Rezept verbraucht Wilden Tribute. Die Questprüfung ist kein manipulationsgeschütztes Craft-Gate: gehandelte Drops sind weiterhin möglich. Eigene Core-Teamdaten folgen später.

Die veröffentlichte Quest `1000000000000025` hat zwei Aufgaben: Tribute-Item und Boss-Kill. Nicht umsortieren, wenn dadurch Task-IDs wechseln. Die zwei goldenen Occultism-Schalenvarianten und der Enchanting Apparatus haben Electrical-Core-Rezepte; spätere native Erwerbswege sind noch nicht umfassend auditiert. Lizenzlabels von Ars unterscheiden sich zwischen JAR und Modrinth; im Lock dokumentiert, keine fremden JARs/Assets verteilen.

## Hinweise zum industriellen Stand

Lies `docs/industrial-age.md`. 20 neue Quests ergänzen die 38 eingefrorenen bisherigen Quests. Die zwölf `omega:*`-IDs bleiben KubeJS-eigen. Der Industrieschaltkreis nutzt den nativen AE2-Inscriber im Modus `press`: Kunststoff oben, Electrical Core Mitte, Reinforced Alloy unten; beide Plattenzutaten werden verbraucht. Native Prozessorformen bleiben bei ihren ursprünglichen `inscribe`-Rezepten erhalten.

Die AE2-Acceptor-Umwandlung Block ↔ Kabelteil ist absichtlich erhalten. Nur das native Grundrezept `ae2:network/blocks/energy_energy_acceptor` wurde ersetzt. Ein pauschales Entfernen aller Acceptor-Outputs würde die Rückumwandlung zerstören. Der Controller benötigt Industrial Core; ein kleines Netz ohne Controller bleibt als Bootstrap erreichbar. Der Core verbraucht ausschließlich nackte 1k-Komponente und Chemiezellgehäuse, keine gefüllten Zellen.

Industrial Foregoing 3.6.27 erzeugt direkt Dry Rubber aus 750 mB Latex und 500 mB Wasser; keine alte Tiny-Rubber-Kette dokumentieren. Ein eigener Curios-Datenoverride entfernt nur die nicht registrierten Referenzen `example` und `feet` aus der IF-Entity-Konfiguration. Keine künstlichen Slots zur Unterdrückung der Fehlermeldungen hinzufügen. Titanium hat widersprüchliche LGPL-/MIT-Metadaten; im Lock festgehalten. Keine Fremd-JARs oder dekompilierten Quellen einchecken.
