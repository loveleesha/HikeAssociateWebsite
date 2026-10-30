import Container from '@/components/atoms/Container'
import StatItem from '@/components/molecules/StatItem'
import { stats } from '@/data/site'

export default function StatsStrip() {
  return (
    <section className="relative border-b border-line bg-surface" aria-label="Key facts">
      <Container className="grid grid-cols-2 gap-y-[18px] py-[26px] lg:grid-cols-4 lg:gap-y-0">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} {...stat} delay={i * 90} />
        ))}
      </Container>
    </section>
  )
}
