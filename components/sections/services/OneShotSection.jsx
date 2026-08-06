'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { getOneShots } from '@/lib/data/services'
import { useLocale } from '@/lib/locale-context'

export default function OneShotSection() {
  const { locale } = useLocale()
  const oneShots = getOneShots(locale)
  const contactHref = locale === 'fr' ? '/contact' : `/${locale}/contact`

  const badge = locale === 'en' ? 'One-Shot Projects' : locale === 'es' ? 'Proyectos One-Shot' : 'Projets One-Shot'
  const h2Pre = locale === 'en' ? 'Need a' : locale === 'es' ? '¿Necesitas un proyecto' : "Besoin d'un projet"
  const h2Highlight = locale === 'en' ? 'one-time project?' : locale === 'es' ? 'puntual?' : 'ponctuel ?'
  const subtitle = locale === 'en'
    ? 'No subscription required. Precise deliverables at a fixed price.'
    : locale === 'es'
    ? 'No se requiere suscripción. Entregables precisos a precio fijo.'
    : "Pas d'abonnement requis. Des livrables précis à prix fixe."
  const startProject = locale === 'en' ? 'Start this project' : locale === 'es' ? 'Iniciar este proyecto' : 'Démarrer ce projet'

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
          <span className="badge mb-4">{badge}</span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
            style={{ fontFamily: 'var(--font-space, sans-serif)' }}
          >
            {h2Pre}{' '}
            <span>{h2Highlight}</span>
          </h2>
          <p className="text-base" style={{ color: '#666' }}>
            {subtitle}
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
                href={contactHref}
                className="mt-auto text-sm flex items-center gap-1.5 font-medium transition-colors hover:text-[#00F5FF]"
                style={{ color: '#555' }}
              >
                {startProject} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
