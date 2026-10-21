# Alpha installieren

## Client: CurseForge-Minecraft-App

1. Lade `ATM-Omega-Edition-0.2.0-alpha.1-curseforge.zip`. Die Datei unverändert lassen.
2. Öffne in der CurseForge-App Minecraft → eigenes Profil erstellen → Importieren. Wähle den ZIP und lasse alle Mods herunterladen.
3. Verwende Java 21. Beginne versuchsweise mit 4–6 GB zugewiesenem RAM; das ist kein gemessener Mindestbedarf.
4. Starte eine neue Survival-Welt. Öffne das FTB-Questbuch über den Inventar-Button und bestätige die Einführung.
5. Folge Kapitel 01 bis zum Mechanical Core und Kapitel 02 bis zum Electrical Core. Der Kupferauftrag verbraucht 120 Platten. Spätere arkane Zeitalter sind noch nicht enthalten.

Der Dedicated Server wurde geprüft. Launcherimport, Clientdarstellung, Quest-GUI und Zwei-Spieler-Durchlauf sind noch `not_run`. Nutze zunächst eine neue Testwelt.

## ZIPs aus dem Repository bauen

Python 3.11 oder neuer installieren, Repository herunterladen/klonen und im Projektordner ausführen:

```sh
python3 tools/validate_plan.py
python3 tools/pack.py validate
python3 tools/generate_quests.py --check
python3 -m unittest discover -s tests -v
python3 tools/pack.py build
```

Unter Windows kann `python3` durch `py -3` ersetzt werden. Beide ZIPs und SHA-256-Prüfsummen liegen anschließend in `dist/`. Der Build benötigt keine Moddownloads. [Build alpha exports](https://github.com/ACABadAngel/ATM-Omega-Edition/actions/workflows/build-alpha.yml) erzeugt dieselben Dateien als Workflow-Artefakt.

## Dedicated Server

Das separate `ATM-Omega-Edition-0.2.0-alpha.1-server-kit.zip` entpacken. Python 3.11+ und Java 21 installieren. Im entpackten Ordner:

```sh
python3 tools/pack.py install-server --directory server
```

Alternativ `install-server.bat` starten oder `sh install-server.sh` ausführen. Der Installer lädt die festgelegten Mods, prüft Hashes und installiert NeoForge. AppleSkin wird als Clientmod ausgelassen. Eine abweichende Java-Installation kann mit `--java /voller/pfad/zu/java` gewählt werden.

Lies die Minecraft-EULA und setze `server/eula.txt` selbst auf `eula=true`, wenn du zustimmst. Danach im Ordner `server/` die erzeugte `run.bat` beziehungsweise `run.sh` starten. Client und Server müssen denselben Packstand verwenden. Details: [Server-Handbuch](../pack/SERVER-README.md).

[Elektrische Werkstatt](electrical-age.md) erklärt den neuen Einstieg. Backup und Rücksicherung: [Schritt-für-Schritt-Anleitung](backups.md). Eine tatsächlich getestete Anordnung für Wasserrad und Presse steht unter [Erste Fabrik](first-factory.md).

## Vorhandene Solo-Welt aus Alpha 0.1 übernehmen

1. Importiere den neuen Client-ZIP als separates Profil. Starte ihn einmal bis zum Menü und beende Minecraft vollständig.
2. Öffne den Ordner des alten Profils und sichere den gesamten gewünschten Weltordner unter `saves/` an einem separaten Ort.
3. Kopiere ausschließlich diesen Weltordner nach `saves/` im neuen Profil. Verwende eine Kopie; behalte die alte Sicherung für einen Rollback.
4. Behalte die neuen `config/`- und `kubejs/`-Dateien des neuen Profils. Alte Skripte darüberzukopieren würde die neuen Rezepte und Quests entfernen.
5. Lade die kopierte Welt im neuen Profil. Die bisherigen Item- und Quest-IDs bleiben erhalten. Für Osmium und andere neue Mekanism-Erze musst du neue Chunks erkunden.

Ein Serverupdate folgt demselben Prinzip: neue Instanz mit neuem Lock installieren, beide Server stoppen, gesicherte Welt als Kopie unter dem passenden `level-name` übernehmen und die neuen Pack-Overrides behalten. Der Backup-Restore-Befehl ist ausschließlich für identische Locks gedacht; er migriert nicht automatisch von 13 auf 15 Moddateien. Für einen Rollback die unveränderte alte Sicherung mit dem alten Pack verwenden.

## Updates und Fehlermeldungen

Vor jedem Update Server stoppen und die komplette Welt einschließlich Quest-, FTB-Team- und KubeJS-Daten sichern. Die Installation schreibt absichtlich nicht über eine bestehende Welt. Manuelles Löschen der Questdaten verliert Fortschritt.

Bei Problemen Packversion, Java-Version, Betriebssystem, Aktion und relevante Zeilen aus `logs/latest.log` festhalten. Zugangsdaten, IP-Adressen und Spielernamen vor dem Teilen entfernen. Mods nicht einzeln aktualisieren: Änderung im Lock dokumentieren und neu testen.
