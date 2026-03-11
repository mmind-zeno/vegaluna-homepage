'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { DANKSAGUNG, REORIENTIERUNG, STANDORT_SCHLIESSUNG } from '@/lib/constants'

const SLIDES = [
  {
    image: '/images/vegaluna-event-display-banner.jpg',
    label: 'Vaduz · Liechtenstein',
    title: ['Zentrum für gesunde', 'pflanzliche Ernährung.'],
    sub: 'Kochkurse · Catering · Ernährungsberatung · TakeAway – happy food, happy life.',
    extra: 'Wir verbinden Genuss, Gesundheit und Nachhaltigkeit in der Region.',
    accent: '#C4622D',
  },
  {
    image: '/images/kochkurs-workshop-handson.jpg',
    label: 'Workshops & Kurse',
    title: ['Lernen, kochen,', 'gemeinsam geniessen.'],
    sub: 'Kleine Gruppen · Festliches Dinner · Praxis & Theorie.',
    extra: 'Einführung plant-based, Open Fire Cooking oder Vertiefung Gesundheit – auf Anfrage.',
    accent: '#C9973A',
  },
  {
    image: '/images/catering-event-buffet-konferenz.jpg',
    label: 'Event Catering',
    title: ['Plant-based.', 'Alles aus einer Hand.'],
    sub: 'Gesund · Nachhaltig · Bio · Bis 100 Personen.',
    extra: 'Von der Planung bis zur Durchführung – wir verwandeln jeden Anlass.',
    accent: '#5A7A65',
  },
  {
    image: '/images/takeaway-curry-plate.jpg',
    label: 'Mittagsmenü',
    title: ['Frisch gekocht.', 'Mo · Mi · Fr.'],
    sub: '11:30 – 13:00 Uhr · Täglich wechselndes Menü.',
    extra: 'TakeAway endet bald – Standort schliesst per ' + STANDORT_SCHLIESSUNG + '.',
    accent: '#1B3A2D',
  },
  {
    image: '/images/vegaluna-outdoor-garden-event.jpg',
    label: 'Ernährung & Wissen',
    title: ['Pflanzlich leben.', 'Voller Energie.'],
    sub: 'B12 · Eisen · Omega-3 · Protein · Alles was du brauchst.',
    extra: 'Unser Nährstoff-Guide und persönliche Beratung auf Anfrage.',
    accent: '#C9973A',
  },
]

const DURATION = 7000
const TRANSITION_MS = 1800

export default function RotatingHero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [phase, setPhase] = useState<'idle' | 'in'>('idle')
  const [progress, setProgress] = useState(0)
  const startRef = useRef<number>(0)
  const rafRef = useRef<number>(0)
  const phaseRef = useRef<'idle' | 'in'>('idle')
  const currentRef = useRef(0)

  const goTo = (idx: number) => {
    if (idx === current || phaseRef.current !== 'idle') return
    setPrev(current)
    setCurrent(idx)
    setPhase('in')
    setProgress(0)
    startRef.current = performance.now()
  }

  useEffect(() => {
    currentRef.current = current
  }, [current])

  useEffect(() => {
    phaseRef.current = phase
  }, [phase])

  useEffect(() => {
    const tick = (now: number) => {
      if (!startRef.current) startRef.current = now
      const elapsed = now - startRef.current
      setProgress(Math.min(elapsed / DURATION, 1))
      rafRef.current = requestAnimationFrame(tick)
    }
    startRef.current = performance.now()
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [current])

  useEffect(() => {
    const id = window.setInterval(() => {
      if (phaseRef.current !== 'idle') return
      const nextIdx = (currentRef.current + 1) % SLIDES.length
      setPrev(currentRef.current)
      setCurrent(nextIdx)
      setPhase('in')
      setProgress(0)
      startRef.current = performance.now()
      currentRef.current = nextIdx
    }, DURATION)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    if (phase === 'in') {
      const t = setTimeout(() => setPhase('idle'), TRANSITION_MS)
      return () => clearTimeout(t)
    }
  }, [phase, current])

  useEffect(() => {
    if (phase === 'idle' && prev !== null) setPrev(null)
  }, [phase, prev])

  const slide = SLIDES[current]
  const prevSlide = prev !== null ? SLIDES[prev] : null

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0e1e16]">
      {/* Background images */}
      <motion.div
        key={`current-${current}`}
        className="absolute inset-0 z-[1]"
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: TRANSITION_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image src={slide.image} alt="" fill className="object-cover" sizes="100vw" priority />
      </motion.div>

      <AnimatePresence mode="sync">
        {prevSlide && (
          <motion.div
            key={`prev-${prev}`}
            className="absolute inset-0 z-[2]"
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === 'in' ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: TRANSITION_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={prevSlide.image} alt="" fill className="object-cover" sizes="100vw" priority />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay gradient – klare Lesbarkeit, eine Fokusfläche unten links */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            'linear-gradient(165deg, rgba(14,30,22,0.5) 0%, rgba(14,30,22,0.2) 35%, rgba(14,30,22,0.78) 70%, rgba(14,30,22,0.88) 100%)',
        }}
      />
      {/* Grain texture – dezent */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 z-[5] flex flex-col justify-between pt-20 md:pt-24 pb-16 md:pb-24 px-6 md:px-12 lg:px-16">
        {/* Schliessung & Dank – auf allen Headern gross sichtbar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="bg-vl-forest/90 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-5 md:px-8 md:py-6 shadow-xl">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
              VegAluna verabschiedet sich von der Location.
            </p>
            <p className="mt-4 font-display text-xl md:text-2xl lg:text-3xl text-vl-gold font-semibold">
              Vielen vielen Dank an alle – für die wunderbare Zeit mit euch.
            </p>
            <p className="mt-4 text-base md:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed">
              {DANKSAGUNG.text}
            </p>
            <p className="mt-4 text-white/95 text-sm md:text-base font-medium">
              {REORIENTIERUNG} Standort schliesst per {STANDORT_SCHLIESSUNG}.
            </p>
            <Link
              href="#transition"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-vl-gold text-vl-forest font-semibold hover:bg-vl-gold/90 transition-colors"
            >
              Mehr erfahren
            </Link>
          </div>
        </motion.div>

        {/* Slide-spezifischer Inhalt – fliegt beim Wechsel ein */}
        <motion.div
          key={current}
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.05 },
            },
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-3"
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: slide.accent }}
            />
            {slide.label}
          </motion.span>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
          >
            <span className="block">{slide.title[0]}</span>
            <span className="block font-light italic text-white/95">{slide.title[1]}</span>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.08 } },
            }}
            className="mt-4 text-white/90 text-xl md:text-2xl lg:text-3xl tracking-wide max-w-2xl"
          >
            {slide.sub}
          </motion.p>
          {slide.extra && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.12 } },
              }}
              className="mt-2 text-white/75 text-base md:text-lg max-w-xl"
            >
              {slide.extra}
            </motion.p>
          )}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.18 } },
            }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-white transition-all hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: slide.accent }}
            >
              Jetzt entdecken
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                <path
                  d="M2 7h10M7 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-white/90 border border-white/40 hover:bg-white/10 hover:border-white/60 transition-all"
            >
              Mehr erfahren
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Slider-Steuerung: nur kompakte Dots unten mittig, kein vertikales Panel */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-12 z-[6] flex items-center gap-3">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="p-1 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={s.label}
          >
            <span
              className={`block rounded-full transition-all ${
                i === current
                  ? 'w-2.5 h-2.5 bg-white'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Progress-Balken unten (optional, dezent) */}
      <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-white/10 z-[6]" aria-hidden>
        <div
          className="h-full bg-white/50 transition-all duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Scroll-Hinweis */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[6] flex flex-col items-center gap-1 opacity-40 animate-bounce pointer-events-none">
        <div className="w-px h-8 bg-white" />
      </div>
    </section>
  )
}
