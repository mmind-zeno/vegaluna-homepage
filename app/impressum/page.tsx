import { CONTACT } from '@/lib/constants'

export const metadata = {
  title: 'Impressum – vegAluna',
}

const FULL_DISCLAIMER = `Alle Texte und Links wurden sorgfältig geprüft und werden laufend aktualisiert. Wir sind bemüht, richtige und vollständige Informationen auf dieser Website bereitzustellen, übernehmen aber keinerlei Verantwortung, Garantien oder Haftung dafür, dass die durch diese Website bereitgestellten Informationen, richtig, vollständig oder aktuell sind. Wir behalten uns das Recht vor, jederzeit und ohne Vorankündigung die Informationen auf dieser Website zu ändern und verpflichten uns auch nicht, die enthaltenen Informationen zu aktualisieren. Alle Links zu externen Anbietern wurden zum Zeitpunkt ihrer Aufnahme auf ihre Richtigkeit überprüft, dennoch haften wir nicht für Inhalte und Verfügbarkeit von Websites, die mittels Hyperlinks zu erreichen sind. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die durch Inhalte verknüpfter Seiten entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde. Dabei ist es gleichgültig, ob der Schaden direkter, indirekter oder finanzieller Natur ist oder ein sonstiger Schaden vorliegt, der sich aus Datenverlust, Nutzungsausfall oder anderen Gründen aller Art ergeben könnte.`

export default function ImpressumPage() {
  return (
    <section className="vl-section vl-container bg-vl-cream">
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl font-semibold text-vl-forest">Impressum</h1>
        <div className="mt-8 space-y-8 text-vl-charcoal/90">
          <div>
            <h2 className="font-semibold text-vl-forest mb-2">Betreiberin der Webseite & Webseitengestaltung</h2>
            <p>vegAluna GmbH</p>
            <p>{CONTACT.address}</p>
            <p>FL-{CONTACT.city}</p>
            <p>Tel {CONTACT.phone}</p>
            <a href={`mailto:${CONTACT.email}`} className="text-vl-terracotta hover:underline">{CONTACT.email}</a>
          </div>
          <div>
            <h2 className="font-semibold text-vl-forest mb-2">Urheberrecht</h2>
            <p>Einige Bilder unterliegen dem Urheberrecht von freepik.com und anderen free pic Anbietern.</p>
          </div>
          <div>
            <h2 className="font-semibold text-vl-forest mb-2">Copyright</h2>
            <p>Das Copyright für sämtliche Inhalte dieser Website liegt bei vegAluna GmbH, FL-9490 Vaduz.</p>
          </div>
          <div>
            <h2 className="font-semibold text-vl-forest mb-2">Disclaimer</h2>
            <p className="text-vl-charcoal/90 leading-relaxed whitespace-pre-line">{FULL_DISCLAIMER}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
