import type { Metadata } from "next";
import { Inter, Manrope, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/landing/json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://flexbusinessparks.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Small Bay Industrial & Flex Space | Flex Business Parks",
  description:
    "Flex Business Parks specializes exclusively in small bay industrial and flex space properties across the United States — brokerage, investment sales, site selection, leasing, and development advisory.",
  keywords: [
    "small bay industrial",
    "flex space",
    "flex industrial",
    "shallow bay industrial",
    "industrial brokerage",
    "investment sales",
    "site selection",
    "flex parks",
    "Flex Parks USA",
    "small bay warehouse",
  ],
  authors: [{ name: "Flex Business Parks" }],
  creator: "Flex Parks USA",
  publisher: "Flex Business Parks",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Flex Business Parks",
    title: "Small Bay Industrial & Flex Space | Flex Business Parks",
    description:
      "Brokerage, investment sales, site selection, and development advisory exclusively focused on small-bay flex industrial real estate nationwide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Small bay industrial flex business park",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Bay Industrial & Flex Space | Flex Business Parks",
    description:
      "Nationwide small bay industrial and flex space brokerage, investment sales, and development advisory.",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-navy focus:shadow"
        >
          Skip to main content
        </a>
        <JsonLd />
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
