'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, Phone, X } from 'lucide-react'
import ButtonLink from '@/components/atoms/ButtonLink'
import Container from '@/components/atoms/Container'
import LogoLink from '@/components/molecules/LogoLink'
import NavLink from '@/components/molecules/NavLink'
import ThemeToggle from '@/components/molecules/ThemeToggle'
import { company, loginLinks, navLinks } from '@/data/site'
import { subscribeScroll } from '@/lib/scroll'

const DESKTOP_LINK =
  'relative py-2 text-[0.875rem] font-semibold whitespace-nowrap text-white/86 transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:origin-right after:scale-x-0 after:rounded-xs after:bg-cyan-400 after:transition-transform after:duration-400 after:ease-expo hover:text-cyan-400 hover:after:origin-left hover:after:scale-x-100 aria-[current=page]:text-cyan-400 aria-[current=page]:after:origin-left aria-[current=page]:after:scale-x-100'

const MOBILE_LINK =
  '-translate-x-[18px] border-b border-white/10 py-[15px] text-[1.2rem] font-bold text-white opacity-0 transition-[opacity,translate] duration-450 ease-expo in-data-open:translate-x-0 in-data-open:opacity-100 in-data-open:delay-[calc(var(--i)*45ms+60ms)] aria-[current=page]:text-cyan-400'

export default function Header() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  // Close the menu when the route changes, including on browser back and forward.
  const [lastPathname, setLastPathname] = useState(pathname)
  if (pathname !== lastPathname) {
    setLastPathname(pathname)
    setOpen(false)
  }

  useEffect(() => subscribeScroll((y) => headerRef.current?.toggleAttribute('data-scrolled', y > 24)), [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    // Keeps keyboard and screen reader users inside the menu while it covers the page.
    const background = document.querySelectorAll<HTMLElement>('main, footer, body > button')
    background.forEach((el) => {
      el.inert = true
    })
    const desktop = window.matchMedia('(min-width: 1121px)')
    const onLayoutChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false)
    }
    desktop.addEventListener('change', onLayoutChange)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      background.forEach((el) => {
        el.inert = false
      })
      desktop.removeEventListener('change', onLayoutChange)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      ref={headerRef}
      data-open={open ? '' : undefined}
      className="fixed inset-x-0 top-0 z-100 border-b border-transparent bg-[linear-gradient(180deg,rgb(3_16_38/78%),transparent)] transition-colors duration-350 [--focus-ring:var(--color-cyan-400)] data-open:border-white/8 data-open:bg-navy-950/96 data-scrolled:border-white/8 data-scrolled:bg-navy-950/96"
    >
      <Container className="flex h-header items-center justify-between gap-5">
        <LogoLink />

        <nav className="hidden gap-[clamp(14px,1.4vw,30px)] nav:flex" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <NavLink key={href} href={href} className={DESKTOP_LINK}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          {loginLinks.map(({ href, label }) => (
            <ButtonLink
              key={href}
              href={href}
              rel="nofollow"
              variant="outline"
              size="sm"
              className="hidden nav:inline-flex"
            >
              {label}
            </ButtonLink>
          ))}

          <ButtonLink href="/contact" size="sm" className="hidden 3xl:inline-flex">
            Get in Touch <ArrowRight size={16} aria-hidden="true" />
          </ButtonLink>

          <button
            ref={toggleRef}
            type="button"
            className="grid size-11 place-items-center rounded-[10px] text-white nav:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        inert={!open}
        className="invisible fixed inset-x-0 top-header bottom-0 flex -translate-y-3 flex-col gap-7 overflow-y-auto bg-navy-950 px-gutter pt-5 pb-10 opacity-0 transition-[opacity,translate,visibility] duration-300 ease-expo in-data-open:visible in-data-open:translate-y-0 in-data-open:opacity-100"
      >
        <nav className="grid" aria-label="Mobile">
          {navLinks.map(({ href, label }, i) => (
            <NavLink key={href} href={href} className={MOBILE_LINK} style={{ '--i': i }} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </nav>
        <ButtonLink href={company.phoneHref}>
          <Phone size={16} aria-hidden="true" /> {company.phoneDisplay}
        </ButtonLink>
        <div className="-mt-3 grid gap-3 xs:grid-cols-2">
          {loginLinks.map(({ href, label }) => (
            <ButtonLink key={href} href={href} rel="nofollow" variant="outline">
              {label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </header>
  )
}
