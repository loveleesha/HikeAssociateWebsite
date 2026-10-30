import Container from '@/components/atoms/Container'
import AudienceCard from '@/components/molecules/AudienceCard'
import { audiences } from '@/data/site'

export default function Audiences() {
  return (
    <section className="bg-tint pt-[clamp(24px,3vw,36px)]">
      <Container className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <AudienceCard
          {...audiences.business}
          kind="business"
          photo="tower"
          alt="Glass office towers rising into the sky"
        />
        <AudienceCard {...audiences.individual} kind="individual" photo="guidance" alt="A smiling woman" />
      </Container>
    </section>
  )
}
