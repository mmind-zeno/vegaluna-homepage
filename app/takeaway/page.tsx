import { CONTACT, TAKEAWAY_ENDE } from "@/lib/constants"
import type { Metadata } from "next"
import RotatingPageHero from "@/components/sections/RotatingPageHero"
import type { RotatingPageHeroSlide } from "@/components/sections/RotatingPageHero"

export const metadata: Metadata = {
  title: "Mittagsmenü TakeAway – vegAluna Vaduz",
  description: "Frisches pflanzliches Mittagessen in Vaduz: Mo, Mi, Fr 11:30–13:00. Vortags anmelden und Platz sichern.",
}

const TAKEAWAY_HERO_SLIDES: RotatingPageHeroSlide[] = [
  { image: "/images/takeaway-curry-plate.jpg", imageAlt: "Mittagsmenü", title: "Mittagsmenü TakeAway", subtitle: "Frisch gekocht · Mo · Mi · Fr · 11:30 – 13:00 Uhr", extra: "Currys, OnePots, Happy Bowls, Polenta, Lasagne & mehr." },
  { image: "/images/catering-buffet-display.jpg", imageAlt: "Buffet", title: "Mittagsmenü TakeAway", subtitle: "Vortags anmelden – dein Essen garantiert.", extra: "Noch bis " + TAKEAWAY_ENDE + "." },
  { image: "/images/catering-appetizer-crudites.jpg", imageAlt: "Frisch", title: "Mittagsmenü TakeAway", subtitle: "Frisch gekocht · 11:30 – 13:00 Uhr", extra: "Spontan: wenige Extraportionen." },
  { image: "/images/event-buffet-sweets.jpg", imageAlt: "Genuss", title: "Mittagsmenü TakeAway", subtitle: "Mo · Mi · Fr · 11:30 – 13:00 Uhr", extra: "reCIRCLE-Geschirr – nachhaltig." },
]

export default function TakeawayPage() {
  return (
    <>
      <RotatingPageHero slides={TAKEAWAY_HERO_SLIDES} />
      <div className="bg-vl-gold/90 text-vl-forest text-center py-3 px-4 text-sm">
        Das TakeAway-Mittagsmenü läuft noch bis {TAKEAWAY_ENDE}. Danach können wir diesen Service leider nicht mehr anbieten.
      </div>
      <section className="vl-section vl-container bg-vl-cream">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-vl-warm-white border-l-4 border-vl-sage">
            <h3 className="font-display font-semibold text-vl-forest">Öffnungszeiten</h3>
            <p className="mt-2 text-vl-charcoal/80">Mo · Mi · Fr</p>
            <p className="text-vl-charcoal">11:30 – 13:00 Uhr</p>
          </div>
          <div className="p-6 rounded-xl bg-vl-warm-white border-l-4 border-vl-terracotta">
            <h3 className="font-display font-semibold text-vl-forest">Was gibt es?</h3>
            <p className="mt-2 text-vl-charcoal/80">Currys · OnePots · Happy Bowls · Polenta · Lasagne & mehr</p>
          </div>
          <div className="p-6 rounded-xl bg-vl-warm-white border-l-4 border-vl-gold">
            <h3 className="font-display font-semibold text-vl-forest">Anmeldung</h3>
            <p className="mt-2 text-vl-charcoal/80">Vortags anmelden: garantiert! Spontan: wenige Extraportionen</p>
            <a href={"tel:" + CONTACT.phone.replace(/\s/g, "")} className="text-vl-terracotta font-medium mt-2 inline-block hover:underline">{CONTACT.phone}</a>
          </div>
        </div>
        <div className="p-4 border-l-4 border-vl-terracotta bg-vl-light-sage rounded-r-xl mb-12">
          <p className="text-vl-forest"><strong>Tipp:</strong> Melde dich am Vortag an und dein Essen ist garantiert.</p>
        </div>
        <div className="p-6 rounded-xl bg-vl-light-sage">
          <h3 className="font-display text-xl font-semibold text-vl-forest mb-4">Nachhaltig bis zum letzten Bissen</h3>
          <p className="text-vl-charcoal/90">Im Sinne der Nachhaltigkeit verwenden wir reCIRCLE-Geschirr. CHF 10.– Depot, retournierbar bei uns und in der ganzen Schweiz.</p>
          <a href="https://recircle.ch" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-vl-forest font-medium hover:underline">reCIRCLE.ch →</a>
        </div>
      </section>
    </>
  )
}