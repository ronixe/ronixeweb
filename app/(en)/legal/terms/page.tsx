import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = metadataForRoute("/legal/terms");

const LAST_UPDATED = "12 August 2026";

export default function TermsPage() {
  return (
    <PageShell
      path="/legal/terms"
      title="Terms and Conditions"
      lede={`These terms cover use of the ${SITE.name} website and set out the general basis on which we provide development, design and marketing services. Individual projects are governed by their own signed agreement, which takes precedence over this page.`}
      crumbs={[{ label: "Home", href: "/" }]}
    >
      <section>
        <p>
          <strong>Last updated:</strong> {LAST_UPDATED}
        </p>
      </section>

      <section>
        <h2>Who these terms are with</h2>
        <p>
          This website is operated by {SITE.legalName}, of{" "}
          {SITE.address.street}, {SITE.address.locality}, {SITE.address.region},{" "}
          {SITE.address.country}. In these terms, &quot;we&quot; and
          &quot;us&quot; mean {SITE.legalName}, and &quot;you&quot; means the
          person or business using this website or engaging our services.
        </p>
      </section>

      <section>
        <h2>Using this website</h2>
        <p>
          You may view and use this website for lawful purposes. You may not
          attempt to gain unauthorised access to it, interfere with its
          operation, or use automated means to place unreasonable load on it.
        </p>
        <p>
          We aim to keep the site available and accurate, but we do not
          guarantee uninterrupted availability, and content may be changed or
          removed without notice.
        </p>
      </section>

      <section>
        <h2>Information on this site is not an offer</h2>
        <p>
          Descriptions of our services are for information. They are not a
          binding offer and do not form a contract. A contract exists only once
          we have agreed a scope in writing and you have accepted it.
        </p>
      </section>

      <section>
        <h2>Our intellectual property</h2>
        <p>
          The {SITE.name} name, logo, wordmark, and the design, text and code of
          this website belong to us. You may not copy, reproduce or adapt them
          without our written permission, other than incidental copying required
          to view the site normally.
        </p>
      </section>

      <section>
        <h2>Ownership of project work</h2>
        <p>
          For client projects, ownership of the final deliverables transfers to
          you on full payment, unless the project agreement says otherwise. This
          covers the designs, the source code and the assets produced for you.
        </p>
        <p>
          Two things are excluded. Third-party components remain under their own
          licences, and we will tell you what those are. Our own pre-existing
          tools, libraries and methods remain ours, and we grant you the licence
          needed to use them as part of your deliverables.
        </p>
        <p>
          Unless you ask us not to, we may describe the work and show it in our
          portfolio.
        </p>
      </section>

      <section>
        <h2>Your responsibilities on a project</h2>
        <ul>
          <li>
            Providing content, access and approvals when they are needed.
            Timelines assume reasonable responsiveness, and delays here move the
            delivery date.
          </li>
          <li>
            Confirming that material you supply is yours to use and does not
            infringe anyone else&apos;s rights.
          </li>
          <li>
            Holding the accounts for third-party services in your own name where
            those services require it, including payment providers and app store
            developer accounts.
          </li>
        </ul>
      </section>

      <section>
        <h2>Fees and payment</h2>
        <p>
          Fees, payment schedule and currency are set in the project agreement.
          Unless agreed otherwise, work begins once the initial payment is
          received, and final deliverables are handed over on final payment. Any
          third-party costs, such as hosting, domain registration, licences or
          advertising budgets, are separate from our fees and are ordinarily
          paid by you directly to that provider.
        </p>
        <p>
          We may suspend work on materially overdue accounts, having given you
          notice first.
        </p>
      </section>

      <section>
        <h2>Changes to an agreed scope</h2>
        <p>
          Work outside the agreed scope is quoted separately and proceeds only
          once you approve it. We will not make unapproved additions and then
          invoice for them.
        </p>
      </section>

      <section>
        <h2>Cancellation</h2>
        <p>
          Either party may end a project in writing. If you cancel, you are
          liable for work completed to that point, and we will hand over what
          has been produced and paid for. If we cancel, we will refund payments
          for work not yet performed.
        </p>
      </section>

      <section>
        <h2>Warranties and their limits</h2>
        <p>
          We will perform our services with reasonable skill and care, and to
          the standard reasonably expected of a competent provider.
        </p>
        <p>
          We do not warrant that software will be free of every defect, that a
          third-party service will remain available or unchanged, or that any
          specific commercial outcome will follow. In particular, no search
          engine ranking, traffic level or sales figure is guaranteed, because
          those depend on factors outside our control.
        </p>
        <p>
          Where we agree a defect correction period after launch, that period is
          stated in the project agreement.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          Nothing in these terms limits liability for death or personal injury
          caused by negligence, for fraud, or for anything else that cannot
          lawfully be limited.
        </p>
        <p>
          Subject to that, our total liability arising from a project is limited
          to the total fees you paid us for that project. We are not liable for
          indirect or consequential loss, including lost profit, lost revenue,
          lost data or business interruption.
        </p>
      </section>

      <section>
        <h2>Confidentiality</h2>
        <p>
          Each of us will keep the other&apos;s confidential information
          confidential, and use it only for the purposes of the project. This
          continues after the project ends.
        </p>
      </section>

      <section>
        <h2>Links to other sites</h2>
        <p>
          This site may link to sites we do not operate. We are not responsible
          for their content or their practices.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of {SITE.address.country}, and
          the courts of {SITE.address.country} have jurisdiction over any
          dispute. Where a project agreement specifies a different law or forum,
          that agreement prevails.
        </p>
      </section>

      <section>
        <h2>Changes to these terms</h2>
        <p>
          We may update these terms, and the current version is always the one
          published here with the date shown at the top. Changes do not affect
          projects already agreed.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </section>
    </PageShell>
  );
}
