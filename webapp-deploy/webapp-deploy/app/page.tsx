'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { STANDORT_AKTIV, STANDORT_SCHLIESSUNG } from '@/lib/constants'
import HeroSection from '@/components/sections/HeroSection'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1600&q=85'

export default function HomePage() {
  return (
    <>
      {STANDORT_AKTIV && (
        <div className="bg-vl-gold text-vl-charcoal py-2 px-4 text-center text-sm">
          <span>
            Standort Zollstrasse schliesst per {STANDORT_SCHLIESSUNG}.
          </span>
          <Link href="#transition" className="ml-2 underline font-medium">
            Mehr erfahren
          </Link>
        </div>
      )}

      <HeroSection
        backgroundImage={HERO_IMAGE}
        label="Vaduz · Liechtenstein"
        title="Zentrum für gesunde pflanzliche Ernährung."
        subtitle="Kochkurse · Catering · Ernährungsberatung · TakeAway"
        primaryCTA={{ label: 'Kochkurse entdecken', href: '/events' }}
        secondaryCTA={{ label: 'Mehr erfahren', href: '/about' }}
      />

      <section className="vl-section vl-container bg-vl-cream">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <blockquote className="font-display text-2xl md:text-3xl font-light italic text-vl-forest">
            vegAluna soll in der Region das Zentrum sein für nachhaltige, gesunde
            und pflanzliche Ernährung.
          </blockquote>
          <p className="mt-4 text-vl-sage">— Fränzi & Zeno, Gründer vegAluna</p>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {['Kochkurse', 'Catering', 'TakeAway', 'Ernährung'].map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full bg-vl-light-sage text-vl-forest text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="vl-section vl-container bg-vl-cream">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80',
              tag: 'Erlebnisse',
              title: 'Kochkurse & Workshops',
              text: 'Mehr als nur ein Kurs – verbindet Wissen, Praxis und viel Genuss.',
              href: '/events',
            },
            {
              image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
              tag: 'Mo · Mi · Fr',
              title: 'Mittagsmenü TakeAway',
              text: 'Frisches, pflanzliches Mittagessen. 11:30–13:00 Uhr.',
              href: '/takeaway',
              featured: true,
            },
            {
              image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
              tag: 'Bis 100 Personen',
              title: 'Event Catering',
              text: 'Alles aus einer Hand – plant-based, bio, nachhaltig.',
              href: '/catering',
            },
          ].map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl overflow-hidden bg-vl-warm-white shadow-lg hover:shadow-xl transition-shadow ${
                card.featured ? 'md:-mt-4' : ''
              }`}
            >
              <div className="relative h-48">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-vl-light-sage text-vl-forest text-xs font-medium">
                  {card.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-vl-forest">
                  {card.title}
                </h3>
                <p className="mt-2 text-vl-charcoal/80 text-sm">{card.text}</p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 mt-4 text-vl-terracotta font-medium text-sm hover:underline"
                >
                  Mehr erfahren →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="transition" className="vl-section vl-container bg-vl-forest text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="vl-label text-vl-gold">Eine neue Etappe</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Wir sagen Auf Wiedersehen an der Zollstrasse.
            </h2>
            <p className="mt-6 text-white/90">
              Per {STANDORT_SCHLIESSUNG} geben wir unseren physischen Standort in
              Vaduz auf. Kochkurse, Catering und Ernährungsberatung sind
              weiterhin auf Anfrage buchbar.
            </p>
            <Link
              href="mailto:hoi@vegaluna.li"
              className="inline-block mt-6 bg-vl-terracotta hover:bg-vl-terra-hover text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Anfrage stellen
            </Link>
          </div>
          <div>
            <ul className="space-y-4">
              {[
                { text: 'Kochkurse & Workshops', ok: true },
                { text: 'Event-Catering', ok: true },
                { text: 'Ernährungsberatung', ok: true },
                { text: 'TakeAway Mittagsmenü', ok: false },
                { text: 'Laden / Reformhaus', ok: false },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <span className={item.ok ? 'text-vl-gold' : 'text-white/50'}>
                    {item.ok ? '✓' : '✗'}
                  </span>
                  <span>{item.text}</span>
                  <span className="text-sm text-white/70">
                    {item.ok ? 'weiterhin auf Anfrage' : `endet ${STANDORT_SCHLIESSUNG}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
