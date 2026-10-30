'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

export default function ThemeToggle() {
  const [theme, toggleTheme] = useTheme()

  return (
    <button
      type="button"
      className="grid size-11 place-items-center rounded-[10px] text-white/86 transition-colors duration-200 hover:text-cyan-400"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
    >
      {/* Both icons render and CSS picks one, so the server markup can't show the wrong icon before hydration. */}
      <Sun className="hidden dark:block" size={20} aria-hidden="true" />
      <Moon className="dark:hidden" size={20} aria-hidden="true" />
    </button>
  )
}
