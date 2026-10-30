import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { buttonClasses, type ButtonStyleProps } from './Button'

interface ButtonLinkProps extends ButtonStyleProps {
  href: string
  className?: string
  children: ReactNode
}

// Internal routes go through next/link; tel: and mailto: links stay plain anchors.
export default function ButtonLink({ href, variant, size, block, className, children }: ButtonLinkProps) {
  const classes = cn(buttonClasses({ variant, size, block }), className)
  return href.startsWith('/') ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <a href={href} className={classes}>
      {children}
    </a>
  )
}
