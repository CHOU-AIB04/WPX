'use client'
import { motion } from 'motion/react'
import { logos } from '@/lib/data/shared'

function LogoChip({ logo }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-3 px-5 py-3 mx-3 rounded-xl"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Monogram badge */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold shrink-0"
        style={{
          background: 'rgba(0,245,255,0.08)',
          border: '1px solid rgba(0,245,255,0.2)',
          color: '#00F5FF',
          fontFamily: 'var(--font-space, monospace)',
          letterSpacing: '0.05em',
        }}
      >
        {logo.abbr}
      </div>
      <div>
        <p className="text-sm font-semibold text-white leading-tight whitespace-nowrap">{logo.name}</p>
        <p className="text-[10px] whitespace-nowrap" style={{ color: '#444' }}>{logo.sector}</p>
      </div>
    </div>
  )
}

export default function LogosBar({ background = '#000' }) {
  const doubled = [...logos, ...logos]

  return (
    <div
      className="relative overflow-hidden py-8"
      style={{ background }}
      aria-label="Clients WePushX"
    >
      {/* Section label */}
      <p
        className="text-center text-xs uppercase tracking-[0.2em] font-semibold mb-6"
        style={{ color: '#333' }}
      >
        Ils nous font confiance
      </p>

      {/* Edge fades */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${background}, transparent)` }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${background}, transparent)` }}
      />

      <motion.div
        className="flex"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{ width: 'max-content' }}
      >
        {doubled.map((logo, i) => (
          <LogoChip key={`logo-${i}`} logo={logo} />
        ))}
      </motion.div>
    </div>
  )
}
