import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/services/mobile-money-integration";

export const metadata: Metadata = metadataForRoute(PATH);

export default function MobileMoneyPage() {
  return (
    <PageShell
      path={PATH}
      title="MTN MoMo and Orange Money Integration"
      lede="Mobile money integration connects your website or app directly to MTN Mobile Money and Orange Money, so a customer pays from the account they already keep money in rather than a card they may not own."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
      ]}
    >
      <ServiceJsonLd
        name="Mobile Money Payment Integration"
        description="Integration of MTN Mobile Money and Orange Money payment APIs into websites, online stores and mobile applications."
        path={PATH}
      />

      <section>
        <h2>Why card checkout loses you sales here</h2>
        <p>
          Card ownership across much of West and Central Africa is low, but
          mobile money accounts are close to universal. A checkout that only
          accepts Visa and Mastercard asks most of your customers for something
          they do not have, and they leave.
        </p>
        <p>
          Adding mobile money is usually the single highest-impact change to an
          online store in this region. It is not a nice-to-have feature. For most
          Cameroonian, Ivorian and Ghanaian merchants it is the difference
          between taking payment and not.
        </p>
      </section>

      <section>
        <h2>Networks we integrate</h2>
        <div className="doc-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Network</th>
                <th>Coverage</th>
                <th>Typical use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MTN Mobile Money</td>
                <td>
                  Cameroon, Ghana, Côte d&apos;Ivoire, Benin, Rwanda, Zambia,
                  Uganda, Eswatini
                </td>
                <td>Collections, disbursements, recurring billing</td>
              </tr>
              <tr>
                <td>Orange Money</td>
                <td>
                  Cameroon, Côte d&apos;Ivoire, Mali, Senegal, Guinea, DRC and
                  others
                </td>
                <td>Web payment, merchant collections</td>
              </tr>
              <tr>
                <td>Aggregators</td>
                <td>Multi-network, multi-country</td>
                <td>
                  One integration covering several networks, useful when you sell
                  across borders
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          In Cameroon most merchants need both MTN and Orange, because customers
          are split between the two networks and will not switch to buy from you.
        </p>
      </section>

      <section>
        <h2>What the work involves</h2>
        <ul>
          <li>
            <strong>Merchant account setup.</strong> Guidance through the
            provider&apos;s onboarding, which is usually the slowest part and is
            done by you as the account holder, not by us.
          </li>
          <li>
            <strong>Sandbox build.</strong> The integration is written and tested
            against the provider&apos;s test environment before any real money
            moves.
          </li>
          <li>
            <strong>Collections flow.</strong> The customer approves the payment
            on their handset, and your site waits on the result correctly rather
            than assuming success.
          </li>
          <li>
            <strong>Webhook and reconciliation handling.</strong> Payments that
            arrive late, twice, or not at all are the normal case, not the edge
            case. This is where most homemade integrations break.
          </li>
          <li>
            <strong>Failure states.</strong> Insufficient balance, wrong PIN,
            timeout and network rejection each get a clear message rather than a
            generic error.
          </li>
          <li>
            <strong>Going live.</strong> Production credentials, a real
            transaction test, and monitoring so you learn about failures before
            your customers report them.
          </li>
        </ul>
      </section>

      <section>
        <h2>Reconciliation is the part people underestimate</h2>
        <p>
          Taking a payment is straightforward. Knowing with certainty which
          payments succeeded is not. Mobile money confirmations can arrive
          minutes after the customer has closed the tab, arrive more than once
          for a single payment, or never arrive at all while the money has in
          fact moved.
        </p>
        <p>
          A correct integration treats the webhook as the source of truth,
          handles repeat notifications without double-crediting an order, and
          reconciles against the provider&apos;s own records rather than trusting
          what the browser reported. Getting this wrong means either shipping
          goods you were not paid for or holding paid orders you never fulfilled.
        </p>
      </section>

      <Faq
        items={[
          {
            question: "How long does mobile money integration take?",
            answer:
              "The engineering is typically one to two weeks for a standard collections flow. The wider timeline usually depends on how quickly the merchant account is approved by the provider, which is outside our control and can take longer than the build itself.",
          },
          {
            question: "Can I accept both MTN MoMo and Orange Money?",
            answer:
              "Yes, and in Cameroon you generally should. Customers are split across both networks and will not change network to complete a purchase. Each network is a separate integration, though they share most of the surrounding order and reconciliation logic.",
          },
          {
            question: "Do I need a registered business to accept mobile money?",
            answer:
              "For a merchant collections account, yes. Providers require business registration documents during onboarding. We can build and test the full integration in the sandbox while your registration is in progress, so nothing is waiting on the code.",
          },
          {
            question:
              "Can mobile money be added to a website I already have?",
            answer:
              "Usually yes. If the site runs on a platform we can deploy to, the payment flow can be added without a rebuild. If it is on a closed platform with no server-side access, we will tell you that before you spend anything.",
          },
          {
            question: "What happens if a payment fails halfway?",
            answer:
              "The order is held in a pending state rather than confirmed or cancelled, and resolves when the provider's webhook arrives or a reconciliation check runs. The customer sees an accurate status rather than a false confirmation.",
          },
        ]}
      />

      <DocCta
        heading="Get mobile money working on your site"
        body="Tell us which networks your customers use and what you are selling. We will tell you what the integration involves and what it costs before you commit to anything."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        items={[
          {
            href: "/services/ecommerce",
            label: "E-commerce",
            note: "A full online store with mobile money built in from the start.",
          },
          {
            href: "/services/web-development",
            label: "Web development",
            note: "Custom websites and web applications, built to launch and to last.",
          },
          {
            href: "/services/mobile-apps",
            label: "Mobile apps",
            note: "iOS and Android applications that can take payments in-app.",
          },
        ]}
      />
    </PageShell>
  );
}
