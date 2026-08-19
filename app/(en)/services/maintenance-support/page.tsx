import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/services/maintenance-support";

export const metadata: Metadata = metadataForRoute(PATH);

export default function MaintenanceSupportPage() {
  return (
    <PageShell
      path={PATH}
      title="Maintenance & Support"
      lede={`${SITE.name} keeps what we build, and some things we did not, running after launch: fixes, updates and the small changes a live website or app needs on an ongoing basis.`}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
      ]}
    >
      <ServiceJsonLd
        name="Maintenance & Support"
        description="Ongoing updates, fixes and improvements for websites, e-commerce stores and mobile apps after launch."
        path={PATH}
      />

      <section>
        <h2>What ongoing support covers</h2>
        <ul>
          <li>
            <strong>Bug fixes</strong>, when something that worked stops
            working.
          </li>
          <li>
            <strong>Security and dependency updates</strong>, applied before
            they become a problem rather than after.
          </li>
          <li>
            <strong>Small changes</strong>: new content, a new page, an
            adjusted flow, without needing a new project every time.
          </li>
          <li>
            <strong>Uptime monitoring</strong>, so we learn a site or app is
            down before your customers tell you.
          </li>
          <li>
            <strong>Hosting, domain and certificate renewal</strong>, handled
            so nothing lapses quietly in the background.
          </li>
        </ul>
      </section>

      <section>
        <h2>Software decays even when nothing changes</h2>
        <p>
          A website or app that is never touched does not stay still. Browsers
          update, operating systems update, and the libraries a product is
          built on get security patches that need applying. App stores
          periodically enforce new requirements and will delist an app that
          does not meet them. None of this is visible to you until something
          breaks, which is usually the worst time to find out.
        </p>
        <p>
          We would rather keep a product maintained than hand it over and
          watch it decay. If you built with someone else and it has been
          sitting untouched, we will tell you honestly whether it is worth
          maintaining or whether a rebuild costs you less over the next two
          years than continuing to patch it.
        </p>
      </section>

      <section>
        <h2>How support is scoped</h2>
        <p>
          Some clients want a monthly retainer with an agreed response time.
          Others prefer to call us when something is needed and pay for that
          work as it happens. We will recommend whichever fits how often your
          product actually changes, rather than sell you a retainer you do
          not need.
        </p>
      </section>

      <Faq
        items={[
          {
            question: "How is maintenance priced?",
            answer:
              "Either as a monthly retainer covering an agreed scope of updates and a set response time, or as ad-hoc work billed when it happens. We recommend a retainer for products that change often or where downtime is costly, and ad-hoc work for anything quieter.",
          },
          {
            question: "What is the response time for a broken site or app?",
            answer:
              "It depends on the arrangement. Retainer clients get an agreed response window, typically same working day for anything serious. Ad-hoc requests are handled in the order they come in, and we will tell you honestly if something urgent needs to jump the queue.",
          },
          {
            question: "Can you take over maintenance of something someone else built?",
            answer:
              "Often yes. We review what exists first and tell you plainly whether it is in a state worth maintaining. Some codebases are cheaper to rebuild than to keep patching, and we would rather say so early than bill you for propping up something that should be replaced.",
          },
          {
            question: "What happens if I stop the retainer?",
            answer:
              "Nothing is held back. The code, domain and hosting accounts are yours regardless of whether you keep a maintenance agreement with us, and you can take the product to another developer at any point.",
          },
          {
            question: "Is monitoring included?",
            answer:
              "Basic uptime monitoring is part of every maintenance retainer, so we know about an outage as soon as it starts rather than when a customer complains. More detailed monitoring can be added for products where it is worth the cost.",
          },
        ]}
      />

      <DocCta
        heading="Set up ongoing support"
        body="Tell us what you have and how often it changes. We will recommend a retainer or ad-hoc arrangement, and say plainly which one is cheaper for you."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        items={[
          {
            href: "/services/web-development",
            label: "Web development",
            note: "New builds, and the rebuilds maintenance sometimes leads to.",
          },
          {
            href: "/services/ai-automation",
            label: "AI automation",
            note: "Agents and automations that need monitoring too.",
          },
          {
            href: "/services/mobile-apps",
            label: "Mobile apps",
            note: "Apps need annual updates to survive two operating systems.",
          },
        ]}
      />
    </PageShell>
  );
}
