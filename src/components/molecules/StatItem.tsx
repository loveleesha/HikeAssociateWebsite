import type { LucideIcon } from 'lucide-react'
import CountUp from '@/components/atoms/CountUp'
import IconDisc from '@/components/atoms/IconDisc'
import Reveal from '@/components/atoms/Reveal'

interface StatItemProps {
  icon: LucideIcon
  value: number
  suffix: string
  label: string
  delay?: number
}

export default function StatItem({ icon, value, suffix, label, delay = 0 }: StatItemProps) {
  return (
    <Reveal
      delay={delay}
      className="flex flex-col items-center gap-2 border-line px-3 py-1.5 text-center even:border-l sm:flex-row sm:gap-3.5 sm:text-left lg:justify-center lg:not-first:border-l"
    >
      <IconDisc icon={icon} />
      <div>
        <strong className="block text-[clamp(1.35rem,2.2vw,1.65rem)] leading-[1.2] font-extrabold tabular-nums">
          <CountUp value={value} suffix={suffix} />
        </strong>
        <span className="block text-[0.82rem] leading-[1.3] text-ink-soft sm:inline sm:leading-[inherit]">{label}</span>
      </div>
    </Reveal>
  )
}
