export const CONTACT = {
  address: 'Zollstrasse 27',
  city: '9490 Vaduz',
  country: 'Liechtenstein',
  phone: '+423 783 05 04',
  email: 'hoi@vegaluna.li',
  instagram: 'https://www.instagram.com/vegaluna.li',
  website: 'https://www.vegaluna.li',
}

export const STANDORT_AKTIV = true
export const STANDORT_SCHLIESSUNG = 'Ende Mai 2026'
export const TAKEAWAY_ENDE = 'Ende März 2026'

export const OPENING_HOURS = [
  { day: 'Mo', times: '8:30–13:30 | 16:00–17:30' },
  { day: 'Mi', times: '8:30–13:30 | 16:00–17:30' },
  { day: 'Fr', times: '8:00–13:30' },
]

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#events', label: 'Kochkurse' },
  { href: '/#catering', label: 'Catering' },
  { href: '/#ernaehrung', label: 'Ernährung' },
  { href: '/about', label: 'Über uns' },
  { href: '/#partner', label: 'Partner' },
]

export const DANKSAGUNG = {
  headline: 'Vielen Dank für vier wunderbare Jahre.',
  subline: 'Es war eine unglaublich schöne Zeit mit euch.',
  text: 'Unzählige Kochkurse, gemeinsame Dinner, inspirierende Begegnungen und Momente voller Genuss – dafür danken wir euch von Herzen. Diese vier Jahre haben uns bereichert und gezeigt, wie viel Kraft in pflanzlicher Ernährung und einer lebendigen Community steckt.',
}

export const REORIENTIERUNG = 'vegAluna wird sich im nächsten halben Jahr neu orientieren. Kochkurse, Catering und Ernährungsberatung bleiben auf Anfrage buchbar.'

export const STATS = [
  { value: 4, suffix: '+', label: 'Jahre vegAluna' },
  { value: 100, suffix: '+', label: 'Events & Caterings' },
  { value: 50, suffix: '+', label: 'Kochkurse' },
  { value: 1000, suffix: '+', label: 'Gäste & Teilnehmer' },
]

export const TESTIMONIALS = [
  {
    quote: 'Wir haben zum ersten Mal verstanden, wie gut pflanzliches Essen sein kann.',
    name: 'Kochkurs-Gruppe',
    context: 'Einführungskurs 2024',
  },
  {
    quote: 'Das Catering war der Höhepunkt unserer Firmenfeier – alle waren begeistert.',
    name: 'Unternehmerin aus Vaduz',
    context: 'Event-Catering 2023',
  },
  {
    quote: 'Nach der Ernährungsberatung hatte ich endlich Klarheit über B12 und Eisen.',
    name: 'Beratungs-Klientin',
    context: 'Ernährungsberatung 2025',
  },
]

export const SERVICES_CARDS = [
  {
    id: 'kochkurse',
    title: 'Kochkurse & Workshops',
    badge: 'Auf Anfrage buchbar',
    description: 'Hands-on Kurse, Open Fire Cooking und festliche Dinner – von der Einführung bis zu Vertiefungsthemen.',
    image: '/images/kochkurs-workshop-handson.jpg',
    href: '/#events',
    cta: 'Kurs anfragen',
  },
  {
    id: 'catering',
    title: 'Event-Catering',
    badge: 'Auf Anfrage buchbar',
    description: 'Buffets, Fingerfood und Konferenzen – 100% pflanzlich, mit Equipment und Dekoration.',
    image: '/images/catering-event-buffet-konferenz.jpg',
    href: '/#catering',
    cta: 'Catering anfragen',
  },
  {
    id: 'ernaehrung',
    title: 'Ernährungsberatung',
    badge: 'Unser Fokus heute',
    description: 'Individuelle 1:1-Beratung, Nährstoff-Deep-Dive und Begleitung auf dem Weg zur pflanzlichen Ernährung.',
    image: '/images/vegaluna-outdoor-garden-event.jpg',
    href: '/#ernaehrung',
    cta: 'Beratung anfragen',
  },
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
