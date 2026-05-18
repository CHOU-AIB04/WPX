'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'
import { faqServices } from '@/lib/data/services'

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          border: open ? '1px solid rgba(0,245,255,0.3)' : '1px solid rgba(255,255,255,0.07)',
          background: open ? 'rgba(0,245,255,0.04)' : 'rgba(10,10,10,0.8)',
        }}
      >
        <button
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span className="font-medium text-white text-base">{faq.q}</span>
          <span
            className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
            style={{ background: open ? '#00F5FF' : 'rgba(255,255,255,0.06)', color: open ? '#000' : '#fff' }}
          >
            {open ? <Minus size={14} /> : <Plus size={14} />}
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#888' }}>{faq.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function ServicesFAQ() {
  return (
    <section className="section" style={{ background: '#040404' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="badge mb-4">Questions fréquentes</span>
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: 'var(--font-space, sans-serif)' }}
          >
            Tout ce que vous voulez{' '}
            <span className="text-gradient">savoir</span>
          </h2>
        </motion.div>
        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqServices.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
