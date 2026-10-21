# Vollständige aktuelle Mod-Wunschliste

Stand der Auswahl: 2026-10-21. Zielplattform: **Minecraft 1.21.1 / NeoForge / Java 21**.

**473 benannte Projekte**: 472 externe Kandidaten und 1 eigene geplante Mod. Diese Datei enthält die gesamte aktuell benannte Auswahl einschließlich Alternativen und bedingter Bibliotheken. Sie ist eine Wunschliste, kein installiertes oder getestetes Modpack.

Das langfristige Budget von **1.085 Mods / 1.000+** bleibt bestehen. Dafür sind noch weitere sinnvolle Projekte und echte Abhängigkeiten auszuwählen. Es gibt keine erfundenen Füllzeilen; die Zahl der gewünschten Kandidaten ist nicht die Zahl später gleichzeitig installierter Mods.

**Leseschlüssel:** Kernwunsch = bevorzugte Grundlage; Ausbauwunsch = gewünschter zusätzlicher Inhalt; Alternative = nur nach Rollenentscheidung; Abhängigkeit = nur wenn ein gewählter Build sie benötigt; Legacy-Prüfung = offizielle Ausgabe/Fortsetzung zuerst suchen, andernfalls separaten erlaubten Port prüfen; Eigenentwicklung = im Projekt selbst bauen.

Die Phase bezeichnet die geplante Aufnahme-/Spielrolle, kein zugesichertes Freischaltungsalter. Fundament bedeutet keine Anweisung, alle so markierten Projekte im ersten Batch zu installieren. Versionen, Loaderunterstützung, vollständige Abhängigkeiten, Lizenzen und Laufzeitkompatibilität bleiben bis zur echten Prüfung offen. Statusverteilung: **473 × `candidate`**.

## Übersicht

| Auswahl | Projekte |
| --- | ---: |
| Kernwunsch | 22 |
| Ausbauwunsch | 354 |
| Alternative | 23 |
| Abhängigkeit | 67 |
| Legacy-Prüfung | 6 |
| Eigenentwicklung | 1 |

| Kategorie | Benannte Kandidaten | Langfristiges Budget |
| --- | ---: | ---: |
| Technik | 51 | 145 |
| Bibliotheken | 67 | 135 |
| Exploration | 36 | 115 |
| Magie | 28 | 105 |
| Quality of Life | 67 | 95 |
| Bauen | 47 | 95 |
| Worldgen | 12 | 75 |
| Kampf & RPG | 33 | 75 |
| Landwirtschaft | 27 | 65 |
| Lager & Logistik | 53 | 55 |
| Integration | 23 | 55 |
| Performance | 21 | 35 |
| Audio & Grafik | 8 | 35 |

Die Kategorienbudgets sind Zielgrößen; Alternativen und konditionale Abhängigkeiten werden vor einer tatsächlichen Installation aufgelöst. Bibliotheken zählen nur als eindeutige wirklich benötigte Projekte. Mod-/Datapack-Ausgaben desselben Projekts werden nicht doppelt gezählt.

## Entscheidungsgruppen

| Gruppe | Benannte Optionen | Regel |
| --- | --- | --- |
| `harvest_input` | Harvest with ease, Reap Mod | Ein konsistentes Ernteverhalten wählen. |
| `ice_fire_distribution` | Ice and Fire, IceAndFire Community Edition | Original oder Community-Ausgabe nach Versions-/Rechteprüfung. |
| `inventory_sorting` | Inventory Essentials, Inventory Tweaks - ReFoxed | Überlappende Tastatur-/Inventaraktionen gegeneinander prüfen. |
| `multiblock_recipe_platform` | Modular Machinery Reborn | Externe Rezeptplattform optional prüfen; Omega Core bleibt für eigene persistente Systeme vorgesehen. |
| `pack_menu` | FancyMenu, PackMenu | Eine primäre Menüplattform auswählen. |
| `primary_storage` | Applied Energistics 2, Refined Storage | AE2 bevorzugt; RS bleibt ein alternativer Gesamtzweig samt Add-ons. |
| `recipe_viewer` | EMI, Just Enough Items | JEI bevorzugt; EMI nach Vergleich der tatsächlichen Rezeptintegration. |
| `renderer` | Embeddium, Sodium | Genau einen primären Renderer auswählen und mit dem Clientprofil testen. |

Terrainmods sind bewusst keine einfache Entweder-oder-Gruppe: Ein getestetes Profil kann mehrere kombinieren. Feste Seeds, Ressourcenverteilung und Save-Verhalten entscheiden. JEI-/RS-/AE2-/Create-Add-ons werden nur mit ihrem gewählten Hauptsystem aufgenommen.

## Umsetzung und Nachweise

Die unveränderten bisherigen 51 Kandidaten-IDs bleiben im Register erhalten. Hinzugekommene Projekte sind Vorschläge dieser Ausarbeitung, keine behaupteten früheren Einzelentscheidungen des Teams. Namen und Links wurden anhand des offiziellen [ATM-Projektverzeichnisses](https://github.com/AllTheMods/ATM-10/blob/d12e72c4e5fd5f8f8eb9fd25914cf52384834ba2/MOD_ISSUES.md) und ergänzender Projektseiten recherchiert. Ein Eintrag in diesem Verzeichnis belegt weder eine aktuelle ATM-Installation noch Kompatibilität mit Omega.

Die CSV führt pro Zeile `project_url`, `catalog_source`, `evidence_level`, Auswahl, Priorität, Phase und mögliche Elternkandidaten. `parent_candidates` beschreibt gewünschte Integrationsbeziehungen, keine bereits verifizierte Loader-Abhängigkeitsliste. Quellcode, Lizenz, konkrete Datei und Testevidenz müssen separat erfasst werden. Kein Projekt ist wegen eines beobachteten Links freigegeben.

1. Mit `FND-01`/`FND-02` aus dem [Backlog](docs/backlog.md) beginnen; passende Builds und Pflichtabhängigkeiten auflösen.
2. Als ersten spielbaren Inhalt Create, die benötigte Rezeptanzeige, Quests und wenige Bedienungshilfen aufnehmen. Das vollständige Kernprofil wird in mehreren Batches umgesetzt.
3. In Batches von 5–15 neuen Projekten Client, Dedicated Server und Save/Reload testen.
4. Erst danach Technik-/Magie-/Farmzweige, Weltprofil, weitere Dimensionen und Legacy-Piloten ausbauen.

Vorgehen: [Mod-Auswahl](docs/mod-selection.md), [Legacy-Ports](docs/legacy-porting.md), [Qualität](docs/quality.md), [CLAUDE.md](CLAUDE.md).

**Bearbeitung:** [planning/mod-candidates.csv](planning/mod-candidates.csv) ändern, dann `python3 tools/render_modlist.py` und `python3 tools/validate_plan.py` ausführen. Die folgenden Tabellen werden aus dieser einen Quelle erzeugt.

## Technik

| Mod / Projektseite | Geplante Rolle | Auswahl / Priorität | Aufnahmephase | Hinweise |
| --- | --- | --- | --- | --- |
| [Actually Additions](https://www.curseforge.com/minecraft/mc-mods/actually-additions) (`actually_additions`) | Verschiedene Maschinen, Laserenergie und Ressourcenverarbeitung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Additional Enchanted Miner](https://www.curseforge.com/minecraft/mc-mods/additional-enchanted-miner) (`additional_enchanted_miner`) | Großflächiger automatisierter Abbau nach Ressourcenfreigabe | Ausbauwunsch / P2 | Mittlere Progression | — |
| [CC: Tweaked](https://www.curseforge.com/minecraft/mc-mods/cc-tweaked) (`cc_tweaked`) | Programmierbare Computer für Fabriken und Anzeigen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Charging Gadgets](https://www.curseforge.com/minecraft/mc-mods/charging-gadgets) (`charging_gadgets`) | Werkzeuge und Ausrüstung laden | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Compact Machines](https://www.curseforge.com/minecraft/mc-mods/compact-machines) (`compact_machines`) | Kompakte Fabrikräume mit kontrolliertem Chunkbudget | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Create](https://www.curseforge.com/minecraft/mc-mods/create) (`create`) | Mechanischer Einstieg | Kernwunsch / P0 | Frühspiel | — |
| [Create Crafts & Additions](https://www.curseforge.com/minecraft/mc-mods/createaddition) (`createaddition`) | Verbindung zwischen Rotation und Strom | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: create |
| [Create: Aquatic Ambitions](https://www.curseforge.com/minecraft/mc-mods/create-aquatic-ambitions) (`create_aquatic_ambitions`) | Aquatische Produktionsketten im Create-Zweig | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: create |
| [Create: Dragons Plus](https://www.curseforge.com/minecraft/mc-mods/create-dragons-plus) (`create_dragons_plus`) | Zusätzliche Create-Integrationen und Rezepte prüfen | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: create |
| [Create: Enchantment Industry](https://www.curseforge.com/minecraft/mc-mods/create-enchantment-industry) (`create_enchantment_industry`) | Erfahrung und Verzauberungen mechanisch automatisieren | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: create |
| [Create: Hypertubes](https://www.curseforge.com/minecraft/mc-mods/hypertubes) (`hypertubes`) | Bewegung innerhalb großer Fabriken | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: create |
| [CreeperHost Presents Steve's Carts](https://www.curseforge.com/minecraft/mc-mods/creeperhost-presents-steves-carts) (`creeperhost_presents_steves_carts`) | Modulare Schienenautomation | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Draconic Evolution](https://www.curseforge.com/minecraft/mc-mods/draconic-evolution) (`draconic_evolution`) | Hochenergie und Endgame | Ausbauwunsch / P2 | Späte Progression | — |
| [Ender IO](https://www.curseforge.com/minecraft/mc-mods/ender-io) (`ender_io`) | Logistik und Maschinen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Extended Industrialization](https://www.curseforge.com/minecraft/mc-mods/extended-industrialization) (`extended_industrialization`) | Ausbau der Modern-Industrialization-Fertigung | Ausbauwunsch / P2 | Späte Progression | — |
| [Extreme Reactors](https://www.curseforge.com/minecraft/mc-mods/extreme-reactors) (`extreme_reactors`) | Alternative nukleare Energieerzeugung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Generator Galore](https://www.curseforge.com/minecraft/mc-mods/generatorgalore) (`generatorgalore`) | Zusätzliche ausgewählte Energiepfade | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Hostile Neural Networks](https://www.curseforge.com/minecraft/mc-mods/hostile-neural-networks) (`hostile_neural_networks`) | Erneuerbare Mobbeute nach legitimen Erstnachweisen | Ausbauwunsch / P2 | Mittlere Progression | Fortschritts-, Schadens- und Automationsabkürzungen vor Freigabe prüfen. |
| [Hyperbox](https://www.curseforge.com/minecraft/mc-mods/hyperbox) (`hyperbox`) | Zusätzliche kompakte Fabrikräume als optionale Ausbaurolle | Ausbauwunsch / P2 | Mittlere Progression | Alternative kompakte Fabrikrolle neben Compact Machines; Chunk- und Save-Verhalten getrennt prüfen. |
| [Immersive Engineering](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering) (`immersive_engineering`) | Multiblöcke, industrielle Produktion und Energie | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Industrial Foregoing](https://www.curseforge.com/minecraft/mc-mods/industrial-foregoing) (`industrial_foregoing`) | Farm- und Mobautomation | Kernwunsch / P0 | Mittlere Progression | — |
| [Industrial Foregoing Souls](https://www.curseforge.com/minecraft/mc-mods/industrial-foregoing-souls) (`industrial_foregoing_souls`) | Zusätzliche Industrial-Foregoing-/Seelenintegration | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Industrialization Overdrive](https://www.curseforge.com/minecraft/mc-mods/industrialization-overdrive) (`industrialization_overdrive`) | Ausbau der ausgewählten Industrialisierungskette | Ausbauwunsch / P2 | Späte Progression | — |
| [Iron Furnaces](https://www.curseforge.com/minecraft/mc-mods/iron-furnaces) (`iron_furnaces`) | Gestufte Schmelzleistung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Just Dire Things](https://www.curseforge.com/minecraft/mc-mods/just-dire-things) (`just_dire_things`) | Gestufte Werkzeuge und Automationshilfen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Mekanism](https://www.curseforge.com/minecraft/mc-mods/mekanism) (`mekanism`) | Verarbeitung und Chemie | Kernwunsch / P0 | Mittlere Progression | — |
| [Mekanism Generators](https://www.curseforge.com/minecraft/mc-mods/mekanism-generators) (`mekanism_generators`) | Spaltung, Fusion und Energieinfrastruktur | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: mekanism |
| [Mekanism:More Machine](https://www.curseforge.com/minecraft/mc-mods/mekanism-more-machine) (`mekanism_more_machine`) | Zusätzliche fortgeschrittene Verarbeitung | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: mekanism |
| [Mining Gadgets](https://www.curseforge.com/minecraft/mc-mods/mining-gadgets) (`mining_gadgets`) | Fortschrittliche persönliche Abbauwerkzeuge | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Mob Grinding Utils](https://www.curseforge.com/minecraft/mc-mods/mob-grinding-utils) (`mob_grinding_utils`) | Gestufte Mobfarm-Bauteile | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Modern Industrialization](https://www.curseforge.com/minecraft/mc-mods/modern-industrialization) (`modern_industrialization`) | Industrielle Fertigung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Modular Machinery Reborn](https://www.curseforge.com/minecraft/mc-mods/modular-machinery-reborn) (`modular_machinery_reborn`) | Alternative Multiblock-Rezeptplattform prüfen | Alternative / P3 | Mittlere Progression | Alternative Rezept-Multiblöcke; ersetzt nicht automatisch Core-Bosse oder Teamdaten. Gruppe: multiblock_recipe_platform |
| [Modular Machinery Reborn Ars Nouveau](https://www.curseforge.com/minecraft/mc-mods/modular-machinery-reborn-ars-nouveau) (`modular_machinery_reborn_ars_nouveau`) | Magieadapter der alternativen Multiblock-Plattform | Alternative / P3 | Mittlere Progression | Alternative Rezept-Multiblöcke; ersetzt nicht automatisch Core-Bosse oder Teamdaten. Elternkandidaten: modular_machinery_reborn, ars_nouveau |
| [Modular Machinery Reborn Mekanism](https://www.curseforge.com/minecraft/mc-mods/modular-machinery-reborn-mekanism) (`modular_machinery_reborn_mekanism`) | Mekanism-Adapter der alternativen Multiblock-Plattform | Alternative / P3 | Mittlere Progression | Alternative Rezept-Multiblöcke; ersetzt nicht automatisch Core-Bosse oder Teamdaten. Elternkandidaten: modular_machinery_reborn, mekanism |
| [More Industrial Foregoing Addons (MIFA)](https://www.curseforge.com/minecraft/mc-mods/mifa) (`mifa`) | Ausgewählte zusätzliche Industrial-Foregoing-Funktionen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Oritech](https://www.curseforge.com/minecraft/mc-mods/oritech) (`oritech`) | Zusätzlicher fortgeschrittener Technikpfad | Ausbauwunsch / P2 | Mittlere Progression | — |
| [PneumaticCraft: Repressurized](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized) (`pneumaticcraft_repressurized`) | Drucklufttechnik und Automationswerkzeuge | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Powah](https://www.curseforge.com/minecraft/mc-mods/powah-rearchitected) (`powah`) | Energiebausteine | Kernwunsch / P0 | Mittlere Progression | — |
| [Productive Metalworks](https://www.curseforge.com/minecraft/mc-mods/productive-metalworks) (`productive_metalworks`) | Metallverarbeitung im produktiven Ressourcenzweig | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Railcraft Reborn](https://www.curseforge.com/minecraft/mc-mods/railcraft-reborn) (`railcraft_reborn`) | Schienen, Transport und ergänzende Industrie | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Ranged Pumps](https://www.curseforge.com/minecraft/mc-mods/ranged-pumps) (`ranged_pumps`) | Kontrollierter Flüssigkeitsabbau | Ausbauwunsch / P2 | Mittlere Progression | — |
| [RFTools Builder](https://www.curseforge.com/minecraft/mc-mods/rftools-builder) (`rftools_builder`) | Gestufter Bau und großflächiger Abbau | Ausbauwunsch / P2 | Mittlere Progression | — |
| [RFTools Power](https://www.curseforge.com/minecraft/mc-mods/rftools-power) (`rftools_power`) | Zusätzliche Energieinfrastruktur | Ausbauwunsch / P2 | Mittlere Progression | — |
| [RFTools Utility](https://www.curseforge.com/minecraft/mc-mods/rftools-utility) (`rftools_utility`) | Maschinen- und Steuerungshelfer | Ausbauwunsch / P2 | Mittlere Progression | — |
| [RotaryCraft](https://www.curseforge.com/minecraft/mc-mods/rotarycraft) (`rotarycraft`) | Historische Mechanik | Legacy-Prüfung / P3 | Separater Legacy-Pilot | Passende offizielle/erlaubte Fortsetzung zuerst suchen; sonst eigener Port mit Quell- und Lizenzprüfung. |
| [Tinkers' Construct](https://www.curseforge.com/minecraft/mc-mods/tinkers-construct) (`tinkers_construct`) | Werkstoffe und Werkzeuge | Legacy-Prüfung / P3 | Separater Legacy-Pilot | Passende offizielle/erlaubte Fortsetzung zuerst suchen; sonst eigener Port mit Quell- und Lizenzprüfung. |
| [Wireless Chargers](https://www.curseforge.com/minecraft/mc-mods/wireless-chargers) (`wireless_chargers`) | Ausrüstung und Maschinen drahtlos laden | Ausbauwunsch / P2 | Mittlere Progression | — |
| [XyCraft](https://www.curseforge.com/minecraft/mc-mods/xycraft) (`xycraft`) | XyCraft-Grundsystem | Ausbauwunsch / P2 | Mittlere Progression | — |
| [XyCraft: Machines](https://www.curseforge.com/minecraft/mc-mods/xycraft-machines) (`xycraft_machines`) | Weitere Maschinen und Verarbeitung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [XyCraft: Override](https://www.curseforge.com/minecraft/mc-mods/xycraft-override) (`xycraft_override`) | Ausgewählte XyCraft-Anpassungen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [XyCraft: World](https://www.curseforge.com/minecraft/mc-mods/xycraft-world) (`xycraft_world`) | Passende XyCraft-Weltressourcen | Ausbauwunsch / P2 | Mittlere Progression | — |

## Bibliotheken

| Mod / Projektseite | Geplante Rolle | Auswahl / Priorität | Aufnahmephase | Hinweise |
| --- | --- | --- | --- | --- |
| [Almanac Lib](https://www.curseforge.com/minecraft/mc-mods/almanac-lib) (`almanac_lib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Architectury API](https://www.curseforge.com/minecraft/mc-mods/architectury-api) (`architectury_api`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Athena](https://www.curseforge.com/minecraft/mc-mods/athena) (`athena`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Atlas API](https://www.curseforge.com/minecraft/mc-mods/atlas-api) (`atlas_api`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Balm](https://www.curseforge.com/minecraft/mc-mods/balm) (`balm`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [BlockUI](https://www.curseforge.com/minecraft/mc-mods/blockui) (`blockui`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Bookshelf](https://www.curseforge.com/minecraft/mc-mods/bookshelf) (`bookshelf`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Brandon's Core](https://www.curseforge.com/minecraft/mc-mods/brandons-core) (`brandons_core`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Caelus API](https://www.curseforge.com/minecraft/mc-mods/caelus) (`caelus`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Cloth Config API (Fabric/Forge/NeoForge)](https://www.curseforge.com/minecraft/mc-mods/cloth-config) (`cloth_config`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Cobweb](https://www.curseforge.com/minecraft/mc-mods/cobweb) (`cobweb`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [CodeChicken Lib 1.8.+](https://www.curseforge.com/minecraft/mc-mods/codechicken-lib-1-8) (`codechicken_lib_1_8`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Common Capabilities](https://www.curseforge.com/minecraft/mc-mods/common-capabilities) (`common_capabilities`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [CorgiLib](https://www.curseforge.com/minecraft/mc-mods/corgilib) (`corgilib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Cristel Lib](https://www.curseforge.com/minecraft/mc-mods/cristel-lib) (`cristel_lib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Cryonic Config](https://www.curseforge.com/minecraft/mc-mods/cryonicconfig) (`cryonicconfig`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Cucumber Library](https://www.curseforge.com/minecraft/mc-mods/cucumber) (`cucumber`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Cupboard](https://www.curseforge.com/minecraft/mc-mods/cupboard) (`cupboard`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Curios API](https://www.curseforge.com/minecraft/mc-mods/curios) (`curios`) | Ausrüstungsslots falls von Builds benötigt | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Cyclops Core](https://www.curseforge.com/minecraft/mc-mods/cyclops-core) (`cyclops_core`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Deimos Lib](https://www.curseforge.com/minecraft/mc-mods/deimos-fabric-forge-neoforge) (`deimos_fabric_forge_neoforge`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [EdivadLib](https://www.curseforge.com/minecraft/mc-mods/edivadlib) (`edivadlib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [EpheroLib](https://www.curseforge.com/minecraft/mc-mods/epherolib) (`epherolib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [ExperienceLib](https://www.curseforge.com/minecraft/mc-mods/experiencelib) (`experiencelib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Formations (Structure Library)](https://www.curseforge.com/minecraft/mc-mods/formations) (`formations`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Framework](https://www.curseforge.com/minecraft/mc-mods/framework) (`framework`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [FTB Library](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge) (`ftb_library`) | Abhängigkeit falls vom gewählten FTB-Build benötigt | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [FTB Teams](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge) (`ftb_teams`) | Teamadapter falls vom gewählten FTB-Build benötigt | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Fzzy Config](https://www.curseforge.com/minecraft/mc-mods/fzzy-config) (`fzzy_config`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [GeckoLib](https://www.curseforge.com/minecraft/mc-mods/geckolib) (`geckolib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Glodium](https://www.curseforge.com/minecraft/mc-mods/glodium) (`glodium`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [JamLib](https://www.curseforge.com/minecraft/mc-mods/jamlib) (`jamlib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Konkrete](https://www.curseforge.com/minecraft/mc-mods/konkrete) (`konkrete`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Kotlin for Forge](https://www.curseforge.com/minecraft/mc-mods/kotlin-for-forge) (`kotlin_for_forge`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Lionfish API](https://www.curseforge.com/minecraft/mc-mods/lionfish-api) (`lionfish_api`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Lithostitched](https://www.curseforge.com/minecraft/mc-mods/lithostitched) (`lithostitched`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [McJtyLib](https://www.curseforge.com/minecraft/mc-mods/mcjtylib) (`mcjtylib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Melody](https://www.curseforge.com/minecraft/mc-mods/melody) (`melody`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [MonoLib](https://www.curseforge.com/minecraft/mc-mods/monolib) (`monolib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Moonlight Lib](https://www.curseforge.com/minecraft/mc-mods/selene) (`selene`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [OctoLib](https://www.curseforge.com/minecraft/mc-mods/octo-lib) (`octo_lib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Omega Config](https://www.curseforge.com/minecraft/mc-mods/omega-config) (`omega_config`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [oωo (owo-lib)](https://www.curseforge.com/minecraft/mc-mods/owo-lib) (`owo_lib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Placebo](https://www.curseforge.com/minecraft/mc-mods/placebo) (`placebo`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [playerAnimator](https://www.curseforge.com/minecraft/mc-mods/playeranimator) (`playeranimator`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [PolyLib](https://www.curseforge.com/minecraft/mc-mods/polylib) (`polylib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Prickle](https://www.curseforge.com/minecraft/mc-mods/prickle) (`prickle`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Resourceful Config](https://www.curseforge.com/minecraft/mc-mods/resourceful-config) (`resourceful_config`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Resourceful Lib](https://www.curseforge.com/minecraft/mc-mods/resourceful-lib) (`resourceful_lib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [RFTools Base](https://www.curseforge.com/minecraft/mc-mods/rftools-base) (`rftools_base`) | Gemeinsame Grundlage der ausgewählten RFTools-Module | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die ausgewählten Versionen diese Bibliothek verlangen. |
| [Rhino](https://www.curseforge.com/minecraft/mc-mods/rhino) (`rhino`) | Scriptlaufzeit falls vom KubeJS-Build benötigt | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Scalable Cat's Force](https://www.curseforge.com/minecraft/mc-mods/scalable-cats-force) (`scalable_cats_force`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Searchables](https://www.curseforge.com/minecraft/mc-mods/searchables) (`searchables`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Silent Lib (silentlib)](https://www.curseforge.com/minecraft/mc-mods/silent-lib) (`silent_lib`) | Gemeinsame Bibliothek für ausgewählte Silent-Projekte | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die ausgewählten Versionen diese Bibliothek verlangen. |
| [SmartBrainLib (Forge/Fabric/Quilt)](https://www.curseforge.com/minecraft/mc-mods/smartbrainlib) (`smartbrainlib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Sophisticated Core](https://www.curseforge.com/minecraft/mc-mods/sophisticated-core) (`sophisticated_core`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Structurize](https://www.curseforge.com/minecraft/mc-mods/structurize) (`structurize`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [SuperMartijn642's Config Lib](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-config-lib) (`supermartijn642s_config_lib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [SuperMartijn642's Core Lib](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib) (`supermartijn642s_core_lib`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [TerraBlender (NeoForge)](https://www.curseforge.com/minecraft/mc-mods/terrablender-neoforge) (`terrablender_neoforge`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Tesseract API (NeoForge)](https://www.curseforge.com/minecraft/mc-mods/tesseract-api-neoforge) (`tesseract_api_neoforge`) | Bibliotheksgrundlage für ausgewählte Energie-/Medienintegration | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die ausgewählten Versionen diese Bibliothek verlangen. |
| [Titanium](https://www.curseforge.com/minecraft/mc-mods/titanium) (`titanium`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Uranus](https://www.curseforge.com/minecraft/mc-mods/uranus) (`uranus`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [Valhelsia Core](https://www.curseforge.com/minecraft/mc-mods/valhelsia-core) (`valhelsia_core`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [YetAnotherConfigLib](https://www.curseforge.com/minecraft/mc-mods/yacl) (`yacl`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [YUNG's API (NeoForge)](https://www.curseforge.com/minecraft/mc-mods/yungs-api-neoforge) (`yungs_api_neoforge`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |
| [ZeroCore 2](https://www.curseforge.com/minecraft/mc-mods/zerocore) (`zerocore`) | Nur als aufgelöste Pflichtabhängigkeit eines gewählten Projekts aufnehmen | Abhängigkeit / conditional | Mit benötigtem Elternmod | Nur installieren, wenn die tatsächlich ausgewählten Versionen diese Bibliothek verlangen. |

## Exploration

| Mod / Projektseite | Geplante Rolle | Auswahl / Priorität | Aufnahmephase | Hinweise |
| --- | --- | --- | --- | --- |
| [Ad Astra](https://www.curseforge.com/minecraft/mc-mods/ad-astra) (`ad_astra`) | Kosmische Reisen | Ausbauwunsch / P2 | Späte Progression | Versionsprüfung offen; falls nötig erlaubte Fortsetzung, Port oder Rollen-Ersatz planen. |
| [Blue Skies](https://www.curseforge.com/minecraft/mc-mods/blue-skies) (`blue_skies`) | Zwei Fantasy-Dimensionsrollen | Ausbauwunsch / P2 | Mittlere Progression | Versionsprüfung offen; falls nötig erlaubte Fortsetzung, Port oder Rollen-Ersatz planen. |
| [Deeper and Darker](https://www.curseforge.com/minecraft/mc-mods/deeperdarker) (`deeper_darker`) | Tiefe und Abyssal Essence | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Dungeon Crawl](https://www.curseforge.com/minecraft/mc-mods/dungeon-crawl) (`dungeon_crawl`) | Mehrstöckige Dungeons für frühe und mittlere Expeditionen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Eternal Starlight](https://www.curseforge.com/minecraft/mc-mods/eternal-starlight) (`eternal_starlight`) | Zusätzliche Sternen-/Fantasy-Dimensionsrolle | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Explorify – Dungeons & Structures](https://www.curseforge.com/minecraft/mc-mods/explorify) (`explorify`) | Kleinere Erkundungsstrukturen und Dungeons | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Formations Nether](https://www.curseforge.com/minecraft/mc-mods/formations-nether) (`formations_nether`) | Weitere Nether-Strukturen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Formations Overworld](https://www.curseforge.com/minecraft/mc-mods/formations-overworld) (`formations_overworld`) | Weitere Overworld-Strukturen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Gateways to Eternity](https://www.curseforge.com/minecraft/mc-mods/gateways-to-eternity) (`gateways_to_eternity`) | Wiederholbare beschwörbare Kampfbegegnungen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Illager Warship](https://www.curseforge.com/minecraft/mc-mods/illager-warship) (`illager_warship`) | Zusätzliche Kampfstruktur und Expedition | Ausbauwunsch / P2 | Mittlere Progression | — |
| [MES - Moog's End Structures](https://www.curseforge.com/minecraft/mc-mods/moogs-end-structures) (`moogs_end_structures`) | Erweiterte End-Strukturen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [MNS - Moog's Nether Structures](https://www.curseforge.com/minecraft/mc-mods/mns-moogs-nether-structures) (`mns_moogs_nether_structures`) | Erweiterte Nether-Strukturen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Mo' Structures (NeoForge/Fabric)](https://www.curseforge.com/minecraft/mc-mods/mo-structures) (`mo_structures`) | Zusätzliche Ruinen und Erkundungsorte | Ausbauwunsch / P2 | Mittlere Progression | — |
| [MSS - Moog's Soaring Structures](https://www.curseforge.com/minecraft/mc-mods/mss-moogs-soaring-structures) (`mss_moogs_soaring_structures`) | Hochgelegene und schwebende Expeditionsorte | Ausbauwunsch / P2 | Mittlere Progression | — |
| [MVS - Moog's Voyager Structures](https://www.curseforge.com/minecraft/mc-mods/moogs-voyager-structures) (`moogs_voyager_structures`) | Weitere Expeditionen und Strukturen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Repeatable Trial Vaults](https://www.curseforge.com/minecraft/mc-mods/repeatable-trial-vaults) (`repeatable_trial_vaults`) | Wiederholbare Trial-Beute unter definierten Regeln | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Repurposed Structures (Neoforge/Forge)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures) (`repurposed_structures`) | Neue Strukturvarianten in passenden Biomen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Structory](https://www.curseforge.com/minecraft/mc-mods/structory) (`structory`) | Ruinen und Umgebungsgeschichten durch Strukturen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Structory: Towers](https://www.curseforge.com/minecraft/mc-mods/structory-towers) (`structory_towers`) | Turmstrukturen für Expeditionen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [The Aether](https://www.curseforge.com/minecraft/mc-mods/aether) (`aether`) | Himmel und Celestial Essence | Ausbauwunsch / P2 | Mittlere Progression | — |
| [The Bumblezone (NeoForge/Forge)](https://www.curseforge.com/minecraft/mc-mods/the-bumblezone-forge) (`the_bumblezone_forge`) | Bienenwelt und eigene Expeditionsressourcen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [The Twilight Forest](https://www.curseforge.com/minecraft/mc-mods/the-twilight-forest) (`twilight_forest`) | Waldwelt und Bossfolge | Ausbauwunsch / P2 | Mittlere Progression | — |
| [The Undergarden](https://www.curseforge.com/minecraft/mc-mods/the-undergarden) (`the_undergarden`) | Zusätzliche unterirdische Dimensionsrolle | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Towns and Towers](https://www.curseforge.com/minecraft/mc-mods/towns-and-towers) (`towns_and_towers`) | Dörfer und Turmstrukturen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Underground Villages](https://www.curseforge.com/minecraft/mc-mods/underground-villages) (`underground_villages`) | Unterirdische Siedlungen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [When Dungeons Arise - Forge!](https://www.curseforge.com/minecraft/mc-mods/when-dungeons-arise) (`when_dungeons_arise`) | Große Dungeonanlagen als Expeditionsziele | Ausbauwunsch / P2 | Mittlere Progression | — |
| [YUNG's Better Desert Temples (NeoForge)](https://www.curseforge.com/minecraft/mc-mods/yungs-better-desert-temples-neoforge) (`yungs_better_desert_temples_neoforge`) | Überarbeitete Strukturrolle: Desert Temples | Ausbauwunsch / P2 | Mittlere Progression | — |
| [YUNG's Better Dungeons (NeoForge)](https://www.curseforge.com/minecraft/mc-mods/yungs-better-dungeons-neoforge) (`yungs_better_dungeons_neoforge`) | Überarbeitete Strukturrolle: Dungeons | Ausbauwunsch / P2 | Mittlere Progression | — |
| [YUNG's Better End Island (NeoForge)](https://www.curseforge.com/minecraft/mc-mods/yungs-better-end-island-neoforge) (`yungs_better_end_island_neoforge`) | Überarbeitete Strukturrolle: End Island | Ausbauwunsch / P2 | Mittlere Progression | — |
| [YUNG's Better Jungle Temples (NeoForge)](https://www.curseforge.com/minecraft/mc-mods/yungs-better-jungle-temples-neoforge) (`yungs_better_jungle_temples_neoforge`) | Überarbeitete Strukturrolle: Jungle Temples | Ausbauwunsch / P2 | Mittlere Progression | — |
| [YUNG's Better Mineshafts (NeoForge)](https://www.curseforge.com/minecraft/mc-mods/yungs-better-mineshafts-neoforge) (`yungs_better_mineshafts_neoforge`) | Überarbeitete Strukturrolle: Mineshafts | Ausbauwunsch / P2 | Mittlere Progression | — |
| [YUNG's Better Nether Fortresses (NeoForge)](https://www.curseforge.com/minecraft/mc-mods/yungs-better-nether-fortresses-neoforge) (`yungs_better_nether_fortresses_neoforge`) | Überarbeitete Strukturrolle: Nether Fortresses | Ausbauwunsch / P2 | Mittlere Progression | — |
| [YUNG's Better Ocean Monuments (NeoForge)](https://www.curseforge.com/minecraft/mc-mods/yungs-better-ocean-monuments-neoforge) (`yungs_better_ocean_monuments_neoforge`) | Überarbeitete Strukturrolle: Ocean Monuments | Ausbauwunsch / P2 | Mittlere Progression | — |
| [YUNG's Better Strongholds (NeoForge)](https://www.curseforge.com/minecraft/mc-mods/yungs-better-strongholds-neoforge) (`yungs_better_strongholds_neoforge`) | Überarbeitete Strukturrolle: Strongholds | Ausbauwunsch / P2 | Mittlere Progression | — |
| [YUNG's Better Witch Huts (NeoForge)](https://www.curseforge.com/minecraft/mc-mods/yungs-better-witch-huts-neoforge) (`yungs_better_witch_huts_neoforge`) | Überarbeitete Strukturrolle: Witch Huts | Ausbauwunsch / P2 | Mittlere Progression | — |
| [YUNG's Extras (NeoForge)](https://www.curseforge.com/minecraft/mc-mods/yungs-extras-neoforge) (`yungs_extras_neoforge`) | Ergänzende kleine Strukturen passend zum gewählten YUNG-Profil | Ausbauwunsch / P2 | Mittlere Progression | — |

## Magie

| Mod / Projektseite | Geplante Rolle | Auswahl / Priorität | Aufnahmephase | Hinweise |
| --- | --- | --- | --- | --- |
| [Ars Additions](https://www.curseforge.com/minecraft/mc-mods/ars-additions) (`ars_additions`) | Zusätzliche Bausteine für die Ars-Progression | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ars_nouveau |
| [Ars Controle](https://www.curseforge.com/minecraft/mc-mods/ars-controle) (`ars_controle`) | Kontrolle und Automation im Ars-System | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ars_nouveau |
| [Ars Creo](https://www.curseforge.com/minecraft/mc-mods/ars-creo) (`ars_creo`) | Verbindung zwischen Ars und Create | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ars_nouveau, create |
| [Ars Elemancy](https://www.curseforge.com/minecraft/mc-mods/ars-elemancy) (`ars_elemancy`) | Zusätzliche elementare Ars-Vertiefung | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ars_nouveau |
| [Ars Elemental](https://www.curseforge.com/minecraft/mc-mods/ars-elemental) (`ars_elemental`) | Elementare Vertiefung der Ars-Magie | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ars_nouveau |
| [Ars Nouveau](https://www.curseforge.com/minecraft/mc-mods/ars-nouveau) (`ars_nouveau`) | Zauber und arkane Automation | Kernwunsch / P0 | Mittlere Progression | — |
| [Ars Ocultas](https://www.curseforge.com/minecraft/mc-mods/ars-ocultas) (`ars_ocultas`) | Ars-/Occultism-Verknüpfung | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ars_nouveau, occultism |
| [Ars Polymorphia](https://www.curseforge.com/minecraft/mc-mods/ars-polymorphia) (`ars_polymorphia`) | Verwandlungs-/Formmagie im Ars-Zweig | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ars_nouveau |
| [Ars Technica](https://www.curseforge.com/minecraft/mc-mods/ars-technica) (`ars_technica`) | Ars-/Technik-Verknüpfung | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ars_nouveau, create |
| [Ars Unification](https://www.curseforge.com/minecraft/mc-mods/ars-unification) (`ars_unification`) | Material- und Rezeptintegration der Ars-Kette | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ars_nouveau |
| [Ars Énergistique](https://www.curseforge.com/minecraft/mc-mods/ars-energistique) (`ars_energistique`) | Ars-/AE2-Integration | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ars_nouveau, ae2 |
| [Astral Sorcery](https://www.curseforge.com/minecraft/mc-mods/astral-sorcery) (`astral_sorcery`) | Astrale Magie | Legacy-Prüfung / P3 | Separater Legacy-Pilot | Passende offizielle/erlaubte Fortsetzung zuerst suchen; sonst eigener Port mit Quell- und Lizenzprüfung. |
| [Blood Magic](https://www.curseforge.com/minecraft/mc-mods/blood-magic) (`blood_magic`) | Rituale und Lebensenergie | Ausbauwunsch / P2 | Mittlere Progression | Versionsprüfung offen; falls nötig erlaubte Fortsetzung, Port oder Rollen-Ersatz planen. |
| [Botania](https://www.curseforge.com/minecraft/mc-mods/botania) (`botania`) | Mana und magische Logistik | Ausbauwunsch / P2 | Mittlere Progression | Versionsprüfung offen; falls nötig erlaubte Fortsetzung, Port oder Rollen-Ersatz planen. |
| [Eidolon](https://www.curseforge.com/minecraft/mc-mods/eidolon) (`eidolon`) | Historische Ritualrolle | Legacy-Prüfung / P3 | Separater Legacy-Pilot | Passende offizielle/erlaubte Fortsetzung zuerst suchen; sonst eigener Port mit Quell- und Lizenzprüfung. |
| [EvilCraft](https://www.curseforge.com/minecraft/mc-mods/evilcraft) (`evilcraft`) | Dunkle Magie und automatisierbare magische Ressourcen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Forbidden and Arcanus](https://www.curseforge.com/minecraft/mc-mods/forbidden-arcanus) (`forbidden_arcanus`) | Dunkle Magie, Rituale und seltene Werkstoffe | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Mahou Tsukai](https://www.curseforge.com/minecraft/mc-mods/mahou-tsukai) (`mahou_tsukai`) | Weiterer Magiepfad mit streng geprüfter Schadensskalierung | Ausbauwunsch / P2 | Mittlere Progression | Fortschritts-, Schadens- und Automationsabkürzungen vor Freigabe prüfen. |
| [Nature's Aura](https://www.curseforge.com/minecraft/mc-mods/natures-aura) (`natures_aura`) | Umweltmagie und erneuerbare arkane Produktion | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Not Enough Glyphs](https://www.curseforge.com/minecraft/mc-mods/not-enough-glyphs) (`not_enough_glyphs`) | Zusätzliche Ars-Zauberbausteine | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Occultism](https://www.curseforge.com/minecraft/mc-mods/occultism) (`occultism`) | Rituale und Beschwörung | Kernwunsch / P0 | Mittlere Progression | — |
| [Potions Master](https://www.curseforge.com/minecraft/mc-mods/potionsmaster) (`potionsmaster`) | Alchemistische Trank- und Erkundungshelfer | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Reliquary Reincarnations](https://www.curseforge.com/minecraft/mc-mods/reliquary-reincarnations) (`reliquary_reincarnations`) | Magische Werkzeuge, Beute und Alchemie | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Roots Classic](https://www.curseforge.com/minecraft/mc-mods/roots-classic) (`roots_classic`) | Ergänzende Naturmagie | Ausbauwunsch / P2 | Mittlere Progression | — |
| [StarbuncleMania](https://www.curseforge.com/minecraft/mc-mods/starbunclemania) (`starbunclemania`) | Ars-Helfer und magische Automation | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Thaumcraft 4](https://www.curseforge.com/minecraft/mc-mods/thaumcraft) (`thaumcraft4`) | Forschung und historische Magie | Legacy-Prüfung / P3 | Separater Legacy-Pilot | Passende offizielle/erlaubte Fortsetzung zuerst suchen; sonst eigener Port mit Quell- und Lizenzprüfung. |
| [Theurgy](https://www.curseforge.com/minecraft/mc-mods/theurgy) (`theurgy`) | Alchemie und Ressourcenverarbeitung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Witchery](https://www.curseforge.com/minecraft/mc-mods/witchery) (`witchery`) | Historischer Magiepfad | Legacy-Prüfung / P3 | Separater Legacy-Pilot | Passende offizielle/erlaubte Fortsetzung zuerst suchen; sonst eigener Port mit Quell- und Lizenzprüfung. |

## Quality of Life

| Mod / Projektseite | Geplante Rolle | Auswahl / Priorität | Aufnahmephase | Hinweise |
| --- | --- | --- | --- | --- |
| [Akashic Tome](https://www.curseforge.com/minecraft/mc-mods/akashic-tome) (`akashic_tome`) | Handbücher verschiedener Mods an einer Stelle sammeln | Ausbauwunsch / P2 | Optionales Profil | — |
| [AppleSkin](https://www.curseforge.com/minecraft/mc-mods/appleskin) (`appleskin`) | Nahrungswerte verständlich anzeigen | Kernwunsch / P0 | Fundament | — |
| [Bad Wither No Cookie - Reloaded](https://www.curseforge.com/minecraft/mc-mods/bad-wither-no-cookie-reloaded) (`bad_wither_no_cookie_reloaded`) | Belastende globale Bossgeräusche begrenzen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Better Advancements](https://www.curseforge.com/minecraft/mc-mods/better-advancements) (`better_advancements`) | Lesbarere Fortschrittsanzeige | Ausbauwunsch / P2 | Optionales Profil | — |
| [Better Compatibility Checker](https://www.curseforge.com/minecraft/mc-mods/better-compatibility-checker) (`better_compatibility_checker`) | Versions-/Kompatibilitätsdiagnose für Spieler | Ausbauwunsch / P2 | Optionales Profil | — |
| [Clean Swing Through Grass](https://www.curseforge.com/minecraft/mc-mods/clean-swing-through-grass) (`clean_swing_through_grass`) | Kampfbedienung bei Pflanzen im Sichtfeld verbessern | Ausbauwunsch / P2 | Optionales Profil | — |
| [Colorful Hearts](https://www.curseforge.com/minecraft/mc-mods/colorful-hearts) (`colorful_hearts`) | Große Gesundheitswerte verständlich anzeigen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Comforts (Fabric/Forge/Quilt)](https://www.curseforge.com/minecraft/mc-mods/comforts) (`comforts`) | Schlaf-/Reisekomfort für Expeditionen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Controlling](https://www.curseforge.com/minecraft/mc-mods/controlling) (`controlling`) | Tastenbelegungen finden und Konflikte lösen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Corail Tombstone](https://www.curseforge.com/minecraft/mc-mods/corail-tombstone) (`corail_tombstone`) | Ausrüstung nach Tod wiedererlangen; Zusatzboni balancieren | Ausbauwunsch / P2 | Optionales Profil | — |
| [Cosmetic Armor Reworked](https://www.curseforge.com/minecraft/mc-mods/cosmetic-armor-reworked) (`cosmetic_armor_reworked`) | Rüstungsaussehen von Werten trennen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Crafting on a stick](https://www.curseforge.com/minecraft/mc-mods/crafting-on-a-stick) (`crafting_on_a_stick`) | Mobiler früher Werkbankzugriff | Ausbauwunsch / P2 | Optionales Profil | — |
| [Crafting Tweaks](https://www.curseforge.com/minecraft/mc-mods/crafting-tweaks) (`crafting_tweaks`) | Wiederholte Handcrafts komfortabler bedienen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Crash Assistant](https://www.curseforge.com/minecraft/mc-mods/crash-assistant) (`crash_assistant`) | Start-/Absturzdiagnose und verständliche Fehlersammlung | Ausbauwunsch / P2 | Optionales Profil | — |
| [Crash Utilities](https://www.curseforge.com/minecraft/mc-mods/crash-utilities) (`crash_utilities`) | Serverdiagnose und administrative Fehlerwerkzeuge | Ausbauwunsch / P2 | Optionales Profil | — |
| [Dark Mode Everywhere](https://www.curseforge.com/minecraft/mc-mods/dark-mode-everywhere) (`dark_mode_everywhere`) | Lesbare dunkle Oberflächen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Dis-Enchanting Table](https://www.curseforge.com/minecraft/mc-mods/dis-enchanting-table) (`dis_enchanting_table`) | Verzauberungen in einer gestuften Produktionsrolle zurückgewinnen | Ausbauwunsch / P2 | Optionales Profil | — |
| [EMI](https://modrinth.com/mod/emi) (`emi`) | Alternativer Rezeptviewer-Kandidat | Alternative / P3 | Optionales Profil | Gruppe: recipe_viewer |
| [Enchantment Descriptions](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions) (`enchantment_descriptions`) | Wirkung von Verzauberungen erklären | Ausbauwunsch / P2 | Optionales Profil | — |
| [Explorer's Compass](https://www.curseforge.com/minecraft/mc-mods/explorers-compass) (`explorers_compass`) | Strukturen finden; Verfügbarkeit nach Erkundungsfortschritt begrenzen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Extreme sound muffler - (Neo)Forge](https://www.curseforge.com/minecraft/mc-mods/extreme-sound-muffler) (`extreme_sound_muffler`) | Lokale Maschinengeräusche reduzieren | Ausbauwunsch / P2 | Optionales Profil | — |
| [Fireproof Boats](https://www.curseforge.com/minecraft/mc-mods/fireproof-boats) (`fireproof_boats`) | Sicherere Reisen auf gefährlichen Flüssigkeiten prüfen | Ausbauwunsch / P2 | Optionales Profil | — |
| [FTB Chunks (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge) (`ftb_chunks_forge`) | Claims und begrenztes Chunkloading | Kernwunsch / P0 | Fundament | — |
| [FTB Essentials (Forge & Fabric)](https://www.curseforge.com/minecraft/mc-mods/ftb-essentials) (`ftb_essentials`) | Definierte Server-Komfortbefehle | Ausbauwunsch / P2 | Optionales Profil | — |
| [FTB Quests](https://www.curseforge.com/minecraft/mc-mods/ftb-quests-forge) (`ftb_quests`) | Questbuch und Aufgaben | Kernwunsch / P0 | Fundament | — |
| [FTB Ranks (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-ranks-forge) (`ftb_ranks_forge`) | Serverrollen und konfigurierbare Limits | Ausbauwunsch / P2 | Optionales Profil | — |
| [FTB Ultimine (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge) (`ftb_ultimine_forge`) | Gestuftes Sammel-/Abbauwerkzeug | Ausbauwunsch / P2 | Optionales Profil | — |
| [Fuel Goes Here](https://www.curseforge.com/minecraft/mc-mods/fuelgoeshere) (`fuelgoeshere`) | Brennstoffverwaltung verständlicher bedienen | Ausbauwunsch / P2 | Optionales Profil | — |
| [GuideME](https://www.curseforge.com/minecraft/mc-mods/guideme) (`guideme`) | Handbuch-/AE2-Dokumentation falls benötigt | Ausbauwunsch / P2 | Optionales Profil | — |
| [Inventory Essentials](https://www.curseforge.com/minecraft/mc-mods/inventory-essentials) (`inventory_essentials`) | Inventaraktionen schneller bedienen | Alternative / P3 | Optionales Profil | Gruppe: inventory_sorting |
| [Inventory Tweaks - ReFoxed](https://www.curseforge.com/minecraft/mc-mods/inventory-tweaks-refoxed) (`inventory_tweaks_refoxed`) | Sortieren und Nachfüllen von Inventaren | Alternative / P3 | Optionales Profil | Gruppe: inventory_sorting |
| [Jade 🔍](https://www.curseforge.com/minecraft/mc-mods/jade) (`jade`) | Blöcke, Maschinen und Ressourcen im Blick erklären | Kernwunsch / P0 | Fundament | — |
| [JourneyMap](https://www.curseforge.com/minecraft/mc-mods/journeymap) (`journeymap`) | Karte und Orientierung auf Expeditionen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Just Enough Archaeology](https://www.curseforge.com/minecraft/mc-mods/just-enough-archaeology) (`just_enough_archaeology`) | Archäologie-Nachschlagehilfe | Ausbauwunsch / P2 | Optionales Profil | — |
| [Just Enough Breeding (JEBr)](https://www.curseforge.com/minecraft/mc-mods/justenoughbreeding) (`justenoughbreeding`) | Zuchtinformationen sichtbar machen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Just Enough Items](https://www.curseforge.com/minecraft/mc-mods/jei) (`jei`) | Rezeptanzeige-Kandidat | Kernwunsch / P0 | Fundament | Gruppe: recipe_viewer |
| [Just Enough Mekanism Multiblocks](https://www.curseforge.com/minecraft/mc-mods/just-enough-mekanism-multiblocks) (`just_enough_mekanism_multiblocks`) | Mekanism-Multiblockaufbau erklären | Ausbauwunsch / P2 | Optionales Profil | — |
| [Just Enough Professions (JEP)](https://www.curseforge.com/minecraft/mc-mods/just-enough-professions-jep) (`just_enough_professions_jep`) | Dorfbewohnerberufe erklären | Ausbauwunsch / P2 | Optionales Profil | — |
| [Just Zoom](https://www.curseforge.com/minecraft/mc-mods/just-zoom) (`just_zoom`) | Optionaler Zoom für Orientierung | Ausbauwunsch / P2 | Optionales Profil | — |
| [KeyBind Bundles](https://www.curseforge.com/minecraft/mc-mods/keybind-bundles) (`keybind_bundles`) | Tastenbelegungen sinnvoll gruppieren | Ausbauwunsch / P2 | Optionales Profil | — |
| [KeybindsPurger](https://www.curseforge.com/minecraft/mc-mods/keybindspurger) (`keybindspurger`) | Unbenötigte Belegungen reduzieren | Ausbauwunsch / P2 | Optionales Profil | — |
| [Lootr (Forge & NeoForge)](https://www.curseforge.com/minecraft/mc-mods/lootr) (`lootr`) | Persönliche Dungeonbeute im Multiplayer | Kernwunsch / P0 | Fundament | — |
| [Modonomicon](https://www.curseforge.com/minecraft/mc-mods/modonomicon) (`modonomicon`) | Alternative strukturierte Handbuchdarstellung | Ausbauwunsch / P2 | Optionales Profil | — |
| [More Overlays Updated](https://www.curseforge.com/minecraft/mc-mods/more-overlays-updated) (`more_overlays_updated`) | Lager-/Weltinformationen als Overlay | Ausbauwunsch / P2 | Optionales Profil | — |
| [Mouse Tweaks](https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks) (`mouse_tweaks`) | Inventarstapel einfacher bewegen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Nature's Compass](https://www.curseforge.com/minecraft/mc-mods/natures-compass) (`natures_compass`) | Biome gezielt finden | Ausbauwunsch / P2 | Optionales Profil | — |
| [NetherPortalFix](https://www.curseforge.com/minecraft/mc-mods/netherportalfix) (`netherportalfix`) | Rückreise durch Netherportale zuverlässig zuordnen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Observable](https://www.curseforge.com/minecraft/mc-mods/observable) (`observable`) | Ticklast einzelner Spielobjekte untersuchen | Ausbauwunsch / P2 | Optionales Profil | — |
| [OpenBlocks Elevator](https://www.curseforge.com/minecraft/mc-mods/openblocks-elevator) (`openblocks_elevator`) | Vertikaler Transport in Basen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Overloaded Armor Bar](https://www.curseforge.com/minecraft/mc-mods/overloaded-armor-bar) (`overloaded_armor_bar`) | Hohe Rüstungswerte lesbar darstellen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Patchouli](https://www.curseforge.com/minecraft/mc-mods/patchouli) (`patchouli`) | Ingame-Handbücher für ausgewählte Systeme | Ausbauwunsch / P2 | Optionales Profil | — |
| [Polymorph (Fabric/Forge/Quilt)](https://www.curseforge.com/minecraft/mc-mods/polymorph) (`polymorph`) | Rezeptkonflikte beim Handcrafting auflösen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Rebind Narrator](https://www.curseforge.com/minecraft/mc-mods/rebind-narrator) (`rebind_narrator`) | Erzähler-Tastenbelegung konfigurierbar machen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Shrink.](https://www.curseforge.com/minecraft/mc-mods/shrink_) (`shrink_`) | Größenänderung als Utility; Arena-Abkürzungen prüfen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Simple Backups](https://www.curseforge.com/minecraft/mc-mods/simple-backups) (`simple_backups`) | Reproduzierbare Weltbackups | Kernwunsch / P0 | Fundament | — |
| [Simple Magnets](https://www.curseforge.com/minecraft/mc-mods/simple-magnets) (`simple_magnets`) | Items komfortabel aufsammeln | Ausbauwunsch / P2 | Optionales Profil | — |
| [Smithing Template Viewer for JEI/EMI](https://www.curseforge.com/minecraft/mc-mods/smithing-template-viewer) (`smithing_template_viewer`) | Fund-/Nutzungsinfos zu Schmiedevorlagen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Tempad](https://www.curseforge.com/minecraft/mc-mods/tempad) (`tempad`) | Später persönlicher Dimensionsreise-Komfort | Ausbauwunsch / P2 | Optionales Profil | Fortschritts-, Schadens- und Automationsabkürzungen vor Freigabe prüfen. |
| [Toast Control](https://www.curseforge.com/minecraft/mc-mods/toast-control) (`toast_control`) | Aufdringliche Einblendungen begrenzen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Tool Belt](https://www.curseforge.com/minecraft/mc-mods/tool-belt) (`tool_belt`) | Werkzeuge direkt zugänglich halten | Ausbauwunsch / P2 | Optionales Profil | — |
| [Torchmaster](https://www.curseforge.com/minecraft/mc-mods/torchmaster) (`torchmaster`) | Begrenzter Spawn-/Basisschutz | Ausbauwunsch / P2 | Optionales Profil | — |
| [Transfer Labels](https://www.curseforge.com/minecraft/mc-mods/transfer-labels) (`transfer_labels`) | Transfers und Maschinenanschlüsse beschriften | Ausbauwunsch / P2 | Optionales Profil | — |
| [Trash Cans](https://www.curseforge.com/minecraft/mc-mods/trash-cans) (`trash_cans`) | Überschüsse kontrolliert entsorgen | Ausbauwunsch / P2 | Optionales Profil | — |
| [TrashSlot](https://www.curseforge.com/minecraft/mc-mods/trashslot) (`trashslot`) | Persönlichen Inventarabfall entsorgen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Waystones](https://www.curseforge.com/minecraft/mc-mods/waystones) (`waystones`) | Fortschrittsgebundene Reiseinfrastruktur | Ausbauwunsch / P2 | Optionales Profil | — |
| [WITS (What Is This Structure?)](https://www.curseforge.com/minecraft/mc-mods/wits) (`wits`) | Strukturen zur Fehlersuche und Orientierung identifizieren | Ausbauwunsch / P2 | Optionales Profil | — |
| [Yeetus Experimentus](https://www.curseforge.com/minecraft/mc-mods/yeetusexperimentus) (`yeetusexperimentus`) | Wiederkehrende experimentelle Weltwarnung nach Profilprüfung handhaben | Ausbauwunsch / P2 | Optionales Profil | — |

## Bauen

| Mod / Projektseite | Geplante Rolle | Auswahl / Priorität | Aufnahmephase | Hinweise |
| --- | --- | --- | --- | --- |
| [Additional Lights](https://www.curseforge.com/minecraft/mc-mods/additional-lights) (`additional_lights`) | Weitere Lampen und dekorative Lichtquellen | Ausbauwunsch / P2 | Frühspiel | — |
| [Amendments](https://www.curseforge.com/minecraft/mc-mods/amendments) (`amendments`) | Interaktive Dekorations-/Baublock-Erweiterungen | Ausbauwunsch / P2 | Frühspiel | — |
| [Bibliocraft Legacy](https://www.curseforge.com/minecraft/mc-mods/bibliocraft-legacy) (`bibliocraft_legacy`) | Regale, Möbel und Bibliotheksbau | Ausbauwunsch / P2 | Frühspiel | — |
| [Bibliowoods Legacy](https://www.curseforge.com/minecraft/mc-mods/bibliowoods-legacy) (`bibliowoods_legacy`) | Holzvarianten für Bibliocraft | Ausbauwunsch / P2 | Frühspiel | — |
| [Bridging Mod](https://www.curseforge.com/minecraft/mc-mods/bridging-mod) (`bridging_mod`) | Komfortableres Platzieren beim Brückenbau | Ausbauwunsch / P2 | Frühspiel | — |
| [Building Gadgets](https://www.curseforge.com/minecraft/mc-mods/building-gadgets) (`building_gadgets`) | Großprojekte kopieren und effizient bauen | Ausbauwunsch / P2 | Frühspiel | — |
| [Chipped](https://www.curseforge.com/minecraft/mc-mods/chipped) (`chipped`) | Dekorationsvielfalt | Ausbauwunsch / P2 | Frühspiel | — |
| [Chroma Carvings](https://www.curseforge.com/minecraft/mc-mods/chroma-carvings) (`chroma_carvings`) | Zusätzlicher dekorativer Blockkatalog | Ausbauwunsch / P2 | Frühspiel | — |
| [Cloud Glass](https://www.curseforge.com/minecraft/mc-mods/cloud-glass) (`cloud_glass`) | Dekorative Glasvarianten | Ausbauwunsch / P2 | Frühspiel | — |
| [Connected Glass](https://www.curseforge.com/minecraft/mc-mods/connected-glass) (`connected_glass`) | Zusammenhängende Glasflächen | Ausbauwunsch / P2 | Frühspiel | — |
| [Construction Sticks](https://www.curseforge.com/minecraft/mc-mods/construction-sticks) (`construction_sticks`) | Schnelleres Bauen größerer Flächen | Ausbauwunsch / P2 | Frühspiel | — |
| [Create: Bells & Whistles](https://www.curseforge.com/minecraft/mc-mods/bellsandwhistles) (`bellsandwhistles`) | Dekoration für Create-Züge und Fabriken | Ausbauwunsch / P2 | Frühspiel | Elternkandidaten: create |
| [Domum Ornamentum](https://www.curseforge.com/minecraft/mc-mods/domum-ornamentum) (`domum_ornamentum`) | Form- und Materialbausteine für Gebäude | Ausbauwunsch / P2 | Frühspiel | — |
| [Dyenamics](https://www.curseforge.com/minecraft/mc-mods/dyenamics) (`dyenamics`) | Erweiterte Farbpalette | Ausbauwunsch / P2 | Frühspiel | — |
| [Dyenamics and Friends](https://www.curseforge.com/minecraft/mc-mods/dyenamicsandfriends) (`dyenamicsandfriends`) | Farbpalette mit anderen gewählten Modblöcken verbinden | Ausbauwunsch / P2 | Frühspiel | — |
| [Everything is Copper](https://www.curseforge.com/minecraft/mc-mods/everythingcopper) (`everythingcopper`) | Zusätzliche Kupferbaublöcke und Verwendungen | Ausbauwunsch / P2 | Frühspiel | — |
| [FramedBlocks](https://www.curseforge.com/minecraft/mc-mods/framedblocks) (`framedblocks`) | Flexible Formblöcke | Ausbauwunsch / P2 | Frühspiel | — |
| [Glassential Renewed](https://www.curseforge.com/minecraft/mc-mods/glassential-renewed) (`glassential_renewed`) | Funktionale Glasvarianten | Ausbauwunsch / P2 | Frühspiel | — |
| [Handcrafted](https://www.curseforge.com/minecraft/mc-mods/handcrafted) (`handcrafted`) | Möbel und Innenausstattung | Ausbauwunsch / P2 | Frühspiel | — |
| [Little Big Redstone](https://www.curseforge.com/minecraft/mc-mods/little-big-redstone) (`little_big_redstone`) | Kompakte Redstone-Logik | Ausbauwunsch / P2 | Frühspiel | — |
| [Macaw's Bridges](https://www.curseforge.com/minecraft/mc-mods/macaws-bridges) (`macaws_bridges`) | Baukatalog: Bridges | Ausbauwunsch / P2 | Frühspiel | — |
| [Macaw's Doors](https://www.curseforge.com/minecraft/mc-mods/macaws-doors) (`macaws_doors`) | Baukatalog: Doors | Ausbauwunsch / P2 | Frühspiel | — |
| [Macaw's Fences and Walls](https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls) (`macaws_fences_and_walls`) | Baukatalog: Fences and Walls | Ausbauwunsch / P2 | Frühspiel | — |
| [Macaw's Furniture](https://www.curseforge.com/minecraft/mc-mods/macaws-furniture) (`macaws_furniture`) | Baukatalog: Furniture | Ausbauwunsch / P2 | Frühspiel | — |
| [Macaw's Lights and Lamps](https://www.curseforge.com/minecraft/mc-mods/macaws-lights-and-lamps) (`macaws_lights_and_lamps`) | Baukatalog: Lights and Lamps | Ausbauwunsch / P2 | Frühspiel | — |
| [Macaw's Paths and Pavings](https://www.curseforge.com/minecraft/mc-mods/macaws-paths-and-pavings) (`macaws_paths_and_pavings`) | Baukatalog: Paths and Pavings | Ausbauwunsch / P2 | Frühspiel | — |
| [Macaw's Roofs](https://www.curseforge.com/minecraft/mc-mods/macaws-roofs) (`macaws_roofs`) | Baukatalog: Roofs | Ausbauwunsch / P2 | Frühspiel | — |
| [Macaw's Stairs](https://www.curseforge.com/minecraft/mc-mods/macaws-stairs) (`macaws_stairs`) | Baukatalog: Stairs | Ausbauwunsch / P2 | Frühspiel | — |
| [Macaw's Trapdoors](https://www.curseforge.com/minecraft/mc-mods/macaws-trapdoors) (`macaws_trapdoors`) | Baukatalog: Trapdoors | Ausbauwunsch / P2 | Frühspiel | — |
| [Macaw's Windows](https://www.curseforge.com/minecraft/mc-mods/macaws-windows) (`macaws_windows`) | Baukatalog: Windows | Ausbauwunsch / P2 | Frühspiel | — |
| [Measurements](https://www.curseforge.com/minecraft/mc-mods/measurements) (`measurements`) | Bauabstände und Fabriklayouts messen | Ausbauwunsch / P2 | Frühspiel | — |
| [Mekanism Covers](https://www.curseforge.com/minecraft/mc-mods/mekanism-covers) (`mekanism_covers`) | Mekanism-Leitungen gestalterisch verkleiden | Ausbauwunsch / P2 | Frühspiel | Elternkandidaten: mekanism |
| [MineColonies](https://www.curseforge.com/minecraft/mc-mods/minecolonies) (`minecolonies`) | Optionale Siedlungsverwaltung und Bauthema | Ausbauwunsch / P2 | Frühspiel | — |
| [More Red](https://www.curseforge.com/minecraft/mc-mods/more-red) (`more_red`) | Redstone-Kabel und zusätzliche Logikbausteine | Ausbauwunsch / P2 | Frühspiel | — |
| [MrCrayfish's Furniture Mod: Refurbished](https://www.curseforge.com/minecraft/mc-mods/refurbished-furniture) (`refurbished_furniture`) | Möbel und nutzbare Innenausstattung | Ausbauwunsch / P2 | Frühspiel | — |
| [Multi-Piston](https://www.curseforge.com/minecraft/mc-mods/multi-piston) (`multi_piston`) | Ergänzende Bau-/Siedlungsmechanik | Ausbauwunsch / P2 | Frühspiel | — |
| [Rechiseled](https://www.curseforge.com/minecraft/mc-mods/rechiseled) (`rechiseled`) | Dekorative Blockvarianten | Ausbauwunsch / P2 | Frühspiel | — |
| [Rechiseled: Chipped](https://www.curseforge.com/minecraft/mc-mods/rechiseled-chipped) (`rechiseled_chipped`) | Dekorationsintegration mit Chipped | Ausbauwunsch / P2 | Frühspiel | Elternkandidaten: rechiseled, chipped |
| [Rechiseled: Create](https://www.curseforge.com/minecraft/mc-mods/rechiseled-create) (`rechiseled_create`) | Create-kompatible Dekorationsvarianten | Ausbauwunsch / P2 | Frühspiel | Elternkandidaten: rechiseled, create |
| [Redstone Pen](https://www.curseforge.com/minecraft/mc-mods/redstone-pen) (`redstone_pen`) | Kompakte sichtbare Redstone-Verbindungen | Ausbauwunsch / P2 | Frühspiel | — |
| [Sawmill](https://www.curseforge.com/minecraft/mc-mods/sawmill) (`sawmill`) | Holzvarianten sinnvoll verarbeiten | Ausbauwunsch / P2 | Frühspiel | — |
| [Security Craft](https://www.curseforge.com/minecraft/mc-mods/security-craft) (`security_craft`) | Optionale Basissicherung im Multiplayer | Ausbauwunsch / P2 | Frühspiel | — |
| [Showcase Item](https://www.curseforge.com/minecraft/mc-mods/showcase-item) (`showcase_item`) | Erreichte Endgame-Objekte ausstellen | Ausbauwunsch / P2 | Frühspiel | — |
| [Simply Light](https://www.curseforge.com/minecraft/mc-mods/simply-light) (`simply_light`) | Schlichte Beleuchtung für große Basen | Ausbauwunsch / P2 | Frühspiel | — |
| [Stylecolonies](https://www.curseforge.com/minecraft/mc-mods/stylecolonies) (`stylecolonies`) | Weitere Baupläne für optionale Siedlungen | Ausbauwunsch / P2 | Frühspiel | — |
| [Supplementaries](https://www.curseforge.com/minecraft/mc-mods/supplementaries) (`supplementaries`) | Bau- und Utilityblöcke | Ausbauwunsch / P2 | Frühspiel | — |
| [Xtones Reworked](https://www.curseforge.com/minecraft/mc-mods/xtones-reworked) (`xtones_reworked`) | Industrie-/Sci-Fi-Baublöcke | Ausbauwunsch / P2 | Frühspiel | — |

## Worldgen

| Mod / Projektseite | Geplante Rolle | Auswahl / Priorität | Aufnahmephase | Hinweise |
| --- | --- | --- | --- | --- |
| [Allthemodium](https://www.curseforge.com/minecraft/mc-mods/allthemodium) (`allthemodium`) | Seltene gestufte Erze und passende Expeditionsrollen | Ausbauwunsch / P2 | Frühspiel | Eigene Pack-Rolle und Verteilrechte prüfen; keine ATM-Konfigurationen ungeprüft übernehmen. |
| [ATO - All the Ores](https://www.curseforge.com/minecraft/mc-mods/ato) (`ato`) | Gemeinsamer Erz- und Werkstoffkatalog | Ausbauwunsch / P2 | Frühspiel | Eigene Pack-Rolle und Verteilrechte prüfen; keine ATM-Konfigurationen ungeprüft übernehmen. |
| [Bibliobiomes Legacy](https://www.curseforge.com/minecraft/mc-mods/bibliobiomes-legacy) (`bibliobiomes_legacy`) | Biome passend zur Bibliocraft-Baufamilie | Ausbauwunsch / P2 | Frühspiel | — |
| [ChoiceTheorem's Overhauled Village](https://www.curseforge.com/minecraft/mc-mods/choicetheorems-overhauled-village) (`choicetheorems_overhauled_village`) | Abgestimmte neue Dorfvarianten | Ausbauwunsch / P2 | Frühspiel | — |
| [Nullscape](https://www.curseforge.com/minecraft/mc-mods/nullscape) (`nullscape`) | Eigener End-Terrainentwurf | Ausbauwunsch / P2 | Frühspiel | Weltprofil vor öffentlichem Save einfrieren; nur abgestimmte Kombinationen aufnehmen. |
| [Oh The Biomes We've Gone](https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-weve-gone) (`oh_the_biomes_weve_gone`) | Großer optionaler Biom-/Holzkatalog | Ausbauwunsch / P2 | Frühspiel | Weltprofil vor öffentlichem Save einfrieren; nur abgestimmte Kombinationen aufnehmen. |
| [Oh The Trees You'll Grow](https://www.curseforge.com/minecraft/mc-mods/oh-the-trees-youll-grow) (`oh_the_trees_youll_grow`) | Passender erweiterter Baumkatalog | Ausbauwunsch / P2 | Frühspiel | — |
| [Regions Unexplored (forge/fabric)](https://www.curseforge.com/minecraft/mc-mods/regions-unexplored) (`regions_unexplored`) | Zusätzliche Biome und passende Bauressourcen | Ausbauwunsch / P2 | Frühspiel | Weltprofil vor öffentlichem Save einfrieren; nur abgestimmte Kombinationen aufnehmen. |
| [Simple Weather](https://www.curseforge.com/minecraft/mc-mods/simple-weather) (`simple_weather`) | Ergänzende Wetterdarstellung und Umweltrolle prüfen | Ausbauwunsch / P2 | Frühspiel | — |
| [Tectonic](https://modrinth.com/mod/tectonic) (`tectonic`) | Terrainform | Ausbauwunsch / P2 | Frühspiel | Mod-/Datapack-Ausgabe und gemeinsames Terrainprofil konkret wählen; nicht doppelt zählen. Weltprofil vor öffentlichem Save einfrieren; nur abgestimmte Kombinationen aufnehmen. |
| [Terralith](https://modrinth.com/mod/terralith) (`terralith`) | Biom-/Terrainvielfalt | Ausbauwunsch / P2 | Frühspiel | Mod-/Datapack-Ausgabe und gemeinsames Terrainprofil konkret wählen; nicht doppelt zählen. Weltprofil vor öffentlichem Save einfrieren; nur abgestimmte Kombinationen aufnehmen. |
| [Villages&Pillages](https://www.curseforge.com/minecraft/mc-mods/villages-and-pillages) (`villages_and_pillages`) | Weitere Siedlungs-/Illager-Strukturen | Ausbauwunsch / P2 | Frühspiel | — |

## Kampf & RPG

| Mod / Projektseite | Geplante Rolle | Auswahl / Priorität | Aufnahmephase | Hinweise |
| --- | --- | --- | --- | --- |
| [All The Arcanist Gear](https://www.curseforge.com/minecraft/mc-mods/all-the-arcanist-gear) (`all_the_arcanist_gear`) | Ars-Ausrüstung in die Materialprogression einbinden | Ausbauwunsch / P2 | Mittlere Progression | — |
| [All the Wizard Gear](https://www.curseforge.com/minecraft/mc-mods/all-the-wizard-gear) (`all_the_wizard_gear`) | Zauberausrüstung in die Materialprogression einbinden | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Apotheosis](https://www.curseforge.com/minecraft/mc-mods/apotheosis) (`apotheosis`) | Ausrüstung und Lootsystem | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Apothic Attributes](https://www.curseforge.com/minecraft/mc-mods/apothic-attributes) (`apothic_attributes`) | Attributgrundlage für Kampf- und Ausrüstungsintegration | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Apothic Enchanting](https://www.curseforge.com/minecraft/mc-mods/apothic-enchanting) (`apothic_enchanting`) | Gestufte Verzauberungsprogression | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Apothic Spawners](https://www.curseforge.com/minecraft/mc-mods/apothic-spawners) (`apothic_spawners`) | Gestufte Spawnerautomation mit eigenen Pack-Gates | Ausbauwunsch / P2 | Mittlere Progression | Fortschritts-, Schadens- und Automationsabkürzungen vor Freigabe prüfen. |
| [Artifacts](https://www.curseforge.com/minecraft/mc-mods/artifacts) (`artifacts`) | Optionale ausrüstbare Fundstücke | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Baubley Heart Canisters](https://www.curseforge.com/minecraft/mc-mods/baubley-heart-canisters) (`baubley_heart_canisters`) | Zusätzliche Lebenspunkte erst nach passenden Fortschrittsgates | Ausbauwunsch / P2 | Mittlere Progression | Fortschritts-, Schadens- und Automationsabkürzungen vor Freigabe prüfen. |
| [Creeper Overhaul](https://www.curseforge.com/minecraft/mc-mods/creeper-overhaul) (`creeper_overhaul`) | Biomeabhängige Creeper-Varianten | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Enderman Overhaul](https://www.curseforge.com/minecraft/mc-mods/enderman-overhaul) (`enderman_overhaul`) | Zusätzliche Enderman-Varianten und Begegnungen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Gravitational Modulating Additional Unit](https://www.curseforge.com/minecraft/mc-mods/gravitational-modulating-additional-unit) (`gravitational_modulating_additional_unit`) | Späte Mekanism-Ausrüstungs-Erweiterung | Ausbauwunsch / P2 | Mittlere Progression | Fortschritts-, Schadens- und Automationsabkürzungen vor Freigabe prüfen. |
| [Hardened Armadillos](https://www.curseforge.com/minecraft/mc-mods/hardened-armadillos) (`hardened_armadillos`) | Zusätzliche Kreaturen-/Rüstungsprogression | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Ice and Fire](https://www.curseforge.com/minecraft/mc-mods/ice-and-fire-dragons) (`ice_fire`) | Kreaturen und Bosse | Alternative / P3 | Mittlere Progression | Original-/Community-Ausgabe separat prüfen und genau eine kompatible Variante wählen. Gruppe: ice_fire_distribution |
| [IceAndFire Community Edition](https://www.curseforge.com/minecraft/mc-mods/iceandfire-ce) (`iceandfire_ce`) | Community-Ausgabe für Drachen-/Kreaturenrolle prüfen | Alternative / P3 | Mittlere Progression | Original-/Community-Ausgabe separat prüfen und genau eine kompatible Variante wählen. Gruppe: ice_fire_distribution |
| [Iron Jetpacks](https://www.curseforge.com/minecraft/mc-mods/iron-jetpacks) (`iron_jetpacks`) | Fortschrittsgebundene Flugausrüstung | Ausbauwunsch / P2 | Mittlere Progression | Fortschritts-, Schadens- und Automationsabkürzungen vor Freigabe prüfen. |
| [Iron's Gems 'n Jewelry](https://www.curseforge.com/minecraft/mc-mods/irons-jewelry) (`irons_jewelry`) | Zusätzliche ausrüstbare Boni | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Iron's Spells 'n Spellbooks](https://www.curseforge.com/minecraft/mc-mods/irons-spells-n-spellbooks) (`irons_spells_n_spellbooks`) | Zauberkampf und eigener Magiepfad | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Jonn's Trophies](https://www.curseforge.com/minecraft/mc-mods/jonns-trophies) (`jonns_trophies`) | Optionale Kampftrophäen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [L_Ender's Cataclysm](https://www.curseforge.com/minecraft/mc-mods/lendercataclysm) (`cataclysm`) | Späte Bossbegegnungen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Living Things](https://www.curseforge.com/minecraft/mc-mods/living-things) (`living_things`) | Zusätzliche Kreaturen und Weltbelebung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Mekanism Tools](https://www.curseforge.com/minecraft/mc-mods/mekanism-tools) (`mekanism_tools`) | Werkzeuge aus Mekanism-Werkstoffen | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: mekanism |
| [MmmMmmMmmMmm (Target Dummy)](https://www.curseforge.com/minecraft/mc-mods/mmmmmmmmmmmm) (`mmmmmmmmmmmm`) | Schaden kontrolliert an einer Testfigur vergleichen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Modular Force Field Systems (MFFS)](https://www.curseforge.com/minecraft/mc-mods/mffs) (`mffs`) | Schutzfelder als teure optionale Basissicherung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Mowzie's Mobs](https://www.curseforge.com/minecraft/mc-mods/mowzies-mobs) (`mowzies_mobs`) | Telegraphierte Bosskämpfe | Ausbauwunsch / P2 | Mittlere Progression | Versionsprüfung offen; falls nötig erlaubte Fortsetzung, Port oder Rollen-Ersatz planen. |
| [Relics](https://www.curseforge.com/minecraft/mc-mods/relics-mod) (`relics_mod`) | Optionale Relikte mit eigener Meisterung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Relics: Artifacts Compat](https://www.curseforge.com/minecraft/mc-mods/rar-compat) (`rar_compat`) | Relics-/Artifacts-Integration | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: relics_mod, artifacts |
| [Shiny! Mobs](https://www.curseforge.com/minecraft/mc-mods/shiny) (`shiny`) | Optionale besondere Mobvarianten | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Silent Gear](https://www.curseforge.com/minecraft/mc-mods/silent-gear) (`silent_gear`) | Modulare Werkzeuge | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Silent Gear Metalworks](https://www.curseforge.com/minecraft/mc-mods/silent-gear-metalworks) (`silent_gear_metalworks`) | Werkstoff-/Silent-Gear-Integration | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Silent's Gems](https://www.curseforge.com/minecraft/mc-mods/silents-gems) (`silents_gems`) | Zusätzliche Werkstoffe und Ressourcen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Utility Vest](https://www.curseforge.com/minecraft/mc-mods/utility-vest) (`utility_vest`) | Zusätzliche Utility-Ausrüstung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Variants&Ventures](https://www.curseforge.com/minecraft/mc-mods/variants-and-ventures) (`variants_and_ventures`) | Weitere Kreaturenvarianten und Begegnungen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Wither Skeleton Tweaks](https://www.curseforge.com/minecraft/mc-mods/wither-skeleton-tweaks) (`wither_skeleton_tweaks`) | Wiederholbare Wither-Ressourcen balancieren | Ausbauwunsch / P2 | Mittlere Progression | — |

## Landwirtschaft

| Mod / Projektseite | Geplante Rolle | Auswahl / Priorität | Aufnahmephase | Hinweise |
| --- | --- | --- | --- | --- |
| [Aquaculture 2](https://www.curseforge.com/minecraft/mc-mods/aquaculture) (`aquaculture`) | Fischerei und ergänzende Nahrungsressourcen | Ausbauwunsch / P2 | Frühspiel | — |
| [Botany Pots](https://www.curseforge.com/minecraft/mc-mods/botany-pots) (`botany_pots`) | Kompakte gestufte Pflanzenproduktion | Ausbauwunsch / P2 | Frühspiel | — |
| [Botany Pots - Mystical Agriculture Compat](https://www.curseforge.com/minecraft/mc-mods/botany-pots-mystical-agriculture-compat) (`botany_pots_mystical_agriculture_compat`) | Ressourcenpflanzen in Botany Pots mit Saatgates | Ausbauwunsch / P2 | Frühspiel | Elternkandidaten: botany_pots, mystical_agriculture |
| [Botany Trees](https://www.curseforge.com/minecraft/mc-mods/botany-trees) (`botany_trees`) | Kompakte Baumautomation | Ausbauwunsch / P2 | Frühspiel | — |
| [Cobblegen Galore](https://www.curseforge.com/minecraft/mc-mods/cobblegen-galore) (`cobblegen_galore`) | Gestufte erneuerbare Steinressourcen | Ausbauwunsch / P2 | Frühspiel | — |
| [Cooking for Blockheads](https://www.curseforge.com/minecraft/mc-mods/cooking-for-blockheads) (`cooking_for_blockheads`) | Küchen und Lebensmittelverwaltung | Ausbauwunsch / P2 | Frühspiel | — |
| [Easy Villagers](https://www.curseforge.com/minecraft/mc-mods/easy-villagers) (`easy_villagers`) | Kompakte Dorfbewohnerrollen; Handel und Automation auditieren | Ausbauwunsch / P2 | Frühspiel | — |
| [Farmer's Delight](https://www.curseforge.com/minecraft/mc-mods/farmers-delight) (`farmers_delight`) | Nahrung und Landwirtschaft | Kernwunsch / P0 | Frühspiel | — |
| [Farming for Blockheads](https://www.curseforge.com/minecraft/mc-mods/farming-for-blockheads) (`farming_for_blockheads`) | Landwirtschaftlicher Einkauf und Farmkomfort | Ausbauwunsch / P2 | Frühspiel | — |
| [Harvest with ease](https://www.curseforge.com/minecraft/mc-mods/harvest-with-ease) (`harvest_with_ease`) | Ernten komfortabler bedienen | Alternative / P3 | Frühspiel | Gruppe: harvest_input |
| [Mama's Herbs and Harvest](https://www.curseforge.com/minecraft/mc-mods/mamas-herbs-and-harvest) (`mamas_herbs_and_harvest`) | Weitere Kräuter und Landwirtschaft | Ausbauwunsch / P2 | Frühspiel | — |
| [Modular Bees](https://www.curseforge.com/minecraft/mc-mods/modular-bees) (`modular_bees`) | Ausbau des Bienen-/Ressourcenzweigs | Ausbauwunsch / P2 | Frühspiel | — |
| [Mystical Agradditions](https://www.curseforge.com/minecraft/mc-mods/mystical-agradditions) (`mystical_agradditions`) | Späte Stufen der Ressourcenpflanzen | Ausbauwunsch / P2 | Frühspiel | — |
| [Mystical Agriculture](https://www.curseforge.com/minecraft/mc-mods/mystical-agriculture) (`mystical_agriculture`) | Gestufte Ressourcenpflanzen | Kernwunsch / P0 | Frühspiel | — |
| [Mystical Customization](https://www.curseforge.com/minecraft/mc-mods/mystical-customization) (`mystical_customization`) | Ressourcenpflanzen an Expert-Rezepte anpassen | Ausbauwunsch / P2 | Frühspiel | — |
| [Pam's HarvestCraft 2 - Crops](https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-crops) (`pams_harvestcraft_2_crops`) | Zusätzliche Nutzpflanzen | Ausbauwunsch / P2 | Frühspiel | — |
| [Pam's HarvestCraft 2 - Food Core](https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-food-core) (`pams_harvestcraft_2_food_core`) | Grundrezepte des erweiterten Nahrungssystems | Ausbauwunsch / P2 | Frühspiel | — |
| [Pam's HarvestCraft 2 - Food Extended](https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-food-extended) (`pams_harvestcraft_2_food_extended`) | Erweiterte Küchen- und Nahrungsrezepte | Ausbauwunsch / P2 | Frühspiel | — |
| [Pam's HarvestCraft 2 - Trees](https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-trees) (`pams_harvestcraft_2_trees`) | Obst- und Nussbäume | Ausbauwunsch / P2 | Frühspiel | — |
| [Productive Bees](https://www.curseforge.com/minecraft/mc-mods/productivebees) (`productive_bees`) | Bestäubung und Bio-Ressourcen | Kernwunsch / P0 | Frühspiel | — |
| [Productive Trees](https://www.curseforge.com/minecraft/mc-mods/productivetrees) (`productivetrees`) | Baumzucht und erneuerbare Holzressourcen | Ausbauwunsch / P2 | Frühspiel | — |
| [Pylons](https://www.curseforge.com/minecraft/mc-mods/pylons) (`pylons`) | Begrenzte Farm-/Effekthilfen nach Fortschritt | Ausbauwunsch / P2 | Frühspiel | — |
| [Reap Mod](https://www.curseforge.com/minecraft/mc-mods/reap-mod) (`reap_mod`) | Alternative Erntebedienung | Alternative / P3 | Frühspiel | Gruppe: harvest_input |
| [Spice of Life: Carrot Edition](https://www.curseforge.com/minecraft/mc-mods/spice-of-life-carrot-edition) (`spice_of_life_carrot_edition`) | Freiwillige Belohnung für vielfältige Ernährung | Ausbauwunsch / P2 | Frühspiel | — |
| [Storage Delight (Forge & Neoforge)](https://www.curseforge.com/minecraft/mc-mods/storage-delight-forge) (`storage_delight_forge`) | Küchenlager passend zu Farmer's Delight | Ausbauwunsch / P2 | Frühspiel | — |
| [Sushi Go Crafting](https://www.curseforge.com/minecraft/mc-mods/sushigocrafting) (`sushigocrafting`) | Zusätzlicher Koch- und Farmzweig | Ausbauwunsch / P2 | Frühspiel | — |
| [Tree Tap](https://www.curseforge.com/minecraft/mc-mods/treetap) (`treetap`) | Erneuerbare Baumprodukte | Ausbauwunsch / P2 | Frühspiel | — |

## Lager & Logistik

| Mod / Projektseite | Geplante Rolle | Auswahl / Priorität | Aufnahmephase | Hinweise |
| --- | --- | --- | --- | --- |
| [Advanced Peripherals](https://www.curseforge.com/minecraft/mc-mods/advanced-peripherals) (`advanced_peripherals`) | Computersteuerung und Schnittstellen zu anderen Maschinen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [AdvancedAE](https://www.curseforge.com/minecraft/mc-mods/advancedae) (`advancedae`) | Erweiterte AE2-Fertigung und größere Automationsaufgaben | Ausbauwunsch / P2 | Späte Progression | Elternkandidaten: ae2 |
| [AE2 Import Export Card](https://www.curseforge.com/minecraft/mc-mods/ae2-import-export-card) (`ae2_import_export_card`) | Gezielte ME-Import-/Exportfunktionen | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ae2 |
| [AE2 Network Analyser](https://www.curseforge.com/minecraft/mc-mods/ae2-network-analyser) (`ae2_network_analyser`) | Netzwerkdiagnose im ME-System | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ae2 |
| [AEInfinityBooster](https://www.curseforge.com/minecraft/mc-mods/aeinfinitybooster) (`aeinfinitybooster`) | Späte Reichweitenerweiterung für drahtlose ME-Terminals | Ausbauwunsch / P2 | Späte Progression | Elternkandidaten: ae2 |
| [AllTheCompressed](https://www.curseforge.com/minecraft/mc-mods/allthecompressed) (`allthecompressed`) | Kompakte Darstellung großer Rohstoffmengen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Applied Energistics 2](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2) (`ae2`) | Primäres Digitallager und Autocrafting | Kernwunsch / P0 | Mittlere Progression | Gruppe: primary_storage |
| [Applied Energistics 2 Wireless Terminals](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2-wireless-terminals) (`applied_energistics_2_wireless_terminals`) | Mobiler Zugriff auf das ME-Netz | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Applied Flux](https://www.curseforge.com/minecraft/mc-mods/applied-flux) (`applied_flux`) | Energieintegration in AE-Netzwerke | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ae2 |
| [Applied Mekanistics](https://www.curseforge.com/minecraft/mc-mods/applied-mekanistics) (`applied_mekanistics`) | Mekanism-Medien im AE-Netz verwalten | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ae2, mekanism |
| [Cable Tiers](https://www.curseforge.com/minecraft/mc-mods/cable-tiers) (`cable_tiers`) | Erweiterte Leitungsstufen im optionalen RS-Zweig | Alternative / P3 | Mittlere Progression | Nur bei Wahl des Refined-Storage-Zweigs; AE2 ist der bevorzugte Hauptpfad. Elternkandidaten: refined_storage |
| [DimStorage](https://www.curseforge.com/minecraft/mc-mods/dimstorage) (`dimstorage`) | Dimensionsübergreifende Lagerrolle | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Ender Storage 1.8.+](https://www.curseforge.com/minecraft/mc-mods/ender-storage-1-8) (`ender_storage_1_8`) | Farbkodierter Item-/Fluidtransport | Ausbauwunsch / P2 | Mittlere Progression | — |
| [EnderDrives](https://www.curseforge.com/minecraft/mc-mods/enderdrives) (`enderdrives`) | Ergänzende digitale Laufwerkrolle | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Entangled](https://www.curseforge.com/minecraft/mc-mods/entangled) (`entangled`) | Verknüpfte Maschinenanschlüsse; Fernzugriff begrenzen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Expanded AE](https://www.curseforge.com/minecraft/mc-mods/expanded-ae) (`expanded_ae`) | Zusätzliche AE2-Kapazität nach Leistungsbedarf | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ae2 |
| [ExtendedAE](https://www.curseforge.com/minecraft/mc-mods/ex-pattern-provider) (`ex_pattern_provider`) | Erweiterte Pattern-/Fertigungslogistik | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ae2 |
| [Extra Disks](https://www.curseforge.com/minecraft/mc-mods/extra-disks) (`extra_disks`) | Größere Speichermedien im Refined-Storage-Zweig | Alternative / P3 | Mittlere Progression | Nur bei Wahl des Refined-Storage-Zweigs; AE2 ist der bevorzugte Hauptpfad. Elternkandidaten: refined_storage |
| [ExtraStorage](https://www.curseforge.com/minecraft/mc-mods/extrastorage) (`extrastorage`) | Weitere Speicherkapazität und Fertigungsoptionen für RS | Alternative / P3 | Mittlere Progression | Nur bei Wahl des Refined-Storage-Zweigs; AE2 ist der bevorzugte Hauptpfad. Elternkandidaten: refined_storage |
| [Flux Networks](https://www.curseforge.com/minecraft/mc-mods/flux-networks) (`flux_networks`) | Drahtlose FE-Verteilung mit Fortschritts- und Leistungsgrenzen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Functional Storage](https://www.curseforge.com/minecraft/mc-mods/functional-storage) (`functional_storage`) | Schubladenlager für große Itemmengen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Immersive Energistics](https://www.curseforge.com/minecraft/mc-mods/immersive-energistics) (`immersive_energistics`) | Immersive-Engineering-/AE2-Verbindung | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ae2, immersive_engineering |
| [Integrated Crafting](https://www.curseforge.com/minecraft/mc-mods/integrated-crafting) (`integrated_crafting`) | Logikgesteuertes Crafting | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Integrated Dynamics](https://www.curseforge.com/minecraft/mc-mods/integrated-dynamics) (`integrated_dynamics`) | Programmierbare Logik und Maschinensteuerung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Integrated Scripting](https://www.curseforge.com/minecraft/mc-mods/integrated-scripting) (`integrated_scripting`) | Erweiterte Skriptlogik für Fabriksteuerung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Integrated Terminals](https://www.curseforge.com/minecraft/mc-mods/integrated-terminals) (`integrated_terminals`) | Benutzerzugriff auf Integrated-Netzwerke | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Integrated Tunnels](https://www.curseforge.com/minecraft/mc-mods/integrated-tunnels) (`integrated_tunnels`) | Item-/Fluid-/Energietransport per Logik | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Interdimensional Wireless Transmitter](https://www.curseforge.com/minecraft/mc-mods/interdimensional-wireless-transmitter) (`interdimensional_wireless_transmitter`) | Dimensionale Netzwerkreichweite nach Freigabe | Ausbauwunsch / P2 | Späte Progression | — |
| [Item Collectors](https://www.curseforge.com/minecraft/mc-mods/item-collectors) (`item_collectors`) | Items einsammeln ohne lose Entitymengen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [LaserIO](https://www.curseforge.com/minecraft/mc-mods/laserio) (`laserio`) | Konfigurierbare Item-/Fluid-/Energieverteilung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [ME Requester](https://www.curseforge.com/minecraft/mc-mods/merequester) (`merequester`) | Automatische Lagerbestände im ME-Netz verwalten | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ae2 |
| [MEGA Cells](https://www.curseforge.com/minecraft/mc-mods/mega-cells) (`mega_cells`) | Große gestufte ME-Speicherkapazität | Ausbauwunsch / P2 | Späte Progression | Elternkandidaten: ae2 |
| [Mekanistic Routers](https://www.curseforge.com/minecraft/mc-mods/mekanistic-routers) (`mekanistic_routers`) | Router-/Mekanism-Verbindung | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: mekanism, modular_routers |
| [Modern Dynamics](https://www.curseforge.com/minecraft/mc-mods/modern-dynamics) (`modern_dynamics`) | Ergänzende Transportrolle | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Modular Routers](https://www.curseforge.com/minecraft/mc-mods/modular-routers) (`modular_routers`) | Begrenzte dezentrale Automation | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Pipez](https://www.curseforge.com/minecraft/mc-mods/pipez) (`pipez`) | Einfacher früher Item-/Fluid-/Energietransport | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Pocket Storage](https://www.curseforge.com/minecraft/mc-mods/pocket-storage) (`pocket_storage`) | Kompakte persönliche Rohstofflagerung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Polymorphic Energistics](https://www.curseforge.com/minecraft/mc-mods/polymorphic-energistics) (`polymorphic_energistics`) | Mehrdeutige Rezepte im ME-System behandeln | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: polymorph, ae2 |
| [Refined Storage](https://www.curseforge.com/minecraft/mc-mods/refined-storage) (`refined_storage`) | Alternatives primäres Digitallager | Alternative / P3 | Mittlere Progression | Nur bei Wahl des Refined-Storage-Zweigs; AE2 ist der bevorzugte Hauptpfad. Gruppe: primary_storage |
| [Refined Storage - Curios Integration](https://www.curseforge.com/minecraft/mc-mods/refined-storage-curios-integration) (`refined_storage_curios_integration`) | Mobiles RS-Ausrüstungsinterface | Alternative / P3 | Mittlere Progression | Nur bei Wahl des Refined-Storage-Zweigs; AE2 ist der bevorzugte Hauptpfad. Elternkandidaten: refined_storage |
| [Refined Storage - Mekanism Integration](https://www.curseforge.com/minecraft/mc-mods/refined-storage-mekanism-integration) (`refined_storage_mekanism_integration`) | Mekanism-Medien im RS-Zweig | Alternative / P3 | Mittlere Progression | Nur bei Wahl des Refined-Storage-Zweigs; AE2 ist der bevorzugte Hauptpfad. Elternkandidaten: refined_storage |
| [Refined Storage - Quartz Arsenal](https://www.curseforge.com/minecraft/mc-mods/refined-storage-quartz-arsenal) (`refined_storage_quartz_arsenal`) | Zusätzliche RS-Ausrüstungsrolle | Alternative / P3 | Mittlere Progression | Nur bei Wahl des Refined-Storage-Zweigs; AE2 ist der bevorzugte Hauptpfad. Elternkandidaten: refined_storage |
| [Refined Types](https://www.curseforge.com/minecraft/mc-mods/refined-types) (`refined_types`) | Ergänzende Speichertypen im RS-Zweig | Alternative / P3 | Mittlere Progression | Nur bei Wahl des Refined-Storage-Zweigs; AE2 ist der bevorzugte Hauptpfad. Elternkandidaten: refined_storage |
| [RFTools Storage](https://www.curseforge.com/minecraft/mc-mods/rftools-storage) (`rftools_storage`) | Weitere spezialisierte Lageroption | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Sophisticated Backpacks](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks) (`sophisticated_backpacks`) | Erweiterbare persönliche Lagerung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Sophisticated Backpacks Create Integration](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks-create-integration) (`sophisticated_backpacks_create_integration`) | Rucksack-/Create-Integration | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: sophisticated_backpacks, create |
| [Sophisticated Storage](https://www.curseforge.com/minecraft/mc-mods/sophisticated-storage) (`sophisticated_storage`) | Erweiterbare Basislagerung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Sophisticated Storage Create Integration](https://www.curseforge.com/minecraft/mc-mods/sophisticated-storage-create-integration) (`sophisticated_storage_create_integration`) | Lager-/Create-Integration | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: sophisticated_storage, create |
| [Sophisticated Storage in Motion](https://www.curseforge.com/minecraft/mc-mods/sophisticated-storage-in-motion) (`sophisticated_storage_in_motion`) | Lager auf beweglichen Konstruktionen | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: sophisticated_storage, create |
| [Soulplied Energistics](https://www.curseforge.com/minecraft/mc-mods/soulplied-energistics) (`soulplied_energistics`) | Seelen-/AE2-Integrationsrolle prüfen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Super Factory Manager ( SFM )](https://www.curseforge.com/minecraft/mc-mods/super-factory-manager) (`super_factory_manager`) | Programmierte Steuerung komplexer Fabrikabläufe | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Universal Grid](https://www.curseforge.com/minecraft/mc-mods/universal-grid) (`universal_grid`) | Optionaler mobiler Lagerzugriff | Ausbauwunsch / P2 | Mittlere Progression | — |
| [XNet](https://www.curseforge.com/minecraft/mc-mods/xnet) (`xnet`) | Mehrmedien-Logistik | Ausbauwunsch / P2 | Mittlere Progression | — |

## Integration

| Mod / Projektseite | Geplante Rolle | Auswahl / Priorität | Aufnahmephase | Hinweise |
| --- | --- | --- | --- | --- |
| [AE2 JEI Integration](https://www.curseforge.com/minecraft/mc-mods/ae2-jei-integration) (`ae2_jei_integration`) | ME-Rezepte und Rezeptanzeige verbinden | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ae2 |
| [AE2: Crafting Tree](https://www.curseforge.com/minecraft/mc-mods/ae2-crafting-tree) (`ae2_crafting_tree`) | Abhängigkeiten von ME-Fertigungsaufträgen anzeigen | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: ae2 |
| [Almost Unified](https://www.curseforge.com/minecraft/mc-mods/almost-unified) (`almost_unified`) | Gemeinsame Materialien und Rezeptvereinheitlichung | Kernwunsch / P0 | Fundament | — |
| [FancyMenu](https://www.curseforge.com/minecraft/mc-mods/fancymenu) (`fancymenu`) | Eigene Menüs und Einstieg ins Pack | Alternative / P3 | Mittlere Progression | Gruppe: pack_menu |
| [FTB Filter System](https://www.curseforge.com/minecraft/mc-mods/ftb-filter-system) (`ftb_filter_system`) | Filterbasis für ausgewählte FTB-Integrationen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [FTB JEI Extras](https://www.curseforge.com/minecraft/mc-mods/ftb-jei-extras) (`ftb_jei_extras`) | Zusätzliche Rezept-/Questanzeige nach API-Prüfung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [FTB XMod Compat](https://www.curseforge.com/minecraft/mc-mods/ftb-xmod-compat) (`ftb_xmod_compat`) | Kompatibilität der gewählten FTB-Systeme | Ausbauwunsch / P2 | Mittlere Progression | — |
| [In Control!](https://www.curseforge.com/minecraft/mc-mods/in-control) (`in_control`) | Spawns und Mobbedingungen für Progression abstimmen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [KubeJS](https://www.curseforge.com/minecraft/mc-mods/kubejs) (`kubejs`) | Rezepte, Tags, kleine Eventbrücken | Kernwunsch / P0 | Fundament | — |
| [KubeJS Tweaks](https://www.curseforge.com/minecraft/mc-mods/kubejs-tweaks) (`kubejs_tweaks`) | Zusätzliche Packskript-Hilfen nach API-Prüfung | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Load My F***ing Tags](https://www.curseforge.com/minecraft/mc-mods/lmft) (`lmft`) | Tags zuverlässig laden; Einsatz nur bei nachgewiesenem Bedarf | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Monocle](https://www.curseforge.com/minecraft/mc-mods/monocle) (`monocle`) | Zusätzliche Ars-Integration nach konkretem Bedarf | Ausbauwunsch / P2 | Mittlere Progression | — |
| [More Red x CC:Tweaked Compat](https://www.curseforge.com/minecraft/mc-mods/more-red-x-cc-tweaked-compat) (`more_red_x_cc_tweaked_compat`) | Computer-/Redstone-Integration | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: more_red, cc_tweaked |
| [Occultism KubeJS](https://www.curseforge.com/minecraft/mc-mods/occultism-kubejs) (`occultism_kubejs`) | Ritualrezepte an die Packprogression anbinden | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: occultism, kubejs |
| [Omega Core (Eigenentwicklung)](https://github.com/ACABadAngel/ATM-Omega-Edition) (`omega_core`) | Eigene Forschung, Maschinen, Bosse, Teamdaten und Produktionsnachweise | Eigenentwicklung / P0 | Fundament | Geplantes eigenes Projekt; noch keine implementierte Mod. |
| [Open Loader](https://www.curseforge.com/minecraft/mc-mods/open-loader) (`open_loader`) | Packdaten und Ressourcen gezielt laden | Ausbauwunsch / P2 | Mittlere Progression | — |
| [PackMenu](https://www.curseforge.com/minecraft/mc-mods/packmenu) (`packmenu`) | Alternative Pack-Menüplattform | Alternative / P3 | Mittlere Progression | Gruppe: pack_menu |
| [Ponder for KubeJS](https://www.curseforge.com/minecraft/mc-mods/ponder) (`ponder`) | Schrittweise Bauanleitungen für Packmaschinen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Quests Lang Splitter](https://www.curseforge.com/minecraft/mc-mods/ftb-quests-lang-splitter) (`ftb_quests_lang_splitter`) | Questtexte in getrennte Sprachdateien aufteilen | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Refined Storage - JEI Integration](https://www.curseforge.com/minecraft/mc-mods/refined-storage-jei-integration) (`refined_storage_jei_integration`) | Rezeptanzeige im RS-Zweig | Alternative / P3 | Mittlere Progression | Nur bei Wahl des Refined-Storage-Zweigs; AE2 ist der bevorzugte Hauptpfad. Elternkandidaten: refined_storage |
| [Restrictions](https://www.curseforge.com/minecraft/mc-mods/restrictions) (`restrictions`) | Gezielte Benutzungsregeln für Pack-Gates | Ausbauwunsch / P2 | Mittlere Progression | — |
| [Sinytra Connector](https://www.curseforge.com/minecraft/mc-mods/sinytra-connector) (`connector`) | Gezielte Fabric-Kompatibilität | Ausbauwunsch / P2 | Mittlere Progression | Nur für explizit getestete Fabric-Mods; kein allgemeiner Versionskonverter. |
| [Theurgy KubeJS](https://www.curseforge.com/minecraft/mc-mods/theurgy-kubejs) (`theurgy_kubejs`) | Alchemie an Expert-Rezepte anbinden | Ausbauwunsch / P2 | Mittlere Progression | Elternkandidaten: theurgy, kubejs |

## Performance

| Mod / Projektseite | Geplante Rolle | Auswahl / Priorität | Aufnahmephase | Hinweise |
| --- | --- | --- | --- | --- |
| [Accelerated Decay](https://www.curseforge.com/minecraft/mc-mods/accelerated-decay) (`accelerated_decay`) | Blattabbau-/Decay-Verhalten unter Last prüfen | Ausbauwunsch / P2 | Optionales Profil | — |
| [AI Improvements](https://www.curseforge.com/minecraft/mc-mods/ai-improvements) (`ai_improvements`) | KI-Kosten im Referenzprofil prüfen | Ausbauwunsch / P2 | Optionales Profil | — |
| [AllTheLeaks (Memory Leak Fix)](https://www.curseforge.com/minecraft/mc-mods/alltheleaks) (`alltheleaks`) | Speicherleck-Korrekturen für den gewählten Modstand prüfen | Ausbauwunsch / P2 | Optionales Profil | — |
| [AttributeFix](https://www.curseforge.com/minecraft/mc-mods/attributefix) (`attributefix`) | Attributgrenzen für starke Endgame-Ausrüstung prüfen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Clumps](https://www.curseforge.com/minecraft/mc-mods/clumps) (`clumps`) | Erfahrungskugeln bündeln und Entitylast senken | Ausbauwunsch / P2 | Optionales Profil | — |
| [Connectivity](https://www.curseforge.com/minecraft/mc-mods/connectivity) (`connectivity`) | Verbindungsdiagnose und Netzwerkstabilität prüfen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Embeddium](https://www.curseforge.com/minecraft/mc-mods/embeddium) (`embeddium`) | Alternativer Clientrenderer | Alternative / P3 | Optionales Profil | Alternative zu Sodium; keine pauschale gemeinsame Installation. Gruppe: renderer |
| [FastFurnace](https://www.curseforge.com/minecraft/mc-mods/fastfurnace) (`fastfurnace`) | Ofenverarbeitung profilieren und optimieren | Ausbauwunsch / P2 | Optionales Profil | — |
| [FastSuite](https://www.curseforge.com/minecraft/mc-mods/fastsuite) (`fastsuite`) | Rezeptverarbeitung profilieren und optimieren | Ausbauwunsch / P2 | Optionales Profil | — |
| [FastWorkbench](https://www.curseforge.com/minecraft/mc-mods/fastworkbench) (`fastworkbench`) | Werkbankverarbeitung profilieren und optimieren | Ausbauwunsch / P2 | Optionales Profil | — |
| [FerriteCore](https://www.curseforge.com/minecraft/mc-mods/ferritecore) (`ferritecore`) | Speicheroptimierung | Kernwunsch / P0 | Fundament | — |
| [Get It Together, Drops!](https://www.curseforge.com/minecraft/mc-mods/get-it-together-drops) (`get_it_together_drops`) | Lose Itemmengen und Entitylast begrenzen | Ausbauwunsch / P2 | Optionales Profil | — |
| [I'm Fast](https://www.curseforge.com/minecraft/mc-mods/im-fast) (`im_fast`) | Zusätzliche Performance-Eingriffe nur nach isoliertem A/B-Test | Ausbauwunsch / P2 | Optionales Profil | — |
| [ImmediatelyFast](https://www.curseforge.com/minecraft/mc-mods/immediatelyfast) (`immediatelyfast`) | Client-Rendering anhand eines Referenzprofils optimieren | Ausbauwunsch / P2 | Optionales Profil | — |
| [Jupiter](https://www.curseforge.com/minecraft/mc-mods/jupiter) (`jupiter`) | Server-/Laufzeitoptimierung nur nach isoliertem A/B-Test | Ausbauwunsch / P2 | Optionales Profil | — |
| [Let Me Despawn](https://www.curseforge.com/minecraft/mc-mods/let-me-despawn) (`let_me_despawn`) | Entladungs-/Despawnverhalten profilieren | Ausbauwunsch / P2 | Optionales Profil | — |
| [ModernFix](https://www.curseforge.com/minecraft/mc-mods/modernfix) (`modernfix`) | Messbare Laufzeit-/Speicherverbesserung | Kernwunsch / P0 | Fundament | — |
| [Nolijium](https://www.curseforge.com/minecraft/mc-mods/nolijium) (`nolijium`) | Optimierungsstack nur nach isoliertem Konflikt- und Lasttest | Ausbauwunsch / P2 | Optionales Profil | — |
| [ServerCore](https://www.curseforge.com/minecraft/mc-mods/servercore) (`servercore`) | Server-Tick-/Entityverhalten anhand fester Szenarien abstimmen | Ausbauwunsch / P2 | Optionales Profil | — |
| [Sodium](https://modrinth.com/mod/sodium) (`sodium`) | Primärer Clientrenderer | Alternative / P3 | Optionales Profil | Genau einen primären Renderer auswählen; mit Shadern und Modellen testen. Gruppe: renderer |
| [spark](https://www.curseforge.com/minecraft/mc-mods/spark) (`spark`) | Profiling und Evidenz | Kernwunsch / P0 | Fundament | — |

## Audio & Grafik

| Mod / Projektseite | Geplante Rolle | Auswahl / Priorität | Aufnahmephase | Hinweise |
| --- | --- | --- | --- | --- |
| [Auroras](https://www.curseforge.com/minecraft/mc-mods/auroras) (`auroras`) | Optionale Himmelsatmosphäre | Ausbauwunsch / P3 | Optionales Profil | — |
| [ConnectedTexturesMod](https://www.curseforge.com/minecraft/mc-mods/ctm) (`ctm`) | Verbundene Texturen für passende Ressourcen | Ausbauwunsch / P3 | Optionales Profil | Ressourcenabhängig gegenüber Fusion prüfen; keine pauschale doppelte Renderintegration. |
| [Drippy Loading Screen](https://www.curseforge.com/minecraft/mc-mods/drippy-loading-screen) (`drippy_loading_screen`) | Eigener Ladebildschirm | Ausbauwunsch / P3 | Optionales Profil | — |
| [FlickerFix](https://www.curseforge.com/minecraft/mc-mods/flickerfix) (`flickerfix`) | Darstellungsflackern im Zielprofil korrigieren | Ausbauwunsch / P3 | Optionales Profil | — |
| [Fusion (Connected Textures)](https://www.curseforge.com/minecraft/mc-mods/fusion-connected-textures) (`fusion_connected_textures`) | Alternative verbundene Texturen nach Ressourcenbedarf | Ausbauwunsch / P3 | Optionales Profil | Ressourcenabhängig gegenüber CTM prüfen; Renderer und Modelle gemeinsam testen. |
| [Iris Shaders](https://www.curseforge.com/minecraft/mc-mods/irisshaders) (`irisshaders`) | Optionales Shaderprofil mit kompatiblem Renderer | Ausbauwunsch / P3 | Optionales Profil | — |
| [Model Gap Fix](https://www.curseforge.com/minecraft/mc-mods/model-gap-fix) (`model_gap_fix`) | Sichtbare Modellspalten im Clientprofil korrigieren | Ausbauwunsch / P3 | Optionales Profil | — |
| [Not Enough Animations](https://www.curseforge.com/minecraft/mc-mods/not-enough-animations) (`not_enough_animations`) | Zusätzliche sichtbare Spieleranimationen | Ausbauwunsch / P3 | Optionales Profil | — |
