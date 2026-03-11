import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { CONTACT } from "@/lib/constants"
import RotatingPageHero from "@/components/sections/RotatingPageHero"
import type { RotatingPageHeroSlide } from "@/components/sections/RotatingPageHero"

export const metadata: Metadata = {
  title: "Über uns – Fränzi & Zeno | vegAluna Vaduz",
  description: "Die Geschichte hinter vegAluna: Leidenschaft für pflanzliche Ernährung, Kochkurse und ein gesünderes Leben in Vaduz.",
}

const aboutText = `Magst du dich noch an die besonderen Tage in deiner Kindheit erinnern, als es deine Lieblingsspeise gab? Allein die Erinnerung daran lässt wieder Glücksgefühle frei werden, oder? Ja, ein feines, bewusstes Essen erfüllt uns mit Glück. Und was gibt es schöneres als Menschen mit Glück zu beschenken? Genau das steckt hinter VEGALUNA. Wir möchten dich beglücken indem wir euch zeigen wie gesunde und köstliche Mahlzeiten, ganz ohne tierische Produkte, zubereitet werden. Dieses Glück wird dann wiederum von euch weitergetragen. In diesem Sinn verbreitet sich das Glück nicht nur unter den Menschen, sondern alle Lebewesen können an unserem Glück teilhaben. Wir kochen mit viel Freude und Leidenschaft und möchten unsere Erfahrung und unser Wissen gerne mit euch teilen. Wir möchten inspirieren den Konsum von tierischen Produkten zu reduzieren. Unsere Produkte sollen zeigen, dass gesunde und sehr leckere Speisen auch aus rein pflanzlicher Basis entstehen können. Wir möchten mit VEGALUNA ein Zentrum für gesunde und pflanzliche Ernährung schaffen.`

const ABOUT_HERO_SLIDES: RotatingPageHeroSlide[] = [
  { image: "/images/about-kueche-preparation.jpg", imageAlt: "Küche", title: "Über uns", subtitle: "Fränzi & Zeno – Leidenschaft für pflanzliche Ernährung", extra: "Wir schaffen ein Zentrum für gesunde, pflanzliche Ernährung." },
  { image: "/images/workshop-kochkurs-gruppe.jpg", imageAlt: "Workshop", title: "Über uns", subtitle: "Gemeinsam kochen und lernen.", extra: "Wir teilen unser Wissen mit euch." },
  { image: "/images/catering-canapes-desserts.jpg", imageAlt: "Genuss", title: "Über uns", subtitle: "Leidenschaft für pflanzliche Küche.", extra: "Happy food, happy life." },
  { image: "/images/event-buffet-salads-drinks.jpg", imageAlt: "Events", title: "Über uns", subtitle: "Fränzi & Zeno & Co.", extra: "Vielen Dank für die wunderbare Zeit." },
  { image: "/images/vegaluna-outdoor-garden-event.jpg", imageAlt: "Community", title: "Über uns", subtitle: "Leidenschaft für pflanzliche Ernährung.", extra: "Wir möchten inspirieren." },
]

export default function AboutPage() {
  return (
    <>
      <RotatingPageHero slides={ABOUT_HERO_SLIDES} />

      <section className="vl-section vl-container bg-vl-cream">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-vl-forest mb-6">Magst du dich noch erinnern...?</h2>
            <p className="text-vl-charcoal/90 leading-relaxed whitespace-pre-line">{aboutText}</p>
            <p className="mt-6 font-display text-lg text-vl-forest">Fränzi & Zeno & Co.</p>
          </div>
          <div className="md:col-span-2 relative min-h-[300px] rounded-xl overflow-hidden shadow-xl">
            <Image src="/images/6_vegaluna_vegan_event_750kb-scaled.jpg" alt="vegAluna Kochatmosphäre" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-vl-forest/30 to-transparent pointer-events-none" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[{"title":"Pflanzlich inspirieren","text":"Wir zeigen, wie lecker tierfreie Küche sein kann."},{"title":"Wissen teilen","text":"Erfahrung und Know-how aus jahrelanger Praxis."},{"title":"Gemeinsam wachsen","text":"VEGALUNA als Treffpunkt zum Austausch."}].map((v) => (
            <div key={v.title} className="p-6 rounded-xl bg-vl-light-sage text-vl-forest">
              <h3 className="font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-vl-charcoal/80">{v.text}</p>
            </div>
          ))}
        </div>

        {/* Newsletter, Gutscheine, Gewinnspiel */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="relative p-8 rounded-2xl overflow-hidden bg-vl-forest text-white">
            <div className="absolute inset-0 opacity-20">
              <Image src="/images/catering-canapes-desserts.jpg" alt="" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-xl font-semibold text-vl-gold mb-2">Newsletter</h3>
              <p className="text-white/90 text-sm mb-4">Rezepte, Daily Tips & Tricks, neue Produkte – melde dich an.</p>
              <Link href={`mailto:${CONTACT.email}?subject=Newsletter-Anmeldung`} className="inline-block px-5 py-2.5 rounded-full bg-vl-terracotta text-white text-sm font-medium hover:bg-vl-terra-hover transition-colors">Subscribe Now</Link>
            </div>
          </div>
          <div className="relative p-8 rounded-2xl overflow-hidden bg-vl-sage text-white">
            <div className="absolute inset-0 opacity-25">
              <Image src="/images/1_vegaluna_vegan_event__750kb-scaled.jpg" alt="" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-xl font-semibold text-vl-gold mb-2">Gutscheine</h3>
              <p className="text-white/90 text-sm mb-4">Du kennst jemanden, den vegane Ernährung interessiert? Gerne senden wir dir einen Geschenk-Gutschein.</p>
              <Link href={`mailto:${CONTACT.email}?subject=Gutschein-Anfrage`} className="inline-block px-5 py-2.5 rounded-full bg-vl-terracotta text-white text-sm font-medium hover:bg-vl-terra-hover transition-colors">Anfragen</Link>
            </div>
          </div>
          <div className="relative p-8 rounded-2xl overflow-hidden bg-vl-terracotta text-white">
            <div className="absolute inset-0 opacity-20">
              <Image src="/images/vegaluna-outdoor-garden-event.jpg" alt="" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-xl font-semibold text-vl-gold mb-2">Gewinnspiel</h3>
              <p className="text-white/90 text-sm mb-4">Wir verlosen immer wieder tolle Preise. Mitmachen lohnt sich!</p>
              <Link href={`mailto:${CONTACT.email}?subject=Gewinnspiel`} className="inline-block px-5 py-2.5 rounded-full bg-vl-forest text-white text-sm font-medium hover:bg-vl-forest/90 transition-colors">Mehr erfahren</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}