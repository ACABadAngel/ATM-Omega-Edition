# Progression: zwölf Hauptzeitalter

Die folgende Tabelle definiert den kritischen Pfad. Innerhalb eines Zeitalters laufen Technik, Magie, Ressourcen und Erkundung teilweise parallel. Die Altersfolge selbst ist absichtlich eindeutig; das vollständige Rezeptnetz wird bei Implementierung zusätzlich als Abhängigkeitsgraph geprüft.

| ID / Zeitalter | Einstieg | Hauptaufgaben und Produktionskette | Austrittsnachweis | Dauerhafter Nutzen |
| --- | --- | --- | --- | --- |
| A01 Primitive | Neue Welt | Nahrung sichern, Stein/Metalle verarbeiten, Harz und Fasern gewinnen, einen sicheren Rückzugsort bauen | Primitive Core aus Kupferplatten, Fasern, Harz und Holzkohle; vorläufig einfache Handverarbeitung möglich | Feldwerkzeuge, Grundlager, mechanische Bauteile |
| A02 Mechanical | Primitive Core | Wasserkraft → Rotation → Pressen/Mischen → mechanische Legierung; erster Förderkreis | Mechanical Core und Vertrag: 120 Platten in 120 s am Endpunkt | Rotationskomponenten bleiben für alle späteren Gehäuse nötig |
| A03 Electrical | Mechanical Core | Generator → Kabel → Speicher → elektrische Metallverarbeitung; Nether-Expedition | Electrical Core, stabiler Stromkreis, Infernal Essence | Grundstrom, frühe Logistik und erste automatisierte Farmen |
| A04 Arcane | Electrical Core | Zwei ergänzende magische Systeme, Runenproduktion, Ritualautomatisierung, Ancient Titan | Arcane Core, Runenlinie und persönliche/Team-Bossberechtigung | Arkane Binder und magische Katalysatoren bis Infinity |
| A05 Industrial | Arcane Core | Chemie → Gase/Fluide → Erzaufbereitung → digitale Lagerung → erste Großfarmen | Industrial Core und gemischter Produktionsvertrag | Massenteile, Chemikalien, Logistik, Saatgut/Bienen der mittleren Stufe |
| A06 Dimensional | Industrial Core | Wald/Himmel/Tiefe erschließen, Void Devourer, drei verschiedene Essenzen; Dimensionsscanner herstellen | Dimensional Core, Erkundungsnachweise und erneuerbare Essenzproduktion | Dimensionsproben und Harvester-Lizenzen |
| A07 Nuclear | Dimensional Core | Brennstoffverarbeitung, Kühlkreislauf, Spaltung, Abfallpfad, Fusion-Prototyp | Nuclear Core und kontrollierter Last-/Abschalttest | Vor-Omega-Strom, Strahlungsschutz und Isotope |
| A08 Quantum | Nuclear Core | Quantenschaltungen, Materie-Vorstufen, Netzwerkausbau, Quantum Assembly Matrix Mk I | Quantum Core, fertige Matrix, 15-minütiger Ressourcenvertrag | Erstes Sterncrafting ohne Omega-Technologie möglich |
| A09 Galactic | Quantum Core | Raumfahrt oder ersetzbare kosmische Expedition, Alien-Raffination, Astral Warden | Galactic Core, Stellar Matter und Reise-/Rückkehrnachweis | Kosmische Werkstoffe und Vor-Omega-Generatorarray |
| A10 Omega | Galactic Core | Sechs Singularitäten, Omega-Katalysatoren, erste Omega Star; Omega Guardian | Omega Core nach erstem Stern und Guardian-Sieg | Omega Reactor, Omega Realm, modulare Rüstung und Aufskalierung |
| A11 Transcendence | Omega Core | Alle Hauptzweige meistern, Transcendence-Prüfungen, Sternfabrik, Materiesynthese | Transcendence Core nach erster Transcendence Star | Transcendence Realm, leistungsfähige Synthese und Omega Network |
| A12 Infinity | Transcendence Core | Infinity Forge, Architect-Schlüssel, fünfphasiger Boss, Infinity Omega Star | Infinity Core aktivieren und Infrastrukturtest bestehen | Freies Bauen, kosmetische Ascension und optionale Folgeherausforderungen |

Die Tabelle beschreibt das langfristige Design. In Alpha 0.1.0-alpha.2 ist A02 ein verbrauchender Lieferauftrag über 120 Platten, ohne Zeit- oder Neuproduktionsmessung. Eine echte wasserbetriebene Presse wurde isoliert auf dem Server geprüft. Der elektrische Abschnitt und spätere Gates sind noch nicht implementiert.

## Core, Stern und Forschung sauber trennen

Ein **Core** ist ein Meilensteinobjekt für Rezepte. Das dauerhafte Team-Flag bestätigt den erreichten Abschnitt; es wird nicht wieder gelöscht, wenn der Core verbraucht oder verloren wird. Der **Stern** ist ein teures Verbrauchs-/Herstellungsprodukt. **Forschung** bietet gezielte Freischaltungen und Seitenspezialisierungen. Kein System darf irrtümlich voraussetzen, dass ein Team ein bereits verbrauchtes Item ständig im Inventar trägt.

Der Eintritt nach Omega benötigt A09; die erste Omega Star wird innerhalb von A10 gebaut. Erst sie schaltet den Omega Reactor frei. Danach wird der Guardian zugänglich und liefert zusammen mit dem Sternnachweis den Omega Core für A11. Entsprechend entsteht die erste Transcendence Star innerhalb A11; ihr Nachweis ermöglicht den Transcendence Core und A12. Der Infinity Core ist das finale Ziel, nicht die Voraussetzung für die Infinity Forge.

## Parallelpfade und Ersatzwege

Magie darf früh ausprobiert werden, auch wenn ihr großer Meilenstein erst A04 ist. Bau- und Nahrungssysteme bleiben von der Hauptfolge weitgehend frei. Nebenpfade können unterschiedliche Produktionsmethoden anbieten; Pflichtkomponenten verwenden gemeinsame Tags, solange dadurch kein Gate entfällt.

Jedes Pflichtmaterial hat einen erreichbaren ersten Erwerbsweg und nach seinem ersten legitimen Nachweis einen wiederholbaren Pfad. Nicht erneuerbare Weltfunde erhalten Scanner, Respawn-/Beschwörungsweg oder eine ressourcenintensive Ersatzroute. Ein Ersatzmod muss dieselbe Progressionsrolle erfüllen; sein Name ist kein Bestandteil eines langfristig gespeicherten Forschungs-Flags.

## Schutz vor Abkürzungen und Softlocks

1. Jedes Core-Rezept wird vom vorherigen Zeitalter aus ohne den eigenen Core erreichbar gemacht.
2. Prüfe nicht nur Crafting: Loot, Handel, Questbelohnungen, Recycling, Pflanzen, Bienen, Beutetaschen und Materiekopien ebenfalls.
3. Der erste digitale Lagerzugang kommt spätestens A05. Schwierigkeit darf nicht aus einer absichtlich unbedienbaren Lagerverwaltung entstehen.
4. Pflichtbosse lassen sich erneut beschwören; ein Verlust des Schlüsselitems sperrt keine Welt dauerhaft.
5. Portale besitzen eine sichere Rückkehrlösung. Rettung darf keine Endgame-Rohstoffe duplizieren.
6. Teamfreischaltungen werden serverseitig gespeichert. Einzelne persönliche Leistungen können auf gemeinsamen Fortschritt aufbauen.
7. Die Overworld wird nicht für späte Ressourcen neu generiert. Späte Erze liegen in angekündigten Reserven, separaten Abbauwelten oder kontrollierten Expeditionsgebieten.

## Optional A13: Legacy Ascension

Nach der Infinity Omega Star kann ein späteres Update drei freigegebene Legacy-Systeme verbinden. Ziel: Eternal Omega Core aus bewiesenen Meisterungen und einer generationsübergreifenden Fertigungskette. Der Epilog bleibt deaktiviert, solange seine Pflichtports nicht vollständig freigegeben sind. Er ist keine nachträgliche Voraussetzung für das Hauptende. Kompatible Alternativen dürfen seine Rollen übernehmen, ohne einen bestimmten historischen Mod zu versprechen.

## Zeitkorridore

Frühe Spieltests messen Zeit bis erster Automation, bis zu jedem Core und bis zur ersten Sternfabrik. Noch keine Stundenzahl pro Alter festschreiben: Spielerzahl, Erfahrung und Produktionsparallelität verändern sie stark. Eine wartende Fabrik bekommt Optimierungsmöglichkeiten oder aktive Nebenaufgaben, keinen unveränderlichen mehrstündigen Timer. Der Zielkorridor von 500–1.000+ Stunden bezieht sich auf spätere vollständige Meisterung, nicht auf das erste Erz oder einen einzigen Sterncraft.
