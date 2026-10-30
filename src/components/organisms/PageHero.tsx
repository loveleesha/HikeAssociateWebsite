import AmbientBackground from '@/components/atoms/AmbientBackground'
import Container from '@/components/atoms/Container'
import JsonLd from '@/components/atoms/JsonLd'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import { breadcrumbSchema } from '@/lib/structuredData'

interface PageHeroProps {
  eyebrow: string
  title: string
  text?: string
  /** The page's route. Adds breadcrumb structured data; leave out on pages search engines shouldn't index. */
  path?: string
}

export default function PageHero({ eyebrow, title, text, path }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(115deg,var(--color-navy-950)_30%,#04204a_70%,#052f70)] pt-[calc(var(--spacing-header)+clamp(36px,6vw,72px))] pb-[clamp(44px,6vw,76px)] text-white [--focus-ring:var(--color-cyan-400)]">
      {path && <JsonLd data={breadcrumbSchema(eyebrow, path)} />}
      <AmbientBackground grid />
      <Container className="relative">
        <Breadcrumb current={eyebrow} />
        <h1 className="mt-3.5 max-w-[840px] animate-[rise_0.85s_0.08s_var(--ease-expo)_both] text-[clamp(2rem,5vw,3.4rem)]">
          {title}
        </h1>
        {text && (
          <p className="mt-3.5 max-w-[660px] animate-[rise_0.85s_0.2s_var(--ease-expo)_both] text-[clamp(0.98rem,1.5vw,1.08rem)] text-white/86">
            {text}
          </p>
        )}
      </Container>
    </section>
  )
}
