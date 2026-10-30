import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbProps {
  current: string
}

export default function Breadcrumb({ current }: BreadcrumbProps) {
  return (
    <nav className="animate-[rise_0.7s_var(--ease-expo)_both]" aria-label="Breadcrumb">
      <ol className="flex items-center gap-[7px] text-[0.82rem] font-semibold text-white/76">
        <li>
          <Link href="/" className="hover:text-cyan-400">
            Home
          </Link>
        </li>
        <li className="flex items-center gap-[7px]">
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-cyan-400" aria-current="page">
            {current}
          </span>
        </li>
      </ol>
    </nav>
  )
}
