import type { IndustrialProject } from "@/types/industrial";

export const projects: IndustrialProject[] = [
  {
    id: "dfw-logistics",
    name: "DFW Logistics Center",
    location: "Dallas–Fort Worth, Texas",
    sizeSqFt: 420000,
    type: "Regional Distribution Center",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    description:
      "A high-throughput regional distribution center engineered for cross-dock flow, trailer staging, and long-term expansion.",
    features: [
      "36-foot clear height",
      "72 dock doors",
      "ESFR sprinkler system",
      "Trailer parking",
      "185-foot truck court",
    ],
    span: "wide",
  },
  {
    id: "phoenix-fulfillment",
    name: "Phoenix Fulfillment Campus",
    location: "Phoenix, Arizona",
    sizeSqFt: 650000,
    type: "E-Commerce Fulfillment Center",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    description:
      "A scalable e-commerce fulfillment campus designed for automation readiness and rapid outbound shipping capacity.",
    features: [
      "40-foot clear height",
      "96 dock positions",
      "Automation-ready slab",
      "Employee parking campus",
      "Future mezzanine capacity",
    ],
  },
  {
    id: "southeast-cold",
    name: "Southeast Cold Logistics Facility",
    location: "Atlanta, Georgia",
    sizeSqFt: 185000,
    type: "Cold Storage",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    description:
      "A temperature-controlled logistics facility supporting refrigerated distribution and cold-chain inventory staging.",
    features: [
      "Multi-temp zones",
      "Insulated dock seals",
      "High-efficiency refrigeration",
      "Food-grade finishes",
      "Secure staging yards",
    ],
  },
  {
    id: "nevada-commerce",
    name: "Nevada Commerce Park",
    location: "Reno, Nevada",
    sizeSqFt: 310000,
    type: "Small-Bay Industrial Development",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    description:
      "A multi-building small-bay industrial park designed for flexible tenancy and western U.S. distribution reach.",
    features: [
      "Multi-tenant bays",
      "Drive-in and dock-high access",
      "Flexible demising walls",
      "Efficient site circulation",
      "Phased development",
    ],
    span: "wide",
  },
  {
    id: "gulf-coast-mfg",
    name: "Gulf Coast Manufacturing Center",
    location: "Houston, Texas",
    sizeSqFt: 275000,
    type: "Manufacturing Facility",
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&q=80",
    description:
      "A manufacturing warehouse planned around equipment loads, utilities distribution, and production-to-shipping adjacency.",
    features: [
      "Heavy floor design",
      "Enhanced power capacity",
      "Crane-ready bays",
      "Dedicated receiving docks",
      "Office and plant adjacency",
    ],
  },
  {
    id: "florida-hub",
    name: "Florida Distribution Hub",
    location: "Orlando, Florida",
    sizeSqFt: 390000,
    type: "Retail Distribution",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
    description:
      "A retail distribution hub optimized for store replenishment cycles, inventory density, and regional outbound routing.",
    features: [
      "Cross-dock capable layout",
      "High-cube storage",
      "Expanded trailer storage",
      "LED high-bay lighting",
      "Future expansion pad",
    ],
  },
];
