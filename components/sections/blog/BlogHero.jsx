'use client'
import { motion } from 'motion/react'

export default function BlogHero({ activeCategory, children }) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden noise" style={{ background: '#000' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00F5FF 0%, transparent 70%)' }}
        />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>
      <div className="wrap relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="badge mb-5">Blog Marketing Digital</span>
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight mb-5"
            style={{ fontFamily: 'var(--font-space, sans-serif)' }}
          >
            Ressources pour{' '}
            <span className="text-gradient">dominer le digital</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: '#666' }}>
            Guides pratiques, études de cas et stratégies éprouvées pour les PME marocaines.
            Publiés chaque semaine par l&apos;équipe WePushX.
          </p>
          {children}
        </motion.div>
      </div>
    </section>
  )
}
