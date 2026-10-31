import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { buttonClasses, type ButtonStyleProps } from './Button'

interface ButtonLinkProps extends ButtonStyleProps {
  href: string
  rel?: string
  className?: string
  children: ReactNode
}

// Internal routes go through next/link; tel:, mailto: and external links stay plain anchors.
export default function ButtonLink({ href, rel, variant, size, block, className, children }: ButtonLinkProps) {
  const classes = cn(buttonClasses({ variant, size, block }), className)
  return href.startsWith('/') ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <a href={href} rel={rel} className={classes}>
      {children}
    </a>
  )
}
