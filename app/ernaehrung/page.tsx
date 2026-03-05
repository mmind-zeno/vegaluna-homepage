'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const NAV_ITEMS: { label: string; id: string }[] = [
  { label: 'Übersicht', id: 'uebersicht' },
  { label: 'B12', id: 'b12' },
  { label: 'Eisen', id: 'eisen' },
  { label: 'Calcium', id: 'calcium' },
  { label: 'D', id: 'd' },
  { label: 'Omega-3', id: 'omega-3' },
  { label: 'Zink/Jod/Selen', id: 'zink-jod-selen' },
  { label: 'Protein', id: 'protein' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Checkliste', id: 'checkliste' },
]

export default function ErnährungPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero mit Bild-Overlay */}
      <section className="relative min-h-[40vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/4_vegaluna_vegan_event_750kb-scaled.jpg"
            alt="Pflanzliche Ernährung"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-vl-forest/70" />
        </div>
        <div className="relative z-10 vl-container w-full py-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">
            Nährstoff-Deep-Dive
          </h1>
          <p className="mt-4 max-w-2xl text-white/90 text-lg">
            Pflanzliche Ernährung ist bunt, lecker und gesund. Dein umfassendes Kompendium zu den kritischen Nährstoffen – fundiert, verständlich, ohne Mythen.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {['WISSENSCHAFTLICH GEPRÜFT', 'KOMPLETT-GUIDE', '100% VEGAN'].map((b) => (
              <span key={b} className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Nav für Ernährung */}
      <nav className="sticky top-20 z-40 vl-container py-3 bg-vl-cream/95 backdrop-blur-sm border-b border-vl-light-sage shadow-sm hidden lg:block">
        <div className="flex flex-wrap gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-3 py-1.5 text-sm text-vl-charcoal/80 hover:text-vl-forest hover:bg-vl-light-sage rounded-full transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="uebersicht" className="vl-section vl-container bg-vl-cream scroll-mt-24">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-vl-forest mb-8">Der große Überblick</h2>
        <p className="max-w-3xl text-lg text-vl-charcoal/90 mb-12">
          Du musst kein Ernährungswissenschaftler sein, um vegan gesund zu leben. Aber du musst informiert sein. Die DGE und internationale Fachgesellschaften sind sich einig: Eine gut geplante vegane Ernährung ist für alle Lebensphasen geeignet. Das Schlüsselwort ist „gut geplant“.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { cat: 'Die Pflicht', items: 'Vitamin B12 & Vitamin D (im Winter). Ohne Supplemente geht es hier nicht.', color: 'border-vl-terracotta' },
            { cat: 'Die Achtsamkeit', items: 'Jod, Eisen, Zink, Calcium. Hier braucht es Wissen und gute Lebensmittelauswahl.', color: 'border-vl-gold' },
            { cat: 'Die Basis', items: 'Protein, Magnesium, Vitamin C. Meistens bei abwechslungsreicher Kost kein Problem.', color: 'border-vl-sage' },
          ].map((box) => (
            <motion.div
              key={box.cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl border-l-4 ${box.color} bg-vl-warm-white shadow-sm`}
            >
              <h3 className="font-display text-lg font-semibold text-vl-forest">{box.cat}</h3>
              <p className="mt-2 text-vl-charcoal/80 text-sm">{box.items}</p>
            </motion.div>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse bg-vl-warm-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-vl-forest text-white">
                <th className="text-left p-4 font-semibold">NÄHRSTOFF</th>
                <th className="text-left p-4 font-semibold">STATUS</th>
                <th className="text-left p-4 font-semibold">HAUPTQUELLE (VEGAN)</th>
                <th className="text-left p-4 font-semibold">HANDLUNGSBEDARF</th>
              </tr>
            </thead>
            <tbody className="text-sm text-vl-charcoal/90">
              <tr className="border-b border-vl-cream"><td className="p-4">Vitamin B12</td><td>PFLICHT</td><td>Supplemente</td><td>Täglich supplementieren</td></tr>
              <tr className="border-b border-vl-cream"><td className="p-4">Vitamin D3</td><td>WICHTIG</td><td>Sonne (Sommer), Supplement (Winter)</td><td>Okt–März supplementieren</td></tr>
              <tr className="border-b border-vl-cream"><td className="p-4">Jod</td><td>KRITISCH</td><td>Jodsalz, Nori</td><td>Täglich Jodsalz</td></tr>
              <tr className="border-b border-vl-cream"><td className="p-4">Eisen</td><td>BEACHTEN</td><td>Hülsenfrüchte, Vollkorn, Kerne</td><td>Mit Vitamin C kombinieren</td></tr>
              <tr className="border-b border-vl-cream"><td className="p-4">Calcium</td><td>BEACHTEN</td><td>Mineralwasser, angereicherte Milch, Kohl</td><td>Bewusst integrieren</td></tr>
              <tr><td className="p-4">Omega-3</td><td>WICHTIG</td><td>Leinöl, Algenöl</td><td>Leinöl täglich, Algenöl als Kur</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* B12 */}
      <section id="b12" className="vl-section vl-container bg-vl-warm-white scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="vl-label text-vl-terracotta">SUPPLEMENTIERUNG ERFORDERLICH</span>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-vl-forest mb-6">Vitamin B12 (Cobalamin)</h2>
            <p className="text-vl-charcoal/90 mb-4">Vitamin B12 ist der „Elefant im Raum“ bei veganer Ernährung. Pflanzen produzieren kein B12 – es wird von Mikroorganismen hergestellt. Wir müssen supplementieren.</p>
            <p className="text-vl-charcoal/80 text-sm mb-4"><strong>Mythos:</strong> „Mein Körper produziert B12 selbst.“ – Bakterien im Dickdarm produzieren B12, die Aufnahme findet aber im Dünndarm statt. Das selbst produzierte B12 wird ungenutzt ausgeschieden.</p>
            <div className="space-y-2 text-sm">
              <p><strong>Folgen eines Mangels:</strong> Kribbeln, Gangunsicherheit, Depressionen, „Brain Fog“, Anämie.</p>
              <p><strong>Strategien:</strong> Täglich 50–100 µg oder wöchentlich 2000–2500 µg. Cyanocobalamin ist stabil und gut erforscht.</p>
            </div>
          </div>
          <div className="relative min-h-[280px] rounded-xl overflow-hidden">
            <Image src="/images/5_vegaluna_vegan_event_750kb-scaled.jpg" alt="Gesunde Ernährung" fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-0 bg-vl-forest/30" />
          </div>
        </div>
      </section>

      {/* Eisen */}
      <section id="eisen" className="vl-section vl-container bg-vl-cream scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative min-h-[280px] rounded-xl overflow-hidden order-2 md:order-1">
            <Image src="/images/6_vegaluna_vegan_event_750kb-scaled.jpg" alt="Eisenreiche Ernährung" fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-0 bg-vl-sage/25" />
          </div>
          <div className="order-1 md:order-2">
            <span className="vl-label text-vl-terracotta">GUTE PLANUNG NÖTIG</span>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-vl-forest mb-6">Eisen (Ferritin)</h2>
            <p className="text-vl-charcoal/90 mb-4">Eisenmangel ist der weltweit häufigste Nährstoffmangel. Pflanzen enthalten Nicht-Häm-Eisen mit geringerer Bioverfügbarkeit. Der Trick: Vitamin C steigert die Aufnahme um das 3- bis 4-fache!</p>
            <p className="text-sm text-vl-charcoal/80 mb-4"><strong>Goldene Regel:</strong> Zu jeder eisenreichen Mahlzeit (Haferflocken, Linsen) eine Vitamin-C-Quelle (O-Saft, Paprika, Beeren).</p>
            <p className="text-sm"><strong>Eisen-Räuber:</strong> Kaffee, Schwarztee, Grüntee, Wein – 30–60 Min vor oder nach dem Essen trinken.</p>
          </div>
        </div>
      </section>

      {/* Calcium */}
      <section id="calcium" className="vl-section vl-container bg-vl-warm-white scroll-mt-24">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-vl-forest mb-8">Calcium – Starke Knochen ohne Kuhmilch</h2>
        <p className="max-w-3xl text-vl-charcoal/90 mb-8">Kühe produzieren kein Calcium, sie nehmen es über Pflanzen auf. Das können wir auch. Calcium-Strategie (1000 mg/Tag):</p>
        <ul className="space-y-3 max-w-2xl text-vl-charcoal/90">
          <li><strong>Mineralwasser:</strong> &gt;400 mg/L – bei 1,5 L hast du 60% gedeckt.</li>
          <li><strong>Oxalatarme Gemüse:</strong> Brokkoli, Grünkohl, Chinakohl, Rucola.</li>
          <li><strong>Angereicherte Milch:</strong> Soja-, Hafer- oder Erbsenmilch (vorher schütteln!).</li>
          <li><strong>Tofu:</strong> Mit Calciumsulfat – 200 g können bis 700 mg liefern.</li>
        </ul>
        <p className="mt-4 text-sm text-vl-charcoal/70">Spinat enthält Oxalsäure – Calcium ist dort nicht verfügbar. Zähle Spinat nicht als Calciumquelle.</p>
      </section>

      {/* Vitamin D */}
      <section id="d" className="vl-section vl-container bg-vl-cream scroll-mt-24">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-vl-forest mb-6">Vitamin D – Das Sonnenhormon</h2>
        <p className="max-w-3xl text-vl-charcoal/90 mb-6">Von Oktober bis März steht die Sonne so tief, dass die Haut kein Vitamin D bildet. Winter-Supplementierung ist für fast jeden Pflicht.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-vl-light-sage">
            <h3 className="font-display font-semibold text-vl-forest mb-2">Sommer</h3>
            <p>15–20 Min täglich Sonne auf Gesicht, Arme und Beine (ohne Sonnencreme).</p>
          </div>
          <div className="p-6 rounded-xl bg-vl-light-sage">
            <h3 className="font-display font-semibold text-vl-forest mb-2">Winter</h3>
            <p>20 µg (800 IE) täglich. Veganes D3 aus Flechten erhältlich – auf „vegan“ achten.</p>
          </div>
        </div>
      </section>

      {/* Omega-3 */}
      <section id="omega-3" className="vl-section vl-container bg-vl-warm-white scroll-mt-24">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-vl-forest mb-6">Omega-3 – Fürs Gehirn</h2>
        <p className="max-w-3xl text-vl-charcoal/90 mb-6">ALA (Leinsamen, Chiasamen, Walnüsse) wird nur zu &lt;5% in EPA/DHA umgewandelt. Die Lösung: Mikroalgenöl. Fische enthalten EPA/DHA nur, weil sie Algen fressen – wir können den Fisch weglassen.</p>
        <p className="text-vl-charcoal/90 mb-4"><strong>Empfehlung:</strong> Täglich 1 EL geschrotete Leinsamen + 2–3× pro Woche Algenöl (mind. 250 mg DHA/EPA).</p>
        <p className="text-sm text-vl-charcoal/80">Ölwechsel: Sonnenblumenöl reduzieren (viel Omega-6). Stattdessen Rapsöl, Olivenöl, Leinöl (nicht erhitzen!).</p>
      </section>

      {/* Zink, Jod, Selen */}
      <section id="zink-jod-selen" className="vl-section vl-container bg-vl-cream scroll-mt-24">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-vl-forest mb-8">Zink, Jod & Selen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-vl-warm-white border-l-4 border-vl-sage">
            <h3 className="font-display font-semibold text-vl-forest mb-2">Zink</h3>
            <p className="text-sm text-vl-charcoal/80">Kürbiskerne, Haferflocken, Linsen, Hefeflocken. Einweichen erhöht Aufnahme.</p>
          </div>
          <div className="p-6 rounded-xl bg-vl-warm-white border-l-4 border-vl-terracotta">
            <h3 className="font-display font-semibold text-vl-forest mb-2">Jod</h3>
            <p className="text-sm text-vl-charcoal/80">Deutschland ist Jodmangelgebiet. Jodiertes Speisesalz konsequent nutzen, Nori-Algen maßvoll.</p>
          </div>
          <div className="p-6 rounded-xl bg-vl-warm-white border-l-4 border-vl-gold">
            <h3 className="font-display font-semibold text-vl-forest mb-2">Selen</h3>
            <p className="text-sm text-vl-charcoal/80">1–2 Paranüsse pro Tag decken den Bedarf. Nicht übertreiben.</p>
          </div>
        </div>
      </section>

      {/* Protein */}
      <section id="protein" className="vl-section vl-container bg-vl-warm-white scroll-mt-24">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-vl-forest mb-6">Protein – Gut machbar</h2>
        <p className="max-w-3xl text-vl-charcoal/90 mb-8">Die Angst vor Proteinmangel ist meist unbegründet. Es reicht, über den Tag verteilt verschiedene Quellen zu essen – die „Reis + Bohnen in einer Mahlzeit“-Regel ist widerlegt.</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[400px] border-collapse text-sm">
            <thead><tr className="border-b-2 border-vl-forest text-left"><th className="p-3">Lebensmittel (100g)</th><th className="p-3">Protein</th></tr></thead>
            <tbody className="text-vl-charcoal/90">
              <tr className="border-b border-vl-cream"><td className="p-3">Kürbiskerne</td><td>~30g</td></tr>
              <tr className="border-b border-vl-cream"><td className="p-3">Seitan</td><td>~25–28g</td></tr>
              <tr className="border-b border-vl-cream"><td className="p-3">Tempeh / Tofu</td><td>~12–19g</td></tr>
              <tr><td className="p-3">Linsen (gekocht)</td><td>~9g</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="vl-section vl-container bg-vl-cream scroll-mt-24">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-vl-forest mb-8">Häufig gestellte Fragen</h2>
        <p className="text-vl-charcoal/80 mb-8">Es ist okay, am Anfang überfordert zu sein. Picke dir erst mal einen Nährstoff raus und optimiere ihn. Dann den nächsten.</p>
        <div className="max-w-2xl space-y-2">
          {[
            { q: 'Muss ich wirklich Supplements nehmen?', a: 'B12 und Vitamin D (Winter) sind bei veganer Ernährung Pflicht. Die restlichen Nährstoffe lassen sich oft über Lebensmittel decken.' },
            { q: 'Welche Blutwerte sollte ich checken lassen?', a: 'B12, Ferritin (Eisen), Vitamin D, evtl. Jod und Selen. Lass dich von deiner Ärztin beraten.' },
            { q: 'Kann ich meinen B12-Bedarf über angereicherte Milch decken?', a: 'Schwer. Die Mengen reichen oft nicht – Supplementierung ist zuverlässiger.' },
            { q: 'Was ist mit Kindern und Schwangerschaft?', a: 'Unbedingt mit Ärztin/Ernährungsberatung absprechen. Gut geplant ist vegan in allen Lebensphasen möglich.' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-vl-warm-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left font-medium text-vl-forest hover:bg-vl-light-sage/50 transition-colors"
              >
                {item.q}
                {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openFaq === i && <div className="px-4 pb-4 text-vl-charcoal/80 text-sm">{item.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Checkliste */}
      <section id="checkliste" className="vl-section vl-container bg-vl-forest text-white scroll-mt-24">
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">Deine tägliche Checkliste</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <div>
            <h3 className="font-display text-lg font-semibold text-vl-gold mb-4">Morgens</h3>
            <ul className="space-y-2 text-white/90">
              <li>• B12-Tropfen (Zähneputzen-Routine)</li>
              <li>• Müsli mit Leinsamen (Omega-3)</li>
              <li>• Haferflocken mit Obst (Eisen + Vit C)</li>
              <li>• Glas calciumreiches Mineralwasser</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-vl-gold mb-4">Mittags / Abends</h3>
            <ul className="space-y-2 text-white/90">
              <li>• Hülsenfrüchte oder Tofu (Protein/Eisen)</li>
              <li>• Grünes Gemüse (Calcium)</li>
              <li>• Jodsalz zum Würzen</li>
              <li>• 1–2 Paranüsse (Selen)</li>
              <li>• Ggf. Vitamin D / Algenöl zum Essen</li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-white/80 max-w-2xl">Vegane Ernährung ist kein Verzicht, sondern ein Gewinn. Mit diesem Wissen hast du das Fundament für ein gesundes, langes Leben gelegt.</p>
        <Link
          href="mailto:hoi@vegaluna.li?subject=Persönlicher Ernährungsplan"
          className="inline-block mt-8 px-8 py-4 rounded-full bg-vl-terracotta text-white font-semibold hover:bg-vl-terra-hover transition-colors"
        >
          Persönlichen Plan erstellen
        </Link>
      </section>

      {/* Disclaimer */}
      <section className="vl-section vl-container bg-vl-cream">
        <div className="p-6 rounded-xl bg-vl-forest text-white max-w-3xl">
          <p className="text-sm text-vl-cream/90">Disclaimer: Diese Informationen dienen der allgemeinen Aufklärung und ersetzen keine ärztliche Diagnose oder Behandlung.</p>
        </div>
      </section>
    </>
  )
}
