import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/services/branding";

export const metadata: Metadata = metadataForRoute(PATH);

export default function BrandingPage() {
  return (
    <PageShell
      path={PATH}
      title="Brand and Identity Design"
      lede={`${SITE.name} designs brand identities: the mark, the type, the colours and the rules that hold them together, so a young company looks like one people can safely buy from.`}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
      ]}
    >
      <ServiceJsonLd
        name="Brand and Identity Design"
        description="Logo design, visual identity systems and brand guidelines for businesses across West Africa."
        path={PATH}
      />

      <section>
        <h2>A logo is not an identity</h2>
        <p>
          A logo is one asset. An identity is the system that keeps every asset
          recognisable: which typefaces you use and at what weights, what the
          brand colour is in print as well as on screen, how the mark behaves
          when it has to sit in a circle, and what happens when it appears on a
          photograph.
        </p>
        <p>
          Without that system you get drift. The invoice looks unrelated to the
          website, the Facebook post uses a different orange, and the brand stops
          reading as one company. That is what guidelines prevent.
        </p>
      </section>

      <section>
        <h2>What you receive</h2>
        <ul>
          <li>
            <strong>The mark</strong> in vector format, in every colour variant,
            with clear rules for minimum size and clear space.
          </li>
          <li>
            <strong>A colour system</strong> defined for screen and print, with
            the contrast checked so text on your brand colour is actually
            readable.
          </li>
          <li>
            <strong>Typography</strong>, chosen for availability as well as
            looks. A typeface nobody on your team can license is a problem, not a
            design.
          </li>
          <li>
            <strong>Guidelines</strong> short enough that people read them.
          </li>
          <li>
            <strong>Applied assets</strong>: social profile images, letterhead,
            invoice, email signature, and whatever else you use weekly.
          </li>
          <li>
            <strong>Source files</strong>, handed over and owned by you.
          </li>
        </ul>
      </section>

      <section>
        <h2>Designed for where it will actually appear</h2>
        <p>
          A brand here has to survive a printed shopfront sign, a WhatsApp
          profile picture at 96 pixels, and a photocopied invoice. Marks that
          only work at large sizes on a white screen fail all three. We test at
          the small end and in one colour before we call anything finished.
        </p>
      </section>

      <Faq
        items={[
          {
            question: "How much does a logo cost?",
            answer:
              "Less than a full identity, and we quote both so you can choose. A mark on its own is worth it only if you already have the rest of the system. If you are starting from nothing, a logo without guidelines usually costs more in the long run because everything after it is guesswork.",
          },
          {
            question: "How long does brand design take?",
            answer:
              "A logo and core identity is typically two to three weeks including revision rounds. A full system with applied assets and written guidelines takes longer, and we agree the scope and the number of revision rounds before starting.",
          },
          {
            question: "Do I own the design?",
            answer:
              "Yes. Full ownership of the final artwork and source files transfers to you on completion. We do not license our own work back to clients.",
          },
          {
            question: "Can you rebrand an existing business?",
            answer:
              "Yes. Rebrands need more care than new identities because there is existing recognition to protect. We audit what is worth keeping before proposing what changes, rather than starting from a blank page by default.",
          },
          {
            question: "Do you register trademarks?",
            answer:
              "No, that is legal work rather than design work. We will flag if a name or mark looks likely to collide with something existing, but registration should go through a lawyer or an IP agent in your jurisdiction.",
          },
        ]}
      />

      <DocCta
        heading="Start an identity project"
        body="Tell us about the business and where the brand has to appear. We will scope what you need and leave out what you do not."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        items={[
          {
            href: "/services/web-development",
            label: "Web development",
            note: "The website the identity goes on to live in.",
          },
          {
            href: "/services/digital-marketing",
            label: "Digital marketing",
            note: "Putting the finished brand in front of people.",
          },
          {
            href: "/services/ecommerce",
            label: "E-commerce",
            note: "Where identity turns into trust and trust turns into sales.",
          },
        ]}
      />
    </PageShell>
  );
}
