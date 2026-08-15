import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

/**
 * sitemap.xml, generated from the route manifest. This is the file to submit
 * in Google Search Console and Bing Webmaster Tools.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: route.path === "/" ? SITE.url : `${SITE.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.images ? { images: route.images } : {}),
  }));
}
