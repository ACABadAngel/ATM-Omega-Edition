# Masterplan

## Produkt und Spielversprechen

Omega Edition verbindet sechs Säulen: Großtechnik, Magie, Erkundung, anspruchsvollen Kampf, erneuerbare Ressourcen und ein kosmisches Endgame. Jede Säule liefert etwas Unverzichtbares, aber nicht jede beliebige Zusatzmod muss zur Pflicht werden. Der Spieler entscheidet über Fabriklayout, Transport, Energie-Mix und optionale Spezialisierungen; zentrale Meilensteine verbinden diese Entscheidungen.

Die typische Schleife lautet: Hinweis im Codex → Expedition oder Experiment → erster manueller Prototyp → wiederholbare Produktion → überprüfbare Meisterung → neues Werkzeug → nächster Horizont. Der erste Erfolg soll neue Gestaltungsmöglichkeiten schaffen, nicht nur die nächste teurere Werkbank.

**Schwierigkeit:** Expert, nicht Hardcore-Tod als Standard. Anspruch entsteht durch Systemverständnis, mehrere Produktionsmedien, Verteidigung, Logistik und Bossmechaniken. Trinkwasser-, Temperatur- oder Ernährungszwänge sind keine Pflicht, solange sie keine eigene interessante Entscheidung erzeugen. Grab-/Recovery-Lösung gehört früh ins Pack.

## Umfang und Prioritäten

| Priorität | Umfang | Ausschlusskriterium |
| --- | --- | --- |
| P0 Fundament | Reproduzierbarer Client/Server, Versionsregister, Save-Sicherheit | Start oder Restore scheitert |
| P1 spielbarer Kern | Survival bis erste Omega Star, zunächst kompakte Ketten | Gate-Zyklus, manuelle Sackgasse, kein Teamfortschritt |
| P2 vollständige Hauptprogression | 12 Zeitalter, drei Sterne, 3.000 kuratierte Quests als Ausbauziel | Kein kompletter End-to-End-Durchlauf |
| P3 Umfangsausbau | 1.000+ Mods, 15+ Dimensionen, 30+ Begegnungen, 5 eigene Bosse | Budget nur durch Füller erreichbar oder Performance-Gates verletzt |
| P4 Erweiterungen | Legacy Ascension, Infinite Dungeon, New Game+, Orbitalausbau | Gefährdet 1.0 oder Save-Kompatibilität |

Die erste Omega Star ist der Integrationsnachweis, nicht das Ende der Entwicklung. Für den frühen Durchlauf dürfen einzelne spät geplante Systeme durch klar bezeichnete Prototyprezepte vertreten sein. Diese Erleichterungen müssen vor dem Expert-Release wieder entfernt und erneut getestet werden.

## Ziele und ehrliche Messung

Die 1.085 Mods zählen eindeutige installierte Modprojekte einschließlich benötigter Bibliotheken; mehrere Versionen oder Dateien desselben Projekts zählen nicht mehrfach. Eingebettete Bibliotheken werden separat ausgewiesen, nicht als zusätzliche Gameplay-Mods beworben. Client- und Serverzahlen werden getrennt veröffentlicht. Die 3.000 Quests sind gestaltete Lern-, Fortschritts- oder Herausforderungsaufgaben; Übersetzungen und automatisch erzeugte Itemlisten zählen nicht zusätzlich.

15+ Dimensionen meinen eigenständige bespielbare Welt-IDs. Overworld, Nether und End zählen mit. Fünf Arenen innerhalb einer Dimension ergeben keine fünf weiteren Dimensionen. Bosszahlen unterscheiden unterschiedliche Mechaniken von härteren Wiederholungsvarianten.

500–1.000+ Stunden sind ein Zielkorridor für vollständige Meisterung durch erfahrene Spieler ohne Vorwissen über unsere Rezepte. Der kritische Pfad und optionale Completionist-Zeit werden separat gemessen. Es gibt kein künstliches Offline-Warten, um die Zahl zu erreichen.

## Inhaltlicher Aufbau

- **Technik:** mechanischer Einstieg, Elektrizität, Chemie, nukleare Ketten, quantenbasierte Fertigung und Omega-Multiblöcke.
- **Magie:** mehrere sich ergänzende Schulen, Rituale, Beschwörung, Zauberautomation und magische Werkstoffe.
- **Ressourcen:** Landwirtschaft, Bienen, Mobproduktion, Rohstoffabbau und Recycling haben verschiedene Kostenprofile. Keine universelle Lösung bereits im frühen Spiel.
- **Erkundung:** jede Pflichtdimension liefert einen einmaligen Entdeckungsnachweis und später automatisierbare Ressourcen.
- **Kampf:** klare Telegraphen, zugängliche Wiederholungen, Teamteilnahme und nützliche Ausrüstung statt reiner Lebenspunkte-Multiplikation.
- **Bauen:** großer freiwilliger Blockkatalog, frühe Transport-/Bauhilfen, spätere Schutz- und Megabasen-Systeme. Dekoration darf nicht hinter allen Expert-Gates liegen.

## Welt, Team und Bedienbarkeit

Das Pack funktioniert solo und kooperativ. Forschung und wesentliche Freischaltungen gehören dem Team; Sammlungen und kosmetische Leistungen können persönlich sein. Mitgliederwechsel darf keine Belohnungen vervielfachen. Ein neuer Spieler in einem fortgeschrittenen Team erhält die gemeinsamen Freischaltungen und eine Einführung, ohne die komplette Historie an Verbrauchsbelohnungen erneut zu bekommen.

Das Questbuch bietet eine kurze Hauptspur, System-Tutorials und klar markierte optionale Meisterung. Rezepte zeigen benötigte Maschine, Forschung und Medien. Der Codex erklärt Fehlerzustände von Maschinen, Rückwege aus Dimensionen und die Wiederbeschaffung verlorener Schlüssel. Deutsche und englische Texte werden parallel gepflegt; interne IDs bleiben unabhängig von Sprache stabil.

## Entscheidungen aus der Vorlage

Die widersprüchliche Alterszahl wurde vereinheitlicht. Die genannten Fremdmods bleiben Kandidaten; ihre Existenz in alten Minecraft-Versionen ist keine 1.21.1-Freigabe. Legacy-Ports sind ausdrücklich Teil der Strategie, werden jedoch einzeln geplant und getestet. Der fünfte eigene Boss wird als **Astral Warden** ergänzt, um die offene Fünferliste zu vervollständigen.

Das Beispielrezept mit 10 Billionen FE in zehn Minuten bleibt erhalten. Daraus folgt ein mittlerer Bedarf von rund 833,3 Millionen FE/t bei 20 TPS. Das erfordert ein passendes Transport-, Puffer- und Vor-Omega-Energiekonzept; siehe [Endgame](endgame.md). Die Zahl wird nicht in einen normalen 32-Bit-Energieslot gezwängt.

## Erfolg für Version 1.0

Client und Server sind mit festem Manifest installierbar. Eine frische Solo-Welt und ein neues Team erreichen alle drei Sterne ohne Administratorrechte oder unerklärte Overrides. Boss- und Ressourcenpfade haben erneuerbare Rückwege. Bestehende Welten überstehen Save-/Reload- und Upgrade-Tests. Die in [Qualität](quality.md) definierten Lastszenarien bestehen. Alle beworbenen Inhalte sind wirklich enthalten; Umfangsziele, die fehlen, stehen offen im Releasebericht.
