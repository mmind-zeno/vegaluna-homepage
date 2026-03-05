# Ernährungs-Guide Page Spec
**Datei:** `/app/ernaehrung/page.tsx`
**Hinweis:** Das ist die inhaltsreichste Seite – sie soll wie ein interaktiver Mini-Guide wirken.

---

## Hero
```
Bild:   Buntes Gemüse, Nüsse, Samen von oben (Flatlay)
H1:     "Der Vegaluna Nährstoff-Guide"
Sub:    "Pflanzlich leben – ohne Kompromisse bei der Gesundheit."
Badges: ✓ Wissenschaftlich geprüft   ✓ 100% Vegan   ✓ Komplett-Guide
```

---

## Intro / Überblick
```
Layout:   Breiter Textblock, max-width 800px, zentriert
BG:       --vl-cream

Text:     Intro-Paragraph (aus ernaehrung.md: "Bevor wir tief in die Biochemie...")

3-Spalten Kategorien:
  🔴 Die Pflicht           🟡 Die Achtsamkeit      🟢 Die Basis
  Vitamin B12 & D          Jod, Eisen, Zink,       Protein, Magnesium,
  Supplementieren!         Calcium. Wissen nötig.  Meist kein Problem.
```

---

## Sticky Side-Navigation (Desktop)
```
Position: sticky links, scrollt mit
Links zu Ankern: B12 | Eisen | Calcium | Vitamin D | Omega-3 | Zink | Protein | FAQ

Auf Mobile: Horizontal scrollende Tab-Bar oben
```

---

## Nährstoff-Sections (eine pro Nährstoff)

### Template pro Section:
```
ID/Anchor:    #b12 (etc.)
Layout:       Abwechselnd Links/Rechts für Bild (für Lebendigkeit)

Header-Row:
  H2:         "Vitamin B12 (Cobalamin)"
  Status-Badge: "SUPPLEMENTIERUNG ERFORDERLICH" (in rot/terracotta)
  Tagline:    "Lebensnotwendig für Nerven & Blut"

Inhalt-Grid (2 Spalten Desktop, 1 Mobile):
  Links: Erklärungs-Text
  Rechts: Fact-Box / Tabelle / Tipp-Card

Jede Section endet mit: "Zurück nach oben ↑" Link
```

### B12 Section
```
Mythos-Box (BG: terracotta/10%, border-left terracotta):
  🚫 "Mythos: Mein Körper produziert B12 selbst."
     Erklärung...

Dosierungs-Cards (2 nebeneinander):
  Täglich: 50–100 µg    |    Wöchentlich: 2000–2500 µg
  
Tipp-Box (BG: gold/10%, border-left gold):
  💡 "Cyanocobalamin ist die stabilste Form..."
```

### Eisen Section
```
Visueller Vergleich: Häm-Eisen vs. Nicht-Häm-Eisen (einfaches Balken-Diagramm)
  Tierisch (Häm):     ████████████ 20–30% Aufnahme
  Pflanzlich (Nicht-Häm): ████ 1–10% Aufnahme
  + Vitamin C:        ██████████████ bis 30% (highlight!)

Top-Quellen Liste (mit Balken-Indikator):
  Kürbiskerne   12.5mg ████████████████
  Sesam         10mg   █████████████
  Hanfsamen     8mg    ██████████
  Linsen        8mg    ██████████
  Haferflocken  4.5mg  ██████

Eisen-Räuber Warning-Box:
  ⚠️ Kaffee, Schwarztee, Grüntee direkt zum Essen → Aufnahme blockiert!
  ✓ Strategie: 30–60 Min Abstand halten
```

### Calcium Section
```
Baukasten-Prinzip (3 Cards):
  💧 Mineralwasser: >400mg/L → 1,5L = 60% gedeckt
  🥦 Grünes Gemüse: Brokkoli, Kale, Rucola (besser als Milch!)
  🥛 Angereicherte Pflanzenmilch: Soja-, Hafer-, Erbse

Info-Box Tofu:
  "Tofu mit Calciumsulfat: 200g = bis 700mg Calcium!"
```

### Vitamin D Section
```
Saisonaler Kalender (visuell):
  Jan Feb Mär Apr Mai Jun Jul Aug Sep Okt Nov Dez
   ❌  ❌  ❌  ✓  ✓  ✓  ✓  ✓  ✓   ❌  ❌  ❌
  [─── Supplement ───]  [─── Sonne reicht ───]  [── Supplement ──]

Empfehlung-Box:
  ☀ Sommer: 15–20 Min täglich, Gesicht+Arme+Beine
  🌙 Winter: 20µg (800 IE) täglich, veganes D3 aus Flechten
```

### Omega-3 Section
```
Infografik: ALA → EPA/DHA Umwandlung (<5%)
Box: "Direkt Algenöl nehmen – ohne den Umweg über Fisch"

Ölwechsel-Tabelle:
  VERBANNE:  Sonnenblumenöl ❌ | Distelöl ❌ | Maiskeimöl ❌
  NUTZE:     Rapsöl (Braten) ✓ | Leinöl (Salat) ✓ | Olivenöl ✓
```

### Zink / Jod / Selen Section
```
3 Karten nebeneinander (kompakter)
  Zink | Jod | Selen
  Je mit: Status, Quellen, Tipp
```

### Protein Section
```
Tabelle (styled):
  Lebensmittel | Protein/100g | Besonderheit
  (Daten aus ernaehrung.md)

Info-Box:
  "Aminosäuren müssen nicht in einer Mahlzeit kombiniert werden. 
   Dein Körper hat einen Aminosäure-Pool!"
```

---

## Tages-Checkliste Section
```
BG:       --vl-forest (dunkelgrün)
Layout:   2 Spalten: Morgens | Mittags/Abends

Morgens ☀:
  ☑ B12-Tropfen nehmen
  ☑ Müsli mit Leinsamen
  ☑ Haferflocken mit Obst
  ☑ Calciumreiches Mineralwasser

Mittags/Abends 🌙:
  ☑ Hülsenfrüchte oder Tofu
  ☑ Grünes Gemüse
  ☑ Jodsalz zum Würzen
  ☑ 1–2 Paranüsse (Selen)
  ☑ Vitamin D / Algenöl

CTA: [Persönlichen Plan erstellen →] (öffnet Kontaktformular)
Disclaimer: Klein, in sage: "Diese Informationen ersetzen keine ärztliche Beratung."
```

---

## FAQ Section (Accordion)
```
Frage 1: "Muss ich wirklich Supplements nehmen?"
Frage 2: "Welche Blutwerte sollte ich checken lassen?"
Frage 3: "Kann ich B12-Bedarf über angereicherte Milch decken?"
Frage 4: "Was ist mit Kindern und Schwangerschaft?"

Implementierung: shadcn/ui Accordion Komponente
```

---

## Implementierungs-Hinweise für Cursor
```
- Sticky Navigation mit IntersectionObserver für aktiven Zustand
- Balken-Diagramme: einfaches CSS (kein Chart.js nötig)
- Kalender-Visual: CSS Grid, 12 Spalten
- Tabellen: responsive mit horizontal scroll auf Mobile
- FAQ: shadcn/ui Accordion
- Alle Sections: scroll-triggered fade-in via Framer Motion
- "Zurück nach oben" Button: smooth scroll
```

---

## SEO Meta
```typescript
export const metadata = {
  title: 'Pflanzliche Ernährung – Nährstoff-Guide | vegAluna',
  description: 'Umfassender Guide zu B12, Eisen, Calcium, Vitamin D, Omega-3 
                 und mehr bei veganer Ernährung. Wissenschaftlich fundiert, 
                 praktisch erklärt von vegAluna Vaduz.',
}
```
