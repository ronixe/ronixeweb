/**
 * Single source of truth for site-wide identity + SEO data.
 *
 * Social profile URLs live in lib/social.ts.
 * Consumed by the Metadata API (app/layout.tsx), JSON-LD structured data,
 * the sitemap, and robots. Keep facts here — do not duplicate them elsewhere.
 */

import { SAME_AS } from "./social";

// Production URL. Override per-environment with NEXT_PUBLIC_SITE_URL
// (e.g. a Vercel preview deployment) without touching code.
//
// This MUST match the host the site actually serves on. The apex currently
// 308-redirects to www, so www is canonical: pointing this at the apex would
// put a redirecting URL in every canonical tag and every sitemap entry, which
// Search Console reports as an error on every page.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ronixe.com"
).replace(/\/$/, "");

export const SITE = {
  name: "Ronixe",
  legalName: "Ronixe",
  url: SITE_URL,
  // SEO metadata only: drives the page title, og:title and twitter:title.
  // The visible hero copy is deliberately left as Ronixe's own profile wording.
  // "in Cameroon" brings this to 54 characters, inside the 50 to 60 range
  // search results display in full, and adds the location as a keyword.
  title: "Ronixe — Information and Technology Company in Cameroon",
  shortTitle: "Ronixe",
  tagline: "We build applications from conception to launch.",
  // Verbatim "Who We Are" copy. Used for JSON-LD, where length is not a
  // constraint, so Ronixe's own wording is preserved in full.
  description:
    "Ronixe is a software development company. We build applications from conception to launch, guiding you from the initial idea through design and development as your single, dependable technical partner.",
  // The <meta name="description"> for the home page. Separate from the above
  // because the full profile copy runs to 201 characters, and search results
  // truncate around 155. This is 125.
  metaDescription:
    "Ronixe is a software development company in Bamenda, Cameroon. We build web and mobile applications from conception to launch.",
  ogDescription:
    "We build applications from conception to launch, guiding you from the initial idea through design and development as your single, dependable technical partner.",
  locale: "en_US",
  founder: "Foweh Princewill Petinjoh",
  foundingYear: "2024",
  email: "info@ronixe.com",
  phone: "+237670843870",
  phoneDisplay: "+237 6 70 84 38 70",
  whatsapp: "https://wa.link/qg26gg",
  address: {
    street: "Up Station",
    locality: "Bamenda",
    region: "North West",
    country: "Cameroon",
    countryCode: "CM",
  },
  keywords: [
    "Ronixe",
    "software development company",
    "web application development",
    "mobile app development",
    "iOS and Android apps",
    "AI automation",
    "UI/UX design",
    "API development and integration",
    "software maintenance and support",
    "custom software development",
    "technical partner",
    "Bamenda",
    "Cameroon software company",
  ],
  // Public profiles for the sameAs graph. Defined in lib/social.ts so the
  // hero icon row and this list cannot drift apart.
  sameAs: SAME_AS,
} as const;

/**
 * Ronixe's service catalogue. Rendered into JSON-LD (hasOfferCatalog) so the
 * full scope of work is indexable even though the visible page is hero-only.
 */
export const SERVICES = [
  {
    name: "Web Application Development",
    description:
      "Custom websites and web platforms built for your business needs.",
  },
  {
    name: "Mobile App Development",
    description:
      "Applications for iOS and Android built for a smooth user experience.",
  },
  {
    name: "AI Automation",
    description:
      "AI chatbots, workflow automation and smart features built into your product.",
  },
  {
    name: "UI/UX Design",
    description:
      "Clean, user-friendly interface design for web and mobile products.",
  },
  {
    name: "API Development & Integration",
    description:
      "Connecting your product to the tools and services it needs to run.",
  },
  {
    name: "Maintenance & Support",
    description: "Ongoing updates, fixes, and improvements after launch.",
  },
] as const;
