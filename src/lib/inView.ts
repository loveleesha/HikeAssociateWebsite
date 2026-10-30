// A single shared IntersectionObserver for all one-shot "entered the viewport" effects.
const callbacks = new WeakMap<Element, () => void>()
let observer: IntersectionObserver | undefined

function getObserver() {
  observer ??= new IntersectionObserver(
    (entries, self) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        self.unobserve(entry.target)
        callbacks.get(entry.target)?.()
        callbacks.delete(entry.target)
      })
    },
    { rootMargin: '0px 0px -4% 0px', threshold: 0.01 },
  )
  return observer
}

export function onceInView(element: Element, callback: () => void) {
  callbacks.set(element, callback)
  getObserver().observe(element)
  return () => {
    callbacks.delete(element)
    getObserver().unobserve(element)
  }
}
