"use client";

import { Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { COMPANY, NAV_LINKS } from "@/data/company";
import { cn } from "@/lib/utils";

type MobileNavigationProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function MobileNavigation({ open, onOpenChange }: MobileNavigationProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full border-l border-industrial-gray sm:max-w-sm">
        <SheetHeader className="border-b border-industrial-gray pb-4">
          <SheetTitle className="text-left text-lg font-bold tracking-tight text-navy">
            Menu
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-1 flex-col gap-1 px-4 py-2" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => onOpenChange(false)}
              className={cn(
                "rounded-lg px-3 py-3 text-base font-medium text-navy transition-colors",
                "hover:bg-surface hover:text-steel"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-4 border-t border-industrial-gray p-4">
          <div className="space-y-3 text-sm">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2.5 font-medium text-navy transition-colors hover:text-steel"
            >
              <Phone className="size-4 text-industrial-orange" aria-hidden />
              {COMPANY.phone}
            </a>
            <a
              href={COMPANY.emailHref}
              className="flex items-center gap-2.5 text-slate-industrial transition-colors hover:text-navy"
            >
              <Mail className="size-4 text-industrial-orange" aria-hidden />
              {COMPANY.email}
            </a>
          </div>

          <Button
            size="lg"
            className="h-11 w-full bg-industrial-orange text-white hover:bg-industrial-orange/90"
            render={<a href="#contact" onClick={() => onOpenChange(false)} />}
          >
            Discuss Your Opportunity
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
