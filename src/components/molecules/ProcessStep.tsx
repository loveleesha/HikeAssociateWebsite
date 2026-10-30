import { ChevronRight, type LucideIcon } from 'lucide-react'
import Reveal from '@/components/atoms/Reveal'
import { cn } from '@/lib/cn'

interface ProcessStepProps {
  icon: LucideIcon
  title: string
  text: string
  index: number
  isLast: boolean
}

export default function ProcessStep({ icon: Icon, title, text, index, isLast }: ProcessStepProps) {
  return (
    <Reveal as="li" delay={index * 140} variant="scale" className="relative text-center" style={{ '--step': index }}>
      <div className="inline-flex items-start gap-2.5">
        <span className="mt-7 grid size-8 place-items-center rounded-full bg-disc text-[0.74rem] font-extrabold text-accent">
          0{index + 1}
        </span>
        {/* The ring pulses outward on a loop, staggered per step */}
        <span className="relative grid size-20 place-items-center rounded-full bg-disc text-accent after:absolute after:inset-0 after:animate-ring after:rounded-full after:border-2 after:border-blue-500 after:opacity-0 after:[animation-delay:calc(var(--step)*1s)]">
          <Icon size={30} strokeWidth={1.6} aria-hidden="true" />
        </span>
      </div>
      <h3 className="mx-auto mt-4 max-w-[200px] text-[1.04rem]">{title}</h3>
      <p className="mx-auto mt-2 max-w-[220px] text-[0.87rem] leading-[1.55] text-ink-soft">{text}</p>
      {!isLast && (
        <ChevronRight
          // In the two-column layout the second step ends a row, so it has nothing to point at.
          className={cn(
            'absolute top-7 -right-[25px] hidden animate-nudge text-[#93a4bd] sm:block',
            index === 1 && 'sm:max-xl:hidden',
          )}
          size={22}
          aria-hidden="true"
        />
      )}
    </Reveal>
  )
}
