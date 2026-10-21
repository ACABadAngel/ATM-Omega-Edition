# Quellen und Verifikationsgrenzen

Stand der Planung: 2026-10-21. Primäre Anforderung ist die [unveränderte Textvorlage](source/original-plan.txt) samt letztem Legacy-Nachtrag. Darin enthaltene Suchtreffer, Bildtitel, Releasezahlen und Aussagen über „aktuelle“ Versionen sind historische Gesprächsinhalte und keine für dieses Repository bestätigten Fakten.

## Primärquellen für die Umsetzung

| Thema | Offizielle Quelle | Verwendung / Grenze |
| --- | --- | --- |
| NeoForge 1.21.1 und Java 21 | [Versionierte Getting-Started-Dokumentation](https://docs.neoforged.net/docs/1.21.1/gettingstarted/) | Toolchain-Baseline; keine konkrete freigegebene Buildnummer abgeleitet |
| Serverinstallation | [NeoForge Server Guide](https://docs.neoforged.net/user/docs/server/) | Installationsablauf; Beispiele anderer Minecraft-Versionen nicht übernehmen |
| KubeJS-Scriptrollen | [Offizielle Events-Übersicht](https://kubejs.com/wiki/events) | Startup-/Server-/Client-Unterscheidung; einzelne APIs pro gewähltem Build prüfen |
| Registrierungen und Neustart | [KubeJS startup_scripts](https://kubejs.com/wiki/folder-structure/startup-scripts/) | Registrierungsänderungen nicht als beliebig hot-reloadbar versprechen |
| FTB Quests | [Offizielles Projekt](https://github.com/FTBTeam/FTB-Quests) | Funktions-/Versionsprüfung und Quellcode; Standardbranch kann anderer Minecraft-Version folgen |
| FTB Quests Releases | [Offizielle Releases](https://github.com/FTBTeam/FTB-Quests/releases) | Passende 1.21.1-Ausgabe auswählen und danach exakt festhalten |
| FTB Formatänderungen | [Offizielles Changelog](https://github.com/FTBTeam/FTB-Quests/blob/main/CHANGELOG.md) | Änderungen an SNBT/Sprachdateien beachten; Zielbuild entscheidet |
| Energieinterface | [NeoForge-Quellprojekt](https://github.com/neoforged/NeoForge) | Konkretes `IEnergyStorage` und Adapter im gewählten 1.21.1-Stand prüfen |
| Mod-Projektidentitäten und Links | [Offizielles ATM-10-Projektverzeichnis am festen Commit](https://github.com/AllTheMods/ATM-10/blob/d12e72c4e5fd5f8f8eb9fd25914cf52384834ba2/MOD_ISSUES.md) | Recherchierte Namen und Projektlinks für die Wunschliste; kein Nachweis aktueller Packzusammensetzung oder Omega-Kompatibilität |

Die [Mod-Wunschliste](../MODLIST.md) ergänzt eigenständige Projektseiten für die vorherigen Legacy-/Raumfahrt-/Terrain-/Renderer-Kandidaten. Die jeweilige Fundstelle steht pro Zeile in `planning/mod-candidates.csv`. Quellenstufen trennen beobachtete Kataloglinks, recherchierte Projektseiten und eigenes Design. Es wurden keine fremden Packkonfigurationen, Assets oder Mod-JARs übernommen.

Die Dokumentations-/Projektquellen wurden zur Planungsorientierung recherchiert. Diese Aussage zur ursprünglichen Planung ist inzwischen durch die versionierten Alpha-Prüfberichte ergänzt: exakte Modlocks und echte Dedicated-Serverstarts liegen vor; eine vollständige Client-/Multiplayer-Abnahme fehlt weiterhin. Keine Mod-Kandidatenzeile darf deshalb auf `approved` gesetzt werden. Registry-, Event-, Rezept- und Builddetails werden bei ihrer tatsächlichen Implementation anhand des festgelegten Quellstands bestätigt.

Eigene Maschinenwerte, Bossmechaniken, Stücklisten, Altersgates und Aufwandsschätzungen sind Designentscheidungen dieses Projekts. Sie stammen nicht aus den verlinkten Fremdprojekten und sind keine versprochenen Fähigkeiten einer einzelnen bestehenden Mod.

## Primärquellen des arkanen Batches

Genaue Downloads und SHA-1/SHA-512 stehen unter `pack/lock.json`. Die veröffentlichten Source-JARs derselben Builds wurden für Serializer, Source-Transfer, Ritual-Augmente und Loot geprüft; sie werden nicht mitverteilt.

| Projekt | Geprüfter Build / offizielle Datei |
| --- | --- |
| Ars Nouveau | [5.13.3 für NeoForge 1.21.1](https://www.curseforge.com/minecraft/mc-mods/ars-nouveau/files/9052154), [Modrinth-Version](https://api.modrinth.com/v2/version/yWDnir1o) |
| Occultism | [1.224.5 für NeoForge 1.21.1](https://www.curseforge.com/minecraft/mc-mods/occultism/files/9127707), [Modrinth-Version](https://api.modrinth.com/v2/version/vPoehZTj) |
| Curios | [9.5.1+1.21.1](https://www.curseforge.com/minecraft/mc-mods/curios/files/6529130) |
| GeckoLib | [4.9.3 NeoForge 1.21.1](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/8893490) |
| Modonomicon | [1.120.7 NeoForge 1.21.1](https://www.curseforge.com/minecraft/mc-mods/modonomicon/files/8970913) |
| SmartBrainLib | [1.16.11 NeoForge 1.21.1](https://www.curseforge.com/minecraft/mc-mods/smartbrainlib/files/7055149) |

Ars nutzt im JAR `mandatory=true` für Curios/GeckoLib; die Modrinth-Dependencies alleine sind unvollständig. Der GPL-/ARR-Lizenzlabel-Unterschied ist im Lock dokumentiert. Für FTB-KillTask, ItemTask und TeamData gilt weiterhin der gepinnte [Quellstand 8c53f35a97d8897c861b097f1e39f4fc3beb3a15](https://github.com/FTBTeam/FTB-Quests/tree/8c53f35a97d8897c861b097f1e39f4fc3beb3a15).
