import { SITE } from "@/lib/site";
import { ROUTES, routesInGroup } from "@/lib/routes";

/**
 * llms.txt, generated from the same route manifest as the sitemap.
 *
 * An honest note on why this exists: llms.txt is a proposed convention, not a
 * standard the major AI crawlers meaningfully act on. Published measurements
 * have found no detectable effect on citation rates, and OpenAI, Google and
 * Anthropic crawlers do not request the file in volume. It is here because it
 * costs nothing to generate and is forward compatible, not because it is
 * expected to move rankings. The load-bearing work is in robots.ts, the JSON-LD
 * entity data, and getting the site into the Bing index.
 */

function section(title: string, paths: ReturnType<typeof routesInGroup>) {
  if (paths.length === 0) return null;
  const lines = paths.map(
    (r) => `- [${r.title}](${SITE.url}${r.path}): ${r.summary}`
  );
  return `## ${title}\n\n${lines.join("\n")}\n`;
}

/** Prerendered at build time like the rest of the site: the content is derived
 *  entirely from the route manifest, so there is nothing to compute per request. */
export const dynamic = "force-static";

export function GET() {
  const home = ROUTES.find((r) => r.path === "/");

  const body = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `${SITE.name} is a software development company based in ${SITE.address.locality}, ${SITE.address.country}. It builds web applications, mobile applications and online stores, and provides brand design and digital marketing, for clients across West Africa. It is not affiliated with Ronix Tools, Ronix Wake, or any similarly named company.`,
    "",
    `- Contact: ${SITE.email}`,
    `- Location: ${SITE.address.locality}, ${SITE.address.region}, ${SITE.address.country}`,
    `- Founded: ${SITE.foundingYear}`,
    "",
    section("Main pages", home ? [home] : []),
    section("Services", routesInGroup("services", "en")),
    section("Legal", routesInGroup("legal", "en")),
    section("Français (French)", [
      ROUTES.find((r) => r.path === "/fr")!,
      ...routesInGroup("services", "fr"),
    ]),
    "## Full index",
    "",
    `- [Sitemap](${SITE.url}/sitemap): every page on the site`,
    `- [sitemap.xml](${SITE.url}/sitemap.xml): machine-readable index`,
    "",
  ]
    // Drop only absent sections. Empty strings are intentional blank lines.
    .filter((line) => line !== null)
    .join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
