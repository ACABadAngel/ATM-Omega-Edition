# Omega 0.2.0-alpha.1 — Dedicated Server Kit

Benötigt: **Python 3.11+ und Java 21**. Dieses Kit lädt die exakt gesperrten Moddateien von ihren Projektquellen und den NeoForge-Installer vom offiziellen Maven. Es enthält keine fremden JARs oder akzeptierte EULA.

1. ZIP in einen neuen Ordner entpacken.
2. `install-server.bat` ausführen oder `python3 tools/pack.py install-server --directory server` starten.
3. Die Minecraft-EULA lesen und bei Zustimmung in `server/eula.txt` selbst `eula=true` setzen.
4. `server/run.bat` beziehungsweise `server/run.sh` starten. `server/user_jvm_args.txt` erlaubt eigene Heap-Einstellungen, z. B. `-Xms2G` und `-Xmx4G`.
5. Spieler verwenden das Clientpaket derselben Packversion. Serveradresse und Netzwerkzugriff nach dem lokalen Test passend einrichten.

Liegt Java 21 nicht auf PATH: `python3 tools/pack.py install-server --directory server --java /pfad/zu/java21/bin/java`. Unter Windows kann `py -3` statt `python3` verwendet werden. Für eine bestimmte Java-Version zum normalen Serverstart PATH oder das erzeugte Startskript lokal konfigurieren.

Das Installationswerkzeug bearbeitet nur einen neuen Serverordner. Vor Updates eine vollständige Sicherung von Welt, Spieler-, Team-, Quest- und Konfigurationsdaten anlegen. Kein Installationsaufruf setzt vorhandene Welten zurück. Für Restore den gestoppten gesamten Serverordner sichern und als Kopie wiederherstellen.

Inhalt dieser Alpha: Create und Mekanism/Generators, zwei Questkapitel auf Deutsch/Englisch und Progression bis Electrical Core mit Infernaler Essenz. Der 120-Platten-Auftrag misst eine Abgabe; eine verifizierte Produktionsrate gehört erst in ein späteres Update.

## Offline-Backup und Restore

Server mit `save-all flush` und `stop` vollständig beenden. Danach im Kit-Ordner:

```sh
python3 tools/backup.py create --instance server --output backups/before-update.zip
python3 tools/backup.py verify --archive backups/before-update.zip
```

Zum Restore mit diesem identischen Packlock zuerst einen separaten Server installieren, noch nicht starten:

```sh
python3 tools/pack.py install-server --directory server-restored
python3 tools/backup.py restore --archive backups/before-update.zip --instance server-restored
```

Danach den restaurierten Server mit Java 21 starten. Vorhandene Welten und andere Modlocks werden abgelehnt. Backups enthalten private Welt-, Spieler- und Serverdaten. Die EULA-Einstellung wird aus der Sicherung übernommen; nur bei eigener Zustimmung aktivieren. Linux-Restore ist getestet; Windows benötigt noch native Abnahme. Die Quelle enthält eine ausführliche Anleitung unter `docs/backups.md`.

## Update von Alpha 0.1

Neues Kit in einen separaten Ordner entpacken und neue Serverinstanz installieren. Beide Server vollständig stoppen. Die gesicherte Welt als Kopie unter dem passenden `level-name` in die neue Instanz übernehmen; neue `config/`- und `kubejs/`-Overrides behalten. Keine automatische Modlock-Migration über `backup.py restore`: Für Rollback die ursprüngliche Sicherung mit dem alten Pack nutzen. Neue Mekanism-Erze benötigen neue Chunks. Bestehende Registry- und Quest-IDs sind unverändert; ein vollständiger Spieler-Durchlauf der Migration steht trotzdem aus.
