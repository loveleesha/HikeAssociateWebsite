import Container from '@/components/atoms/Container'
import Reveal from '@/components/atoms/Reveal'
import Section from '@/components/atoms/Section'
import SectionHeading from '@/components/molecules/SectionHeading'
import { customers } from '@/data/site'

// Inline gradients — avoids Tailwind JIT purging dynamic class names
const BRAND_GRADIENTS: Record<string, string> = {
  'AU Bank':        'linear-gradient(135deg,#f97316,#f59e0b)',
  'DBS Bank':       'linear-gradient(135deg,#dc2626,#fb7185)',
  'Unity Bank':     'linear-gradient(135deg,#7c3aed,#a78bfa)',
  'Nira Finance':   'linear-gradient(135deg,#16a34a,#34d399)',
  'Werize':         'linear-gradient(135deg,#0284c7,#22d3ee)',
  'Clix Capital':   'linear-gradient(135deg,#2563eb,#818cf8)',
  'Tata Capital':   'linear-gradient(135deg,#1e3a8a,#3b82f6)',
  'Bajaj Finserv':  'linear-gradient(135deg,#2563eb,#38bdf8)',
  'Satin Finserv':  'linear-gradient(135deg,#0d9488,#2dd4bf)',
  'Khatabook':      'linear-gradient(135deg,#db2777,#fb7185)',
  'Meesho Finance': 'linear-gradient(135deg,#c026d3,#f472b6)',
  'One Card':       'linear-gradient(135deg,#374151,#9ca3af)',
}

function getInitials(name: string) {
  const words = name.trim().split(/\s+/)
  if (words.length === 1) return (words[0] ?? '').slice(0, 2).toUpperCase()
  return ((words[0]?.[0] ?? '') + (words[1]?.[0] ?? '')).toUpperCase()
}

interface CustomersProps {
  tone?: 'plain' | 'tint'
}

export default function Customers({ tone = 'plain' }: CustomersProps) {
  return (
    <Section tone={tone} id="customers">
      <Container>
        <SectionHeading
          eyebrow="Our Clients"
          title="Financial Institutions That Trust Hike Associate"
          text="We are proud to support these leading financial institutions with professional, ethical and customer-friendly services."
        />
        <ul
          role="list"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {customers.map((name, i) => {
            const bg = BRAND_GRADIENTS[name] ?? 'linear-gradient(135deg,#1e3a8a,#2563eb)'
            const initials = getInitials(name)
            return (
              <Reveal
                as="li"
                key={name}
                delay={i * 60}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span
                  className="grid size-14 place-items-center rounded-full font-extrabold text-white shadow-md transition-transform duration-300 group-hover:scale-110"
                  style={{ background: bg }}
                >
                  {initials}
                </span>
                <span className="text-[0.82rem] font-semibold leading-tight text-ink">{name}</span>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
