import type { LucideIcon } from 'lucide-react'
import IconDisc from '@/components/atoms/IconDisc'
import Reveal from '@/components/atoms/Reveal'
import TiltCard from '@/components/atoms/TiltCard'
import { cn } from '@/lib/cn'
import { cardSurface } from '@/lib/styles'

interface ValueCardProps {
  icon: LucideIcon
  title: string
  text: string
  delay?: number
}

export default function ValueCard({ icon, title, text, delay = 0 }: ValueCardProps) {
  return (
    <Reveal delay={delay}>
      <TiltCard max={3} className={cn(cardSurface, 'px-6 py-7 hover:shadow-lift')}>
        <IconDisc icon={icon} />
        <h3 className="mt-4 text-[1.08rem]">{title}</h3>
        <p className="mt-3 text-[0.9rem] text-ink-soft">{text}</p>
      </TiltCard>
    </Reveal>
  )
}
