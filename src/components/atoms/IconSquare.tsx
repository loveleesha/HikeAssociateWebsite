import type { LucideIcon } from 'lucide-react'

interface IconSquareProps {
  icon: LucideIcon
}

export default function IconSquare({ icon: Icon }: IconSquareProps) {
  return (
    <span className="grid size-11 flex-none place-items-center rounded-[11px] bg-blue-600 text-white">
      <Icon size={20} aria-hidden="true" />
    </span>
  )
}
