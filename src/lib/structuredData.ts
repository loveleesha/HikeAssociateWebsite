import { about, company, coreServices } from '@/data/site'
import { absoluteUrl, SITE_URL } from './seo'

const BUSINESS_ID = `${SITE_URL}/#business`
const WEBSITE_ID = `${SITE_URL}/#website`

// Only facts stated on the site belong here. Search engines penalize markup that doesn't match the visible page,
// so there is deliberately no review or rating data.
export function siteSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': BUSINESS_ID,
        name: company.name,
        legalName: company.legalName,
        description: company.tagline,
        url: absoluteUrl('/'),
        logo: absoluteUrl('/apple-icon'),
        image: absoluteUrl('/opengraph-image'),
        telephone: company.phoneHref.replace('tel:', ''),
        email: company.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: company.postalAddress.street,
          addressLocality: company.postalAddress.locality,
          addressRegion: company.postalAddress.region,
          addressCountry: company.postalAddress.country,
        },
        founder: { '@type': 'Person', name: about.partners[0]?.name },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services',
          itemListElement: coreServices.map(({ id, title }) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: title, url: absoluteUrl(`/services#${id}`) },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: company.name,
        url: absoluteUrl('/'),
        inLanguage: 'en-IN',
        publisher: { '@id': BUSINESS_ID },
      },
    ],
  }
}

export function breadcrumbSchema(name: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name, item: absoluteUrl(path) },
    ],
  }
}
