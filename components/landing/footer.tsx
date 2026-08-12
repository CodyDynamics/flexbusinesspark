import Link from "next/link";

import { COMPANY } from "@/data/company";
import { cn } from "@/lib/utils";

const footerLinks = {
  services: [
    { label: "Investment Sales", href: "#capabilities" },
    { label: "Brokerage", href: "#capabilities" },
    { label: "Site Analysis", href: "#world-engine" },
    { label: "Leasing", href: "#capabilities" },
    { label: "Development Advisory", href: "#capabilities" },
    { label: "1031 Exchange Support", href: "#capabilities" },
  ],
  platform: [
    { label: "360 Advantage", href: "#process" },
    { label: "World Engine", href: "#world-engine" },
    { label: "Small Bay Feasibility", href: "#world-engine" },
    { label: "Market Record Pricing", href: "#about" },
    { label: "Get Listings", href: "#contact" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Transactions", href: "#projects" },
    { label: "Knowledge Center", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

const socialLinks = [
  { label: "LinkedIn", href: COMPANY.linkedin },
  { label: "Facebook", href: COMPANY.facebook },
  { label: "Instagram", href: COMPANY.instagram },
  { label: "YouTube", href: COMPANY.youtube },
  { label: "X", href: COMPANY.x },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Accessibility", href: "#" },
] as const;

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/75 transition-colors hover:text-industrial-orange"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

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

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="container-industrial py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))] lg:gap-10">
          <div className="lg:pr-8">
            <div className="flex items-center gap-3">
              <WarehouseIcon className="size-8 text-industrial-orange" />
              <div>
                <p className="font-heading text-lg font-bold tracking-[0.12em]">
                  {COMPANY.shortName}
                </p>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/50">
                  {COMPANY.secondaryName}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {COMPANY.tagline}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              {COMPANY.secondaryTagline}
            </p>
            <a
              href={COMPANY.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-industrial-orange transition-colors hover:text-industrial-orange/80"
            >
              {COMPANY.bookTitle} →
            </a>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "text-sm font-medium text-white/75",
                      "transition-colors hover:text-industrial-orange"
                    )}
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Services" links={footerLinks.services} />
          <FooterColumn title="Platform" links={footerLinks.platform} />
          <FooterColumn title="Company" links={footerLinks.company} />

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>{COMPANY.cityState}</li>
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="transition-colors hover:text-industrial-orange"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.emailHref}
                  className="transition-colors hover:text-industrial-orange"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/50">
              © 2026 {COMPANY.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
