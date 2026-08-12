import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/services/web-development";

export const metadata: Metadata = metadataForRoute(PATH);

export default function WebDevelopmentPage() {
  return (
    <PageShell
      path={PATH}
      title="Web Development in Cameroon"
      lede={`${SITE.name} is a web development company in ${SITE.address.locality}, Cameroon. We build custom websites and web applications for businesses across Cameroon and West Africa, from the first sketch through to launch and the support that follows it.`}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
      ]}
    >
      <ServiceJsonLd
        name="Web Application Development"
        description="Custom websites and web platforms built for businesses in Cameroon and across West Africa."
        path={PATH}
      />

      <section>
        <h2>What we build</h2>
        <ul>
          <li>
            <strong>Company websites</strong> that load quickly on a phone over a
            weak connection, which is how most of your visitors will arrive.
          </li>
          <li>
            <strong>Web applications</strong> with accounts, dashboards,
            permissions and reporting, for running an actual operation rather
            than describing one.
          </li>
          <li>
            <strong>Booking and enquiry systems</strong> that put requests
            somewhere you can act on them instead of a shared inbox.
          </li>
          <li>
            <strong>Internal tools</strong> replacing the spreadsheet that three
            people email back and forth.
          </li>
          <li>
            <strong>Rebuilds</strong> of sites that were built once, never
            maintained, and are now slower than the business needs.
          </li>
        </ul>
      </section>

      <section>
        <h2>Built for the connection your customers actually have</h2>
        <p>
          A site that tests well on office fibre can be unusable on a phone in
          Bamenda at midday. We build with that as the default case rather than
          an afterthought: pages rendered on the server so they display before
          the JavaScript arrives, images sized for the device requesting them,
          and no heavy third-party scripts loaded to power a feature nobody uses.
        </p>
        <p>
          This is also why the sites we build tend to rank. The things that make
          a page fast on a poor connection are largely the same things search
          engines measure.
        </p>
      </section>

      <section>
        <h2>How a project runs</h2>
        <ul>
          <li>
            <strong>Scope.</strong> A conversation about what the site has to
            achieve, and an honest answer about whether you need what you think
            you need. Some enquiries end here, and that is a good outcome.
          </li>
          <li>
            <strong>Design.</strong> Layouts and a visual direction agreed before
            anything is built, so changes happen while they are still cheap.
          </li>
          <li>
            <strong>Build.</strong> Work in progress is deployed to a link you
            can open, from early on. You are never waiting on a big reveal.
          </li>
          <li>
            <strong>Launch.</strong> Domain, hosting, analytics if you want it,
            search engine submission, and a handover so you can update your own
            content.
          </li>
          <li>
            <strong>After.</strong> Fixes, changes and improvements. Sites need
            maintaining, and we would rather keep doing it than hand you
            something that decays.
          </li>
        </ul>
      </section>

      <Faq
        items={[
          {
            question: "How much does a website cost in Cameroon?",
            answer:
              "It depends on whether you need a brochure site or a working application, and we will give you a fixed figure before starting rather than an hourly rate that drifts. A small company website is a very different budget from a platform with user accounts and payments. The honest answer to a price question asked without a scope is that nobody can give you one.",
          },
          {
            question: "How long does it take to build a website?",
            answer:
              "A straightforward company website is usually three to five weeks from agreed scope to launch. Web applications with accounts, dashboards or payments take longer, and we give a date at scoping rather than after starting.",
          },
          {
            question: "Do you work with businesses outside Cameroon?",
            answer:
              "Yes. We work with clients across Nigeria, Ghana, Côte d'Ivoire and Gabon, and remotely beyond the region. Projects run in English or French depending on the market you are selling into.",
          },
          {
            question: "Who owns the website when it is finished?",
            answer:
              "You do. The code, the domain and the hosting accounts are yours, and we hand over the credentials at launch. You are never locked into us to make changes.",
          },
          {
            question: "Can you take over a website someone else built?",
            answer:
              "Often yes. We will review what exists and tell you plainly whether it is worth maintaining or whether a rebuild costs you less over the next two years than patching it.",
          },
        ]}
      />

      <DocCta
        heading="Start a web project"
        body="Tell us what the site needs to do. A short call is usually enough to give you a scope, a price range and a realistic date."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        items={[
          {
            href: "/services/ecommerce",
            label: "E-commerce",
            note: "Online stores with product management, orders and mobile money.",
          },
          {
            href: "/services/mobile-apps",
            label: "Mobile apps",
            note: "iOS and Android applications for customers and for your team.",
          },
          {
            href: "/services/branding",
            label: "Branding",
            note: "Identity work, for when the site needs a brand to sit on.",
          },
        ]}
      />
    </PageShell>
  );
}
