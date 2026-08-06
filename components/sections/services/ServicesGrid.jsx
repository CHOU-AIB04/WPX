'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Check, ArrowRight } from 'lucide-react'
import { getMainServices } from '@/lib/data/services'
import { useLocale } from '@/lib/locale-context'

export default function ServicesGrid() {
  const { locale } = useLocale()
  const mainServices = getMainServices(locale)
  const learnMore = locale === 'en' ? 'Learn more' : locale === 'es' ? 'Saber más' : 'En savoir plus'
  const contactHref = locale === 'fr' ? '/contact' : `/${locale}/contact`

  return (
    <section className="section" style={{ background: '#040404' }}>
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainServices.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group card flex flex-col gap-5"
              aria-label={`Service: ${service.title}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.15)' }}
                  >
                    {service.icon}
                  </span>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: '#00F5FF' }}>
                      {service.subtitle}
                    </p>
                    <h2 className="font-bold text-white text-lg leading-tight">{service.title}</h2>
                  </div>
                </div>
                <ArrowRight
                  size={18}
                  className="shrink-0 mt-1 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                  style={{ color: '#00F5FF' }}
                />
              </div>

              {/* Desc */}
              <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{service.desc}</p>

              {/* Features */}
              <ul className="flex flex-col gap-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check size={14} className="shrink-0 mt-0.5" style={{ color: '#00F5FF' }} />
                    <span style={{ color: '#bbb' }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Price tag */}
              <div className="mt-auto pt-4 flex items-center justify-between"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span className="text-sm font-semibold" style={{ color: '#00F5FF' }}>
                  {service.price}
                </span>
                <Link
                  href={contactHref}
                  className="text-sm font-medium flex items-center gap-1.5 transition-colors hover:text-[#00F5FF]"
                  style={{ color: '#666' }}
                >
                  {learnMore} <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
