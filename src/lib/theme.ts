export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'

// Runs before first paint so dark mode never flashes white.
export const themeInitScript = `
  var theme
  try {
    theme = localStorage.getItem('${THEME_STORAGE_KEY}')
  } catch (e) {}
  if (theme !== 'light' && theme !== 'dark') {
    theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  document.documentElement.dataset.theme = theme
`
