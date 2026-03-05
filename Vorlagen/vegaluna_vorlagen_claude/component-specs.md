# Komponenten-Bibliothek – vegAluna
Alle wiederverwendbaren Komponenten in `/components/`

---

## 🧭 LAYOUT

### Navbar (`/components/layout/Navbar.tsx`)
```tsx
// Verhalten:
// - Startet: transparent, weiße Texte (über Hero-Bild)
// - Ab 80px Scroll: forest-green BG (#1B3A2D), backdrop-blur
// - Transition: smooth 300ms

// Props:
// - keine (liest scroll position selbst via useScroll)

// Aufbau:
// [Logo] ──────────────── [Nav Links] [CTA Button]
// Logo: SVG Blatt + "vegAluna" in Cormorant Garamond
// Links: Events | Über uns | TakeAway | Catering | Ernährung
// CTA: "Jetzt anmelden" → /events

// Mobile (< 768px):
// [Logo] ──────────────── [Hamburger]
// → Hamburger öffnet Full-Screen Overlay (forest-green)
//   Große Links in Cormorant Garamond mit staggered animation
//   Links nummeriert: 01. Events / 02. Über uns / etc.

// Active Link Styling: 
// Desktop: kleiner goldener Unterstrich
// Mobile: terracotta Farbe

const navLinks = [
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'Über uns' },
  { href: '/takeaway', label: 'TakeAway' },
  { href: '/catering', label: 'Catering' },
  { href: '/ernaehrung', label: 'Ernährung' },
]
```

### Footer (`/components/layout/Footer.tsx`)
```tsx
// BG: --vl-forest
// Text: white/cream

// Sections (4 Spalten Desktop, 2x2 Tablet, 1 Mobile):
// 1. Logo + Tagline + Social Links (Instagram)
// 2. Öffnungszeiten
// 3. Navigation Links
// 4. Kontakt

// Kontakt Daten als Konstante:
const CONTACT = {
  address: 'Zollstrasse 27, 9490 Vaduz',
  phone: '+423 783 05 04',
  email: 'hoi@vegaluna.li',
}

const HOURS = [
  { day: 'Mo', times: '8:30–13:30 | 16:00–17:30' },
  { day: 'Mi', times: '8:30–13:30 | 16:00–17:30' },
  { day: 'Fr', times: '8:00–13:30' },
]

// Bottom Bar:
// © 2025 vegAluna GmbH | Datenschutz | Impressum
```

---

## 🃏 CARDS

### EventCard (`/components/cards/EventCard.tsx`)
```tsx
interface EventCardProps {
  image: string
  badge?: string        // "Bestseller" | "Outdoor" | "Advanced"
  badgeColor?: 'terra' | 'sage' | 'gold'
  title: string
  time?: string         // "16:00–21:30 Uhr"
  description: string
  features?: string[]   // ["Apéro inklusive", "Festliches Dinner"]
  href: string
}

// Styling:
// - Dunkle Variante (für Forest-BG Section): bg-forest-light
// - Helle Variante (normale Seite): bg-warm-white
// - Bild oben mit hover: scale(1.05) overflow hidden
// - Badge: absolute top-4 left-4
// - Arrow Icon: erscheint bei hover, translateX animation
```

### ServiceCard (`/components/cards/ServiceCard.tsx`)
```tsx
interface ServiceCardProps {
  image: string
  tag: string
  title: string
  description: string
  href: string
  featured?: boolean   // wenn true: leicht vertikal verschoben (translateY(-1rem))
}
```

### NutrientCard (`/components/cards/NutrientCard.tsx`)
```tsx
// Für die Übersichts-Tabelle auf /ernaehrung
interface NutrientCardProps {
  name: string           // "Vitamin B12"
  status: 'pflicht' | 'wichtig' | 'beachten'  // → Farb-Indikator
  source: string         // "Supplemente"
  action: string         // "Täglich supplementieren"
}
// Status-Farben: pflicht=red | wichtig=orange | beachten=yellow
```

---

## 🎯 SECTIONS

### HeroSection (`/components/sections/HeroSection.tsx`)
```tsx
interface HeroSectionProps {
  backgroundImage: string
  label?: string
  title: string         // Kann \n Zeilenumbrüche enthalten
  subtitle?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  height?: 'full' | 'compact'  // full=100vh, compact=65vh
  align?: 'left' | 'center'
}
```

### SplitSection (`/components/sections/SplitSection.tsx`)
```tsx
// Universelle 50/50 Section
interface SplitSectionProps {
  image: string
  imagePosition?: 'left' | 'right'   // default: right
  label?: string
  title: string
  text: string | React.ReactNode
  features?: { icon: string; text: string }[]
  cta?: { label: string; href: string }
  bg?: string           // CSS color value
}
```

### QuoteSection (`/components/sections/QuoteSection.tsx`)
```tsx
interface QuoteSectionProps {
  quote: string
  author: string
  backgroundImage?: string
  bg?: string   // Fallback wenn kein Bild
}
// Styling: Cormorant Garamond Italic, groß, zentriert
// Dekoratives " in gold davor
```

### NewsletterSection (`/components/sections/NewsletterSection.tsx`)
```tsx
// Email-Input + Submit
// Server Action für Form-Handling (Next.js 14)
// Validierung: Zod email schema
// Feedback: Success/Error State inline
```

---

## 🔧 UI UTILITIES

### ScrollIndicator (`/components/ui/ScrollIndicator.tsx`)
```tsx
// Pulsierender Pfeil nach unten für Hero Sections
// CSS keyframe animation: bounce
// Verschwindet wenn gescrollt
```

### SectionLabel (`/components/ui/SectionLabel.tsx`)
```tsx
// Kleine terracotta uppercase Labels über Headings
// Props: children: string
// Styling: .vl-label aus design-system.css
```

### ProgressBar (`/components/ui/ProgressBar.tsx`)
```tsx
// Für Nährstoff-Mengen auf /ernaehrung
interface ProgressBarProps {
  value: number    // 0-100
  max?: number     // default 100
  label: string
  unit?: string    // "mg"
  color?: string   // CSS color
}
```

### Divider (`/components/ui/Divider.tsx`)
```tsx
// Goldener Gradient-Strich (60px)
// Aus design-system.css: .vl-divider
```

---

## ⚙️ SHARED CONSTANTS (`/lib/constants.ts`)

```typescript
export const CONTACT = {
  address: 'Zollstrasse 27',
  city: '9490 Vaduz',
  country: 'Liechtenstein',
  phone: '+423 783 05 04',
  email: 'hoi@vegaluna.li',
  instagram: 'https://www.instagram.com/vegaluna.li',
  website: 'https://www.vegaluna.li',
}

// ⚠️ TRANSITION FLAG
// Auf true setzen sobald Standort geschlossen (Ende Mai 2026)
// Steuert: Footer-Anzeige, TakeAway-Banner, Öffnungszeiten-Block
export const STANDORT_AKTIV = true // → nach Ende Mai auf false setzen
export const STANDORT_SCHLIESSUNG = 'Ende Mai 2026'

export const OPENING_HOURS = [
  { day: 'Montag',    open: '8:30', close: '13:30', afternoon: '16:00–17:30' },
  { day: 'Mittwoch',  open: '8:30', close: '13:30', afternoon: '16:00–17:30' },
  { day: 'Freitag',   open: '8:00', close: '13:30' },
]

// Services nach Schliesssung des Standorts
export const SERVICES_NACH_SCHLIESSUNG = [
  { label: 'Kochkurse & Workshops', aktiv: true,  hinweis: 'auf Anfrage buchbar' },
  { label: 'Event-Catering',        aktiv: true,  hinweis: 'auf Anfrage buchbar' },
  { label: 'Ernährungsberatung',    aktiv: true,  hinweis: 'auf Anfrage buchbar' },
  { label: 'TakeAway Mittagsmenü',  aktiv: false, hinweis: 'endet Ende Mai 2026' },
  { label: 'Laden / Reformhaus',    aktiv: false, hinweis: 'schliesst Ende Mai 2026' },
]

export const NAV_LINKS = [
  { href: '/',            label: 'Home' },
  { href: '/events',      label: 'Events' },
  { href: '/about',       label: 'Über uns' },
  { href: '/takeaway',    label: 'TakeAway' },
  { href: '/catering',    label: 'Catering' },
  { href: '/ernaehrung',  label: 'Ernährung' },
]

export const WORKSHOPS = [
  {
    id: 'einfuehrung',
    title: 'Einführung in die plant-based Küche',
    badge: 'Bestseller',
    time: '16:00–21:30 Uhr',
    features: ['Apéro mit Häppchen', '3–4h Kochkurs', 'Festliches Dinner', 'Ernährungs-Theorie'],
  },
  {
    id: 'open-fire',
    title: 'Open Fire Cooking',
    badge: 'Outdoor',
    time: 'Auf Anfrage',
    features: ['Kochen in freier Natur', 'Offenes Feuer', 'Naturerlebnis'],
  },
  {
    id: 'gesundheit',
    title: 'Vegane Küche & Gesundheit',
    badge: 'Advanced',
    time: 'Auf Anfrage',
    features: ['Für Erfahrene', 'Tiefes Nährstoff-Wissen', 'Praktische Umsetzung'],
  },
]
```
  { href: '/',            label: 'Home' },
  { href: '/events',      label: 'Events' },
  { href: '/about',       label: 'Über uns' },
  { href: '/takeaway',    label: 'TakeAway' },
  { href: '/catering',    label: 'Catering' },
  { href: '/ernaehrung',  label: 'Ernährung' },
]

export const WORKSHOPS = [
  {
    id: 'einfuehrung',
    title: 'Einführung in die plant-based Küche',
    badge: 'Bestseller',
    time: '16:00–21:30 Uhr',
    features: ['Apéro mit Häppchen', '3–4h Kochkurs', 'Festliches Dinner', 'Ernährungs-Theorie'],
  },
  {
    id: 'open-fire',
    title: 'Open Fire Cooking',
    badge: 'Outdoor',
    time: 'Auf Anfrage',
    features: ['Kochen in freier Natur', 'Offenes Feuer', 'Naturerlebnis'],
  },
  {
    id: 'gesundheit',
    title: 'Vegane Küche & Gesundheit',
    badge: 'Advanced',
    time: 'Auf Anfrage',
    features: ['Für Erfahrene', 'Tiefes Nährstoff-Wissen', 'Praktische Umsetzung'],
  },
]
```

---

## 📐 FRAMER MOTION PRESET (`/lib/animations.ts`)

```typescript
import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } 
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

// Usage: Jede Section wrapped in:
// <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
```
