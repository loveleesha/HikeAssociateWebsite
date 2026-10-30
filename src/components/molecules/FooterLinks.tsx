import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface FooterLinksProps {
  title: string
  links: { href: string; label: string }[]
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <nav aria-label={title}>
      <h2 className="mb-3.5 text-[0.98rem] font-bold tracking-normal text-white">{title}</h2>
      <ul className="grid gap-1.5">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="inline-flex items-start gap-[5px] py-[3px] transition-[color,translate] duration-200 ease-expo hover:translate-x-1 hover:text-cyan-400"
            >
              <ChevronRight className="mt-1 flex-none text-cyan-400" size={14} aria-hidden="true" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
