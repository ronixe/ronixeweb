import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = metadataForRoute("/legal/cookies");

const LAST_UPDATED = "12 August 2026";

export default function CookiesPage() {
  return (
    <PageShell
      path="/legal/cookies"
      title="Cookie Policy"
      lede={`This website sets no cookies. It runs no analytics, no advertising pixels and no third-party tracking, which is why you were not asked to accept anything when you arrived.`}
      crumbs={[{ label: "Home", href: "/" }]}
    >
      <section>
        <p>
          <strong>Last updated:</strong> {LAST_UPDATED}
        </p>
      </section>

      <section>
        <h2>What a cookie is</h2>
        <p>
          A cookie is a small file a website asks your browser to store, so it
          can recognise the browser on a later visit. Cookies are how sites keep
          you signed in, remember a shopping basket, or follow you between sites
          to build an advertising profile.
        </p>
      </section>

      <section>
        <h2>Why there is no banner on this site</h2>
        <p>
          Consent banners exist because most sites set cookies that are not
          necessary to deliver the page, and the law requires your permission
          before they do. This site sets none, so there is nothing to ask you
          about. Showing a banner anyway would be theatre.
        </p>
        <p>Specifically, this website does not:</p>
        <ul>
          <li>set any cookies, including strictly necessary ones</li>
          <li>run Google Analytics or any other analytics package</li>
          <li>carry advertising or remarketing pixels</li>
          <li>embed third-party widgets that track you</li>
          <li>load fonts, scripts or images from third-party servers</li>
        </ul>
        <p>
          Everything the page needs is served from our own domain. You can
          verify this yourself in your browser&apos;s developer tools, under the
          Application and Network tabs.
        </p>
      </section>

      <section>
        <h2>What is recorded regardless</h2>
        <p>
          Requesting any web page necessarily reveals some information to the
          server. Our hosting provider keeps standard server logs including the
          requesting IP address, the time and the page requested. This is not
          done with cookies, it cannot be switched off without switching off the
          website, and we do not use it to identify or track individuals. It is
          covered in our <a href="/legal/privacy">privacy policy</a>.
        </p>
      </section>

      <section>
        <h2>Links to other sites</h2>
        <p>
          Choosing to contact us through WhatsApp takes you to a service run by
          another company, which has its own cookie and privacy practices. The
          same applies to any other external site we link to. Our policy covers
          only this website.
        </p>
      </section>

      <section>
        <h2>If this changes</h2>
        <p>
          If we later add analytics, advertising or any other feature that
          requires cookies, this page will be updated before that change goes
          live, and a consent mechanism will be added where consent is legally
          required. We will not quietly start tracking visitors and update this
          page afterwards.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </section>
    </PageShell>
  );
}
