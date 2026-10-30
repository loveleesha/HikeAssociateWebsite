import Container from '@/components/atoms/Container'
import Reveal from '@/components/atoms/Reveal'
import Section from '@/components/atoms/Section'
import SectionHeading from '@/components/molecules/SectionHeading'
import TeamCard from '@/components/molecules/TeamCard'
import { about } from '@/data/site'

export default function TeamSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="The Team"
          title="Callers and Field Staff: The Backbone of Recovery"
          text="Every member of the team, whether on the phone or in the field, shares a common goal: helping individuals return to financial stability while ensuring that the banks they represent get the funds they are owed."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {about.team.map((member, i) => (
            <TeamCard key={member.title} {...member} delay={i * 120} variant={i === 0 ? 'left' : 'right'} />
          ))}
        </div>
        <Reveal as="p" className="mx-auto mt-9 max-w-[780px] text-center text-[1.06rem] font-semibold text-ink">
          {about.closing}
        </Reveal>
      </Container>
    </Section>
  )
}
