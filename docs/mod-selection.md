# Mod-Auswahl und Kompatibilität

## Kategorienbudget: 1.085 Projekte

| Primärkategorie | Budget | Rolle |
| --- | ---: | --- |
| Technik | 145 | Maschinen, Energie, Chemie und Add-ons |
| Bibliotheken | 135 | Tatsächlich nötige gemeinsame Abhängigkeiten |
| Exploration | 115 | Dimensionen, Dungeons, Strukturen |
| Magie | 105 | Zauber, Rituale, Artefakte und Integrationen |
| Quality of Life | 95 | Bedienung, Rezepte, Karten und Recovery |
| Bauen | 95 | Dekoration und Bauhilfen |
| Worldgen | 75 | Terrain, Biome, Erze und Verteilung |
| Kampf & RPG | 75 | Bosse, Ausrüstung und Fähigkeiten |
| Landwirtschaft | 65 | Nahrung, Pflanzen, Bienen und Mobressourcen |
| Lager & Logistik | 55 | Netzwerke, Transport und Autocrafting |
| Integration | 55 | Modübergreifende Brücken und Pack-Systeme |
| Performance | 35 | Speicher, Server und Renderoptimierung |
| Audio & Grafik | 35 | Visuelle/akustische Ergänzungen |
| **Gesamt** | **1.085** | Einschließlich Pflichtbibliotheken |

Das Budget ist keine Einkaufsliste. Gerade 35 Performance- oder 75 Worldgen-Projekte sind ein hohes Konfliktrisiko und keine Pflicht, zusätzliche Mods ohne Nutzen aufzunehmen. Jedes Projekt erhält genau eine Primärkategorie; zusätzliche Rollen werden als Tags erfasst. Pro Modbatch werden Aufwand, Speicher und Spielwert bewertet. Client-/Serverprojektanzahl getrennt ausgeben.

## Drei getrennte Register

1. `planning/mod-candidates.csv`: Ideen, Portkandidaten und vorgeschlagene Rollen. Die vorbefüllten Zeilen sind **nicht verifiziert** und enthalten bewusst keine erfundenen Versionen.
2. Installiertes Manifest/Lockfile: erst nach `FND-02`; enthält genaue Projekt-/Datei-IDs, Versionen, Hashes und Client-/Serverseite. Dieses erzeugt das Pack.
3. Testevidenz/Freigaberegister: konkreter Lock-Stand, Testfälle, Ergebnis und Datum. Nur dieses rechtfertigt `approved`.

Pflichtfelder der Kandidaten: stabile ID, Name, Kategorie, Rolle, Aufnahmepfad (`native-first` oder `port-assessment`), Status, Minecraft, Loader, genaue Version, Quellcode, Lizenz, Verteilrecht, Abhängigkeiten, Seite, Testevidenz und Ersatzrolle. Leere Werte sind offene Arbeit, keine implizite Zustimmung.

## Vorgeschlagene Kernrollen

| Rolle | Kandidaten | Auswahlregel |
| --- | --- | --- |
| Packintegration | KubeJS, FTB Quests und jeweilige Abhängigkeiten | Zuerst kleines Client-/Serverprofil verifizieren |
| Mechanik | Create | Eigene Rolle im frühen Spiel statt bloßes Endgame-Zutatentor |
| Industrietechnik | Mekanism, Modern Industrialization, Industrial Foregoing, Powah | Überschneidungen begrenzen, Nebenprodukte und Energie planen |
| Digitallager | Applied Energistics 2 | Ein primäres System; Add-ons müssen Nutzen rechtfertigen |
| Logistik | Modular Routers, XNet | Serverlast und Itemkopierpfade prüfen |
| Magie | Ars Nouveau, Botania, Occultism, Blood Magic | Mindestens zwei native/portierte tragfähige Systeme, keine Verfügbarkeitszusage |
| Loot-/RPG-System | Apotheosis, Silent Gear | Kampfbalance und Gate-Abkürzungen prüfen |
| Erkundung | Twilight Forest, The Aether, Blue Skies, Deeper and Darker | Dimensionsrolle und Save-Verhalten wichtiger als Anzahl |
| Bosse | L_Ender's Cataclysm, Mowzie's Mobs | Version, Skalierung, Lizenz und Arena-Eignung prüfen |
| Ressourcen | Mystical Agriculture, Productive Bees, Farmer's Delight | Erneuerbarkeit ohne frühe universelle Rohstoffquelle |
| Bauen | Chipped, FramedBlocks, Supplementaries, einzelne Macaw-Projekte | Je Einzelprojekt eine eigene spätere Manifestzeile |
| Terrain | Terralith, Tectonic, ausgewählte Biommods | Erst einzeln, dann gemeinsam über Seeds prüfen |
| Raumfahrt | Ad Astra oder passend entwickelte Alternative | Keine Raketen versprechen, bevor Reiseprototyp funktioniert |
| Optimierung | FerriteCore, ModernFix, Sodium-kompatibler Renderer | Keine Kombination konkurrierender Renderer ohne Nachweis |
| Rezeptanzeige | JEI oder EMI | Eine primäre Lösung, alle wichtigen Rezeptarten sichtbar |
| Profiling | spark oder geeigneter Profiler | Reproduzierbare Tick-/Speichermessung |

Die Macaw-Reihe wird im Kandidatenregister zunächst als Auswahlaufgabe geführt und zählt nicht als ein bereits ausgewählter konkreter Mod. Gleiches gilt für nicht benannte Bibliotheken, Add-ons und Biommods. Sie dürfen nicht als erledigte Modslots zählen.

## Aufnahmeverfahren

`candidate → source_checked → resolved → isolated_tested → integrated_tested → approved`. Ein Fehlschlag führt zu `blocked`, mit Ursache und Ersatzrolle. Ein abgelehnter Mod bleibt als `rejected` dokumentiert. Native-first bedeutet zuerst nach einer passenden offiziellen Ausgabe suchen, nicht deren Existenz voraussetzen. Fabric-Kompatibilität über Connector ist ein eigener Testpfad; keine allgemeine Versionskonvertierung.

Pro Projekt: offizielle Quelle und exakte Datei, unterstützte Minecraft-/Loaderversion, Pflicht- und optionale Abhängigkeiten, Konflikte, Lizenz/Weiterverteilung, Client-/Serverseite, Konfigurationspfade und relevante Registry-IDs erfassen. Abhängigkeiten rekursiv auflösen; doppelte oder widersprüchliche Bibliotheksversionen stoppen die Aufnahme.

Installiere zunächst nur Quests/Integration und kleine Hilfen, dann Technik und Magie. Bei 5–15 neuen Projekten Client und Server starten, Welt erzeugen, speichern, neu laden und Kernfunktion ausführen. Worldgen, Renderer und große Ports jeweils separat. Ein erfolgreicher Start ohne Funktions-/Reloadtest ist noch keine Freigabe.

## Abbruch und Ersatz

Wenn ein Pflichtmod nach einem begrenzten Untersuchungsblock keine tragfähige Route hat, dokumentiere drei Optionen: offiziellen passenden Build nutzen, separaten Port beginnen oder Progressionsrolle ersetzen. Ein Port kann parallel weiterlaufen; er blockiert den frühen Durchstich nur, wenn seine Rolle wirklich unverzichtbar ist. Ab 700 Projekten wird zusätzliche Aufnahme nur bei nachgewiesenem Spielwert und bestandenem Lastbudget fortgesetzt. Das Langfristziel bleibt 1.000+, die veröffentlichte Zahl muss der Realität entsprechen.
