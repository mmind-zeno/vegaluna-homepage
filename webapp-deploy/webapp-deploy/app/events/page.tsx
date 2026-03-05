import Image from "next/image"
import Link from "next/link"
import { WORKSHOPS, CONTACT } from "@/lib/constants"

export const metadata = {
  title: "Vegane Kochkurse & Workshops – vegAluna Vaduz",
  description: "Vegane Kochkurse, Open Fire Cooking und Ernährungs-Workshops in Vaduz, Liechtenstein. Kleine Gruppen, festliches Dinner inklusive.",
}

export default function EventsPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 vl-container flex flex-col md:flex-row">
          <div className="relative z-10 flex-1 flex flex-col justify-center py-20 vl-container">
            <p className="text-vl-terracotta font-semibold uppercase tracking-wider text-sm mb-2">Workshops & Kurse</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-vl-forest">Lernen, kochen,<br />genießen.</h1>
            <p className="mt-4 text-vl-charcoal/80 max-w-xl">Unsere Workshops finden in kleinen Gruppen statt.</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Kleine Gruppen", "Dinner inklusive", "Theorie & Praxis"].map((b) => (
                <span key={b} className="px-3 py-1 rounded-full bg-vl-light-sage text-vl-forest text-sm">{b}</span>
              ))}
            </div>
          </div>
          <div className="flex-1 relative min-h-[300px] md:min-h-[60vh]">
            <Image src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=85" alt="Kochkurs" fill className="object-cover" priority />
          </div>
        </div>
      </section>
      <section className="vl-section vl-container bg-vl-cream">
        <div className="p-6 rounded-xl bg-vl-light-sage mb-12">
          <p className="text-vl-forest">Alle Kurse sind auf Anfrage buchbar. Schreib uns einfach: <a href={"mailto:" + CONTACT.email} className="text-vl-terracotta font-medium hover:underline">{CONTACT.email}</a></p>
          <Link href={"mailto:" + CONTACT.email} className="inline-block mt-4 px-5 py-2 rounded-full bg-vl-forest text-white text-sm font-medium hover:bg-vl-forest/90 transition-colors">Jetzt anfragen</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKSHOPS.map((w) => (
            <article key={w.id} className="rounded-xl overflow-hidden bg-vl-warm-white shadow-lg">
              <div className="relative h-48">
                <Image src={w.id === "einfuehrung" ? "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=85" : w.id === "open-fire" ? "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=85" : "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=85"} alt={w.title} fill className="object-cover" />
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
    </>
  )
}