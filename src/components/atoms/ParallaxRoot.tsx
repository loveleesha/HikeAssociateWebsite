'use client'

import { useEffect, useRef, type HTMLAttributes } from 'react'
import { hasFinePointer, prefersReducedMotion } from '@/lib/motion'
import { subscribeScroll } from '@/lib/scroll'

// Publishes --shift (scroll offset) and --px / --py (pointer position, -1 to 1) for descendants to consume.
export default function ParallaxRoot(props: HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root || prefersReducedMotion()) return
    const stopScroll = subscribeScroll((y) => {
      if (y < root.offsetHeight) root.style.setProperty('--shift', `${y * 0.14}px`)
    })

    if (!hasFinePointer()) return stopScroll
    let frame = 0
    let event: PointerEvent | null = null
    const apply = () => {
      frame = 0
      if (!event) return
      root.style.setProperty('--px', ((event.clientX / window.innerWidth - 0.5) * 2).toFixed(3))
      root.style.setProperty('--py', ((event.clientY / window.innerHeight - 0.5) * 2).toFixed(3))
    }
    const onMove = (e: PointerEvent) => {
      event = e
      frame ||= requestAnimationFrame(apply)
    }
    root.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      stopScroll()
      cancelAnimationFrame(frame)
      root.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <section ref={ref} {...props} />
}
