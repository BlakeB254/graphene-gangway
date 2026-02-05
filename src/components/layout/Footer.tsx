import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-deep border-t border-dark-mid">
      {/* Glow Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-neon/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/graphene-gangway-transparent.png"
                alt="Graphene Gangway"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-[family-name:var(--font-display)] text-lg tracking-wide text-cyan-neon">
                Graphene Gangway
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ice-white/50">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-widest text-ice-white/70">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
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

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-widest text-ice-white/70">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-ice-white/50">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="transition-colors hover:text-cyan-neon"
              >
                {SITE_CONFIG.contactEmail}
              </a>
              <p>{SITE_CONFIG.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-dark-mid/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-ice-white/30">
              &copy; {year} Graphene Gangway
            </p>
            <p className="text-xs text-ice-white/30">
              Built with love in Chicago
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
