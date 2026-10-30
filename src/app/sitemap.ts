import type { MetadataRoute } from 'next'
import { navLinks } from '@/data/site'
import { absoluteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map(({ href }) => ({ url: absoluteUrl(href) }))
}
