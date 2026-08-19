import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/services/ui-ux-design";

export const metadata: Metadata = metadataForRoute(PATH);

export default function UiUxDesignPage() {
  return (
    <PageShell
      path={PATH}
      title="UI/UX Design"
      lede={`${SITE.name} designs the interface layer of web and mobile products: the screens, the flows and the small decisions that decide whether people can actually use what was built.`}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
      ]}
    >
      <ServiceJsonLd
        name="UI/UX Design"
        description="Clean, user-friendly interface design for web and mobile products, built for the devices and connections people in the region actually have."
        path={PATH}
      />

      <section>
        <h2>Design that a developer can build</h2>
        <p>
          A design that only exists as a picture is not a product. Design and
          development sit in the same team here, so what gets designed also
          gets built, without the translation loss that happens when a
          mockup crosses into someone else&apos;s hands and half of it turns
          out to be unbuildable, too slow, or quietly dropped.
        </p>
        <p>
          That also means design decisions get made with the build in mind
          from the start: what a component costs to build, not only how it
          looks in a static frame.
        </p>
      </section>

      <section>
        <h2>What you receive</h2>
        <ul>
          <li>
            <strong>Wireframes and flows</strong> mapping how someone actually
            moves through the product, agreed before a single screen is
            styled.
          </li>
          <li>
            <strong>A design system.</strong> Consistent components, spacing,
            type and colour reused across every screen, not just the ones
            that made it into the pitch deck.
          </li>
          <li>
            <strong>Clickable prototypes</strong> you or your users can test
            before a line of code is written.
          </li>
          <li>
            <strong>Handoff files and specs</strong> a developer can build
            from directly, with states, spacing and behaviour defined rather
            than left to guesswork.
          </li>
          <li>
            <strong>Accessibility and touch targets</strong> checked, not
            assumed, so the interface works for someone typing with one thumb
            on a bus.
          </li>
        </ul>
      </section>

      <section>
        <h2>Designed for the conditions here</h2>
        <p>
          A design that only looks right on a large screen, in a fast
          prototyping tool, fails the phone most people will actually use it
          on. We design for small screens and mid-range devices as the
          default case, keep forms short because typing on a phone is slower
          than on a keyboard, and check that the interface still works in one
          colour and at a small size, not only in a polished mockup.
        </p>
      </section>

      <Faq
        items={[
          {
            question: "Do I need a full design system or just a few screens?",
            answer:
              "It depends on how much you are building and how long the product will keep growing. A handful of screens for a focused feature does not need a full system. A product you will keep adding to for years is usually cheaper in the long run with one, because it stops every new screen from being designed from scratch.",
          },
          {
            question: "How long does UI/UX design take?",
            answer:
              "A focused set of screens is typically one to two weeks. A full design system for a larger product takes longer, and we agree the scope and the number of revision rounds before starting rather than leaving it open-ended.",
          },
          {
            question: "Can you redesign an existing product?",
            answer:
              "Yes. We start by reviewing what is already there and where people actually get stuck, rather than assuming everything needs to change. Redesigns work best when they fix specific, identified problems instead of a general refresh with no clear target.",
          },
          {
            question: "Do you also build what you design, or just hand over files?",
            answer:
              "Both, depending on what you need. Most of our design work continues straight into development with the same team. If you have your own developers, we can hand over a build-ready file and specs instead.",
          },
          {
            question: "Do you test designs with real users?",
            answer:
              "Where it is useful and the budget allows for it, yes, usually with a clickable prototype before development starts. For smaller projects we rely on structured review and the patterns we already know cause problems in this market, rather than skipping testing without saying so.",
          },
        ]}
      />

      <DocCta
        heading="Start a design project"
        body="Tell us what the product needs to do and who uses it. We will scope what level of design work that actually needs."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        items={[
          {
            href: "/services/web-development",
            label: "Web development",
            note: "Where most of our interface design gets built.",
          },
          {
            href: "/services/mobile-apps",
            label: "Mobile apps",
            note: "Interface design for iOS and Android, not just the web.",
          },
          {
            href: "/services/maintenance-support",
            label: "Maintenance & support",
            note: "Keeping the interface working as the product grows.",
          },
        ]}
      />
    </PageShell>
  );
}
