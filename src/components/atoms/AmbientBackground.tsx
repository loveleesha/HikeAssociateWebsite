interface AmbientBackgroundProps {
  grid?: boolean
}

// Decorative backdrop for dark sections: transform-only animation on pre-blurred gradients.
export default function AmbientBackground({ grid = false }: AmbientBackgroundProps) {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="absolute -top-[34vmax] -left-[12vmax] size-[62vmax] animate-drift rounded-full bg-[radial-gradient(circle,rgb(11_99_229/34%),transparent_62%)]" />
        <span className="absolute -right-[20vmax] -bottom-[38vmax] size-[62vmax] animate-drift-slow rounded-full bg-[radial-gradient(circle,rgb(60_212_247/17%),transparent_62%)]" />
      </div>
      {grid && (
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(255_255_255/3.4%)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/3.4%)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_80%_at_25%_40%,#000,transparent)] bg-size-[64px_64px]"
          aria-hidden="true"
        />
      )}
    </>
  )
}
