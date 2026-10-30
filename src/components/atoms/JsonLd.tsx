interface JsonLdProps {
  data: object
}

// A plain script tag is what Next recommends for structured data. Escaping `<` stops a value closing the tag early.
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
