import type { LucideIcon } from 'lucide-react'
import IconDisc from '@/components/atoms/IconDisc'
import Reveal, { type RevealVariant } from '@/components/atoms/Reveal'
import { cn } from '@/lib/cn'
import { cardSurface } from '@/lib/styles'

interface TeamCardProps {
  icon: LucideIcon
  title: string
  text: string
  variant?: RevealVariant
  delay?: number
}

export default function TeamCard({ icon, title, text, variant, delay = 0 }: TeamCardProps) {
  return (
    <Reveal
      delay={delay}
      variant={variant}
      className={cn(cardSurface, 'flex flex-col gap-[18px] px-6 py-[26px] md:flex-row')}
    >
      <IconDisc icon={icon} />
      <div>
        <h3 className="text-[1.12rem]">{title}</h3>
        <p className="mt-[7px] text-[0.92rem] text-ink-soft">{text}</p>
      </div>
    </Reveal>
  )
}
