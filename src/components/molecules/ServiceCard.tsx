import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import IconDisc from '@/components/atoms/IconDisc'
import Reveal from '@/components/atoms/Reveal'
import TiltCard from '@/components/atoms/TiltCard'
import { cn } from '@/lib/cn'
import { cardSurface } from '@/lib/styles'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  text: string
  href?: string
  delay?: number
}

const BODY = 'relative flex h-full flex-col items-start rounded-[inherit] px-5 py-6'

export default function ServiceCard({ icon, title, text, href, delay = 0 }: ServiceCardProps) {
  const body = (
    <>
      <IconDisc icon={icon} />
      <h3 className="mt-4 text-[1.04rem]">{title}</h3>
      <p className="mt-[9px] flex-1 text-[0.85rem] leading-[1.6] text-ink-soft">{text}</p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-[7px] text-[0.85rem] font-bold text-accent">
          <span>
            Know More<span className="sr-only"> about {title}</span>
          </span>
          <ArrowRight
            className="transition-transform duration-350 ease-expo group-hover/card:translate-x-[5px]"
            size={15}
            aria-hidden="true"
          />
        </span>
      )}
    </>
  )

  return (
    <Reveal delay={delay} className="h-full">
      <TiltCard className={cn(cardSurface, 'hover:border-blue-500/30 hover:shadow-lift')}>
        {href ? (
          <Link href={href} className={BODY}>
            {body}
          </Link>
        ) : (
          <div className={BODY}>{body}</div>
        )}
      </TiltCard>
    </Reveal>
  )
}
