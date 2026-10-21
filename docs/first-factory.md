# Erste Fabrik: vom Kern zur laufenden Presse

Der Alpha-Pfad bleibt klein: Werkbank und Metall → Primitive Core → Wasserrad und Presse → Pressed Core → Mechanical Core. JEI zeigt die Rezepte; Create Ponder erklärt Platzierung und Rotation. Beide Clientanzeigen benötigen weiterhin einen echten Clienttest.

1. Sammle Kupfer, Eisen, Andesit, Holz, Feuerstein und Weizen. Kupferplatten lassen sich vor der ersten Presse aus je einem Kupferbarren und Feuerstein fertigen; der Feuerstein wird verbraucht.
2. Pflanzenfasern entstehen aus drei Weizen, Baumharz aus Stamm und Feuerstein. Ein Primitive Core benötigt vier Kupferplatten, zwei Fasern, zwei Harze und Holzkohle.
3. Fertige mehrere Primitive Cores: Wasserrad, mechanische Presse und der spätere Pressed Core benötigen jeweils einen. Wellen entstehen über Creates normales Andesitlegierungs-Rezept.
4. Baue das Wasserrad und die Presse gemäß JEI. Lass Wasser am Rand des Wasserrads herunterfließen. Verbinde dessen Achse mit der Achse der Presse über Wellen.
5. Platziere das Depot **zwei Blöcke unter der Presse**. Ein freier Luftblock liegt dazwischen. Lege einen Primitive Core auf das Depot. Bei laufender Rotation verarbeitet die Presse ihn zu einem Pressed Core.
6. Verarbeite Kupferbarren auf demselben Depot ohne Feuersteinkosten. Gib 120 fertige Platten im Lieferauftrag ab; sie werden verbraucht. Der Auftrag misst keine Produktionsrate und akzeptiert auch Handplatten.
7. Fertige den Mechanical Core aus Pressed Core, vier Andesitlegierungen, zwei Kupferplatten, einer Welle und Redstone. Schließe Lieferauftrag und Kernquest ab. Damit endet die Alpha-Hauptkette.

## Tatsächlich getesteter Aufbau

Eine einzelne kleine Wasserquelle in einem ummauerten Fallschacht treibt ein kleines Wasserrad mit 8 RPM an. Die Achse verläuft von West nach Ost. Rad, Welle und Presse liegen auf derselben Höhe. Ein direkt angeschlossenes Wasserrad reicht für diese einzelne Presse ohne zusätzliche Verbraucher.

| Bauteil | Beispielposition | Ausrichtung / Umgebung |
| --- | --- | --- |
| Wasserrad | `(6, 82, 0)` | Achse Ost–West; Blockzustand `facing=east` |
| Verbindungswelle | `(7, 82, 0)` | Achse `x` |
| Mechanische Presse | `(8, 82, 0)` | Achse Ost–West; `facing=east` |
| Depot | `(8, 80, 0)` | `(8, 81, 0)` bleibt frei |
| Wasserquelle | `(6, 85, 1)` | Fließt bei `(6, 82, 1)` am Rad herunter |

Für diesen Test begrenzen Steinwände den Fallschacht bei `x=5`, `x=7`, `z=0` und `z=2`; die Öffnung bei `(6,82,0)` enthält das Rad. Der Boden liegt auf `y=78`. Die Koordinaten dienen als übertragbares Platzierungsbeispiel; der Test erzeugt diese Anlage nur in einer wegwerfbaren Testwelt. Er beweist keinen vollständigen Survival-Aufbau oder vollautomatischen Ein-/Ausgabekreis.

Wenn die Presse stillsteht, zuerst Radrotation, durchgängige Wellenachse, freie Arbeitshöhe und Stresslimit prüfen. Die Alpha-Rezepte funktionieren im Servertest bereits mit 8 RPM.

[Testergebnis](../tests/evidence/v0.1.0-alpha.2/press.json) · [Backup vor dem Update](backups.md)
