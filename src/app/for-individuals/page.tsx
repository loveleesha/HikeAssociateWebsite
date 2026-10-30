import Container from '@/components/atoms/Container'
import Section from '@/components/atoms/Section'
import CheckList from '@/components/molecules/CheckList'
import SectionHeading from '@/components/molecules/SectionHeading'
import SplitBlock from '@/components/molecules/SplitBlock'
import ContactSection from '@/components/organisms/ContactSection'
import PageHero from '@/components/organisms/PageHero'
import Process from '@/components/organisms/Process'
import SettlementOptions from '@/components/organisms/SettlementOptions'
import { audiences, contactSection } from '@/data/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'For Individuals',
  description:
    'Resolve outstanding dues with one-time settlements, installment plans, negotiated and mediated settlements. Simple, transparent, stress-free guidance.',
  path: '/for-individuals',
})

export default function IndividualsPage() {
  const { title, text } = audiences.individual
  return (
    <>
      <PageHero eyebrow="For Individuals" path="/for-individuals" title={title} text={text} />
      <SettlementOptions />

      <Section tone="tint">
        <Container>
          <SplitBlock photo="guidance" alt="A smiling woman">
            <SectionHeading eyebrow="How We Help" title="Expert Assistance You Can Rely On" align="left" />
            <p>
              Looking for expert assistance in financial debt solutions? Our specialized recovery agency helps
              businesses and individuals settle outstanding dues and restore financial stability.
            </p>
            <CheckList items={contactSection.highlights} size="md" />
          </SplitBlock>
        </Container>
      </Section>

      <Process />
      <ContactSection />
    </>
  )
}
