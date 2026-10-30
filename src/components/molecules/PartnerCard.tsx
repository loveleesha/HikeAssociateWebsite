import Monogram from '@/components/atoms/Monogram'
import Reveal from '@/components/atoms/Reveal'
import Tag from '@/components/atoms/Tag'
import TiltCard from '@/components/atoms/TiltCard'
import { cn } from '@/lib/cn'
import { cardSurface } from '@/lib/styles'

interface PartnerCardProps {
  initials: string
  name: string
  role: string
  badge: string
  summary: string
  text: string
  delay?: number
}

export default function PartnerCard({ initials, name, role, badge, summary, text, delay = 0 }: PartnerCardProps) {
  return (
    <Reveal delay={delay}>
      <TiltCard max={3} className={cn(cardSurface, 'px-6 py-7 hover:shadow-lift')}>
        <Monogram text={initials} size="lg" />
        <p className="mt-4 text-[0.78rem] font-extrabold tracking-[0.1em] text-accent uppercase">{role}</p>
        <h3 className="mt-0.5 mb-2.5 text-[1.25rem]">{name}</h3>
        <Tag>{badge}</Tag>
        <p className="mt-3 text-[0.9rem] font-semibold text-ink">{summary}</p>
        <p className="mt-3 text-[0.9rem] text-ink-soft">{text}</p>
      </TiltCard>
    </Reveal>
  )
}
