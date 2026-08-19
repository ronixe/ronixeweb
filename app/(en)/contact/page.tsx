import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell } from "@/components/page-shell";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = metadataForRoute("/contact");

export default function ContactPage() {
  return (
    <PageShell
      path="/contact"
      title="Contact"
      lede="Tell us what you are building. A short message is usually enough to say whether we are the right studio for the work."
      crumbs={[{ label: "Home", href: "/" }]}
    >
      <section>
        <h2>Send a message</h2>
        <ContactForm locale="en" />
      </section>

      <section>
        <h2>Other ways to reach us</h2>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
          </li>
          <li>
            <strong>WhatsApp:</strong>{" "}
            <a href={SITE.whatsapp}>Book a call</a>
          </li>
          <li>
            <strong>Studio:</strong> {SITE.address.street},{" "}
            {SITE.address.locality}, {SITE.address.country}
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
