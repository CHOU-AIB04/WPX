'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

/**
 * ReactBits-inspired Scroll Stack
 * https://reactbits.dev/components/scroll-stack
 * Cards stack on top of each other as the user scrolls.
 */

function StackCard({ item, index, total, scrollYProgress }) {
  const start = index / total
  const end = Math.min((index + 1) / total, 1)

  // Scale down slightly as next card comes in
  const scale = useTransform(scrollYProgress, [start, end], [1, index === total - 1 ? 1 : 0.93])
  // Move up to create depth
  const y = useTransform(scrollYProgress, [start, end], ['0%', index === total - 1 ? '0%' : '-5%'])
  // Fade out (except last card)
  const opacity = useTransform(
    scrollYProgress,
    [start, end - 0.05, end],
    [1, 1, index === total - 1 ? 1 : 0.3]
  )

  return (
    <motion.div
      style={{
        scale,
        y,
        opacity,
        zIndex: index + 1,
        position: 'sticky',
        top: `${100 + index * 24}px`,
        transformOrigin: 'center top',
      }}
      className="w-full mb-4"
    >
      {item}
    </motion.div>
  )
}

export default function ScrollStack({ items, className = '' }) {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const scrollHeight = `${items.length * 90 + 20}vh`

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ height: scrollHeight, position: 'relative' }}
      aria-label="Services en défilement"
    >
      {items.map((item, i) => (
        <StackCard
          key={i}
          item={item}
          index={i}
          total={items.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  )
}
