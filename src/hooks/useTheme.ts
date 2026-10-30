'use client'

import { useSyncExternalStore } from 'react'
import { THEME_STORAGE_KEY, type Theme } from '@/lib/theme'

function savedTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY)
  } catch {
    return null
  }
}

function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Storage blocked: the choice still applies until the page is reloaded.
  }
}

const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme
}

// The data-theme attribute is the source of truth, so the DOM acts as the store.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

  // Follow the OS setting until the visitor makes their own choice.
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const onSystemChange = (e: MediaQueryListEvent) => {
    if (!savedTheme()) applyTheme(e.matches ? 'dark' : 'light')
  }
  media.addEventListener('change', onSystemChange)

  return () => {
    observer.disconnect()
    media.removeEventListener('change', onSystemChange)
  }
}

const getSnapshot = () => document.documentElement.dataset.theme as Theme
const getServerSnapshot = (): Theme => 'light'

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    saveTheme(next)
    applyTheme(next)
  }

  return [theme, toggleTheme] as const
}
