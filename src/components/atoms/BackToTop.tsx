'use client'

import { useEffect, useRef } from 'react'
import { ArrowUp } from 'lucide-react'
import { subscribeScroll } from '@/lib/scroll'

export default function BackToTop() {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => subscribeScroll((y) => ref.current?.toggleAttribute('data-shown', y > 600)), [])

  return (
    <button
      ref={ref}
      type="button"
      className="invisible fixed right-[18px] bottom-[18px] z-90 grid size-[46px] translate-y-3.5 place-items-center rounded-xl bg-blue-600 text-white opacity-0 shadow-[0_10px_24px_rgb(11_99_229/40%)] transition-[opacity,translate,visibility,background-color] duration-300 ease-expo hover:bg-blue-500 data-shown:visible data-shown:translate-y-0 data-shown:opacity-100 data-shown:hover:-translate-y-[3px]"
      aria-label="Back to top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        // This button hides at the top of the page, so hand focus on rather than losing it.
        document.getElementById('main')?.focus({ preventScroll: true })
      }}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  )
}
