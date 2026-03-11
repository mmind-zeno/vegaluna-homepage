'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type PageHeroProps = {
  image: string
  imageAlt: string
  title: string
  subtitle?: string
  extra?: string
}

export default function PageHero({ image, imageAlt, title, subtitle, extra }: PageHeroProps) {
  return (
    <section className="relative min-h-[45vh] flex items-end">
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-vl-forest/65" />
      </div>
      <div className="relative z-10 vl-container w-full py-16 md:py-20">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-tight"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
              }}
              className="mt-4 text-white/95 text-xl md:text-2xl lg:text-3xl font-light max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
          {extra && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
              }}
              className="mt-3 text-white/80 text-base md:text-lg max-w-xl"
            >
              {extra}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
