import Link from "next/link";
import type { ReactNode } from "react";
import { Backdrop } from "./backdrop";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { ui, type Locale } from "@/lib/i18n";
import { findRoute } from "@/lib/routes";

interface Crumb {
  label: string;
  href: string;
}

/**
 * The shell every inner page uses. Same sticky header and footer as the home
 * page, but a compact page header in place of the hero.
 *
 * `lede` is rendered as the first paragraph and should be the page's
 * definitional sentence: search engines and AI crawlers both extract it, so it
 * states plainly what the page is about rather than opening with a pitch.
 *
 * Passing `path` wires up the language switch in the footer from the route
 * manifest, so it can never point at a page that does not exist.
 */
export function PageShell({
  title,
  lede,
  path,
  locale = "en",
  crumbs = [],
  children,
}: {
  title: string;
  lede: string;
  path: string;
  locale?: Locale;
  crumbs?: Crumb[];
  children: ReactNode;
}) {
  const t = ui(locale);
  const altPath = findRoute(path).alt;

  return (
    <main className="page page--doc">
      <Backdrop variant="doc" />
      <SiteHeader locale={locale} />

      <article className="doc">
        {crumbs.length > 0 && (
          <nav className="crumbs" aria-label={t.breadcrumb}>
            {crumbs.map((crumb) => (
              <Link key={crumb.href} href={crumb.href}>
                {crumb.label}
              </Link>
            ))}
            <span aria-current="page">{title}</span>
          </nav>
        )}

        <header className="doc-head">
          <h1 className="doc-title">{title}</h1>
          <p className="doc-lede">{lede}</p>
        </header>

        <div className="doc-body">{children}</div>
      </article>

      <SiteFooter locale={locale} altPath={altPath} />
    </main>
  );
}

/** A call to action used at the foot of the service pages. */
export function DocCta({
  heading,
  body,
  email,
  whatsapp,
  locale = "en",
}: {
  heading: string;
  body: string;
  email: string;
  whatsapp: string;
  locale?: Locale;
}) {
  const t = ui(locale);
  return (
    <section className="doc-cta">
      <h2>{heading}</h2>
      <p>{body}</p>
      <div className="doc-cta-actions">
        <a href={whatsapp} className="btn btn--orange">
          {t.bookCall}
        </a>
        <a href={`mailto:${email}`} className="btn btn--glass">
          {t.emailUs}
        </a>
      </div>
    </section>
  );
}

/** Cross-links between service pages, where the internal link equity forms. */
export function RelatedLinks({
  items,
  locale = "en",
}: {
  items: { href: string; label: string; note: string }[];
  locale?: Locale;
}) {
  const t = ui(locale);
  return (
    <section className="related">
      <h2>{t.relatedServices}</h2>
      <div className="related-grid">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="related-card">
            <span className="related-label">{item.label}</span>
            <span className="related-note">{item.note}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
