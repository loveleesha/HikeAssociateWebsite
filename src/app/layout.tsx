import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import type { ReactNode } from 'react'
import BackToTop from '@/components/atoms/BackToTop'
import JsonLd from '@/components/atoms/JsonLd'
import ScrollProgress from '@/components/atoms/ScrollProgress'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import { SITE_URL } from '@/lib/seo'
import { siteSchema } from '@/lib/structuredData'
import { themeInitScript } from '@/lib/theme'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Hike Associate | Debt Recovery & Customer Support Solutions',
    template: '%s | Hike Associate',
  },
  description:
    'Hike Associate specializes in debt and asset recovery, bank recovery solutions, settlement support and customer support for financial institutions, businesses and individuals.',
  icons: { icon: { url: '/favicon.svg', type: 'image/svg+xml' } },
  openGraph: {
    title: 'Hike Associate | Building Trust. Recovering Value.',
    description: 'Efficient, ethical and reliable debt recovery, settlement and customer support solutions.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#031026',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // The theme script sets data-theme before hydration, so React must not flag the difference.
    <html lang="en-IN" className={plusJakarta.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <JsonLd data={siteSchema()} />
        <a
          href="#main"
          className="fixed top-2.5 left-2.5 z-200 -translate-y-[200%] rounded-lg bg-surface px-4 py-2.5 font-bold focus:translate-y-0"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
