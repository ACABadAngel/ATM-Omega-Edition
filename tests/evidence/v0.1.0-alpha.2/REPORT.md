# Alpha 2: Maschine und Wiederherstellung

21.10.2026. Minecraft 1.21.1 / NeoForge 21.1.264 / Java 21 (Adoptium 21.0.12.1). Linux x86_64, 8-GiB-Container, 9 sichtbare CPUs. Server-JVM `-Xms1G -Xmx3G -XX:ActiveProcessorCount=4`. Die Zahlen sind keine Performance-Messung oder Hardwareempfehlung.

## Echte Create-Verarbeitung

[omega_press_smoke.js](../../runtime_scripts/omega_press_smoke.js) baut ausschließlich in einer wegwerfbaren Testwelt eine physische Anlage. Reales fließendes Wasser dreht ein kleines Wasserrad; eine Welle verbindet es mit der Presse. Ein Depot steht zwei Blöcke darunter. Es gibt keinen Creative Motor, keinen gesetzten künstlichen Drehzahlwert und keinen direkten Aufruf der Rezeptverarbeitung. Die Fixture legt Eingabeitems auf das Depot und liest die durch normale Serverticks erzeugten Ausgaben.

[press.json](press.json): PASS. Ein Primitive Core wird zu genau einem Pressed Core, anschließend ein Kupferbarren zu genau einer Kupferplatte. Die echte Presse läuft mit 8 RPM; beide Verarbeitungsschritte benötigen zusammen 380 Testticks. Das ist kein Durchsatzbenchmark. Eine vollständige Survival-Produktion und Itemlogistik sind damit nicht abgenommen.

API-/Blockzustandsprüfung gegen den offiziellen Create-Tag `mc1.21.1-6.0.10`, Commit `ac0c444d9828da3453ae8cc65338e8de063286fb`. Der Test wird nicht in Client- oder Server-Kit-ZIPs exportiert.

## Offline-Backup und Restore

1. Backupversuch gegen die laufende echte Server-JVM: [abgelehnt](live-backup-rejected.json), keine ZIP-Datei erzeugt.
2. `save-all flush` und `stop`; vollständiges Prozessende abgewartet.
3. `python3 tools/backup.py create --instance .work/server --output .work/backups/alpha2-world.zip`.
4. `verify` prüft jede Datei. `restore` übernimmt sie in eine separate, bereits mit demselben Lock installierte und noch weltlose Instanz.
5. Alle 65 gesicherten Dateien vor dem Start byteweise gegen die gestoppte Quelle verglichen; alle zwölf Server-JARs gegen den Lock geprüft: [backup-restore.json](backup-restore.json).
6. Restaurierten Server mit Java 21 gestartet. [after-restore.json](after-restore.json): 27 Prüfungen bestanden, einschließlich 120 Platten Teamfortschritt und drei gespeicherter Mechanical Cores. [restored-press.json](restored-press.json): Wasserpresse funktioniert auch nach Restore.

Die Welt enthält FTB-Questteamdaten und KubeJS-Persistenz. Der private Welt-ZIP und Servereinstellungen werden nicht eingecheckt. Das Testteam ist synthetisch; es ist kein Zwei-Spieler-Nachweis. [before-backup.json](before-backup.json), [bereinigte Logs](server-excerpts.txt) und [Quell-Fingerprints](fingerprints.json) halten den geprüften Stand fest.

## Automatische Regressionen und Grenzen

`python3 -m unittest discover -s tests -v`: zwölf Prüfungen für Backup-Roundtrip, aktive POSIX-Sperre, beschädigte Archive, vorhandene Welten, falsche Locks, Pfadprüfung, Downloadintegrität, Abhängigkeiten, Questgraph, saubere deterministische Exporte und Installer-Wiederanlauf. Das sind Offline-Tests; GitHub CI behauptet keinen Minecraft-Start.

Noch `not_run`: Client-/Launcherstart, Itemmodelle, JEI/Ponder-/Quest-GUI, sichtbares Deutsch, vollständiger Survival-Durchlauf, zwei Spieler, Teamwechsel/Disconnect-Rewards, natives Windows-Verhalten und Langzeittest. Die ursprünglichen Serverchecks der [ersten Alpha](../v0.1.0-alpha.1/REPORT.md) bleiben erhalten. Vor weiteren Inhalten zuerst die offene Client-/Team-Abnahme durchführen.
