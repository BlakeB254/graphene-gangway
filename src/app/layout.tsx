import type { Metadata, Viewport } from "next";
import { bebasNeue, caveat, outfit, jetbrainsMono } from "@/lib/fonts";
import { SITE_CONFIG, SEO_DEFAULTS } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: SEO_DEFAULTS.title,
    template: SEO_DEFAULTS.titleTemplate,
  },
  description: SEO_DEFAULTS.description,
  keywords: [...SEO_DEFAULTS.keywords],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Graphene Gangway",
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    url: SITE_CONFIG.url,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Graphene Gangway" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    images: ["/og-image.png"],
  },
  metadataBase: new URL(SITE_CONFIG.url),
};

export const viewport: Viewport = {
  themeColor: "#1A1D24",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${caveat.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <SchemaMarkup />
      </head>
      <body className="min-h-screen bg-dark-deep text-ice-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
