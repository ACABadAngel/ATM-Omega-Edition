# Industrielle Werkstatt – 0.4.0-alpha.1

Kapitel 04 verbindet AE2-Prozessoren und Lager mit Latex/Kunststoff aus Industrial Foregoing und Mekanism-Chemie. Die [arkane Werkstatt](arcane-age.md) ist Voraussetzung. Alle 38 bisherigen Quest-/Task-/Reward-IDs bleiben stabil. Ein kompletter Survival- und Multiplayer-Durchlauf steht aus.

## Reihenfolge ohne Zirkel

1. Erweitere Electrical-Core- und Arcane-Core-Fertigung. Die neuen Einstiegsgeräte verbrauchen mehrere Kerne; wiederholbare Tribute-Beschaffung und Source-Erzeugung werden dadurch relevant.
2. Finde native AE2-Meteoriten und Certus-Quarz in neuen Chunks. Ein Charger mit seinem normalen Rezept lädt Certus mit FE. Geladener Certus, Netherquarz und Redstone reagieren gemeinsam in Wasser zu Fluix. Lies den mitgelieferten AE2-GuideME-Leitfaden für Pressformen, knospenden Quarz und Wachstum.
3. Baue den Inscriber: `IPI / CEI / IPI` mit fünf Eisenbarren, zwei Kolben, Kupfer und Electrical Core. Fertige native gedruckte Logik-/Technikschaltungen und Silizium, danach Prozessoren. Die Formen bleiben in ihren nativen INSCRIBE-Schritten erhalten.
4. Fertige Fluid Extractor und Latex Processing Unit. Der Extractor verwendet Electrical Core statt Pity Frame; die Processing Unit verwendet Arcane Core. Richte die Arbeitsseite des Extractors auf einen Stamm. Akazie hat eine bessere native Ausbeute als Eiche. Ohne FE arbeitet der Extractor langsam; mit FE verbessert sich die Latexausbeute. Stämme verändern sich nach genügend Verarbeitung.
5. Versorge die Latex Processing Unit mit FE sowie getrennten Latex-/Wassereingängen. **Dieser Build verarbeitet 750 mB Latex und 500 mB Wasser direkt zu einem Dry Rubber.** Dry Rubber wird im Ofen zu Kunststoff. Die Tiny-Rubber-Kette älterer Versionen gilt hier nicht.
6. Zerkleinere Diamanten zu Diamond Dust und infundiere Infused Alloy mit dem nativen Mekanism-Diamanttyp zu Reinforced Alloy. Zwei Diamantstaub liefern 20 Infusionseinheiten für eine Legierung; Enriched Diamond ist eine effizientere native Alternative. Nutze getrennte Infuser oder entferne Restinfusion beim Wechsel.

## Neue Rezepte

| Ergebnis | Kosten / Verarbeitung |
| --- | --- |
| Fluid Extractor | Vier Eisenbarren, leichte Gold-Druckplatte, zwei Bruchstein, Electrical Core, Kolben |
| Latex Processing Unit | Vier Eisenbarren, Redstoneblock, zwei Eimer, Arcane Core, Ofen |
| AE2 Energy Acceptor | Vier Eisenbarren, vier Quartz Glass, Arcane Core |
| ME Drive | Vier Eisenbarren, zwei Engineering Processors, zwei Fluix Glass Cables, Arcane Core |
| Industrieschaltkreis | Nativer Inscriber, Kunststoff oben, Electrical Core Mitte, Reinforced Alloy unten; **PRESS verbraucht alle drei Zutaten** |
| Industrial Core | Vier Kunststoff, zwei Industrieschaltkreise, leeres Chemiezellgehäuse, Arcane Core und einzelne 1k-Speicherkomponente |
| ME Controller | Vier Smooth Sky Stone, vier Fluix-Kristalle und Industrial Core |

Der Industrial Core verwendet einzelne Komponenten. Eine leere oder gefüllte chemische Speicherzelle passt ausdrücklich nicht in das Rezept. Das vermeidet den Verlust eingelagerten Inhalts beim Craften. Native Zellenzerlegung und Lagerbedienung bleiben Sache des AE2-Leitfadens.

## Kleines ME-Netz und Chemie

Verbinde FE-Generator → Energy Acceptor → zusammenhängendes AE2-Netz aus Kabeln, Drive und Terminal. Ein Energy Cell puffert kurze Unterbrechungen. Ein kleines Netz ohne Controller erlaubt bis zu acht Kanäle; dadurch sind Speicher und Prozessoren erreichbar, bevor der Industrial Core den Controller freischaltet. Der Controller erweitert das Netz nach nativen Struktur-/Kanalregeln.

Block-Acceptor und Kabelteil-Acceptor können weiterhin in beide Richtungen umgewandelt werden, ohne einen weiteren Kern auszugeben. Das ersetzte Grundrezept bleibt der Einstieg; native alternative Energiequellen sind noch nicht sämtlich an spätere Expert-Gates gebunden. Auch ME-Chests und weitere native Alternativen sind kein vollständig abgeschlossener Zugangsaudit.

Mekanisms Electrolytic Separator spaltet Wasser mit FE in Wasserstoff und Sauerstoff. Beide Ausgänge benötigen Platz; bei vollem Ausgang stoppt die Maschine. Mechanische Rohre transportieren Flüssigkeiten, Druckrohre Chemikalien. Konfiguriere Seiten und native Überschussmodi passend. Applied Mekanistics ergänzt Chemiespeicherzellen für den AE2-Drive. Verwende die nativen Schnittstellen zum Ein-/Auslagern; trenne Item- und Chemiezellen.

Die Quests erkennen Geräte und Materialien. Sie beweisen weder geladene Speicher noch Rohrdurchsatz, eine Online-Verbindung, den Inhalt eines Tanks oder einen abgeschlossenen Autocrafting-Auftrag. Prüfe diese Funktionen selbst an den Anzeigen und mit Teststacks. Molecular Assembler und Pattern Provider sind erst Bauteile des Autocraftings; Crafting-CPU und Muster kommen nach dem nativen Leitfaden hinzu.

## Prüfung und nächster Abschnitt

[Server-Evidenz](../tests/evidence/v0.4.0-alpha.1/REPORT.md) unterscheidet echte Maschinenverarbeitung von bereitgestellten Testinputs und Transferhilfen. Client-/JEI-Darstellung, legitimer Solo-Pfad, Spieler-Terminalbedienung, echte Rohrautomation und Zwei-Spieler-Teams bleiben manuelle Abnahmen. Danach folgt das Dimensionszeitalter; eigene Omega-Maschinen und Arenen bleiben geplant.
