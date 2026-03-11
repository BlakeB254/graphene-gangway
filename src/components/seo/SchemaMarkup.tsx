import { SITE_CONFIG } from "@/lib/constants";

/**
 * Structured data (JSON-LD) for search engine rich results.
 * Content is fully derived from our own SITE_CONFIG constants —
 * no user-supplied input is interpolated, so XSS is not a concern.
 */
export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_CONFIG.url,
    name: "Graphene Gangway",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.contactEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chicago",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand Kit",
            description: "Professional brand identity package",
          },
          price: "99.00",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Biz Starter Kit",
            description: "Business plan and brand identity package",
          },
          price: "199.00",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom website design and development",
          },
          priceRange: "$1,500 - $2,500",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand Automations",
            description: "Social media content creation and distribution",
          },
          priceRange: "$1,200 - $5,000/mo",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Personal AI Knowledge Base",
            description: "Custom AI trained on your business data",
          },
          priceRange: "$1,500 - $5,000",
          priceCurrency: "USD",
        },
      ],
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
