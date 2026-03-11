'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { STANDORT_SCHLIESSUNG } from '@/lib/constants'

const SLIDES = [
  {
    image: '/images/vegaluna-event-display-banner.jpg',
    label: 'Vier Jahre vegAluna',
    title: ['happy food,', 'happy life.'],
    sub: 'Ein Rückblick auf Kochkurse, Caterings, TakeAway und Ernährungsberatung in Vaduz.',
    cta: { label: 'Jetzt entdecken', href: '/#events' },
    accent: '#C4622D',
  },
  {
    image: '/images/kochkurs-workshop-handson.jpg',
    label: 'Kochkurse & Workshops',
    title: ['Lernen, kochen,', 'gemeinsam geniessen.'],
    sub: 'Hands-on Kurse, Open Fire Cooking, Theorie & Praxis – über vier Jahre hinweg.',
    cta: { label: 'Kurs anfragen', href: '/#events' },
    accent: '#C9973A',
  },
  {
    image: '/images/catering-event-buffet-konferenz.jpg',
    label: 'Event-Catering',
    title: ['Plant-based Catering,', 'das in Erinnerung bleibt.'],
    sub: 'Buffets, Fingerfood und Business-Events – pflanzlich und stimmungsvoll inszeniert.',
    cta: { label: 'Catering anfragen', href: '/#catering' },
    accent: '#5A7A65',
  },
  {
    image: '/images/event-catering-hall-buffet.jpg',
    label: 'Grosse Events',
    title: ['Buffets, die in', 'Erinnerung bleiben.'],
    sub: 'Konferenzen, Firmenfeiern, Jubiläen – voll pflanzlich und stimmungsvoll inszeniert.',
    cta: { label: 'Mehr erfahren', href: '/about' },
    accent: '#5A7A65',
  },
  {
    image: '/images/takeaway-curry-plate.jpg',
    label: 'TakeAway & Mittagsmenüs',
    title: ['Mittagsmenüs,', 'die viele begeistert haben.'],
    sub: 'Currys, Bowls, Lasagne und mehr – mehrere Jahre lang im Herzen von Vaduz.',
    cta: { label: 'Unsere Geschichte', href: '/about' },
    accent: '#1B3A2D',
  },
  {
    image: '/images/vegaluna-outdoor-garden-event.jpg',
    label: 'Ernährungsberatung',
    title: ['Pflanzlich leben,', 'gut versorgt bleiben.'],
    sub: 'Nährstoff-Deep-Dive, individuelle Beratung und Begleitung auf deinem Weg.',
    cta: { label: 'Beratung anfragen', href: '/#ernaehrung' },
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

  useEffect(() => { currentRef.current = current }, [current])
  useEffect(() => { phaseRef.current = phase }, [phase])

  // Progress bar
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

  // Auto-advance
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

  // Phase transitions
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
      {/* Current background image with Ken Burns effect */}
      <motion.div
        key={`current-${current}`}
        className="absolute inset-0 z-[1]"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: TRANSITION_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Inner wrapper for continuous slow Ken Burns zoom */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.06] }}
          transition={{ duration: 8, ease: 'linear' }}
        >
          <Image src={slide.image} alt="" fill className="object-cover" sizes="100vw" priority />
        </motion.div>
      </motion.div>

      {/* Previous image fades out */}
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
            <Image src={prevSlide.image} alt="" fill className="object-cover" sizes="100vw" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Radial vignette protecting text on left + bottom gradient */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 100% at 0% 100%, rgba(14,30,22,0.82) 0%, rgba(14,30,22,0.38) 55%, rgba(14,30,22,0.18) 100%), linear-gradient(to top, rgba(14,30,22,0.70) 0%, rgba(14,30,22,0.10) 50%, rgba(14,30,22,0.22) 100%)',
        }}
      />

      {/* Subtle grain */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-[5] flex flex-col justify-center items-start pt-28 md:pt-32 pb-24 px-6 md:px-12 lg:px-16">
        <motion.div
          key={current}
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
        >
          {/* Slide label */}
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -32 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            className="flex items-center gap-2 text-white/75 text-xs md:text-sm font-medium tracking-[0.22em] uppercase mb-4"
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: slide.accent }}
            />
            {slide.label}
          </motion.span>

          {/* Main headline */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05]"
          >
            <span className="block">{slide.title[0]}</span>
            <span className="block font-light italic text-white/90">{slide.title[1]}</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.08 } },
            }}
            className="mt-5 text-white/85 text-lg md:text-xl lg:text-2xl max-w-xl leading-relaxed"
          >
            {slide.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.18 } },
            }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <Link
              href={slide.cta.href}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-white transition-all hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: slide.accent }}
            >
              {slide.cta.label}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" aria-hidden>
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/about" className="vl-btn-outline">
              Über vegAluna
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Dot navigation */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-12 z-[6] flex items-center gap-3">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="p-1 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={s.label}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2 bg-white'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-white/10 z-[6]" aria-hidden>
        <div
          className="h-full bg-white/50 transition-none"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Logo overlay – animated, top-right */}
      <motion.div
        className="absolute top-28 right-8 md:right-14 z-[6] pointer-events-none"
        initial={{ opacity: 0, scale: 0.82, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/images/vegAluna_logo_ws-rund_570px.png"
            alt="vegAluna"
            width={120}
            height={120}
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 drop-shadow-2xl opacity-90"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Farewell overlay block – bottom-right corner */}
      <motion.div
        className="absolute bottom-20 right-6 md:right-14 z-[6] max-w-xs md:max-w-sm"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      >
        <div className="rounded-2xl overflow-hidden backdrop-blur-md border border-white/20"
          style={{ background: 'rgba(14,30,22,0.72)' }}
        >
          <div className="px-5 py-4 border-b border-white/10">
            <span className="text-[10px] uppercase tracking-[0.22em] text-vl-gold font-medium">Standort · Ende Mai 2026</span>
          </div>
          <div className="px-5 py-4">
            <p className="font-display text-xl md:text-2xl italic text-white leading-snug mb-2">
              Danke für vier wunderbare Jahre.
            </p>
            <p className="text-white/75 text-xs md:text-sm leading-relaxed">
              Unzählige Kochkurse, Dinners und Begegnungen – von Herzen. Der Standort schliesst, die Leidenschaft bleibt: Kochkurse, Catering und Ernährungsberatung auf Anfrage buchbar.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 mt-3 text-vl-gold text-xs font-medium hover:opacity-80 transition-opacity"
            >
              Unsere Geschichte
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[6] flex flex-col items-center gap-1 opacity-40 animate-bounce pointer-events-none">
        <div className="w-px h-8 bg-white" />
      </div>
    </section>
  )
}
