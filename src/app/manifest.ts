import type { MetadataRoute } from 'next'
import { company } from '@/data/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: company.name,
    description: company.tagline,
    start_url: '/',
    display: 'browser',
    background_color: '#031026',
    theme_color: '#031026',
    icons: [
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  }
}
