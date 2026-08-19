import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/services/api-integration";

export const metadata: Metadata = metadataForRoute(PATH);

export default function ApiIntegrationPage() {
  return (
    <PageShell
      path={PATH}
      title="API Development & Integration"
      lede={`${SITE.name} connects your product to the tools and services it needs to run: payment providers, mobile money networks, the software you already use internally, and the partners you need to exchange data with.`}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
      ]}
    >
      <ServiceJsonLd
        name="API Development & Integration"
        description="Connecting websites, e-commerce stores and mobile apps to payment providers, mobile money networks and third-party services, plus building APIs for your own product."
        path={PATH}
      />

      <section>
        <h2>What integration actually means</h2>
        <p>
          Most products are not islands. A website needs to take payment, an
          app needs to send an SMS, an internal tool needs to talk to the
          accounting software you already pay for. Integration is the work of
          connecting your product to those systems correctly, including the
          failure cases nobody thinks about until they happen.
        </p>
        <p>
          Mobile money is the integration we do most often here. Card
          ownership across much of Central and West Africa is low, while MTN
          Mobile Money and Orange Money accounts are close to universal, so
          connecting a store or an app directly to those networks is usually
          the single highest-impact piece of integration work for a business
          in this region.
        </p>
      </section>

      <section>
        <h2>Building an API for your own product</h2>
        <p>
          If you run a web app and a mobile app on the same data, or need to
          give a partner controlled access to part of your system, the
          product needs its own API: a documented, stable interface that
          other software can call, separate from the interface a person
          clicks through. That is different work from building the product
          itself, and we scope it separately.
        </p>
      </section>

      <section>
        <h2>Reliability is the part people underestimate</h2>
        <p>
          Taking a payment or sending a request once is straightforward.
          Knowing with certainty that it succeeded is not. Confirmations
          arrive late, arrive twice, or never arrive while the underlying
          action has in fact gone through. This is the normal behaviour of
          real payment and messaging systems, not an edge case.
        </p>
        <p>
          A correct integration treats the provider&apos;s webhook or
          callback as the source of truth, handles a repeated notification
          without double-processing it, and reconciles against the
          provider&apos;s own records rather than trusting what the browser
          reported. We also set up monitoring so failures surface to us
          before your customers have to report them.
        </p>
      </section>

      <Faq
        items={[
          {
            question: "Can you integrate MTN MoMo and Orange Money?",
            answer:
              "Yes, this is one of the most common integrations we build. In Cameroon most merchants need both networks, since customers are split between the two and will not switch to complete a purchase. We handle merchant account guidance, the sandbox build, the live payment flow, and the reconciliation logic that keeps orders and payments in sync.",
          },
          {
            question: "How much does an integration cost?",
            answer:
              "It depends on the provider and how many failure states have to be handled correctly. A single payment provider is usually a smaller, well-defined piece of work. We scope and quote a fixed figure before starting.",
          },
          {
            question: "How long does an integration take?",
            answer:
              "A standard payment integration is typically one to two weeks of engineering. The wider timeline often depends on how quickly a merchant account is approved by the provider, which is outside our control and can take longer than the build itself.",
          },
          {
            question: "What if the service I want to connect to has no public API?",
            answer:
              "We will tell you plainly whether a workable integration exists. Some services expose data in ways that were not designed for it, and those integrations are fragile by nature. We would rather say that upfront than build something that breaks the next time the other system changes.",
          },
          {
            question: "Who owns the integration once it is built?",
            answer:
              "You do. Credentials are registered in your business's name and the code is yours. If you later move to a different developer, nothing needs to be handed back to us first.",
          },
        ]}
      />

      <DocCta
        heading="Get an integration working"
        body="Tell us which systems your product needs to talk to. We will tell you what the integration involves and what it costs before you commit to anything."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        items={[
          {
            href: "/services/ai-automation",
            label: "AI automation",
            note: "Automations and agents that depend on the same connections.",
          },
          {
            href: "/services/mobile-apps",
            label: "Mobile apps",
            note: "Apps that take mobile money payments without leaving the app.",
          },
          {
            href: "/services/maintenance-support",
            label: "Maintenance & support",
            note: "Keeping an integration working as providers change their APIs.",
          },
        ]}
      />
    </PageShell>
  );
}
