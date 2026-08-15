import Image from "next/image";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { BRAND_MARKS } from "@/lib/brand";
import { metadataForRoute } from "@/lib/routes";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = metadataForRoute("/brand");

export default function BrandPage() {
  return (
    <PageShell
      path="/brand"
      title="Brand Assets"
      lede={`Official ${SITE.name} logo marks, for press, partners and directory listings.`}
      crumbs={[{ label: "Home", href: "/" }]}
    >
      <section>
        <h2>Logo marks</h2>
        <p>
          The {SITE.name} logo mark comes in three fixed variants, one for
          each background it is likely to sit on. Each file is a square SVG
          at 1080 × 1080, so it scales cleanly for a favicon, a social profile
          photo, or a printed page alike.
        </p>
        <div className="brand-grid">
          {BRAND_MARKS.map((mark) => (
            <figure key={mark.file} className="brand-figure">
              <Image
                src={`/brand/${mark.file}`}
                alt={mark.caption}
                width={240}
                height={240}
              />
              <figcaption>
                <span>{mark.caption}</span>
                <a href={`/brand/${mark.file}`} download>
                  Download SVG
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section>
        <h2>Usage guidelines</h2>
        <ul>
          <li>Use the mark as supplied. Don&apos;t recolour, rotate or stretch it.</li>
          <li>
            Keep clear space around the mark of at least a quarter of its
            width, so it doesn&apos;t crowd against text or other artwork.
          </li>
          <li>
            Use the white-background or black-background version on light or
            dark layouts respectively. Reserve the orange-background version
            for places a solid accent block is appropriate, such as a social
            profile photo.
          </li>
        </ul>
      </section>

      <section>
        <h2>Media contact</h2>
        <p>
          For press enquiries, interviews, or anything else brand-related,
          contact <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.{" "}
          {SITE.name} was founded in {SITE.foundingYear} by {SITE.founder} and
          is based at {SITE.address.street}, {SITE.address.locality},{" "}
          {SITE.address.country}.
        </p>
      </section>
    </PageShell>
  );
}
