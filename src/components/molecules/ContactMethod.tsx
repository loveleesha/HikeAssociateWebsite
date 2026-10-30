import type { LucideIcon } from 'lucide-react'
import IconSquare from '@/components/atoms/IconSquare'

interface ContactMethodProps {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

export default function ContactMethod({ icon, label, value, href }: ContactMethodProps) {
  const valueClasses = 'text-[0.88rem] font-bold wrap-anywhere'
  return (
    <li className="flex min-w-0 items-center gap-3">
      <IconSquare icon={icon} />
      <div className="grid min-w-0 leading-[1.4]">
        <span className="text-[0.76rem] font-bold text-cyan-400">{label}</span>
        {href ? (
          <a href={href} className={`${valueClasses} hover:underline`}>
            {value}
          </a>
        ) : (
          <b className={valueClasses}>{value}</b>
        )}
      </div>
    </li>
  )
}
