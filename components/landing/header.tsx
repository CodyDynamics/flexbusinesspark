"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { MobileNavigation } from "@/components/landing/mobile-navigation";
import { Button } from "@/components/ui/button";
import { COMPANY, NAV_LINKS } from "@/data/company";
import { cn } from "@/lib/utils";

function WarehouseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M4 14L16 6L28 14V26H20V18H12V26H4V14Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="miter"
      />
      <path
        d="M12 18H20V26"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="miter"
      />
      <path
        d="M10 14H14M18 14H22"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="square"
      />
      <path d="M16 6V10" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-industrial-gray/80 bg-white/90 shadow-sm backdrop-blur-md"
            : "border-transparent bg-white"
        )}
      >
        <div className="container-industrial flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          <a
            href="#"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label={`${COMPANY.name} home`}
          >
            <span className="flex size-10 items-center justify-center rounded-lg border border-industrial-gray bg-surface text-navy transition-colors group-hover:border-steel/30 group-hover:text-steel">
              <WarehouseIcon className="size-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-sm font-extrabold tracking-[0.18em] text-navy">
                {COMPANY.shortName}
              </span>
              <span className="mt-1 text-[0.625rem] font-semibold tracking-[0.28em] text-steel">
                {COMPANY.secondaryName}
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-industrial transition-colors hover:bg-surface hover:text-navy"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              size="lg"
              className="hidden h-10 bg-industrial-orange px-5 text-white hover:bg-industrial-orange/90 lg:inline-flex"
              render={<a href="#contact" />}
            >
              Discuss Your Project
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      <MobileNavigation open={mobileOpen} onOpenChange={setMobileOpen} />
    </>
  );
}
