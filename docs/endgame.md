# Endgame und Produktionsrezepte

Alle Werte sind **Version 0 des Balancing-Entwurfs**. Die IDs sind geplante `omega`-Registries. Diese Tabellen sind keine ladbaren Rezepte. Eine spätere Integration muss Typen, Tags und Medienadapter gegen die festgelegten Modversionen prüfen.

## Bootstrapping ohne Zyklen

| Vorhaben | Verfügbare Infrastruktur | Ergebnis |
| --- | --- | --- |
| A08 Quantum-Fertigung | Nuclear-Energie, Industrial-Komponenten, Dimensional-Ressourcen | Quantum Assembly Matrix Mk I |
| A09 kosmische Expedition | Quantum-Netz, Strahlungs-/Reiseschutz | Stellar Matter, Galactic Core und Stellar Dynamo Array |
| Erster Omega Star | Matrix Mk I, Stellar Dynamo Arrays, Puffer | Sternnachweis schaltet Reactor und Omega Realm frei |
| Omega Guardian | Erste Star, erneuerbar herstellbarer Schlüssel | Omega Core, Übergang A11 |
| Erster Transcendence Star | Omega Reactor, Matrix Mk II, erneuerbare Seelenfragmente | Transcendence-Realm und Synthese-Upgrades |
| Infinity Architect | Transcendence-Ausrüstung und Schlüssel, Infinity Forge kann schon gebaut werden | Architect Seal |
| Infinity Omega Star | Architect Seal, Forge, Transcendence-Produktion | Freigabe zum Bau des Infinity Core |

Der **Stellar Dynamo Array** wird als Vor-Omega-Generator vorgesehen: aus Galactic-Material, Fusionsbrennstoff und Kühlmittel. Zielwert je Array: 100.000.000 FE/t netto. Neun Arrays liefern im Entwurf 900.000.000 FE/t; ihre vollständige Brennstoffkette muss vor dem ersten Stern erreichbar sein. Falls die ausgewählten Mods diesen Bereich bereits sinnvoll abdecken, übernimmt ein getesteter Adapter die Rolle, statt eine redundante Maschine zu bauen. Werte werden beim Quantum-Prototyp neu bewertet.

## Sechs Singularitäten

| Produkt | Erstherstellung aus | Dauerproduktion / Meisterungsnachweis |
| --- | --- | --- |
| Technological Singularity | 256 Industrial Processor, 64 Precision Frame, 16 Nuclear Isotope | Metall-, Chemie- und Schaltungsproduktion in einer gemischten Linie |
| Arcane Singularity | 128 Arcane Binder, 64 Runic Crystal, 16 Ritual Focus | Zwei ergänzende Magiesysteme, wiederholbares Ritual ohne manuelles Einsetzen |
| Dimensional Singularity | Je 64 Forest, Celestial, Abyssal und Void Essence | Vier freigeschaltete Expeditionsrollen; Harvester nach legitimer Entdeckung |
| Biological Singularity | 256 Bio Matrix, 64 Pollinated Culture, 64 Crop Genome | Farm und Bienen-/alternativer Bestäuberpfad, erneuerbarer Nährstoffkreislauf |
| Quantum Singularity | 128 Quantum Circuit, 64 Stabilized Matter, 16 Stellar Matter | Schaltungen und hochreine Medien kontinuierlich herstellen |
| Boss Soul Singularity | Je 16 Titan, Devourer und Warden Fragment | Einmaliger eigener/Team-Sieg je Boss; danach Seelenkondensator statt unendlich manueller Kämpfe |

Diese Vorprodukte werden aus dem jeweiligen vorherigen Alter hergestellt, nicht aus einer bereits existierenden Omega Star. Die **Arcane Singularity Forge** ist trotz ihres Namens schon vor Omega verfügbar. Sie benötigt Quantum-/Arcane-Komponenten, keine Omega-Legierung.

Bossfragmente des Guardians gehören ausdrücklich nicht in die erste Boss Soul Singularity: Er wird erst nach der ersten Omega Star zugänglich. Für Transcendence dürfen seine Fragmente erforderlich sein.

## Drei Sterne

| Rezept | Eingaben | Energie gesamt | Dauer bei 20 TPS | Mittlere Rate |
| --- | --- | --- | --- | --- |
| `omega:omega_star` | 1× jede der 6 Singularitäten, 4× Omega Catalyst, 16× Stellar Matter | 10.000.000.000.000 FE | 12.000 Ticks = 600 s | 833.333.333,33 FE/t |
| `omega:transcendence_star` | 8× Omega Star, 4× je Singularität, 16× Ascension Matrix, 32× Guardian Fragment, 64× Transcendent Matter | 80.000.000.000.000 FE | 24.000 Ticks = 1.200 s | 3.333.333.333,33 FE/t |
| `omega:infinity_omega_star` | 8× Transcendence Star, 64× Omega Star, 16× Infinity Lattice, 1× Architect Seal, 64× Unified Essence | 640.000.000.000.000 FE | 36.000 Ticks = 1.800 s | 17.777.777.777,78 FE/t |

Omega Catalyst entsteht vor der ersten Star aus Quantum-/Arcane-Bindern und Stellar Matter. Ascension Matrix und Transcendent Matter sind A11-Produkte; Infinity Lattice und Unified Essence entstehen in A12 aus A11-Technologie. Die noch offenen chemischen/magischen Medien werden erst nach Auswahl der tatsächlichen Integrationen verbindlich. Das erste implementierte Rezept muss vollständige Item- und Medien-IDs besitzen, keine ungelösten Platzhalter.

**Aufwand für eine erste Infinity Omega Star:** 8 Transcendence Stars verbrauchen bereits 64 Omega Stars; zusammen mit den direkten 64 sind es mindestens **128 Omega Stars**. Einschließlich aller Stern-Unterrezeptenergien ergeben sich **2.560.000.000.000.000 FE**. Vorproduktenergie kommt zusätzlich hinzu. Das ist eine absichtliche Fabrikaufgabe, muss aber vor Release mit realen Linienraten auf übermäßige Wartezeit geprüft werden.

## Infinity Core

Nach dem ersten Infinity-Stern: 1× Infinity Omega Star, 8× Infinity Lattice, 4× Transcendence Core und ein fünf Minuten lang stabil versorgtes Aktivierungsritual. Meilenstein-Cores werden erneuerbar nach ihrem ersten Teamnachweis herstellbar. Das fertige System stabilisiert globale Endgame-Upgrades und bietet freies Weiterbauen. Es startet weder unbegrenzte Chunks noch unlimitierte globale Tick-Operationen. Komfortfunktionen haben messbare Grenzen.

## Energiepräzision und Transaktionen

Die Maschine speichert Energie und Mengen als geprüfte 64-Bit-Ganzzahlen. Das gewöhnliche NeoForge-Energieinterface arbeitet mit `int`-Transfers; ein `long`-Feld allein vergrößert dieses Interface nicht. Ziel: getrennte Ports mit pro Aufruf begrenzten Transfers, gesicherter Addition und einem eigenen internen Aggregat. Alternative direkte Adapter zu Großenergie-Systemen nur nach API- und Lasttest.

Für 17,78 Milliarden FE/t reichen einzelne int-Ports nicht. Die konkrete Portanzahl und Tick-Budgets sind vor dem Infinity-Prototyp zu beweisen; keine mehrfachen unbeschränkten Abfragen eines Nachbarn. Überlaufprüfungen gelten auch für `rate × ticks`, GUI-Werte und Netzwerkpakete. Nicht alle Systeme benutzen FE; Mana, Chemikalien und spezielle Fluide behalten zunächst getrennte Adapter.

Pro Tick wird der exakte Sollverbrauch über Quotient und Rest verteilt, damit die Gesamtsumme trotz nicht ganzzahliger Durchschnittsrate stimmt. Materialien werden beim Start atomar in eine persistente interne Escrow überführt. Pause verbraucht keine Zeit und keine Energie. Ausbruch/Abbruch liefert höchstens den gespeicherten Rest nach definierter Regel zurück; keine doppelte Rückgabe beim Chunk-Neuladen. Die genaue Save-Transaktion wird im Core-Prototyp getestet, bevor hohe Mengen erlaubt sind.

## Abnahme

Die erste Omega Star wird in einer frischen Welt ohne Omega-Reaktor erreicht. Alle sechs Singularitäten können danach dauerhaft produziert werden. Ein kompletter erster Infinity-Craft inklusive Unterprodukte wird mit erfasster Spiel- und Maschinenzeit durchlaufen. Energieverbrauch entspricht den exakten Gesamtwerten; Neustart, Stromausfall, Inventarüberlauf und Abbruch erzeugen keine Duplikate oder verlorenen Schlüsselzustände.
