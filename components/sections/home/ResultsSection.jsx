'use client'
import { motion } from 'motion/react'
import { results } from '@/lib/data/home'

export default function ResultsSection() {
  return (
    <section className="section" style={{ background: '#fff', clipPath: 'polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)'  }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 pt-15 md:pt-0"
        >
          <span className="badge mb-4">Résultats Clients</span>
          <h2
            className="text-4xl text-black md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-space, sans-serif)' }}
          >
            Des chiffres{' '}
            <span >réels, vérifiables</span>
          </h2>
          <p className="text-base" style={{ color: '#666' }}>
            Pas de promesses vagues. Voici ce que nos clients ont obtenu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20 md:pb-0">
          {results.map((r, i) => (
            <motion.div
              key={r.sector}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="card flex flex-col gap-4"
            >
              <div
                className="text-5xl font-bold tabular-nums"
                style={{
                  fontFamily: 'var(--font-space, monospace)',
                  color: '#00F5FF',
                  textShadow: '0 0 24px rgba(0,245,255,0.4)',
                }}
              >
                {r.metric}
              </div>
              <div>
                <p className="font-semibold text-white text-base">{r.label}</p>
                <p className="text-sm mt-1" style={{ color: '#888' }}>{r.detail}</p>
              </div>
              <div
                className="pt-3 mt-auto text-xs font-medium"
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  color: '#555',
                }}
              >
                📍 {r.sector}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
