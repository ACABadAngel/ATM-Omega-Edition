# Entscheidungen, offene Fragen und Risiken

## Entscheidungsregister

| ID | Entscheidung | Status / nächste Handlung |
| --- | --- | --- |
| ADR-01 | Minecraft 1.21.1, NeoForge, Java 21 als Zielbasis | Alpha: NeoForge 21.1.264; exakte Artefakte in `pack/lock.json`, Java 21, Dedicated Server gestartet |
| ADR-02 | Ein kanonisches Packwerkzeug und Lockfile | Alpha: `tools/pack.py` (Python 3.11+), `pack/lock.json`, CurseForge-Clientmanifest und Server-Kit; Details unten |
| ADR-03 | Eigenständiges Pack; ATM ist Inspiration | Festgelegt; Name/Marke vor öffentlichem Release prüfen |
| ADR-04 | 12 Hauptzeitalter plus optional A13 | Festgelegt; keine widersprüchliche 10/12/13er-Hauptfolge |
| ADR-05 | Omega Core besitzt komplexe persistente Systeme | Festgelegt; genaue API-/Registry-Aufteilung in CORE-01 |
| ADR-06 | KubeJS für bewiesene Rezept-/Datenintegration | Festgelegt; keine erfundenen APIs oder Gleichsetzung mit eigener Maschinenmod |
| ADR-07 | Native Ausgabe zuerst, Legacy-Port als regulärer Weg | Festgelegt; Port pro Projekt getrennt qualifizieren |
| ADR-08 | Ein primärer Rezeptviewer | Alpha: JEI 19.64.0.455; Serverstart geprüft, Clientanzeige noch offen |
| ADR-09 | Teamprogression als Hauptmodell | Festgelegt; FTB-/Core-Adapter und Join/Leave-Regeln in CORE-02 |
| ADR-10 | Erst vollständige kleine Sternkette, dann Umfang | Festgelegt; 1.000+ bleibt langfristiges Ziel |
| ADR-11 | Keine pauschale Creative-/Transmutationsabkürzung | Festgelegt; Aufnahme nur mit Sperrlisten und Audit |
| ADR-12 | Welt-/Bossrollen sind ersetzbar | Festgelegt; Modnamen sind keine zwingenden gespeicherten Gates |

## Bereits getroffene Annahmen für die Übergabe

Keine Rückfrage ist nötig, um diese Planungsgrundlage umzusetzen: gewünscht sind 1.000+ Mods, extreme Schwierigkeit und alle Themenbereiche. Minecraft 1.21.1 folgt der Vorlage. Der fünfte eigene Boss, Vor-Omega-Dynamo und die präzise Core-/Sternreihenfolge sind Ergänzungen dieses ausgearbeiteten Entwurfs. Sie dürfen nach einem Prototyp begründet angepasst werden.

Noch unbekannt sind tatsächliche Teamkapazität, konkrete bereits portierte Mods, Zielserverhardware, gewünschte Launcher-/Distributionsplattform und vorhandene Assetrechte. Diese Punkte blockieren die Dokumentation und den minimalen technischen Durchstich nicht. Vor betroffenen großen Investitionen werden sie gezielt geklärt; keine stillen Zusagen über vorhandene Rechte oder Hardware.

## Risikoregister

| Risiko | Frühes Signal | Gegenmaßnahme / Ausweichpfad |
| --- | --- | --- |
| Umfang ohne Spielwert | Viele sich wiederholende Mods, Questlisten ohne Zweck | Rolle und messbaren Nutzen pro Aufnahme verlangen |
| Legacy-Abhängigkeit blockiert Hauptpfad | Kein erlaubter Source, große Render-/Worldgenfehler | Isolierter Port, Ersatzrolle, optionaler Epilog |
| RAM-/Tickkosten explodieren | Regression bei jedem Batch, wachsender Soak-Heap | Profiling, Batch-Rollback, Maschinen-/Farmbudgets |
| Gate-Zyklus | Rezept braucht eigenes Freischaltungsprodukt | Kritischen Pfad und alternative Erwerbswege prüfen |
| Energieüberlauf | Negative Werte, int-Trunkierung | long-Interna, begrenzte Ports, Grenzwerttests |
| Reward-/Inventarduplikation | Disconnect oder Reload vervielfacht Items | Eindeutige Job-IDs, persistente Escrow und idempotente Rewards |
| Weltmigration zerstört Basen | Worldgenwechsel nach Veröffentlichung | Freeze, neue Expeditionswelten, Backup/Restore |
| Quests spiegeln falsche APIs | Importfehler, unauflösbare Item-IDs | Muster aus Editor und tatsächlicher Version |
| Rechte an Mods/Assets ungeklärt | Download ohne überprüfte Weiterverteilung | Provenienz und alternative legale Rollenlösung |
| Jahresplan unrealistisch | Mehrere eigene Systeme ohne Prototyp | Liefergates, rollende Schätzung, Post-1.0 abtrennen |

## Änderungsentscheidung dokumentieren

Jede große Abweichung nennt Problem, geprüfte Optionen, Entscheidung, Konsequenzen für Saves/Rezepte/Quests und nötige Nachtests. Eine Änderung der Modauswahl ist Routine, solange die Progressionsrolle erhalten bleibt; ein anderer Loader oder eine andere Hauptprogression benötigt einen neuen ADR-Eintrag.

## Alpha-Entscheidungen vom 21.10.2026

ADR-02: Ein kleiner Exporter mit Python-Standardbibliothek hält eine gemeinsame Quelle für Client und Server. Jede Moddatei besitzt Größe, SHA-1/SHA-512, Projektquelle, Lizenzlabel, Seitenrolle sowie exakte CurseForge-Projekt-/Datei-ID. Der Clientexport enthält Manifest und eigene Overrides. Das Server-Kit lädt die gepinnten Dateien von den Autoren-CDNs; fremde JARs werden nicht im Repository verteilt. FTB-Artefakte liegen auf deren Maven-Server. Deshalb wurde für diese Alpha ein CurseForge-Manifest statt eines Modrinth-Packs gewählt: dessen Format erlaubt diese Maven-Domain nicht als reguläre Mod-Downloadquelle.

ADR-05/06: KubeJS besitzt in der Alpha `omega:plant_fiber`, `omega:tree_resin`, `omega:primitive_core`, `omega:pressed_core` und `omega:mechanical_core`. Texturen verwenden vorhandene Vanilla-Ressourcen mit Tint. Keine Fremdtexturen werden kopiert. Eine spätere Omega-Core-Mod übernimmt IDs nur mit gleichzeitig entfernter JS-Registrierung und Save-Test.

Der 120-Kupferplatten-Auftrag ist ausdrücklich ein verbrauchender Lieferauftrag. Er misst weder eine Produktionsrate noch frisch produzierte Gegenstände; die geplante manipulationsgeschützte Produktionsmessung bleibt CORE-Arbeit. Die maschinelle Herstellung des Pressed Core verwendet den nativen Create-Rezepttyp.

Eingebettete Bibliotheken werden nicht doppelt installiert: Create bringt Flywheel/Ponder mit, KubeJS Better Advanced Tooltips und JEI MezzConfig. Ihre IDs werden bei der Abhängigkeitsprüfung berücksichtigt. Das Kandidatenregister ist keine zweite installierte Modliste.

## Elektrischer Durchstich 0.2.0-alpha.1

Mekanism und Mekanism Generators 10.7.19.85 ergänzen die native Technikrolle. Dieser Batch umfasst bewusst nur die zwei benötigten Projekte; keine unbenötigten Füllmods. Exakte Quellen, CurseForge-IDs, Hashes, MIT-Lizenzlabels und JAR-Abhängigkeiten stehen im Lock. Der minimale NeoForge-Bedarf 21.1.194 ist durch den bestehenden Build 21.1.264 erfüllt. Eine protokollierte vollständige Client-/Team-Abnahme bleibt offen; der Nutzer hat die Weiterentwicklung ausdrücklich gewünscht.

Der erste Infuser verbraucht einen Mechanical Core. Ein direkt angeschlossener Heat Generator ermöglicht den Bootstrap, bevor Stahlkabel herstellbar sind. Native Mekanism-Rezepte bleiben ansonsten erhalten; spätere Maschinen benötigen noch ein umfassendes Expert-Gate-Audit. In dieser Version wird Infused Alloy aus Kupfer hergestellt. Ein Weizen zu einer Pflanzenfaser behebt den realen Konflikt mit Vanillas Brot bei unverändertem Mengenverhältnis. Frühere Quest-/Task-/Reward-IDs werden über eine feste Testfixture erhalten; neue Kapitel dürfen diese IDs nicht durch Listenumsortierung verändern.
