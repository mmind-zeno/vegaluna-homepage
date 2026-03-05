'use client'

import Link from 'next/link'
import { CONTACT, OPENING_HOURS, STANDORT_AKTIV, STANDORT_SCHLIESSUNG } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-vl-forest text-vl-cream">
      <div className="vl-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <p className="font-display text-2xl font-semibold">vegAluna</p>
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
              {['Events', 'Über uns', 'TakeAway', 'Catering', 'Ernährung'].map((label) => (
                <Link
                  key={label}
                  href={`/${label === 'Über uns' ? 'about' : label.toLowerCase()}`}
                  className="block text-sm text-vl-cream/90 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
            {!STANDORT_AKTIV && (
              <p className="text-xs text-vl-cream/70 mt-4">* TakeAway läuft bis {STANDORT_SCHLIESSUNG} aus.</p>
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
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-vl-forest-light flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-vl-cream/70">
            © 2025 vegAluna GmbH
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
  )
}
