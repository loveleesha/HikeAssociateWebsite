import type { Metadata } from 'next'
import { company } from '@/data/site'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hikeassociate.com'

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString()

// Setting openGraph on a page replaces the parent's, including the image from app/opengraph-image.tsx.
const SOCIAL_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: `${company.name}: Building Trust. Recovering Value.`,
}

interface PageSeo {
  title: string
  description: string
  path: string
  /** Use the title as written, without the "| Hike Associate" suffix. */
  absoluteTitle?: boolean
}

export function pageMetadata({ title, description, path, absoluteTitle = false }: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${company.name}`
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type: 'website',
      siteName: company.name,
      locale: 'en_IN',
      images: [SOCIAL_IMAGE],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [SOCIAL_IMAGE] },
  }
}
