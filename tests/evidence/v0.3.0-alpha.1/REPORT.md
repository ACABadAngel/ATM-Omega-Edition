# Arcane Age – Prüfbericht 0.3.0-alpha.1

Stand: 21.10.2026. Minecraft 1.21.1, NeoForge 21.1.264, Java 21; Linux-Headless-Testserver. 21 Client-/20 Server-JARs im Lock. Die Testwelt ist eine separate Kopie der elektrischen Alpha-Welt; kein Spielersave wurde überschrieben. Java-Testargumente: `-Xms1G -Xmx4G -XX:ActiveProcessorCount=4`. Keine GUI und keine verbundenen Spieler.

## Umfang

Die sechs zusätzlichen Projekte sind Ars Nouveau 5.13.3, Occultism 1.224.5, Curios 9.5.1+1.21.1, GeckoLib 4.9.3, Modonomicon 1.120.7 und SmartBrainLib 1.16.11. Abhängigkeiten stammen aus den gepinnten JAR-Metadaten; Ars verwendet dort `mandatory=true`. Lock-Größen und SHA-1/SHA-512 sind geprüft. Die Distribution enthält Manifest/eigene Overrides und keine fremden JARs.

13 Offline-Regressionstests bestanden nach der Erweiterung: reproduzierbare und saubere ZIPs, Dependency-Closure, Downloadkorruption, Installer-/Backup-Schutz, Questgraph, eindeutige IDs und Erhalt sämtlicher 22 veröffentlichter Quest-/Task-/Reward-IDs. Die Reihenfolge in der JSON-Quelle verändert deren generierte IDs nicht.

Der Server importiert drei Kapitel, 38 Quests und zwei Sprachtabellen. KubeJS meldet 17 hinzugefügte und sechs entfernte Rezepte ohne fehlgeschlagene Rezepte. Alle neuen Questitems lösen gegen die echte Registry auf. Die getesteten neuen Werkbankgrids liefern jeweils genau einen Treffer; beide alten Goldring-Schalenrezepte und der native Apparatus-Craft sind entfernt.

## Laufzeitverarbeitung

[arcane-chain.json](arcane-chain.json) enthält 55 bestandene Prüfungen. Zwei echte Volcanic Sourcelinks verbrennen Kohleblöcke und übertragen Source in zwei Jars. Die Imbuement Chamber verarbeitet Amethyst zum Runenkristall; ihre beiden Sockelkatalysatoren bleiben erhalten. Eine getrennte Kammer verarbeitet Lapis mit passiver Source zum nativen Source Gem.

Der echte Enchanting Apparatus produziert zwei Binder. Jeder Start reduziert den zugehörigen Source Jar um genau 1000. Die acht Sockelzutaten werden nach jeder Verarbeitung geleert. Zwei echte Spirit-Fire-Blöcke wandeln fallengelassene Andesit-/Diamant-Itementities in Otherstone und Spirit Attuned Gem um. Die Fixture stellt Rohstoffe bereit; dies misst keinen Survival-Ressourcenbedarf oder Durchsatz. Der Omega-Kern wird über den echten RecipeManager als eindeutiger Craft geprüft; der für die Save-Prüfung platzierte Kernstack ist ein Testitem.

Der native FTB-KillTask ignoriert eine Zombieinstanz, zählt eine Instanz des registrierten Chimera-Typs und zählt nach Abschluss kein zweites Mal. Die synthetische Team-ID wird für den Neustart gespeichert. Diese direkte Adapterprüfung beweist weder ein Spieler-Kill-Event noch echte Kampfteilnahme.

Nach Entfernen der beiden Source-Produzenten und Leeren der Kammer wird die JVM vollständig gestoppt. [restart.json](restart.json) bestätigt alle acht Neustartprüfungen: zwei produzierte Binder, Runenkristall, neuer Kernstack, exakt **3399 und 1999 Source** in den isolierten Jars, drei Kapitel, gespeicherter KillTask-Fortschritt und die alte 120-Platten-Lieferung. [electrical-preservation.json](electrical-preservation.json) bestätigt außerdem weiterhin zwei Electrical Cores und unverändert 572131 J im alten getrennten Mekanism-Speicher. [upgrade-smoke.json](upgrade-smoke.json) prüft die alten Rezepte und die zehn Itemregistrierungen.

[locked-artifacts.json](locked-artifacts.json) dokumentiert die geprüften 21 Artefakte; [Fingerprints](fingerprints.json) binden die eigenen Quellen an den Bericht. Der ausschließlich durch testseitige Rhino-Reflexion auf Mekanism-Tiles verursachte `SoundInstance`-Hinweis ist aus der elektrischen Alpha bekannt. In ausgelieferten Scripts gibt es keinen solchen Tilezugriff. [fresh-clean-boot.json](fresh-clean-boot.json) protokolliert zusätzlich einen vollständig neuen Weltstart mit Seed 4202102 und ausschließlich den drei ausgelieferten Server-Scripts: drei Kapitel / 38 Quests / zwei Sprachen, 17 neue und sechs entfernte Rezepte, null KubeJS-Script- oder Rezeptfehler. Der Mekanism-Reflexionshinweis tritt dort nicht auf. Die externe Mojang-Key-Abfrage scheitert im Testnetz; der lokale Weltstart läuft durch. Das ist kein Naturressourcen- oder Clienttest. [Bereinigte Logauszüge](server-excerpts.txt).

## Reproduktion

Nur eine wegwerfbare Serverinstanz verwenden. Die Fixture [omega_arcane_smoke.js](../../runtime_scripts/omega_arcane_smoke.js) baut im Bereich x=32…58, y=89…94 eine Testwerkstatt und liefert Eingabeitems. Sie stellt echte native Blöcke auf; Source wird nicht direkt injiziert. Laufende Timer dürfen vor erneutem Start derselben Fixture nicht überlappen. Nach abgeschlossenem Export speichern und vollständig stoppen. Die Aufbau-Fixture anschließend entfernen und [omega_arcane_restart.js](../../runtime_scripts/omega_arcane_restart.js) einsetzen. Derselbe Weltordner wird mit einer neuen JVM geladen.

Die Kill-Prüfung nutzt die native FTB-Methode `KillTask.kill` mit echten Entityinstanzen und einem synthetischen Team. Das ist ein Adaptertest ohne Spieler-Kill-Event, Ritualausführung oder legitimen Bosskampf. Der native Bossdrop ist außerdem im zugehörigen Ars-Source-JAR bestätigt; ein solcher Quellenbefund ist kein Survival-Kampfprotokoll.

## Offene Abnahme

Client-/Launcherimport, JEI-Rezeptanzeige, beide Sprachoberflächen, vollständiger Solo-Survival-Pfad, native Ritualbedienung und legitimer Chimera-Kampf, echtes FTB-Spieler-Kill-Event, zwei Spieler/Teamwechsel, fünf Seeds, Langzeitleistung, Windows und umfassender Loot-/Handels-/Recycling-Gate-Audit: `not_run`. Die Wilden Chimera ist ein nativer Titan-Prototyp; eigene Boss-KI und geschützte Omega-Teamdaten sind nicht implementiert. Ein Rezept mit Tribute verhindert keine Weitergabe bereits vorhandener Drops.
