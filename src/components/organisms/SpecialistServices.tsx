import Container from '@/components/atoms/Container'
import Section from '@/components/atoms/Section'
import SectionHeading from '@/components/molecules/SectionHeading'
import ServiceCard from '@/components/molecules/ServiceCard'
import { specialistServices } from '@/data/site'

interface SpecialistServicesProps {
  eyebrow: string
  title: string
}

export default function SpecialistServices({ eyebrow, title }: SpecialistServicesProps) {
  return (
    <Section tone="tint">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {specialistServices.map((service, i) => (
            <ServiceCard key={service.title} {...service} delay={(i % 3) * 90} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
