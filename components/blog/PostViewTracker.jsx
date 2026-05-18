'use client'
import { useEffect, useRef } from 'react'

export default function PostViewTracker({ slug }) {
  const counted = useRef(false)

  useEffect(() => {
    if (!slug || counted.current) return
    counted.current = true

    const timer = setTimeout(async () => {
      try {
        const res = await fetch('/api/blog/view', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify({ slug }),
        })
        const data = await res.json()
        if (!res.ok || data.error) {
          console.warn('[PostViewTracker] API error:', data.error || res.status)
        } else {
          console.log(`[PostViewTracker] View counted for "${slug}" via ${data.method}`)
        }
      } catch (err) {
        console.warn('[PostViewTracker] Fetch failed:', err.message)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [slug])

  return null
}
