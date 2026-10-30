import Image from 'next/image'
import { cn } from '@/lib/cn'
import { PHOTOS, type PhotoName } from '@/data/photos'

interface PhotoProps {
  name: PhotoName
  alt?: string
  sizes?: string
  preload?: boolean
  className?: string
}

// Decorative by default: pass `alt` only when the photo adds meaning.
export default function Photo({ name, alt = '', sizes = '100vw', preload = false, className }: PhotoProps) {
  const { src, width, height } = PHOTOS[name]
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      sizes={sizes}
      preload={preload}
      className={cn('size-full object-cover', className)}
    />
  )
}
