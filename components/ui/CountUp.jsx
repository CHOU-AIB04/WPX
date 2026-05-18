'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'

export default function CountUp({ end, duration = 2, prefix = '', suffix = '', decimals = 0, className = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!isInView || hasStarted.current) return
    hasStarted.current = true

    const startTime = performance.now()
    const endValue = parseFloat(end)

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

    const update = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const easedProgress = easeOutQuart(progress)
      const current = easedProgress * endValue
      setCount(current)
      if (progress < 1) requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  }, [isInView, end, duration])

  const formatted = count.toFixed(decimals)

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${end}${suffix}`}>
      {prefix}{formatted}{suffix}
    </span>
  )
}
