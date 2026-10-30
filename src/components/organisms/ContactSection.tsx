import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import ButtonLink from '@/components/atoms/ButtonLink'
import Container from '@/components/atoms/Container'
import Eyebrow from '@/components/atoms/Eyebrow'
import Globe from '@/components/atoms/Globe'
import Reveal from '@/components/atoms/Reveal'
import ContactMethod from '@/components/molecules/ContactMethod'
import { company, contactSection } from '@/data/site'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(105deg,var(--color-navy-950),#052a63_62%,#0b4cb0)] py-[clamp(52px,7vw,80px)] text-white [--focus-ring:var(--color-cyan-400)]"
    >
      <div
        className="pointer-events-none absolute -top-10 -right-[18%] aspect-square w-[min(560px,80vw)] opacity-80 xl:top-1/2 xl:right-auto xl:left-[clamp(120px,34%,520px)] xl:-translate-y-1/2 xl:opacity-100"
        aria-hidden="true"
      >
        <Globe />
      </div>
      <Container className="relative grid grid-cols-1 items-center gap-[clamp(32px,5vw,64px)] xl:grid-cols-[1fr_minmax(0,470px)]">
        <Reveal variant="left">
          <Eyebrow light>Get in Touch</Eyebrow>
          <h2 className="mt-2.5 text-[clamp(1.75rem,3.5vw,2.5rem)]">
            Let’s Discuss
            <br />
            Your Requirements
          </h2>
          <p className="mt-3.5 max-w-[500px] text-[0.95rem] text-white/88">{contactSection.text}</p>
          <ul className="mt-6 mb-7 grid gap-x-[26px] gap-y-4 sm:flex sm:flex-wrap">
            <ContactMethod icon={Phone} label="Call Us" value={company.phoneDisplay} href={company.phoneHref} />
            <ContactMethod icon={Mail} label="Email Us" value={company.email} href={`mailto:${company.email}`} />
            <ContactMethod icon={MapPin} label="Head Office" value={company.address} />
          </ul>
          <ButtonLink href={company.phoneHref}>
            Call Us Today <ArrowRight size={17} aria-hidden="true" />
          </ButtonLink>
        </Reveal>
        <Reveal variant="right">
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  )
}
