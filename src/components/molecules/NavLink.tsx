'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { CSSProperties, ReactNode } from 'react'

interface NavLinkProps {
  href: string
  className?: string
  style?: CSSProperties
  onClick?: () => void
  children: ReactNode
}

// Marks the current page with aria-current, which the `aria-[current=page]:` styles key off.
export default function NavLink({ href, className, style, onClick, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={className}
      style={style}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  )
}
