import { Sparkles } from 'lucide-react'
import Eyebrow from '@/components/atoms/Eyebrow'
import Reveal from '@/components/atoms/Reveal'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  text?: string
  align?: 'center' | 'left'
}

export default function SectionHeading({ eyebrow, title, text, align = 'center' }: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        align === 'center' ? 'mx-auto mb-[clamp(32px,4vw,48px)] max-w-[760px] text-center' : 'mb-5 text-left',
      )}
    >
      <Eyebrow>
        <Sparkles size={13} aria-hidden="true" />
        {eyebrow}
      </Eyebrow>
      <h2 className="mt-2.5 text-[clamp(1.6rem,3.2vw,2.25rem)]">{title}</h2>
      {text && <p className="mt-3 text-ink-soft">{text}</p>}
    </Reveal>
  )
}
