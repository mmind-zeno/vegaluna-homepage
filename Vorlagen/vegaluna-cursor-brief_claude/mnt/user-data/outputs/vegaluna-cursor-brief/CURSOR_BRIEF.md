# 🌿 vegaluna.li – Cursor.ai Master Brief
> Vollständige Baupläne für den Website-Rebuild. Lies alle Dateien in diesem Ordner bevor du beginnst.

---

## 🎯 Projekt-Übersicht

**Kunde:** vegAluna GmbH, Vaduz, Liechtenstein  
**Website:** vegaluna.li  
**Kernbotschaft:** „Zentrum für gesunde, pflanzliche Ernährung in der Region – happy food, happy life"  
**Sprache:** Deutsch  
**Zielgruppe:** Gesundheitsbewusste Personen in Liechtenstein/CH-Rheintal, 28–55 Jahre, Interesse an pflanzlicher Ernährung

### Services
1. Kochkurse & Workshops (Hauptangebot)
2. Ernährungsberatung & Coaching
3. Mittagsmenü TakeAway (Mo / Mi / Fr)
4. Event-Catering (plant-based, bis 100 Personen)
5. BioLaden / Reformhaus
6. Ernährungs-Guides (Content/Blog)

---

## 🛠 Tech Stack

```
Framework:     Next.js 14 (App Router, TypeScript)
Styling:       Tailwind CSS + CSS Variables (Design Tokens)
Animationen:   Framer Motion
Komponenten:   shadcn/ui als Basis (dann stark angepasst)
Icons:         Lucide React
Bilder:        next/image mit WebP-Optimierung
Forms:         React Hook Form + Zod
Email:         Resend (für Kontaktformular)
Deployment:    Vercel
```

### Ordnerstruktur
```
/app
  /layout.tsx          ← Root Layout mit Nav + Footer
  /page.tsx            ← Home
  /events/page.tsx
  /about/page.tsx
  /takeaway/page.tsx
  /catering/page.tsx
  /ernaehrung/page.tsx
  /impressum/page.tsx
/components
  /ui/                 ← shadcn Basiskomponenten
  /layout/             ← Navbar, Footer, MobileMenu
  /sections/           ← Hero, Services, Events, etc.
  /cards/              ← EventCard, ServiceCard, NutrientCard
/lib
  /utils.ts
  /constants.ts        ← Navigation, Öffnungszeiten, Kontakt
/styles
  /globals.css         ← Design Tokens, Basis-Stile
/public
  /images/             ← Alle vegaluna-Bilder hier ablegen
```

---

## 🎨 Design Direction

**Ästhetik:** `Organic Editorial` – wie ein hochklassiges Food-Magazin trifft auf einen warmen Wochenmarkt.

**Stimmung:** Warm, einladend, kompetent, lebendig. Nicht klinisch. Nicht hippie-ig. Professionell und herzlich gleichzeitig.

**One Unforgettable Thing:** Beim Scrollen fühlt sich die Website an wie das Durchblättern eines schönen Kochbuchs – mit großen, satten Bildern, eleganter Typografie und dem Gefühl von Wärme und Fülle.

### Farbpalette
Definiert als CSS Variables (siehe `design-system.md`):

| Name              | Hex        | Verwendung                          |
|-------------------|------------|-------------------------------------|
| `--vl-forest`     | `#1B3A2D`  | Primary, NavBar BG, Headings        |
| `--vl-sage`       | `#5A7A65`  | Secondary, Borders, Subtle elements |
| `--vl-cream`      | `#FAF6EE`  | Background (Hell-Modus)             |
| `--vl-warm-white` | `#FFFDF8`  | Card Backgrounds                    |
| `--vl-terracotta` | `#C4622D`  | Akzent, CTAs, Highlights            |
| `--vl-gold`       | `#C9973A`  | Sekundärer Akzent, Zitate           |
| `--vl-charcoal`   | `#2A2A2A`  | Body Text                           |
| `--vl-light-sage` | `#E8EFE8`  | Subtile Section-BGs                 |

### Typografie
```css
/* Display Font – groß, edel, editorial */
font-family: 'Cormorant Garamond', serif;
/* Gewichte: 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold) */

/* Body Font – klar, freundlich, modern */
font-family: 'DM Sans', sans-serif;
/* Gewichte: 300, 400, 500 */
```

Import via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

### Typografie-Skala
```
h1: Cormorant Garamond 700, 72–96px (Hero), 48–60px (Seiten-Hero)
h2: Cormorant Garamond 600, 40–52px
h3: Cormorant Garamond 600, 28–36px
h4: DM Sans 500, 18–20px, uppercase + letter-spacing
Body: DM Sans 400, 16–18px, line-height 1.7
Label: DM Sans 500, 12–13px, uppercase, letter-spacing 0.15em
Quote: Cormorant Garamond 300 Italic, 28–36px
```

### Spacing & Layout
- Max-Width Content: `1280px`
- Max-Width Text: `720px`
- Section Padding: `py-24 md:py-32`
- Gutter: `px-6 md:px-12 lg:px-16`
- Border Radius (Cards): `12px` oder `rounded-2xl`
- Border Radius (Buttons): `999px` (pill-shape)

---

## 🧭 Navigation

### Desktop Navbar
- Sticky, starts transparent über Hero → wird opaque (forest-green BG) beim Scrollen
- Logo links: `vegAluna` in Cormorant Garamond + kleines Blatt-Icon
- Navigation rechts: `Events | Über uns | TakeAway | Catering | Ernährung`
- CTA Button ganz rechts: `Jetzt anmelden` (terracotta)
- Smooth transition, backdrop-blur wenn scrolled

### Mobile Navbar
- Hamburger → Full-Screen Overlay Menu (forest green BG, Cormorant Garamond groß)
- Links mit kleinen Nummern/Indikatoren

---

## 🦶 Footer

```
[Logo + Tagline: "happy food – happy life"]

[Öffnungszeiten]              [Navigation]             [Kontakt]
⚠ Standort schliesst         Events                   Zollstrasse 27 (bis Ende Mai)
  Ende Mai 2026               Über uns                 9490 Vaduz
                              TakeAway*                +423 783 05 04
Mo: 8:30–13:30, 16–17:30      Catering                 hoi@vegaluna.li
Mi: 8:30–13:30, 16–17:30      Ernährung
Fr: 8:00–13:30

* TakeAway läuft bis Ende Mai 2026 aus.
  Kochkurse & Catering weiterhin auf Anfrage buchbar.

[Newsletter Signup – einfaches E-Mail Feld]

[Instagram Feed – 6 letzte Posts als Grid]

─────────────────────────────────────────
© 2025 vegAluna GmbH | Datenschutz | Impressum
```

Footer BG: `--vl-forest` (dunkelgrün), Text: Cream

> **Cursor-Hinweis:** Den Öffnungszeiten-Block nach Ende Mai 2026 durch 
> "Nur auf Anfrage: hoi@vegaluna.li" ersetzen. Als Feature-Flag oder 
> Umgebungsvariable `NEXT_PUBLIC_STANDORT_AKTIV=false` steuern.

---

## 📄 Seiten-Übersicht

Detaillierte Specs in `/page-specs/`:
1. `home.md`
2. `events.md`
3. `about.md`
4. `takeaway.md`
5. `catering.md`
6. `ernaehrung.md`
7. `impressum.md`

---

## ⚡ Animationen & Interaktionen

```javascript
// Globale Framer Motion Varianten
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

// Scroll-triggered: Alle Sections mit IntersectionObserver
// Bilder: leichter Parallax-Effekt (useScroll + useTransform)
// Cards: scale(1.02) + shadow-lift on hover
// Buttons: leichte scale + color shift
// Navbar: opacity + blur transition beim Scroll
```

---

## 🖼 Bilder-Hinweise

- Alle Bilder liegen in `/public/images/`
- Verwende `next/image` mit `sizes` prop und `priority` für Above-the-fold
- Hero: Full-bleed, min 1400px Breite, lazy-loaded nach dem ersten
- Cards: 800×600px (4:3 Ratio)
- Portraits: 600×700px (Hochformat)
- Verwende `object-fit: cover` überall

### Bild-Platzhalter (bis eigene Bilder eingesetzt werden)
Nutze: `https://images.unsplash.com/photo-[ID]?w=1400&q=80` mit passenden Veggie/Food-Motiven

---

## 📬 Kontakt & Formulare

Alle Anfragen (Events, Catering, Newsletter) gehen an: `hoi@vegaluna.li`

Formular-Felder Event-Anmeldung:
- Name (required)
- E-Mail (required)
- Telefon (optional)
- Workshop auswählen (dropdown)
- Nachricht (optional)
- Datenschutz-Checkbox (required)

---

## ✅ Wichtige Details

- **Sprache:** Deutsch, Du-Form durchgehend
- **Barrierefreiheit:** aria-labels, semantic HTML, Tastatur-navigierbar
- **Performance:** Core Web Vitals grün, Images optimiert, Code-splitting
- **SEO:** Meta-Tags, OG-Tags, JSON-LD für lokales Business
- **Responsive:** Mobile-first, Breakpoints: sm(640) / md(768) / lg(1024) / xl(1280)
- **Cookies:** Einfaches Cookie-Banner (kein Analytics vorerst)
