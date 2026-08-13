/**
 * Ronixe's public profiles.
 *
 * This list feeds two things, and they are deliberately not the same set:
 *
 *   - The icon row in the hero, which is capped by `showInHero`. Eight 44px
 *     targets already span 352px, and a phone viewport is 375px, so a ninth
 *     wraps to a second row and starts competing with the call to action.
 *   - The `sameAs` array in the JSON-LD, which takes every profile. It is
 *     invisible, has no layout cost, and is the main machine-readable signal
 *     telling Google and AI search engines which Ronixe this is. The name
 *     collides with Ronix Tools, Ronix Wake and a similarly named agency
 *     abroad, so more corroborating profiles is strictly better here.
 *
 * Only add profiles Ronixe actually controls, and only once they have real
 * content. A `sameAs` entry pointing at an empty or someone else's account is
 * worse than no entry at all: it tells Google "this represents me" and then
 * points at nothing.
 */

export interface SocialProfile {
  /** Brand name, used in the accessible label. */
  name: string;
  url: string;
  /** simple-icons export name, or "linkedin" for the locally drawn glyph. */
  icon: string;
  /** Whether the hero icon row links to it. All profiles reach `sameAs`. */
  showInHero?: boolean;
}

const HANDLE = "ronixeinc";

export const SOCIAL_PROFILES: readonly SocialProfile[] = [
  // ---- Shown in the hero --------------------------------------------------

  {
    name: "Facebook",
    url: `https://www.facebook.com/${HANDLE}`,
    icon: "siFacebook",
    showInHero: true,
  },
  {
    name: "Instagram",
    url: `https://www.instagram.com/${HANDLE}`,
    icon: "siInstagram",
    showInHero: true,
  },
  { name: "X", url: `https://x.com/${HANDLE}`, icon: "siX", showInHero: true },
  {
    name: "LinkedIn",
    url: `https://www.linkedin.com/company/${HANDLE}`,
    icon: "linkedin",
    showInHero: true,
  },
  {
    name: "YouTube",
    url: `https://www.youtube.com/@${HANDLE}`,
    icon: "siYoutube",
    showInHero: true,
  },
  {
    name: "TikTok",
    url: `https://www.tiktok.com/@${HANDLE}`,
    icon: "siTiktok",
    showInHero: true,
  },
  // ---- sameAs only --------------------------------------------------------

  {
    name: "Pinterest",
    url: `https://www.pinterest.com/${HANDLE}`,
    icon: "siPinterest",
  },
  {
    name: "Reddit",
    url: `https://www.reddit.com/user/${HANDLE}`,
    icon: "siReddit",
  },

  // Portfolio credibility for the branding service line.

  {
    name: "Behance",
    url: `https://www.behance.net/${HANDLE}`,
    icon: "siBehance",
  },
  { name: "Dribbble", url: `https://dribbble.com/${HANDLE}`, icon: "siDribbble" },

  {
    name: "Threads",
    url: `https://www.threads.net/@${HANDLE}`,
    icon: "siThreads",
  },

  // Publishing platforms. These earn their place once the articles from the
  // keyword plan actually exist; an empty profile is not worth listing.
  {
    name: "Medium",
    url: `https://medium.com/@${HANDLE}`,
    icon: "siMedium",
  },
  {
    name: "Hashnode",
    url: `https://hashnode.com/@${HANDLE}`,
    icon: "siHashnode",
  },
  { name: "Dev.to", url: `https://dev.to/${HANDLE}`, icon: "siDevdotto" },
  {
    name: "Quora",
    url: `https://www.quora.com/profile/${HANDLE}`,
    icon: "siQuora",
  },
  // A Substack profile, not a publication. Publications live on a subdomain
  // (handle.substack.com); profiles live at substack.com/@handle.
  {
    name: "Substack",
    url: `https://substack.com/@${HANDLE}`,
    icon: "siSubstack",
  },
] as const;

/** The subset linked from the hero icon row. */
export const HERO_PROFILES = SOCIAL_PROFILES.filter((p) => p.showInHero);

/** Every profile, for schema.org sameAs. */
export const SAME_AS: readonly string[] = SOCIAL_PROFILES.map((p) => p.url);
