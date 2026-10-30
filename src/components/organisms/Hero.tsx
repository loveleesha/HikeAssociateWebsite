import { ArrowRight } from 'lucide-react'
import AmbientBackground from '@/components/atoms/AmbientBackground'
import ButtonLink from '@/components/atoms/ButtonLink'
import Container from '@/components/atoms/Container'
import ParallaxRoot from '@/components/atoms/ParallaxRoot'
import Photo from '@/components/atoms/Photo'
import HeroFloatCard from '@/components/molecules/HeroFloatCard'
import { hero } from '@/data/site'
import { cn } from '@/lib/cn'

// Each word's animation delay depends on how many words came before it across all lines.
const titleLines = hero.titleLines.map((line, lineIndex) => ({
  line,
  words: line.split(' '),
  firstWordIndex: hero.titleLines
    .slice(0, lineIndex)
    .reduce((count, previous) => count + previous.split(' ').length, 0),
}))

export default function Hero() {
  return (
    <ParallaxRoot className="relative flex flex-col items-stretch overflow-hidden bg-[linear-gradient(115deg,var(--color-navy-950)_22%,#04204a_62%,#042c66)] pt-[calc(var(--spacing-header)+28px)] text-white [--focus-ring:var(--color-cyan-400)] [--px:0] [--py:0] [--shift:0px] lg:min-h-[min(100svh,760px)] lg:flex-row lg:items-center lg:pb-14">
      <AmbientBackground grid />
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] w-full animate-draw fill-none stroke-cyan-400 stroke-2 opacity-35 [stroke-dasharray:1100] [stroke-dashoffset:1100]"
        viewBox="0 0 800 240"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          d="M0 220 C 120 210 170 170 260 165 S 400 150 470 110 S 650 60 800 12"
        />
      </svg>

      <div className="relative order-2 -mt-3 aspect-[16/10] w-full overflow-hidden [mask-image:linear-gradient(180deg,transparent,#000_22%)] after:absolute after:inset-0 after:bg-[rgb(8_56_130/16%)] after:bg-[linear-gradient(180deg,rgb(3_16_38/34%),rgb(4_32_74/18%)_60%,rgb(3_16_38/62%))] lg:absolute lg:inset-y-0 lg:right-0 lg:order-none lg:mt-0 lg:aspect-auto lg:w-[64%] lg:translate-y-(--shift) lg:[mask-image:linear-gradient(90deg,transparent_0,rgb(0_0_0/70%)_18%,#000_36%)] 3xl:w-[52%]">
        <Photo
          name="hero"
          preload
          alt="Business partners celebrating a successful outcome at a desk"
          sizes="(max-width: 900px) 100vw, 62vw"
          className="animate-ken-burns object-[50%_26%] lg:object-[50%_30%] 3xl:object-[46%_30%]"
        />
      </div>

      <Container className="relative z-1 order-1 block lg:z-auto lg:order-none lg:flex lg:items-center lg:justify-between lg:gap-6 3xl:justify-start">
        <div className="min-w-0 lg:flex-[0_1_590px]">
          <p className="flex animate-[rise_0.8s_0.05s_var(--ease-expo)_both] flex-wrap gap-x-3 gap-y-1 text-[0.74rem] font-bold tracking-[0.14em] text-cyan-400 uppercase">
            {hero.eyebrow.map((word) => (
              <span key={word} className="not-last:after:ml-3 not-last:after:content-['•']">
                {word}
              </span>
            ))}
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,6.1vw,4.3rem)] leading-[1.1] tracking-[-0.03em]">
            {titleLines.map(({ line, words, firstWordIndex }, lineIndex) => (
              <span key={line} className={cn('block', lineIndex === 1 && 'text-cyan-400')}>
                {words.map((word, wordIndex) => (
                  <span
                    key={word}
                    className="mr-[0.24em] -mb-[0.16em] inline-block overflow-hidden pb-[0.16em] align-top last:mr-0"
                  >
                    <span
                      className="inline-block animate-[word-up_0.95s_calc(var(--i)*90ms+0.12s)_var(--ease-expo)_both]"
                      style={{ '--i': firstWordIndex + wordIndex }}
                    >
                      {word}
                    </span>{' '}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="mt-[18px] max-w-[500px] animate-[rise_0.9s_0.5s_var(--ease-expo)_both] text-[clamp(0.98rem,1.5vw,1.08rem)] text-white/88">
            {hero.text}
          </p>
          <div className="mt-7 flex animate-[rise_0.9s_0.62s_var(--ease-expo)_both] flex-wrap gap-3.5">
            <ButtonLink href="/services" className="flex-[1_1_100%] sm:flex-initial">
              Explore Our Services <ArrowRight size={17} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline" className="flex-[1_1_100%] sm:flex-initial">
              Talk to Our Team
            </ButtonLink>
          </div>
          <ul className="mt-[30px] flex animate-[rise_0.9s_0.74s_var(--ease-expo)_both] flex-wrap gap-x-[18px] gap-y-2.5 text-[0.78rem] font-semibold">
            {hero.trust.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="text-cyan-400" size={16} aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-7 grid grid-cols-3 gap-2.5 transition-[translate] duration-600 ease-expo lg:mt-0 lg:w-[196px] lg:flex-none lg:translate-x-[calc(var(--px)*-14px)] lg:translate-y-[calc(var(--py)*-10px)] lg:grid-cols-1 lg:gap-4 2xl:w-[212px]">
          {hero.floating.map((card, i) => (
            <HeroFloatCard key={card.title} {...card} index={i} />
          ))}
        </ul>
      </Container>
    </ParallaxRoot>
  )
}
