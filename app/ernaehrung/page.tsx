'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  Zap,
  Sun,
  Droplets,
  Leaf,
  Brain,
  Shield,
  FlaskConical,
  Apple,
  CheckCircle2,
  AlertTriangle,
  Info,
  ArrowRight,
} from 'lucide-react'
import RotatingPageHero from '@/components/sections/RotatingPageHero'
import type { RotatingPageHeroSlide } from '@/components/sections/RotatingPageHero'

const NAV_ITEMS: { label: string; id: string }[] = [
  { label: 'Übersicht', id: 'uebersicht' },
  { label: 'B12', id: 'b12' },
  { label: 'Eisen', id: 'eisen' },
  { label: 'Calcium', id: 'calcium' },
  { label: 'Vitamin D', id: 'd' },
  { label: 'Omega-3', id: 'omega-3' },
  { label: 'Zink/Jod/Selen', id: 'zink-jod-selen' },
  { label: 'Protein', id: 'protein' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Checkliste', id: 'checkliste' },
]

const ERNAEHRUNG_HERO_SLIDES: RotatingPageHeroSlide[] = [
  { image: '/images/kochkurs-workshop-handson.jpg', imageAlt: 'Ernährung', title: 'Nährstoff-Deep-Dive', subtitle: 'Pflanzliche Ernährung ist bunt, lecker und gesund.', extra: 'B12, Eisen, Calcium, Omega-3, Protein – fundiert, verständlich.' },
  { image: '/images/takeaway-curry-plate.jpg', imageAlt: 'Gesunde Mahlzeit', title: 'Nährstoff-Deep-Dive', subtitle: 'Dein Kompendium zu den kritischen Nährstoffen.', extra: 'Wissenschaftlich geprüft · 100% vegan.' },
  { image: '/images/catering-broetli-aufstriche.jpg', imageAlt: 'Gesunde Ernährung', title: 'Nährstoff-Deep-Dive', subtitle: 'Vollkorn, Aufstriche, Vielfalt.', extra: 'Ohne Mythen – fundiert und verständlich.' },
  { image: '/images/vegaluna-outdoor-garden-event.jpg', imageAlt: 'vegAluna', title: 'Nährstoff-Deep-Dive', subtitle: 'Pflanzliche Ernährung – voller Energie.', extra: 'Gut geplant für alle Lebensphasen.' },
]

function SectionBadge({ color, icon: Icon, text }: { color: string; icon: React.ElementType; text: string }) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${color}`}>
      <Icon size={13} />
      {text}
    </div>
  )
}

function InfoCard({ icon: Icon, title, body, color = 'border-vl-sage' }: { icon: React.ElementType; title: string; body: string; color?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-6 rounded-xl border-l-4 ${color} bg-vl-warm-white shadow-sm`}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon size={18} className="text-vl-forest shrink-0" />
        <h3 className="font-display text-lg font-semibold text-vl-forest">{title}</h3>
      </div>
      <p className="text-vl-charcoal/80 text-sm leading-relaxed">{body}</p>
    </motion.div>
  )
}

export default function ErnährungPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <RotatingPageHero slides={ERNAEHRUNG_HERO_SLIDES} />

      {/* Sticky Nav */}
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

      {/* ─── ÜBERSICHT ─────────────────────────────────────────────── */}
      <section id="uebersicht" className="vl-section vl-container bg-vl-cream scroll-mt-24">
        <span className="vl-label">Der grosse Überblick</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-vl-forest mt-2 mb-4">
          Pflanzlich & gut versorgt – so geht's.
        </h2>
        <p className="max-w-3xl text-lg text-vl-charcoal/90 mb-12 leading-relaxed">
          Du musst kein Ernährungswissenschaftler sein, um vegan gesund zu leben. Aber du musst informiert sein. Die DGE und internationale Fachgesellschaften sind sich einig: Eine gut geplante vegane Ernährung ist für alle Lebensphasen geeignet. Das Schlüsselwort ist <em className="font-semibold not-italic text-vl-forest">„gut geplant"</em>.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <InfoCard icon={AlertTriangle} title="Die Pflicht" body="Vitamin B12 & Vitamin D (im Winter). Ohne Supplemente geht es hier nicht – kein Ermessensspielraum." color="border-vl-terracotta" />
          <InfoCard icon={Info} title="Die Achtsamkeit" body="Jod, Eisen, Zink, Calcium. Hier braucht es Wissen und eine bewusste Lebensmittelauswahl im Alltag." color="border-vl-gold" />
          <InfoCard icon={CheckCircle2} title="Die Basis" body="Protein, Magnesium, Vitamin C. Bei abwechslungsreicher Kost meist kein Problem – trotzdem spannend zu kennen." color="border-vl-sage" />
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-card">
          <table className="w-full min-w-[600px] border-collapse bg-vl-warm-white overflow-hidden">
            <thead>
              <tr className="bg-vl-forest text-white text-sm">
                <th className="text-left p-4 font-semibold">Nährstoff</th>
                <th className="text-left p-4 font-semibold">Priorität</th>
                <th className="text-left p-4 font-semibold">Beste vegane Quelle</th>
                <th className="text-left p-4 font-semibold">Handlung</th>
              </tr>
            </thead>
            <tbody className="text-sm text-vl-charcoal/90">
              {[
                ['Vitamin B12', '🔴 Pflicht', 'Supplement (einzige Option)', 'Täglich 50–100 µg'],
                ['Vitamin D3', '🟠 Wichtig', 'Sonne (Sommer), Flechten-D3 (Winter)', 'Okt–März täglich 20 µg'],
                ['Jod', '🟠 Kritisch', 'Jodiertes Speisesalz, Nori-Algen', 'Täglich Jodsalz verwenden'],
                ['Eisen', '🟡 Beachten', 'Linsen, Haferflocken, Kürbiskerne', 'Mit Vitamin C kombinieren'],
                ['Calcium', '🟡 Beachten', 'Mineralwasser (>150 mg/L), Kohl, Tofu', 'Bewusst in jede Mahlzeit'],
                ['Omega-3', '🟠 Wichtig', 'Leinöl (ALA), Algenöl (DHA/EPA)', 'Täglich Leinöl + Algenöl'],
                ['Zink', '🟢 Beobachten', 'Kürbiskerne, Hefeflocken, Eingeweichtes', 'Einweichen & keimen'],
                ['Selen', '🟢 Beobachten', '1–2 Paranüsse/Tag', 'Nicht übertreiben'],
              ].map(([n, s, q, h], i) => (
                <tr key={i} className="border-b border-vl-cream hover:bg-vl-cream/40 transition-colors">
                  <td className="p-4 font-medium">{n}</td>
                  <td className="p-4">{s}</td>
                  <td className="p-4 text-vl-charcoal/75">{q}</td>
                  <td className="p-4 text-vl-charcoal/75">{h}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── B12 ───────────────────────────────────────────────────── */}
      <section id="b12" className="vl-section vl-container bg-vl-warm-white scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionBadge color="bg-red-50 text-red-700" icon={AlertTriangle} text="Supplementierung erforderlich" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-vl-forest mb-4">Vitamin B12</h2>
            <div className="vl-divider" />
            <p className="text-vl-charcoal/90 mb-4 leading-relaxed">
              B12 ist der „Elefant im Raum" bei veganer Ernährung. Pflanzen produzieren kein B12 – es wird ausschliesslich von Mikroorganismen hergestellt. <strong>Hier gibt es keinen Ermessensspielraum.</strong>
            </p>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 mb-5 flex gap-3">
              <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                <strong>Mythos:</strong> „Mein Körper produziert selbst B12." – Bakterien im Dickdarm tun das, aber die Aufnahme findet im Dünndarm statt. Das selbst produzierte B12 wird ausgeschieden.
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <Zap size={16} className="text-vl-terracotta shrink-0 mt-0.5" />
                <p><strong>Mangelsymptome:</strong> Kribbeln in Händen/Füssen, Gangunsicherheit, Depressionen, „Brain Fog", Blutarmut. Kann Jahre unbemerkt bleiben.</p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 size={16} className="text-vl-sage shrink-0 mt-0.5" />
                <p><strong>Täglich:</strong> 50–100 µg Cyanocobalamin (stabil, gut erforscht)</p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 size={16} className="text-vl-sage shrink-0 mt-0.5" />
                <p><strong>Wöchentlich:</strong> 2000–2500 µg als Alternative</p>
              </div>
              <div className="flex gap-3 items-start">
                <Info size={16} className="text-vl-gold shrink-0 mt-0.5" />
                <p><strong>Blutwert:</strong> Holotranscobalamin (Holo-TC) ist aussagekräftiger als Gesamt-B12 – nach fragen!</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative min-h-[240px] rounded-2xl overflow-hidden">
              <Image src="/images/takeaway-curry-plate.jpg" alt="Farbenfrohe pflanzliche Mahlzeit" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-vl-forest/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">Farbenfrohe Mahlzeiten liefern viele Vitamine – nur B12 nicht.</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-vl-forest text-white">
              <p className="text-sm font-semibold text-vl-gold mb-2 uppercase tracking-wider">Praxis-Tipp</p>
              <p className="text-sm text-white/90">B12-Tropfen ans Waschbecken – zusammen mit Zähneputzen nehmen. Routine schlägt Vorsatz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EISEN ─────────────────────────────────────────────────── */}
      <section id="eisen" className="vl-section vl-container bg-vl-cream scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative min-h-[300px] rounded-2xl overflow-hidden order-2 md:order-1">
            <Image src="/images/catering-broetli-aufstriche.jpg" alt="Eisenreiche Ernährung" fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-vl-forest/70 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white/90 text-sm">Vollkornbrot + Aufstriche: Kombiniere mit Paprika oder OJ für maximale Eisenaufnahme.</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <SectionBadge color="bg-orange-50 text-orange-700" icon={Leaf} text="Gute Planung nötig" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-vl-forest mb-4">Eisen (Ferritin)</h2>
            <div className="vl-divider" />
            <p className="text-vl-charcoal/90 mb-4 leading-relaxed">
              Eisenmangel ist der weltweit häufigste Nährstoffmangel. Pflanzliches Nicht-Häm-Eisen wird schlechter aufgenommen – aber mit dem richtigen Trick ist das kein Problem.
            </p>
            <div className="p-4 rounded-xl bg-green-50 border border-green-200 mb-5 flex gap-3">
              <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
              <p className="text-sm text-green-800">
                <strong>Goldene Regel:</strong> Vitamin C steigert die Eisenaufnahme um das 3–4-fache! Zu jeder eisenreichen Mahlzeit (Linsen, Haferflocken) eine Vitamin-C-Quelle (OJ, Paprika, Beeren, Zitronensaft).
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <Apple size={16} className="text-vl-forest shrink-0 mt-0.5" />
                <p><strong>Top-Quellen:</strong> Linsen (3,3 mg/100g), Haferflocken (4,5 mg), Kürbiskerne (12 mg), Tofu, Quinoa, Hülsenfrüchte</p>
              </div>
              <div className="flex gap-3 items-start">
                <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                <p><strong>Eisen-Räuber:</strong> Kaffee, Schwarz-/Grüntee, Rotwein, Calcium – 30–60 Min Abstand zur eisenreichen Mahlzeit.</p>
              </div>
              <div className="flex gap-3 items-start">
                <FlaskConical size={16} className="text-vl-gold shrink-0 mt-0.5" />
                <p><strong>Phytate reduzieren:</strong> Einweichen, Keimen, Fermentieren (Sauerteig!) erhöhen die Bioverfügbarkeit erheblich.</p>
              </div>
              <div className="flex gap-3 items-start">
                <Info size={16} className="text-vl-gold shrink-0 mt-0.5" />
                <p><strong>Risikopersonen:</strong> Menstruierende, Schwangere, Ausdauersportler → regelmässig Ferritin messen lassen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CALCIUM ───────────────────────────────────────────────── */}
      <section id="calcium" className="vl-section vl-container bg-vl-warm-white scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionBadge color="bg-blue-50 text-blue-700" icon={Shield} text="Starke Knochen ohne Milch" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-vl-forest mb-4">Calcium</h2>
            <div className="vl-divider" />
            <p className="text-vl-charcoal/90 mb-6 leading-relaxed">
              Kühe produzieren kein Calcium – sie nehmen es über Pflanzen auf. Das können wir auch. Ziel: <strong>1000 mg/Tag</strong>.
            </p>
            <div className="space-y-3">
              {[
                { icon: Droplets, label: 'Mineralwasser', detail: '>150 mg/L wählen – bei 1,5 L täglich 30–40% gedeckt. Auf dem Etikett nachschauen!', color: 'text-blue-500' },
                { icon: Leaf, label: 'Oxalatarmes Gemüse', detail: 'Brokkoli, Grünkohl, Chinakohl, Rucola – sehr gut verfügbar. Spinat zählt trotz Calcium kaum (Oxalate!)', color: 'text-green-600' },
                { icon: Apple, label: 'Pflanzenmilch', detail: 'Soja-, Hafer- oder Erbsenmilch mit mind. 120 mg/100 ml – vor Gebrauch schütteln!', color: 'text-vl-gold' },
                { icon: FlaskConical, label: 'Tofu (mit Calciumsulfat)', detail: '200 g können bis zu 700 mg liefern – auf die Zutatenliste achten', color: 'text-vl-terracotta' },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 p-4 rounded-xl bg-vl-cream">
                  <item.icon size={20} className={`${item.color} shrink-0 mt-0.5`} />
                  <div>
                    <p className="font-semibold text-vl-forest text-sm">{item.label}</p>
                    <p className="text-vl-charcoal/75 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-vl-charcoal/60 italic">Spinat: Enthält Oxalsäure – Calcium dort nicht verfügbar. Nicht als Calciumquelle einrechnen.</p>
          </div>
          <div className="relative min-h-[360px] rounded-2xl overflow-hidden">
            <Image src="/images/catering-canapes-desserts.jpg" alt="Pflanzliche Ernährung mit Calcium" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

      {/* ─── VITAMIN D ─────────────────────────────────────────────── */}
      <section id="d" className="vl-section vl-container bg-vl-cream scroll-mt-24">
        <SectionBadge color="bg-yellow-50 text-yellow-700" icon={Sun} text="Das Sonnenhormon" />
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-vl-forest mb-4">Vitamin D3</h2>
        <div className="vl-divider" />
        <p className="max-w-3xl text-vl-charcoal/90 mb-8 leading-relaxed">
          Von Oktober bis März steht die Sonne in Mitteleuropa so tief, dass die Haut kein Vitamin D bildet. Winter-Supplementierung ist für fast alle Pflicht – vegan oder nicht. Vitamin D ist eigentlich ein Hormon, das Knochen, Immunsystem und Stimmung reguliert.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-100">
            <Sun size={28} className="text-yellow-500 mb-3" />
            <h3 className="font-display font-semibold text-vl-forest mb-2">Sommer (Apr–Sep)</h3>
            <p className="text-sm text-vl-charcoal/80">15–20 Min täglich Sonne auf Gesicht, Armen und Beinen – ohne Sonnencreme. Zwischen 10 und 15 Uhr am wirksamsten.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
            <Shield size={28} className="text-blue-500 mb-3" />
            <h3 className="font-display font-semibold text-vl-forest mb-2">Winter (Okt–März)</h3>
            <p className="text-sm text-vl-charcoal/80">20 µg (800 IE) täglich. Veganes D3 aus Flechten erhältlich – auf „Vegan" oder „Lichen" achten. Mit K2 kombinieren für beste Wirkung.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
            <FlaskConical size={28} className="text-green-600 mb-3" />
            <h3 className="font-display font-semibold text-vl-forest mb-2">Überprüfen lassen</h3>
            <p className="text-sm text-vl-charcoal/80">25-OH-Vitamin-D Blutwert – optimal 40–60 ng/ml. Viele Menschen (auch Nicht-Veganer) sind im Winter mangelhaft.</p>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex gap-3 max-w-2xl">
          <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">Veganes D3 (Cholecalciferol aus Flechten) ist dem D2 (Ergocalciferol) überlegen – achte bei Supplementen auf die Quelle.</p>
        </div>
      </section>

      {/* ─── OMEGA-3 ───────────────────────────────────────────────── */}
      <section id="omega-3" className="vl-section vl-container bg-vl-warm-white scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionBadge color="bg-teal-50 text-teal-700" icon={Brain} text="Fürs Gehirn & Herz" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-vl-forest mb-4">Omega-3-Fettsäuren</h2>
            <div className="vl-divider" />
            <p className="text-vl-charcoal/90 mb-5 leading-relaxed">
              ALA (aus Lein, Chia, Walnüssen) wird vom Körper nur zu &lt;5% in EPA/DHA umgewandelt – die Formen, die Gehirn und Herz wirklich brauchen. Die Lösung: <strong>Mikroalgenöl</strong>. Fische enthalten EPA/DHA nur, weil sie Algen fressen – wir lassen den Fisch weg.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                <p><strong>Täglich:</strong> 1 EL geschrotete Leinsamen (oder Leinöl) für die ALA-Grundversorgung</p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                <p><strong>Supplement:</strong> Algenöl mit mind. 250 mg DHA+EPA täglich oder als regelmässige Kur</p>
              </div>
              <div className="flex gap-3 items-start">
                <AlertTriangle size={16} className="text-orange-500 shrink-0 mt-0.5" />
                <p><strong>Ölwechsel:</strong> Sonnenblumenöl reduzieren (viel Omega-6 stört das Gleichgewicht). Besser: Rapsöl, Olivenöl, Leinöl (nicht erhitzen!)</p>
              </div>
              <div className="flex gap-3 items-start">
                <Info size={16} className="text-vl-gold shrink-0 mt-0.5" />
                <p><strong>Omega-6:Omega-3-Verhältnis:</strong> In der westlichen Ernährung oft 15:1 – angestrebt wird 4:1. Weniger Omega-6 ist oft wichtiger als mehr Omega-3.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-teal-50 border border-teal-100">
              <h4 className="font-semibold text-vl-forest mb-3 flex items-center gap-2">
                <Leaf size={16} className="text-teal-600" /> Top ALA-Quellen (pflanzlich)
              </h4>
              <div className="space-y-2 text-sm">
                {[
                  ['Leinsamen, geschrotet', '2,3 g ALA / EL'],
                  ['Chiasamen', '1,7 g ALA / EL'],
                  ['Walnüsse', '2,6 g ALA / 30g'],
                  ['Rapsöl', '1,3 g ALA / EL'],
                ].map(([food, amount]) => (
                  <div key={food} className="flex justify-between items-center py-1 border-b border-teal-100 last:border-0">
                    <span className="text-vl-charcoal/80">{food}</span>
                    <span className="font-medium text-teal-700">{amount}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-vl-forest text-white">
              <p className="text-xs font-semibold text-vl-gold uppercase tracking-wider mb-2">Wichtig</p>
              <p className="text-sm text-white/90">Leinöl immer gekühlt lagern, nicht erhitzen. Innerhalb von 3 Monaten aufbrauchen – es wird schnell ranzig.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ZINK / JOD / SELEN ────────────────────────────────────── */}
      <section id="zink-jod-selen" className="vl-section vl-container bg-vl-cream scroll-mt-24">
        <span className="vl-label">Mikronährstoffe im Detail</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-vl-forest mt-2 mb-10">Zink, Jod & Selen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              color: 'from-green-50 to-emerald-50 border-green-100',
              accent: 'text-green-600',
              title: 'Zink',
              badge: '🟡 Beobachten',
              body: 'Zink ist essenziell für Immunsystem, Haut und Hormonstoffwechsel. Phytate in Hülsenfrüchten hemmen die Aufnahme – Einweichen und Keimen reduziert das deutlich.',
              sources: ['Kürbiskerne (10 mg/100g)', 'Haferflocken', 'Linsen, Kichererbsen', 'Hefeflocken, Cashews'],
              tip: 'Eingeweichte Hülsenfrüchte haben bis 30% bessere Zinkaufnahme.',
            },
            {
              icon: Zap,
              color: 'from-red-50 to-orange-50 border-red-100',
              accent: 'text-red-500',
              title: 'Jod',
              badge: '🔴 Kritisch',
              body: 'Liechtenstein und Deutschland sind Jodmangelgebiete. Die Schilddrüse braucht Jod für Hormonproduktion. Oft unterschätzt – auch bei Nicht-Veganern.',
              sources: ['Jodiertes Speisesalz (täglich!)', 'Nori-Algen (massvolll)', 'Angereicherte Pflanzenmilch'],
              tip: 'Überdosierung durch zu viel Algenkapseln möglich – Nori ist ok, Kelp-Extrakte mit Vorsicht.',
            },
            {
              icon: FlaskConical,
              color: 'from-amber-50 to-yellow-50 border-amber-100',
              accent: 'text-amber-600',
              title: 'Selen',
              badge: '🟢 Einfach',
              body: 'Selen ist Antioxidans und wichtig für Schilddrüse. Der Selengehalt im Boden (und damit in Pflanzen) ist in Mitteleuropa niedrig.',
              sources: ['Paranüsse: 1–2/Tag reichen!', 'Tofu, Hülsenfrüchte', 'Ggf. Supplement (50–100 µg)'],
              tip: 'Nicht übertreiben: Mehr als 3–4 Paranüsse täglich kann zu Selenüberdosierung führen.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl bg-gradient-to-br ${item.color} border p-6`}
            >
              <item.icon size={28} className={`${item.accent} mb-3`} />
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-xl font-semibold text-vl-forest">{item.title}</h3>
                <span className="text-xs">{item.badge}</span>
              </div>
              <p className="text-sm text-vl-charcoal/80 mb-4 leading-relaxed">{item.body}</p>
              <div className="mb-4">
                <p className="text-xs font-semibold text-vl-forest uppercase tracking-wider mb-2">Quellen</p>
                <ul className="space-y-1">
                  {item.sources.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-vl-charcoal/75">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.accent.replace('text-', 'bg-')} shrink-0`} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-white/60 text-xs text-vl-charcoal/70 italic">{item.tip}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── PROTEIN ───────────────────────────────────────────────── */}
      <section id="protein" className="vl-section vl-container bg-vl-warm-white scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionBadge color="bg-purple-50 text-purple-700" icon={Zap} text="Gut machbar" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-vl-forest mb-4">Protein</h2>
            <div className="vl-divider" />
            <p className="text-vl-charcoal/90 mb-4 leading-relaxed">
              Die Angst vor Proteinmangel ist bei abwechslungsreicher veganer Ernährung meist unbegründet. Bedarf: <strong>0,8–1,0 g pro kg Körpergewicht</strong> (bei Sport bis 1,6 g/kg).
            </p>
            <p className="text-vl-charcoal/80 text-sm mb-6">
              Die „Kombiniere in einer Mahlzeit"-Regel ist längst widerlegt. Es reicht, über den Tag verteilt verschiedene Quellen zu essen – der Körper reguliert selbst.
            </p>
            <div className="p-4 rounded-xl bg-purple-50 border border-purple-100 mb-4 flex gap-3">
              <CheckCircle2 size={16} className="text-purple-600 shrink-0 mt-0.5" />
              <p className="text-sm text-purple-800"><strong>Vollständiges Aminosäureprofil:</strong> Soja (Tofu, Tempeh, Edamame) und Quinoa enthalten alle essentiellen Aminosäuren.</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold text-vl-forest uppercase tracking-wider mb-3">Protein-Gehalt (pro 100g)</p>
            {[
              { food: 'Kürbiskerne', protein: 30, max: 35 },
              { food: 'Seitan', protein: 27, max: 35 },
              { food: 'Tempeh', protein: 19, max: 35 },
              { food: 'Edamame', protein: 17, max: 35 },
              { food: 'Tofu (fest)', protein: 14, max: 35 },
              { food: 'Kichererbsen (gekocht)', protein: 9, max: 35 },
              { food: 'Linsen (gekocht)', protein: 9, max: 35 },
              { food: 'Quinoa (gekocht)', protein: 4.5, max: 35 },
            ].map((item) => (
              <div key={item.food}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-vl-charcoal/80">{item.food}</span>
                  <span className="font-semibold text-vl-forest">{item.protein}g</span>
                </div>
                <div className="h-2 bg-vl-cream rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-vl-forest rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.protein / item.max) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────── */}
      <section id="faq" className="vl-section vl-container bg-vl-cream scroll-mt-24">
        <span className="vl-label">Häufige Fragen</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-vl-forest mt-2 mb-4">FAQ</h2>
        <div className="vl-divider" />
        <p className="text-vl-charcoal/80 mb-8 max-w-2xl">Es ist okay, am Anfang überfordert zu sein. Fang mit einem Nährstoff an – dann der nächste.</p>
        <div className="max-w-2xl space-y-2">
          {[
            { q: 'Muss ich wirklich Supplements nehmen?', a: 'B12 und Vitamin D (Winter) sind bei veganer Ernährung Pflicht – ohne Kompromiss. Die restlichen Nährstoffe lassen sich mit Wissen und guter Lebensmittelauswahl meist über die Nahrung decken.' },
            { q: 'Welche Blutwerte sollte ich regelmässig checken?', a: 'Mindestens: Holotranscobalamin (B12), Ferritin (Eisen), 25-OH-Vitamin-D. Optional: Selen, Jod-Ausscheidung im Urin. 1× jährlich reicht für die meisten.' },
            { q: 'Kann ich B12-Bedarf über angereicherte Lebensmittel decken?', a: 'Theoretisch ja, praktisch schwierig – die Mengen reichen oft nicht, und du isst nicht jeden Tag gleich. Ein Supplement ist zuverlässiger und günstiger als Premium-Lebensmittel.' },
            { q: 'Wie viel Protein brauche ich wirklich?', a: '0,8 g/kg Körpergewicht ist das Minimum. Sportlich Aktive können auf 1,4–1,6 g/kg gehen. Bei abwechslungsreicher veganer Kost ist das gut erreichbar.' },
            { q: 'Ist vegane Ernährung für Kinder und Schwangere geeignet?', a: 'Gut geplant ja – aber unbedingt mit Ärztin oder Ernährungsberater absprechen. Der Bedarf an B12, Jod, Eisen und DHA ist erhöht. Nichts dem Zufall überlassen.' },
            { q: 'Macht mir Soja Probleme (Hormone)?', a: 'Nein. Phytoöstrogene in Soja haben einen anderen Wirkmechanismus als tierische Östrogene und gelten bei normalem Konsum (2–4 Portionen/Tag) als unbedenklich – auch für Männer und Kinder.' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-vl-warm-white overflow-hidden border border-vl-light-sage/50">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left font-medium text-vl-forest hover:bg-vl-light-sage/40 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Info size={15} className="text-vl-gold shrink-0" />
                  {item.q}
                </span>
                {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openFaq === i && (
                <div className="px-5 pb-4 pt-1 text-vl-charcoal/80 text-sm leading-relaxed border-t border-vl-light-sage/40">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── CHECKLISTE ────────────────────────────────────────────── */}
      <section id="checkliste" className="vl-section vl-container bg-vl-forest text-white scroll-mt-24">
        <span className="vl-label text-vl-gold/80">Deine tägliche Routine</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mt-2 mb-3">Checkliste</h2>
        <div className="w-16 h-px bg-vl-gold my-6" />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mb-12">
          {[
            {
              time: 'Morgens',
              icon: Sun,
              items: [
                'B12-Tropfen (beim Zähneputzen)',
                'Müsli mit geschroteten Leinsamen (Omega-3)',
                'Haferflocken + Beeren oder OJ (Eisen + Vit C)',
                'Glas calciumreiches Mineralwasser',
                '1–2 Paranüsse zum Frühstück (Selen)',
              ],
            },
            {
              time: 'Mittags / Abends',
              icon: Leaf,
              items: [
                'Hülsenfrüchte oder Tofu (Protein + Eisen)',
                'Grünes Gemüse (Calcium)',
                'Jodiertes Salz zum Würzen',
                'Jodsalz statt Meersalz',
                'Vit D-Tropfen zum Essen (Oktober–März)',
              ],
            },
            {
              time: 'Wöchentlich',
              icon: CheckCircle2,
              items: [
                'Algenöl (DHA/EPA) 2–3× die Woche',
                'Eingeweichte Hülsenfrüchte vorbereiten',
                'Nori-Blatt als Snack (Jod)',
                'Abwechslung: Quinoa, Tempeh, Seitan rotieren',
                'Blutwerte 1× jährlich checken',
              ],
            },
          ].map((col) => (
            <div key={col.time}>
              <div className="flex items-center gap-2 mb-4">
                <col.icon size={18} className="text-vl-gold" />
                <h3 className="font-display text-lg font-semibold text-vl-gold">{col.time}</h3>
              </div>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/85 text-sm">
                    <CheckCircle2 size={15} className="text-vl-gold/70 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-white/75 max-w-2xl text-base mb-8 leading-relaxed">
          Vegane Ernährung ist kein Verzicht – sondern ein Gewinn. Mit diesem Wissen hast du das Fundament für ein gesundes, langes Leben. Wir begleiten dich gerne persönlich.
        </p>
        <Link
          href="mailto:hoi@vegaluna.li?subject=Persönlicher Ernährungsplan"
          className="vl-btn-gold inline-flex items-center gap-2"
        >
          Persönliche Beratung anfragen
          <ArrowRight size={16} />
        </Link>
      </section>

      {/* Disclaimer */}
      <section className="vl-section vl-container bg-vl-cream">
        <div className="p-5 rounded-xl bg-vl-forest/10 border border-vl-forest/15 max-w-3xl flex gap-3">
          <Info size={16} className="text-vl-forest/60 shrink-0 mt-0.5" />
          <p className="text-sm text-vl-charcoal/70">
            Disclaimer: Diese Informationen dienen der allgemeinen Aufklärung und ersetzen keine ärztliche Diagnose oder Behandlung. Bei gesundheitlichen Fragen immer eine Ärztin oder Ernährungsfachperson konsultieren.
          </p>
        </div>
      </section>
    </>
  )
}
