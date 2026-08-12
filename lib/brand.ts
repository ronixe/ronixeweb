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
