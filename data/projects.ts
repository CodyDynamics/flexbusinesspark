import type { IndustrialProject } from "@/types/industrial";

export const projects: IndustrialProject[] = [
  {
    id: "harmon",
    name: "Harmon Industrial Park",
    location: "Fort Worth, Texas",
    sizeSqFt: 0,
    type: "Flex / Industrial Business Park",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    description:
      "Recently closed flex / industrial business park transaction in the Fort Worth market.",
    features: ["Small bay product", "Multi-tenant park", "DFW market", "Investment sale"],
    span: "wide",
  },
  {
    id: "dfw-corporate",
    name: "DFW Corporate Park",
    location: "Dallas–Fort Worth, Texas",
    sizeSqFt: 0,
    type: "Flex Corporate Park",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description:
      "Corporate flex park positioned for shallow bay industrial demand across DFW.",
    features: ["Flex suites", "Showroom potential", "Regional access", "Investor demand"],
  },
  {
    id: "weatherby",
    name: "Weatherby Business Park",
    location: "Texas",
    sizeSqFt: 0,
    type: "Business Park",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    description: "Sold business park representing continued demand for flex industrial assets.",
    features: ["Sold", "Business park", "Texas market", "Investment sale"],
  },
  {
    id: "keller",
    name: "Keller Flex Industrial Park",
    location: "Keller, Texas",
    sizeSqFt: 0,
    type: "Flex / Industrial Park",
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1600&q=80",
    description: "Sold flex / industrial park in Keller, Texas.",
    features: ["Sold", "Small bay", "North Texas", "Owner/investor sale"],
    span: "wide",
  },
  {
    id: "white-oak",
    name: "White Oak Industrial Portfolio",
    location: "Dallas–Fort Worth, Texas",
    sizeSqFt: 0,
    type: "Industrial Portfolio",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
    description: "Just closed multi-asset industrial portfolio transaction in DFW.",
    features: ["Portfolio sale", "Just closed", "DFW", "Multi-building"],
  },
  {
    id: "plano-showroom",
    name: "Plano Flex Showroom Building",
    location: "Plano, Texas",
    sizeSqFt: 0,
    type: "Flex Showroom",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    description: "Sold flex showroom building serving the Plano submarket.",
    features: ["Showroom", "Flex industrial", "Sold", "North Texas"],
  },
];
