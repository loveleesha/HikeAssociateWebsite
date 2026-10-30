import { Quote } from 'lucide-react'
import Monogram from '@/components/atoms/Monogram'
import { cardSurface } from '@/lib/styles'
import { cn } from '@/lib/cn'
import type { Testimonial } from '@/data/site'

interface TestimonialCardProps extends Testimonial {
  isClone: boolean
}

export default function TestimonialCard({ quote, author, isClone }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        cardSurface,
        'relative flex min-h-[210px] flex-[0_0_calc((100%_-_(var(--visible)_-_1)_*_var(--gap))_/_var(--visible))] flex-col justify-between gap-[18px] rounded-tile px-[22px] py-[26px]',
      )}
      aria-hidden={isClone}
    >
      <Quote className="absolute top-[18px] right-[18px] fill-disc text-disc" size={28} aria-hidden="true" />
      <blockquote className="relative text-[0.98rem] leading-[1.6]">“{quote}”</blockquote>
      <figcaption className="flex items-center gap-3">
        <Monogram text={author.charAt(0)} />
        <span>
          <strong className="block text-[0.9rem] leading-[1.3]">{author}</strong>
          <small className="text-[0.76rem] text-ink-soft">Banking Partner</small>
        </span>
      </figcaption>
    </figure>
  )
}
