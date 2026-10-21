# Alpha 0.2: Rezeptprüfung und elektrischer Einstieg

21.10.2026. Minecraft 1.21.1, NeoForge 21.1.264, Mekanism/Generators 10.7.19.85, Java 21 (Adoptium 21.0.12.1). Linux x86_64, 8-GiB-Container; JVM `-Xms1G -Xmx3G -XX:ActiveProcessorCount=4`. Keine Performance- oder Hardwarefreigabe.

## Geprüfte Änderung

Der frühere Shapeless-Craft mit drei Weizen passte auf Vanillas drei Weizen in einer Reihe. Der neue Ein-Weizen-Craft erhält das Verhältnis 1:1 und konkurriert nicht mit Brot. Der neue Metallurgic Infuser benötigt einen Mechanical Core. Die Ersatzrezepte und die tatsächlichen Mekanism-Materialwege wurden anhand der gepinnten Mod-JARs geprüft; Pflichtabhängigkeiten stammen aus deren `neoforge.mods.toml`.

Primärquellen: [Mekanism-Datei](https://www.curseforge.com/minecraft/mc-mods/mekanism/files/7904058), [Generators-Datei](https://www.curseforge.com/minecraft/mc-mods/mekanism-generators/files/7904061), Modrinth-Metadaten und Hashes in [pack/lock.json](../../../pack/lock.json). Upstream-Tag `v1.21.1-10.7.19.85`, Commit `a00109e4856fd38b9c5b3dd7f22ce4a59cd65a80`.

## Reale Laufzeitprüfungen

Eine gestoppte Alpha-2-Testwelt wurde in eine separate Instanz kopiert, anschließend wurden nur dort der neue Modlock und die neuen Overrides installiert. [upgrade-existing-save.json](upgrade-existing-save.json) prüft erhaltene Mechanical Cores und 120 Platten Lieferfortschritt. Beide FTB-Sprachtabellen, zwei Kapitel und 22 Quests laden; elf Custom-Rezepte werden ohne fehlgeschlagene Rezepte geladen.

[electrical-chain.json](electrical-chain.json) aus [omega_electrical_smoke.js](../../runtime_scripts/omega_electrical_smoke.js) enthält echte Crafting-Matches und Ausgaben. Für Brot in allen drei Werkbankreihen, Ein-Weizen-Faser, Infuser, Heat Generator, Kabel, Infernale Essenz und Electrical Core wird jeweils genau ein Crafting-Treffer verlangt. Das alte Infuser-Rezept hat keinen Treffer. Dies prüft ausgewählte konkrete Eingaben, nicht jeden möglichen Rezeptkonflikt.

Zwei mit Kohle befüllte echte Heat Generators betreiben einen Infuser und einen Stromkreis aus Kabel und Energy Cube. Vier Kupferbarren werden zu vier Infused Alloy, Osmium zu einem Basic Control Circuit. Nach Leeren der Redstone-Infusion wird Eisen zweimal mit Kohlenstoff verarbeitet; zwei Steel Dust werden im echten Ofen zu zwei Stahlbarren geschmolzen. Der separate Speicher wird über Kabel geladen. Keine Energie wird direkt injiziert. Die Testfixture liefert Eingabeitems und füllt Kohle nach; sie beweist keinen Survival-Ressourcenbedarf oder gemessenen Durchsatz.

`/setblock` übernimmt keine Item-Standardkomponenten. Die Fixture konfiguriert deshalb Energieeingänge ausdrücklich, entsprechend einer Benutzerkonfiguration. Ein ausschließlich durch Rhino-Reflexion auf Mekanism-Tiles ausgelöster Hinweis zu `SoundInstance` wird im Testhost protokolliert; die Prüfungen laufen weiter. Die ausgelieferten Packskripte greifen nicht auf diese Tiles zu. [create-press.json](create-press.json) bestätigt auch die weiterhin laufende Create-Wasserpresse.

[restart.json](restart.json) prüft nach vollständigem Stoppen und erneutem JVM-Start die zwei gespeicherten Electrical Cores, einen weiterhin geladenen Energy Cube, den alten Lieferfortschritt und das neue Kapitel. Die elektrische Aufbau-Fixture ist dabei deaktiviert, damit sie gespeicherte Testblöcke nicht ersetzt.

[fresh-world.json](fresh-world.json) prüft die ursprüngliche Bootstrap-Kette in einer neuen Welt. [worldgen.json](worldgen.json) sucht natürliche Osmiumblöcke in einem begrenzten Vier-Chunk-Bereich der neuen Welt mit Seed 4202101; die Fixture platziert keine Erzblöcke. Das ist ein einzelner Worldgen-Stichprobentest, kein Fünf-Seed-Ressourcenaudit.

## Reproduktion und Grenzen

Die Testskripte liegen unter `tests/runtime_scripts/` und werden nicht exportiert. Für den elektrischen Test nur eine wegwerfbare Instanz verwenden: drei Fixtures `omega_smoke.js`, `omega_press_smoke.js`, `omega_electrical_smoke.js` in deren `kubejs/server_scripts/` kopieren und Server starten. Auf vollständige JSON-Ergebnisse warten. Dann speichern/stoppen, elektrische Aufbau-Fixture deaktivieren, `omega_electrical_restart.js` hinzufügen und dieselbe Welt erneut starten. Für den Fresh-World-Test die Restart-Fixture deaktivieren, eine neue Welt wählen und `omega_worldgen_smoke.js` hinzufügen.

Dreizehn Offline-Regressionen prüfen zusätzlich Lock/Exports, Backup-Schutz und stabile alte Quest-/Task-/Reward-IDs, auch bei umsortierter Quelle. [Fingerprints](fingerprints.json) und [bereinigte Logs](server-excerpts.txt) binden die Ergebnisse an den Quellenstand.

Nicht abgenommen: Client/GUI dieser neuen Version, vollständiger Solo-Durchlauf, zwei echte Spieler, konkrete Netherreise, vollständiger Loot-/Recycling-/Maschinen-Gate-Audit, Leistungswerte, natives Windows und Rückmigration. Quests erkennen Items und vorhandene Teamdaten; Generatorlaufzeit, gespeicherte Energiemenge und persönliche Dimensionsbesuche werden durch sie nicht als Forschungsnachweise gemessen.
