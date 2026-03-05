'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { STANDORT_AKTIV, STANDORT_SCHLIESSUNG, TAKEAWAY_ENDE, DANKSAGUNG, REORIENTIERUNG, CONTACT } from '@/lib/constants'

const QUOTES = [
  { text: 'Die Größe einer Nation und ihr moralischer Fortschritt können daran gemessen werden, wie ihre Tiere behandelt werden.', author: 'Gandhi' },
  { text: 'Der Weg zur Gesundheit führt durch die Küche, nicht durch die Apotheke.', author: 'Sebastian Kneipp' },
]

const PARTNERS = ['Ideencamp', 'Gemeinde Vaduz', 'Formatio', 'Universität Liechtenstein', 'SDG Allianz Liechtenstein', 'Feldfreunde', 'Liechtensteiner Gesellschaft Umweltschutz', 'CIPRA', 'Olympic Committee']

export default function HomePage() {
  return (
    <>
      {STANDORT_AKTIV && (
        <div className="bg-vl-gold text-vl-charcoal py-2.5 px-4 text-center text-sm">
          <span>
            Vielen Dank für vier wunderbare Jahre. TakeAway endet {TAKEAWAY_ENDE}, Standort schliesst per {STANDORT_SCHLIESSUNG}.
          </span>
          <Link href="#transition" className="ml-2 underline font-medium">
            Mehr erfahren
          </Link>
        </div>
      )}

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
              image: '/images/5_vegaluna_vegan_event_750kb-scaled.jpg',
              tag: 'Erlebnisse',
              title: 'Kochkurse & Workshops',
              text: 'Mehr als nur ein Kurs – verbindet Wissen, Praxis und viel Genuss.',
              href: '/events',
            },
            {
              image: '/images/vegaluna_bio-laden.jpg',
              tag: 'Mo · Mi · Fr',
              title: 'Mittagsmenü TakeAway',
              text: `Frisches, pflanzliches Mittagessen. 11:30–13:00 Uhr. (noch bis ${TAKEAWAY_ENDE})`,
              href: '/takeaway',
              featured: true,
            },
            {
              image: '/images/6_vegaluna_vegan_event_750kb-scaled.jpg',
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
                  alt={`${card.title} – vegAluna`}
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

      {/* Zitat-Banner */}
      <section className="vl-section vl-container bg-vl-cream">
        <div className="grid md:grid-cols-2 gap-8">
          {QUOTES.map((q, i) => (
            <motion.div
              key={q.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 md:p-10 rounded-2xl overflow-hidden bg-vl-forest text-white"
            >
              <div className="absolute inset-0">
                <Image src="/images/1_vegaluna_vegan_event__750kb-scaled.jpg" alt="" fill className="object-cover opacity-25" sizes="50vw" />
                <div className="absolute inset-0 bg-vl-forest/85" />
              </div>
              <blockquote className="relative z-10 font-display text-xl md:text-2xl font-light italic text-white/95 leading-relaxed">
                «{q.text}»
              </blockquote>
              <p className="relative z-10 mt-4 text-vl-gold font-medium">— {q.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partner */}
      <section className="vl-section vl-container bg-vl-warm-white">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-vl-forest text-center mb-12">Unsere Kunden und Partner</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {PARTNERS.map((name) => (
            <span key={name} className="px-4 py-2 rounded-full bg-vl-light-sage text-vl-forest text-sm font-medium">
              {name}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Newsletter & Instagram */}
      <section className="vl-section vl-container bg-vl-cream">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-vl-forest text-white"
          >
            <h3 className="font-display text-xl font-semibold text-vl-gold mb-4">Newsletter</h3>
            <p className="text-white/90 text-sm mb-6">Rezepte, Tipps & Tricks, neue Produkte – melde dich an und erhalte Inspirationen.</p>
            <a href={`mailto:${CONTACT.email}?subject=Newsletter-Anmeldung`} className="inline-block px-6 py-3 rounded-full bg-vl-terracotta text-white font-medium hover:bg-vl-terra-hover transition-colors">
              Jetzt anmelden
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-vl-light-sage border border-vl-sage/20"
          >
            <h3 className="font-display text-xl font-semibold text-vl-forest mb-4">Folge uns auf Instagram</h3>
            <p className="text-vl-charcoal/80 text-sm mb-6">Täglich News, Events und Einblicke hinter die Kulissen.</p>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-vl-forest text-white font-medium hover:bg-vl-forest/90 transition-colors">
              @vegaluna.li
            </a>
          </motion.div>
        </div>
      </section>

      <section id="transition" className="vl-section vl-container bg-vl-forest text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="vl-label text-vl-gold">Eine neue Etappe</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              {DANKSAGUNG.headline}
            </h2>
            <p className="mt-4 font-display text-xl text-vl-gold/90">
              {DANKSAGUNG.subline}
            </p>
            <p className="mt-6 text-white/90">
              {DANKSAGUNG.text}
            </p>
            <p className="mt-6 text-white/80">
              {REORIENTIERUNG}
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
                { text: 'TakeAway Mittagsmenü', ok: false, ende: TAKEAWAY_ENDE },
                { text: 'Laden / Reformhaus', ok: false },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <span className={item.ok ? 'text-vl-gold' : 'text-white/50'}>
                    {item.ok ? '✓' : '✗'}
                  </span>
                  <span>{item.text}</span>
                  <span className="text-sm text-white/70">
                    {item.ok ? 'weiterhin auf Anfrage' : `endet ${item.ende ?? STANDORT_SCHLIESSUNG}`}
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
