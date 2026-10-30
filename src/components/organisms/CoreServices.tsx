import Container from '@/components/atoms/Container'
import IconDisc from '@/components/atoms/IconDisc'
import Section from '@/components/atoms/Section'
import CheckList from '@/components/molecules/CheckList'
import SplitBlock from '@/components/molecules/SplitBlock'
import { coreServices } from '@/data/site'

export default function CoreServices() {
  return (
    <Section>
      <Container className="grid gap-[clamp(40px,6vw,72px)]">
        {coreServices.map(({ id, icon, image, title, points }, i) => (
          <SplitBlock
            key={id}
            id={id}
            as="article"
            photo={image}
            photoSide={i % 2 ? 'end' : 'start'}
            className="gap-[clamp(24px,5vw,64px)]"
          >
            <IconDisc icon={icon} />
            <h2 className="mt-4 mb-[18px] text-[clamp(1.4rem,2.6vw,1.9rem)]">{title}</h2>
            <CheckList items={points} size="md" />
          </SplitBlock>
        ))}
      </Container>
    </Section>
  )
}
