import type { ReactNode } from 'react'

interface FormFieldProps {
  label: string
  name: string
  error?: string
  required?: boolean
  children: ReactNode
}

export default function FormField({ label, name, error, required = false, children }: FormFieldProps) {
  return (
    <div className="grid gap-[5px]">
      <label htmlFor={name} className="text-[0.8rem] font-semibold text-ink-soft">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p className="text-[0.78rem] font-semibold text-error" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}
