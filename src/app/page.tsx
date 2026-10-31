import Audiences from '@/components/organisms/Audiences'
import ContactSection from '@/components/organisms/ContactSection'
import Customers from '@/components/organisms/Customers'
import Hero from '@/components/organisms/Hero'
import Process from '@/components/organisms/Process'
import ServicesOverview from '@/components/organisms/ServicesOverview'
import StatsStrip from '@/components/organisms/StatsStrip'
import Testimonials from '@/components/organisms/Testimonials'
import WhyChoose from '@/components/organisms/WhyChoose'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Hike Associate | Debt Recovery & Customer Support Solutions',
  absoluteTitle: true,
  description:
    'Hike Associate provides ethical debt and asset recovery, settlement support and 24/7 customer support for businesses and individuals.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Customers />
      <ServicesOverview />
      <Audiences />
      <Process />
      <WhyChoose />
      <Testimonials />
      <ContactSection />
    </>
  )
}
