export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": "https://vertexindustrial.com/#organization",
        name: "Vertex Industrial Build",
        url: "https://vertexindustrial.com",
        email: "projects@vertexindustrial.com",
        telephone: "+1-469-555-0188",
        description:
          "Design-build warehouse construction and industrial development services across the United States.",
        slogan: "Built for Logistics. Engineered for Growth.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dallas",
          addressRegion: "TX",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        sameAs: ["https://www.linkedin.com/company/vertex-industrial-build"],
      },
      {
        "@type": "Service",
        name: "Warehouse Construction",
        provider: { "@id": "https://vertexindustrial.com/#organization" },
        areaServed: "United States",
        description:
          "Ground-up construction for logistics facilities, distribution centers, and industrial warehouses.",
      },
      {
        "@type": "Service",
        name: "Design-Build",
        provider: { "@id": "https://vertexindustrial.com/#organization" },
        areaServed: "United States",
        description:
          "Integrated industrial design and construction delivery for warehouse and logistics facilities.",
      },
      {
        "@type": "Service",
        name: "Industrial Development",
        provider: { "@id": "https://vertexindustrial.com/#organization" },
        areaServed: "United States",
        description:
          "Industrial development planning and delivery for warehouse, manufacturing, and flex facilities.",
      },
      {
        "@type": "Service",
        name: "Build-to-Suit Construction",
        provider: { "@id": "https://vertexindustrial.com/#organization" },
        areaServed: "United States",
        description:
          "Purpose-built industrial facilities designed around specific operational requirements.",
      },
      {
        "@type": "Service",
        name: "Site Planning",
        provider: { "@id": "https://vertexindustrial.com/#organization" },
        areaServed: "United States",
        description:
          "Industrial site feasibility, truck access, utilities, and development strategy.",
      },
      {
        "@type": "Service",
        name: "Warehouse Renovation",
        provider: { "@id": "https://vertexindustrial.com/#organization" },
        areaServed: "United States",
        description:
          "Strategic warehouse expansions and renovations that increase capacity with minimal disruption.",
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
