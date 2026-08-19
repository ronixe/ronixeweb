import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Keep trailing slashes off so canonical URLs stay clean for SEO.
  trailingSlash: false,
  // These service pages were retired when the services list was brought in
  // line with the company profile (mobile money, branding and digital
  // marketing dropped in favour of UI/UX design, API integration and
  // maintenance & support; e-commerce later dropped in favour of AI
  // automation). Redirect rather than 404 so indexed URLs and any existing
  // backlinks still land somewhere useful.
  async redirects() {
    return [
      { source: "/services/mobile-money-integration", destination: "/services", permanent: true },
      { source: "/services/branding", destination: "/services", permanent: true },
      { source: "/services/digital-marketing", destination: "/services", permanent: true },
      { source: "/services/ecommerce", destination: "/services", permanent: true },
      { source: "/fr/services/paiement-mobile-money", destination: "/fr/services", permanent: true },
      { source: "/fr/services/identite-visuelle", destination: "/fr/services", permanent: true },
      { source: "/fr/services/marketing-digital", destination: "/fr/services", permanent: true },
      { source: "/fr/services/site-e-commerce", destination: "/fr/services", permanent: true },
    ];
  },
};

export default nextConfig;
