import type { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import { fieldControl } from '@/lib/styles'

export default function Input({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldControl, className)} {...rest} />
}
