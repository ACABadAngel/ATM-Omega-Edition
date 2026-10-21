# Entscheidungen, offene Fragen und Risiken

## Entscheidungsregister

| ID | Entscheidung | Status / nächste Handlung |
| --- | --- | --- |
| ADR-01 | Minecraft 1.21.1, NeoForge, Java 21 als Zielbasis | Geplant festgelegt; genaue Builds in FND-01 verifizieren |
| ADR-02 | Ein kanonisches Packwerkzeug und Lockfile | Offen: Packwiz, vergleichbares Werkzeug oder etablierte manifestbasierte Pipeline prüfen; Auswahl nach Client/Serverexport, Hashes, Rechte-/Plattformunterstützung |
| ADR-03 | Eigenständiges Pack; ATM ist Inspiration | Festgelegt; Name/Marke vor öffentlichem Release prüfen |
| ADR-04 | 12 Hauptzeitalter plus optional A13 | Festgelegt; keine widersprüchliche 10/12/13er-Hauptfolge |
| ADR-05 | Omega Core besitzt komplexe persistente Systeme | Festgelegt; genaue API-/Registry-Aufteilung in CORE-01 |
| ADR-06 | KubeJS für bewiesene Rezept-/Datenintegration | Festgelegt; keine erfundenen APIs oder Gleichsetzung mit eigener Maschinenmod |
| ADR-07 | Native Ausgabe zuerst, Legacy-Port als regulärer Weg | Festgelegt; Port pro Projekt getrennt qualifizieren |
| ADR-08 | Ein primärer Rezeptviewer | Offen: JEI/EMI nach tatsächlichen Rezeptintegrationen wählen |
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
