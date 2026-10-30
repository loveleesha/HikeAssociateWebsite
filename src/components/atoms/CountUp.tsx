'use client'

import { useEffect, useRef } from 'react'
import { onceInView } from '@/lib/inView'
import { prefersReducedMotion } from '@/lib/motion'

interface CountUpProps {
  value: number
  suffix?: string
  duration?: number
}

export default function CountUp({ value, suffix = '', duration = 1600 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    let frame = 0
    el.textContent = `0${suffix}`
    const stop = onceInView(el, () => {
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        el.textContent = `${Math.round(eased * value)}${suffix}`
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })
    return () => {
      stop()
      cancelAnimationFrame(frame)
      el.textContent = `${value}${suffix}`
    }
  }, [value, suffix, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
