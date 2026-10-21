# Elektrischer Einstieg in Alpha 0.2

Der neue Abschnitt setzt den Mechanical Core voraus. Zehn neue Quests führen durch Osmium, Infuser, Generator, Bauteile, Stahl, Kabel, Speicher, Nethermaterialien und Electrical Core. Die zwölf bisherigen Quests bleiben mit ihren IDs erhalten.

## Ohne Strom-Kabel-Zyklus starten

1. Stelle weitere Mechanical Cores her. Ein Kern wird im Metallurgic Infuser verbraucht; ein weiterer wird später Bestandteil des Electrical Core.
2. Schmelze Osmiumerz. In einer aus Alpha 0.1 übernommenen Welt findest du neue Mekanism-Erze in bisher nicht generierten Chunks. Für die Erstprobe ist eine neue Welt am einfachsten.
3. Fertige den Infuser aus vier Eisenbarren, zwei Öfen, zwei Redstone und einem Mechanical Core. Das ursprüngliche Osmium-Mittelteil-Rezept wurde entfernt.
4. Fertige einen Heat Generator nach seinem normalen Rezept und befülle ihn mit Kohle. Sein vorderer Energieausgang muss zunächst direkt an der Maschine liegen. Stelle auf der zugewandten Seite des Infusers Energieeingang ein, falls erforderlich. Stahlkabel sind für diesen Bootstrap nicht nötig.
5. Lege Redstone in den Infusionsslot. **Kupfer** wird in dieser gepinnten Mekanism-Version zu Infused Alloy; Osmium wird zum Basic Control Circuit. Frühere Mekanism-Anleitungen mit Eisen für diese Legierung passen hier nicht.
6. Für Stahl: Eisen mit Kohlenstoff → Enriched Iron; erneut mit Kohlenstoff → Steel Dust; danach im Ofen schmelzen. Kohle/Holzkohle liefert Kohlenstoff. Verwende einen separaten Infuser oder entferne vor dem Wechsel den restlichen Redstone-Infusionsinhalt.
7. Zwei Stahlbarren mit Redstone ergeben acht Basic Universal Cables. Damit verlängerst du den Generatorausgang bis zur Werkstatt.
8. Baue einen Basic Energy Cube über Steel Casing und Energy Tablets. Konfiguriere Eingang und Ausgang und prüfe den tatsächlichen Ladezustand. Die Quest erkennt den Speicher als Item; sie misst keine Ladung oder Maschinenlaufzeit.
9. Zwei Lohenstaub, zwei Quarz und eine Magmacreme ergeben eine Infernale Essenz. Sichere deinen Nether-Rückweg. Diese Materialquest speichert keinen persönlichen Dimensionsbesuch.
10. Vier Infused Alloy, ein Basic Control Circuit, zwei Stahlbarren, eine Infernale Essenz und ein Mechanical Core ergeben den Electrical Core.

## Geprüfter Stromaufbau

Im isolierten Servertest stehen ein nach Osten gerichteter Heat Generator bei `(16,84,0)` und ein Infuser direkt daneben bei `(17,84,0)`. Der Infuser erhält Strom auf der Generatorseite. Ein zweiter Generator bei `(16,84,5)` lädt über ein Basic Universal Cable bei `(17,84,5)` einen Energy Cube bei `(18,84,5)` mit konfiguriertem Eingang.

Alle Eingaben im Test stammen aus einer Testfixture. Verarbeitung, Stromerzeugung, Kabeltransport, Speicherung und Schmelzen laufen über die echten Blöcke und regulären Serverticks. Die Fixture injiziert keine Energie; ein vollständiger Survival-Durchlauf bleibt separat zu prüfen.

## Rezeptbereinigung und Grenzen

Das bisherige Rezept aus drei Weizen zu drei Fasern konkurrierte mit Brot. Jetzt ergibt **ein Weizen eine Faser**, während drei Weizen in einer Reihe ausschließlich Brot ergeben. Der Materialaufwand je Faser bleibt gleich. Der Laufzeittest prüft Brot in allen drei Werkbankreihen und eindeutige Treffer für die geprüften Einstiegsrezepte. Das ist kein vollständiger Audit aller Vanilla-, Create- und Mekanism-Rezepte.

Mechanische Wellen übertragen weiterhin Rotation; Mekanism-Kabel übertragen Strom. Handplatten und maschinell gepresste Platten bleiben bewusst verschiedene Herstellungswege. Mekanisms native weitere Inhalte sind vorhanden und noch nicht vollständig den späteren Expert-Zeitaltern zugeordnet. Arcane Age, eigene Bosse und Omega-Sterne bleiben geplant.
