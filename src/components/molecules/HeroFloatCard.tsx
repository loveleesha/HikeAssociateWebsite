import type { LucideIcon } from 'lucide-react'

interface HeroFloatCardProps {
  icon: LucideIcon
  title: string
  text: string
  index: number
}

// Slides in once everywhere; the idle bob only runs in the desktop layout where the cards float free.
export default function HeroFloatCard({ icon: Icon, title, text, index }: HeroFloatCardProps) {
  return (
    <li
      className="animate-[float-in_1s_calc(var(--i)*140ms+0.6s)_var(--ease-expo)_both] lg:animate-[float-in_1s_calc(var(--i)*140ms+0.6s)_var(--ease-expo)_both,bob_6s_calc(var(--i)*0.9s+1.8s)_ease-in-out_infinite_alternate] 2xl:nth-2:ml-[26px] 2xl:nth-3:ml-1.5"
      style={{ '--i': index }}
    >
      <div className="flex h-full flex-col items-start gap-[7px] rounded-tile border border-white/55 bg-white/92 p-[11px] text-navy-900 shadow-[0_16px_34px_rgb(1_10_28/34%)] lg:h-auto lg:flex-row lg:items-center lg:gap-2.5 lg:px-3 lg:py-[9px] dark:border-white/14 dark:bg-[rgb(13_30_56/88%)] dark:text-ink">
        <span className="grid size-[34px] flex-none place-items-center rounded-[10px] bg-disc text-accent lg:size-10">
          <Icon size={22} aria-hidden="true" />
        </span>
        <span>
          <strong className="block text-[0.82rem] leading-[1.25]">{title}</strong>
          <small className="mt-0.5 block text-[0.7rem] leading-[1.3] text-ink-soft">{text}</small>
        </span>
      </div>
    </li>
  )
}
