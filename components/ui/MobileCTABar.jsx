'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, X } from 'lucide-react'

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return
    const onScroll = () => {
      if (window.scrollY > 300) setVisible(true)
      else setVisible(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [dismissed])

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          key="mobile-cta"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <div
            className="flex items-center gap-3 p-3 rounded-2xl"
            style={{
              background: 'rgba(8,8,8,0.95)',
              border: '1px solid rgba(0,245,255,0.25)',
              boxShadow: '0 0 30px rgba(0,245,255,0.15), 0 8px 32px rgba(0,0,0,0.6)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {/* Pulse dot */}
            <div className="shrink-0 w-2 h-2 rounded-full bg-[#00F5FF] animate-pulse" />

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white leading-tight">Audit Gratuit 30 min</p>
              <p className="text-[10px] truncate" style={{ color: '#555' }}>Sans engagement · Réponse sous 24h</p>
            </div>

            {/* CTA button */}
            <Link
              href="/contact"
              className="shrink-0 flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl"
              style={{ background: '#00F5FF', color: '#000' }}
            >
              Réserver
              <ArrowRight size={12} />
            </Link>

            {/* Dismiss */}
            <button
              onClick={() => setDismissed(true)}
              className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full"
              style={{ background: 'rgba(255,255,255,0.06)', color: '#555' }}
              aria-label="Fermer"
            >
              <X size={12} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
