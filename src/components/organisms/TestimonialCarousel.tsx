'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import Reveal from '@/components/atoms/Reveal'
import TestimonialCard from '@/components/molecules/TestimonialCard'
import { cn } from '@/lib/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import type { Testimonial } from '@/data/site'

const SLIDE_MS = 600
const AUTOPLAY_MS = 4500

const ARROW =
  'absolute top-1/2 z-2 hidden size-[38px] -translate-y-1/2 place-items-center rounded-full border border-line bg-surface text-ink shadow-card transition-[background-color,color,scale] duration-200 ease-expo hover:scale-110 hover:bg-blue-600 hover:text-white md:grid'

interface TestimonialCarouselProps {
  items: Testimonial[]
}

export default function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const count = items.length
  const slides = [...items, ...items, ...items]
  const [index, setIndex] = useState(count)
  const [animate, setAnimate] = useState(true)
  const [playing, setPlaying] = useState(true)
  const reducedMotion = useReducedMotion()
  const autoplay = playing && !reducedMotion
  const paused = useRef(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const touchX = useRef<number | null>(null)

  // Three copies of the slides let the track loop: after sliding into a clone,
  // jump back to the matching original with the transition switched off.
  useEffect(() => {
    if (index >= count && index < count * 2) return
    const timer = setTimeout(() => {
      setAnimate(false)
      setIndex((i) => count + ((((i - count) % count) + count) % count))
    }, SLIDE_MS)
    return () => clearTimeout(timer)
  }, [index, count])

  useEffect(() => {
    if (animate) return
    const frame = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)))
    return () => cancelAnimationFrame(frame)
  }, [animate])

  useEffect(() => {
    const root = rootRef.current
    if (!root || !autoplay) return
    let inView = false
    const visibility = new IntersectionObserver(([entry]) => {
      inView = entry?.isIntersecting ?? false
    })
    visibility.observe(root)
    const timer = setInterval(() => {
      if (inView && !paused.current) setIndex((i) => i + 1)
    }, AUTOPLAY_MS)
    return () => {
      clearInterval(timer)
      visibility.disconnect()
    }
  }, [autoplay])

  const active = ((index % count) + count) % count

  return (
    <Reveal
      onPointerEnter={() => (paused.current = true)}
      onPointerLeave={() => (paused.current = false)}
      onFocusCapture={() => (paused.current = true)}
      onBlurCapture={() => (paused.current = false)}
    >
      <div
        ref={rootRef}
        className="relative [--gap:20px] [--visible:1] md:px-11 md:[--visible:2] xl:[--visible:3]"
        role="group"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          const endX = e.changedTouches[0]?.clientX
          if (touchX.current === null || endX === undefined) return
          const dx = endX - touchX.current
          if (Math.abs(dx) > 40) setIndex((i) => i + (dx < 0 ? 1 : -1))
        }}
      >
        <button
          type="button"
          className={cn(ARROW, 'left-0')}
          aria-label="Previous testimonial"
          onClick={() => setIndex((i) => i - 1)}
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <div className="-my-2 -mb-7 overflow-hidden pt-2 pb-7">
          <div
            className="flex [transform:translate3d(calc(var(--index)*(-100%_-_var(--gap))/var(--visible)),0,0)] gap-(--gap) transition-transform duration-600 ease-expo"
            style={{ '--index': index, transition: animate ? undefined : 'none' }}
          >
            {slides.map((item, i) => (
              <TestimonialCard key={i} {...item} isClone={i < count || i >= count * 2} />
            ))}
          </div>
        </div>
        <button
          type="button"
          className={cn(ARROW, 'right-0')}
          aria-label="Next testimonial"
          onClick={() => setIndex((i) => i + 1)}
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
      {/* Announces slide changes the visitor asked for, but stays quiet during autoplay. */}
      <p className="sr-only" aria-live={autoplay ? 'off' : 'polite'} aria-atomic="true">
        Testimonial {active + 1} of {count}: {items[active]?.author}
      </p>
      <div className="mt-[22px] flex items-center justify-center gap-0.5">
        {items.map((item, i) => (
          <button
            key={item.author}
            type="button"
            className="relative size-6 after:absolute after:inset-2 after:rounded-full after:bg-dot after:transition-[scale,background-color] after:duration-300 after:ease-expo aria-[current=true]:after:scale-130 aria-[current=true]:after:bg-accent"
            aria-label={`Show testimonial from ${item.author}`}
            aria-current={i === active}
            onClick={() => setIndex(count + i)}
          />
        ))}
        {!reducedMotion && (
          <button
            type="button"
            className="ml-2 grid size-6 place-items-center rounded-full text-ink-soft transition-colors duration-200 hover:text-accent"
            aria-label={playing ? 'Pause testimonials' : 'Play testimonials'}
            onClick={() => setPlaying((v) => !v)}
          >
            {playing ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
          </button>
        )}
      </div>
    </Reveal>
  )
}
