# Server sichern und wiederherstellen

Ab Alpha 0.1.0-alpha.2 enthält das Server-Kit `tools/backup.py`. Es sichert die Welt mit allen Dimensionen, Spieler-, FTB-Team-/Quest- und KubeJS-Weltdaten sowie `config/`, `defaultconfigs/`, `kubejs/`, Servereinstellungen, Freigabelisten und die Packidentität. Mod-JARs, Bibliotheken, Caches und Logs werden aus dem identischen Packlock wieder installiert und gehören nicht zum Backup.

## Offline sichern

1. In der Serverkonsole `save-all flush` und anschließend `stop` ausführen. Vollständiges Prozessende abwarten.
2. Im entpackten Server-Kit oder Repository mit Python 3.11+ ausführen:

```sh
python3 tools/backup.py create --instance server --output backups/before-update.zip
python3 tools/backup.py verify --archive backups/before-update.zip
```

Der Dateiname muss neu sein; der Backupordner liegt außerhalb von `server/`. Der Weltname wird aus `server.properties` gelesen. `--world mein-weltname` ist als zusätzliche explizite Auswahl möglich und muss mit `level-name` übereinstimmen. Ohne Serverkonfiguration wird nur der Standardordner `world` unterstützt. Verschachtelte Weltpfade, Java-Property-Escapes und Symlinks unterstützt diese Alpha nicht.

Das Werkzeug hält während der Sicherung die Betriebssystem-Sperre von Minecrafts `session.lock`. Ein laufender Server führt zum Abbruch. Manuelles Entfernen von `session.lock` umgeht diesen Schutz und darf nicht als Lösung verwendet werden.

Jede Datei bekommt Größe und SHA-256 im ZIP-Manifest. `verify` liest alle Dateien und prüft ihre Integrität. Ein Backup ist privat: Es enthält Spieler- und Serverdaten einschließlich gegebenenfalls eingerichteter Serverpasswörter.

## In einen separaten Server wiederherstellen

Verwende das Server-Kit mit demselben `pack/lock.json` wie zur Sicherung. Die Originalinstanz bleibt gestoppt und erhalten.

```sh
python3 tools/pack.py install-server --directory server-restored
python3 tools/backup.py restore --archive backups/before-update.zip --instance server-restored
```

Den frisch installierten Zielserver vor dem Restore noch nicht starten. Er darf keine Welt oder `session.lock` besitzen. Das Werkzeug prüft Packidentität, vollständiges Manifest und alle Prüfsummen vor dem Austausch der gesicherten Inhalte. Bestehende Welten und abweichende Modlocks werden abgelehnt. Minecraft erzeugt seine Sitzungssperre beim späteren Start neu.

Danach im Ordner `server-restored/` mit Java 21 über `run.bat` oder `run.sh` starten. Die gesicherten EULA-/Servereinstellungen werden wiederhergestellt; vor dem Start die EULA lesen und nur bei Zustimmung aktivieren. Port und Adresse prüfen, bevor Original und Restore parallel betrieben werden. Welt, Inventare und Questfortschritt kontrollieren und erst dann die neue Instanz verwenden.

Die Alpha begrenzt Restores auf 32 GiB unkomprimierten Inhalt. Native Windows-Sperren sind implementiert, aber bisher nur Linux wurde getestet. Prüfsummen erkennen Beschädigung; sie ersetzen keinen Nachweis der Herkunft eines fremden Archivs.

[Testbericht der Alpha 2](../tests/evidence/v0.1.0-alpha.2/REPORT.md)
