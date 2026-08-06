'use client'
import { motion } from 'motion/react'
import { getWhyUs, getPainPoints } from '@/lib/data/home'
import { useLocale } from '@/lib/locale-context'

export default function WhyUsSection() {
  const { locale, dict } = useLocale()
  const whyUs = getWhyUs(locale)
  const painPoints = getPainPoints(locale)
  const w = dict?.why_us_section || {}

  const problemBadge = locale === 'en' ? 'The problem' : locale === 'es' ? 'El problema' : 'Le problème'
  const problemH2Pre = locale === 'en' ? 'You lose money' : locale === 'es' ? 'Estás perdiendo dinero' : "Vous perdez de l'argent"
  const problemH2Highlight = locale === 'en' ? 'every day' : locale === 'es' ? 'cada día' : 'chaque jour'
  const problemDesc = locale === 'en'
    ? 'Most businesses invest in digital marketing without a coherent system. Result: wasted budget, lost leads, frustration.'
    : locale === 'es'
    ? 'La mayoría de las empresas invierten en marketing digital sin un sistema coherente. Resultado: presupuesto desperdiciado, leads perdidos, frustración.'
    : "La plupart des PME marocaines investissent dans le digital sans système cohérent. Résultat : Des Dirhams gaspillés, des leads perdus, de la frustration."

  const whyBadge = w.badge || 'Pourquoi WePushX'
  const whyH2Pre = w.h2_pre || 'La différence qui'
  const whyH2Highlight = w.h2_highlight || 'change tout'

  return (
    <section className="section" style={{ background: '#000' }}>
      <div className="wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <span className="badge mb-4">{problemBadge}</span>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: 'var(--font-space, sans-serif)' }}
          >
            {problemH2Pre}{' '}
            <span className="text-gradient">{problemH2Highlight}</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#666' }}>
            {problemDesc}
          </p>
        </motion.div>

        {/* Pain points — bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {painPoints.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="card flex flex-col gap-3"
            >
              <span className="text-3xl">{p.icon}</span>
              <h3 className="font-semibold text-base text-white">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why us separator */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-12"
        >
          <span className="badge mb-4">{whyBadge}</span>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-space, sans-serif)' }}
          >
            {whyH2Pre}{' '}
            <span className="text-gradient">{whyH2Highlight}</span>
          </h2>
        </motion.div>

        {/* Why us — grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {whyUs.map((w, i) => (
            <motion.div
              key={w.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="card flex flex-col gap-3 group"
            >
              <span className="text-2xl">{w.icon}</span>
              <div>
                <p className="font-semibold text-white group-hover:text-[#00F5FF] transition-colors">{w.label}</p>
                <p className="text-sm mt-1" style={{ color: '#666' }}>{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
