import type { WarehouseType } from "@/types/industrial";

export const warehouseTypes: WarehouseType[] = [
  {
    id: "small-bay",
    name: "Small-Bay Warehouse",
    description:
      "Flexible bay configurations suited to growing operators, local distribution, and multi-tenant industrial parks.",
    typicalUse: "Local logistics, light industrial, and multi-tenant occupancy",
    typicalSize: "15,000–80,000 sq ft",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "bulk-distribution",
    name: "Bulk Distribution",
    description:
      "Large-format warehouses designed for dense pallet storage, inbound volume, and outbound shipping efficiency.",
    typicalUse: "Regional and national inventory distribution",
    typicalSize: "200,000–800,000+ sq ft",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cross-dock",
    name: "Cross-Dock Facility",
    description:
      "Streamlined facilities that move product rapidly from inbound to outbound docks with limited long-term storage.",
    typicalUse: "Transfer hubs and time-sensitive freight handling",
    typicalSize: "50,000–250,000 sq ft",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "last-mile",
    name: "Last-Mile Distribution",
    description:
      "Urban and suburban facilities positioned for rapid customer delivery and dense route density.",
    typicalUse: "Parcel sortation and last-mile delivery networks",
    typicalSize: "30,000–150,000 sq ft",
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "fulfillment",
    name: "Fulfillment Center",
    description:
      "High-throughput e-commerce facilities engineered for picking, packing, automation, and outbound capacity.",
    typicalUse: "Direct-to-consumer order fulfillment",
    typicalSize: "250,000–1,000,000+ sq ft",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "manufacturing-wh",
    name: "Manufacturing Warehouse",
    description:
      "Hybrid production and storage environments planned for equipment, utilities, and finished-goods flow.",
    typicalUse: "Production, staging, and shipping adjacency",
    typicalSize: "75,000–400,000 sq ft",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cold-storage",
    name: "Cold Storage",
    description:
      "Temperature-controlled buildings designed for refrigerated and frozen product integrity.",
    typicalUse: "Food, beverage, and pharmaceutical cold chain",
    typicalSize: "50,000–300,000 sq ft",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "build-to-suit",
    name: "Build-to-Suit",
    description:
      "Custom facilities planned around a single operator’s process, equipment, and growth strategy.",
    typicalUse: "Owner-user and long-term lease developments",
    typicalSize: "Varies by requirement",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "multi-tenant",
    name: "Multi-Tenant Industrial",
    description:
      "Divisible warehouse product designed for multiple tenants and flexible demising strategies.",
    typicalUse: "Industrial parks and speculative development",
    typicalSize: "100,000–500,000 sq ft total",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "flex-industrial",
    name: "Flex Industrial Space",
    description:
      "Combined warehouse, office, and light industrial space for evolving business operations.",
    typicalUse: "Service, assembly, and hybrid industrial use",
    typicalSize: "10,000–60,000 sq ft",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  },
];
