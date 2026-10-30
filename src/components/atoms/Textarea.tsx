import type { TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import { fieldControl } from '@/lib/styles'

export default function Textarea({ className, ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldControl, 'resize-y', className)} {...rest} />
}
