# Technische Architektur und Repository-Aufbau

## Aktueller Stand und spätere Laufzeit

Aktuell existieren Dokumentation, `planning/`, ein Python-Validator und dessen CI. Es gibt noch keine Gradle-/Pack-Builds. Die folgende Struktur ist der **Zielaufbau**, kein Verzeichnis mit bereits funktionierenden Dateien.

| Pfad | Zuständigkeit / Zeitpunkt |
| --- | --- |
| `CLAUDE.md`, `STATUS.md` | Arbeitsregeln und ehrlicher Lieferstand |
| `docs/`, `planning/` | Designs, Entscheidungen, Kandidaten und Planungsprüfungen |
| `pack/` | Reproduzierbarer Pack-Metastand, sobald ADR-02 entschieden ist |
| `pack/overrides/config/` | Vom Pack gepflegte gemeinsame Modkonfigurationen |
| `pack/overrides/defaultconfigs/` | Server-Defaults für neue Welten; Änderungen bestehender Welten separat migrieren |
| `pack/overrides/config/ftbquests/quests/` | Späteres Questbuch; Format aus festgelegter Editorversion |
| `pack/overrides/kubejs/startup_scripts/` | Einfache Registrierungen, nur mit geklärtem Registry-Eigentümer |
| `pack/overrides/kubejs/server_scripts/` | Rezepte, Tags, Loot, Gates und Integrationen |
| `pack/overrides/kubejs/client_scripts/` | Anzeige, Hinweise und Recipe-Viewer-Integration |
| `pack/overrides/kubejs/assets/` | Pack-Assets mit Herkunftsnachweis |
| `pack/overrides/kubejs/data/` | Datenpacks nach bestätigter KubeJS-Version |
| `omega-core/` | Echte NeoForge-Mod, eigener MDK-/Gradle-Build |
| `ports/<id>/` | Port-Dossiers und feste Verweise auf getrennte Forks |
| `tests/scenarios/`, `tests/evidence/` | Reproduzierbare Szenarien und bereinigte Ergebnisse |
| `dist/`, `run/`, lokale Welten | Generierte Artefakte, nicht in Git |

Native Datapacks werden nur über einen nachgewiesenen Pack-Installationsmechanismus verteilt. Ein frei angelegter `datapacks/`-Ordner im Repo installiert nichts von allein in neu erzeugte Welten.

## Verantwortungsgrenzen

**Packwerkzeug:** Versionen, Abhängigkeiten, Downloadquellen, Hashes, Seitenfilter und Client-/Serverexport. Es gibt einen kanonischen Lock-Stand. Launcherformate werden daraus erzeugt, nicht unabhängig manuell gepflegt.

**KubeJS:** Versionsgebundene Rezepte, Tags, Lootanpassungen und kleine Ereignisbrücken. Scripts werden nach System getrennt; gemeinsame Konstanten werden nicht widersprüchlich kopiert. Fehlende Pflichtmods erzeugen verständliche Integrationsfehler. Optionale Integrationen werden ausdrücklich erkannt und isoliert.

**Omega Core:** stabile Registries für zentrale Gameplayobjekte, gespeicherte Teamforschung, Maschinen, Produktionsnachweise, Netzwerk und Bosse. Fremde Magie-/Energieadapter sind optionale Module; ein fehlender Fremdmod darf nicht schon beim Laden einer Klasse abstürzen.

**FTB Quests:** Benutzerführung, Aufgaben und Belohnungsdarstellung. Es ist nicht gleichzeitig eine zweite unabhängige Forschungsdatenbank. Eine serverseitige Quelle des Fortschritts und idempotente Adapter verhindern auseinanderlaufende Zustände.

## Daten und IDs

Namespace `omega`. IDs in `snake_case`, z. B. `omega:omega_star`, `omega:mechanical_core`, `omega:quantum_assembly`. IDs über Save-Versionen erhalten. Sprachtexte stehen unter `de_de`/`en_us`, nicht als gespeicherte Schlüssel. Exakte Komponenten-, Rezept- und Advancement-Formate werden am gewählten Build verifiziert.

Teamdaten enthalten `schema_version`, stabile Teamreferenz, freigeschaltete Forschungen, einmalige Reward-Ereignisse, Meisterungen und aktive Verträge. Questfortschritt und FTB-Teamidentität werden über einen versionierten Adapter verbunden. Teamwechsel benötigt eine dokumentierte Merge-/Leave-Regel; Kopieren aller Eventlogs in jedes neue Team ist ausgeschlossen.

Rezepte erhalten feste IDs und deklarieren Inputs, getrennte Medien, Energie, Dauer, Forschungsanforderung und Output. Beim Laden werden doppelte IDs, negative Mengen, nicht auflösbare Registries und unerreichbare Pflichtrezepte abgefangen. Nicht jede Tag-Alternative ist automatisch ein zulässiger Fortschrittsersatz.

## Build und Veröffentlichung

Für Omega Core den offiziellen 1.21.1-MDK verwenden, genaue Wrapper-/Pluginversion committen und Java 21 dokumentieren. Der Packexport muss eine frische isolierte Installation erzeugen. Serverexport enthält keine reinen Clientmods und keine personenbezogenen Launcher-/Serverdateien.

Versionen: `0.x.y` während Entwicklung; `1.0.0` nur nach vollständigem Release-Gate. Der Stand wird mit Packlock, Omega-Core-Artefakt und gegebenenfalls Portartefakten zusammen getaggt. Drittanbieterartefakte werden anhand ihrer Rechte verlinkt/aufgelöst oder zulässig verteilt. Keine blanket Lizenzangabe für fremde Mods.

## Save-Migration

Jede persistente Änderung besitzt Schemaversion und Migration oder eine explizite Kompatibilitätsgrenze. Vor Migration werden Welt, Spieler-, Team- und Questdaten gesichert. Restore und Rollback werden gegen eine Kopie getestet. Neue Core-/Sternrezepte dürfen bereits erreichte Teamfortschritte nicht unbemerkt löschen. Neue Worldgen-Inhalte brauchen frische Chunks oder eine eigene Expeditionswelt.

## Vorläufige Architekturentscheidungen

Minecraft 1.21.1/NeoForge/Java 21 ist die geplante Baseline. Die Version wird nicht durch eine beliebige neueste Dokumentationsseite ersetzt. Noch offen: Packwerkzeug, genaue Modbuilds, primärer Rezeptviewer, Fortschrittsadapter und konkrete Magiemedien. Siehe [Entscheidungen](decisions.md).
