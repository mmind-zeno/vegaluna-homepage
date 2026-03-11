import Image from "next/image"
import Link from "next/link"
import { CONTACT } from "@/lib/constants"
import type { Metadata } from "next"
import RotatingPageHero from "@/components/sections/RotatingPageHero"
import type { RotatingPageHeroSlide } from "@/components/sections/RotatingPageHero"

export const metadata: Metadata = {
  title: "Veganes Event-Catering Liechtenstein – vegAluna",
  description: "Plant-based Catering für Events bis 100 Personen in Liechtenstein und der Schweiz. Alles aus einer Hand: Planung, Kochen, Dekoration.",
}

const cateringText = `Du suchst einen Catering-Service, der alles aus einer Hand bietet? Dann bist du bei uns genau richtig! Wir verwandeln jeden Raum in eine stimmungsvolle und festliche Oase. Deine Gäste werden sich rundum wohl fühlen und du kannst dich als Gastgeberin oder Gastgeber ganz auf dich konzentrieren. Wir kümmern uns um alles, von der Planung bis zur Durchführung deiner Veranstaltung. Wir bieten nicht nur das leckere Essen, sondern übernehmen gerne auch andere Aspekte des Caterings, wie Marketing, Tontechnik und mehr. Wir liefern höchste Qualität mit gesunden, nachhaltigen und biologischen Produkten. Wir kochen alles selbst und achten auf eine schonende Zubereitung. Wir haben Equipment für rund hundert Personen, und wenn du eine grössere Veranstaltung planst, können wir dies ebenfalls organisieren. Bei uns wird Plant-Based Catering zum Erlebnis!`

const CATERING_HERO_SLIDES: RotatingPageHeroSlide[] = [
  { image: "/images/catering-event-buffet-konferenz.jpg", imageAlt: "Catering Buffet", title: "Event Catering", subtitle: "Plant-based · Bis 100 Personen · Alles aus einer Hand", extra: "Von der Planung bis zur Durchführung – gesund, nachhaltig, bio." },
  { image: "/images/catering-buffet-fingerfood-pumpkin.jpg", imageAlt: "Fingerfood", title: "Event Catering", subtitle: "Festliche Buffets und Fingerfood.", extra: "Auf Anfrage buchbar." },
  { image: "/images/catering-desserts-buffet.jpg", imageAlt: "Desserts", title: "Event Catering", subtitle: "Süss & herzhaft – alles aus einer Hand.", extra: "Bis 100 Personen, grössere Events möglich." },
  { image: "/images/catering-canapes-desserts.jpg", imageAlt: "Canapés", title: "Event Catering", subtitle: "Plant-based · Bio · Nachhaltig.", extra: "Wir verwandeln jeden Raum in eine festliche Oase." },
  { image: "/images/catering-kitchen-spread.jpg", imageAlt: "Küche", title: "Event Catering", subtitle: "Alles selbst gekocht, schonend zubereitet.", extra: "Equipment für rund hundert Personen." },
  { image: "/images/catering-buffet-display.jpg", imageAlt: "Buffet", title: "Event Catering", subtitle: "Bis 100 Personen · Alles aus einer Hand", extra: "Marketing, Tontechnik auf Wunsch." },
  { image: "/images/catering-fingerfood-spelt.jpg", imageAlt: "Fingerfood", title: "Event Catering", subtitle: "Dinkelbrötli, Aufstriche, Wraps.", extra: "Gesund, nachhaltig, bio." },
  { image: "/images/catering-broetli-aufstriche.jpg", imageAlt: "Brötli", title: "Event Catering", subtitle: "Vollkorn-Dinkel-Brötli mit Aufstrichen.", extra: "Auf Anfrage buchbar." },
  { image: "/images/catering-appetizer-crudites.jpg", imageAlt: "Appetizer", title: "Event Catering", subtitle: "Plant-based · Bis 100 Personen", extra: "Von der Planung bis zur Durchführung." },
  { image: "/images/catering-buffet-wraps.jpg", imageAlt: "Wraps", title: "Event Catering", subtitle: "Alles aus einer Hand.", extra: "Gesund, nachhaltig, bio." },
  { image: "/images/catering-buffet-autumn.jpg", imageAlt: "Buffet Herbst", title: "Event Catering", subtitle: "Festliche Oase für dein Event.", extra: "Auf Anfrage buchbar." },
  { image: "/images/catering-buffet-dinkelbroetchen.jpg", imageAlt: "Dinkelbrötchen", title: "Event Catering", subtitle: "Hausgemachte Dinkelbrötchen, vielfältige Aufstriche.", extra: "Bis 100 Personen." },
  { image: "/images/catering-bites-platter.jpg", imageAlt: "Bites", title: "Event Catering", subtitle: "Plant-based · Alles aus einer Hand", extra: "Unverbindlich anfragen." },
]

export default function CateringPage() {
  return (
    <>
      <RotatingPageHero slides={CATERING_HERO_SLIDES} />
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
          <div className="relative min-h-[350px] rounded-xl overflow-hidden shadow-xl">
            <Image src="/images/catering-buffet-fingerfood-pumpkin.jpg" alt="vegAluna Catering Buffet" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-vl-forest/30 to-transparent pointer-events-none" />
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