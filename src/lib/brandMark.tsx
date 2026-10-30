// The logo mark for generated images (social card, app icon). ImageResponse needs plain SVG with no hooks,
// so this can't reuse the Logo atom.
export function BrandMark({ width }: { width: number }) {
  return (
    <svg viewBox="0 0 68 42" width={width} height={(width * 42) / 68}>
      <defs>
        <linearGradient id="mark-a" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#0b6bf0" />
          <stop offset="1" stopColor="#3cd4f7" />
        </linearGradient>
        <linearGradient id="mark-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3cd4f7" />
          <stop offset="1" stopColor="#0b6bf0" />
        </linearGradient>
      </defs>
      <path fill="url(#mark-a)" d="M0 42 15 0h11L11 42z" />
      <path fill="url(#mark-a)" d="M9 22h21l-3 8H6z" />
      <path fill="#fff" d="M23 42 38 0h10L33 42z" />
      <path fill="url(#mark-b)" d="M48 0h7l13 42H57z" />
      <path fill="url(#mark-b)" d="M38 28h17l2 7H36z" />
    </svg>
  )
}
