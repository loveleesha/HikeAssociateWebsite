import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

interface IconDiscProps {
  icon: LucideIcon
  size?: number
  className?: string
}

// Reacts to hover on the nearest `group/card` ancestor, such as a TiltCard.
export default function IconDisc({ icon: Icon, size = 24, className }: IconDiscProps) {
  return (
    <span
      className={cn(
        'inline-grid size-14 flex-none place-items-center rounded-full bg-disc text-accent transition-[rotate,scale,background-color,color] duration-500 ease-expo group-hover/card:scale-108 group-hover/card:-rotate-8 group-hover/card:bg-blue-600 group-hover/card:text-white',
        className,
      )}
    >
      <Icon size={size} aria-hidden="true" />
    </span>
  )
}
