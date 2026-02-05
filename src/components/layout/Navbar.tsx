"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { AuthButton } from "@/components/auth/AuthButton";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50",
          "bg-dark-deep/95 backdrop-blur-md",
          "border-b border-dark-mid/50"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo + Brand */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logos/graphene-gangway-transparent.png"
                alt="Graphene Gangway"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
              />
              <span className="font-[family-name:var(--font-display)] text-xl tracking-wide text-cyan-neon">
                Graphene Gangway
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-sm text-ice-white/70 transition-colors hover:text-ice-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 border-b-2 border-cyan-neon transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right Side: Auth + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <AuthButton />
              </div>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="inline-flex items-center justify-center rounded-md p-2 text-ice-white/70 transition-colors hover:text-cyan-neon md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
