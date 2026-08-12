import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute, ROUTES, routesInGroup, homeRoute } from "@/lib/routes";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = metadataForRoute("/sitemap");

const GROUPS = [
  { title: "Services", group: "services" as const, locale: "en" as const },
  { title: "Legal", group: "legal" as const, locale: "en" as const },
  { title: "Français", group: "services" as const, locale: "fr" as const },
];

export default function SitemapPage() {
  const home = ROUTES.find((r) => r.path === "/");

  return (
    <PageShell
      path="/sitemap"
      title="Sitemap"
      lede={`Every page on the ${SITE.name} website, in one list. There is also a machine-readable version at /sitemap.xml.`}
      crumbs={[{ label: "Home", href: "/" }]}
    >
      {home && (
        <section className="sitemap-group">
          <h2>Main</h2>
          <ul className="sitemap-list">
            <li>
              <Link href={home.path}>
                <span className="sitemap-name">{home.label}</span>
                <span className="sitemap-desc">{home.summary}</span>
              </Link>
            </li>
          </ul>
        </section>
      )}

      {GROUPS.map(({ title, group, locale }) => (
        <section key={`${group}-${locale}`} className="sitemap-group">
          <h2>{title}</h2>
          <ul className="sitemap-list">
            {/* The French section leads with the French home page, which is
                not part of the services group. */}
            {(locale === "fr"
              ? [homeRoute("fr"), ...routesInGroup(group, locale)]
              : routesInGroup(group, locale)
            ).map((route) => (
              <li key={route.path}>
                <Link href={route.path}>
                  <span className="sitemap-name">{route.title}</span>
                  <span className="sitemap-desc">{route.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section>
        <h2>Machine-readable versions</h2>
        <ul>
          <li>
            <a href="/sitemap.xml">/sitemap.xml</a> lists every page for search
            engines. This is the file submitted to Google Search Console and Bing
            Webmaster Tools.
          </li>
          <li>
            <a href="/robots.txt">/robots.txt</a> states which crawlers may
            access the site.
          </li>
          <li>
            <a href="/llms.txt">/llms.txt</a> summarises the site for AI
            crawlers.
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
