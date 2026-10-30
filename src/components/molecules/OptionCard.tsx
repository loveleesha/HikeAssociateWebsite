import type { LucideIcon } from 'lucide-react'
import IconDisc from '@/components/atoms/IconDisc'
import Photo from '@/components/atoms/Photo'
import Reveal from '@/components/atoms/Reveal'
import { cn } from '@/lib/cn'
import { cardSurface } from '@/lib/styles'
import type { PhotoName } from '@/data/photos'

interface OptionCardProps {
  icon: LucideIcon
  image: PhotoName
  title: string
  text: string
  delay?: number
}

// The surface sits inside Reveal so its hover shadow doesn't inherit the reveal's delay.
export default function OptionCard({ icon, image, title, text, delay = 0 }: OptionCardProps) {
  return (
    <Reveal delay={delay}>
      <article
        className={cn(
          cardSurface,
          'group/option h-full overflow-hidden transition-shadow duration-400 ease-expo hover:shadow-lift',
        )}
      >
        <div className="relative aspect-video overflow-hidden">
          <Photo
            name={image}
            sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="transition-transform duration-1200 ease-expo group-hover/option:scale-107"
          />
          <IconDisc icon={icon} size={22} className="absolute bottom-3 left-4 size-[46px] bg-surface shadow-card" />
        </div>
        <div className="px-5 pt-[18px] pb-[22px]">
          <h3 className="text-[1.08rem]">{title}</h3>
          <p className="mt-[7px] text-[0.9rem] text-ink-soft">{text}</p>
        </div>
      </article>
    </Reveal>
  )
}
