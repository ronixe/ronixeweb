import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The Ronixe mark as a data URI, read from the canonical SVG in /public so the
 * generated icons and the OG card never drift from the file the site ships.
 * Satori (used by ImageResponse) renders SVG only through `<img src>`.
 */
function markDataUri(file: string): string {
  const svg = readFileSync(join(process.cwd(), "public", "brand", file), "utf8");
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

/** Ronixe brand accent. Must match --accent in globals.css and the circle
 *  fill in mark-orange.svg, or the apple-icon shows a seam where the square
 *  background meets the mark's circle. */
export const MARK_ORANGE = "#FF3C00";

export function orangeMark(): string {
  return markDataUri("mark-orange.svg");
}

export function whiteMark(): string {
  return markDataUri("mark-white.svg");
}

/**
 * Official logo assets. Single source of truth for the /brand page, the
 * JSON-LD image array, and the image sitemap entry, so they never drift
 * apart. Two kinds, at two different aspect ratios:
 *
 *   - "icon": full-bleed circular mark, square (1080x1080), for avatars,
 *     favicons and anywhere only the symbol fits.
 *   - "lockup": the icon plus the "Ronixe" wordmark side by side, wide
 *     (767x197), for headers, letterheads and anywhere the full name should
 *     read alongside the mark.
 *
 * `width`/`height` are each file's real intrinsic size, not a shared
 * assumption, because jsonld.ts reports them as an image's actual
 * dimensions.
 */
export interface BrandMark {
  /** Filename under /public/brand. */
  file: string;
  kind: "icon" | "lockup";
  width: number;
  height: number;
  /** Used as alt text, figcaption and the JSON-LD ImageObject caption. */
  caption: string;
}

export const BRAND_MARKS: readonly BrandMark[] = [
  {
    file: "ronixe-logo-white-background.svg",
    kind: "icon",
    width: 1080,
    height: 1080,
    caption: "Ronixe logo mark on a white background",
  },
  {
    file: "ronixe-logo-orange-background.svg",
    kind: "icon",
    width: 1080,
    height: 1080,
    caption: "Ronixe logo mark on an orange background",
  },
  {
    file: "ronixe-logo-black-background.svg",
    kind: "icon",
    width: 1080,
    height: 1080,
    caption: "Ronixe logo mark on a black background",
  },
  {
    file: "ronixe_primary_logo.svg",
    kind: "lockup",
    width: 767,
    height: 197,
    caption: "Ronixe primary logo — orange, for light backgrounds",
  },
  {
    file: "ronixe_secondary_logo.svg",
    kind: "lockup",
    width: 767,
    height: 197,
    caption: "Ronixe secondary logo — white, for dark backgrounds",
  },
  {
    file: "ronixe_null_logo.svg",
    kind: "lockup",
    width: 767,
    height: 197,
    caption: "Ronixe logo — black on white, for single-colour use",
  },
] as const;

export function iconMarks(): BrandMark[] {
  return BRAND_MARKS.filter((mark) => mark.kind === "icon");
}

export function lockupMarks(): BrandMark[] {
  return BRAND_MARKS.filter((mark) => mark.kind === "lockup");
}
