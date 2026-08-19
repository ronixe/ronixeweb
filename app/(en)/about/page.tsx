import Image from "next/image";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta } from "@/components/page-shell";

export const metadata: Metadata = metadataForRoute("/about");

export default function AboutPage() {
  return (
    <PageShell
      path="/about"
      title="About"
      lede={SITE.description}
      crumbs={[{ label: "Home", href: "/" }]}
    >
      <section>
        <h2>How we work</h2>
        <p>
          Most projects fail in the handoffs. A designer produces a file the
          developer cannot build, a developer ships something the marketing
          agency cannot promote, and the client sits in the middle
          translating between suppliers who have never spoken to each other.
        </p>
        <p>
          Ronixe covers the full range, so the same team that designs a
          product also builds it and keeps it running after launch. That is
          the case for working with one dependable technical partner rather
          than assembling specialists.
        </p>
      </section>

      <section>
        <h2>Leadership</h2>
        <p>
          Behind every reliable software system is a team that understands
          both code and business strategy.
        </p>
        <div className="leadership-grid">
          <article className="leadership-card">
            <div className="leadership-avatar">
              <Image
                src="/brand/Foweh_Princewill_Petinjoh-Founder_of_Ronixe.jpeg"
                alt={`${SITE.founder}, founder of ${SITE.name}`}
                width={152}
                height={152}
              />
            </div>
            <div className="leadership-info">
              <div className="leadership-heading">
                <h3 className="leadership-name">{SITE.founder}</h3>
                <p className="leadership-role">
                  Founder &amp; Lead Software Architect
                </p>
              </div>
              <p>
                With years of experience guiding digital products from raw
                concept to production-ready platform, Princewill founded{" "}
                {SITE.name} on a simple principle: build software that solves
                real problems without unnecessary complexity or bloated tech
                stacks.
              </p>
              <blockquote>
                &ldquo;Too many startups waste time and budget
                over-engineering their early products. Our focus at{" "}
                {SITE.name} is shipping clean, scalable applications that
                deliver value on day one.&rdquo;
              </blockquote>
              <p>
                Whether you are launching a web application, building a
                native mobile app, or scaling an e-commerce platform,
                Princewill and the {SITE.name} engineering team bring
                technical clarity to every build.
              </p>
            </div>
          </article>
        </div>
      </section>

      <DocCta
        heading="Talk to us"
        body="Tell us what you are building. A short call is usually enough to say whether we are the right studio for the work."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />
    </PageShell>
  );
}
