'use client'
// ── Thank You page — WePushX ──────────────────────────────────────────────────

import Link from 'next/link'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const steps = [
  {
    icon: '📩',
    time: 'Maintenant',
    title: 'Demande reçue',
    desc: 'Votre message est bien enregistré dans notre système.',
    done: true,
  },
  {
    icon: '⚡',
    time: 'Sous 24h',
    title: 'On vous contacte',
    desc: 'Un expert WePushX vous contacte par email ou WhatsApp.',
    done: false,
  },
  {
    icon: '🎯',
    time: '30 minutes',
    title: 'Appel de consultation',
    desc: 'On analyse votre présence digitale et vos objectifs.',
    done: false,
  },
  {
    icon: '🚀',
    time: 'J+3 à J+7',
    title: 'Proposition sur mesure',
    desc: 'Plan d\'action personnalisé avec ROI estimé et calendrier.',
    done: false,
  },
]

export default function MerciPage() {
  const [tick, setTick] = useState(0)

  // Animate the checkmark ring
  useEffect(() => {
    const t = setInterval(() => setTick(p => p + 1), 50)
    return () => clearInterval(t)
  }, [])

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#000', paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 text-center">

        {/* Animated check circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center mb-8"
        >
          <div className="relative">
            {/* Pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full"
              style={{ background: 'rgba(0,245,255,0.15)' }}
            />
            {/* Outer ring */}
            <motion.div
              initial={{ rotate: -90 }}
              animate={{ rotate: 270 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background: 'conic-gradient(#00F5FF 100%, rgba(0,245,255,0.1) 0%)',
                padding: '3px',
              }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{ background: '#000' }}
              >
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  width="40" height="40" viewBox="0 0 40 40" fill="none"
                >
                  <motion.path
                    d="M10 21L17 28L30 14"
                    stroke="#00F5FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
                  />
                </motion.svg>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#00F5FF' }}>
            Message bien reçu
          </p>
          <h1
            className="font-display font-black text-3xl md:text-5xl mb-4"
            style={{ color: '#fff' }}
          >
            Merci, on revient
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #00F5FF 0%, #fff 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              vers vous très vite.
            </span>
          </h1>
          <p className="text-base mb-12" style={{ color: '#666' }}>
            Un expert WePushX va analyser votre demande et vous contacter sous 24h ouvrées.
          </p>
        </motion.div>

        {/* Next steps timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="rounded-2xl p-6 mb-10 text-left"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-6 text-center" style={{ color: '#444' }}>
            Ce qui va se passer
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-5 bottom-5 w-px"
              style={{ background: 'linear-gradient(180deg, #00F5FF, rgba(0,245,255,0.1))' }}
            />

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  className="flex gap-5 items-start"
                >
                  {/* Icon dot */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 relative z-10"
                    style={{
                      background: step.done ? 'rgba(0,245,255,0.15)' : 'rgba(255,255,255,0.04)',
                      border: step.done ? '1px solid rgba(0,245,255,0.4)' : '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-semibold text-sm" style={{ color: step.done ? '#fff' : '#aaa' }}>
                        {step.title}
                      </p>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={{
                          background: step.done ? 'rgba(0,245,255,0.12)' : 'rgba(255,255,255,0.04)',
                          color: step.done ? '#00F5FF' : '#555',
                        }}
                      >
                        {step.time}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: '#555' }}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/" className="btn-primary">
            Retour à l&apos;accueil
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
            style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#888' }}
          >
            Découvrir nos services
          </Link>
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 text-xs"
          style={{ color: '#333' }}
        >
          Une question urgente ?{' '}
          <a href="mailto:contact@wepushx.com" style={{ color: '#444' }}>
            contact@wepushx.com
          </a>
        </motion.p>

      </div>
    </main>
  )
}
