import Image from "next/image"
import Link from "next/link"
import { WORKSHOPS, CONTACT } from "@/lib/constants"

export const metadata = {
  title: "Vegane Kochkurse & Workshops – vegAluna Vaduz",
  description: "Vegane Kochkurse, Open Fire Cooking und Ernährungs-Workshops in Vaduz, Liechtenstein. Kleine Gruppen, festliches Dinner inklusive.",
}

export default function EventsPage() {
  return (
    <section className="vl-section vl-container bg-vl-cream">
        <div className="p-6 rounded-xl bg-vl-light-sage mb-12">
          <p className="text-vl-forest">Alle Kurse sind auf Anfrage buchbar. Schreib uns einfach: <a href={"mailto:" + CONTACT.email} className="text-vl-terracotta font-medium hover:underline">{CONTACT.email}</a></p>
          <Link href={"mailto:" + CONTACT.email} className="inline-block mt-4 px-5 py-2 rounded-full bg-vl-forest text-white text-sm font-medium hover:bg-vl-forest/90 transition-colors">Jetzt anfragen</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKSHOPS.map((w) => (
            <article key={w.id} className="rounded-xl overflow-hidden bg-vl-warm-white shadow-lg">
              <div className="relative h-48">
                <Image src={w.id === "einfuehrung" ? "/images/5_vegaluna_vegan_event_750kb-scaled.jpg" : w.id === "open-fire" ? "/images/8_vegaluna_vegan_event_bbq_750kb.jpg" : "/images/4_vegaluna_vegan_event_750kb-scaled.jpg"} alt={w.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <span className={"absolute top-4 left-4 px-2 py-1 rounded text-xs font-medium " + (w.badge === "Bestseller" ? "bg-vl-terracotta text-white" : w.badge === "Outdoor" ? "bg-vl-sage text-white" : "bg-vl-gold text-vl-forest")}>{w.badge}</span>
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
  )
}