import { MapPin } from 'lucide-react'
import Container from '@/components/atoms/Container'
import Reveal from '@/components/atoms/Reveal'
import Section from '@/components/atoms/Section'
import SectionHeading from '@/components/molecules/SectionHeading'
import { workingLocations } from '@/data/site'

const CITY_GRADIENTS = [
  'linear-gradient(135deg,#2563eb,#818cf8)',
  'linear-gradient(135deg,#f97316,#f59e0b)',
  'linear-gradient(135deg,#0d9488,#34d399)',
  'linear-gradient(135deg,#db2777,#fb7185)',
  'linear-gradient(135deg,#7c3aed,#a78bfa)',
  'linear-gradient(135deg,#0284c7,#22d3ee)',
]

export default function WorkingLocations() {
  return (
    <Section tone="tint" id="working-locations">
      <Container>
        <SectionHeading
          eyebrow="Pan-India Presence"
          title="Where We Operate"
          text="Hike Associate delivers on-ground recovery and support services across major financial hubs in India."
        />
        <ul
          role="list"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {workingLocations.map(({ city, state }, i) => (
            <Reveal
              as="li"
              key={city}
              delay={i * 80}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span
                className="grid size-12 place-items-center rounded-full shadow-md transition-transform duration-300 group-hover:scale-110"
                style={{ background: CITY_GRADIENTS[i % CITY_GRADIENTS.length] }}
              >
                <MapPin size={22} className="text-white" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.95rem] font-bold text-ink">{city}</p>
                <p className="mt-0.5 text-[0.75rem] text-muted">{state}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
