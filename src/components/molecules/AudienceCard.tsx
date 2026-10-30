import { ArrowRight } from 'lucide-react'
import ButtonLink from '@/components/atoms/ButtonLink'
import Photo from '@/components/atoms/Photo'
import Reveal from '@/components/atoms/Reveal'
import Tag from '@/components/atoms/Tag'
import { cn } from '@/lib/cn'
import type { PhotoName } from '@/data/photos'
import CheckList from './CheckList'

type AudienceKind = 'business' | 'individual'

interface AudienceCardProps {
  kind: AudienceKind
  photo: PhotoName
  alt: string
  tag: string
  title: string
  text: string
  points: string[]
  cta: string
  href: string
}

const STYLES: Record<AudienceKind, { card: string; media: string; photo: string; body: string; text: string }> = {
  business: {
    card: 'bg-navy-950 text-white [--focus-ring:var(--color-cyan-400)]',
    media:
      'md:w-[66%] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgb(3_16_38/8%),var(--color-navy-950)),linear-gradient(rgb(6_66_170/30%),rgb(6_66_170/30%))] md:after:bg-[linear-gradient(90deg,var(--color-navy-950)_4%,rgb(3_16_38/72%)_44%,rgb(3_16_38/14%)_100%),linear-gradient(rgb(6_66_170/34%),rgb(6_66_170/34%))]',
    photo: '',
    body: 'md:w-[66%]',
    text: 'text-white/88',
  },
  individual: {
    card: 'bg-[linear-gradient(105deg,#fbf1e4_30%,var(--color-cream))] dark:bg-[linear-gradient(105deg,#1c2536_30%,#322f33)]',
    media: 'md:w-[46%]',
    // The photo's backdrop is near-white, so it needs a longer fade into a dark card.
    photo:
      'object-[50%_18%] md:object-[50%_20%] md:[mask-image:linear-gradient(90deg,transparent,#000_22%)] dark:brightness-[0.82] md:dark:[mask-image:linear-gradient(90deg,transparent,rgb(0_0_0/55%)_18%,#000_42%)]',
    body: 'md:w-[58%]',
    text: 'text-[#3f4e63] dark:text-ink-soft',
  },
}

export default function AudienceCard({ kind, photo, alt, tag, title, text, points, cta, href }: AudienceCardProps) {
  const styles = STYLES[kind]
  return (
    <Reveal
      variant={kind === 'business' ? 'left' : 'right'}
      className={cn(
        'group/audience relative flex flex-col overflow-hidden rounded-panel shadow-card md:min-h-[460px] md:flex-row',
        styles.card,
      )}
    >
      <div
        className={cn(
          'relative aspect-[16/10] w-full overflow-hidden md:absolute md:inset-y-0 md:right-0 md:aspect-auto',
          styles.media,
        )}
      >
        <Photo
          name={photo}
          alt={alt}
          sizes="(max-width: 1024px) 100vw, 40vw"
          className={cn('transition-transform duration-1400 ease-expo group-hover/audience:scale-106', styles.photo)}
        />
      </div>
      <div className={cn('relative flex w-full flex-col items-start p-[clamp(24px,3vw,34px)]', styles.body)}>
        <Tag tone={kind === 'business' ? 'blue' : 'cyan'}>{tag}</Tag>
        <h2 className="mt-3.5 text-[clamp(1.4rem,2.3vw,1.85rem)]">{title}</h2>
        <p className={cn('mt-3 text-[0.92rem]', styles.text)}>{text}</p>
        <CheckList items={points} className="mt-[18px] mb-[22px]" />
        <ButtonLink href={href} className="mt-auto">
          {cta} <ArrowRight size={17} aria-hidden="true" />
        </ButtonLink>
      </div>
    </Reveal>
  )
}
