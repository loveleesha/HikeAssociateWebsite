import type { ReactNode } from 'react'
import Photo from '@/components/atoms/Photo'
import Reveal from '@/components/atoms/Reveal'
import { cn } from '@/lib/cn'
import type { PhotoName } from '@/data/photos'

interface SplitBlockProps {
  id?: string
  as?: 'div' | 'article'
  photo: PhotoName
  alt?: string
  /** Which column holds the photo on desktop. */
  photoSide?: 'start' | 'end'
  /** Stack the copy above the photo on mobile. */
  copyFirstOnMobile?: boolean
  className?: string
  children: ReactNode
}

// Two-column photo and copy layout that stacks on mobile.
export default function SplitBlock({
  id,
  as: Tag = 'div',
  photo,
  alt,
  photoSide = 'start',
  copyFirstOnMobile = false,
  className,
  children,
}: SplitBlockProps) {
  const photoAtEnd = photoSide === 'end'
  return (
    <Tag id={id} className={cn('grid grid-cols-1 items-center gap-[clamp(28px,5vw,64px)] lg:grid-cols-2', className)}>
      <Reveal
        variant={photoAtEnd ? 'right' : 'left'}
        className={cn('group/media aspect-3/2 overflow-hidden rounded-panel shadow-lift', photoAtEnd && 'lg:order-2')}
      >
        <Photo
          name={photo}
          alt={alt}
          sizes="(max-width: 900px) 100vw, 50vw"
          className="transition-transform duration-1200 ease-expo group-hover/media:scale-105"
        />
      </Reveal>
      <Reveal
        variant={photoAtEnd ? 'left' : 'right'}
        className={cn(copyFirstOnMobile && '-order-1 lg:order-none', '[&>p]:mb-3.5 [&>p]:text-ink-soft')}
      >
        {children}
      </Reveal>
    </Tag>
  )
}
