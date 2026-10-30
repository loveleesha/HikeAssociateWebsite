import ContactCards from '@/components/organisms/ContactCards'
import ContactSection from '@/components/organisms/ContactSection'
import PageHero from '@/components/organisms/PageHero'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Contact',
  description:
    'Contact Hike Associate in Dwarka for bank recovery, loan settlement and customer support. Call +91 78358 25502 or send us your enquiry online.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        path="/contact"
        title="Feel Free to Contact Us"
        text="Fill out the form and our experts will get back to you as soon as possible. Let’s connect and find the right solution for your needs."
      />
      <ContactCards />
      <ContactSection />
    </>
  )
}
