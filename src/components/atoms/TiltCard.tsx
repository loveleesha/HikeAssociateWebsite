'use client'

import { useEffect, useRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import { hasFinePointer, prefersReducedMotion } from '@/lib/motion'

interface TiltCardProps extends HTMLAttributes<HTMLDivElement> {
  max?: number
}

// Pointer-driven 3D tilt and spotlight. Writes CSS variables directly so React never re-renders.
export default function TiltCard({ max = 5, className, ...rest }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !hasFinePointer() || prefersReducedMotion()) return

    let frame = 0
    let event: PointerEvent | null = null
    const apply = () => {
      frame = 0
      if (!event) return
      const rect = el.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height
      el.style.setProperty('--rx', `${(0.5 - y) * max}deg`)
      el.style.setProperty('--ry', `${(x - 0.5) * max}deg`)
      el.style.setProperty('--mx', `${x * 100}%`)
      el.style.setProperty('--my', `${y * 100}%`)
    }
    const onMove = (e: PointerEvent) => {
      event = e
      frame ||= requestAnimationFrame(apply)
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      frame = 0
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }
    el.addEventListener('pointermove', onMove, { passive: true })
    el.addEventListener('pointerleave', onLeave, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [max])

  return (
    <div
      ref={ref}
      className={cn(
        'group/card relative h-full [transform:perspective(900px)_rotateX(var(--rx))_rotateY(var(--ry))] transition-[transform,box-shadow,border-color,background-color] duration-400 ease-expo [--mx:50%] [--my:0%] [--rx:0deg] [--ry:0deg] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[radial-gradient(320px_circle_at_var(--mx)_var(--my),rgb(22_119_242/12%),transparent_70%)] before:opacity-0 before:transition-opacity before:duration-350 hover:before:opacity-100',
        className,
      )}
      {...rest}
    />
  )
}
