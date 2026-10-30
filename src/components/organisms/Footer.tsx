import { Mail, MapPin, Phone } from 'lucide-react'
import Container from '@/components/atoms/Container'
import FooterLinks from '@/components/molecules/FooterLinks'
import LogoLink from '@/components/molecules/LogoLink'
import { company, coreServices, navLinks } from '@/data/site'

const CONTACT_ICON = 'mt-[3px] flex-none text-cyan-400'
const CONTACT_ROW = 'flex items-start gap-2.5 wrap-anywhere'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-[0.87rem] text-white/84 [--focus-ring:var(--color-cyan-400)]">
      <Container className="grid grid-cols-1 gap-7 pt-[52px] pb-9 sm:grid-cols-2 sm:gap-8 xl:grid-cols-[1.3fr_0.8fr_1.25fr_1fr]">
        <div>
          <LogoLink />
          <p className="mt-4 max-w-[280px]">{company.tagline}</p>
        </div>

        <FooterLinks title="Quick Links" links={navLinks} />
        <FooterLinks
          title="Our Services"
          links={coreServices.map(({ id, title }) => ({ href: `/services#${id}`, label: title }))}
        />

        <div>
          <h2 className="mb-3.5 text-[0.98rem] font-bold tracking-normal text-white">Contact Info</h2>
          <ul className="grid gap-3">
            <li className={CONTACT_ROW}>
              <Phone className={CONTACT_ICON} size={17} aria-hidden="true" />
              <a href={company.phoneHref} className="hover:text-cyan-400">
                {company.phoneDisplay}
              </a>
            </li>
            <li className={CONTACT_ROW}>
              <Mail className={CONTACT_ICON} size={17} aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="hover:text-cyan-400">
                {company.email}
              </a>
            </li>
            <li className={CONTACT_ROW}>
              <MapPin className={CONTACT_ICON} size={17} aria-hidden="true" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-white/10 py-[18px] text-[0.8rem]">
        <p>
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
