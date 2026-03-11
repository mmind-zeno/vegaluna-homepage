'use client'

import { useState, useEffect } from 'react'
import { STANDORT_SCHLIESSUNG } from '@/lib/constants'

const STORAGE_KEY = 'vl-announcement-dismissed'

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY)
    if (!dismissed) setVisible(true)
  }, [])

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="relative z-[60] bg-vl-gold/15 border-b border-vl-gold/30 text-vl-forest">
      <div className="vl-container flex items-center justify-between gap-4 py-2.5">
        <p className="flex-1 text-center text-xs md:text-sm font-medium text-vl-forest/90 tracking-wide">
          <span className="font-semibold">vegAluna</span> schliesst den Standort per Ende{' '}
          {STANDORT_SCHLIESSUNG} · Ernährungsberatung bleibt buchbar
        </p>
        <button
          onClick={dismiss}
          aria-label="Banner schließen"
          className="flex-shrink-0 p-1 rounded hover:bg-vl-forest/10 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
