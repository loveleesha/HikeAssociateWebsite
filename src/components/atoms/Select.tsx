import type { SelectHTMLAttributes } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'
import { fieldControl } from '@/lib/styles'

export default function Select({ className, children, ...rest }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select className={cn(fieldControl, 'appearance-none pr-[38px]', className)} {...rest}>
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-ink-soft"
        size={18}
        aria-hidden="true"
      />
    </div>
  )
}
