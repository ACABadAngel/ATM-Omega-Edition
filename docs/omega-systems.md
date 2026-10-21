# Omega-eigene Maschinen und Systeme

Dies sind zu implementierende Produktspezifikationen. KubeJS ist kein Ersatz für noch nicht existierende Boss-KI, persistente Produktionsmessung oder komplexe Netzwerktechnik. Anfangs werden nur die Systeme gebaut, die der nächste vertikale Abschnitt benötigt.

## Gemeinsamer Maschinenvertrag

Alle Maschinen zeigen Strukturzustand, aktives Rezept, fehlende Medien, Leistungsaufnahme, Fortschritt und Pausegrund. Der Server entscheidet über Rezepte, Forschung und Ausgabe. Der Client zeigt synchronisierte Werte, führt aber keinen Craft selbst aus. Eine Strukturänderung invalidiert den Cache; vollständige Multiblock-Scans erfolgen nicht jeden Tick.

Zustandsfolge: `unformed → idle → reserved → running → output_pending → idle`. Von `running` führt fehlende Versorgung zu `paused`; nach Versorgung geht es weiter. `invalid_structure` hält den gespeicherten Job an. Beim Abbau des Controllers wird der Job einmalig abgerechnet. Ausgaben werden erst abgeschlossen, wenn Platz vorhanden ist; Blockieren darf keine Inputs erneut abziehen. Save-Daten enthalten Schema-Version, Job-ID, Fortschritt, Energie, Input-Escrow und ausstehende Ausgaben.

| Maschine | Freigabe / Form als Entwurf | Eingabe und Ausgabe | Begrenzung und Abnahme |
| --- | --- | --- | --- |
| Stellar Dynamo Array | A09, 5×5×5 | Galactic-Brennstoff + Kühlmittel → bis 100 Mio. FE/t netto | Muss den ersten Star versorgen können; Kühlkreislauf und Brennstoff in A09 erreichbar |
| Quantum Ore Processor | A08, 3×3×5 | Getaggte Erze + Reagenz → stufige Ausbeute und Nebenprodukte | Nur explizite Erzrezepte, keine Multiplikation beliebiger Lagerblöcke |
| Quantum Assembly Matrix | Mk I A08, 5×5×5; Mk II A11, 7×7×7 | Bis 64 verschiedene Itemeingaben, versionierte Fluid-/Chemieadapter → komplexes Bauteil | GUI mit Seiten, begrenzte Suche, exakte große Mengen; Mk I kann erste Star |
| Arcane Singularity Forge | A08, 5×5×5 | Ritualfokus, arkane/technische Binder, getrennte Magiemedien → Singularitäten | Mindestens zwei Magiepfade, kein Stern als eigenes Vorprodukt |
| Omega Reactor | A10 nach Star, 9×9×9 | Brennstoff, Kühlmittel, Stabilisierung → Zielbereich 1–10 Mrd. FE/t | Sichere Abschaltung zuerst; Strafe durch Ausfall/Verbrauch statt Standard-Weltzerstörung |
| Dimensional Harvester | A06 Basis / A10 Ausbau, 5×5×3 | Freigeschaltete Dimensionsprobe + Energie + Reagenzien → begrenzte Ressourcen | Kann nie die erste Entdeckung ersetzen; ein Scheduler statt Fake-Chunkloading |
| Omega Matter Synthesizer | A11, 7×7×5 | Niedrige Materie + viel Energie + Vorlage → freigegebene Materie | Sperrliste für Sterne, Cores, Schlüssel und Freischaltungsobjekte |
| Infinity Forge / Infinity Crafter | A12, 11×11×7 | Stern-Unterprodukte, Architect Seal und Energie → finaler Stern | Vor Architect-Sieg baubar; Finalrezept bleibt versiegelt |
| Universal Automation Core | A10 Basis / A11 Netz, 3×3×3 | Maschinenstatus und begrenzte Aufträge → Routing-/Steuersignale | Lokale Queues, Arbeitsbudget, keine erneute Vollsuche aller Inventare pro Tick |
| Infinity Core | Nach finalem Stern, 9×9×9 | Aktivierungsritual → begrenzte Endgame-Komfortfunktionen | Kein unbegrenztes Entity-/Chunk-Budget; Save-/Restore-Abnahme |

Die Größen sind Bauentwürfe, keine finalen Blockdefinitionen. Maschinen benötigen einen wartungsarmen Anschlussplan und transparente Fehleranzeige. Dekorationsblöcke dürfen austauschbar sein, funktionale Ports bleiben klar erkennbar.

## Forschung und Meisterung

Sechs Forschungszweige: Engineering, Arcana, Biology, Exploration, Warfare und Cosmology. Entdeckungen, Experimente und Boss-Erstnachweise vergeben einmalige gebundene Forschungspunkte. Wiederholbare Farmquests vergeben keine unbegrenzten Forschungspunkte.

Pflichtforschung verwendet deterministische, erreichbare Nachweise. Optionale Spezialisierungen können zurückgesetzt werden, ohne Pflichtfortschritt zu zerstören. Punktebuchungen tragen eine eindeutige Ereignis-ID; Wiederverbindung und Teamwechsel buchen sie nicht erneut. Der Forschungsbaum ist ein gerichteter azyklischer Graph. Geplante Speicherquelle ist Omega Core; FTB Quests visualisiert und konsumiert den Fortschritt über einen getesteten Adapter.

Meisterungsstufen eines Zweigs: **Discover → Build → Automate → Sustain → Integrate**. Beispiel Biology: Saat entdecken, Farm bauen, Ernte automatisieren, 15 Minuten nachweisen, Kulturen in eine Biological Singularity integrieren. Mehr Items desselben Typs allein gelten nicht als nächste Meisterungsstufe.

## Automation Contracts

Ein Vertrag nennt Produkt, Mindestmenge, Laufzeit, maximalen Stillstand und zulässige Quelle. Gemessen wird serverseitig am registrierten Produktionsausgang einer eigenen Maschine oder eines verifizierten Adapters. Eine normale Inventar- oder Trichterzählung belegt nur **Lieferung**, keine Herstellung. Ohne Produktionsadapter muss die Quest entsprechend bezeichnet werden.

Beispiel `plate_line_1`: 120 frisch produzierte Platten innerhalb von 2.400 aktiven Serverticks am Produktionsausgang; ein Team kann den Nachweis einmalig abschließen. Beispiel `quantum_supply_1`: 3 Ressourcenströme über 18.000 aktive Ticks, kein zusammenhängender Stillstand über 1.200 Ticks. Normale Serverpausen und entladene Chunks erhöhen weder Laufzeit noch Produktionsmenge.

Outputereignisse bekommen Job- und Sequenzkennung. Auslagern und Wiederimportieren alter Items erfüllt denselben Produktionsjob nicht mehrfach. Checkpoints werden sparsam gespeichert. Pro Vertrag und Tick gelten feste Arbeitsbudgets. Große Verbrauchsziele verwenden gebündelte interne Zähler, nicht Millionen physische Item-Entities.

## Rüstung, Relikte und Boss Keys

Omega Armor besitzt vier Upgradebereiche: Schutz, Mobilität, Utility, Widerstand gegen Dimensionsgefahren. Slots und Energiekosten erzwingen Entscheidungen. Flug kommt nach den ersten Pflicht-Erkundungen; Arenen definieren verständliche eigene Flugregeln. Unverwundbarkeit oder unbeschränkter Schaden darf keine Bossphase trivial aushebeln.

Boss Keys werden nach Freischaltung erneuerbar hergestellt. Ein Schlüssel wird erst beim erfolgreichen Arena-Start atomar verbucht. Fehlgeschlagene Arena-Erstellung kostet nichts. Verbindungsabbruch, Tod und Abbruch besitzen klare Rückkehr- und Wiederholungsregeln. Relikte ergänzen Spielstile, garantierte Fortschrittsdrops hängen nicht an seltener Zufallsbeute.

## Codex, Ereignisse und Komfort

Der Omega Codex erklärt jeden Gate-Grund, Maschinenaufbau, Quelle der Medien, Produktionsmessung und Rückwege. Questhinweise enthalten die erste sinnvolle Automationsidee und typische Fehler. Fehlermeldungen nennen konkrete Anschlüsse und fehlende Forschungs-IDs.

World Events sind später opt-in oder finden in separaten Gebieten statt. Keine Invasion darf unbemerkt die normale Basis zerstören. Infinite Dungeon und New Game+ bleiben Post-1.0; ein Reset darf den Hauptspielstand nicht automatisch überschreiben.

## Minimaler technischer Durchstich

Vor der ersten Großmaschine: ein Controller, ein Input-/Output-Port, ein Rezept, ein gespeicherter Job, eine Pause und eine kontrollierte Strukturänderung. Danach erst Mengen, Medien und Portanzahl vergrößern. Tests für Neustart, volles Output, gleichzeitige Spielerzugriffe und Chunkgrenzen werden mit jedem neuen Adapter wiederholt.
