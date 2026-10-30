import { useId } from 'react'

// The middle stroke lifts on hover of the nearest `group/logo` ancestor.
export default function Logo() {
  const id = useId()
  return (
    <span className="inline-flex items-center gap-2.5 text-white">
      <svg viewBox="0 0 68 42" width="52" height="32" className="overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}a`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#0b6bf0" />
            <stop offset="1" stopColor="#3cd4f7" />
          </linearGradient>
          <linearGradient id={`${id}b`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3cd4f7" />
            <stop offset="1" stopColor="#0b6bf0" />
          </linearGradient>
        </defs>
        <path fill={`url(#${id}a)`} d="M0 42 15 0h11L11 42z" />
        <path fill={`url(#${id}a)`} d="M9 22h21l-3 8H6z" />
        <path
          className="transition-transform duration-500 ease-expo group-hover/logo:-translate-y-0.5"
          fill="currentColor"
          d="M23 42 38 0h10L33 42z"
        />
        <path fill={`url(#${id}b)`} d="M48 0h7l13 42H57z" />
        <path fill={`url(#${id}b)`} d="M38 28h17l2 7H36z" />
      </svg>
      <span className="grid text-[0.72rem] leading-[1.05] font-semibold tracking-[0.06em] uppercase">
        <strong className="text-[1.02rem] font-bold">Hike</strong> <span>Associate</span>
      </span>
    </span>
  )
}
