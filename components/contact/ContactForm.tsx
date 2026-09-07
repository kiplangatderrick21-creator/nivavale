'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

type FormFields = {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error' | 'not-configured';

// Connect a form service (Formspree, Basin, or your own API/Worker) by setting
// NEXT_PUBLIC_CONTACT_ENDPOINT. When it is unset, the form does not submit and
// shows a clear "not connected" notice instead of pretending to send.
const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

const emptyForm: FormFields = {
  name: '',
  email: '',
  organization: '',
  subject: '',
  message: '',
};

const inputClass =
  'w-full rounded-sm border border-ink-300 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:border-accent';

const errorClass = 'mt-1.5 text-sm text-red-600';

export default function ContactForm() {
  const [form, setForm] = useState<FormFields>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  function update(field: keyof FormFields, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) {
      next.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) next.message = 'Please enter a message.';
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    if (!endpoint) {
      setStatus('not-configured');
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      setStatus('success');
      setForm(emptyForm);
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink-900">
            Name <span className="text-accent-600">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputClass}
            aria-required="true"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
          {errors.name && (
            <p id="contact-name-error" className={errorClass}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-ink-900">
            Email <span className="text-accent-600">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputClass}
            aria-required="true"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
          {errors.email && (
            <p id="contact-email-error" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-org" className="mb-1.5 block text-sm font-medium text-ink-900">
            Organization
          </label>
          <input
            id="contact-org"
            name="organization"
            type="text"
            autoComplete="organization"
            value={form.organization}
            onChange={(e) => update('organization', e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-ink-900">
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={(e) => update('subject', e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink-900">
          Message <span className="text-accent-600">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={inputClass}
          aria-required="true"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message && (
          <p id="contact-message-error" className={errorClass}>
            {errors.message}
          </p>
        )}
      </div>

      <div aria-live="polite" role="status">
        {status === 'not-configured' && (
          <p className="rounded-sm border border-ink-200 bg-paper-muted px-4 py-3 text-sm text-ink-700">
            This contact form is not yet connected to a delivery service.
          </p>
        )}
        {status === 'success' && (
          <p className="rounded-sm border border-ink-200 bg-paper-muted px-4 py-3 text-sm text-ink-700">
            Thank you — your message has been sent.
          </p>
        )}
        {status === 'error' && (
          <p className="rounded-sm border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
            Something went wrong sending your message. Please try again.
          </p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-base font-medium tracking-wide text-ink-950 transition-colors duration-200 hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  );
}
