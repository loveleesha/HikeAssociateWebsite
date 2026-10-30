// Source files in public/img. next/image generates the responsive sizes from these.
export const PHOTOS = {
  hero: { src: '/img/hero-1600.webp', width: 1600, height: 1066 },
  tower: { src: '/img/tower-1000.webp', width: 1000, height: 666 },
  guidance: { src: '/img/guidance-1000.webp', width: 1000, height: 667 },
  office: { src: '/img/office-1200.webp', width: 1200, height: 801 },
  documents: { src: '/img/documents-800.webp', width: 800, height: 459 },
  finance: { src: '/img/finance-800.webp', width: 800, height: 534 },
  payment: { src: '/img/payment-800.webp', width: 800, height: 533 },
  agreement: { src: '/img/agreement-800.webp', width: 800, height: 533 },
  'phone-pay': { src: '/img/phone-pay-800.webp', width: 800, height: 533 },
  consult: { src: '/img/consult-800.webp', width: 800, height: 533 },
} as const

export type PhotoName = keyof typeof PHOTOS
