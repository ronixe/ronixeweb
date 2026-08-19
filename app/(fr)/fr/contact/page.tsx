import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell } from "@/components/page-shell";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = metadataForRoute("/fr/contact");

export default function ContactPageFr() {
  return (
    <PageShell
      path="/fr/contact"
      locale="fr"
      title="Contact"
      lede="Dites-nous ce que vous construisez. Un court message suffit généralement à savoir si nous sommes le bon studio pour votre projet."
      crumbs={[{ label: "Accueil", href: "/fr" }]}
    >
      <section>
        <h2>Envoyer un message</h2>
        <ContactForm locale="fr" />
      </section>

      <section>
        <h2>Autres moyens de nous joindre</h2>
        <ul>
          <li>
            <strong>E-mail :</strong>{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </li>
          <li>
            <strong>Téléphone :</strong>{" "}
            <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
          </li>
          <li>
            <strong>WhatsApp :</strong>{" "}
            <a href={SITE.whatsapp}>Prendre rendez-vous</a>
          </li>
          <li>
            <strong>Studio :</strong> {SITE.address.street},{" "}
            {SITE.address.locality}, {SITE.address.country}
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
