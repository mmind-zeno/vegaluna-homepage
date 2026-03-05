import Image from "next/image"
import { CONTACT } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mittagsmenü TakeAway – vegAluna Vaduz",
  description: "Frisches pflanzliches Mittagessen in Vaduz: Mo, Mi, Fr 11:30–13:00. Vortags anmelden und Platz sichern.",
}

export default function TakeawayPage() {
  return (
    <>
      <div className="bg-vl-gold/90 text-vl-forest text-center py-3 px-4 text-sm">
        Das TakeAway-Mittagsmenü läuft noch bis Ende Mai 2026. Danach können wir diesen Service leider nicht mehr anbieten.
      </div>
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1600&q=85" alt="Bowl / Mittagsmenü" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-vl-forest/60" />
        </div>
        <div className="relative z-10 vl-container text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Frisch. Pflanzlich. Lecker.</h1>
          <p className="mt-4 text-white/90">Mittagsmenü jeden Montag, Mittwoch & Freitag</p>
        </div>
      </section>
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