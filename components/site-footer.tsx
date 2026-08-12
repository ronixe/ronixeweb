import Link from "next/link";
import { SITE } from "@/lib/site";
import { footerRoutes } from "@/lib/routes";
import { ui, type Locale } from "@/lib/i18n";

/**
 * The footer, and the only crawl path from a home page into the rest of the
 * site. Links come from the route manifest, so a page registered there with
 * `inFooter` appears here automatically.
 *
 * Deliberately short. The services hub and the sitemap link onward, which
 * keeps every page two clicks from the root without listing everything here
 * and wrecking the home page's one-screen design.
 *
 * `altPath` is the same page in the other language, and renders the language
 * switch. Pages with no counterpart simply omit it.
 */
export function SiteFooter({
  locale = "en",
  altPath,
}: {
  locale?: Locale;
  altPath?: string;
}) {
  const t = ui(locale);

  return (
    <footer className="footer">
      <nav className="footer-links" aria-label={t.footerNav}>
        {footerRoutes(locale).map((route) => (
          <Link key={route.path} href={route.path}>
            {route.label}
          </Link>
        ))}
        {altPath && (
          <Link
            href={altPath}
            hrefLang={locale === "en" ? "fr" : "en"}
            className="footer-lang"
            aria-label={t.switchLabel}
          >
            {t.switchTo}
          </Link>
        )}
      </nav>

      <div className="footer-base">
        <p>
          © {new Date().getFullYear()} {SITE.name}. {t.rightsReserved}
        </p>
        <p>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> ·{" "}
          {SITE.address.locality}, {SITE.address.country}
        </p>
      </div>
    </footer>
  );
}
