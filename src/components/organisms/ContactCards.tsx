import { Mail, MapPin, Phone } from 'lucide-react'
import Container from '@/components/atoms/Container'
import Section from '@/components/atoms/Section'
import ContactInfoCard from '@/components/molecules/ContactInfoCard'
import { company } from '@/data/site'

const CARDS = [
  { icon: MapPin, title: 'Head Office', value: `${company.address}, ${company.legalName}` },
  { icon: Mail, title: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: Phone, title: 'Phone', value: company.phoneDisplay, href: company.phoneHref },
]

export default function ContactCards() {
  return (
    <Section>
      <Container className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {CARDS.map((card, i) => (
          <ContactInfoCard key={card.title} {...card} delay={i * 100} />
        ))}
      </Container>
    </Section>
  )
}
