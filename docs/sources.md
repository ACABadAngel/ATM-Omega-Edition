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

Die Dokumentations-/Projektquellen wurden zur Planungsorientierung recherchiert. Es wurde **kein** kompletter Modresolverlauf und kein Client-/Serverstart durchgeführt. Keine Mod-Kandidatenzeile darf deshalb auf `approved` gesetzt werden. Registry-, Event-, Rezept- und Builddetails werden bei ihrer tatsächlichen Implementation anhand des festgelegten Quellstands bestätigt.

Eigene Maschinenwerte, Bossmechaniken, Stücklisten, Altersgates und Aufwandsschätzungen sind Designentscheidungen dieses Projekts. Sie stammen nicht aus den verlinkten Fremdprojekten und sind keine versprochenen Fähigkeiten einer einzelnen bestehenden Mod.
