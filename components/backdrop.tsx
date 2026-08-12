/**
 * The ambient background layers: warm vertical ramp, scan lines and grain.
 *
 * The `doc` variant shortens the ramp. The full-height version is tuned to sit
 * behind the home page hero, and looks wrong behind a page of body text.
 */
export function Backdrop({ variant = "hero" }: { variant?: "hero" | "doc" }) {
  const suffix = variant === "doc" ? " bg--doc" : "";
  return (
    <>
      <div className={`bg${suffix}`} aria-hidden="true" />
      <div className={`bg-lines${suffix}`} aria-hidden="true" />
      <div className="bg-grain" aria-hidden="true" />
    </>
  );
}
