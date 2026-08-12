import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Building2,
  Factory,
  Globe2,
  HardHat,
  MapPin,
  Ruler,
  Settings,
  Snowflake,
  TrendingUp,
  Users,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import type { Capability } from "@/types/industrial";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Ruler,
  Warehouse,
  Building2,
  MapPin,
  Users,
  Globe2,
  Settings,
  HardHat,
  Boxes,
  Factory,
  Snowflake,
};

type CapabilityCardProps = {
  capability: Capability;
  className?: string;
};

export function CapabilityCard({ capability, className }: CapabilityCardProps) {
  const Icon = iconMap[capability.icon] ?? Building2;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col border border-industrial-gray bg-white p-6 transition-colors duration-300 hover:border-steel/30 hover:shadow-[0_12px_40px_-24px_rgba(11,23,42,0.35)] md:p-7",
        className
      )}
    >
      <div className="mb-5 inline-flex size-11 items-center justify-center border border-industrial-gray bg-surface text-steel transition-colors duration-300 group-hover:border-industrial-orange/30 group-hover:text-industrial-orange">
        <Icon className="size-5" strokeWidth={1.75} aria-hidden />
      </div>

      <h3 className="font-heading text-lg font-semibold text-navy md:text-xl">
        {capability.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-industrial md:text-[0.9375rem]">
        {capability.description}
      </p>

      <Link
        href="#contact"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-steel transition-colors duration-300 group-hover:text-industrial-orange"
      >
        Learn More
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        />
      </Link>
    </article>
  );
}
