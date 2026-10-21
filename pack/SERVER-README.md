# Omega 0.1 — Dedicated Server Kit

Benötigt: **Python 3.11+ und Java 21**. Dieses Kit lädt die exakt gesperrten Moddateien von ihren Projektquellen und den NeoForge-Installer vom offiziellen Maven. Es enthält keine fremden JARs oder akzeptierte EULA.

1. ZIP in einen neuen Ordner entpacken.
2. `install-server.bat` ausführen oder `python3 tools/pack.py install-server --directory server` starten.
3. Die Minecraft-EULA lesen und bei Zustimmung in `server/eula.txt` selbst `eula=true` setzen.
4. `server/run.bat` beziehungsweise `server/run.sh` starten. `server/user_jvm_args.txt` erlaubt eigene Heap-Einstellungen, z. B. `-Xms2G` und `-Xmx4G`.
5. Spieler verwenden das Clientpaket derselben Packversion. Serveradresse und Netzwerkzugriff nach dem lokalen Test passend einrichten.

Liegt Java 21 nicht auf PATH: `python3 tools/pack.py install-server --directory server --java /pfad/zu/java21/bin/java`. Unter Windows kann `py -3` statt `python3` verwendet werden. Für eine bestimmte Java-Version zum normalen Serverstart PATH oder das erzeugte Startskript lokal konfigurieren.

Das Installationswerkzeug bearbeitet nur einen neuen Serverordner. Vor Updates eine vollständige Sicherung von Welt, Spieler-, Team-, Quest- und Konfigurationsdaten anlegen. Kein Installationsaufruf setzt vorhandene Welten zurück. Für Restore den gestoppten gesamten Serverordner sichern und als Kopie wiederherstellen.

Inhalt dieser Alpha: Create, erster Questpfad auf Deutsch/Englisch, Pflanzenfasern, Baumharz, Primitive Core, Pressed Core und Mechanical Core. Der 120-Platten-Auftrag misst eine Abgabe; eine verifizierte Produktionsrate gehört erst in ein späteres Update.
