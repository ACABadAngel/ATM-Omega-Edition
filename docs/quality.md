# Qualität, Laufzeittests und Performance

## Was die jetzige Prüfung tatsächlich leistet

`python3 tools/validate_plan.py` validiert Planungsdateien, Summen, IDs, Voraussetzungen, zyklusfreie Beispielgraphen, Sternarithmetik und lokale Markdownziele. GitHub Actions führt genau diese Prüfung aus. Es lädt keine Mods und startet keinen Minecraft-Server. Der vollständige spätere Rezeptgraph kann erst nach realer Modauflösung geprüft werden.

## Reproduzierbare Testevidenz

Jeder Lauf enthält Packcommit/Lockhash, Loader-/Java-/Modversionen, Betriebssystem, CPU, RAM, Heap, Datenträger, Spielerzahl, Seed, Sicht-/Simulationsdistanz, Chunkloading, Dauer, Befehle, Ergebnis und bereinigte Logs. Keine Tokens, privaten IP-Adressen oder komplette personenbezogene Logsammlungen veröffentlichen.

Vorlage pro Szenario: `ID`, Ziel, Voraussetzungen, Vorbereitung, Schritte, erwartetes Verhalten, tatsächliches Verhalten, Messwerte, Status (`passed/failed/not_run`), Evidenzpfad und offene Fehler. Ein reparierter Fehler benötigt einen passenden Wiederholungslauf, kein pauschales „alle Tests erfolgreich“.

## Funktionale Pflichtmatrix

| ID | Szenario | Erfolgsnachweis |
| --- | --- | --- |
| Q01 | Frische Clientinstallation | Welt erstellen, Kernmods benutzen, verlassen und neu laden |
| Q02 | Dedizierter Server | Start ohne Clientklassenfehler, zwei Clients können spielen |
| Q03 | Neuer Save / Upgrade / Restore | Inventar, Maschinen, Quests und Teams bleiben konsistent |
| Q04 | Gate-Erreichbarkeit | Jedes Core-/Sternrezept aus vorheriger Stufe ohne OP erreichbar |
| Q05 | Alternative Erwerbswege | Loot, Trades, Recycling, Saat/Bienen und Kopien umgehen Gates nicht |
| Q06 | Maschine unter Unterbrechung | Stromausfall, Output voll, Abbau und Chunkunload ohne Duplikate |
| Q07 | Forschung und Teamwechsel | Join/Leave/Offline/Neustart ohne doppelte Punkte oder Rewards |
| Q08 | Dimensionen | Portal, Tod, Rückkehr, Save/Reload, Ressourcen und Strukturen |
| Q09 | Bossarena | Solo, Team, Tod, Disconnect, Timeout und erneuter Start |
| Q10 | Produktionsvertrag | Altitems/Reimport erfüllen keine Neuproduktion; entladene Zeit zählt nicht |
| Q11 | Großzahlen | 32-Bit-Grenze, long-Addition, Multiplikation, GUI und Netzwerk |
| Q12 | Gesamtdurchlauf | Frisches Solo und neues Team erreichen alle drei Sterne und Infinity Core |

Jeder Port ergänzt modbezogene Kernfunktionen. Ein Renderer benötigt visuelle Prüfung; ein Technikport benötigt Betrieb und Save/Reload; Worldgen benötigt mehrere Seeds und Dimensionsreisen.

## Testprofile

| Profil | Aufbau | Dauer / Zweck |
| --- | --- | --- |
| S0 | Frische Welt, feste Seeds, keine Fabrik | 30 min; Start, Basislast und Reisen |
| S1 | 1 Spieler, frühe vollständige Produktionslinien | 60 min; erster Automationsabschnitt |
| S2 | 4 Spieler, 4 Basen, je mehrere Tech-/Magielinien und Farmen | 2 h; mittlere Team-/Serverlast |
| S3 | 4 Spieler, Sternfabrik mit sechs Singularitäten, Lager und Großenergie | 4 h; Endgame-Dauerlast |
| S4 | Kontinuierliche Chunkgenerierung und Dimensionswechsel | 30 min je Seed, 5 Seeds; Worldgen-Spitzen |
| S5 | 8-h-Soak mit Reisen, Maschinen und Bosswiederholungen | Wachsender Speicher, Cleanup und Save-Verhalten |

CPU-/Hardwaredetails werden beim ersten echten Test als Referenz festgelegt. Bis dahin sind diese Szenarien Lastdefinitionen ohne gemessene Hardwarezusage. Zunächst Client mit 12–16 GB Heap und Server mit 16–24 GB als Messpunkte ausprobieren; das sind keine Mindestanforderungen. Heap nicht so hoch setzen, dass Betriebssystem oder andere Dienste verdrängt werden. JDK-/GC-Flags nur nach Messung verändern.

## Vorläufige Release-Gates

Für S1–S3 im eingeschwungenen Zustand: 20 TPS als Ziel, Median-MSPT ≤35 und p95-MSPT ≤45; länger andauernde Bereiche über 50 ms werden untersucht. Worldgen-Spitzen werden separat erfasst, nicht aus dem Bericht weggelassen. Es gibt noch keine Messung, die diese Ziele bestätigt.

Clientziel auf später festgelegter Referenzhardware: bei festem Preset ohne Shader 60 FPS im typischen Basisszenario; Frametimes und 1%-Lows mitberichten. Shaderprofil bleibt optional und wird separat qualifiziert. Startzeit und Peak-RAM werden ab dem ersten Prototyp gemessen und bei jedem Batch verglichen. Ein Rückgang um mehr als 10% bei gleichem Szenario oder deutlicher zusätzlicher Speicherbedarf braucht eine begründete Aufnahmeentscheidung.

Keine reproduzierbaren Start-/Save-Crashes, keine bekannten Duplikationslücken in Pflichtketten, kein fortschreitender Memory-Leak im Soak, keine unbegrenzten Arena-/Entity-/Chunkreste. Restore muss vor Beta einmal praktisch gelungen sein. Vollständiger kritischer Pfad muss ohne Developer-Overrides möglich sein.

## Worldgen und Batch-Rollback

Je großer Worldgen-Änderung dieselben fünf Seeds vergleichen: Startgebiet, Erzverteilung, Strukturdichte, Übergänge und Portalpositionen. Worldgen nicht gleichzeitig mit Renderer und fünf Legacy-Ports ändern. Bei Regression letzten Batch zurücknehmen, dann Teilmengen testen. Ein neues Lockfile kennzeichnet jeden getesteten Zustand.

## Fehlerprioritäten

P0: Datenverlust, Exploit mit vervielfachtem Hauptfortschritt oder Serverstart unmöglich. P1: unerreichbares Gate, Pflichtboss dauerhaft defekt, wiederholbarer schwerer Crash. P2: erhebliche Bedienungs-/Performanceprobleme mit Umweg. P3: kosmetische Fehler. Öffentlicher Release verlangt keine offenen P0/P1; bekannte Einschränkungen der niedrigeren Priorität werden dokumentiert.
