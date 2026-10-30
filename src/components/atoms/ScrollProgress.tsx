'use client'

import { useEffect, useRef } from 'react'
import { subscribeScroll } from '@/lib/scroll'

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(
    () =>
      subscribeScroll((y) => {
        if (!ref.current) return
        const max = document.documentElement.scrollHeight - window.innerHeight
        ref.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`
      }),
    [],
  )

  return (
    <div
      ref={ref}
      className="fixed inset-x-0 top-0 z-120 h-[3px] origin-left [transform:scaleX(0)] bg-[linear-gradient(90deg,var(--color-blue-600),var(--color-cyan-400))]"
      aria-hidden="true"
    />
  )
}
