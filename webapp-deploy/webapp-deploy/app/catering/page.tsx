import Image from "next/image"
import Link from "next/link"
import { CONTACT } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Veganes Event-Catering Liechtenstein – vegAluna",
  description: "Plant-based Catering für Events bis 100 Personen in Liechtenstein und der Schweiz. Alles aus einer Hand: Planung, Kochen, Dekoration.",
}

const cateringText = `Du suchst einen Catering-Service, der alles aus einer Hand bietet? Dann bist du bei uns genau richtig! Wir verwandeln jeden Raum in eine stimmungsvolle und festliche Oase. Deine Gäste werden sich rundum wohl fühlen und du kannst dich als Gastgeberin oder Gastgeber ganz auf dich konzentrieren. Wir kümmern uns um alles, von der Planung bis zur Durchführung deiner Veranstaltung. Wir bieten nicht nur das leckere Essen, sondern übernehmen gerne auch andere Aspekte des Caterings, wie Marketing, Tontechnik und mehr. Wir liefern höchste Qualität mit gesunden, nachhaltigen und biologischen Produkten. Wir kochen alles selbst und achten auf eine schonende Zubereitung. Wir haben Equipment für rund hundert Personen, und wenn du eine grössere Veranstaltung planst, können wir dies ebenfalls organisieren. Bei uns wird Plant-Based Catering zum Erlebnis!`

export default function CateringPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=85" alt="Festlich gedeckter Tisch" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-vl-forest/70" />
        </div>
        <div className="relative z-10 vl-container">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">Catering.<br />Alles aus einer Hand.</h1>
          <div className="flex flex-wrap gap-2 mt-6">
            {["gesund", "nachhaltig", "plant-based", "bio"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/20 text-white text-sm">{tag}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="vl-section bg-vl-forest text-white">
        <div className="vl-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{"title":"Alles selbst gekocht","text":"Wir kochen alles frisch und achten auf schonende Zubereitung."},{"title":"100% Plant-Based","text":"Gesunde, nachhaltige und biologische Produkte."},{"title":"Bis 100 Personen","text":"Equipment vorhanden. Größere Events ebenfalls möglich."},{"title":"Mehr als nur Essen","text":"Marketing, Tontechnik und weitere Aspekte auf Wunsch."}].map((u) => (
              <div key={u.title}>
                <h3 className="font-display text-lg font-semibold text-vl-gold">{u.title}</h3>
                <p className="mt-2 text-vl-cream/90">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="vl-section vl-container bg-vl-cream">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-vl-forest mb-6">Wir verwandeln jeden Raum in eine festliche Oase.</h2>
            <p className="text-vl-charcoal/90 leading-relaxed">{cateringText}</p>
          </div>
          <div className="relative min-h-[350px] rounded-xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=85" alt="Catering Buffet" fill className="object-cover" />
          </div>
        </div>
      </section>
      <section className="vl-section vl-container bg-vl-terracotta text-white text-center py-16">
        <h3 className="font-display text-2xl md:text-3xl font-semibold">Bereit für dein Event?</h3>
        <p className="mt-4 text-white/90 max-w-xl mx-auto">Erzähl uns von deiner Veranstaltung – wir erstellen dir gerne ein Angebot.</p>
        <Link href={"mailto:" + CONTACT.email} className="inline-block mt-8 px-8 py-4 rounded-full bg-white text-vl-terracotta font-semibold hover:bg-vl-cream transition-colors">Unverbindlich anfragen →</Link>
      </section>
    </>
  )
}