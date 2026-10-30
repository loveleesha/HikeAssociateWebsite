import { cn } from '@/lib/cn'

interface MonogramProps {
  text: string
  size?: 'md' | 'lg'
}

export default function Monogram({ text, size = 'md' }: MonogramProps) {
  return (
    <span
      className={cn(
        'grid flex-none place-items-center rounded-full bg-[linear-gradient(135deg,var(--color-navy-700),var(--color-blue-600))] font-extrabold text-white',
        size === 'md' ? 'size-11' : 'size-16 text-[1.15rem]',
      )}
    >
      {text}
    </span>
  )
}
