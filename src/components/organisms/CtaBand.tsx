import { ArrowRight } from 'lucide-react'
import ButtonLink from '@/components/atoms/ButtonLink'
import Container from '@/components/atoms/Container'
import Eyebrow from '@/components/atoms/Eyebrow'
import Reveal from '@/components/atoms/Reveal'
import Section from '@/components/atoms/Section'

interface CtaBandProps {
  eyebrow: string
  title: string
  text: string
  cta: string
  href: string
}

export default function CtaBand({ eyebrow, title, text, cta, href }: CtaBandProps) {
  return (
    <Section tone="navy">
      <Reveal variant="scale" className="relative">
        <Container className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Eyebrow light>{eyebrow}</Eyebrow>
            <h2 className="mt-2 text-[clamp(1.5rem,3vw,2.1rem)]">{title}</h2>
            <p className="mt-2.5 max-w-[680px] text-white/86">{text}</p>
          </div>
          <ButtonLink href={href}>
            {cta} <ArrowRight size={17} aria-hidden="true" />
          </ButtonLink>
        </Container>
      </Reveal>
    </Section>
  )
}
