import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute, routesInGroup } from "@/lib/routes";
import { PageShell, DocCta } from "@/components/page-shell";

export const metadata: Metadata = metadataForRoute("/services");

const SERVICE_PATHS = [
  "/services/web-development",
  "/services/mobile-apps",
  "/services/ai-automation",
  "/services/ui-ux-design",
  "/services/api-integration",
  "/services/maintenance-support",
];

export default function ServicesPage() {
  const services = routesInGroup("services").filter((r) =>
    SERVICE_PATHS.includes(r.path)
  );

  return (
    <PageShell
      path="/services"
      title="Services"
      lede={`${SITE.name} builds web and mobile software, designs the interfaces on top of it, and connects it to the tools it needs to run, from a single studio in ${SITE.address.locality}, ${SITE.address.country}.`}
      crumbs={[{ label: "Home", href: "/" }]}
    >
      <section>
        <h2>One team for the whole build</h2>
        <p>
          Most projects fail in the handoffs. A designer produces a file the
          developer cannot build, a developer ships something the marketing
          agency cannot promote, and the client sits in the middle translating
          between three suppliers who have never spoken to each other.
        </p>
        <p>
          Ronixe covers the full range, so the same team that names the product
          also builds it and takes it to market. That is the case for working
          with a general studio rather than assembling specialists.
        </p>
      </section>

      <section>
        <h2>What we do</h2>
        <div className="related-grid">
          {services.map((service) => (
            <Link key={service.path} href={service.path} className="related-card">
              <span className="related-label">{service.label}</span>
              <span className="related-note">{service.summary}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2>Where we work</h2>
        <p>
          Ronixe is based in {SITE.address.locality}, in the{" "}
          {SITE.address.region} region of {SITE.address.country}, and works
          with clients across Cameroon and Africa. Projects run in English or
          French depending on the market you are selling into.
        </p>
      </section>

      <DocCta
        heading="Tell us what you are building"
        body="A short call is usually enough to say whether we are the right studio for the work, roughly what it costs, and how long it takes."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />
    </PageShell>
  );
}
