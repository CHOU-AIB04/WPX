'use client'
import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data/home'

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#f59e0b" style={{ color: '#f59e0b' }} />
      ))}
    </div>
  )
}

function TestimonialCard({ t }) {
  return (
    <div
      className="relative flex-shrink-0 w-[340px] md:w-[380px] rounded-2xl p-6 flex flex-col gap-4 mx-3"
      style={{
        background: 'rgba(12,12,12,0.9)',
        border: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Accent top line */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${t.color}60, transparent)` }}
      />

      {/* Quote icon */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center"
        style={{ background: `${t.color}14`, border: `1px solid ${t.color}30` }}
      >
        <Quote size={15} style={{ color: t.color }} />
      </div>

      {/* Stars */}
      <StarRating count={t.rating} />

      {/* Quote text */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: '#aaa' }}>
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Result pill */}
      <div
        className="self-start text-xs font-semibold px-3 py-1.5 rounded-full"
        style={{
          background: `${t.color}12`,
          border: `1px solid ${t.color}30`,
          color: t.color,
        }}
      >
        ✦ {t.result}
      </div>

      {/* Author */}
      <div
        className="flex items-center gap-3 pt-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
          style={{
            background: `linear-gradient(135deg, ${t.color}30, ${t.color}10)`,
            border: `1px solid ${t.color}40`,
            color: t.color,
            fontFamily: 'var(--font-space, monospace)',
          }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-white leading-tight">{t.name}</p>
          <p className="text-xs leading-tight mt-0.5" style={{ color: '#555' }}>
            {t.role} · {t.company}
          </p>
          <p className="text-xs mt-0.5" style={{ color: '#444' }}>{t.sector}</p>
        </div>
      </div>
    </div>
  )
}

/* Duplicated rows for seamless infinite scroll */
const row1 = testimonials.slice(0, 3)
const row2 = testimonials.slice(3, 6)

export default function TestimonialsSection() {
  return (
    <section className="section overflow-hidden noise relative" style={{ background: '#000' }}>
      {/* Header */}
      <div className="wrap mb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10"
        >
          <div>
            <span className="badge mb-4">Témoignages</span>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-space, sans-serif)' }}
            >
              Ce que disent{' '}
              <span className="text-gradient">nos clients</span>
            </h2>
          </div>
          <p className="text-base max-w-sm leading-relaxed md:text-right" style={{ color: '#555' }}>
            Des PME marocaines qui ont choisi WePushX pour scaler leur acquisition client.
          </p>
        </motion.div>
      </div>

      {/* Marquee row 1 — scroll left */}
      <div className="relative">
        {/* Edge fade left */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #000, transparent)' }}
        />
        {/* Edge fade right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #000, transparent)' }}
        />

        <motion.div
          className="flex"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ width: 'max-content' }}
        >
          {[...row1, ...row1, ...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Marquee row 2 — scroll right */}
      <div className="relative mt-4">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #000, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #000, transparent)' }}
        />

        <motion.div
          className="flex"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ width: 'max-content' }}
        >
          {[...row2, ...row2, ...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Bottom trust bar */}
      <div className="wrap mt-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 text-sm pt-20"
          style={{ color: '#444' }}
        >
          {[
            { val: '50+', label: 'clients satisfaits' },
            { val: '100%', label: 'avis positifs' },
            { val: '60j', label: 'garantie résultats' },
            { val: '24h', label: 'réponse garantie' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span
                className="font-bold tabular-nums"
                style={{ color: '#00F5FF', fontFamily: 'var(--font-space, monospace)', fontSize: '1.1rem' }}
              >
                {item.val}
              </span>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
