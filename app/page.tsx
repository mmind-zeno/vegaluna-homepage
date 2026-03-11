'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CONTACT, DANKSAGUNG, REORIENTIERUNG, STANDORT_SCHLIESSUNG, TAKEAWAY_ENDE } from '@/lib/constants'
import RotatingHero from '@/components/sections/RotatingHero'
import StatsRow from '@/components/sections/StatsRow'
import ServiceCards from '@/components/sections/ServiceCards'
import FoundersSection from '@/components/sections/FoundersSection'
import PhotoMasonryGallery from '@/components/sections/PhotoMasonryGallery'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

const FEATURED_QUOTE = {
  text: 'Der Weg zur Gesundheit führt durch die Küche, nicht durch die Apotheke.',
  author: 'Sebastian Kneipp',
}

const PARTNERS: { name: string; logo: string }[] = [
  { name: 'Ideencamp', logo: '/images/logos/logo-ideenkanal.png' },
  { name: 'Gemeinde Vaduz', logo: '/images/logos/Logo-Vaduz.jpg' },
  { name: 'Formatio', logo: '/images/logos/logo-Formatio.png' },
  { name: 'Universität Liechtenstein', logo: '/images/logos/Uni_Liechtenstein.png' },
  { name: 'SDG Allianz Liechtenstein', logo: '/images/logos/logo-sdg.png' },
  { name: 'Feldfreunde', logo: '/images/logos/logo-Feldfreunde.jpg' },
  { name: 'Liechtensteiner Gesellschaft Umweltschutz', logo: '/images/logos/Logo_Liechtensteiner_Gesellschaft_Umweltschutz-1.png' },
  { name: 'CIPRA', logo: '/images/logos/logo-cipra.jpg' },
  { name: 'Olympic Committee', logo: '/images/logos/logo-olympic_committe.png' },
]

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  const [src, setSrc] = useState(logo)
  return (
    <img
      src={src}
      alt={name}
      width={128}
      height={64}
      className="object-contain p-1"
      loading="lazy"
      onError={() => setSrc('/images/logos/placeholder.svg')}
    />
  )
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero – full viewport rotating slideshow */}
      <RotatingHero />

      {/* 2. Stats Row */}
      <StatsRow />

      {/* 3. Service Cards */}
      <ServiceCards />

      {/* 4. Founders Section */}
      <FoundersSection />

      {/* 5. Photo Masonry Gallery */}
      <PhotoMasonryGallery />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. Events – split-screen layout */}
      <section id="events" className="min-h-[85vh] grid md:grid-cols-2 scroll-mt-24">
        <div className="bg-vl-forest text-white px-8 md:px-12 py-24 md:py-32 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="vl-label text-vl-gold/80 block"
          >
            Events & Kochkurse
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mt-2"
          >
            Kochkurse & Workshops
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="origin-left"
          >
            <div className="w-16 h-px bg-vl-gold my-6" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-white/85 leading-relaxed max-w-md"
          >
            In kleinen Gruppen gemeinsam schnippeln, köcheln, lachen und festlich essen – oft bis spät in die Nacht. Von der Einführung in die pflanzliche Küche bis zu Open Fire Cooking.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-6 space-y-2 text-white/80 text-sm"
          >
            {[
              'Einsteiger- und Vertiefungskurse',
              'Open Fire & Outdoor-Kochen',
              'Festliche Dinner-Events',
              'Themen: Gesundheit, Nährstoffe, Alltagsumstellung',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-vl-gold mt-0.5">•</span>
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-8"
          >
            <Link
              href={`mailto:${CONTACT.email}?subject=Kochkurs%20Anfrage`}
              className="vl-btn-gold"
            >
              Kurs anfragen
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="relative min-h-[400px] md:min-h-auto overflow-hidden">
          <Image
            src="/images/kochkurs-workshop-handson.jpg"
            alt="vegAluna Kochkurse & Workshops"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-vl-forest/20" />
        </div>
      </section>

      {/* 8. Catering – bento photo grid */}
      <section id="catering" className="bg-vl-cream py-24 scroll-mt-24">
        <div className="vl-container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end mb-12">
            <div>
              <span className="vl-label">Event-Catering</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-vl-forest mt-2 leading-tight">
                Plant-based.<br />Alles aus einer Hand.
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-vl-charcoal/85 leading-relaxed">
                Buffets, Fingerfood und Konferenzen bis 100 Personen – 100% pflanzlich, mit Equipment, Dekoration und auf Wunsch Service. Vereinzelt nehmen wir weiterhin Anfragen entgegen.
              </p>
              <Link
                href={`mailto:${CONTACT.email}?subject=Event-Catering%20Anfrage`}
                className="vl-btn-primary inline-flex"
              >
                Catering anfragen
              </Link>
            </div>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" style={{ height: '500px' }}>
            {/* Large left tile */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden">
              <Image
                src="/images/catering-event-buffet-konferenz.jpg"
                alt="vegAluna Event-Catering"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vl-forest/50 to-transparent" />
            </div>
            {/* Small tile 1 */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/catering-buffet-fingerfood-pumpkin.jpg"
                alt="vegAluna Fingerfood"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            {/* Small tile 2 */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/catering-canapes-desserts.jpg"
                alt="vegAluna Canapés"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            {/* Text tile */}
            <div className="rounded-2xl bg-vl-forest p-5 md:p-6 text-white flex flex-col justify-center">
              <p className="font-display text-xl md:text-2xl italic font-light text-vl-gold/90 leading-snug">
                Bis 100 Gäste
              </p>
              <p className="mt-2 text-white/75 text-xs md:text-sm leading-relaxed">
                Konferenzen, Jubiläen, Firmenfeiern – alles aus einer Hand.
              </p>
            </div>
            {/* Small tile 3 */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/catering-desserts-buffet.jpg"
                alt="vegAluna Desserts"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Ernährungsberatung – simplified with strong CTA */}
      <section id="ernaehrung" className="bg-vl-forest text-white py-24 md:py-32 scroll-mt-24">
        <div className="vl-container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="vl-label text-vl-gold/80 block"
              >
                Unser Fokus heute
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl md:text-5xl font-semibold leading-tight"
              >
                Ernährungs&shy;beratung & Nährstoff-Deep-Dive
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="origin-left"
              >
                <div className="w-16 h-px bg-vl-gold" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="text-white/85 leading-relaxed"
              >
                Individuelle 1:1-Beratung, Nährstoffstrategie und Begleitung auf dem Weg zur pflanzlichen Ernährung. Klarheit bei B12, Eisen, Omega-3, Calcium und allem, was wirklich zählt.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="space-y-2 text-white/80 text-sm"
              >
                {[
                  'Individuelle 1:1-Beratungen (online oder vor Ort)',
                  'Review von Blutwerten mit deiner Ärztin / deinem Arzt',
                  'Begleitung für Familien und besondere Lebensphasen',
                  'Nährstoff-Deep-Dive ohne Dogma, mit Praxisbezug',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-vl-gold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  href={`mailto:${CONTACT.email}?subject=Anfrage%20Ern%C3%A4hrungsberatung`}
                  className="vl-btn-gold"
                >
                  Ernährungsberatung anfragen
                </Link>
                <Link href="/ernaehrung" className="vl-btn-outline">
                  Nährstoff-Guide
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.34 }}
                className="text-xs text-white/50"
              >
                Kapazitäten sind begrenzt – wir melden uns zeitnah mit möglichen Terminen.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative min-h-[380px] md:min-h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/vegaluna-outdoor-garden-event.jpg"
                alt="Ernährungsberatung vegAluna"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vl-forest/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. Featured Quote */}
      <section className="bg-vl-cream py-20 md:py-24">
        <div className="vl-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-3xl mx-auto text-center p-10 md:p-14 rounded-2xl overflow-hidden bg-vl-forest text-white"
          >
            <div className="absolute inset-0">
              <Image src="/images/vegaluna-event-display-banner.jpg" alt="" fill className="object-cover opacity-20" sizes="80vw" />
              <div className="absolute inset-0 bg-vl-forest/80" />
            </div>
            <blockquote className="relative z-10 font-display text-2xl md:text-3xl font-light italic text-white/95 leading-relaxed">
              &laquo;{FEATURED_QUOTE.text}&raquo;
            </blockquote>
            <p className="relative z-10 mt-5 text-vl-gold font-medium">— {FEATURED_QUOTE.author}</p>
          </motion.div>
        </div>
      </section>

      {/* 11. Partner logos – marquee animation */}
      <section id="partner" className="bg-vl-warm-white py-16 scroll-mt-24 overflow-hidden">
        <div className="vl-container mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="vl-label">Netzwerk</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-vl-forest mt-2">
              Unsere Kunden und Partner
            </h2>
            <p className="mt-3 text-vl-charcoal/75 max-w-xl mx-auto text-sm">
              Über die Jahre durften wir mit Institutionen, Vereinen und Unternehmen in Liechtenstein und der Region zusammenarbeiten.
            </p>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap items-center">
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 bg-vl-light-sage/60 rounded-lg overflow-hidden"
              >
                <PartnerLogo name={partner.name} logo={partner.logo} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Timeline – Chronik */}
      <section id="timeline" className="scroll-mt-24">
        <div className="relative w-full min-h-[28vh] md:min-h-[32vh] overflow-hidden">
          <Image src="/images/vegaluna-outdoor-garden-event.jpg" alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-vl-cream/95 via-vl-cream/75 to-vl-cream/50" />
          <div className="absolute inset-0 flex flex-col justify-end z-10 vl-container pb-8 md:pb-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="vl-label">Chronik</span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-vl-forest mt-2">
                Unsere vegAluna-Geschichte
              </h2>
              <p className="mt-2 text-vl-charcoal/85">
                Von der Eröffnung in Vaduz bis heute – die wichtigsten Meilensteine.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="vl-section vl-container bg-vl-cream">
          <div className="max-w-3xl mx-auto border-l border-vl-light-sage pl-6 space-y-8">
            {[
              { year: '2022', title: 'Eröffnung & erste Kochkurse', text: 'Start von vegAluna in Vaduz – die ersten Workshops und gemeinsamen Dinner-Abende entstehen. Die Idee: pflanzliche Ernährung erlebbar machen, gemeinsam kochen und geniessen.' },
              { year: '2023', title: 'TakeAway & Mittagsmenüs', text: 'Start des pflanzlichen Mittagsmenüs – Currys, Bowls und Lasagne werden zum Geheimtipp in Vaduz. Mo, Mi, Fr frisch aus der Küche; der TakeAway läuft über Jahre.' },
              { year: '2024', title: 'Grosse Events & Partnerschaften', text: 'Caterings für Konferenzen, Feiern und Institutionen, enge Zusammenarbeit mit Partnern in der Region. vegAluna wird für viele Anlässe die erste Adresse für plant-based Buffets.' },
              { year: '2025', title: 'Volles Programm & Community', text: 'Kochkurse, TakeAway, Ernährungsberatung und Events laufen auf Hochtouren – vegAluna ist Anlaufstelle für pflanzliche Ernährung in Liechtenstein und der Region.' },
              { year: '2026', title: 'Eine neue Etappe', text: 'Der Standort schliesst per ' + STANDORT_SCHLIESSUNG + '. Ernährungsberatung und ausgewählte Projekte (Workshops, Caterings) bleiben auf Anfrage bestehen.' },
            ].map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative"
              >
                <div className="absolute -left-[11px] top-1 w-2.5 h-2.5 rounded-full bg-vl-gold" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-vl-sage">{item.year}</p>
                <h3 className="font-display text-lg font-semibold text-vl-forest mt-1">{item.title}</h3>
                <p className="mt-1 text-sm text-vl-charcoal/85 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Availability checklist integrated at end of timeline */}
          <div className="max-w-3xl mx-auto mt-16 p-8 rounded-2xl bg-vl-forest text-white">
            <span className="vl-label text-vl-gold/80 block mb-4">Was bleibt buchbar?</span>
            <ul className="space-y-3">
              {[
                { text: 'Kochkurse & Workshops', ok: true },
                { text: 'Event-Catering', ok: true },
                { text: 'Ernährungsberatung', ok: true },
                { text: 'TakeAway Mittagsmenü', ok: false, ende: TAKEAWAY_ENDE },
                { text: 'Laden / Reformhaus', ok: false },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm">
                  <span className={item.ok ? 'text-vl-gold text-base' : 'text-white/40 text-base'}>{item.ok ? '✓' : '✗'}</span>
                  <span className={item.ok ? 'text-white' : 'text-white/50'}>{item.text}</span>
                  <span className="text-xs text-white/55 ml-auto">{item.ok ? 'auf Anfrage buchbar' : `endet ${item.ende ?? STANDORT_SCHLIESSUNG}`}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href={`mailto:${CONTACT.email}`} className="vl-btn-gold">
                Jetzt anfragen
              </Link>
            </div>
          </div>

          {/* Danksagung */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto mt-16 text-center space-y-3"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-vl-forest">
              {DANKSAGUNG.headline}
            </h2>
            <p className="font-display text-xl text-vl-gold/90 italic">{DANKSAGUNG.subline}</p>
            <p className="text-vl-charcoal/80 leading-relaxed max-w-2xl mx-auto">{DANKSAGUNG.text}</p>
            <p className="text-vl-charcoal/65 text-sm">{REORIENTIERUNG}</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
