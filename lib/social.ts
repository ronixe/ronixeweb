/**
 * Ronixe's public profiles.
 *
 * This list feeds two things: the icon row in the hero, and the `sameAs`
 * array in the JSON-LD. `sameAs` is the main machine-readable signal telling
 * Google and AI search engines which Ronixe this is, which matters because the
 * name collides with Ronix Tools, Ronix Wake and a similarly named agency
 * abroad. Keep the two in sync by only editing here.
 *
 * Only add profiles Ronixe actually controls. A `sameAs` entry pointing at an
 * account someone else owns is worse than no entry at all.
 */

export interface SocialProfile {
  /** Brand name, used in the accessible label. */
  name: string;
  url: string;
  /** simple-icons export name, or "linkedin" for the locally drawn glyph. */
  icon: string;
}

const HANDLE = "ronixeinc";

export const SOCIAL_PROFILES: readonly SocialProfile[] = [
  {
    name: "Facebook",
    url: `https://www.facebook.com/${HANDLE}`,
    icon: "siFacebook",
  },
  {
    name: "Instagram",
    url: `https://www.instagram.com/${HANDLE}`,
    icon: "siInstagram",
  },
  { name: "X", url: `https://x.com/${HANDLE}`, icon: "siX" },
  {
    name: "LinkedIn",
    url: `https://www.linkedin.com/company/${HANDLE}`,
    icon: "linkedin",
  },
  {
    name: "YouTube",
    url: `https://www.youtube.com/@${HANDLE}`,
    icon: "siYoutube",
  },
  {
    name: "TikTok",
    url: `https://www.tiktok.com/@${HANDLE}`,
    icon: "siTiktok",
  },
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
] as const;

/** URLs only, for schema.org sameAs. */
export const SAME_AS: readonly string[] = SOCIAL_PROFILES.map((p) => p.url);
