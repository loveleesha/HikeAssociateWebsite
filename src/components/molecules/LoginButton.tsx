import { ArrowRight } from 'lucide-react'
import { buttonClasses } from '@/components/atoms/Button'
import type { LoginLink } from '@/data/site'
import { cn } from '@/lib/cn'

interface LoginButtonProps extends LoginLink {
  className?: string
}

const TONES: Record<LoginLink['tone'], string> = {
  admin:
    'border-blue-500 bg-blue-600/20 shadow-[0_0_16px_rgb(22_119_242/28%)] hover:border-cyan-400 hover:bg-blue-600/45 hover:text-white [&>svg:first-child]:text-cyan-400',
  employee: 'border-white/60 bg-white/10 hover:border-white hover:bg-white/20 hover:text-white',
}

// Opens the staff portal in a new tab. Search engines have no reason to follow these links.
export default function LoginButton({ href, label, icon: Icon, tone, className }: LoginButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener"
      className={cn(buttonClasses({ variant: 'outline', size: 'sm' }), 'gap-2 px-3.5', TONES[tone], className)}
    >
      <Icon size={17} aria-hidden="true" />
      {label}
      {tone === 'employee' ? (
        <span className="grid size-[22px] place-items-center rounded-full bg-white/18 transition-transform duration-350 ease-expo group-hover/btn:translate-x-0.5">
          <ArrowRight size={14} aria-hidden="true" />
        </span>
      ) : (
        <ArrowRight size={15} aria-hidden="true" />
      )}
    </a>
  )
}
