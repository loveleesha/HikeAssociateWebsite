import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'outline'
export type ButtonSize = 'md' | 'sm'

export interface ButtonStyleProps {
  variant?: ButtonVariant
  size?: ButtonSize
  block?: boolean
}

const BASE =
  'group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold whitespace-nowrap transition-[translate,scale,box-shadow,background-color,color,border-color] duration-350 ease-expo active:scale-[0.97] [&>svg]:flex-none [&>svg]:transition-transform [&>svg]:duration-350 [&>svg]:ease-expo hover:[&>svg:not(.animate-spin)]:translate-x-1'

const VARIANTS: Record<ButtonVariant, string> = {
  // The ::after layer is a sweeping shine that only animates on the compositor.
  primary:
    'bg-[linear-gradient(100deg,var(--color-blue-600),var(--color-blue-500))] text-white shadow-[0_8px_22px_rgb(11_99_229/34%)] after:pointer-events-none after:absolute after:inset-0 after:-translate-x-[120%] after:bg-[linear-gradient(105deg,transparent_35%,rgb(255_255_255/34%)_50%,transparent_65%)] after:transition-transform after:duration-800 after:ease-expo hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgb(11_99_229/44%)] hover:after:translate-x-[120%] disabled:cursor-progress disabled:opacity-70',
  outline:
    'border-[1.5px] border-white/45 text-white hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy-900',
}

const SIZES: Record<ButtonSize, string> = {
  md: 'min-h-12 gap-[9px] px-[26px] py-3 text-[0.92rem]',
  sm: 'min-h-[42px] gap-[9px] px-5 py-[9px] text-[0.85rem]',
}

export function buttonClasses({ variant = 'primary', size = 'md', block = false }: ButtonStyleProps = {}) {
  return cn(BASE, VARIANTS[variant], SIZES[size], block && 'w-full')
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleProps

export default function Button({ variant, size, block, className, type = 'button', ...rest }: ButtonProps) {
  return <button type={type} className={cn(buttonClasses({ variant, size, block }), className)} {...rest} />
}
