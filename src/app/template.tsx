import type { ReactNode } from 'react'

// A template remounts on every navigation, which replays the page fade-in.
// The horizontal clip keeps off-screen slide-in transforms from widening the page on mobile.
export default function Template({ children }: { children: ReactNode }) {
  return (
    <main id="main" tabIndex={-1} className="animate-page-in overflow-x-clip outline-none">
      {children}
    </main>
  )
}
