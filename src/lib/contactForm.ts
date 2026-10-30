import { company } from '@/data/site'

export interface ContactValues {
  name: string
  phone: string
  email: string
  company: string
  interest: string
  message: string
}

export type ContactField = keyof ContactValues
export type ContactErrors = Partial<Record<ContactField, string>>

export const EMPTY_CONTACT: ContactValues = { name: '', phone: '', email: '', company: '', interest: '', message: '' }

export function validateContact(values: ContactValues) {
  const errors: ContactErrors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (values.phone && !/^[+\d][\d\s()-]{6,}$/.test(values.phone)) errors.phone = 'Please enter a valid phone number.'
  if (!values.message.trim()) errors.message = 'Please tell us how we can help.'
  return errors
}

export function buildMailto(values: ContactValues) {
  const details = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.phone && `Phone: ${values.phone}`,
    values.company && `Company: ${values.company}`,
    values.interest && `Interested in: ${values.interest}`,
  ].filter(Boolean)
  const body = `${details.join('\n')}\n\n${values.message}`
  const subject = `Website enquiry from ${values.name}`
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
