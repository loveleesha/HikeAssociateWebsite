'use client'

import { useEffect, useRef } from 'react'
import { LAND_H, LAND_MASK, LAND_W } from '@/lib/globeMask'
import { prefersReducedMotion } from '@/lib/motion'

const RAD = Math.PI / 180
const HOME = { lat: 28.59, lon: 77.04 } // Dwarka, New Delhi
const POINTS = 5200

interface Dot {
  sinLat: number
  cosLat: number
  lon: number
}

function buildDots() {
  const bytes = Uint8Array.from(atob(LAND_MASK), (c) => c.charCodeAt(0))
  const isLand = (lat: number, lon: number) => {
    const x = Math.min(LAND_W - 1, Math.floor(((lon + 180) / 360) * LAND_W))
    const y = Math.min(LAND_H - 1, Math.floor(((90 - lat) / 180) * LAND_H))
    const i = y * LAND_W + x
    return ((bytes[i >> 3] ?? 0) >> (i & 7)) & 1
  }
  const dots: Dot[] = []
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < POINTS; i++) {
    const z = 1 - ((i + 0.5) / POINTS) * 2
    const lat = Math.asin(z) / RAD
    const lon = (((i * golden) / RAD + 180) % 360) - 180
    if (isLand(lat, lon)) dots.push({ sinLat: z, cosLat: Math.cos(lat * RAD), lon: lon * RAD })
  }
  return dots
}

export default function Globe() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    let dots: Dot[] | null = null
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    const tilt = 18 * RAD
    const sinT = Math.sin(tilt)
    const cosT = Math.cos(tilt)
    let size = 0
    let frame = 0
    let running = false
    let last = 0

    const resize = () => {
      size = canvas.clientWidth
      canvas.width = canvas.height = Math.round(size * dpr)
    }

    const project = (sinLat: number, cosLat: number, lon: number, spin: number) => {
      const a = lon - spin
      const x = cosLat * Math.sin(a)
      const yy = sinLat
      const zz = cosLat * Math.cos(a)
      return { x, y: yy * cosT - zz * sinT, z: yy * sinT + zz * cosT }
    }

    const draw = (time: number) => {
      if (!dots) return
      const r = (size * dpr) / 2 - 6
      const c = (size * dpr) / 2
      // Sway around India so the head office stays on the visible side.
      const spin = (HOME.lon + Math.sin(time / 5200) * 22) * RAD
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const dot = 1.15 * dpr
      ctx.fillStyle = 'rgba(96, 190, 255, .46)'
      ctx.beginPath()
      for (const d of dots) {
        const p = project(d.sinLat, d.cosLat, d.lon, spin)
        if (p.z < 0.02) continue
        ctx.rect(c + p.x * r, c - p.y * r, dot, dot)
      }
      ctx.fill()
      ctx.fillStyle = 'rgba(150, 225, 255, .9)'
      ctx.beginPath()
      for (const d of dots) {
        const p = project(d.sinLat, d.cosLat, d.lon, spin)
        if (p.z < 0.62) continue
        ctx.rect(c + p.x * r, c - p.y * r, dot, dot)
      }
      ctx.fill()

      const home = project(Math.sin(HOME.lat * RAD), Math.cos(HOME.lat * RAD), HOME.lon * RAD, spin)
      if (home.z > 0) {
        const px = c + home.x * r
        const py = c - home.y * r
        const pulse = (time % 2400) / 2400
        ctx.strokeStyle = `rgba(60, 212, 247, ${1 - pulse})`
        ctx.lineWidth = 1.5 * dpr
        ctx.beginPath()
        ctx.arc(px, py, (4 + pulse * 20) * dpr, 0, Math.PI * 2)
        ctx.stroke()
        ctx.fillStyle = '#3cd4f7'
        ctx.beginPath()
        ctx.arc(px, py, 3.5 * dpr, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = (time: number) => {
      frame = running ? requestAnimationFrame(loop) : 0
      if (time - last < 33) return // ~30fps is plenty for a slow ambient globe
      last = time
      draw(time)
    }

    resize()
    const reduced = prefersReducedMotion()

    const resizeObserver = new ResizeObserver(() => {
      resize()
      draw(performance.now())
    })
    resizeObserver.observe(canvas)

    // Build the dots only when the globe nears the screen, keeping startup work off the main thread.
    const visibility = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry?.isIntersecting ?? false
        if (isIntersecting && !dots) {
          dots = buildDots()
          draw(0)
        }
        running = isIntersecting && !reduced
        if (running && !frame) frame = requestAnimationFrame(loop)
      },
      { rootMargin: '200px' },
    )
    visibility.observe(canvas)

    return () => {
      running = false
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      visibility.disconnect()
    }
  }, [])

  return <canvas ref={ref} className="block size-full" aria-hidden="true" />
}
