'use client'
import { motion } from 'motion/react'
import { process } from '@/lib/data/home'

export default function ProcessSection() {
  return (
    <section className="section" style={{ background: '#040404' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="badge mb-4">Notre Process</span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-space, sans-serif)' }}
          >
            De zéro à{' '}
            <span className="text-gradient">clients qualifiés</span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#666' }}>
            Un process éprouvé, transparent, sans jargon. Vous savez exactement où on en est.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="hidden md:block absolute left-[2.75rem] top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,245,255,0.3) 20%, rgba(0,245,255,0.3) 80%, transparent)' }}
          />

          <div className="flex flex-col gap-8">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 group"
              >
                {/* Step number bubble */}
                <div
                  className="relative shrink-0 w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center font-bold text-sm z-10 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(0,245,255,0.4)]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(0,245,255,0.05))',
                    border: '1px solid rgba(0,245,255,0.3)',
                    color: '#00F5FF',
                    fontFamily: 'var(--font-space, monospace)',
                  }}
                >
                  {step.step}
                </div>

                {/* Content */}
                <div
                  className="flex-1 p-6 rounded-2xl transition-all duration-300 group-hover:border-[rgba(0,245,255,0.2)]"
                  style={{
                    background: 'rgba(10,10,10,0.8)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <h3 className="font-semibold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
