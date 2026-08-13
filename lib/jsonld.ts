import { SITE, SERVICES } from "@/lib/site";

/**
 * Builds a schema.org @graph describing Ronixe for search engines and AI
 * crawlers. This is where the "everything behind the fold" content lives:
 * the visible page is hero-only, but the full organisation + service catalogue
 * is expressed here as structured data so the domain indexes richly.
 *
 * Validate with https://validator.schema.org and Google's Rich Results Test.
 */
export function buildJsonLd(locale: "en" | "fr" = "en") {
  const orgId = `${SITE.url}/#organization`;
  const siteId = `${SITE.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": orgId,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        description: SITE.description,
        slogan: SITE.tagline,
        email: SITE.email,
        telephone: SITE.phone,
        foundingDate: SITE.foundingYear,
        logo: {
          "@type": "ImageObject",
          url: `${SITE.url}/brand/mark-orange.svg`,
        },
        image: `${SITE.url}/opengraph-image`,
        founder: {
          "@type": "Person",
          name: SITE.founder,
          jobTitle: "Founder & CEO",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.locality,
          addressRegion: SITE.address.region,
          addressCountry: SITE.address.countryCode,
        },
        // ProfessionalService inherits from LocalBusiness, which Google
        // expects to carry a price indication. Without it the entry is
        // reported as incomplete.
        priceRange: "$$",
        areaServed: [
          { "@type": "Country", name: "Cameroon" },
          { "@type": "Country", name: "Nigeria" },
          { "@type": "Country", name: "Ghana" },
          { "@type": "Country", name: "Côte d'Ivoire" },
          { "@type": "Country", name: "Gabon" },
        ],
        knowsAbout: [
          "Web development",
          "Mobile app development",
          "E-commerce",
          "UI/UX design",
          "API integration",
          "Software maintenance",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: SITE.email,
          telephone: SITE.phone,
          availableLanguage: ["English", "French"],
        },
        sameAs: SITE.sameAs,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software Development Services",
          itemListElement: SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
              provider: { "@id": orgId },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        // Follows the page it is emitted on. Declaring "en" on the French
        // pages would contradict their html lang and hreflang.
        inLanguage: locale,
        publisher: { "@id": orgId },
      },
    ],
  };
}
