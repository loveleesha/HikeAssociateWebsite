'use client'

import { useEffect, useRef, type ElementType, type HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import { onceInView } from '@/lib/inView'
import { prefersReducedMotion } from '@/lib/motion'

export type RevealVariant = 'up' | 'left' | 'right' | 'scale'

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: 'div' | 'li' | 'p' | 'article'
  variant?: RevealVariant
  delay?: number
}

// Applied only while waiting to scroll into view. The transition is switched off in this state so hiding is instant.
const VARIANTS: Record<RevealVariant, string> = {
  up: 'data-pending:translate-y-8',
  left: 'data-pending:-translate-x-11',
  right: 'data-pending:translate-x-11',
  scale: 'data-pending:scale-[0.92]',
}

// Content renders visible, so it's there for crawlers, no-JS visitors and a fast first paint. After hydration, only
// what's still below the fold is hidden and then faded in on arrival. Uses a data attribute, so React never re-renders.
export default function Reveal({ as = 'div', variant = 'up', delay = 0, className, style, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const Tag = as as ElementType

  useEffect(() => {
    const element = ref.current
    if (!element || prefersReducedMotion()) return
    if (element.getBoundingClientRect().top < window.innerHeight * 0.96) return
    element.dataset.pending = ''
    return onceInView(element, () => {
      delete element.dataset.pending
    })
  }, [])

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={cn(
        'transition-[opacity,translate,scale] delay-(--delay) duration-[800ms,900ms,900ms] ease-expo data-pending:opacity-0 data-pending:transition-none',
        VARIANTS[variant],
        className,
      )}
      style={delay ? { ...style, '--delay': `${delay}ms` } : style}
      {...rest}
    />
  )
}
