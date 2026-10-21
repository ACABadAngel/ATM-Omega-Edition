# Umsetzungsbacklog

Stand: alle folgenden Implementierungspakete `todo`. Planung ist vorhanden; sie ist nicht mit erledigter Implementation gleichzusetzen. Reihenfolge innerhalb einer Phase nach Abhängigkeiten wählen. Größere Pakete vor Beginn in überprüfbare Teilaufgaben zerlegen.

| ID | Priorität | Paket | Voraussetzung | Definition of Done |
| --- | --- | --- | --- | --- |
| FND-01 | P0 | Exakte Java-/NeoForge-/KubeJS-/FTB-Basis prüfen | Dokumentation | Offizielle Versionen, Quellen, Lizenzen und Pflichtabhängigkeiten im Register |
| FND-02 | P0 | Packwerkzeug und Lock-Manifest | FND-01 | Frischer Client- und Serverimport reproduzierbar; ADR-02 beschlossen |
| FND-03 | P0 | Evidenz, Backup und Restore | FND-02 | Frische Welt gesichert und vollständig wiederhergestellt |
| MOD-01 | P0 | Ersten kleinen Modbatch integrieren | FND-02 | 5–15 neue Projekte geprüft, Client/Server/Save bestehen |
| MVP-01 | P1 | Primitive-/Mechanical-Core-Kette | MOD-01 | Handstart, Presse und automatische Platten ohne zyklische Rezepte |
| MVP-02 | P1 | Zehn Einführungquests | MVP-01 | Im echten FTB-Editorformat, zwei Sprachen als Grundgerüst, verständlicher Durchlauf |
| MVP-03 | P1 | Erster Liefervertrag | MVP-01 | Serverabgabe zählt exakt, keine Behauptung echter Neuproduktion |
| MVP-04 | P0 | Frühen Teamdurchlauf abnehmen | FND-03, MVP-02, MVP-03 | Zwei Spieler erreichen Meilenstein nach Neustart ohne doppelte Rewards |
| MOD-02 | P1 | Technik-/Magie-Kern auswählen | MOD-01 | Zwei Magierollen und Technikrollen nativ/Port/Ersatz geklärt |
| MOD-03 | P1 | Materialtags und Erzduplikate | MOD-02 | Keine kostenlose Umwandlung, alle Pflichtrezepte erreichbar |
| MOD-04 | P1 | Worldgen-Profil | MOD-02 | Fünf Seeds, Ressourcen-/Struktur- und Save-/Reloadberichte |
| CORE-01 | P1 | Offizielles MDK und Registry-Eigentum | FND-01 | Reproduzierbarer Java-21-Build, Client und Dedicated Server starten |
| CORE-02 | P0 | Persistente Teamforschung | CORE-01 | Idempotente Nachweise, Migration, Teamwechseltests |
| CORE-03 | P0 | Basismaschine mit Escrow | CORE-01 | Ein Rezept über Pause/Abbau/Neustart ohne Verlust-/Duplikationsfehler |
| CORE-04 | P1 | Produktionsadapter und Contracts | CORE-02, CORE-03 | Neue Produktion statt Reimport messbar; Tickbudget und Persistenz getestet |
| CORE-05 | P1 | Quantum Assembly Mk I | CORE-03 | Seitenweise Inputs, große Mengen, erstes vollständiges Rezept |
| CORE-06 | P1 | Großenergieports | CORE-03 | int-Portgrenzen, long-Aggregat und exakter Gesamtverbrauch geprüft |
| PROG-01 | P1 | Electrical-/Arcane-Ketten vorbereiten | MVP-04, MOD-02 | Strom, zwei Magierollen und Titan-Zugang erreichbar; Arcane-Core-Rezept vorbereitet, abschließende Freigabe erst nach BOSS-02 |
| PROG-02 | P1 | Industrial-/Biology-Ketten | PROG-01, BOSS-02, MOD-03 | Chemie, Farm, Bestäubung und frühes Digitallager sinnvoll integriert |
| PROG-03 | P1 | Dimensionsproben / Harvester-Basis | PROG-02, MOD-04 | Erstentdeckung nötig, erneuerbare Folgeproduktion und Rückkehr |
| PROG-04 | P1 | Nuclear-/Quantum-Ketten | PROG-03, CORE-05 | Brennstoff/Abfall/Matrix ohne Omega-Technik erreichbar |
| PROG-05 | P1 | Galactic-Rolle / Dynamo-Array | PROG-04, CORE-06 | Stellar Matter und genügend Vor-Omega-Energie nachgewiesen |
| END-01 | P1 | Sechs Singularitäten / erste Omega Star | PROG-05, BOSS-04 | Vollständiger frischer Pfad, jeder Input erneuerbar |
| END-02 | P1 | Omega Reactor / Rüstungsbasis | END-01 | Freigabe nach Star, sicherer Last-/Abschalttest |
| END-03 | P1 | Transcendence Star / Synthese | END-02, BOSS-05 | Fabrikpfad und Kopiersperren geprüft |
| END-04 | P1 | Infinity Forge / finaler Stern | END-03, BOSS-06 | Architect vor Stern, exakte Zutaten-/Energiebilanz |
| END-05 | P1 | Infinity Core / Hauptfinale | END-04 | Aktivierung, Save/Restore, End-to-End-Abnahme |
| BOSS-01 | P1 | Arena-Grundsystem | CORE-02, CORE-03 | Slotlimit, atomarer Schlüssel, Cleanup, Disconnect und Restore |
| BOSS-02 | P1 | Ancient Titan Greybox | BOSS-01, PROG-01 | Mechaniken solo/team lesbar, garantierter Fortschritt |
| BOSS-03 | P1 | Void Devourer | BOSS-02, PROG-03 | End-/Void-Nachweise und sichere Rückkehr |
| BOSS-04 | P1 | Astral Warden | BOSS-03, PROG-05 | Stellare Mechaniken, erster Singularitätenpfad komplett |
| BOSS-05 | P1 | Omega Guardian | BOSS-04, END-02 | Nach erster Star erreichbar, Omega-Core-Freigabe |
| BOSS-06 | P1 | Infinity Architect | BOSS-05, END-03 | Fünf Phasen, Seal und keine Finalstern-Zugangsbedingung |
| QST-01 | P1 | Hauptpfadquests bis erste Star | END-01, BOSS-04 | 100–300 nützliche Aufgaben, keine unaufgelösten IDs |
| QST-02 | P2 | 3.000er-Ausbau und Übersetzungen | QST-01, END-05 | Kategorienbudget erfüllt, unabhängige Inhaltsprüfung |
| WORLD-01 | P2 | Dimensionsausbau auf 15+ | MOD-04, PROG-03 | Reale Welt-IDs, neue Ressourcenrollen, jede Reise getestet |
| MOD-05 | P2 | Batches bis 500–700 | MOD-03, MOD-04 | Aufnahme-/Performancegates je Batch |
| MOD-06 | P2 | Ausbau auf 1.000+ | MOD-05, QA-02 | Keine Füllprojekte, weiterhin bestandene Lastszenarien |
| LEG-01 | P2 | Erstes Port-Dossier und Pilot | FND-01 | Quellcode/Lizenz, Referenz und eigener reproduzierbarer Durchstich |
| LEG-02 | P2 | Pilot im Pack freigeben | LEG-01, MOD-02 | Funktionsmatrix, Team, Save und Integrationsrezepte bestehen |
| QA-01 | P0 | Gate-/Exploit-Audit | END-01 | Loot, Handel, Saat/Bienen, Recycling und Materie geprüft |
| QA-02 | P0 | Referenzperformance / Soak | MVP-04, CORE-04 | Hardware dokumentiert, S0–S5 sinnvoll stufenweise gemessen |
| QA-03 | P0 | Vollständiger Solo-/Teamdurchlauf | END-05, QST-02 | Alle Sterne ohne OP, keine offenen P0/P1 |
| REL-01 | P0 | Distributions-/Namens-/Rechteprüfung | MOD-06, WORLD-01 | Manifest, Assets, Ports und Lizenzhinweise veröffentlichbar |
| REL-02 | P0 | Beta / RC / Updatepfad | QA-01, QA-02, QA-03, REL-01 | Installationen, Upgrade/Restore und bekannte Fehler dokumentiert |
| POST-01 | P3 | Legacy Ascension | LEG-02, REL-02 | Drei tragfähige Legacy-Rollen, optionaler Epilog |
| POST-02 | P3 | Raumstationen / World Events | REL-02 | Eigenes Konzept, begrenzte Last und klare Freiwilligkeit |
| POST-03 | P3 | Infinite Dungeon / New Game+ | REL-02 | Save-Grenzen und wiederholbare Regeln separat abgenommen |

`END-01` wird erst abgenommen, wenn Titan, Devourer und Warden oder klar bezeichnete Prototypbegegnungen den Bossnachweis liefern. Die ersten Prototypen dürfen vorhandene kompatible Bosse verwenden; vor 1.0 sind die beworbenen Eigenbosse tatsächlich erforderlich. Große Kapitel-/Mod-Ausbaupakete werden in kleine Batches aufgeteilt, damit „todo“ nicht monatelang einen unklaren Zustand bezeichnet.

## Änderungsprotokoll für erledigte Pakete

Bei Abschluss je Paket eine kurze Zeile mit Datum, Commit, erreichten Abnahmekriterien, durchgeführten Prüfungen und offenen Folgepunkten ergänzen. Implementierung und Tests nicht anhand der bloßen Existenz eines Markdownabschnitts als abgeschlossen markieren.
