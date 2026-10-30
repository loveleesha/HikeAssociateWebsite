import Container from '@/components/atoms/Container'
import Section from '@/components/atoms/Section'
import ProcessStep from '@/components/molecules/ProcessStep'
import SectionHeading from '@/components/molecules/SectionHeading'
import { processSteps } from '@/data/site'

export default function Process() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A Simple, Transparent Process"
          text="A structured approach to resolving every case with professionalism and care."
        />
        <ol role="list" className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-7 xl:grid-cols-4">
          {processSteps.map((step, i) => (
            <ProcessStep key={step.title} {...step} index={i} isLast={i === processSteps.length - 1} />
          ))}
        </ol>
      </Container>
    </Section>
  )
}
