import * as simpleIcons from "simple-icons";
import { SOCIAL_PROFILES } from "@/lib/social";
import { SITE } from "@/lib/site";

/**
 * Brand icon paths.
 *
 * Seven come from simple-icons, resolved at build time in a server component,
 * so the path data is baked into the prerendered HTML and no JavaScript or
 * third-party request reaches the browser. That matters twice over here: the
 * page is a static prerender tuned for LCP, and the cookie policy states that
 * nothing is loaded from third-party servers.
 *
 * LinkedIn is drawn locally because Simple Icons removed it over the brand's
 * trademark policy, so there is no official path to import.
 */
const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z";

function iconPath(icon: string): string | null {
  if (icon === "linkedin") return LINKEDIN_PATH;
  const entry = (simpleIcons as Record<string, { path?: string }>)[icon];
  return entry?.path ?? null;
}

/**
 * The social row under the hero actions.
 *
 * Each link carries rel="me", which is the long-standing convention for
 * asserting that a profile belongs to the same entity as the page. It costs
 * nothing and helps disambiguate the brand.
 */
export function SocialLinks({ label }: { label: string }) {
  return (
    <ul className="social" aria-label={label}>
      {SOCIAL_PROFILES.map((profile) => {
        const path = iconPath(profile.icon);
        if (!path) return null;
        return (
          <li key={profile.name}>
            <a
              href={profile.url}
              className="social-link"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label={`${SITE.name} on ${profile.name}`}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d={path} fill="currentColor" />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
