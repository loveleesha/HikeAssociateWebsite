import 'react'

declare module 'react' {
  // Lets components pass CSS variables such as `--i` through the style prop.
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}
