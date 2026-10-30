import Container from '@/components/atoms/Container'
import Section from '@/components/atoms/Section'
import SectionHeading from '@/components/molecules/SectionHeading'
import ServiceCard from '@/components/molecules/ServiceCard'
import { homeServices } from '@/data/site'

export default function ServicesOverview() {
  return (
    <Section tone="tint">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Financial & Business Solutions"
          text="Effective and flexible solutions to help individuals and businesses resolve their financial obligations seamlessly."
        />
        <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-3 md:gap-4 2xl:grid-cols-6">
          {homeServices.map((service, i) => (
            <ServiceCard key={service.title} {...service} delay={i * 70} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
