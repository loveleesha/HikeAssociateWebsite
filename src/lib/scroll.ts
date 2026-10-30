type ScrollSubscriber = (y: number) => void

// One passive scroll listener and one rAF per frame, shared by every scroll effect.
const subscribers = new Set<ScrollSubscriber>()
let ticking = false

function flush() {
  ticking = false
  const y = window.scrollY
  subscribers.forEach((fn) => fn(y))
}

function onScroll() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(flush)
  }
}

export function subscribeScroll(fn: ScrollSubscriber) {
  if (subscribers.size === 0) {
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
  }
  subscribers.add(fn)
  fn(window.scrollY)
  return () => {
    subscribers.delete(fn)
    if (subscribers.size === 0) {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }
}
