'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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
        <nav className="vl-container flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/vegAluna_logo_ws-rund_570px.png"
              alt="vegAluna"
              width={180}
              height={54}
              className="h-11 w-auto md:h-12"
              priority
            />
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.filter((l) => l.href !== '/').map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base md:text-lg font-medium hover:text-vl-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
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
              className="font-display text-2xl md:text-3xl text-white hover:text-vl-terracotta transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {String(i + 1).padStart(2, '0')}. {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
