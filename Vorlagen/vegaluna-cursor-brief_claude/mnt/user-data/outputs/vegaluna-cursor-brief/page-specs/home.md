# Home Page Spec – vegaluna.li
**Datei:** `/app/page.tsx`

---

## ⚠️ WICHTIGE BUSINESS-INFORMATION (Stand März 2026)

vegAluna gibt den physischen Standort an der Zollstrasse 27 in Vaduz **per Ende Mai 2026** auf.
Danach nimmt vegAluna bis auf weiteres **nur noch spezifische Aufträge** entgegen (z.B. gebuchte Kochkurse, bestätigte Catering-Aufträge), da die nötige Infrastruktur fehlt.

**Auswirkungen auf die Website:**
- TakeAway-Mittagsmenü: **läuft Ende Mai 2026 aus** – Seite entsprechend kennzeichnen
- Laden / Reformhaus: **schliesst Ende Mai 2026**
- Kochkurse & Catering: **weiterhin buchbar** (auf Anfrage, mobil/extern)
- Öffnungszeiten: **entfallen nach Ende Mai** – nur noch per Kontakt/Anfrage

**Banner & Hinweise müssen erscheinen auf:** Home, TakeAway, About, Footer
**Nicht gezeigt auf:** Catering, Events (diese Services laufen weiter)

---

## Sections (in Reihenfolge)

### 0. TRANSITION-BANNER (oberhalb Navbar, sticky)
```
Layout:    Schmale Bar ganz oben, volle Breite, BG --vl-gold
Text:      "📍 Wichtige Mitteilung: Unser Standort an der Zollstrasse schliesst per Ende Mai 2026."
           [Mehr erfahren →]  (Link zu Abschnitt #transition oder /about)
Style:     DM Sans 500, klein, zentriert, gold BG, charcoal Text
           Schliessbar (X-Button rechts) mit localStorage
```

### 1. HERO – Full-Screen
```
Layout:    Full-viewport-height, Bild als BG mit dunklem Overlay (gradient von unten)
Bild:      /public/images/hero-main.jpg (Tisch mit buntem Gemüse, Kochkurs-Atmosphäre)
Overlay:   linear-gradient(to top, rgba(27,58,45,0.85) 0%, transparent 60%)

Inhalt (vertikal zentriert, leicht links):
  LABEL:   "Vaduz, Liechtenstein"
  H1:      "Zentrum für gesunde
             pflanzliche Ernährung."
  SUBTEXT: "Kochkurse · Catering · Ernährungsberatung · TakeAway"
  BUTTONS: [Kochkurse entdecken →]  [Mehr erfahren]

Animation: H1 und Subtext fade-in-up mit stagger (0.2s delay)
```

**Cursor-Prompt für diesen Block:**
```
Erstelle eine Full-Screen Hero Section in Next.js/React mit Tailwind CSS.
Hintergrund: next/image mit object-fit cover, darüber ein Gradient-Overlay 
(from transparent to rgba(27,58,45,0.85) from top to bottom).
Inhalt linksbündig, vertikal zentriert. Kleine Eyebrow-Label in DM Sans 
uppercase terracotta Farbe (#C4622D). H1 in Cormorant Garamond 700, 
weiß, 72px+ (responsive mit clamp). Darunter ein Subtext mit Bullet-Trennern.
Zwei Buttons: Primary (terracotta, pill-shape) und Outline (weiß, pill-shape).
Framer Motion: staggered fade-in-up für alle Elemente.
Unten: scroll-indicator Arrow (animiert, bounce).
```

---

### 2. MISSION STATEMENT – Zitat-Section
```
Layout:    Zentriert, max-width 800px, viel Whitespace
BG:        --vl-cream

Inhalt:
  Dekoratives Zitat-Symbol (groß, in --vl-gold, Cormorant Garamond)
  Haupttext: "vegAluna soll in der Region das Zentrum sein für nachhaltige, 
               gesunde und pflanzliche Ernährung..."
  Unterschrift: "— Fränzi & Zeno, Gründer vegAluna"
  
  Darunter: 4 Keyword-Chips nebeneinander
  [🌱 Kochkurse] [🌍 Catering] [🥗 TakeAway] [📚 Ernährung]
```

---

### 3. SERVICES GRID – 3 Karten
```
Layout:    3-spaltig (desktop), 1-spaltig (mobile), 
           Karte mittig hat leichten upward-offset für Dynamik

Karte 1 – Kochkurse & Workshops
  Bild:    Hände beim Kochen / Kurs-Atmosphäre  
  Tag:     "Erlebnisse"
  Title:   "Kochkurse & Workshops"
  Text:    "Mehr als nur ein Kurs – verbindet Wissen, Praxis und viel Genuss..."
  Link:    → Zu den Events

Karte 2 – Mittagsmenü TakeAway (FEATURED – etwas größer)
  Bild:    Schöne Bowl / Lunchboxen
  Tag:     "Mo · Mi · Fr"
  Title:   "Mittagsmenü TakeAway"
  Text:    "Frisches, pflanzliches Mittagessen. 11:30–13:00 Uhr."
  Link:    → Mehr erfahren

Karte 3 – Event Catering
  Bild:    Catering-Aufbau / Buffet
  Tag:     "Bis 100 Personen"
  Title:   "Event Catering"
  Text:    "Alles aus einer Hand – plant-based, bio, nachhaltig."
  Link:    → Catering anfragen
```

---

### 4. ÜBER UNS – Split-Layout
```
Layout:    50/50 Split (Bild links, Text rechts) – auf Mobile: Text oben, Bild unten
BG:        --vl-light-sage (sehr sanftes Grün)

Links:  Grosses Bild von Fränzi & Zeno (Portrait, warme Atmosphäre)
        Optional: kleines zweites Bild überlappend (CSS position absolute)

Rechts:
  Label:  "Über uns"
  H2:     "Wir kochen mit Freude und Leidenschaft."
  Text:   "Magst du dich noch an die besonderen Tage in deiner Kindheit erinnern...
           Genau das steckt hinter VEGALUNA."
  Bullet-List (mit Leaf-Icons):
    ✓ Pflanzlich & biologisch
    ✓ Regional & nachhaltig  
    ✓ Mit Herz & Know-how
  CTA:    [Unsere Geschichte →]
```

---

### 5. EVENTS PREVIEW – Horizontaler Scroll (mobile) / Grid (desktop)
```
Layout:    BG --vl-forest (dunkelgrün), helle Texte
           Section Header: Label + H2 + "Alle Events →" Link rechts

Event-Cards (3 Stück):
  Stil:    Dunkle Karten mit Bild-Hover-Effekt
  
  Card 1: "Einführung plant-based Küche"
    Details: 16:00–21:30 Uhr · Apéro + Kurs + Dinner
    Badge: "Bestseller"
  
  Card 2: "Open Fire Cooking"
    Details: Kochen auf offenem Feuer in der Natur
    Badge: "Outdoor"
  
  Card 3: "Vegane Küche & Gesundheit"
    Details: Für Fortgeschrittene
    Badge: "Advanced"

  Jede Card: Bild oben, Tag, Titel, Kurz-Info, "Anmelden →" Button
```

---

### 6. ZITAT-BANNER – Volle Breite
```
BG:        Bild mit starkem Forest-Green Overlay (oder solid --vl-terracotta)
Layout:    Zentriert, großes Zitat

"Der Weg zur Gesundheit führt durch die Küche, nicht durch die Apotheke."
– Sebastian Kneipp

Zweites Zitat darunter (kleiner):
"Die Größe einer Nation... kann daran gemessen werden, wie ihre Tiere behandelt werden."
– Gandhi
```

---

### 7. PARTNER LOGOS – Stripe
```
Layout:    Horizontale Reihe, zentriert, grau-skaliert mit hover (Farbe)
BG:        --vl-warm-white
Label:     "Unsere Partner & Kunden"

Logos: (als grayscale img → color on hover)
Formatio | Gemeinde Vaduz | Universität | SDG Allianz Liechtenstein
reCIRCLE | (weitere aus /images/partner-logos/)

Hinweis an Cursor: "Falls Logos als SVG/PNG in /public/images/logos/ – 
einfach importieren. Sonst Platzhalter-Boxen mit Firmenname als Text."
```

---

### 8. TRANSITION / VERABSCHIEDUNG SECTION
```
ID/Anchor:  #transition
BG:         --vl-forest (dunkelgrün)
Layout:     Zweispaltig: Links emotionaler Text, Rechts Was-bleibt-Liste

Links:
  Label:    "Eine neue Etappe"
  H2:       "Wir sagen Auf Wiedersehen
              an der Zollstrasse."
  Text:     "Per Ende Mai 2026 geben wir unseren physischen Standort in Vaduz auf.
             Es war eine wunderbare Zeit mit unzähligen Kochkursen, Mittagsmenüs 
             und unvergesslichen Begegnungen. Danke euch allen von Herzen! ❤

             Bis auf weiteres nehmen wir nur noch spezifische Aufträge entgegen –
             Kochkurse, Catering und Beratung sind weiterhin buchbar."

Rechts: "Was bleibt" – Liste mit Icons (alle in warm/cream Tönen)
  ✓ Kochkurse & Workshops  → weiterhin auf Anfrage
  ✓ Event-Catering         → weiterhin auf Anfrage  
  ✓ Ernährungsberatung     → weiterhin auf Anfrage
  ✗ TakeAway Mittagsmenü   → endet Ende Mai 2026
  ✗ Laden / Reformhaus     → schliesst Ende Mai 2026

CTA: [Anfrage stellen →]  (terracotta Button)
     "Für Kochkurse und Catering einfach melden: hoi@vegaluna.li"
```

---

### 9. NEWSLETTER / CTA SECTION
```
Layout:    Zentriert, BG --vl-light-sage, abgerundete Karte (max-w-xl)

Inhalt:
  Icon:   ✉ (gross, in --vl-gold)
  H3:     "Bleib inspiriert."
  Text:   "Neue Rezepte, Tipps zu Supplements und exklusive Event-News."
  Form:   [E-Mail eingeben        ] [Anmelden →]
  Micro:  "Kein Spam. Jederzeit abmeldbar."
```

---

## SEO Meta (für `/app/page.tsx`)
```typescript
export const metadata = {
  title: 'vegAluna – Kochkurse, Catering & Ernährungsberatung | Liechtenstein',
  description: 'Vegane Kochkurse, Event-Catering und Ernährungsberatung – 
                 auf Anfrage buchbar in Liechtenstein und der Region.',
  openGraph: {
    title: 'vegAluna – happy food, happy life',
    description: '...',
    images: ['/images/og-home.jpg'],
    locale: 'de_LI',
  },
}
```
