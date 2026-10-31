import Container from '@/components/atoms/Container'
import Reveal from '@/components/atoms/Reveal'
import Section from '@/components/atoms/Section'
import SectionHeading from '@/components/molecules/SectionHeading'
import { customers } from '@/data/site'
import { cn } from '@/lib/cn'
import { cardSurface } from '@/lib/styles'

interface CustomersProps {
  tone?: 'plain' | 'tint'
}

export default function Customers({ tone = 'plain' }: CustomersProps) {
  return (
    <Section tone={tone} id="customers">
      <Container>
        <SectionHeading
          eyebrow="Our Customers"
          title="Financial Institutions That Trust Hike Associate"
          text="We are proud to support these customers with professional, ethical and customer-friendly services."
        />
        <ul role="list" className="grid grid-cols-1 gap-3 xs:grid-cols-2 md:gap-4 xl:grid-cols-4">
          {customers.map((name, i) => (
            <Reveal
              as="li"
              key={name}
              delay={i * 70}
              className={cn(cardSurface, 'px-5 py-6 text-center text-[1.05rem] font-bold text-ink')}
            >
              {name}
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
