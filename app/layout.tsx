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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vertexindustrial.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Warehouse Construction & Industrial Development | Vertex Industrial Build",
  description:
    "Design-build warehouse construction, logistics facilities, distribution centers, manufacturing facilities, and industrial development services across the United States.",
  keywords: [
    "warehouse construction",
    "warehouse builders",
    "industrial construction company",
    "distribution center construction",
    "logistics warehouse development",
    "industrial design build",
    "commercial warehouse construction",
    "build to suit warehouse",
    "warehouse development",
    "industrial contractor",
  ],
  authors: [{ name: "Vertex Industrial Build" }],
  creator: "Vertex Industrial Build",
  publisher: "Vertex Industrial Build",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vertex Industrial Build",
    title: "Warehouse Construction & Industrial Development | Vertex Industrial Build",
    description:
      "Design-build warehouse construction, logistics facilities, distribution centers, manufacturing facilities, and industrial development services across the United States.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Modern logistics warehouse exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warehouse Construction & Industrial Development | Vertex Industrial Build",
    description:
      "Design-build warehouse construction, logistics facilities, distribution centers, and industrial development across the United States.",
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
