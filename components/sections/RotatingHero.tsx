'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = [
  {
    image: '/images/1_vegaluna_vegan_event__750kb-scaled.jpg',
    label: 'Vaduz · Liechtenstein',
    title: ['Zentrum für gesunde', 'pflanzliche Ernährung.'],
    sub: 'Kochkurse · Catering · Ernährungsberatung · TakeAway',
    accent: '#C4622D',
  },
  {
    image: '/images/5_vegaluna_vegan_event_750kb-scaled.jpg',
    label: 'Workshops & Kurse',
    title: ['Lernen, kochen,', 'gemeinsam geniessen.'],
    sub: 'Kleine Gruppen · Festliches Dinner · Praxis & Theorie',
    accent: '#C9973A',
  },
  {
    image: '/images/6_vegaluna_vegan_event_750kb-scaled.jpg',
    label: 'Event Catering',
    title: ['Plant-based.', 'Alles aus einer Hand.'],
    sub: 'Gesund · Nachhaltig · Bio · Bis 100 Personen',
    accent: '#5A7A65',
  },
  {
    image: '/images/vegaluna_bio-laden.jpg',
    label: 'Mittagsmenü',
    title: ['Frisch gekocht.', 'Mo · Mi · Fr.'],
    sub: '11:30 – 13:00 Uhr · Täglich wechselndes Menü',
    accent: '#1B3A2D',
  },
  {
    image: '/images/8_vegaluna_vegan_event_bbq_750kb.jpg',
    label: 'Ernährung & Wissen',
    title: ['Pflanzlich leben.', 'Voller Energie.'],
    sub: 'B12 · Eisen · Omega-3 · Protein · Alles was du brauchst',
    accent: '#C9973A',
  },
]

const DURATION = 15000

export default function RotatingHero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [phase, setPhase] = useState<'idle' | 'in'>('idle')
  const [progress, setProgress] = useState(0)
  const startRef = useRef<number>(0)
  const rafRef = useRef<number>(0)

  const goTo = (idx: number) => {
    if (idx === current || phase !== 'idle') return
    setPrev(current)
    setCurrent(idx)
    setPhase('in')
    setProgress(0)
    startRef.current = performance.now()
  }

  const next = () => goTo((current + 1) % SLIDES.length)

  useEffect(() => {
    const tick = (now: number) => {
      if (!startRef.current) startRef.current = now
      const elapsed = now - startRef.current
      setProgress(Math.min(elapsed / DURATION, 1))
      if (elapsed < DURATION) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        next()
      }
    }
    startRef.current = performance.now()
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [current])

  useEffect(() => {
    if (phase === 'in') {
      const t = setTimeout(() => setPhase('idle'), 900)
      return () => clearTimeout(t)
    }
  }, [phase, current])

  const slide = SLIDES[current]
  const prevSlide = prev !== null ? SLIDES[prev] : null

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0e1e16]">
      {/* Background images */}
      <AnimatePresence mode="wait">
        {prevSlide && phase === 'in' && (
          <motion.div
            key={`prev-${prev}`}
            className="absolute inset-0 z-[1]"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.98 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <Image
              src={prevSlide.image}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>
        )}
        <motion.div
          key={current}
          className={`absolute inset-0 z-[2] ${phase === 'in' ? '' : ''}`}
          initial={phase === 'in' ? { opacity: 0, scale: 1.06 } : false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            'linear-gradient(160deg, rgba(14,30,22,0.55) 0%, rgba(14,30,22,0.25) 40%, rgba(14,30,22,0.72) 100%)',
        }}
      />
      {/* Grain texture */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Large Logo overlay - centered, animiert */}
      <div className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none">
        <motion.div
          key={`logo-${current}`}
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
            scale: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <Image
            src="/images/vegAluna_logo_ws-rund_570px.png"
            alt="vegAluna"
            width={380}
            height={114}
            className="w-[min(70vw,400px)] h-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 z-[6] flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-16">
        <motion.div
          key={current}
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.08 },
            },
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="flex items-center gap-2 text-white/75 text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-4"
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: slide.accent }}
            />
            {slide.label}
          </motion.span>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            <span className="block">{slide.title[0]}</span>
            <span className="block font-light italic text-white/90">{slide.title[1]}</span>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
            }}
            className="mt-4 text-white/70 text-base md:text-lg tracking-wide"
          >
            {slide.sub}
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
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

      {/* Progress ring + dots - right side */}
      <div className="absolute right-6 md:right-16 bottom-12 md:bottom-14 z-[7] flex flex-col items-end gap-5">
        <div className="relative w-11 h-11">
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="19"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
            />
            <circle
              cx="22"
              cy="22"
              r="19"
              fill="none"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 19}
              strokeDashoffset={2 * Math.PI * 19 * (1 - progress)}
              className="transition-all duration-100"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-white/60 tracking-wider">
            {String(current + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`flex items-center gap-2 p-0 bg-transparent border-none cursor-pointer group ${
                i === current ? 'active' : ''
              }`}
              aria-label={s.label}
            >
              <span className="text-[10px] font-medium tracking-widest uppercase text-white/35 group-hover:text-white/70 transition-colors hidden sm:inline">
                {s.label}
              </span>
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all ${
                  i === current ? 'w-2 h-2 bg-white/90' : 'bg-white/30'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[7] flex flex-col items-center gap-1 opacity-50 animate-bounce">
        <div className="w-px h-9 bg-gradient-to-b from-transparent to-white" />
        <div className="w-1 h-1 rounded-full bg-white" />
      </div>
    </section>
  )
}
