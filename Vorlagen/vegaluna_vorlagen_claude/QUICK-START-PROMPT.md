# 🚀 Cursor Quick-Start Prompt
**Kopiere diesen Text als erste Nachricht an Cursor AI.**

---

## Einfügen in Cursor Chat:

```
Ich möchte eine neue Website für vegAluna (vegaluna.li) erstellen. 
Alle Spezifikationen befinden sich in diesem Projektordner:

- CURSOR_BRIEF.md → Gesamtübersicht, Tech Stack, Design Direction
- design-system.css → Alle Design Tokens und CSS-Klassen
- component-specs.md → Alle Komponenten-Definitionen
- page-specs/home.md → Startseite
- page-specs/events.md → Events & Workshops
- page-specs/about-takeaway-catering-impressum.md → Alle weiteren Seiten
- page-specs/ernaehrung.md → Nährstoff-Guide
- (Inhalts-Dateien aus /texts/ → home.md, about.md, etc.)
- (Bilder in /public/images/)

Bitte lies zuerst CURSOR_BRIEF.md vollständig, dann alle anderen Dateien.

Beginne dann mit dem Aufsetzen des Projekts:
1. Next.js 14 Projekt mit TypeScript initialisieren
2. Tailwind CSS + Framer Motion + shadcn/ui installieren
3. Design Tokens aus design-system.css in /styles/globals.css einbauen
4. tailwind.config.ts mit vegAluna Farben und Fonts erweitern
5. Layout.tsx mit Navbar und Footer erstellen
6. Dann die Home Page (/) gemäß page-specs/home.md

Halte dich streng an das Design-System (Farben: forest/sage/cream/terracotta/gold, 
Fonts: Cormorant Garamond + DM Sans). Das Design soll "Organic Editorial" sein – 
warm, professionell, wie ein hochklassiges Food-Magazin.
```

---

## Folge-Prompts (nacheinander für jede Seite):

### Nach Home Page fertig:
```
Erstelle jetzt die Events Seite (/app/events/page.tsx) gemäß page-specs/events.md.
Verwende die bereits erstellten Komponenten (HeroSection, EventCard, etc.) 
und das bestehende Design-System.
```

### Nach Events fertig:
```
Erstelle jetzt die Über uns Seite (/app/about/page.tsx) und die 
TakeAway Seite (/app/takeaway/page.tsx) gemäß page-specs/about-takeaway-catering-impressum.md.
```

### Dann Catering:
```
Erstelle die Catering Seite (/app/catering/page.tsx) mit dem 
Anfrage-Formular (React Hook Form + Resend für E-Mail an hoi@vegaluna.li).
```

### Dann Ernährung (komplexeste Seite):
```
Erstelle die Ernährungs-Guide Seite (/app/ernaehrung/page.tsx) gemäß 
page-specs/ernaehrung.md. Das ist die komplexeste Seite mit:
- Sticky Side-Navigation (Desktop) / Tab-Bar (Mobile)
- Nährstoff-Sections mit Progress Bars
- Saisonal-Kalender für Vitamin D
- Öl-Vergleichstabelle für Omega-3
- shadcn/ui Accordion für FAQ
- Tages-Checkliste
```

### Abschluss:
```
Füge jetzt folgende Optimierungen hinzu:
1. SEO: Metadata für alle Seiten (aus page-specs)
2. JSON-LD für lokales Business (vegAluna GmbH)
3. Cookie-Banner (einfach, ohne Analytics)
4. Sitemap.xml + robots.txt
5. Performance: Überprüfe alle next/image Verwendungen
6. Mobile: Teste und fixe alle responsiven Layouts
```

---

## Bilder einbinden (mache das nach dem Code-Gerüst steht):

```
Ich habe jetzt die eigenen Bilder in /public/images/ abgelegt.
Bitte ersetze alle Unsplash-Platzhalter durch die echten Bilder:
- /public/images/hero-main.jpg → Hero Startseite
- /public/images/kochkurs-gruppe.jpg → Events Hero + Cards
- /public/images/fraenzi-zeno.jpg → About Portrait
- /public/images/lunch-bowl.jpg → TakeAway
- /public/images/catering-buffet.jpg → Catering
- /public/images/gemuese-flatlay.jpg → Ernährung Hero
- /public/images/logos/ → Partner Logos

Passe die alt-Texte entsprechend an (auf Deutsch, SEO-freundlich).
```

---

## Tipps für die Zusammenarbeit mit Cursor:

1. **Immer einen klaren Scope** pro Prompt – eine Seite / ein Feature
2. **Referenziere immer** die Spec-Datei: "gemäß page-specs/events.md"
3. **Bei Styling-Fragen:** "Nutze die Design Tokens aus globals.css"
4. **Komponenten wiederverwenden:** "Nutze den HeroSection-Komponenten aus /components/sections/"
5. **Bei Bugs:** Screenshot + "Bitte fix den Fehler – halte dich ans Design-System"
