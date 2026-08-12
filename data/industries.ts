import type { Industry } from "@/types/industrial";

export const industries: Industry[] = [
  {
    id: "logistics",
    name: "Logistics & 3PL",
    description:
      "Efficient facilities designed for high-throughput receiving, storage, picking, and shipping.",
    icon: "Truck",
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    description:
      "High-volume fulfillment centers engineered for automation, rapid order processing, and scalable operations.",
    icon: "Boxes",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description:
      "Facilities designed around production lines, equipment loads, inventory flow, and workforce needs.",
    icon: "Factory",
  },
  {
    id: "cold-chain",
    name: "Food & Cold Chain",
    description:
      "Temperature-controlled facilities built for food storage, processing, and distribution.",
    icon: "Snowflake",
  },
  {
    id: "retail",
    name: "Retail Distribution",
    description:
      "Regional and national distribution facilities optimized for store replenishment and inventory management.",
    icon: "Building2",
  },
  {
    id: "industrial-re",
    name: "Industrial Real Estate",
    description:
      "Speculative and build-to-suit industrial developments designed for long-term asset performance.",
    icon: "TrendingUp",
  },
];
