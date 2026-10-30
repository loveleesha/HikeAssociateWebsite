import Container from '@/components/atoms/Container'
import Section from '@/components/atoms/Section'
import PartnerCard from '@/components/molecules/PartnerCard'
import SectionHeading from '@/components/molecules/SectionHeading'
import { about } from '@/data/site'

export default function CompanyStory() {
  return (
    <Section tone="tint">
      <Container>
        <SectionHeading eyebrow="Our Story" title={about.storyTitle} text={about.storyIntro} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {about.partners.map((partner, i) => (
            <PartnerCard key={partner.name} {...partner} delay={i * 120} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
