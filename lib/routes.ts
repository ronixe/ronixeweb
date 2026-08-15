import type { Metadata } from "next";
import { SITE } from "./site";
import { BRAND_MARKS } from "./brand";
import { DEFAULT_LOCALE, UI, type Locale } from "./i18n";

/**
 * The route manifest: the single source of truth for every indexable page.
 *
 * Four things read from this file, so a page added here appears everywhere it
 * needs to without anyone remembering to update a second list:
 *
 *   1. app/sitemap.ts        -> sitemap.xml, the file submitted to Search Console
 *   2. app/llms.txt/route.ts -> llms.txt, for AI crawlers
 *   3. components/site-footer -> the footer link row
 *   4. app/(en)/sitemap/page  -> the HTML sitemap
 *
 * English is served at the root and French under /fr. English URLs are left
 * unprefixed deliberately: moving them under /en would change every existing
 * URL for no gain.
 *
 * `alt` pairs a page with its counterpart in the other language. hreflang is
 * generated from it, and hreflang must be reciprocal, so both sides of a pair
 * have to point at each other or search engines ignore the annotation.
 */

export type RouteGroup = "primary" | "services" | "legal" | "meta";

export interface SiteRoute {
  path: string;
  label: string;
  title: string;
  summary: string;
  group: RouteGroup;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
  inFooter?: boolean;
  locale: Locale;
  /** The same page in the other language, if it exists. */
  alt?: string;
  /** Absolute image URLs to list for this page in sitemap.xml's <image:image> extension. */
  images?: string[];
}

export const ROUTES: readonly SiteRoute[] = [
  // ---- English ------------------------------------------------------------

  {
    path: "/",
    label: "Home",
    title: SITE.title,
    // The short form. Search results truncate the full profile copy.
    summary: SITE.metaDescription,
    group: "primary",
    priority: 1,
    changeFrequency: "weekly",
    locale: "en",
    alt: "/fr",
  },
  {
    path: "/services",
    label: "Services",
    title: "Services",
    summary:
      "Software development, brand design and digital marketing for businesses across Cameroon, Nigeria, Ghana and the wider West African region.",
    group: "services",
    priority: 0.9,
    changeFrequency: "monthly",
    inFooter: true,
    locale: "en",
    alt: "/fr/services",
  },
  {
    path: "/services/web-development",
    label: "Web development",
    title: "Web Development in Cameroon",
    summary:
      "Ronixe builds custom websites and web applications for businesses in Bamenda, Douala, Yaoundé and across Cameroon, from first sketch through to launch and support.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "en",
    alt: "/fr/services/creation-site-internet",
  },
  {
    path: "/services/mobile-apps",
    label: "Mobile apps",
    title: "Mobile App Development in Cameroon",
    summary:
      "Ronixe designs and builds iOS and Android applications for West African businesses, including offline-tolerant apps built for intermittent connectivity.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "en",
    alt: "/fr/services/application-mobile",
  },
  {
    path: "/services/ecommerce",
    label: "E-commerce",
    title: "E-Commerce Website Development",
    summary:
      "Online stores with product management, order dashboards and mobile money payments, built for customers who buy from a phone on a slow connection.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "en",
    alt: "/fr/services/site-e-commerce",
  },
  {
    path: "/services/mobile-money-integration",
    label: "Mobile money",
    title: "MTN MoMo and Orange Money Integration",
    summary:
      "Ronixe integrates MTN Mobile Money and Orange Money into websites and applications, so customers pay with the account they already use.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "en",
    alt: "/fr/services/paiement-mobile-money",
  },
  {
    path: "/services/branding",
    label: "Branding",
    title: "Brand and Identity Design",
    summary:
      "Logo design, visual identity and brand guidelines for businesses that need to look established before they are.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "en",
    alt: "/fr/services/identite-visuelle",
  },
  {
    path: "/services/digital-marketing",
    label: "Digital marketing",
    title: "Digital Marketing and Community Management",
    summary:
      "Search visibility, community management and paid campaigns for West African businesses, measured against enquiries rather than impressions.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "en",
    alt: "/fr/services/marketing-digital",
  },

  {
    path: "/legal/privacy",
    label: "Privacy",
    title: "Privacy Policy",
    summary:
      "What personal data Ronixe collects, why, how long it is kept, and the rights you have over it.",
    group: "legal",
    priority: 0.3,
    changeFrequency: "yearly",
    inFooter: true,
    locale: "en",
  },
  {
    path: "/legal/terms",
    label: "Terms",
    title: "Terms and Conditions",
    summary:
      "The terms governing use of the Ronixe website and the basis on which Ronixe provides development, design and marketing services.",
    group: "legal",
    priority: 0.3,
    changeFrequency: "yearly",
    inFooter: true,
    locale: "en",
  },
  {
    path: "/legal/cookies",
    label: "Cookies",
    title: "Cookie Policy",
    summary:
      "Ronixe sets no cookies and runs no third-party tracking on this website. This page explains what that means and what would change it.",
    group: "legal",
    priority: 0.3,
    changeFrequency: "yearly",
    inFooter: true,
    locale: "en",
  },
  {
    path: "/brand",
    label: "Brand assets",
    title: "Brand Assets",
    summary:
      "Official Ronixe logo marks for press, partners and directory listings, with usage guidelines.",
    group: "meta",
    priority: 0.3,
    changeFrequency: "yearly",
    inFooter: true,
    locale: "en",
    images: BRAND_MARKS.map((mark) => `${SITE.url}/brand/${mark.file}`),
  },
  {
    path: "/sitemap",
    label: "Sitemap",
    title: "Sitemap",
    summary: "Every page on the Ronixe website, in one list.",
    group: "meta",
    priority: 0.2,
    changeFrequency: "monthly",
    inFooter: true,
    locale: "en",
  },

  // ---- Français -----------------------------------------------------------

  {
    path: "/fr",
    label: "Accueil",
    title: "Ronixe — Entreprise de technologie et d'information au Cameroun",
    summary:
      "Ronixe est une entreprise de développement logiciel à Bamenda, au Cameroun. Nous créons sites internet et applications mobiles, de l'idée au lancement.",
    group: "primary",
    priority: 0.9,
    changeFrequency: "weekly",
    locale: "fr",
    alt: "/",
  },
  {
    path: "/fr/services",
    label: "Services",
    title: "Nos services",
    summary:
      "Développement web et mobile, création de site e-commerce, identité visuelle et marketing digital pour les entreprises du Cameroun, de Côte d'Ivoire, du Gabon et d'Afrique de l'Ouest.",
    group: "services",
    priority: 0.9,
    changeFrequency: "monthly",
    inFooter: true,
    locale: "fr",
    alt: "/services",
  },
  {
    path: "/fr/services/creation-site-internet",
    label: "Site internet",
    title: "Création de site internet au Cameroun",
    summary:
      "Ronixe est une agence web à Bamenda. Nous créons des sites internet et des applications web sur mesure pour les entreprises à Douala, Yaoundé et partout au Cameroun, ainsi que la refonte de sites existants.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "fr",
    alt: "/services/web-development",
  },
  {
    path: "/fr/services/application-mobile",
    label: "Application mobile",
    title: "Développement d'application mobile",
    summary:
      "Conception et développement d'applications iOS et Android pour les entreprises d'Afrique de l'Ouest, pensées pour fonctionner malgré une connexion instable.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "fr",
    alt: "/services/mobile-apps",
  },
  {
    path: "/fr/services/site-e-commerce",
    label: "E-commerce",
    title: "Création de site e-commerce",
    summary:
      "Boutiques en ligne avec gestion des produits, tableau de bord des commandes et paiement par mobile money, conçues pour des clients qui achètent depuis leur téléphone.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "fr",
    alt: "/services/ecommerce",
  },
  {
    path: "/fr/services/paiement-mobile-money",
    label: "Mobile money",
    title: "Intégration Mobile Money : MTN MoMo et Orange Money",
    summary:
      "Ronixe intègre MTN Mobile Money et Orange Money à votre site ou à votre application, pour que vos clients paient avec le compte qu'ils utilisent déjà.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "fr",
    alt: "/services/mobile-money-integration",
  },
  {
    path: "/fr/services/identite-visuelle",
    label: "Identité visuelle",
    title: "Identité visuelle et création de logo",
    summary:
      "Création de logo, identité visuelle et charte graphique pour les entreprises qui doivent inspirer confiance avant d'être connues.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "fr",
    alt: "/services/branding",
  },
  {
    path: "/fr/services/marketing-digital",
    label: "Marketing digital",
    title: "Marketing digital et community management",
    summary:
      "Référencement naturel, community management et campagnes publicitaires pour les entreprises d'Afrique de l'Ouest, mesurés en demandes reçues plutôt qu'en impressions.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "fr",
    alt: "/services/digital-marketing",
  },
] as const;

export function routesForLocale(locale: Locale): SiteRoute[] {
  return ROUTES.filter((r) => r.locale === locale);
}

export function routesInGroup(group: RouteGroup, locale: Locale = "en") {
  return ROUTES.filter(
    (r) => r.group === group && r.locale === locale && !isHome(r)
  );
}

function isHome(route: SiteRoute) {
  return route.path === "/" || route.path === "/fr";
}

export function homeRoute(locale: Locale): SiteRoute {
  return findRoute(locale === "fr" ? "/fr" : "/");
}

/**
 * Footer links for a locale. French pages fall back to the English legal
 * pages, which are the operative versions.
 */
export function footerRoutes(locale: Locale): SiteRoute[] {
  const own = ROUTES.filter((r) => r.inFooter && r.locale === locale);
  if (locale === "en") return own;
  const englishFallback = ROUTES.filter(
    (r) => r.inFooter && r.locale === "en" && r.group !== "services"
  );
  return [...own, ...englishFallback];
}

export function findRoute(path: string): SiteRoute {
  const route = ROUTES.find((r) => r.path === path);
  if (!route) {
    // Fail loudly at build time rather than shipping a page with no metadata.
    throw new Error(
      `No route registered for "${path}". Add it to ROUTES in lib/routes.ts.`
    );
  }
  return route;
}

/**
 * Builds a page's Metadata from its manifest entry, so the title, description,
 * canonical URL and hreflang can never drift apart from the sitemap.
 */
export function metadataForRoute(path: string): Metadata {
  const route = findRoute(path);
  // Both home pages already carry the brand in their title, so neither takes
  // the "| Ronixe" suffix.
  const isHomePage = route.path === "/" || route.path === "/fr";
  const fullTitle = isHomePage ? route.title : `${route.title} | ${SITE.name}`;

  // hreflang. Both sides of a pair must list the same set, including
  // themselves, or the annotation is discarded as non-reciprocal.
  let languages: Record<string, string> | undefined;
  if (route.alt) {
    const other = findRoute(route.alt);
    const en = route.locale === "en" ? route : other;
    const fr = route.locale === "fr" ? route : other;
    languages = {
      en: en.path,
      fr: fr.path,
      // The English page is what a search engine should serve when no
      // language matches the user.
      "x-default": en.path,
    };
  }

  return {
    // `absolute` bypasses the title template in the root layout. Without it a
    // page title would be wrapped a second time and read "... | Ronixe — Ronixe".
    title: { absolute: fullTitle },
    description: route.summary,
    alternates: { canonical: route.path, languages },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: fullTitle,
      description: route.summary,
      url: `${SITE.url}${route.path}`,
      locale: UI[route.locale].ogLocale,
      // Declared explicitly. Defining an `openGraph` object on a page
      // suppresses the automatic merge of app/opengraph-image.tsx, which
      // silently leaves every page without a social card image.
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${SITE.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: route.summary,
      images: ["/opengraph-image"],
    },
  };
}

export { DEFAULT_LOCALE };
