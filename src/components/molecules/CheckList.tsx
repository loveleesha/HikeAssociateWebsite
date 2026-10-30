import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'

interface CheckListProps {
  items: string[]
  size?: 'sm' | 'md'
  className?: string
}

// Items pop in once their parent Reveal fires.
export default function CheckList({ items, size = 'sm', className }: CheckListProps) {
  return (
    <ul role="list" className={cn('grid gap-[11px]', className)}>
      {items.map((item, i) => (
        <li
          key={item}
          data-reveal-item=""
          className={cn(
            'flex items-start gap-2.5 font-medium transition-[opacity,translate] delay-[calc(var(--i)*70ms+240ms)] duration-550 ease-expo in-data-pending:-translate-x-3.5 in-data-pending:opacity-0 in-data-pending:transition-none',
            size === 'sm' ? 'text-[0.92rem]' : 'text-[1rem] text-ink',
            // After the font size: tailwind-merge drops a line height that comes before one.
            'leading-normal',
          )}
          style={{ '--i': i }}
        >
          <span className="mt-px inline-grid size-5 flex-none place-items-center rounded-full bg-blue-600 text-white">
            <Check size={13} strokeWidth={3} aria-hidden="true" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}
