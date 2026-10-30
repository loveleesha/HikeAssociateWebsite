import Container from '@/components/atoms/Container'
import Section from '@/components/atoms/Section'
import OptionCard from '@/components/molecules/OptionCard'
import SectionHeading from '@/components/molecules/SectionHeading'
import { settlementIntro, settlementOptions } from '@/data/site'

export default function SettlementOptions() {
  return (
    <Section id="settlement-options">
      <Container>
        <SectionHeading
          eyebrow="Settlement Options"
          title="Flexible Options for Your Situation"
          text={settlementIntro}
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {settlementOptions.map((option, i) => (
            <OptionCard key={option.title} {...option} delay={(i % 3) * 90} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
