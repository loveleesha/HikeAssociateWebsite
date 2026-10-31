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
import { audiences, whyChoose } from '@/data/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'For Businesses',
  description:
    'Debt recovery, customer support and outsourcing from Hike Associate, trusted by financial institutions and businesses, with customers including TATA Capital.',
  path: '/for-businesses',
})

const telesales = whyChoose.find((item) => item.title === 'Real Estate Telesales Excellence')

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

      {telesales && (
        <Section id="telesales">
          <Container>
            <SplitBlock photo="consult" alt="A sales consultant advising two customers">
              <SectionHeading eyebrow="Real Estate" title={telesales.title} align="left" />
              <p>{telesales.text}</p>
            </SplitBlock>
          </Container>
        </Section>
      )}

      <Customers tone="tint" />
      <Process />
      <ContactSection />
    </>
  )
}
