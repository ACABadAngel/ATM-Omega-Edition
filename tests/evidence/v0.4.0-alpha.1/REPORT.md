# Industrial Age – Prüfbericht 0.4.0-alpha.1

Stand: 22.10.2026. Linux-Headless-Server, Minecraft 1.21.1, NeoForge 21.1.264 und Java 21. 26 Client-/25 Serverdateien, zwölf eigene Items, 25 Custom-Rezepte und 58 bilinguale Quests in vier Kapiteln. Testargumente: `-Xms1G -Xmx4G -XX:ActiveProcessorCount=4`. Keine grafische Clientinstanz und keine verbundenen Spieler.

## Versionen und Ausgangswelt

[locked-artifacts.json](locked-artifacts.json) bestätigt Größe, SHA-1 und SHA-512 aller 26 gesperrten JARs. Neue Projekte: AE2 19.2.18, GuideME 21.1.19, Industrial Foregoing 3.6.27, Titanium 4.0.51 und Applied Mekanistics 1.6.3. Required-Labels in unterschiedlicher Großschreibung stammen aus den jeweiligen JARs. Keine Drittanbieter-JARs werden im Repository oder Export verteilt. Titanium hat widersprüchliche LGPL-/MIT-Metadaten; im Lock festgehalten.

Die ursprüngliche Arbeitsumgebung enthielt nur die frühere Alpha-Testwelt. Deshalb wurden die veröffentlichten 0.3-Scripts in einer separaten Kopie dieser Welt erneut ausgeführt: reale Create-Presse, Mekanism-Kette und Arcane-Verarbeitung. Nach Speichern wurde der alte Energy Cube vom Generator getrennt. Diese 0.3-Testwelt wurde nochmals als Kopie unter dem neuen 0.4-Modlock geladen. Dies ist eine synthetische Upgradeprüfung und kein Test eines privaten Spielersaves.

Die neue Instanz importiert vier Kapitel, 58 Quests und zwei Sprachen. KubeJS meldet 25 hinzugefügte, zwölf entfernte und null fehlgeschlagene Rezepte. Alte Items, 120-Platten-Lieferung, zwei Electrical Cores und der isolierte Mekanism-Speicher bleiben erhalten. Ebenso zwei produzierte Binder, Runenkristall, arkaner Kernstack, exakt 3399/1999 Source und synthetischer FTB-KillTask-Fortschritt.

## Prüfungen

Dreizehn Offline-Regressionstests bestanden: reproduzierbare und saubere Exporte, Hash-/Installer-/Backup-Schutz, Questgraph und eindeutige IDs. Eine neue Fixture friert sämtliche 38 veröffentlichten Quest-/Task-/Reward-IDs ein, zusätzlich zu den älteren Fixtures. Umordnung der JSON-Quelle verändert diese IDs nicht.

Die neuen getesteten Crafting-Grids haben genau einen Treffer. Native Grundrezepte für Acceptor, Inscriber, Drive und Controller sind entfernt. Die beiden Acceptor-Konvertierungen funktionieren weiterhin. Eine chemische Speicherzelle passt nicht in das Core-Rezept; gefüllter Inhalt wird dadurch nicht als Craftingzutat verbraucht. Alle neuen Questitems lösen gegen die echte Registry auf.

[industrial-chain.json](industrial-chain.json) enthält 79 bestandene Laufzeitprüfungen. Vier echte Fluid Extractors gewinnen zusammen 1984 mB Latex aus Akazienstämmen. Die echte Latex Processing Unit erzeugt zwei Dry Rubber; ein normaler Ofen schmilzt sie zu zwei Kunststoff. Ein echter Metallurgic Infuser verarbeitet vier bereitgestellte Diamond Dust und zwei Infused Alloy zu zwei Reinforced Alloy. Der native Inscriber verarbeitet diese Materialien und zwei bereitgestellte Electrical Cores zu zwei Industrieschaltkreisen. Nach jeder Verarbeitung sind alle drei Inputs leer: der native PRESS-Modus verbraucht Platten und Reagenz tatsächlich.

Ein eigener nativer Charger lädt Certus mit Kohle-erzeugter Energie. In einem kleinen Wasserbecken reagieren Charged Certus, Netherquarz und Redstone nativ zu zwei Fluix. Ein weiterer echter Inscriber druckt Logik und Silizium mit erhaltenen Formen und setzt daraus einen Logic Processor zusammen.

Das reale versorgte ME-Netz enthält Energy Acceptor, Energy Cell und Drive. SIMULATE verändert den Inhalt nicht; MODULATE lagert 128 Kupfer ein, entnimmt 32 und lässt exakt 96 zurück. Der echte Electrolytic Separator verarbeitet bereitgestelltes Wasser mit erzeugter Energie zu beiden chemischen Ausgängen. 128 natürlich produzierte Einheiten werden über den Applied-Mekanistics-Key in eine echte Chemiezelle eingelagert, 32 entnommen und 96 behalten. Das ist ein nativer Storage-API-Test, keine Terminal-GUI- oder Rohrprüfung.

Nach vollständigem Stoppen und neuer JVM bestätigt [restart.json](restart.json) zehn Prüfungen: zwei hergestellte Schaltkreise, zwei Test-Kernstacks, Logic Processor, zwei Fluix, wieder online kommender Drive, genau 96 Kupfer und 96 chemische Einheiten, vier Kapitel sowie unveränderte Liefer-/Bossfortschritte. Die Aufbau-Fixture ist dabei entfernt; sie baut die Testwerkstatt nicht neu auf. Die Core-Rezepte sind über den echten RecipeManager geprüft, die für die Save-Prüfung platzierten Core-Stacks sind Testitems. Kein vollständiger Survival-Durchlauf wird behauptet.

[upgrade-smoke.json](upgrade-smoke.json), [arcane-preservation.json](arcane-preservation.json) und [electrical-preservation.json](electrical-preservation.json) dokumentieren die erhaltene frühere Progression. Die Mekanism-Reflexionswarnung zu einer Client-Soundklasse wird nur durch Test-Tilezugriffe ausgelöst; ausgelieferte Pack-Scripts enthalten solche Zugriffe nicht. Die Curios-Fehler aus IFs ungültigen Slotreferenzen verschwinden mit dem eigenen Datenoverride. [fresh-clean-boot.json](fresh-clean-boot.json) bestätigt einen vollständig neuen Weltstart mit Seed 4202103 und nur den vier ausgelieferten Server-Scripts: 58 Quests, zwei Sprachen, 25 neue und zwölf entfernte Rezepte, null KubeJS-Script- oder Rezeptfehler. Keine ungültigen Curios-Slotreferenzen und keine testseitige Mekanism-Reflexionswarnung treten dabei auf. Die externe Mojang-Key-Abfrage scheitert im Testnetz; der lokale Weltstart läuft durch. [meteorite-locate.json](meteorite-locate.json) bestätigt außerdem, dass der native Locator im neuen Seed einen AE2-Meteoriten bei x=-736/z=-400 findet. Dies ist keine Prüfung des physischen Truheninhalts, keine Clientabnahme und kein Fünf-Seed-Ressourcenaudit.

[Fingerprints](fingerprints.json) binden die eigenen Quellen an diese Prüfung; [bereinigte Serverauszüge](server-excerpts.txt) protokollieren die tatsächlichen Starts und Ergebnisse. Der Planvalidator ignoriert lokale Arbeits-/Buildverzeichnisse, sodass entpackte Upstream-Dokumente keine falschen Projekt-Linkfehler erzeugen.

## Reproduktion und Grenzen

[omega_industrial_smoke.js](../../runtime_scripts/omega_industrial_smoke.js) ausschließlich in einer wegwerfbaren Instanz ausführen. Die Fixture verändert Blöcke x=63…94, y=95…99, stellt Eingabeitems/Wasser bereit und baut echte Maschinen. Elektrizität wird über echte Kohle-Heat-Generators erzeugt; keine Energie wird injiziert. Latex und Gummi entstehen in den nativen IF-Maschinen. Testseitige Transfers nutzen native Tank-/Inventar-APIs; sie beweisen keine Rohr-, Terminal-GUI- oder Autocrafting-Automation.

Native alternative Erwerbswege, spätere Maschinen, persönliche Fortschrittsnachweise und Bossweitergabe benötigen weiterhin einen umfassenden Gate-Audit. Der Controller-Einstieg sperrt nicht sämtliche AE2-Funktionen. Client-/Launcherimport, JEI, Spieler-Terminalbedienung, kompletter Solo-Survival-Pfad, legitimer Bosskampf, Zwei-Spieler-Teams, echte Rohrkonfiguration, Langzeit-/FPS-/TPS-Messungen und Windows: `not_run`.
