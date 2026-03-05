'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-vl-forest/95 backdrop-blur-md text-white'
            : 'bg-transparent text-white'
        }`}
      >
        <nav className="vl-container flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-display text-xl md:text-2xl font-semibold">
            vegAluna
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.filter((l) => l.href !== '/').map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-vl-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/events"
              className="px-4 py-2 rounded-full bg-vl-gold text-vl-forest text-sm font-medium hover:bg-vl-gold/90 transition-colors"
            >
              Jetzt anmelden
            </Link>
          </div>
          <button
            aria-label="Menü öffnen"
            className="md:hidden p-2"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-vl-forest flex flex-col items-center justify-center gap-8 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="Menü schließen"
            className="absolute top-6 right-6 p-2"
            onClick={() => setMobileOpen(false)}
          >
            <X size={24} />
          </button>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-2xl text-white hover:text-vl-terracotta transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {String(i + 1).padStart(2, '0')}. {link.label}
            </Link>
          ))}
          <Link
            href="/events"
            className="px-6 py-3 rounded-full bg-vl-gold text-vl-forest font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Jetzt anmelden
          </Link>
        </div>
      )}
    </>
  )
}
