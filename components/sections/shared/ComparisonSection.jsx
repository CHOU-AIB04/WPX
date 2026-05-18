'use client'
import { motion } from 'motion/react'
import { Check, X, Minus } from 'lucide-react'
import { comparisonRows } from '@/lib/data/shared'

const columns = [
  {
    key: 'diy',
    label: 'DIY',
    sublabel: 'Vous tout seul',
    highlight: false,
    color: '#555',
    headerBg: 'rgba(255,255,255,0.03)',
  },
  {
    key: 'agence',
    label: 'Agence Classique',
    sublabel: 'Prestataire standard',
    highlight: false,
    color: '#888',
    headerBg: 'rgba(255,255,255,0.04)',
  },
  {
    key: 'wpx',
    label: 'WePushX',
    sublabel: 'La solution complète',
    highlight: true,
    color: '#00F5FF',
    headerBg: 'rgba(0,245,255,0.08)',
  },
]

function CellIcon({ value }) {
  if (value === true)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ background: 'rgba(0,245,255,0.12)' }}>
        <Check size={13} style={{ color: '#00F5FF' }} strokeWidth={2.5} />
      </span>
    )
  if (value === false)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ background: 'rgba(255,255,255,0.04)' }}>
        <X size={13} style={{ color: '#3a3a3a' }} strokeWidth={2.5} />
      </span>
    )
  // partial
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ background: 'rgba(245,158,11,0.08)' }}>
      <Minus size={13} style={{ color: '#f59e0b' }} strokeWidth={2.5} />
    </span>
  )
}

export default function ComparisonSection() {
  return (
    <section className="section overflow-hidden" style={{ background: '#000' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="badge mb-4">Pourquoi WePushX ?</span>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-space, sans-serif)' }}
          >
            La comparaison{' '}
            <span className="text-gradient">parle d&apos;elle-même</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full overflow-x-auto"
        >
          <div className="min-w-[640px]">
            {/* Header row */}
            <div className="grid grid-cols-4 mb-2">
              <div /> {/* feature label column */}
              {columns.map((col) => (
                <div
                  key={col.key}
                  className="mx-1.5 rounded-t-2xl px-4 py-4 text-center"
                  style={{
                    background: col.highlight ? 'rgba(0,245,255,0.08)' : 'rgba(255,255,255,0.03)',
                    border: col.highlight ? '1px solid rgba(0,245,255,0.25)' : '1px solid rgba(255,255,255,0.06)',
                    borderBottom: 'none',
                  }}
                >
                  {col.highlight && (
                    <div
                      className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 uppercase tracking-wider"
                      style={{ background: '#00F5FF', color: '#000' }}
                    >
                      Recommandé
                    </div>
                  )}
                  <p className="font-bold text-sm" style={{ color: col.color, fontFamily: 'var(--font-space, monospace)' }}>
                    {col.label}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: '#444' }}>{col.sublabel}</p>
                </div>
              ))}
            </div>

            {/* Feature rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-4 items-center"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
              >
                {/* Feature label */}
                <div
                  className="py-3.5 pr-4 text-sm"
                  style={{ color: '#aaa' }}
                >
                  {row.feature}
                </div>

                {/* Columns */}
                {columns.map((col) => (
                  <div
                    key={col.key}
                    className="mx-1.5 py-3.5 flex items-center justify-center"
                    style={{
                      background: col.highlight ? 'rgba(0,245,255,0.04)' : 'rgba(255,255,255,0.01)',
                      borderLeft: col.highlight ? '1px solid rgba(0,245,255,0.15)' : '1px solid rgba(255,255,255,0.04)',
                      borderRight: col.highlight ? '1px solid rgba(0,245,255,0.15)' : '1px solid rgba(255,255,255,0.04)',
                    }}
                  >
                    <CellIcon value={row[col.key]} />
                  </div>
                ))}
              </div>
            ))}

            {/* Footer row — CTA */}
            <div className="grid grid-cols-4">
              <div />
              {columns.map((col) => (
                <div
                  key={col.key}
                  className="mx-1.5 rounded-b-2xl px-4 py-5 flex items-center justify-center"
                  style={{
                    background: col.highlight ? 'rgba(0,245,255,0.08)' : 'rgba(255,255,255,0.02)',
                    border: col.highlight ? '1px solid rgba(0,245,255,0.25)' : '1px solid rgba(255,255,255,0.05)',
                    borderTop: 'none',
                  }}
                >
                  {col.highlight ? (
                    <a href="/contact" className="btn-primary text-sm px-5 py-2.5">
                      Commencer
                    </a>
                  ) : (
                    <span className="text-xs" style={{ color: '#333' }}>—</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-6 text-xs" style={{ color: '#444' }}>
          <span className="flex items-center gap-1.5"><Check size={11} style={{ color: '#00F5FF' }} /> Inclus</span>
          <span className="flex items-center gap-1.5"><Minus size={11} style={{ color: '#f59e0b' }} /> Partiel</span>
          <span className="flex items-center gap-1.5"><X size={11} style={{ color: '#333' }} /> Non disponible</span>
        </div>
      </div>
    </section>
  )
}
