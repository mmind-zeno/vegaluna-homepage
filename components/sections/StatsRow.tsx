'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { STATS } from '@/lib/constants'

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(ease * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-6xl md:text-7xl italic font-semibold tabular-nums">
      {display}{suffix}
    </span>
  )
}

export default function StatsRow() {
  return (
    <section className="bg-vl-forest text-white py-16 md:py-20">
      <div className="vl-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <span className="text-xs uppercase tracking-widest text-vl-gold/80 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
