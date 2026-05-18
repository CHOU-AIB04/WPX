'use client'
import { motion } from 'motion/react'
import CountUp from '@/components/ui/CountUp'
import { stats } from '@/lib/data/home'

export default function StatsSection() {
  return (
    <section 
      className="relative py-40 md:py-56 overflow-hidden" 
      style={{ 
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        clipPath: 'polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)' 
      }}
    >
      {/* Background Decorative Element - Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00FFF5] to-transparent" />

      <div className="wrap relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }} // Premium micro-interaction
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center gap-4 text-center"
            >
              {/* The Number with Gradient Text */}
              <div className="relative">
                <span
                  className="text-6xl md:text-7xl font-bold tabular-nums tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-black"
                  style={{ fontFamily: 'var(--font-space, monospace)' }}
                >
                  <CountUp end={s.value} duration={3} suffix={s.suffix} />
                </span>
                
                {/* Subtle underline decoration */}
                <motion.div 
                   className="h-[2px] w-0 bg-cyan-400 mx-auto mt-1 group-hover:w-full transition-all duration-500"
                />
              </div>

              {/* The Label */}
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional: Add a subtle watermark or pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center">
        <span className="text-[20vw] font-black uppercase">Stats</span>
      </div>
    </section>
  )
}