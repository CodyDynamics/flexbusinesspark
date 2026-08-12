import type { Capability } from "@/types/industrial";

export const capabilities: Capability[] = [
  {
    id: "design-build",
    title: "Design-Build",
    description:
      "Integrated design and construction delivery that improves communication, cost visibility, and execution speed.",
    icon: "Ruler",
  },
  {
    id: "warehouse-construction",
    title: "Warehouse Construction",
    description:
      "Ground-up construction for logistics facilities, distribution centers, storage warehouses, and fulfillment operations.",
    icon: "Warehouse",
  },
  {
    id: "build-to-suit",
    title: "Build-to-Suit Development",
    description:
      "Purpose-built industrial facilities designed around your operational workflow, equipment, and growth requirements.",
    icon: "Building2",
  },
  {
    id: "site-planning",
    title: "Site Planning",
    description:
      "Site feasibility, truck access, circulation planning, utilities, building orientation, and development strategy.",
    icon: "MapPin",
  },
  {
    id: "industrial-flex",
    title: "Industrial Flex Space",
    description:
      "Flexible warehouse and small-bay industrial facilities designed for multiple tenants and business uses.",
    icon: "Boxes",
  },
  {
    id: "manufacturing",
    title: "Manufacturing Facilities",
    description:
      "Industrial environments designed to support equipment, utilities, production flow, storage, and workforce requirements.",
    icon: "Factory",
  },
  {
    id: "cold-storage",
    title: "Cold Storage",
    description:
      "Temperature-controlled industrial facilities designed for food distribution, pharmaceutical logistics, and cold-chain operations.",
    icon: "Snowflake",
  },
  {
    id: "expansion-renovation",
    title: "Expansion & Renovation",
    description:
      "Strategic expansions and upgrades that increase capacity while minimizing disruption to existing operations.",
    icon: "Settings",
  },
];
