# About Page Spec
**Datei:** `/app/about/page.tsx`

---

## Hero
```
Layout:   Full-width Bild (Fränzi & Zeno in der Küche), 70vh
Overlay:  Gradient from bottom
Text:     Unten links positioniert (wie Magazin-Cover)
  Label:  "Über uns"
  H1:     "Wir möchten dich beglücken."
```

## Story Section – Asymmetrisch
```
Layout:    Grid: 60% Text, 40% Bild (auf Mobile gestapelt)
BG:        --vl-cream

H2:   "Magst du dich noch erinnern...?"
Text: Vollständiger About-Text (aus about.md):
      "Magst du dich noch an die besonderen Tage in deiner Kindheit erinnern...
       ...In diesem Sinn verbreitet sich das Glück nicht nur unter den Menschen, 
       sondern alle Lebewesen können an unserem Glück teilhaben."

Bild: Stimmungsbild Küche / Essen

Darunter: 3 Werte-Kacheln in --vl-light-sage
  🌱 "Pflanzlich inspirieren"
     "Wir zeigen, wie lecker tierfreie Küche sein kann."
  🤝 "Wissen teilen"  
     "Erfahrung und Know-how aus jahrelanger Praxis."
  🌍 "Gemeinsam wachsen"
     "VEGALUNA als Treffpunkt zum Austausch."
```

## Newsletter Section
```
BG:     --vl-forest (dunkelgrün)
Weiße Texte

Titel:  "Bleib in der vegAluna-Familie"
Text:   "Newsletter · Rezepte · Tipps & Tricks · Gutscheine · Gewinnspiele"

4 Feature-Punkte horizontal:
  📬 Neue Rezepte     💊 Supplement-Tipps     🎟 Gutscheine     🎉 Gewinnspiele

Form:   [E-Mail] [Anmelden]
```

## Transition Section
```
BG:     --vl-cream, border-top 2px solid --vl-gold
Layout: Zentriert, max-width 700px, viel Whitespace

Label:  "Eine neue Etappe"
H3:     "Was kommt nach Ende Mai?"
Text:   "Per Ende Mai 2026 schliessen wir unser Lädeli an der Zollstrasse.
         Das war keine leichte Entscheidung – dieser Ort bedeutet uns sehr viel.

         Aber vegAluna lebt weiter! Fränzi & Zeno sind weiterhin buchbar für:
         Kochkurse, Event-Catering und Ernährungsberatung.
         
         Auf Anfrage kommen wir zu euch – ob privat, im Betrieb oder am Event."

What-Stays Grid (2×2, mit Icons):
  🍳 Kochkurse & Workshops     → auf Anfrage buchbar
  🎪 Event-Catering            → auf Anfrage buchbar
  📚 Ernährungsberatung        → auf Anfrage buchbar
  💌 Newsletter & Community    → bleibt bestehen

CTA:  [Anfrage stellen: hoi@vegaluna.li]
```

---

# TakeAway Page Spec
**Datei:** `/app/takeaway/page.tsx`

> ⚠️ **ACHTUNG:** Das Mittagsmenü läuft **per Ende Mai 2026** aus. 
> Die Seite soll klar darauf hinweisen, aber den Service bis dahin noch vollständig zeigen.

---

## Closing-Banner (ganz oben, unter Navbar)
```
BG:    --vl-gold (amber/gold)
Text:  "⏳ Das TakeAway-Mittagsmenü läuft noch bis Ende Mai 2026.
        Danach können wir diesen Service leider nicht mehr anbieten."
Style: Zentriert, DM Sans, leicht transparent, nicht schliessbar
```

---

## Hero
```
Bild:   Schöne Bowl / Mittagsmenü-Foto
H1:     "Frisch. Pflanzlich. Lecker."
Sub:    "Mittagsmenü jeden Montag, Mittwoch & Freitag"
```

## Info-Section – Cards
```
Drei Info-Karten nebeneinander:

⏰ Öffnungszeiten
   Mo · Mi · Fr
   11:30 – 13:00 Uhr

🍽 Was gibt's?
   Currys · OnePots · Happy Bowls
   Polenta · Lasagne & mehr

📋 Anmeldung
   Vortags anmelden: garantiert!
   Spontan: wenige Extraportionen
   +423 783 05 04
```

## Menü Highlights
```
Layout:   Großes Bild links, Text rechts
Text:     Gesamter TakeAway-Text inkl. Spontan-Infos

Highlight-Box (terracotta Rand):
  "Tipp: Melde dich am Vortag an und dein Essen ist garantiert."
```

## reCIRCLE Section
```
BG:     --vl-light-sage
Icon:   Recycling-Kreis (SVG)
H3:     "Nachhaltig bis zum letzten Bissen"
Text:   "Im Sinne der Nachhaltigkeit verwenden wir reCIRCLE-Geschirr. 
         CHF 10.- Depot, retournierbar bei uns und in der ganzen Schweiz."
Logo:   reCIRCLE Logo (falls vorhanden)
Link:   [→ reCIRCLE.ch]
```

---

# Catering Page Spec
**Datei:** `/app/catering/page.tsx`

---

## Hero
```
Bild:   Festlich gedeckter Tisch / Buffet-Aufbau
H1:     "Catering.
         Alles aus einer Hand."
Tag:    "gesund · nachhaltig · plant-based · bio"
```

## USP Section – 4 Spalten
```
Layout:   4er Grid (2x2 auf Mobile)
BG:       --vl-forest, weiße Texte + gold Icons

🍽 Alles selbst gekocht
   "Wir kochen alles frisch und achten auf schonende Zubereitung."

🌿 100% Plant-Based
   "Gesunde, nachhaltige und biologische Produkte."

👥 Bis 100 Personen
   "Equipment vorhanden. Größere Events ebenfalls möglich."

🎶 Mehr als nur Essen
   "Marketing, Tontechnik und weitere Aspekte auf Wunsch."
```

## Beschreibungs-Section
```
Layout:   Text links, Bild rechts
H2:       "Wir verwandeln jeden Raum in eine festliche Oase."
Text:     Vollständiger Catering-Text aus catering.md
```

## Anfrage CTA
```
BG:       --vl-terracotta
H3:       "Bereit für dein Event?"
Text:     "Erzähl uns von deiner Veranstaltung – wir erstellen dir gerne ein Angebot."
CTA:      [Unverbindlich anfragen →]  (weißer Button)

Formular: Name | E-Mail | Datum der Veranstaltung | Anzahl Personen | Nachricht | [Senden]
```

---

# Impressum Page Spec
**Datei:** `/app/impressum/page.tsx`

---

```
Layout:   Einfach, clean. Max-width 800px, zentriert.
BG:       --vl-cream

H1:     "Impressum"

Sections:
  Betreiberin:    vegAluna GmbH, Zollstrasse 27, FL-9490 Vaduz...
  Urheberrecht:   Text aus impressum.md
  Copyright:      Text aus impressum.md  
  Disclaimer:     Text aus impressum.md (in kleinerem Text, gedimmt)

Footer-Links: Datenschutzerklärung | Impressum | © 2025 vegAluna GmbH
```

---

# SEO Metadata (alle Seiten)

```typescript
// /app/about/page.tsx
export const metadata = {
  title: 'Über uns – Fränzi & Zeno | vegAluna Vaduz',
  description: 'Die Geschichte hinter vegAluna: Leidenschaft für pflanzliche Ernährung, Kochkurse und ein gesünderes Leben in Vaduz.',
}

// /app/takeaway/page.tsx  
export const metadata = {
  title: 'Mittagsmenü TakeAway – vegAluna Vaduz',
  description: 'Frisches pflanzliches Mittagessen in Vaduz: Mo, Mi, Fr 11:30–13:00. Vortags anmelden und Platz sichern.',
}

// /app/catering/page.tsx
export const metadata = {
  title: 'Veganes Event-Catering Liechtenstein – vegAluna',
  description: 'Plant-based Catering für Events bis 100 Personen in Liechtenstein und der Schweiz. Alles aus einer Hand: Planung, Kochen, Dekoration.',
}
```
