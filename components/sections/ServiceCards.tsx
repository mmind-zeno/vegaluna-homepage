'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SERVICES_CARDS } from '@/lib/constants'

export default function ServiceCards() {
  return (
    <section className="bg-vl-cream py-24 md:py-32">
      <div className="vl-container">
        <div className="text-center mb-14">
          <span className="vl-label">Angebote</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-vl-forest mt-2">
            Was wir anbieten
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[500px] md:h-[560px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Background image with Ken Burns hover */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-vl-forest/90 via-vl-forest/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8">
                <span className="vl-tag mb-4 self-start">{card.badge}</span>
                <h3 className="font-display text-3xl font-semibold text-white leading-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-white/80 text-sm leading-relaxed">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex items-center gap-2 text-vl-gold font-medium text-sm group-hover:gap-3 transition-all duration-200"
                >
                  {card.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
