import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface EyebrowProps {
  light?: boolean
  children: ReactNode
}

export default function Eyebrow({ light = false, children }: EyebrowProps) {
  return (
    <p
      className={cn(
        'inline-flex items-center justify-center gap-[7px] text-[0.74rem] font-extrabold tracking-[0.16em] uppercase',
        light ? 'text-cyan-400' : 'text-accent',
      )}
    >
      {children}
    </p>
  )
}
