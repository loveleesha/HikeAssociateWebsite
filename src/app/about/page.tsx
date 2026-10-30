import { ArrowRight } from 'lucide-react'
import ButtonLink from '@/components/atoms/ButtonLink'
import Container from '@/components/atoms/Container'
import Section from '@/components/atoms/Section'
import SectionHeading from '@/components/molecules/SectionHeading'
import SplitBlock from '@/components/molecules/SplitBlock'
import CompanyStory from '@/components/organisms/CompanyStory'
import CompanyValues from '@/components/organisms/CompanyValues'
import ContactSection from '@/components/organisms/ContactSection'
import FounderNote from '@/components/organisms/FounderNote'
import PageHero from '@/components/organisms/PageHero'
import StatsStrip from '@/components/organisms/StatsStrip'
import TeamSection from '@/components/organisms/TeamSection'
import { about } from '@/data/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'About Us',
  description:
    'Meet the partners and team behind Hike Associate, delivering efficient, ethical and customer-friendly bank recovery and customer support services.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        path="/about"
        title="Your Trusted Partner for Success"
        text="Efficient, ethical and customer-friendly recovery and support, built by a team that restores trust, stability and peace of mind."
      />
      <StatsStrip />

      <Section>
        <Container>
          <SplitBlock photo="office" alt="The team working together in a bright office">
            <SectionHeading eyebrow="Who We Are" title="Recovery with Integrity" align="left" />
            {about.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ButtonLink href="/services" className="mt-2">
              Explore Our Services <ArrowRight size={17} aria-hidden="true" />
            </ButtonLink>
          </SplitBlock>
        </Container>
      </Section>

      <CompanyStory />
      <TeamSection />
      <FounderNote />
      <CompanyValues />
      <ContactSection />
    </>
  )
}
