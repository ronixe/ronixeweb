import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/services/mobile-apps";

export const metadata: Metadata = metadataForRoute(PATH);

export default function MobileAppsPage() {
  return (
    <PageShell
      path={PATH}
      title="Mobile App Development in Cameroon"
      lede={`${SITE.name} designs and builds mobile applications for iOS and Android, for businesses in Cameroon and across West Africa that need their product in a customer's hand rather than in a browser tab.`}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
      ]}
    >
      <ServiceJsonLd
        name="Mobile App Development"
        description="Native and cross-platform iOS and Android application development for West African businesses."
        path={PATH}
      />

      <section>
        <h2>Do you actually need an app?</h2>
        <p>
          Often the answer is no, and we will say so. An app costs more to build
          than a website, has to be maintained against two operating systems that
          change every year, and asks the customer to install something before
          they can use it. If your product is read once and never returned to, a
          fast mobile website will serve you better.
        </p>
        <p>
          An app earns its cost when you need something the browser cannot give
          you: working offline, push notifications, camera or location access, or
          a customer who opens the thing several times a week.
        </p>
      </section>

      <section>
        <h2>Built for real conditions</h2>
        <ul>
          <li>
            <strong>Offline tolerance.</strong> Connectivity drops. An app that
            fails when the signal does is an app people delete. Work is queued
            locally and synchronised when the connection returns.
          </li>
          <li>
            <strong>Modest data use.</strong> Data costs money here. We keep
            payloads small rather than shipping an app that eats a bundle in a
            week.
          </li>
          <li>
            <strong>Mid-range devices.</strong> The target is the phone your
            customers actually own, not the newest handset in the shop.
          </li>
          <li>
            <strong>Mobile money in-app.</strong> Payments through MTN MoMo and
            Orange Money, handled inside the app rather than pushed to a browser.
          </li>
        </ul>
      </section>

      <section>
        <h2>Publishing and what comes after</h2>
        <p>
          We handle submission to the App Store and Google Play, including the
          review process, store listings and the screenshots and descriptions
          that decide whether anyone installs it. Both stores reject apps for
          reasons that are not obvious the first time, and that is our problem to
          solve rather than yours.
        </p>
        <p>
          After launch, apps need maintaining. Operating systems update annually
          and stores enforce new requirements on a schedule. An app left alone
          for two years usually stops working.
        </p>
      </section>

      <Faq
        items={[
          {
            question: "How much does it cost to build an app in Cameroon?",
            answer:
              "Considerably more than a website, and the range is wide because apps vary more. We scope and quote a fixed figure before starting. If the budget you have does not match the app you described, we will tell you at the first conversation rather than after you have paid a deposit.",
          },
          {
            question: "Should I build for iOS or Android first?",
            answer:
              "In most West African markets, Android first, because that is what the overwhelming majority of customers use. We usually build cross-platform so both ship together, but if budget forces a choice, Android is nearly always the right one here.",
          },
          {
            question: "Can the app take mobile money payments?",
            answer:
              "Yes. MTN Mobile Money and Orange Money can be integrated directly into the app so customers pay without leaving it. This is the same integration work described on our mobile money page.",
          },
          {
            question: "Will the app work without internet?",
            answer:
              "It can, and for most West African use cases it should. We build offline tolerance in from the start rather than adding it later, because retrofitting it usually means rewriting how the app stores data.",
          },
          {
            question: "Who owns the app and the store listings?",
            answer:
              "You do. The developer accounts are registered in your business name and the code is yours. If you later work with someone else, nothing has to be handed back to us first.",
          },
        ]}
      />

      <DocCta
        heading="Talk through an app idea"
        body="Describe what you want the app to do. We will tell you whether it needs to be an app at all, and what it takes if it does."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        items={[
          {
            href: "/services/mobile-money-integration",
            label: "Mobile money",
            note: "MTN MoMo and Orange Money payments, in-app or on the web.",
          },
          {
            href: "/services/web-development",
            label: "Web development",
            note: "Often the cheaper answer to the same problem.",
          },
          {
            href: "/services/branding",
            label: "Branding",
            note: "App icons, store assets and the identity around them.",
          },
        ]}
      />
    </PageShell>
  );
}
