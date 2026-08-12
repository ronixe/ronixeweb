import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/services/ecommerce";

export const metadata: Metadata = metadataForRoute(PATH);

export default function EcommercePage() {
  return (
    <PageShell
      path={PATH}
      title="E-Commerce Website Development"
      lede={`${SITE.name} builds online stores for West African businesses: product management, an order dashboard your staff can actually use, and payment by mobile money as well as card.`}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
      ]}
    >
      <ServiceJsonLd
        name="E-Commerce Development"
        description="Online stores with product management, order dashboards and mobile money payment integration."
        path={PATH}
      />

      <section>
        <h2>What comes with the store</h2>
        <ul>
          <li>
            <strong>Product management</strong> you can run yourself, including
            variants, stock levels and pricing, without calling a developer to
            change a price.
          </li>
          <li>
            <strong>An order dashboard</strong> built for the person packing the
            orders, not for a demo screenshot.
          </li>
          <li>
            <strong>Mobile money and card payments</strong>, so customers pay
            with whatever they have.
          </li>
          <li>
            <strong>Delivery handling</strong> that fits how goods actually move
            here, including zones, pickup points and payment on delivery where
            you want it.
          </li>
          <li>
            <strong>A checkout that survives a bad connection</strong> and does
            not lose the basket when the signal drops.
          </li>
          <li>
            <strong>WhatsApp as a sales channel</strong>, because a large share
            of orders in this region start as a message rather than a click.
          </li>
        </ul>
      </section>

      <section>
        <h2>Payment on delivery is still a real requirement</h2>
        <p>
          Many West African customers will not pay before they see the goods, and
          a store that insists on prepayment loses those sales. We treat payment
          on delivery as a first-class option rather than an awkward workaround,
          with the order states and reconciliation to support it.
        </p>
        <p>
          The right mix is usually all three: mobile money for customers who
          trust you, card for diaspora and corporate buyers, and cash on delivery
          for first-time local customers. Which one you lead with should be a
          decision, not an accident of the platform you picked.
        </p>
      </section>

      <section>
        <h2>Platform or custom build</h2>
        <p>
          If a standard platform fits your business, we will tell you so and set
          it up properly rather than charging you for a custom build you do not
          need. Platforms fall down here in one specific way: mobile money
          support is usually poor or absent, which is the one thing you cannot
          compromise on in this market.
        </p>
        <p>
          A custom store makes sense when you have unusual product structures,
          heavy delivery logic, or you need mobile money to work exactly right.
          That decision belongs at scoping, before anyone writes code.
        </p>
      </section>

      <Faq
        items={[
          {
            question:
              "What is the best e-commerce platform for a business in Cameroon?",
            answer:
              "The deciding factor is mobile money support, not features. Most international platforms handle cards well and mobile money badly or not at all, which is the wrong way round for this market. We assess your product range and payment mix and recommend a platform or a custom build on that basis.",
          },
          {
            question: "Can customers pay with MTN MoMo or Orange Money?",
            answer:
              "Yes, and for most West African stores they should be the primary payment method rather than an alternative one. Card ownership is low while mobile money accounts are close to universal.",
          },
          {
            question: "Can I offer payment on delivery?",
            answer:
              "Yes. It is a normal requirement here, not an edge case, and we build the order states and reconciliation to handle it properly rather than treating it as an unpaid order that someone reconciles by hand.",
          },
          {
            question: "How long does an online store take to build?",
            answer:
              "A store on an existing platform with mobile money integrated is usually four to six weeks. A custom build depends on how unusual your products and delivery rules are, and we give a date at scoping.",
          },
          {
            question: "Can I update products myself?",
            answer:
              "Yes. Adding products, changing prices and managing stock are things you do without us. We hand over with training so your team is not blocked on a developer for routine changes.",
          },
        ]}
      />

      <DocCta
        heading="Plan an online store"
        body="Tell us what you sell and how your customers pay. We will recommend a platform or a custom build, and say plainly which is cheaper for you."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        items={[
          {
            href: "/services/mobile-money-integration",
            label: "Mobile money",
            note: "The payment integration this store depends on.",
          },
          {
            href: "/services/digital-marketing",
            label: "Digital marketing",
            note: "A store nobody visits does not sell. Getting traffic to it.",
          },
          {
            href: "/services/branding",
            label: "Branding",
            note: "Packaging, identity and the trust signals that convert.",
          },
        ]}
      />
    </PageShell>
  );
}
