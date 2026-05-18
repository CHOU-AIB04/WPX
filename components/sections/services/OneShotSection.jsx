'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { oneShots } from '@/lib/data/services'

export default function OneShotSection() {
  return (
    <section className="section" style={{ background: '#fff', clipPath: 'ellipse(150% 100% at 50% 0%)' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="badge mb-4">Projets One-Shot</span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
            style={{ fontFamily: 'var(--font-space, sans-serif)' }}
          >
            Besoin d'un projet{' '}
            <span>ponctuel ?</span>
          </h2>
          <p className="text-base" style={{ color: '#666' }}>
            Pas d'abonnement requis. Des livrables précis à prix fixe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-15 md:pb-0">
          {oneShots.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="card flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-white">{item.name}</h3>
                <span
                  className="text-sm font-bold shrink-0"
                  style={{ color: '#00F5FF', fontFamily: 'var(--font-space, monospace)' }}
                >
                  {item.price}
                </span>
              </div>
              <p className="text-sm" style={{ color: '#666' }}>{item.desc}</p>
              <Link
                href="/contact"
                className="mt-auto text-sm flex items-center gap-1.5 font-medium transition-colors hover:text-[#00F5FF]"
                style={{ color: '#555' }}
              >
                Démarrer ce projet <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
