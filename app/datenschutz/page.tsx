import { CONTACT } from '@/lib/constants'

export const metadata = {
  title: 'Datenschutz – vegAluna',
}

export default function DatenschutzPage() {
  return (
    <section className="vl-section vl-container bg-vl-cream">
      <div className="max-w-3xl prose prose-vl">
        <h1 className="font-display text-3xl font-semibold text-vl-forest">Datenschutzerklärung</h1>

        <div className="mt-12 space-y-10 text-vl-charcoal/90 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-vl-forest mb-4">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-2">
              vegAluna GmbH<br />
              {CONTACT.address}<br />
              FL-{CONTACT.city}<br />
              Liechtenstein
            </p>
            <p className="mt-2">
              Telefon: {CONTACT.phone}<br />
              E-Mail: <a href={`mailto:${CONTACT.email}`} className="text-vl-terracotta hover:underline">{CONTACT.email}</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vl-forest mb-4">2. Allgemeines</h2>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Diese Datenschutzerklärung informiert Sie über die Verarbeitung personenbezogener Daten auf unserer Website vegaluna.li. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vl-forest mb-4">3. Erhebung und Speicherung von Daten</h2>
            <p>
              Beim Besuch unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Dabei werden u. a. folgende Informationen erhoben:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>verwendeter Browser und ggf. das Betriebssystem</li>
            </ul>
            <p className="mt-4">
              Die genannten Daten werden zu Zwecken der Gewährleistung eines reibungslosen Verbindungsaufbaus der Website, zur Systemsicherheit, zur technischen Verwaltung der Netzinfrastruktur sowie zur Optimierung unseres Internetangebotes verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vl-forest mb-4">4. Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert und verarbeitet. Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vl-forest mb-4">5. Cookies</h2>
            <p>
              Unsere Website kann Cookies verwenden. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, unser Angebot nutzerfreundlicher zu gestalten. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und diese einzeln entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen können.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vl-forest mb-4">6. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie auf Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten. Sofern die Verarbeitung auf Ihrer Einwilligung beruht, haben Sie das Recht, diese Einwilligung jederzeit zu widerrufen. Sie haben zudem das Recht, sich bei einer Aufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vl-forest mb-4">7. Datensicherheit</h2>
            <p>
              Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vl-forest mb-4">8. Änderungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen unserer Website bzw. unseres Angebots anzupassen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vl-forest mb-4">9. Kontakt</h2>
            <p>
              Bei Fragen zum Datenschutz wenden Sie sich bitte an:{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-vl-terracotta hover:underline">{CONTACT.email}</a>
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
