import Link from 'next/link'
import Logo from '@/components/atoms/Logo'

export default function LogoLink() {
  return (
    <Link href="/" className="group/logo" aria-label="Hike Associate home">
      <Logo />
    </Link>
  )
}
