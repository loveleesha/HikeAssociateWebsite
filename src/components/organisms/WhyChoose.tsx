import { ArrowRight } from 'lucide-react'
import ButtonLink from '@/components/atoms/ButtonLink'
import Container from '@/components/atoms/Container'
import Reveal from '@/components/atoms/Reveal'
import Section from '@/components/atoms/Section'
import WhyTile from '@/components/molecules/WhyTile'
import { whyChoose } from '@/data/site'

export default function WhyChoose() {
  return (
    <Section tone="navy" className="py-[clamp(52px,7vw,78px)]">
      <Container className="relative grid grid-cols-1 items-center gap-[clamp(32px,5vw,64px)] xl:grid-cols-[1fr_1.16fr]">
        <Reveal variant="left">
          <p className="text-[0.78rem] leading-normal font-extrabold tracking-[0.14em] text-cyan-400 uppercase">
            Why Choose <span className="block">Hike Associate</span>
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.6rem)]">Your Trusted Partner for Success</h2>
          <p className="mt-4 mb-[26px] max-w-[480px] text-white/86">
            At the core of our services is a customer-first philosophy, delivered with empathy, integrity and the
            highest ethical standards.
          </p>
          <ButtonLink href="/about">
            Learn More About Us <ArrowRight size={17} aria-hidden="true" />
          </ButtonLink>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whyChoose.slice(0, 4).map(({ icon, title, short }, i) => (
            <WhyTile key={title} icon={icon} title={title} text={short} delay={i * 110} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
