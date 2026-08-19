"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/lib/contact-action";
import { ui, type Locale } from "@/lib/i18n";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton({ locale }: { locale: Locale }) {
  const t = ui(locale);
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn--orange" disabled={pending}>
      {pending ? t.formSending : t.formSend}
    </button>
  );
}

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const t = ui(locale);
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="contact-form-success" role="status">
        {t.formSuccess}
      </div>
    );
  }

  return (
    <form action={formAction} className="contact-form">
      <input type="hidden" name="locale" value={locale} />
      {/* Honeypot: hidden from real visitors, catches simple bots that fill every field. */}
      <div className="contact-form-honeypot" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input
          type="text"
          id="company_website"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="form-field">
        <label htmlFor="name">{t.formName}</label>
        <input type="text" id="name" name="name" required minLength={2} />
      </div>

      <div className="form-field">
        <label htmlFor="email">{t.formEmail}</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="form-field">
        <label htmlFor="message">{t.formMessage}</label>
        <textarea id="message" name="message" rows={6} required minLength={10} />
      </div>

      {state.status === "error" && (
        <p className="contact-form-error" role="alert">
          {state.message}
        </p>
      )}

      <SubmitButton locale={locale} />
    </form>
  );
}
