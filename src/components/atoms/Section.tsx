import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import AmbientBackground from './AmbientBackground'

type SectionTone = 'plain' | 'tint' | 'navy'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionTone
}

const TONES: Record<SectionTone, string> = {
  plain: 'py-section',
  tint: 'bg-tint py-section',
  navy: 'relative overflow-hidden bg-[linear-gradient(110deg,var(--color-navy-950),#06224c)] py-[clamp(52px,7vw,80px)] text-white [--focus-ring:var(--color-cyan-400)]',
}

export default function Section({ tone = 'plain', className, children, ...rest }: SectionProps) {
  return (
    <section className={cn(TONES[tone], className)} {...rest}>
      {tone === 'navy' && <AmbientBackground />}
      {children}
    </section>
  )
}
