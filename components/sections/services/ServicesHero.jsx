'use client'
import { motion } from 'motion/react'
import { useLocale } from '@/lib/locale-context'

export default function ServicesHero() {
  const { locale } = useLocale()

  const badge = locale === 'en' ? 'Our Services' : locale === 'es' ? 'Nuestros Servicios' : 'Nos Services'
  const h1Pre = locale === 'en' ? 'Everything to' : locale === 'es' ? 'Todo para' : 'Tout pour'
  const h1Highlight = locale === 'en' ? 'dominate' : locale === 'es' ? 'dominar' : 'dominer'
  const h1Post = locale === 'en' ? 'your digital market' : locale === 'es' ? 'tu mercado digital' : 'votre marché digital'
  const subtitle = locale === 'en'
    ? 'Integrated and complementary services. Each service amplifies the others. That\'s why our clients see results their competitors can\'t match.'
    : locale === 'es'
    ? 'Servicios integrados y complementarios. Cada servicio amplifica los demás. Por eso nuestros clientes ven resultados que sus competidores no alcanzan.'
    : "Des services intégrés et complémentaires. Chaque service amplifie les autres. C'est pour ça que nos clients voient des résultats que leurs concurrents n'atteignent pas."

  return (
    <section
      className="relative pt-40 pb-20 overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,245,255,0.1) 0%, transparent 70%)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.3), transparent)' }}
      />

      <div className="wrap relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="badge mb-6">{badge}</span>
          <h1
            className="text-4xl md:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-space, sans-serif)' }}
          >
            {h1Pre}{' '}
            <span className="text-gradient">{h1Highlight}</span>
            <br />{h1Post}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#666' }}>
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
