import ContactSection from '@/components/organisms/ContactSection'
import CoreServices from '@/components/organisms/CoreServices'
import CtaBand from '@/components/organisms/CtaBand'
import PageHero from '@/components/organisms/PageHero'
import SpecialistServices from '@/components/organisms/SpecialistServices'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Services',
  description:
    'Bank recovery and debt collection, voice and non-voice support, BPO, loan and credit card recovery, financial consultancy and fraud prevention services.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        path="/services"
        title="Recovery, Support and Financial Operations"
        text="Efficient debt collection for financial institutions, guidance on risk management, and 24/7 customer support for quick query resolution."
      />
      <CoreServices />
      <SpecialistServices eyebrow="Specialist Services" title="Support at Every Stage of Recovery" />
      <CtaBand
        eyebrow="Join Us"
        title="Tailored Solutions for Financial Institutions"
        text="We are dedicated to helping businesses recover debts, enhance customer experience, and optimize financial operations, all while maintaining the highest ethical standards."
        cta="Register Today"
        href="/contact"
      />
      <ContactSection />
    </>
  )
}
