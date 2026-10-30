import Container from '@/components/atoms/Container'
import Section from '@/components/atoms/Section'
import SectionHeading from '@/components/molecules/SectionHeading'
import ValueCard from '@/components/molecules/ValueCard'
import { whyChoose } from '@/data/site'

export default function CompanyValues() {
  return (
    <Section tone="tint">
      <Container>
        <SectionHeading eyebrow="Why Choose Us" title="What Sets Us Apart" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whyChoose.map(({ icon, title, text }, i) => (
            <ValueCard key={title} icon={icon} title={title} text={text} delay={(i % 3) * 90} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
