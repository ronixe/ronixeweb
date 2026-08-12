import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = metadataForRoute("/legal/privacy");

const LAST_UPDATED = "12 August 2026";

export default function PrivacyPage() {
  return (
    <PageShell
      path="/legal/privacy"
      title="Privacy Policy"
      lede={`This policy explains what personal data ${SITE.name} collects through this website and through working with us, why we hold it, how long we keep it, and what you can ask us to do with it.`}
      crumbs={[{ label: "Home", href: "/" }]}
    >
      <section>
        <p>
          <strong>Last updated:</strong> {LAST_UPDATED}
        </p>
      </section>

      <section>
        <h2>Who we are</h2>
        <p>
          {SITE.legalName} is a software development company based at{" "}
          {SITE.address.street}, {SITE.address.locality}, {SITE.address.region},{" "}
          {SITE.address.country}. We are the data controller for the personal
          data described in this policy. You can reach us at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or on{" "}
          {SITE.phoneDisplay}.
        </p>
      </section>

      <section>
        <h2>What this website collects</h2>
        <p>
          This website does not use cookies, analytics, advertising pixels or
          any third-party tracking. There are no contact forms, and no account
          system. We do not build profiles of visitors, and we cannot identify
          you from a visit to this site.
        </p>
        <p>
          Our hosting provider records standard server logs when a page is
          requested. These typically include the IP address making the request,
          the time, the page requested, and the browser identifying itself.
          These logs exist to keep the service running and secure. We do not use
          them for marketing and we do not attempt to identify individuals from
          them.
        </p>
      </section>

      <section>
        <h2>What we collect when you contact us</h2>
        <p>
          If you email us, message us on WhatsApp, or call us, we hold whatever
          you choose to send: typically your name, your contact details, and
          what you tell us about your project. We use this only to reply to you
          and to carry out any work you go on to engage us for.
        </p>
      </section>

      <section>
        <h2>What we collect when you become a client</h2>
        <p>
          Working on a project usually means holding more: business details,
          billing information, and whatever access or content is needed to
          deliver the work. Where a project gives us access to data belonging to
          your own customers, we process it on your instructions, only for the
          purposes of the project, and we set that out in the project agreement
          rather than relying on this policy.
        </p>
      </section>

      <section>
        <h2>Why we are allowed to hold it</h2>
        <ul>
          <li>
            <strong>To answer you.</strong> When you contact us, handling the
            enquiry is the reason we hold your details.
          </li>
          <li>
            <strong>To perform a contract.</strong> Client data is held to
            deliver the work you engaged us for.
          </li>
          <li>
            <strong>To meet legal obligations.</strong> Invoices and tax records
            must be retained for the periods the law requires.
          </li>
        </ul>
      </section>

      <section>
        <h2>Who we share it with</h2>
        <p>
          We do not sell personal data, and we do not share it for advertising.
          We use a small number of service providers to operate the business,
          including website hosting, email, and payment or accounting services.
          These providers process data on our behalf and are not permitted to
          use it for their own purposes.
        </p>
        <p>
          We may disclose data where the law requires it, or to establish or
          defend a legal claim.
        </p>
      </section>

      <section>
        <h2>Where it is stored</h2>
        <p>
          Our website hosting and email providers operate infrastructure outside{" "}
          {SITE.address.country}, so data may be stored or processed in other
          countries. We choose providers that maintain recognised security
          standards and contractual protections for data they handle on our
          behalf.
        </p>
      </section>

      <section>
        <h2>How long we keep it</h2>
        <ul>
          <li>
            <strong>Enquiries that do not become projects</strong> are kept for
            up to two years, then deleted.
          </li>
          <li>
            <strong>Client records</strong> are kept for the duration of the
            engagement and for as long afterwards as we may need them to support
            the work or defend a claim.
          </li>
          <li>
            <strong>Invoices and accounting records</strong> are kept for the
            period required by law.
          </li>
          <li>
            <strong>Server logs</strong> are kept for a short period by our
            hosting provider and then discarded.
          </li>
        </ul>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          You can ask us for a copy of the personal data we hold about you, ask
          us to correct it if it is wrong, ask us to delete it where we have no
          continuing reason to keep it, and object to a particular use of it.
          Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and we will
          respond within 30 days. We will not charge you for making a request.
        </p>
        <p>
          If you are not satisfied with how we have handled your data, you may
          complain to the relevant data protection authority in your country.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          We take reasonable technical and organisational measures to protect
          personal data, including encrypted connections to this website,
          access controls on our systems, and limiting access to those who need
          it. No system is perfectly secure, and we will tell affected people
          promptly if a breach occurs that is likely to affect them.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          Our services are provided to businesses. This website is not directed
          at children and we do not knowingly collect data from them.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          If this policy changes, the updated version will be posted here with a
          new date at the top. Material changes affecting existing clients will
          be communicated directly.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy or about your data can be sent to{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, or by post to{" "}
          {SITE.legalName}, {SITE.address.street}, {SITE.address.locality},{" "}
          {SITE.address.country}.
        </p>
      </section>
    </PageShell>
  );
}
