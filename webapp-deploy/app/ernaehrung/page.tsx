export const metadata = {
  title: 'Pflanzliche Ernährung – Nährstoff-Guide | vegAluna',
  description: 'Umfassender Guide zu B12, Eisen, Calcium, Vitamin D bei veganer Ernährung.',
}

export default function ErnährungPage() {
  return (
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
  )
}
