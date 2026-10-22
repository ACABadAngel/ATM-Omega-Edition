# Projektstatus

Stand: 2026-10-22 · **0.4.0-alpha.1**.

| Lieferung | Status | Evidenz |
| --- | --- | --- |
| Plan und vollständige Wunschliste | done | [473 Projekte](MODLIST.md); 26 Projekte im exakten Alpha-Lock |
| Minecraft / Loader / Modlock | resolved | 1.21.1 / NeoForge 21.1.264 / Java 21; [26 Client-/25 Serverdateien](pack/lock.json), Größen/SHA-1/SHA-512 geprüft |
| Clientexport / Server-Kit | built | [Installation](docs/installation.md), deterministische Exporte ohne fremde JARs |
| Primitive-/Mechanical-Abschnitt | implemented; server_tested | Alte IDs und 120er-Lieferung erhalten; echte Wasserpresse erneut isoliert geprüft |
| Elektrischer Abschnitt | implemented; server_tested | Echte Generatoren/Infusion/Stahl; getrennte zwei Electrical Cores und 464331 J im aktuellen Testsave nach 0.4-Upgrade erhalten |
| Arkaner Abschnitt | implemented; server_tested | Source/Imbuement/Apparatus/Spirit Fire; bisherige Binder, Kristall, Kernstack, KillTask und exakte 3399/1999 Source nach 0.4-Upgrade erhalten |
| Industrieller Abschnitt | implemented; server_tested | Native Latex-/Gummi-/Kunststoffkette, Diamantinfusion, AE2-Prozessoren und konsumierende Industrieschaltkreise; [Werkstatt](docs/industrial-age.md) |
| Digitales Item-/Chemielager | native API tested | Echte versorgte ME-Zellen speichern/liefern Items sowie im Separator erzeugte Chemikalien; GUI-/Rohrbedienung offen |
| Zwölf Items / 25 Custom-Rezepte | implemented; server_tested | Sechs neue native Grundrezepte ersetzt; Acceptor-Konvertierungen erhalten; Speicherzellen passen nicht ins Core-Rezept |
| 58 bilinguale Quests in vier Kapiteln | implemented; server_imported | 38 veröffentlichte Quests mit alten Task-/Reward-IDs plus 20 neue Quests; zwei Sprachtabellen |
| Curios-Kompatibilität | fixed; clean_server_tested | Eigener Datenoverride entfernt nur die ungültigen IF-Slotreferenzen `example` und `feet` |
| Industrieller vollständiger Neustart | passed (synthetische Testwelt) | Zwei hergestellte Schaltkreise, neue Kernstacks und native Fluix/Prozessoren erhalten; ME-Zellen behalten exakt 96 Kupfer und 96 chemische Einheiten |
| Neue Welt ohne Fixtures | passed (Seed 4202103) | Vier ausgelieferte Scripts, 58 Quests, null KubeJS-/Rezeptfehler; Curios-Slotfehler beseitigt; kein Fünf-Seed-Ressourcenaudit |
| Backup / Restore | Linux in Alpha 0.1.0-alpha.2 geprüft | [Evidenz](tests/evidence/v0.1.0-alpha.2/REPORT.md); gleicher Modlock erforderlich, keine automatische Versionsmigration |
| Client / kompletter Solo-Pfad / Multiplayer | nicht formal abgenommen | JEI, native Bedienung, legitimer Bosskampf, Teamwechsel und Autocrafting-Job offen |
| Dimensional Age / Omega Core / eigene Bosse | not_started | [Backlog](docs/backlog.md); native spätere Modinhalte noch nicht umfassend gegated |

[Neue Laufzeitevidenz](tests/evidence/v0.4.0-alpha.1/REPORT.md), [Release-Notizen](docs/releases/0.4.0-alpha.1.md). Dreizehn Offline-Regressionstests sowie 79 industrielle Laufzeitprüfungen und zehn vollständige Neustartprüfungen bestanden. Keine FPS-/TPS-/Langzeit-/Spielzeitwerte wurden gemessen. `resolved` ist keine vollständige `approved`-Freigabe.

Nächster Schritt: Kapitel 04 im Client mit JEI und nativen Handbüchern durchspielen, tatsächliche Rohre/Terminal/Autocrafting prüfen und anschließend Dimensional Age planen. Vor Updates ein separates Profil und eine gesicherte Weltkopie verwenden.
