'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CONTACT, OPENING_HOURS, STANDORT_AKTIV, STANDORT_SCHLIESSUNG, TAKEAWAY_ENDE } from '@/lib/constants'

export default function Footer() {
  return (
    <>
      {/* Pre-footer CTA */}
      <section className="bg-vl-terracotta py-20 px-6 text-center text-white">
        <h2 className="font-display text-4xl md:text-5xl italic font-semibold">
          Neugierig auf pflanzliche Ernährung?
        </h2>
        <p className="text-white/85 mt-4 max-w-lg mx-auto text-lg">
          Ernährungsberatung, Kochkurse und Catering – auf Anfrage buchbar.
        </p>
        <a href="mailto:hoi@vegaluna.li" className="vl-btn-gold mt-8 inline-flex">
          Jetzt anfragen
        </a>
      </section>

      {/* Main footer */}
      <footer className="bg-vl-forest text-vl-cream">
        <div className="vl-container py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/images/vegAluna_logo_ws-rund_570px.png"
                  alt="vegAluna"
                  width={160}
                  height={48}
                  className="h-12 w-auto opacity-95"
                />
              </Link>
              <p className="mt-2 text-vl-cream/80 text-sm">happy food – happy life</p>
            </div>

            <div>
              <p className="font-semibold text-sm uppercase tracking-wider mb-4">Öffnungszeiten</p>
              {STANDORT_AKTIV ? (
                <>
                  <p className="text-xs text-vl-gold mb-2">Standort schliesst {STANDORT_SCHLIESSUNG}</p>
                  {OPENING_HOURS.map((h) => (
                    <p key={h.day} className="text-sm text-vl-cream/90">
                      {h.day}: {h.times}
                    </p>
                  ))}
                </>
              ) : (
                <p className="text-sm">Nur auf Anfrage: {CONTACT.email}</p>
              )}
            </div>

            <div>
              <p className="font-semibold text-sm uppercase tracking-wider mb-4">Navigation</p>
              <div className="space-y-2">
                {[
                  { label: 'Kochkurse', href: '/#events' },
                  { label: 'Catering', href: '/#catering' },
                  { label: 'Ernährung', href: '/#ernaehrung' },
                  { label: 'Über uns', href: '/about' },
                  { label: 'Impressum', href: '/impressum' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-sm text-vl-cream/90 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              {!STANDORT_AKTIV && (
                <p className="text-xs text-vl-cream/70 mt-4">* TakeAway endet bereits {TAKEAWAY_ENDE}.</p>
              )}
            </div>

            <div>
              <p className="font-semibold text-sm uppercase tracking-wider mb-4">Kontakt</p>
              <p className="text-sm text-vl-cream/90">{CONTACT.address}</p>
              <p className="text-sm text-vl-cream/90">{CONTACT.city}</p>
              <p className="text-sm text-vl-cream/90 mt-2">{CONTACT.phone}</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm text-vl-cream/90 hover:text-white transition-colors"
              >
                {CONTACT.email}
              </a>
              <div className="mt-4">
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-vl-gold hover:text-vl-gold/80 transition-colors"
                >
                  @vegaluna.li
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-vl-forest-light flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-vl-cream/70">
              © 2026 vegAluna GmbH · v0.10.1
            </p>
            <div className="flex gap-6">
              <Link href="/impressum" className="text-sm text-vl-cream/70 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-sm text-vl-cream/70 hover:text-white transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
