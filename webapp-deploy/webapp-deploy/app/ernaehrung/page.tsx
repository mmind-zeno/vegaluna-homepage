import Image from 'next/image'

export const metadata = {
  title: 'Pflanzliche Ernährung – Nährstoff-Guide | vegAluna',
  description: 'Umfassender Guide zu B12, Eisen, Calcium, Vitamin D bei veganer Ernährung.',
}

export default function ErnährungPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=85" alt="Ernährung" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-vl-forest/70" />
        </div>
        <div className="relative z-10 vl-container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Der vegAluna Nährstoff-Guide</h1>
          <p className="mt-4 text-white/90">Pflanzlich leben – ohne Kompromisse bei der Gesundheit.</p>
          <div className="flex gap-2 mt-6">
            {['Wissenschaftlich geprüft', '100% Vegan', 'Komplett-Guide'].map((b) => (
              <span key={b} className="px-3 py-1 rounded-full bg-white/20 text-white text-sm">✓ {b}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="vl-section vl-container bg-vl-cream">
        <p className="max-w-2xl text-lg mb-12">
          Eine gut geplante vegane Ernährung ist für alle Lebensphasen geeignet. Das Schlüsselwort ist „gut geplant“.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { cat: 'Die Pflicht', items: 'Vitamin B12 & D', color: 'border-vl-terracotta' },
            { cat: 'Die Achtsamkeit', items: 'Jod, Eisen, Zink, Calcium', color: 'border-vl-gold' },
            { cat: 'Die Basis', items: 'Protein, Magnesium, Vitamin C', color: 'border-vl-sage' },
          ].map((box) => (
            <div key={box.cat} className={`p-6 rounded-xl border-l-4 ${box.color} bg-vl-warm-white`}>
              <h3 className="font-display text-lg font-semibold text-vl-forest">{box.cat}</h3>
              <p className="mt-2 text-vl-charcoal/80">{box.items}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 p-6 rounded-xl bg-vl-forest text-white">
          <p className="text-sm text-vl-cream/70">Disclaimer: Diese Informationen ersetzen keine ärztliche Beratung.</p>
        </div>
      </section>
    </>
  )
}
