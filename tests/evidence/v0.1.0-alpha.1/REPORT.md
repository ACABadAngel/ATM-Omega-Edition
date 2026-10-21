# Alpha-Serverprüfung

21.10.2026. Minecraft 1.21.1, NeoForge 21.1.264, Java 21 (Eclipse Adoptium 21.0.12.1). Linux x86_64, glibc 2.39, 8-GiB-Container, 9 sichtbare CPUs. JVM: `-Xms1G -Xmx3G -XX:ActiveProcessorCount=4`. Dies ist keine Performance-Messung oder Hardwareempfehlung.

## Tatsächlich durchgeführt

In einer neuen isolierten Serverwelt wurden zwölf Server-JARs aus dem Packlock mit den Pack-Overrides geladen. Die [Testfixture](../../runtime_scripts/omega_smoke.js) verwendet echte Minecraft-/FTB-Klassen, verändert eine synthetische Team-ID und legt einen Itemstack in einer Truhe an. Sie wird nicht in die Pack-ZIPs exportiert.

| Prüfung | Ergebnis |
| --- | --- |
| Neue Welt, fünf Itemregistrierungen, sieben Crafting-Matches samt Outputmenge | PASS: [first-boot.json](first-boot.json), 29 Prüfungen |
| Pressrezept vorhanden, Typ `create:pressing` | PASS; kein physischer Maschinenbetrieb behauptet |
| FTB-Kapitel mit zwölf Quests, englischer Titel, zwei Sprachtabellen im Log | PASS |
| Lieferung: Simulation ohne Fortschritt; 64 + 56 verbraucht, acht zurückgegeben | PASS |
| Abgeschlossener Auftrag verbraucht keine weiteren Items | PASS |
| Welt speichern, vollständig stoppen und JVM neu starten | PASS: [restart.json](restart.json), 27 Prüfungen |
| Teamfortschritt bleibt 120; drei Mechanical Cores in Truhe erhalten | PASS nach Neustart |

Bereinigte Logzeilen: [server-excerpts.txt](server-excerpts.txt). Der [Fingerprint](fingerprints.json) bindet Lock und Laufzeitdateien an den Teststand. Export-/Integritätstests: `python3 -m unittest discover -s tests -v`.

## Reproduktion

1. Frischen Server nach [Installation](../../../docs/installation.md) erzeugen. EULA selbst lesen und gegebenenfalls zustimmen. Ausschließlich eine wegwerfbare Testwelt verwenden.
2. Fixture als `kubejs/server_scripts/__omega_smoke.js` kopieren; `kubejs/export/` anlegen.
3. Mit Java 21 starten, nach Bereitschaft zwei Sekunden warten. `kubejs/export/omega-smoke.json` muss `success=true`, `resumed=false` enthalten.
4. Ausgabe sichern. `save-all flush` und `stop` in der Konsole ausführen; Prozessende abwarten.
5. Dieselbe Instanz neu starten: `success=true`, `resumed=true`. Wieder stoppen. Testfixture und Testwelt niemals als Benutzerwelt veröffentlichen.

## Offene manuelle Abnahme

`not_run`: Launcherimport, Clientstart, deutsche/englische Quest-GUI, Itemmodelle, JEI/Ponder-Anzeige, physisch angetriebene Create-Presse, vollständiger Survival-Durchlauf, zwei echte Spieler, Reward-Idempotenz bei Disconnect, Teamwechsel, Backup-Restore und Langzeittest.

Der synthetische Teamtest prüft die FTB-ItemTask-API und gespeicherte Teamdaten. Er überspringt Vorquests im Testteam und beweist keinen realen Mehrspielerablauf. Beide Sprachtabellen werden geladen; sichtbarer deutscher Text ist noch nicht geprüft. Keine FPS-/TPS- oder Zeitversprechen.

Der Testhost erreicht Mojang-Authentifizierungsdienste und LAN-Multicast nicht direkt. Netzwerk-Warnungen blockierten den lokalen Serverstart nicht. Online-Authentifizierung blieb aktiviert; echter Spielerlogin wurde nicht geprüft.

## Installerprüfung

`tools/pack.py install-server` wurde zusätzlich in einem separaten Verzeichnis erfolgreich ausgeführt. Offizielle Downloadbibliotheken wurden aus dem lokalen Cache übernommen; generierte Slim-/Extra-/SRG-/gepatchte Server-JARs wurden vorher entfernt. Die vollständige NeoForge-Prozessorkette lief erneut und der Installer endete mit Exitcode 0. Alle zwölf Servermods wurden anhand des Locks übernommen; `eula=false` blieb erhalten. Eine komplett kalte Installation auf einem zweiten Rechner ist noch offen.

Ein erster Installerlauf brach im AutoRenamingTool ab. Die endgültige Pipeline begrenzt deshalb auch die vom Installer gestarteten JVMs über `JAVA_TOOL_OPTIONS` auf 2 GB Heap und vier sichtbare CPUs. Der erneute Installertest mit dieser Einstellung war erfolgreich. Der Testcache und private Umgebungsdaten gehören nicht zum Export.
