'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ArrowRight, CircleCheck, Loader2 } from 'lucide-react'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import Select from '@/components/atoms/Select'
import Textarea from '@/components/atoms/Textarea'
import FormField from '@/components/molecules/FormField'
import { company, contactSection } from '@/data/site'
import {
  buildMailto,
  EMPTY_CONTACT,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from '@/lib/contactForm'

// Set NEXT_PUBLIC_FORM_ENDPOINT to POST enquiries as JSON (Formspree, your own API, etc).
// Without it, the form opens the visitor's email app with the enquiry filled in.
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT

type FormStatus = 'idle' | 'sending' | 'sent' | 'mailto' | 'error'

const FIELD_ROW = 'grid grid-cols-1 gap-3.5 sm:grid-cols-2'
const STATUS_ICON = 'mr-[5px] inline align-[-3px]'
const STATUS_LINK = 'font-bold underline'

export default function ContactForm() {
  const [values, setValues] = useState<ContactValues>(EMPTY_CONTACT)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const bind = (name: ContactField) => ({
    id: name,
    name,
    value: values[name],
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [name]: e.target.value }))
      if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
    },
  })

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validateContact(values)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus()
      return
    }

    if (!ENDPOINT) {
      window.location.href = buildMailto(values)
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error(`Request failed: ${response.status}`)
      setValues(EMPTY_CONTACT)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const emailLink = (
    <a href={`mailto:${company.email}`} className={STATUS_LINK}>
      {company.email}
    </a>
  )

  return (
    <form
      className="grid gap-3.5 rounded-card bg-surface p-[clamp(20px,3vw,30px)] text-ink shadow-[0_30px_70px_rgb(0_0_0/34%)] [--focus-ring:var(--color-accent)]"
      aria-labelledby="contact-form-title"
      onSubmit={onSubmit}
      noValidate
    >
      <div>
        <h3 id="contact-form-title" className="text-[1.15rem]">
          Send Us a Message
        </h3>
        <p className="mt-1 text-[0.78rem] text-ink-soft">Fields marked * are required.</p>
      </div>
      <div className={FIELD_ROW}>
        <FormField label="Full Name" name="name" error={errors.name} required>
          <Input {...bind('name')} type="text" autoComplete="name" required />
        </FormField>
        <FormField label="Phone Number" name="phone" error={errors.phone}>
          <Input {...bind('phone')} type="tel" autoComplete="tel" />
        </FormField>
      </div>
      <div className={FIELD_ROW}>
        <FormField label="Email Address" name="email" error={errors.email} required>
          <Input {...bind('email')} type="email" autoComplete="email" required />
        </FormField>
        <FormField label="Company" name="company">
          <Input {...bind('company')} type="text" autoComplete="organization" />
        </FormField>
      </div>
      <FormField label="I am interested in" name="interest">
        <Select {...bind('interest')}>
          <option value="">Select an option</option>
          {contactSection.interests.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </Select>
      </FormField>
      <FormField label="Your Message" name="message" error={errors.message} required>
        <Textarea {...bind('message')} rows={4} required />
      </FormField>
      <Button type="submit" block disabled={status === 'sending'}>
        {status === 'sending' ? (
          <>
            <Loader2 className="animate-spin" size={18} aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            Submit Enquiry <ArrowRight size={17} aria-hidden="true" />
          </>
        )}
      </Button>
      <div className="text-[0.85rem] leading-normal empty:hidden" role="status">
        {status === 'sent' && (
          <p className="text-success">
            <CircleCheck className={STATUS_ICON} size={17} aria-hidden="true" /> Thank you. Our experts will get back to
            you as soon as possible.
          </p>
        )}
        {status === 'mailto' && (
          <p className="text-success">
            <CircleCheck className={STATUS_ICON} size={17} aria-hidden="true" /> Your email app should now be open with
            your enquiry filled in. Press send to reach us, or email {emailLink}.
          </p>
        )}
        {status === 'error' && (
          <p className="text-error">
            Something went wrong sending your enquiry. Please call {company.phoneDisplay} or email {emailLink}.
          </p>
        )}
      </div>
    </form>
  )
}
