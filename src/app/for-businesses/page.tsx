import Container from '@/components/atoms/Container'
import Section from '@/components/atoms/Section'
import CheckList from '@/components/molecules/CheckList'
import SectionHeading from '@/components/molecules/SectionHeading'
import SplitBlock from '@/components/molecules/SplitBlock'
import ContactSection from '@/components/organisms/ContactSection'
import Customers from '@/components/organisms/Customers'
import PageHero from '@/components/organisms/PageHero'
import Process from '@/components/organisms/Process'
import SpecialistServices from '@/components/organisms/SpecialistServices'
import { audiences } from '@/data/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'For Businesses',
  description:
    'Debt recovery, customer support and outsourcing from Hike Associate, trusted by financial institutions and businesses, with customers including Tata Capital.',
  path: '/for-businesses',
})

export default function BusinessesPage() {
  const { title, text, points } = audiences.business
  return (
    <>
      <PageHero eyebrow="For Businesses" path="/for-businesses" title={title} text={text} />

      <Section>
        <Container>
          <SplitBlock photo="tower" alt="Glass office towers rising into the sky" photoSide="end" copyFirstOnMobile>
            <SectionHeading
              eyebrow="What We Do for You"
              title="Tailored Solutions for Financial Institutions"
              align="left"
            />
            <CheckList items={points} size="md" />
          </SplitBlock>
        </Container>
      </Section>

      <SpecialistServices
        eyebrow="Services for Institutions"
        title="Recovery Services Built for Banks and Businesses"
      />

      <Process />
      <Customers tone="tint" />
      <ContactSection />
    </>
  )
}
