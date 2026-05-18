'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Check, ArrowRight } from 'lucide-react'
import { pricing } from '@/lib/data/home'
import TiltCard from '@/components/ui/TiltCard'
import { useRouter } from 'next/navigation'

export default function PricingSection() {
  const [yearly, setYearly] = useState(false)
  const route = useRouter()
  return (
    <section className="section relative overflow-hidden" style={{ background: '#000' }}>
      {/* Giant background "Pricing" text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="text-[18vw] font-bold uppercase tracking-tight whitespace-nowrap"
          style={{
            fontFamily: 'var(--font-space, sans-serif)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.04)',
          }}
        >
          PRICING
        </span>
      </div>

      <div className="wrap relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="badge mb-4">Tarifs</span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-space, sans-serif)' }}
          >
            Investissez dans{' '}
            <span className="text-gradient">votre croissance</span>
          </h2>
          <p className="text-base max-w-xl mx-auto mb-8" style={{ color: '#666' }}>
            Des forfaits transparents sans surprise. Garantie remboursement 60 jours.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 rounded-full p-1.5"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <button
              onClick={() => setYearly(false)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: !yearly ? '#00F5FF' : 'transparent',
                color: !yearly ? '#000' : '#888',
              }}
            >
              Mensuel
            </button>
            <button
              onClick={() => setYearly(true)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: yearly ? '#00F5FF' : 'transparent',
                color: yearly ? '#000' : '#888',
              }}
            >
              Annuel <span className="text-xs ml-1 opacity-80">-15%</span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
            <TiltCard
              intensity={plan.featured ? 8 : 5}
              className="relative flex flex-col rounded-2xl overflow-hidden h-full"
              style={{
                background: plan.featured
                  ? 'linear-gradient(145deg, rgba(0,245,255,0.1) 0%, rgba(0,245,255,0.03) 100%)'
                  : 'rgba(10,10,10,0.85)',
                border: plan.featured
                  ? '1px solid rgba(0,245,255,0.4)'
                  : '1px solid rgba(255,255,255,0.07)',
                boxShadow: plan.featured ? '0 0 60px rgba(0,245,255,0.12), inset 0 0 60px rgba(0,245,255,0.03)' : 'none',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, #00F5FF, transparent)' }}
                />
              )}
              {plan.featured && (
                <div className="absolute top-4 right-4">
                  <span className="badge text-xs">Le plus populaire</span>
                </div>
              )}

              <div className="p-8 flex flex-col gap-6 flex-1">
                {/* Plan name & desc */}
                <div>
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{
                      fontFamily: 'var(--font-space, sans-serif)',
                      color: plan.featured ? '#00F5FF' : '#fff',
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-xs" style={{ color: '#555' }}>{plan.target}</p>
                </div>

                {/* Price */}
                <div className="flex items-end gap-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={yearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="text-5xl font-bold tabular-nums"
                      style={{
                        fontFamily: 'var(--font-space, monospace)',
                        color: plan.featured ? '#00F5FF' : '#fff',
                      }}
                    >
                      {(yearly ? plan.price.yearly : plan.price.monthly).toLocaleString('fr-FR')}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm mb-2" style={{ color: '#555' }}>MAD/mois</span>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{plan.desc}</p>

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        className="shrink-0 mt-0.5"
                        style={{ color: '#00F5FF' }}
                      />
                      <span style={{ color: '#ccc' }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div
                  onClick={()=>{route.push("/contact"),window.scrollTo({top:100,behavior:"smooth"})}}
                  className="mt-auto w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300"
                  style={plan.featured ? {
                    background: '#00F5FF',
                    color: '#000',
                  } : {
                    background: 'rgba(255,255,255,0.06)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.featured) {
                      e.currentTarget.style.background = 'rgba(0,245,255,0.1)'
                      e.currentTarget.style.borderColor = 'rgba(0,245,255,0.3)'
                      e.currentTarget.style.color = '#00F5FF'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.featured) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                      e.currentTarget.style.color = '#fff'
                    }
                  }}
                >
                  {plan.cta}
                  <ArrowRight size={16} />
                </div>
              </div>
            </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm mt-8"
          style={{ color: '#444' }}
        >
          ✦ Garantie remboursement 60 jours · Pas de frais cachés · Budget publicitaire séparé
        </motion.p>
      </div>
    </section>
  )
}
