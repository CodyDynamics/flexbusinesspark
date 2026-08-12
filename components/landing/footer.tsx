import Link from "next/link";

import { COMPANY } from "@/data/company";
import { cn } from "@/lib/utils";

const footerLinks = {
  capabilities: [
    { label: "Warehouse Construction", href: "#capabilities" },
    { label: "Design-Build", href: "#capabilities" },
    { label: "Build-to-Suit", href: "#capabilities" },
    { label: "Industrial Development", href: "#capabilities" },
    { label: "Site Planning", href: "#capabilities" },
    { label: "Renovation", href: "#capabilities" },
  ],
  industries: [
    { label: "Logistics", href: "#industries" },
    { label: "E-Commerce", href: "#industries" },
    { label: "Manufacturing", href: "#industries" },
    { label: "Cold Storage", href: "#industries" },
    { label: "Retail Distribution", href: "#industries" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Insights", href: "#insights" },
    { label: "Careers", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

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

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
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
            <a
              href={COMPANY.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/75",
                "transition-colors hover:text-industrial-orange"
              )}
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
          </div>

          <FooterColumn title="Capabilities" links={footerLinks.capabilities} />
          <FooterColumn title="Industries" links={footerLinks.industries} />
          <FooterColumn title="Company" links={footerLinks.company} />

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>Dallas, TX</li>
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
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-white/40">
            {COMPANY.name} is a fictional company created for website design
            demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
