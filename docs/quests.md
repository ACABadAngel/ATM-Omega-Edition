# Questbuch: Struktur, Daten und Nachweise

## Budget: exakt 3.000 gestaltete Aufgaben

| Bereich | Anzahl | Typische Aufgaben |
| --- | ---: | --- |
| Einführung & Survival | 150 | Orientierung, Nahrung, sichere Basis und erste Metalle |
| Technik & Maschinen | 500 | Rotation, Strom, Chemie, Präzision und Reaktoren |
| Magie & Rituale | 350 | Systeme verstehen, Rituale bauen und kombinieren |
| Landwirtschaft & Ressourcen | 250 | Nahrung, Saatgut, Bestäubung und Mobressourcen |
| Erkundung & Dimensionen | 350 | Reisevorbereitung, Proben, Rückkehr und Entdeckungen |
| Kampf & Bosse | 250 | Ausrüstung, Mechaniken, Siege und Wiederholungen |
| Bauwesen & Logistik | 200 | Lager, Transport, Autocrafting und Fabrikorganisation |
| Automation Challenges | 300 | Lieferung, Produktionsrate und langfristige Integration |
| Omega-Endgame | 350 | Sechs Singularitäten, drei Sterne und Infinity Core |
| Nebenquests & Geheimnisse | 300 | Sammlungen, Lore und optionale Meisterung |
| **Gesamt** | **3.000** | Jede Quest hat einen erkennbaren Zweck |

Planungsformat: [quest-samples.csv](../planning/quest-samples.csv). Es enthält repräsentative Hauptpfad-Beispiele, **nicht 3.000 fertige Quests**. Die späteren 12 Altersübersichten werden durch je mehrere Systemkapitel und freiwillige Meisterungen ergänzt. Die Budgetkategorien sind keine starre Beschränkung auf zehn FTB-Kapitel.

## Lesbarer Aufbau

Das Hauptmenü zeigt aktuelles Alter, nächsten Meilenstein, offene Pflichtzweige und optionale Empfehlungen. Ein Alterskapitel hat eine kurze Hauptspur mit etwa 8–15 Gates; Systemkapitel erklären die darunterliegenden Produktionsketten. Der Spieler sieht den Grund jeder Sperre. Geheimnisse verstecken optionale Überraschungen, niemals notwendige Progressionsregeln.

Für den ersten MVP werden mindestens zehn Quests im echten Editor erstellt. Die frühe Alpha wächst zunächst auf ungefähr 100–300 nützliche Quests. Erst mit stabiler Progression werden weitere Tutorials und Meisterungen ergänzt. Eine Quest wird nicht allein deshalb angelegt, weil ein Mod ein weiteres dekoratives Item enthält.

## Questvertrag

Jede Quest hat stabile ID, Titel, Spielerzweck, Alter, Voraussetzungen, Erfüllungsbedingung, Team-/Personenbereich, Wiederholbarkeit, Belohnung, Hinweis und Abnahmetest. Registry-IDs werden gegen die installierte Instanz geprüft. FTB-interne IDs werden einmalig erzeugt und über Versionen erhalten; die lesbaren Planungs-IDs bleiben als Mapping bestehen.

| Nachweisart | Geeignet für | Technische Grenze |
| --- | --- | --- |
| Gegenstandsbesitz | Werkzeug, erstes Bauteil | Beweist keine eigene Produktion |
| Abgabe | Verbrauchsziel und Auftrag | Input atomar, keine doppelte Belohnung |
| Entdeckung / Advancement | Reise und Meilenstein | Serverseitig validierter Nachweis |
| Bossereignis | Sieg und Teilnahme | Team/Teilnahmeadapter statt allein letztem Treffer |
| Liefervertrag | Mengen am Abgabepunkt | Zählt als Lieferung, nicht als neu produziert |
| Produktionsvertrag | Rate und Dauer | Benötigt verifizierten Produktionsadapter aus Omega Core |
| Manuelle Bestätigung | Freiwilliges Bau-/Lernziel | Kein unverzichtbares Sicherheits-/Forschungsgate |

Nicht jede gewählte FTB-Quests-Version bietet alle Nachweise direkt. Individuelle Nachweise werden mit einem getesteten Adapter implementiert. Falls dieser fehlt, bleibt die Quest Design oder wird ehrlich als Lieferaufgabe umgesetzt. Eine Checkbox ersetzt keinen Produktionsnachweis.

## Beispielhafte frühe Questtexte

**Ein sicherer Anfang:** Lege Nahrung, eine Lichtquelle und Ersatzwerkzeug bereit. Du brauchst keine perfekte Basis; ein geschützter Arbeitsbereich reicht. Belohnung: einfache Baumaterialien und ein Wegweiser zum Metallkapitel. Freiwillige Bestätigung, kein harter Forschungscheck.

**Die erste Platte:** Verarbeite Kupfer zuerst von Hand und später in der Presse. Die erste Handcharge ermöglicht den Primitive Core und verhindert einen Pressen-Zirkel. Belohnung: Verbrauchsmaterial für den nächsten Versuch, keine höhere Legierung.

**Eine Linie, die selbst läuft:** Führe Material von einem Eingang durch die mechanische Presse in ein Ausgangslager. Die erste MVP-Version darf eine klar als Lieferung bezeichnete Abgabe zählen. Sobald ein Produktionsadapter existiert, verlangt die Meisterung 120 neue Platten über 120 aktive Sekunden.

**Mehr als ein Zaubertrick:** Verbinde ein wiederholbares Ritual mit einer technischen Zulieferung. Das Hint-Feld zeigt, wie du einen Itemstau erkennst. Fortschritt: Arcane-Binder-Produktion; Komfortbelohnung statt kostenloser Arcane Singularity.

**Die erste Omega Star:** Bringe alle sechs Singularitäten zur Matrix. Prüfe Energiepuffer und Kühlkreislauf vor dem Start. Nach erfolgreicher Herstellung bleibt der Teamnachweis erhalten, auch wenn die Star später verbraucht wird. Belohnung: Forschung/Freischaltung und kosmetische Trophäe.

## Belohnungen und Teamregeln

Belohnungen passen zur erreichten Stufe und geben Komfort, Lore, Kosmetik oder kleine Verbrauchschargen. Pflicht-Forschung wird deterministisch vergeben. Fortschrittsitems aus höheren Stufen und zufällige Pflichtdrops sind ausgeschlossen.

Teamquests teilen den Nachweis, verbuchen aber Teamfreischaltung nur einmal. Persönliche Kosmetik kann pro berechtigtem Spieler vergeben werden. Join/Leave, Teamauflösung, Offline-Mitglieder und Serverneustart werden geprüft. Wiederholbare Wirtschaftsjobs liefern keine unendlichen Forschungspunkte.

## Produktion von Questinhalten

Zuerst Aufgaben im Tabellenentwurf formulieren, dann Registry-IDs und Nachweise auflösen, Editor-Muster erstellen, Kapitel importieren/ausarbeiten, im Spiel prüfen und übersetzen. Automatische Generierung kann IDs und Layout unterstützen; sie ersetzt keine inhaltliche Prüfung. Ein Kapitel ist fertig, wenn ein neuer Tester es ohne mündliche Erklärung spielen kann und alle Voraussetzungen stimmen.
