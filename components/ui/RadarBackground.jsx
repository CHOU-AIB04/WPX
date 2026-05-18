'use client'

import { useEffect, useRef } from 'react'

/**
 * ReactBits-inspired Radar Background
 * https://reactbits.dev/backgrounds/radar
 */
export default function RadarBackground({
  color = '#00F5FF',
  speed = 0.4,
  scale = 0.4,
  className = '',
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    // Parse hex color to RGB
    const r = parseInt(color.slice(1, 3), 16)
    const g = parseInt(color.slice(3, 5), 16)
    const b = parseInt(color.slice(5, 7), 16)

    let animId
    let angle = 0

    // Random blips for realism
    const blips = Array.from({ length: 6 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: Math.random() * 0.7 + 0.2,
      life: Math.random(),
      size: Math.random() * 2.5 + 1,
    }))

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      const cx = w / 2
      const cy = h / 2
      const maxR = Math.min(w, h) * scale * 1.6

      ctx.clearRect(0, 0, w, h)

      // ── Concentric rings ───────────────────────────
      const rings = 5
      for (let i = 1; i <= rings; i++) {
        const rr = (maxR / rings) * i
        ctx.beginPath()
        ctx.arc(cx, cy, rr, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${r},${g},${b},${0.12 - i * 0.015})`
        ctx.lineWidth = 0.6
        ctx.stroke()
      }

      // ── Radial spoke lines ─────────────────────────
      const spokes = 12
      for (let i = 0; i < spokes; i++) {
        const a = (Math.PI * 2 * i) / spokes
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(cx + Math.cos(a) * maxR, cy + Math.sin(a) * maxR)
        ctx.strokeStyle = `rgba(${r},${g},${b},0.05)`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // ── Sweep (filled sector with fade) ───────────
      const sweepArc = Math.PI * 0.55
      const steps = 80
      for (let i = 0; i < steps; i++) {
        const t = i / steps
        const a = angle - sweepArc * (1 - t)
        const opacity = t * 0.22
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        // Draw thin triangle slice
        const a2 = a + (sweepArc / steps)
        ctx.arc(cx, cy, maxR, a, a2)
        ctx.closePath()
        ctx.fillStyle = `rgba(${r},${g},${b},${opacity})`
        ctx.fill()
      }

      // ── Leading edge line ──────────────────────────
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.lineTo(cx + Math.cos(angle) * maxR, cy + Math.sin(angle) * maxR)
      ctx.strokeStyle = `rgba(${r},${g},${b},0.85)`
      ctx.lineWidth = 1.5
      ctx.shadowColor = `rgba(${r},${g},${b},0.8)`
      ctx.shadowBlur = 8
      ctx.stroke()
      ctx.shadowBlur = 0

      // ── Center dot ────────────────────────────────
      ctx.beginPath()
      ctx.arc(cx, cy, 3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${r},${g},${b},0.9)`
      ctx.fill()

      // ── Blips (radar contacts) ────────────────────
      blips.forEach((blip) => {
        const diff = ((angle - blip.angle) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2)
        if (diff < Math.PI * 0.5) {
          const fade = 1 - diff / (Math.PI * 0.5)
          const bx = cx + Math.cos(blip.angle) * (blip.radius * maxR)
          const by = cy + Math.sin(blip.angle) * (blip.radius * maxR)
          ctx.beginPath()
          ctx.arc(bx, by, blip.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${r},${g},${b},${fade * 0.9})`
          ctx.shadowColor = `rgba(${r},${g},${b},${fade})`
          ctx.shadowBlur = 10
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      // Update angle
      angle += speed * 0.016
      if (angle > Math.PI * 2) {
        angle -= Math.PI * 2
        // Randomise blips occasionally
        blips.forEach((blip) => {
          if (Math.random() > 0.6) {
            blip.angle = Math.random() * Math.PI * 2
            blip.radius = Math.random() * 0.7 + 0.2
          }
        })
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [color, speed, scale])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%', display: 'block' }}
      aria-hidden="true"
    />
  )
}
