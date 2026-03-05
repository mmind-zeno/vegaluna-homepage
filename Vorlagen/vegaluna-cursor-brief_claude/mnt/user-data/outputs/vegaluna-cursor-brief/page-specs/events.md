# Events / Workshops Page Spec
**Datei:** `/app/events/page.tsx`

---

## Page Hero
```
Layout:    Kompakter Hero (60vh), Split: Links Bild, rechts Hero-Text
BG Bild:   Kochkurs-Atmosphäre, lachende Menschen
Overlay:   Kein Overlay, Bild rechts als "floating" Element

Links:
  Label:   "Workshops & Kurse"
  H1:      "Lernen, kochen,
             genießen."
  Text:    "Unsere Workshops finden in kleinen Gruppen statt – 
             für echte Atmosphäre und persönliche Betreuung."
  Badge:   🌱 Kleine Gruppen   🍽 Dinner inklusive   📚 Theorie & Praxis
```

---

## Events Grid

### Allgemeiner Hinweis-Banner
```
BG: --vl-light-sage, abgerundet
Text: "Alle Kurse sind auf Anfrage buchbar. Schreib uns einfach: hoi@vegaluna.li"
CTA: [Jetzt anfragen]
```

### Event Cards (1 pro Zeile auf Mobile, 2–3 auf Desktop)

---

#### Card 1: Einführung plant-based Küche ⭐ FEATURED
```
Badge:    "Bestseller" (terracotta)
Bild:     Gruppen-Kochkurs Foto
H3:       "Einführung in die plant-based Küche"
Time:     🕓 16:00 bis ca. 21:30 Uhr
Preis:    [Auf Anfrage]

Was erwartet dich:
  🥂 Apéro mit feinen veganen Häppchen
  👨‍🍳 3–4 Stunden aktiver Kochkurs
  🍽 Festliches gemeinsames Dinner
  📖 Theorie zu Ernährungslehre & kritischen Nährstoffen
  
Text: "Der Kurs beinhaltet Theorie und Kochpraxis rund um die vegane Ernährung. 
       Die köstlich zubereiteten Leckereien geniessen wir zusammen in einer 
       gemütlichen Runde."
       
CTA:  [Anmelden / Anfragen →]
```

#### Card 2: Open Fire Cooking
```
Badge:    "Outdoor" (sage-grün)
Bild:     Feuer / Natur-Kochen
H3:       "Open Fire Cooking"
Subtitle: "Kochen auf offenem Feuer in freier Natur"

Text:     Kurze Beschreibung + Stimmungsbild aus der Natur

CTA:  [Mehr erfahren / Anmelden →]
```

#### Card 3: Vegane Küche & Gesundheit
```
Badge:    "Fortgeschrittene" (gold)
Bild:     Zutaten / Detailaufnahme Gemüse
H3:       "Vegane Küche & Gesundheit"
Text:     "Richtet sich an Personen, welche sich bereits vegan ernähren 
           und noch einen tieferen Einblick bekommen möchten."
           
CTA:  [Anmelden / Anfragen →]
```

---

## Anmelde-Formular Section

```
Layout:   Zweispaltig: Links Infos, Rechts Formular-Card

Links:
  H3:    "Meld dich an"
  Text:  "Schreib uns oder ruf uns an – wir freuen uns auf dich."
  Info:  📍 Zollstrasse 27, 9490 Vaduz
         📞 +423 783 05 04
         ✉  hoi@vegaluna.li

Rechts (Formular):
  - Name* 
  - E-Mail*
  - Telefon
  - Workshop (Dropdown: Einführung | Open Fire | Gesundheit | Sonstiges)
  - Nachricht
  - [x] Ich akzeptiere die Datenschutzbestimmungen
  - [Anfrage senden →]
```

---

## SEO Meta
```typescript
export const metadata = {
  title: 'Vegane Kochkurse & Workshops – vegAluna Vaduz',
  description: 'Vegane Kochkurse, Open Fire Cooking und Ernährungs-Workshops 
                 in Vaduz, Liechtenstein. Kleine Gruppen, festliches Dinner inklusive.',
}
```
