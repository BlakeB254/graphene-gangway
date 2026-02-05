import { SITE_CONFIG } from "@/lib/constants";

/**
 * Structured data (JSON-LD) for search engine rich results.
 * Content is fully derived from our own SITE_CONFIG constants —
 * no user-supplied input is interpolated, so XSS is not a concern.
 */
export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    name: "Graphene Gangway",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "North Lawndale",
      addressRegion: "IL",
      addressCountry: "US",
      name: "North Lawndale, Chicago, IL",
    },
    areaServed: {
      "@type": "City",
      name: "Chicago",
      containedInPlace: {
        "@type": "State",
        name: "Illinois",
      },
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
