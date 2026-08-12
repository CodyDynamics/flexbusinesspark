"use client";

import { Building2, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { COMPANY } from "@/data/company";
import { cn } from "@/lib/utils";

type MobileStickyCtaProps = {
  className?: string;
};

export function MobileStickyCta({ className }: MobileStickyCtaProps) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-industrial-gray bg-white/95 backdrop-blur-md md:hidden",
        "pb-[env(safe-area-inset-bottom)]",
        className
      )}
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-2 gap-2 p-3">
        <Button
          variant="outline"
          size="lg"
          className="h-11 border-steel/20 text-navy hover:bg-surface"
          render={<a href={COMPANY.phoneHref} />}
        >
          <Phone aria-hidden />
          Call
        </Button>
        <Button
          size="lg"
          className="h-11 bg-industrial-orange text-white hover:bg-industrial-orange/90"
          render={<a href="#contact" />}
        >
          <Building2 aria-hidden />
          Discuss Project
        </Button>
      </div>
    </div>
  );
}
