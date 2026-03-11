import type { Metadata, Viewport } from "next";
import { SITE_CONFIG, SEO_DEFAULTS } from "@/lib/constants";
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
    <html lang="en">
      <head>
        <SchemaMarkup />
        {/* Google Fonts loaded via stylesheet links for build-time compatibility */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat:wght@400..700&family=JetBrains+Mono:wght@100..800&family=Outfit:wght@200..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-dark-deep text-ice-white">
        {children}
      </body>
    </html>
  );
}
