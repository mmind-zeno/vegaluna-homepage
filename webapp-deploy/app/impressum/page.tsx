import { CONTACT } from '@/lib/constants'

export const metadata = {
  title: 'Impressum – vegAluna',
}

export default function ImpressumPage() {
  return (
    <section className="vl-section vl-container bg-vl-cream">
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl font-semibold text-vl-forest">Impressum</h1>
        <div className="mt-8 space-y-6 text-vl-charcoal/90">
          <div>
            <p className="font-semibold">Betreiberin</p>
            <p>vegAluna GmbH</p>
            <p>{CONTACT.address}</p>
            <p>{CONTACT.city}</p>
            <p>Tel {CONTACT.phone}</p>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
          <div>
            <p className="font-semibold">Urheberrecht</p>
            <p>Einige Bilder unterliegen dem Urheberrecht von freepik.com und anderen Anbietern.</p>
          </div>
          <div>
            <p className="font-semibold">Copyright</p>
            <p>Das Copyright für sämtliche Inhalte dieser Website liegt bei vegAluna GmbH, FL-9490 Vaduz.</p>
          </div>
          <div className="text-sm text-vl-charcoal/70">
            <p className="font-semibold">Disclaimer</p>
            <p>Alle Texte und Links wurden sorgfältig geprüft. Wir übernehmen keine Haftung für externe Inhalte.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
