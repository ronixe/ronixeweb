import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import { SITE } from "@/lib/site";
import { buildJsonLd } from "@/lib/jsonld";
import { UI, type Locale } from "@/lib/i18n";
import { homeRoute } from "@/lib/routes";
import "@/app/globals.css";

/**
 * Shared root layout, used by both locale route groups.
 *
 * There are two root layouts rather than one so `<html lang>` is correct per
 * language. A single root layout cannot vary it, since it renders once for the
 * whole tree and has no knowledge of the active route.
 */

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0705",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/** Defaults for a locale. Individual pages override via metadataForRoute. */
export function baseMetadata(locale: Locale): Metadata {
  const home = homeRoute(locale);

  return {
    metadataBase: new URL(SITE.url),
    // A plain string, not a template. Every page sets its own title with
    // `absolute` via metadataForRoute, so a template would only risk
    // double-wrapping the brand name.
    title: home.title,
    description: home.summary,
    applicationName: SITE.name,
    keywords: [...SITE.keywords],
    authors: [{ name: SITE.founder }, { name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "technology",
    referrer: "origin-when-cross-origin",
    formatDetection: { email: false, address: false, telephone: false },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: home.title,
      description: SITE.ogDescription,
      url: `${SITE.url}${home.path}`,
      locale: UI[locale].ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: home.title,
      description: SITE.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    // Icons come from the file conventions: app/favicon.ico, app/icon.svg and
    // app/apple-icon.tsx. Next.js emits the <link> tags for them automatically.
    // Set GOOGLE_SITE_VERIFICATION in your environment (Vercel project
    // settings) to add the Search Console verification meta tag.
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
      : {}),
  };
}

export function RootHtml({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const jsonLd = buildJsonLd(locale);

  return (
    <html lang={UI[locale].htmlLang} className={figtree.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          // JSON-LD is data, not executable code, so a native script tag is
          // the correct vehicle. `<` is escaped to prevent XSS injection.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
