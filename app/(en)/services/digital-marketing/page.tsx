import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/services/digital-marketing";

export const metadata: Metadata = metadataForRoute(PATH);

export default function DigitalMarketingPage() {
  return (
    <PageShell
      path={PATH}
      title="Digital Marketing and Community Management"
      lede={`${SITE.name} runs search visibility, community management and paid campaigns for West African businesses, reported against enquiries and sales rather than impressions and follower counts.`}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
      ]}
    >
      <ServiceJsonLd
        name="Digital Marketing"
        description="Search engine optimisation, community management and paid advertising for businesses across West Africa."
        path={PATH}
      />

      <section>
        <h2>What we run</h2>
        <ul>
          <li>
            <strong>Search visibility.</strong> Getting found for what your
            customers actually type, in English or French, which are two
            different keyword sets and not translations of each other.
          </li>
          <li>
            <strong>Community management.</strong> Running the accounts:
            posting, replying, and handling the messages where sales actually
            close in this region.
          </li>
          <li>
            <strong>Paid campaigns.</strong> Meta and Google, with budgets small
            enough to test before they are large enough to hurt.
          </li>
          <li>
            <strong>Content.</strong> Written and visual work that answers the
            questions your customers ask before buying.
          </li>
          <li>
            <strong>Measurement.</strong> Reporting tied to enquiries, not to
            reach.
          </li>
        </ul>
      </section>

      <section>
        <h2>Bilingual by default</h2>
        <p>
          Nigeria and Ghana search in English. Côte d&apos;Ivoire, Gabon and the
          Douala and Yaoundé commercial centres search in French. Cameroon is
          split between the two. A campaign written in one language and machine
          translated into the other performs badly in both, because the terms
          people search are not translations of each other. Community management
          is the clearest example: it is the standard francophone term for social
          media work, and an English-only strategy never surfaces for it.
        </p>
      </section>

      <section>
        <h2>What we will not do</h2>
        <p>
          We do not buy followers, and we will not report follower growth as a
          result. We do not promise a position on Google, because nobody can
          honestly guarantee one. We do not run campaigns to a website that
          cannot convert the traffic, and if that is your situation we will say
          so and fix the site first.
        </p>
      </section>

      <Faq
        items={[
          {
            question: "How long before SEO produces results?",
            answer:
              "Three to six months before meaningful movement, longer in competitive markets. Anyone promising results in weeks is either buying ads and calling it SEO, or targeting terms nobody searches. Local and specific terms move faster than broad national ones.",
          },
          {
            question: "Can you guarantee first place on Google?",
            answer:
              "No, and neither can anyone else. Ranking is decided by Google against competitors who are also working on it. What we can commit to is the work, the reporting, and honest assessment of which terms are realistically winnable for you.",
          },
          {
            question: "Do you work in French as well as English?",
            answer:
              "Yes. Both languages are handled as separate strategies with their own keyword research, not as translations of one another, because the search terms differ in more than wording.",
          },
          {
            question: "What is a realistic monthly budget?",
            answer:
              "It depends on whether you need search work, community management, paid media, or all three, and we quote per scope rather than selling fixed packages. Paid budgets are separate from fees and are paid directly to the platforms by you.",
          },
          {
            question: "Do I need a new website before marketing?",
            answer:
              "Sometimes, and we will tell you if so rather than taking a retainer to send traffic somewhere that cannot convert it. A slow site or one with no clear way to enquire wastes whatever is spent driving people to it.",
          },
        ]}
      />

      <DocCta
        heading="Discuss a marketing brief"
        body="Tell us what you sell and who you sell it to. We will say which channels are worth your budget and which are not."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        items={[
          {
            href: "/services/web-development",
            label: "Web development",
            note: "The site campaigns send traffic to.",
          },
          {
            href: "/services/branding",
            label: "Branding",
            note: "The identity the campaigns carry.",
          },
          {
            href: "/services/ecommerce",
            label: "E-commerce",
            note: "Where marketing turns directly into orders.",
          },
        ]}
      />
    </PageShell>
  );
}
