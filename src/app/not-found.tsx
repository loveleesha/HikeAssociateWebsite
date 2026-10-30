import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import ButtonLink from '@/components/atoms/ButtonLink'
import Container from '@/components/atoms/Container'
import Section from '@/components/atoms/Section'
import PageHero from '@/components/organisms/PageHero'

// Next marks 404 responses as noindex automatically.
export const metadata: Metadata = { title: 'Page Not Found' }

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        title="We Can’t Find That Page"
        text="The page you’re looking for doesn’t exist or has moved."
      />
      <Section>
        <Container className="flex justify-center">
          <ButtonLink href="/">
            Back to Home <ArrowRight size={17} aria-hidden="true" />
          </ButtonLink>
        </Container>
      </Section>
    </>
  )
}
