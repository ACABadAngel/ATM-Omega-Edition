# Entwicklungsroadmap

Die Zeitangaben sind grobe Kalenderkorridore für ein kleines Team mit relevanter Entwicklungszeit. Sie sind keine Zusage. Ports, Assetarbeit, Playtests und 3.000 gute Quests können die Entwicklung deutlich verlängern. Ein Solo-/Freizeitprojekt plant zunächst in abgeschlossenen Lieferungen statt nach einem fixen Jahresdatum.

| Phase | Grober Korridor | Lieferumfang | Ausgangs-Gate |
| --- | --- | --- | --- |
| M0 Fundament | Wochen 1–3 | Exakte Toolchain, Packwerkzeug, minimales Modprofil, Client und Server | Reproduzierbarer Start, Save/Restore, Register |
| M1 früher vertikaler Abschnitt | Wochen 3–8 | A01–A03, eine Tech-/Magie-Anbindung, 10→100 Quests, erste Verträge | Neuer Spieler erreicht Mechanical/Electrical ohne OP |
| M2 Integrations-Alpha | Wochen 8–18 | Ungefähr 200–400 tragfähige Projekte, komprimierter Survival→Omega-Star-Pfad | Erste Star ohne Reactor, alle sechs Säulen vertreten |
| M3 Expert-Architektur | Wochen 16–28 | Richtige Forschungs-/Teamdaten, Matrix, Maschinenports, Gate-Lücken schließen | Speichern/Laden und Transaktionen stabil |
| M4 Umfang und Legacy-Piloten | Wochen 24–40+ | Batches bis 500–700, später 1.000+ soweit tragfähig; erste freigegebene Ports | Jede Aufnahme besteht Qualitäts-/Lastgates |
| M5 vollständiges Endgame | Wochen 30–52+ | A11–A12, drei Sterne, eigene Bossfolge, Welten und Infinity Core | Vollständiger Solo-/Teamdurchlauf |
| M6 Quest-/Inhaltsausbau | Ab M2 bis nach M5 | Kapitel auf vollständiges 3.000er-Ziel bringen, 15+ Welten und Begegnungen | Kuratierte Inhalte, Übersetzung, echte Registry-Zuordnung |
| M7 Beta / RC | Nach Hauptpfad, mehrere Monate möglich | Unabhängige Gruppen, Soaktests, Upgradepfad, Distribution und Fehlerkorrektur | Keine offenen P0/P1, vollständige Release-Checkliste |
| M8 spätere Erweiterung | Nach 1.0 | Legacy Ascension, Raumstationen, World Events, Infinite Dungeon, New Game+ | Eigene Spezifikation und Save-Verträglichkeit |

Phasen überlappen nur bei unabhängiger Arbeit. Zusätzliche Hände können Quests, Assets und Tests übernehmen; eine neue Modversion während Endgame-Abnahme invalidiert jedoch relevante Ergebnisse. Aufwandsschätzungen werden nach M1 und dem ersten Portpiloten neu erstellt.

## Erste zehn Arbeitstage als konkrete Startreihenfolge

| Block | Arbeit | Greifbares Ergebnis |
| --- | --- | --- |
| 1 | FND-01: Quellen/Versionen, Java, Loader und Pflichtabhängigkeiten | Ausgefülltes Kernregister und Toolchain-Entscheidung |
| 2 | FND-02: Packwerkzeug und Locking | Reproduzierbare Client-/Serverinstanz |
| 3 | FND-03/MOD-01: Logs, Backup, kleiner Modbatch | Frische Welt und Restore-Test |
| 4 | MVP-01: Primitive Core und mechanischer Ablauf | Erste echte Produktionslinie |
| 5 | MVP-02/MVP-03: zehn Quests und Liefervertrag | Spielbare Einführung mit klaren Nachweisen |
| 6 | MVP-04: zwei Spieler und Neustart | Abnahmebericht und nächste Schätzung |

Diese Blöcke passen bei gutem Verlauf ungefähr in zehn volle Arbeitstage; bei fehlender Infrastruktur oder Abhängigkeitsproblemen verschieben sie sich. Kein Block gilt ohne seine Evidenz als abgeschlossen.

## Umfang wachsen lassen

MVP bedeutet zuerst einen stabilen kleinen Abschnitt, nicht sofort 250 installierte Mods. Eine spätere Alpha kann 250+ Projekte enthalten, wenn sie benötigt werden. Die Reihenfolge ist: nützliche Rolle → passende Mod/Port → Abnahme → zusätzliche Rolle. Die Zahl 1.085 beschreibt das langfristige Inhaltsbudget.

## Stop- und Ausweichregeln

Wiederholbare Start-/Save-Probleme stoppen Aufnahme neuer Mods. Eine nicht tragfähige Weltgenerierung wird vor weiteren öffentlichen Welten geklärt. Ein gefährdeter Pflichtport erhält Ersatzrolle oder wird in die optionale Legacy-Erweiterung verschoben. Schlechte Performance wird nicht durch pauschal noch mehr „Performance-Mods“ behandelt, sondern durch Profiling und Reduktion des verursachenden Systems.

Wenn 1.000 Mods unter den Qualitätszielen nicht sinnvoll erreichbar sind, bleibt das Ziel im Langfristbacklog und die erste öffentliche Version benennt ihren wirklichen Umfang. Keine künstliche Modanzahl, keine beschädigten Welten zur Einhaltung eines Datums.
