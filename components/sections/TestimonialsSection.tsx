'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(/\s+/)
  const initials = parts.length >= 2
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : name.slice(0, 2).toUpperCase()
  return (
    <div className="w-10 h-10 rounded-full bg-vl-light-sage flex items-center justify-center flex-shrink-0">
      <span className="text-xs font-semibold text-vl-forest tracking-wide">{initials}</span>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="bg-vl-cream py-24 md:py-32">
      <div className="vl-container">
        <div className="text-center mb-14">
          <span className="vl-label">Stimmen</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-vl-forest mt-2">
            Was unsere Gäste sagen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 rounded-2xl bg-vl-warm-white border border-vl-light-sage/60 shadow-card flex flex-col gap-6"
            >
              {/* Quote mark */}
              <div className="text-vl-gold/40 font-display text-6xl leading-none select-none" aria-hidden>
                &ldquo;
              </div>

              <blockquote className="font-display text-2xl italic text-vl-forest leading-snug -mt-8">
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-vl-light-sage/60">
                <Initials name={t.name} />
                <div>
                  <p className="text-sm font-semibold text-vl-forest">{t.name}</p>
                  <p className="text-xs text-vl-sage">{t.context}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
