import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface TagProps {
  tone?: 'blue' | 'cyan'
  children: ReactNode
}

export default function Tag({ tone = 'blue', children }: TagProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-md px-[11px] py-1 text-[0.68rem] font-extrabold tracking-[0.08em] uppercase',
        tone === 'blue' ? 'bg-blue-600 text-white' : 'bg-cyan-400 text-navy-900',
      )}
    >
      {children}
    </span>
  )
}
