import Container from '@/components/atoms/Container'
import Section from '@/components/atoms/Section'
import SectionHeading from '@/components/molecules/SectionHeading'
import { testimonials } from '@/data/site'
import TestimonialCarousel from './TestimonialCarousel'

export default function Testimonials() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          text="Trusted by financial institutions and businesses."
        />
        <TestimonialCarousel items={testimonials} />
      </Container>
    </Section>
  )
}
