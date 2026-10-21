# Omega Legacy Project

Paul möchte ältere Mods ausdrücklich einbeziehen und hat bereits gute Erfahrungen mit KI-gestützten Anpassungen gemacht. Deshalb ist Portierung ein vorgesehener Entwicklungsweg. Ein großer Versionssprung wird dennoch pro Mod als eigenes Softwareprojekt mit nachvollziehbarer Herkunft und Spieltests behandelt.

## Kandidaten und Suchreihenfolge

| Historischer Bezug aus der Vorlage | Kandidaten | Erst prüfen |
| --- | --- | --- |
| 1.7.10 | Witchery, Thaumcraft 4, RotaryCraft | Gibt es erlaubten Quellcode, Abhängigkeiten und eine legitime aktuelle Fortsetzung? |
| 1.12.2 | Draconic Evolution, Astral Sorcery, Ender IO | Bereits vorhandenen passenden offiziellen/autorisierten Port vor Eigenport suchen |
| 1.16.5 | Ice and Fire, Eidolon | Rendering, Animation, Weltgenerierung und Save-Schema |
| 1.18.2 | Tinkers' Construct | Gesamte Bibliotheks-/Werkzeugabhängigkeit und Komponentenmodell |
| 1.20.1 | Ausgewählte weitere Technik-/Magieprojekte | Exakte Ausgangsversion, Loader und Upstream-Differenzen |

Das sind historische Auswahlhinweise, keine Aussagen über die neuesten verfügbaren Versionen. Die Nachfrage nach einem aktuellen offiziellen Build kommt immer zuerst. Keine fremde Lizenz wird aus einer öffentlichen GitHub-Seite abgeleitet. Ein öffentlich sichtbarer Quellcode ist nicht automatisch zur Änderung oder Weiterverteilung freigegeben. Fehlender erlaubter Quellcode führt zu Klärung mit dem Rechteinhaber oder einer eigenständigen rollenbasierten Alternative.

## Port-Dossier pro Projekt

Unter `ports/<id>/PORTING.md` später erfassen: Upstream-URL und Commit, Lizenznachweis, Ziel-Minecraft/Loader, Besitzer des Forks, Abhängigkeiten, Ausgangs-Build, Änderungen, Save-Risiken, Testmatrix, offene Fehler und veröffentlichbare Artefakte. Fremdquellen bevorzugt in getrennten Forks verwalten; dieses Pack referenziert feste Commits/Artefakte. Kein riesiger unversionierter Quellcode-Dump im Pack.

## Vorgehen

1. **Triage:** Native Ausgabe/Fortsetzung suchen; Rechte, Quellcode und vollständige Abhängigkeitskette prüfen. Kleine relevante Funktion als ersten Durchstich wählen.
2. **Reproduzierbarer Ausgang:** Original nach Möglichkeit bauen, Ziel-MDK festlegen, funktionale Referenzen/Screenshots und Save-Beispiele sammeln.
3. **Registries und Daten:** Registrierungen, Datengenerierung, Ressourcenpfade, Blockstates, Tags, Rezepte und Item-Komponenten migrieren. IDs möglichst erhalten.
4. **Laufzeit:** Fähigkeiten/Capabilities, Events, Menüs, Netzwerk, Ticks, Entitäten, Worldgen und Server/Client-Trennung anpassen. Diese Bereiche werden nicht durch Umbenennen einer Loaderdatei portiert.
5. **Rendering/Assets:** Animation, Modelle, Partikel und Shader testen; zweckmäßige Fallbacks dokumentieren.
6. **Persistenz:** alte Daten entweder mit bewiesenem Konverter migrieren oder klar als neuer inkompatibler Spielstand behandeln. Nie eine bestehende Welt ohne Backup testen.
7. **Isolierte Abnahme:** Build, Client, Dedicated Server, Kernfunktion, Save/Reload, Mehrspieler und Lastprobe.
8. **Packintegration:** Rezepte, Tags, Loot, Gates, Quests und Lastprofil im konkreten Lock-Stand prüfen; erst dann freigeben.

## Freigabestufen

| Stufe | Beweis | Noch nicht bewiesen |
| --- | --- | --- |
| `source_checked` | Port grundsätzlich rechtlich/technisch prüfbar | Bau- und Laufbarkeit |
| `compiled` | Reproduzierbarer Build | Funktion im Spiel |
| `isolated_tested` | Kleine definierte Funktionsmatrix | Zusammenspiel mit dem Pack |
| `integrated_tested` | Packtests im festen Modstand | Release-/Upgradequalität |
| `approved` | Release-Gates, Provenienz und Verteilung geklärt | Keine Garantie für zukünftige Updates |

Bei Fehlern bleiben Spieler über eine kompatible Ersatzroute im Hauptpfad. Ein Port darf nicht durch einen Mock-Gegenstand als „funktionierender Mod“ beworben werden.

## Aufwand und Grenzen der Automatisierung

KI kann repetitive API-Anpassungen, Buildfehler und Testvorbereitung beschleunigen. Sie ersetzt die Eingrenzung des Ausgangscodes, die Serverstarts und den Vergleich des Spielverhaltens nicht. Als erste Untersuchung gilt ein begrenzter Block von ein bis drei Arbeitstagen; daraus entsteht eine modbezogene Schätzung, kein pauschales Portversprechen. Sehr alte Worldgen-, Render- oder Magiesysteme können mehrere Monate benötigen. Aufwand wird nach Unsicherheit und Abhängigkeiten priorisiert.

## Legacy Ascension

Für einen späteren Epilog werden drei unterschiedliche freigegebene Legacy-Systeme ausgewählt: eines für Wissen/Magie, eines für Energie/Technik, eines für besondere Werkstoffe. Der Eternal Omega Core verbindet ihre Meisterungen. Erst wenn alle drei tragfähig sind, wird der Epilog im öffentlichen Questbuch sichtbar. Das Hauptfinale bleibt vollständig ohne ihn erreichbar.
