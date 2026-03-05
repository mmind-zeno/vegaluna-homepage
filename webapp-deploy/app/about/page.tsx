import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Über uns – Fränzi & Zeno | vegAluna Vaduz",
  description: "Die Geschichte hinter vegAluna: Leidenschaft für pflanzliche Ernährung, Kochkurse und ein gesünderes Leben in Vaduz.",
}

const aboutText = `Magst du dich noch an die besonderen Tage in deiner Kindheit erinnern, als es deine Lieblingsspeise gab? Allein die Erinnerung daran lässt wieder Glücksgefühle frei werden, oder? Ja, ein feines, bewusstes Essen erfüllt uns mit Glück. Und was gibt es schöneres als Menschen mit Glück zu beschenken? Genau das steckt hinter VEGALUNA. Wir möchten dich beglücken indem wir euch zeigen wie gesunde und köstliche Mahlzeiten, ganz ohne tierische Produkte, zubereitet werden. Dieses Glück wird dann wiederum von euch weitergetragen. In diesem Sinn verbreitet sich das Glück nicht nur unter den Menschen, sondern alle Lebewesen können an unserem Glück teilhaben. Wir kochen mit viel Freude und Leidenschaft und möchten unsere Erfahrung und unser Wissen gerne mit euch teilen. Wir möchten inspirieren den Konsum von tierischen Produkten zu reduzieren. Unsere Produkte sollen zeigen, dass gesunde und sehr leckere Speisen auch aus rein pflanzlicher Basis entstehen können. Wir möchten mit VEGALUNA ein Zentrum für gesunde und pflanzliche Ernährung schaffen.`

export default function AboutPage() {
  return (
    <section className="vl-section vl-container bg-vl-cream">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-vl-forest mb-6">Magst du dich noch erinnern...?</h2>
            <p className="text-vl-charcoal/90 leading-relaxed whitespace-pre-line">{aboutText}</p>
            <p className="mt-6 font-display text-lg text-vl-forest">Fränzi & Zeno & Co.</p>
          </div>
          <div className="md:col-span-2 relative min-h-[300px] rounded-xl overflow-hidden">
            <Image src="/images/6_vegaluna_vegan_event_750kb-scaled.jpg" alt="vegAluna Kochatmosphäre" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
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
    </section>
  )
}