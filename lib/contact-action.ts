"use server";

import { Resend } from "resend";
import { SITE } from "@/lib/site";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * `RESEND_FROM_EMAIL` defaults to Resend's shared testing address, which only
 * delivers to the email a Resend account is registered under. Once a sending
 * domain is verified in Resend, set this to an address on that domain (e.g.
 * "Ronixe <contact@ronixe.com>") to send from Ronixe's own name instead.
 */
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Ronixe Website <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? SITE.email;

const MESSAGES = {
  en: {
    name: "Enter your name.",
    email: "Enter a valid email address.",
    message: "Say a little more about what you need.",
    server: "Something went wrong on our end. Please email us directly instead.",
    send: "Something went wrong sending your message. Please email us directly instead.",
  },
  fr: {
    name: "Indiquez votre nom.",
    email: "Indiquez une adresse e-mail valide.",
    message: "Donnez-nous quelques mots de plus sur votre besoin.",
    server: "Une erreur est survenue de notre côté. Merci de nous écrire directement à la place.",
    send: "Une erreur est survenue lors de l'envoi. Merci de nous écrire directement à la place.",
  },
} as const;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const locale = formData.get("locale") === "fr" ? "fr" : "en";
  const t = MESSAGES[locale];

  // Honeypot: a field hidden from real visitors with CSS. Bots that fill
  // every input trip it; humans never see it to fill.
  if (formData.get("company_website")) {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (name.length < 2) {
    return { status: "error", message: t.name };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: t.email };
  }
  if (message.length < 10) {
    return { status: "error", message: t.message };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; contact form message dropped.");
    return { status: "error", message: t.server };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return { status: "error", message: t.send };
    }

    return { status: "success" };
  } catch (err) {
    console.error("Contact form send failed:", err);
    return { status: "error", message: t.send };
  }
}
