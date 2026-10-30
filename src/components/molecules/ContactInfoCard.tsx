import type { LucideIcon } from 'lucide-react'
import IconDisc from '@/components/atoms/IconDisc'
import Reveal from '@/components/atoms/Reveal'
import { cn } from '@/lib/cn'
import { cardSurface } from '@/lib/styles'

interface ContactInfoCardProps {
  icon: LucideIcon
  title: string
  value: string
  href?: string
  delay?: number
}

export default function ContactInfoCard({ icon, title, value, href, delay = 0 }: ContactInfoCardProps) {
  const valueClasses = 'text-[0.95rem] wrap-anywhere text-ink-soft'
  return (
    <Reveal delay={delay} className={cn(cardSurface, 'px-6 py-7 text-center')}>
      <IconDisc icon={icon} />
      <h2 className="mt-3.5 mb-1.5 text-[1.1rem]">{title}</h2>
      {href ? (
        <a href={href} className={cn(valueClasses, 'hover:text-accent')}>
          {value}
        </a>
      ) : (
        <p className={valueClasses}>{value}</p>
      )}
    </Reveal>
  )
}
