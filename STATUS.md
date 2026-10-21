# Projektstatus

Stand: 2026-10-21 · **0.2.0-alpha.1**.

| Lieferung | Status | Evidenz |
| --- | --- | --- |
| Plan und vollständige Wunschliste | done | [473 Projekte](MODLIST.md); 15 Projekte für diese Alpha exakt aufgelöst |
| Minecraft / Loader / Modlock | resolved | 1.21.1 / NeoForge 21.1.264 / Java 21; [15 Client-/14 Serverdateien](pack/lock.json) |
| Clientexport / Server-Kit | built | [Installation](docs/installation.md), deterministische Exporte |
| Primitive-/Mechanical-Abschnitt | implemented; server_tested | Bestehende IDs erhalten; [Wasserpresse](tests/evidence/v0.2.0-alpha.1/create-press.json) funktioniert |
| Rezeptkonflikt Brot / Faser | fixed; server_tested | Ein Weizen → Faser; drei Weizen in jeder Werkbankreihe → Brot; genau ein Treffer pro geprüftem Grid |
| Elektrischer Abschnitt | implemented; server_tested | Echte Generatoren, Infuser, Kupfer-/Osmiuminfusion, Stahl, Kabel und Energy Cube |
| Sieben Items / elf Custom-Rezepte | implemented; server_tested | Neue Infernale Essenz und Electrical Core; Infuser-Ersatzrezept mit Mechanical Core |
| 22 bilinguale Quests in zwei Kapiteln | implemented; server_imported | Zwölf bestehende Quests mit alten IDs plus zehn neue Quests; zwei Sprachtabellen |
| Upgrade-Save / vollständiger Neustart | passed (synthetische Testwelt) | Alte Items/Lieferfortschritt erhalten; neue Electrical Cores und gespeicherte Energie bleiben bestehen |
| Neue Welt / Osmium | passed (eine Stichprobe) | [Neue Welt](tests/evidence/v0.2.0-alpha.1/fresh-world.json), [natürliches Osmium](tests/evidence/v0.2.0-alpha.1/worldgen.json) |
| Backup / Restore | Werkzeug unter Linux geprüft in Alpha 0.1.0-alpha.2 | [Evidenz](tests/evidence/v0.1.0-alpha.2/REPORT.md); nur gleicher Modlock, keine automatische Weltmigration |
| Client / vollständiger Solo-Durchlauf / Multiplayer | nicht formal abgenommen | Positives Nutzerfeedback zur vorherigen Alpha mit Rezeptproblemen; neue Version noch durchzuspielen |
| Arkane Progression / Omega Core / weitere Gates | not_started | [Backlog](docs/backlog.md); native spätere Mekanism-Inhalte noch nicht vollständig gegated |

[Neue Laufzeitevidenz](tests/evidence/v0.2.0-alpha.1/REPORT.md). Dreizehn Offline-Regressionstests prüfen unter anderem die Erhaltung veröffentlichter Quest-/Task-/Reward-IDs. Keine FPS-, TPS-, Langzeit- oder Spielzeitmessung liegt vor; `resolved` ist keine vollständige `approved`-Freigabe.

Nächster Schritt: Electrical Age im Client durchspielen, konkret verbleibende Rezeptprobleme dokumentieren und beheben, danach zwei arkane Rollen für den nächsten kleinen Abschnitt wählen. [Release-Notizen](docs/releases/0.2.0-alpha.1.md).
