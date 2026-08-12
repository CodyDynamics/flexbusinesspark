import { Mail, MapPin, Phone } from "lucide-react";

import { COMPANY } from "@/data/company";
import { cn } from "@/lib/utils";

type TopBarProps = {
  className?: string;
};

export function TopBar({ className }: TopBarProps) {
  return (
    <div
      className={cn(
        "border-b border-white/10 bg-navy text-white/90",
        className
      )}
    >
      <div className="container-industrial flex h-9 items-center justify-between gap-4 text-xs sm:h-10 sm:text-[0.8125rem]">
        <p className="truncate font-medium tracking-wide text-white/80">
          Small Bay Industrial &amp; Flex Space Across the United States
        </p>

        <div className="flex shrink-0 items-center gap-4 sm:gap-5">
          <span className="hidden items-center gap-1.5 sm:inline-flex">
            <MapPin className="size-3.5 text-industrial-orange" aria-hidden />
            <span className="whitespace-nowrap">{COMPANY.cityState}</span>
          </span>

          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-white"
          >
            <Phone className="size-3.5 text-industrial-orange" aria-hidden />
            {COMPANY.phone}
          </a>

          <a
            href={COMPANY.emailHref}
            className="hidden items-center gap-1.5 whitespace-nowrap transition-colors hover:text-white md:inline-flex"
          >
            <Mail className="size-3.5 text-industrial-orange" aria-hidden />
            {COMPANY.email}
          </a>
        </div>
      </div>
    </div>
  );
}
