'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf
    const start = performance.now()
    const duration = 1600

    const tick = (now) => {
      const elapsed = now - start
      const p = Math.min(elapsed / duration, 1)
      // Ease out expo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
      setProgress(Math.round(eased * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setVisible(false), 300)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#000' }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,245,255,0.07) 0%, transparent 70%)',
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            <div className="flex items-center gap-3">
              {/* Animated icon */}
              {/* <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="relative w-10 h-10"
              >
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <circle cx="20" cy="20" r="18" stroke="rgba(0,245,255,0.15)" strokeWidth="1.5" />
                  <circle cx="20" cy="20" r="18" stroke="url(#arc)" strokeWidth="1.5" strokeLinecap="round"
                    strokeDasharray="60 53" />
                  <defs>
                    <linearGradient id="arc" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00F5FF" />
                      <stop offset="1" stopColor="#00F5FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div
                  className="absolute inset-0 flex items-center justify-center text-xs font-bold"
                  style={{ color: '#00F5FF', fontFamily: 'var(--font-space, monospace)' }}
                >
                  W
                </div>
              </motion.div> */}
                 <Image src={"/wpx.png"} width={300} height={300} alt='wepushx Agence digital' className='w-[300px]' />
              {/* <span
                className="text-3xl font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-space, sans-serif)', color: '#fff' }}
              >
                We<span style={{ color: '#00F5FF' }}>PushX</span>
              </span> */}
            </div>

            {/* Progress bar */}
            <div className="w-48 flex flex-col items-center gap-2">
              <div className="w-full h-px bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #00F5FF, #00a8b4)',
                    width: `${progress}%`,
                    boxShadow: '0 0 8px rgba(0,245,255,0.6)',
                    transition: 'width 0.05s linear',
                  }}
                />
              </div>
              <span
                className="text-xs tabular-nums"
                style={{ color: 'rgba(0,245,255,0.6)', fontFamily: 'var(--font-space, monospace)' }}
              >
                {progress}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
