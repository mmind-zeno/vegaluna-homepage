'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { DANKSAGUNG, REORIENTIERUNG, STANDORT_SCHLIESSUNG } from '@/lib/constants'

export type RotatingPageHeroSlide = {
  image: string
  imageAlt: string
  title: string
  subtitle?: string
  extra?: string
}

const ROTATE_DURATION_MS = 7000
const TRANSITION_MS = 1800

type RotatingPageHeroProps = {
  slides: RotatingPageHeroSlide[]
}

export default function RotatingPageHero({ slides }: RotatingPageHeroProps) {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [phase, setPhase] = useState<'idle' | 'in'>('idle')
  const phaseRef = useRef<'idle' | 'in'>('idle')
  const currentRef = useRef(0)

  const goTo = (idx: number) => {
    if (idx === current || phaseRef.current !== 'idle') return
    setPrev(current)
    setCurrent(idx)
    setPhase('in')
    currentRef.current = idx
  }

  useEffect(() => {
    currentRef.current = current
  }, [current])

  useEffect(() => {
    phaseRef.current = phase
  }, [phase])

  useEffect(() => {
    if (slides.length <= 1) return
    const id = window.setInterval(() => {
      if (phaseRef.current !== 'idle') return
      const nextIdx = (currentRef.current + 1) % slides.length
      setPrev(currentRef.current)
      setCurrent(nextIdx)
      setPhase('in')
    }, ROTATE_DURATION_MS)
    return () => window.clearInterval(id)
  }, [slides.length])

  useEffect(() => {
    if (phase === 'in') {
      const t = setTimeout(() => setPhase('idle'), TRANSITION_MS)
      return () => clearTimeout(t)
    }
  }, [phase, current])

  useEffect(() => {
    if (phase === 'idle' && prev !== null) setPrev(null)
  }, [phase, prev])

  const slide = slides[current]
  const prevSlide = prev !== null ? slides[prev] : null

  return (
    <section className="relative min-h-[55vh] md:min-h-[60vh] flex flex-col justify-end overflow-hidden bg-[#0e1e16]">
      {/* Background images */}
      <motion.div
        key={`current-${current}`}
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: TRANSITION_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image src={slide.image} alt={slide.imageAlt} fill className="object-cover" sizes="100vw" priority />
      </motion.div>

      <AnimatePresence mode="sync">
        {prevSlide && (
          <motion.div
            key={`prev-${prev}`}
            className="absolute inset-0 z-[0]"
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === 'in' ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: TRANSITION_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={prevSlide.image} alt="" fill className="object-cover" sizes="100vw" priority />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 z-[1] bg-vl-forest/60 pointer-events-none" />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(14,30,22,0.3) 0%, rgba(14,30,22,0.5) 40%, rgba(14,30,22,0.85) 100%)',
        }}
      />

      <div className="relative z-10 vl-container w-full py-12 md:py-16 px-4 md:px-6">
        {/* Schliessung & Dank – auf allen Headern gross sichtbar */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 max-w-4xl"
        >
          <div className="bg-vl-forest/90 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4 md:px-6 md:py-5 shadow-xl">
            <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white">
              VegAluna verabschiedet sich von der Location.
            </p>
            <p className="mt-2 font-display text-lg md:text-xl lg:text-2xl text-vl-gold font-semibold">
              Vielen vielen Dank an alle – für die wunderbare Zeit mit euch.
            </p>
            <p className="mt-2 text-sm md:text-base text-white/90 max-w-2xl leading-relaxed">
              {DANKSAGUNG.text} {REORIENTIERUNG} Standort schliesst per {STANDORT_SCHLIESSUNG}.
            </p>
            <Link
              href="/#transition"
              className="inline-block mt-4 px-5 py-2.5 rounded-full bg-vl-gold text-vl-forest font-semibold text-sm hover:bg-vl-gold/90 transition-colors"
            >
              Mehr erfahren
            </Link>
          </div>
        </motion.div>

        {/* Slide-Text – wechselt und fliegt ein */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0, y: 46 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 } },
              exit: { opacity: 0, y: -18, transition: { duration: 0.25 } },
            }}
            className="max-w-4xl"
          >
            <motion.h1
              variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45 } } }}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight"
            >
              {slide.title}
            </motion.h1>
            {slide.subtitle && (
              <motion.p
                variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.05 } } }}
                className="mt-3 text-white/95 text-lg md:text-xl lg:text-2xl font-light max-w-2xl"
              >
                {slide.subtitle}
              </motion.p>
            )}
            {slide.extra && (
              <motion.p
                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.08 } } }}
                className="mt-2 text-white/80 text-base md:text-lg max-w-xl"
              >
                {slide.extra}
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        {slides.length > 1 && (
          <div className="flex items-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="p-1 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label={`Slide ${i + 1}`}
              >
                <span
                  className={`block rounded-full transition-all ${
                    i === current ? 'w-2.5 h-2.5 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
