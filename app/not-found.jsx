'use client'
// ── Custom 404 — WePushX ──────────────────────────────────────────────────────

import Link from 'next/link'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const links = [
  { href: '/',          label: 'Accueil',          icon: '🏠' },
  { href: '/services',  label: 'Nos services',      icon: '⚙️' },
  { href: '/blog',      label: 'Blog',              icon: '📝' },
  { href: '/contact',   label: 'Audit',     icon: '🚀' },
]

// Floating particle
function Particle({ x, y, size, delay, duration }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: 'rgba(0,245,255,0.15)' }}
      animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

const particles = [
  { x: 10, y: 20, size: 6, delay: 0,    duration: 4 },
  { x: 85, y: 15, size: 4, delay: 0.5,  duration: 5 },
  { x: 70, y: 70, size: 8, delay: 1,    duration: 3.5 },
  { x: 20, y: 75, size: 5, delay: 1.5,  duration: 4.5 },
  { x: 50, y: 10, size: 3, delay: 0.8,  duration: 6 },
  { x: 90, y: 50, size: 6, delay: 2,    duration: 4 },
  { x: 5,  y: 50, size: 4, delay: 0.3,  duration: 5.5 },
  { x: 60, y: 85, size: 5, delay: 1.2,  duration: 4.2 },
]

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,245,255,0.06) 0%, transparent 65%)' }}
      />

      {/* Floating particles */}
      {mounted && particles.map((p, i) => <Particle key={i} {...p} />)}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">

        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-6 select-none"
        >
          {/* Shadow number */}
          <span
            className="absolute inset-0 font-display font-black flex items-center justify-center"
            style={{
              fontSize: 'clamp(8rem, 22vw, 16rem)',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(0,245,255,0.08)',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            404
          </span>
          {/* Main number */}
          <span
            className="relative font-display font-black block"
            style={{
              fontSize: 'clamp(8rem, 22vw, 16rem)',
              lineHeight: 1,
              background: 'linear-gradient(135deg, #00F5FF 0%, rgba(255,255,255,0.9) 40%, #00F5FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(0,245,255,0.25))',
            }}
          >
            404
          </span>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-24 mx-auto mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, #00F5FF, transparent)' }}
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-display font-black text-2xl md:text-3xl mb-4"
          style={{ color: '#fff' }}
        >
          Cette page n&apos;existe pas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base leading-relaxed mb-10"
          style={{ color: '#666' }}
        >
          La page que vous cherchez a peut-être été déplacée, supprimée ou n&apos;a jamais existé. Pas de panique — voici où aller.
        </motion.p>

        {/* Nav links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
        >
          {links.map((link, i) => (
            <motion.div
              key={link.href}
              whileHover={{ y: -4, borderColor: 'rgba(0,245,255,0.35)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={link.href}
                className="flex flex-col items-center gap-2 py-4 px-3 rounded-2xl transition-colors"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="text-xs font-semibold" style={{ color: '#aaa' }}>{link.label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <Link href="/" className="btn-primary">
            Retour à l&apos;accueil
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Subtle bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 text-xs"
          style={{ color: '#333' }}
        >
          Erreur 404 · <a href="mailto:contact@wepushx.com" style={{ color: '#444' }}>Signaler un problème</a>
        </motion.p>
      </div>
    </main>
  )
}
