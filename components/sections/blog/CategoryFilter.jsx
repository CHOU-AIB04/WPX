'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'motion/react'
import { categories } from '@/lib/data/blog'

export default function CategoryFilter({ active = 'Tous' }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const select = (cat) => {
    const params = new URLSearchParams(searchParams.toString())
    if (cat === 'Tous') params.delete('category')
    else params.set('category', cat)
    router.push(`/blog?${params.toString()}`, { scroll: false })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-wrap gap-2 justify-center"
    >
      {categories.map((cat) => {
        const isActive = cat === active
        return (
          <button
            key={cat}
            onClick={() => select(cat)}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-250"
            style={{
              background: isActive ? '#00F5FF' : 'rgba(255,255,255,0.05)',
              color: isActive ? '#000' : '#666',
              border: isActive ? '1px solid #00F5FF' : '1px solid rgba(255,255,255,0.08)',
              fontWeight: isActive ? 700 : 500,
            }}
          >
            {cat}
          </button>
        )
      })}
    </motion.div>
  )
}
