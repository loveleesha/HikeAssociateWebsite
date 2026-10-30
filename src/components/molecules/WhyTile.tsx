import type { LucideIcon } from 'lucide-react'
import Reveal from '@/components/atoms/Reveal'
import TiltCard from '@/components/atoms/TiltCard'

interface WhyTileProps {
  icon: LucideIcon
  title: string
  text: string
  delay?: number
}

export default function WhyTile({ icon: Icon, title, text, delay = 0 }: WhyTileProps) {
  return (
    <Reveal delay={delay} variant="scale">
      <TiltCard className="rounded-tile border border-[rgb(120_170_255/16%)] bg-[rgb(19_49_92/56%)] px-5 py-[22px] before:bg-[radial-gradient(280px_circle_at_var(--mx)_var(--my),rgb(60_212_247/18%),transparent_70%)] hover:border-cyan-400/46">
        <Icon
          className="inline align-baseline text-cyan-400 transition-transform duration-500 ease-expo group-hover/card:-translate-y-[3px] group-hover/card:scale-110"
          size={30}
          strokeWidth={1.6}
          aria-hidden="true"
        />
        <h3 className="mt-3 text-[1.02rem]">{title}</h3>
        <p className="mt-[7px] text-[0.85rem] leading-[1.55] text-white/82">{text}</p>
      </TiltCard>
    </Reveal>
  )
}
