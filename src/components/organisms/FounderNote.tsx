import { Quote } from 'lucide-react'
import Container from '@/components/atoms/Container'
import Reveal from '@/components/atoms/Reveal'
import Section from '@/components/atoms/Section'
import { about } from '@/data/site'

export default function FounderNote() {
  return (
    <Section tone="navy">
      <Reveal variant="scale" className="relative">
        <Container className="max-w-[820px] text-center">
          <Quote className="inline align-baseline text-cyan-400" size={40} aria-hidden="true" />
          <h2 className="mt-3.5 mb-4 text-[clamp(1.6rem,3.2vw,2.25rem)]">{about.owner.title}</h2>
          {about.owner.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-white/86">
              {paragraph}
            </p>
          ))}
          <p className="mt-5 text-[1.2rem] font-extrabold text-cyan-400">{about.owner.closing}</p>
        </Container>
      </Reveal>
    </Section>
  )
}
