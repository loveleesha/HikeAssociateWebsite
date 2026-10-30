import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// Teaches tailwind-merge the custom tokens from globals.css, so overrides replace them correctly.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      radius: ['tile', 'card', 'panel'],
      shadow: ['card', 'lift'],
      ease: ['expo'],
      spacing: ['header', 'gutter', 'section'],
      container: ['page'],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
