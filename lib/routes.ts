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
      "Web and mobile app development, AI automation, UI/UX design, API integration and maintenance for businesses across Cameroon and Africa.",
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
    path: "/services/ai-automation",
    label: "AI automation",
    title: "AI Automation",
    summary:
      "AI agents, workflow automation and AI features built into websites, apps and internal tools, for businesses that want the repetitive part to run itself.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "en",
    alt: "/fr/services/automatisation-ia",
  },
  {
    path: "/services/ui-ux-design",
    label: "UI/UX design",
    title: "UI/UX Design",
    summary:
      "Clean, user-friendly interface design for web and mobile products, built to be usable on the devices and connections Ronixe's clients actually have.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "en",
    alt: "/fr/services/conception-ui-ux",
  },
  {
    path: "/services/api-integration",
    label: "API integration",
    title: "API Development & Integration",
    summary:
      "Connecting your product to the payment providers, mobile money networks and tools it needs to run, plus APIs built for your own product.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "en",
    alt: "/fr/services/developpement-integration-api",
  },
  {
    path: "/services/maintenance-support",
    label: "Maintenance & support",
    title: "Maintenance & Support",
    summary:
      "Ongoing updates, fixes and improvements after launch, so a website or app keeps working rather than decaying once it ships.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "en",
    alt: "/fr/services/maintenance-assistance",
  },

  {
    path: "/about",
    label: "About",
    title: "About Ronixe",
    summary:
      "Who Ronixe is, how the studio works, and the leadership behind it.",
    group: "primary",
    priority: 0.7,
    changeFrequency: "monthly",
    inFooter: true,
    locale: "en",
    alt: "/fr/a-propos",
  },
  {
    path: "/contact",
    label: "Contact",
    title: "Contact Ronixe",
    summary:
      "Send Ronixe a message about a project, or reach the studio directly by email, phone or WhatsApp.",
    group: "primary",
    priority: 0.7,
    changeFrequency: "yearly",
    inFooter: true,
    locale: "en",
    alt: "/fr/contact",
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
      "Développement web et mobile, automatisation IA, conception UI/UX, intégration d'API et maintenance pour les entreprises du Cameroun et d'Afrique.",
    group: "services",
    priority: 0.9,
    changeFrequency: "monthly",
    inFooter: true,
    locale: "fr",
    alt: "/services",
  },
  {
    path: "/fr/a-propos",
    label: "À propos",
    title: "À propos de Ronixe",
    summary:
      "Qui est Ronixe, comment le studio travaille, et l'équipe qui le dirige.",
    group: "primary",
    priority: 0.7,
    changeFrequency: "monthly",
    inFooter: true,
    locale: "fr",
    alt: "/about",
  },
  {
    path: "/fr/contact",
    label: "Contact",
    title: "Contacter Ronixe",
    summary:
      "Envoyez un message à Ronixe au sujet d'un projet, ou contactez le studio directement par e-mail, téléphone ou WhatsApp.",
    group: "primary",
    priority: 0.7,
    changeFrequency: "yearly",
    inFooter: true,
    locale: "fr",
    alt: "/contact",
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
    path: "/fr/services/automatisation-ia",
    label: "Automatisation IA",
    title: "Automatisation IA",
    summary:
      "Agents IA, automatisation des processus et fonctionnalités IA intégrées aux sites, applications et outils internes, pour que la partie répétitive tourne seule.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "fr",
    alt: "/services/ai-automation",
  },
  {
    path: "/fr/services/conception-ui-ux",
    label: "Conception UI/UX",
    title: "Conception UI/UX",
    summary:
      "Design d'interface clair et ergonomique pour vos produits web et mobiles, pensé pour les appareils et les connexions que vos clients ont réellement.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "fr",
    alt: "/services/ui-ux-design",
  },
  {
    path: "/fr/services/developpement-integration-api",
    label: "Intégration API",
    title: "Développement et intégration d'API",
    summary:
      "Connexion de votre produit aux moyens de paiement, au mobile money et aux outils dont il a besoin, ainsi que la construction d'API pour votre propre produit.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "fr",
    alt: "/services/api-integration",
  },
  {
    path: "/fr/services/maintenance-assistance",
    label: "Maintenance et assistance",
    title: "Maintenance et assistance",
    summary:
      "Mises à jour, corrections et améliorations après la mise en ligne, pour qu'un site ou une application continue de fonctionner au lieu de se dégrader.",
    group: "services",
    priority: 0.8,
    changeFrequency: "monthly",
    locale: "fr",
    alt: "/services/maintenance-support",
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
