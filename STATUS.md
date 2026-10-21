# Projektstatus

Stand: 2026-10-21 · **0.3.0-alpha.1**.

| Lieferung | Status | Evidenz |
| --- | --- | --- |
| Plan und vollständige Wunschliste | done | [473 Projekte](MODLIST.md); 21 Projekte für diese Alpha exakt aufgelöst |
| Minecraft / Loader / Modlock | resolved | 1.21.1 / NeoForge 21.1.264 / Java 21; [21 Client-/20 Serverdateien](pack/lock.json), alle Größen/SHA-1/SHA-512 geprüft |
| Clientexport / Server-Kit | built | [Installation](docs/installation.md), deterministische Exporte ohne fremde JARs |
| Primitive-/Mechanical-Abschnitt | implemented; server_tested | Alte IDs erhalten; [Wasserpresse](tests/evidence/v0.2.0-alpha.1/create-press.json) bereits isoliert geprüft |
| Brot / Faser | fixed; server_tested | Ein Weizen → Faser; drei Weizen → Brot; kein Konflikt in den geprüften Grids |
| Elektrischer Abschnitt | implemented; server_tested | Generator, Infusion, Stahl, Kabel und Speicher; alte zwei Electrical Cores und exakt 572131 J bleiben nach Upgrade erhalten |
| Arkaner Abschnitt | implemented; server_tested | Echte Source-Erzeugung, Imbuement, Apparatus, Spirit Fire; [Werkstatt](docs/arcane-age.md) |
| Zehn Items / 17 Custom-Rezepte | implemented; server_tested | Runenkristall, Binder, Omega Arcane Core; sechs native Rezepte ersetzt, einschließlich beider goldenen Schalen |
| 38 bilinguale Quests in drei Kapiteln | implemented; server_imported | 22 alte Quests mit stabilen Task-/Reward-IDs plus 16 neue Quests; zwei Sprachtabellen |
| Wilden Chimera als Titan-Prototyp | native integration; adapter_tested | FTB-KillTask ignoriert Zombie und zählt richtigen Typ einmal; tatsächlicher Spieler-Kill-Event und legitimer Kampf offen |
| Upgrade-Save / vollständiger Neustart | passed (synthetische Testwelt) | Zwei produzierte Binder, Runenkristall, neuer Kernstack, KillTask und alte 120er-Lieferung; isolierte Jars behalten exakt 3399/1999 Source |
| Neue Welt / Ressourcen | begrenzte Prüfungen | Osmium-Stichprobe in Alpha 0.2; frischer Alpha-0.3-Start separat protokolliert; kein Fünf-Seed-Audit |
| Backup / Restore | Linux geprüft in Alpha 0.1.0-alpha.2 | [Evidenz](tests/evidence/v0.1.0-alpha.2/REPORT.md); gleicher Modlock erforderlich, keine automatische Versionsmigration |
| Client / kompletter Solo-Durchlauf / Multiplayer | nicht formal abgenommen | Positives Nutzerfeedback zum früheren Stand; neue Kapitel noch vollständig durchzuspielen |
| Industrial Age / Omega Core / eigene Bosse | not_started | [Backlog](docs/backlog.md); native spätere Modinhalte noch nicht umfassend gegated |

[Neue Laufzeitevidenz](tests/evidence/v0.3.0-alpha.1/REPORT.md), [Release-Notizen](docs/releases/0.3.0-alpha.1.md). Dreizehn Offline-Regressionstests und 55 arkane Laufzeitprüfungen plus acht Neustartprüfungen bestanden. Kein FPS-/TPS-/Langzeit-/Spielzeitwert wurde gemessen. `resolved` ist keine vollständige `approved`-Freigabe.

Nächster Schritt: Kapitel 03 im Client mit nativen Büchern, JEI, Ritual und Bosskampf prüfen, konkrete verbleibende Rezeptprobleme festhalten und anschließend Industrial Age mit Chemie und digitaler Lagerung entwickeln. Vor Updates ein separates Profil und eine gesicherte Weltkopie verwenden.
