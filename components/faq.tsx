import { SITE } from "@/lib/site";
import { ui, type Locale } from "@/lib/i18n";

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Renders an FAQ block and the matching FAQPage structured data.
 *
 * Questions are real h2 headings with the answer in the first sentence
 * underneath, because retrieval systems extract passages rather than whole
 * pages. The JSON-LD carries the same text so the markup and the structured
 * data can never disagree.
 */
export function Faq({
  heading,
  items,
  locale = "en",
}: {
  heading?: string;
  items: FaqItem[];
  locale?: Locale;
}) {
  const title = heading ?? ui(locale).commonQuestions;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section>
      <h2>{title}</h2>
      {items.map((item) => (
        <div key={item.question}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </section>
  );
}

/** Service structured data, so the page describes a named offering. */
export function ServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE.url}${path}`,
    serviceType: name,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: [
      { "@type": "Country", name: "Cameroon" },
      { "@type": "Country", name: "Nigeria" },
      { "@type": "Country", name: "Ghana" },
      { "@type": "Country", name: "Côte d'Ivoire" },
      { "@type": "Country", name: "Gabon" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
