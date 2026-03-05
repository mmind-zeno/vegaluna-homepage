'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface HeroSectionProps {
  backgroundImage: string
  label?: string
  title: string
  subtitle?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  height?: 'full' | 'compact'
}

export default function HeroSection({
  backgroundImage,
  label,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  height = 'full',
}: HeroSectionProps) {
  return (
    <section className={`relative w-full overflow-hidden ${height === 'full' ? 'min-h-screen' : 'min-h-[65vh]'}`}>
      <div className="absolute inset-0">
        <Image src={backgroundImage} alt="" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(27,58,45,0.85) 0%, transparent 60%)' }} />
      </div>
      <div className="relative z-10 flex flex-col justify-end min-h-[70vh] pb-16 md:pb-24 px-6 md:px-12 lg:px-16">
        <motion.div className="max-w-3xl" variants={staggerContainer} initial="hidden" animate="visible">
          {label && (
            <motion.span variants={fadeInUp} className="vl-label text-white/80 block mb-4">{label}</motion.span>
          )}
          <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p variants={fadeInUp} className="mt-4 text-white/80 text-lg md:text-xl">{subtitle}</motion.p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-8">
              {primaryCTA && (
                <Link href={primaryCTA.href} className="bg-vl-terracotta hover:bg-vl-terra-hover text-white px-8 py-3 rounded-full font-medium transition-all">
                  {primaryCTA.label}
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href} className="border border-white/50 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all">
                  {secondaryCTA.label}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white" />
        </motion.div>
      </div>
    </section>
  )
}
