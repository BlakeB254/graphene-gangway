import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

const serviceLinks = [
  { href: "/services/brand-kit", label: "Brand Kit" },
  { href: "/services/biz-starter-kit", label: "Biz Starter Kit" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/brand-automations", label: "Brand Automations" },
  { href: "/services/ai-knowledge-base", label: "AI Knowledge Base" },
  { href: "/packages/launch", label: "Launch Packages" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/community", label: "Our Community" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/assessment", label: "Free Assessment" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-deep border-t border-dark-mid">
      {/* Glow Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-neon/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/gg-mark.png"
                alt="Graphene Gangway"
                width={304}
                height={467}
                quality={100}
                className="h-9 w-auto object-contain"
              />
              <span className="font-[family-name:var(--font-display)] text-lg tracking-wide text-cyan-neon">
                Graphene Gangway
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ice-white/50">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-sm text-ice-white/40">
              {SITE_CONFIG.location}
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-widest text-ice-white/70">
              Services
            </h3>
            <nav className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ice-white/50 transition-colors hover:text-cyan-neon"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-widest text-ice-white/70">
              Company
            </h3>
            <nav className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ice-white/50 transition-colors hover:text-cyan-neon"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact + CTA */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-widest text-ice-white/70">
              Get Started
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-neon px-5 py-2.5 text-sm font-bold text-dark-deep transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                Take Free Assessment
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border border-ice-white/20 px-5 py-2.5 text-sm text-ice-white/70 transition-all hover:border-cyan-neon/50 hover:text-cyan-neon"
              >
                View Pricing
              </Link>
            </div>
            <div className="pt-2">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="text-sm text-ice-white/50 transition-colors hover:text-cyan-neon"
              >
                {SITE_CONFIG.contactEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-dark-mid/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-ice-white/30">
              &copy; {year} Graphene Gangway. All rights reserved.
            </p>
            <p className="text-xs text-ice-white/30">
              Built with love in North Lawndale, Chicago
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
