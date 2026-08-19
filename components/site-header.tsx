import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { ui, type Locale } from "@/lib/i18n";

/**
 * The sticky header, shared by every page in both locales.
 *
 * `servicesHref` exists because each home page scrolls to its own services
 * cards, while inner pages navigate to the services hub.
 */
export function SiteHeader({
  locale = "en",
  servicesHref,
}: {
  locale?: Locale;
  servicesHref?: string;
}) {
  const t = ui(locale);
  const homeHref = locale === "fr" ? "/fr" : "/";
  const services =
    servicesHref ?? (locale === "fr" ? "/fr/services" : "/services");
  const about = locale === "fr" ? "/fr/a-propos" : "/about";
  const contact = locale === "fr" ? "/fr/contact" : "/contact";

  return (
    <nav className="nav" aria-label={t.primaryNav}>
      <div className="nav-inner">
        <Link href={homeHref} className="nav-logo" aria-label={`${SITE.name} home`}>
          <Image
            src="/brand/ronixe_secondary_logo.svg"
            alt={`${SITE.name} logo`}
            width={767}
            height={197}
            priority
          />
        </Link>

        <div className="nav-pill">
          <Link href={services} className="nav-link">
            {t.services}
          </Link>
          <Link href={about} className="nav-link">
            {t.about}
          </Link>
          <Link href={contact} className="nav-link">
            {t.contact}
          </Link>
        </div>

        <div className="nav-right">
          <a href={`mailto:${SITE.email}`} className="btn-ghost">
            {t.emailUs}
          </a>
          <a href={SITE.whatsapp} className="btn btn--orange">
            {t.bookCall}
          </a>
        </div>
      </div>
    </nav>
  );
}
