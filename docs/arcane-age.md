# Arkane Werkstatt – 0.3.0-alpha.1

Kapitel 03 verbindet Ars Nouveaus Source-Verarbeitung mit Occultisms Geistermaterialien. Der Omega Arcane Core schließt diesen Alpha-Abschnitt ab. Voraussetzung ist der [Electrical Core](electrical-age.md). Alle 22 älteren Quest-/Task-/Reward-IDs bleiben erhalten.

## Einstieg ohne Zirkel

1. Fertige ein Novice Spell Book und lies die nativen Bücher beider Mods. Frühe Ars-/Occultism-Rezepte bleiben erreichbar. Demon’s Dream Seeds stammen aus Gras; die Früchte dienen als Einstieg in Spirit Fire.
2. Finde Archwood und behalte Setzlinge. Für neu hinzugefügte Weltgenerierung sind neue Chunks erforderlich.
3. Stelle eine Imbuement Chamber auf. Lapis oder Amethyst ergibt mit dem nativen Rezept einen Source Gem für 500 Source. Die Kammer sammelt ohne Gefäß langsam selbst Source; ein Generator ist für diesen Bootstrap nicht nötig.
4. Wirf eine Demon’s-Dream-Frucht auf den Boden und entzünde sie mit Feuerstein/Stahl zu Spirit Fire. Ein hineingeworfener Andesit ergibt Otherstone, ein Diamant einen Spirit Attuned Gem. Nutze zunächst einzelne Items.
5. Stelle eine normale Sacrificial Bowl her. Das neue goldene Rezept verwendet drei Goldbarren oben, Otherstone / Electrical Core / Otherstone mittig und die normale Sacrificial Bowl unten mittig. Die dunkle Variante verwendet entsprechend eine Dark Sacrificial Bowl. Beide ursprünglichen Goldring-Rezepte sind entfernt.

## Source erzeugen und speichern

Ein Volcanic Sourcelink verbrennt geeigneten Brennstoff auf einem direkt benachbarten Arcane Pedestal oder als nahes Item in der Welt. Ein Source Jar innerhalb von fünf Blöcken nimmt periodisch Source auf. Kohleblöcke sind eine mögliche Brennstoffquelle. Andere native Sourcelinks bleiben erlaubt.

Der Link kann umgebenden Stein zu Magma und Magma später zu Lava verändern. Baue ihn mit geeignetem Abstand und Untergrund; plane nicht mitten in einer Holzwerkstatt. Die Imbuement Chamber benötigt ein Source Jar in zwei Blöcken Reichweite. Für den Enchanting Apparatus reicht ein Gefäß in zehn Blöcken Reichweite. Die Inventarquests erkennen Geräteitems, keine geladenen Gefäße und keine erfolgreiche Energieproduktion. Prüfe die Anzeigen in der Welt.

## Neue Materialien

| Ergebnis | Verarbeitung | Kosten und Verhalten |
| --- | --- | --- |
| Runenkristall `omega:runic_crystal` | Native Imbuement Chamber | Amethyst + 500 Source; je ein Source Gem und Spirit Attuned Gem auf zwei separaten Sockeln in direkter Nachbarschaft bleiben als Katalysatoren erhalten |
| Arkaner Binder `omega:arcane_binder` | Nativer Enchanting Apparatus | Ein Electrical Core als Reagenz + 1000 Source; auf acht separaten Sockeln je zwei Source Gems, Otherstone, Goldbarren und Spirit Attuned Gems; alle acht werden verbraucht |
| Arkaner Omega-Kern `omega:arcane_core` | Werkbank | Vier Source Gems, zwei Binder, ein Runenkristall, ein Spirit Attuned Gem und ein Wilden Tribute |

Der Apparatus wird mit vier Goldbarren, zwei Source Gems, zwei Sourcestone und einem Electrical Core gefertigt (`GSG / CEC / GSG`). Er steht auf dem **nativen Block `ars_nouveau:arcane_core`**, mit acht Arcane Pedestals im Umkreis von drei Blöcken. Der native Basisblock ist ein anderes Objekt als das neue Omega-Meilenstein-Item. Setze die acht Zutaten zuerst auf einzelne Sockel und anschließend das Electrical-Core-Reagenz in den Apparatus.

Für zwei Binder werden zwei weitere Electrical Cores und insgesamt 2000 Apparatus-Source benötigt. Die beiden Imbuement-Katalysatoren können wiederverwendet werden. Entferne sie für normale Source-Gem-Produktion; passende Sockelzutaten wählen das fortgeschrittene Rezept aus.

## Wilden Chimera als vorläufige Titan-Begegnung

Die Alpha nutzt den existierenden Ars-Boss **Wilden Chimera**, Entitytyp `ars_nouveau:wilden_boss`. Ein eigener Ancient Titan, eine eigene Arena und Omega-Boss-KI bleiben geplant.

Fertige eine Wilden-Summoning-Ritualtafel und einen Ritual Brazier. Das native Alternativrezept für die Tafel braucht einen violetten Archwood-Stamm, Smaragdblock, Eisenschwert, Bogen und Lapislazuliblock. Die normale Variante verwendet drei Wilden-Drops statt der mittleren drei Zutaten.

Ohne Verstärkungen erzeugt das Ritual gewöhnliche Wilden-Mobs, aus denen Spike, Horn und Wing gesammelt werden können. Für die Chimera werden **alle drei unterschiedlichen Drops als Ritual-Augmente** benötigt. Tafel einsetzen, Augmente gemäß nativem Buch zuführen und dann aktivieren. Bereite Ausrüstung, Heilung und einen freien Kampfplatz außerhalb der Basis vor: das verstärkte Ritual zerstört Blöcke um den Brazier.

Die Quest verlangt einen Kill des richtigen Entitytyps und einen Wilden Tribute. Vorher die Quest freischalten; frühere Kills werden nicht als rückwirkend garantiert. Die Chimera erzeugt den Tribute über ihre native Todesbeute. Der Omega-Kern verbraucht diesen Drop. Gehandelte Drops und kreative Gegenstände sind kein geschützter persönlicher Bossnachweis; der geplante Omega-Core-Adapter soll das später serverseitig regeln.

## Grenzen und Abnahme

Die Integration nutzt Spirit Fire als erste gemeinsame Occultism-Materialrolle und stellt den nativen Ritualpfad vor. Tiefe Geisterproduktion, automatische Rituale und native spätere Erwerbswege sind noch nicht vollständig in Expert-Gates eingebaut. Der Apparat- und Schalen-Einstieg allein sperrt nicht sämtliche Magieinhalte.

[Server-Evidenz](../tests/evidence/v0.3.0-alpha.1/REPORT.md) dokumentiert die ausgeführten Prüfungen. Echter Solo-Survival-Durchlauf, Client-/JEI-Anzeige, legitimer Ritual-/Bosskampf, FTB-Spieler-Kill-Event und Zwei-Spieler-Teamverhalten bleiben getrennte manuelle Abnahmen.
