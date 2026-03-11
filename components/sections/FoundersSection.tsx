'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FoundersSection() {
  return (
    <section className="bg-vl-cream py-24 md:py-32">
      <div className="vl-container">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Image – left 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 relative min-h-[380px] md:min-h-[520px] rounded-2xl overflow-hidden shadow-card"
          >
            <Image
              src="/images/6_vegaluna_vegan_event_750kb-scaled.jpg"
              alt="Fränzi & Zeno – vegAluna"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 41vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vl-forest/40 to-transparent pointer-events-none" />
          </motion.div>

          {/* Text – right 7 cols */}
          <div className="md:col-span-7 space-y-5">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="vl-label block"
            >
              Das Team hinter vegAluna
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-vl-forest leading-tight"
            >
              Fränzi &amp; Zeno
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="origin-left"
            >
              <div className="vl-divider" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-vl-charcoal/90 leading-relaxed text-base md:text-lg"
            >
              Hinter vegAluna stehen Fränzi und Zeno – zwei Leidenschaftliche, die glauben, dass pflanzliches Essen die Welt ein bisschen besser machen kann. Mit Kochkursen, Caterings und Ernährungsberatung haben wir seit 2022 Hunderte von Menschen in Liechtenstein und der Region begeistert.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-vl-charcoal/75 leading-relaxed"
            >
              Vier Jahre voller gemeinsamer Kochabende, unvergesslicher Events und echter Begegnungen. Unser Herz schlägt für pflanzliche Ernährung – und das bleibt auch nach dem Ende des Standorts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              <Link href="/about" className="vl-btn-primary mt-2">
                Unsere Geschichte
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
