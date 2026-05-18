'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/data/home'

export default function ServicesSection() {
  return (
    <section className="section" style={{ background: '#040404' }}>
      <div className="wrap">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-0 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="badge mb-4">Nos Services</span>
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-space, sans-serif)' }}
            >
              Tout ce dont vous avez besoin{' '}
              <span className="text-gradient">pour dominer</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/services" className="btn-outline">
              Voir tous les services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Services list — numbered Creatix style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 md:mt-0">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div
                className="flex flex-col  gap-4 px-6 py-5 rounded-2xl border transition-all duration-300 cursor-pointer"
                style={{
                  borderColor: 'rgba(255,255,255,0.07)',
                  background: 'rgba(10,10,10,0.8)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,245,255,0.3)'
                  e.currentTarget.style.background = 'rgba(0,245,255,0.04)'
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(0,245,255,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.background = 'rgba(10,10,10,0.8)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Number */}
                <span
                  className="text-4xl font-bold tabular-nums shrink-0 w-12 transition-colors duration-300"
                  style={{
                    fontFamily: 'var(--font-space, monospace)',
                    color: 'rgba(0,245,255,0.25)',
                  }}
                >
                  {s.num}
                </span>

                {/* Icon + Title */}
                <div className="flex items-center gap-4 min-w-[220px] shrink-0">
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="font-semibold text-white text-base leading-tight">{s.title}</h3>
                </div>

                {/* Desc */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#666' }}>
                  {s.desc}
                </p>

                <div className='flex items-center gap-1'>
                  {/* Tags */}
                <div className="flex items-center flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: 'rgba(0,245,255,0.07)',
                        color: 'rgba(0,245,255,0.7)',
                        border: '1px solid rgba(0,245,255,0.15)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <ArrowRight
                  size={18}
                  className="shrink-0 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                  style={{ color: '#00F5FF' }}
                />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
