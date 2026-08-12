export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "RealEstateAgent"],
        "@id": "https://flexbusinessparks.com/#organization",
        name: "Flex Business Parks",
        alternateName: "Flex Parks USA",
        url: "https://flexbusinessparks.com",
        telephone: "+1-972-345-6500",
        description:
          "Flex Business Parks specializes exclusively in small bay industrial and flex space properties across the United States — brokerage, investment sales, site selection, leasing, and development advisory.",
        slogan: "Small Bay Industrial. Flex Space Nationwide.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Fort Worth",
          addressRegion: "TX",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        sameAs: [
          "https://www.linkedin.com/company/flex-parks-usa",
          "https://www.facebook.com/333633919835461",
          "https://www.instagram.com/flexparksusa/",
          "https://www.youtube.com/@flexparksusa",
          "https://www.x.com/tx_investments",
        ],
      },
      {
        "@type": "Service",
        name: "Investment Sales",
        provider: { "@id": "https://flexbusinessparks.com/#organization" },
        areaServed: "United States",
        description:
          "Acquisition and disposition of small-bay flex industrial properties nationwide.",
      },
      {
        "@type": "Service",
        name: "Site Selection & Feasibility",
        provider: { "@id": "https://flexbusinessparks.com/#organization" },
        areaServed: "United States",
        description:
          "Data-driven small bay industrial site analysis using World Engine and Small Bay Feasibility.",
      },
      {
        "@type": "Service",
        name: "Leasing",
        provider: { "@id": "https://flexbusinessparks.com/#organization" },
        areaServed: "United States",
        description:
          "Leasing services for multi-tenant small-bay flex industrial properties.",
      },
      {
        "@type": "Service",
        name: "Development Advisory",
        provider: { "@id": "https://flexbusinessparks.com/#organization" },
        areaServed: "United States",
        description:
          "Advisory for flex park development, condo vs lease strategy, and market positioning.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
