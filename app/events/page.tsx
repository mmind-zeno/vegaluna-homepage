import Image from "next/image"
import Link from "next/link"
import { WORKSHOPS, CONTACT } from "@/lib/constants"
import RotatingPageHero from "@/components/sections/RotatingPageHero"
import type { RotatingPageHeroSlide } from "@/components/sections/RotatingPageHero"

export const metadata = {
  title: "Vegane Kochkurse & Workshops – vegAluna Vaduz",
  description: "Vegane Kochkurse, Open Fire Cooking und Ernährungs-Workshops in Vaduz, Liechtenstein. Kleine Gruppen, festliches Dinner inklusive.",
}

const EVENTS_HERO_SLIDES: RotatingPageHeroSlide[] = [
  { image: "/images/kochkurs-workshop-handson.jpg", imageAlt: "Kochkurs", title: "Kochkurse & Workshops", subtitle: "Lernen, kochen, gemeinsam geniessen.", extra: "Kleine Gruppen · Festliches Dinner · auf Anfrage." },
  { image: "/images/events-cooking-workshop.jpg", imageAlt: "Workshop", title: "Hands-on Kochen", subtitle: "Einführung plant-based, Open Fire oder Gesundheit.", extra: "Alle Kurse auf Anfrage buchbar." },
  { image: "/images/event-catering-hall-buffet.jpg", imageAlt: "Event", title: "Gemeinsam geniessen", subtitle: "Festliches Dinner inklusive.", extra: "Kleine Gruppen, festliche Atmosphäre." },
  { image: "/images/vegaluna-outdoor-garden-event.jpg", imageAlt: "Outdoor", title: "Open Fire Cooking", subtitle: "Kochen in freier Natur.", extra: "Outdoor-Erlebnis auf Anfrage." },
  { image: "/images/workshop-kochkurs-gruppe.jpg", imageAlt: "Gruppe", title: "Workshops & Kurse", subtitle: "Praxis & Theorie.", extra: "Ernährungs-Wissen und Genuss." },
  { image: "/images/event-buffet-salads-drinks.jpg", imageAlt: "Buffet", title: "Kochkurse & Workshops", subtitle: "Lernen, kochen, gemeinsam geniessen.", extra: "Schreib uns: " + CONTACT.email },
  { image: "/images/event-buffet-sweets.jpg", imageAlt: "Desserts", title: "Festliches Dinner", subtitle: "Kleine Gruppen, festliches Dinner inklusive.", extra: "Einführung plant-based, Open Fire, Gesundheit – auf Anfrage." },
]

export default function EventsPage() {
  return (
    <>
      <RotatingPageHero slides={EVENTS_HERO_SLIDES} />
      <section className="vl-section vl-container bg-vl-cream">
        <div className="p-6 rounded-xl bg-vl-light-sage mb-12">
          <p className="text-vl-forest">Alle Kurse sind auf Anfrage buchbar. Schreib uns einfach: <a href={"mailto:" + CONTACT.email} className="text-vl-terracotta font-medium hover:underline">{CONTACT.email}</a></p>
          <Link href={"mailto:" + CONTACT.email} className="inline-block mt-4 px-5 py-2 rounded-full bg-vl-forest text-white text-sm font-medium hover:bg-vl-forest/90 transition-colors">Jetzt anfragen</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKSHOPS.map((w) => (
            <article key={w.id} className="rounded-xl overflow-hidden bg-vl-warm-white shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image src={w.id === "einfuehrung" ? "/images/events-cooking-workshop.jpg" : w.id === "open-fire" ? "/images/vegaluna-outdoor-garden-event.jpg" : "/images/event-catering-hall-buffet.jpg"} alt={w.title} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-vl-forest/40 to-transparent pointer-events-none" />
                <span className={"absolute top-4 left-4 px-2 py-1 rounded text-xs font-medium z-10 " + (w.badge === "Bestseller" ? "bg-vl-terracotta text-white" : w.badge === "Outdoor" ? "bg-vl-sage text-white" : "bg-vl-gold text-vl-forest")}>{w.badge}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-vl-forest">{w.title}</h3>
                <p className="text-sm text-vl-charcoal/70 mt-1">{w.time}</p>
                <ul className="mt-4 space-y-2 text-sm text-vl-charcoal/80">{w.features.map((f) => <li key={f}>• {f}</li>)}</ul>
                <Link href={"mailto:" + CONTACT.email + "?subject=Anfrage: " + w.title} className="inline-flex items-center gap-2 mt-6 text-vl-terracotta font-medium text-sm hover:underline">Anmelden / Anfragen →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}