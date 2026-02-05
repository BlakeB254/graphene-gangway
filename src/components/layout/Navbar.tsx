"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { AuthButton } from "@/components/auth/AuthButton";
import { MobileMenu } from "@/components/layout/MobileMenu";
import type { NavLink } from "@/lib/shared/types";

// Split nav links into left/right halves around the center logo
const midpoint = Math.ceil(NAV_LINKS.length / 2);
const leftLinks = NAV_LINKS.slice(0, midpoint);
const rightLinks = NAV_LINKS.slice(midpoint);

function DropdownMenu({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function enter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function leave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        type="button"
        className="group relative flex items-center gap-1 text-sm text-ice-white/70 transition-colors hover:text-ice-white"
      >
        {link.label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
        <span className="absolute -bottom-1 left-0 h-0.5 w-0 border-b-2 border-cyan-neon transition-all duration-300 group-hover:w-full" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 overflow-hidden rounded-lg border border-dark-mid bg-dark-surface/95 shadow-lg shadow-black/40 backdrop-blur-md"
          >
            <div className="p-2">
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 transition-colors hover:bg-cyan-neon/5"
                >
                  <span className="block text-sm font-medium text-ice-white">
                    {child.label}
                  </span>
                  <span className="block text-xs text-ice-white/40">
                    {child.description}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavItem({ link }: { link: NavLink }) {
  if (link.children) return <DropdownMenu link={link} />;

  return (
    <Link
      href={link.href}
      className="group relative text-sm text-ice-white/70 transition-colors hover:text-ice-white"
    >
      {link.label}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 border-b-2 border-cyan-neon transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

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
            {/* Mobile: logo left + hamburger right */}
            <div className="flex items-end md:hidden" style={{ height: 64 }}>
              <Link href="/" className="block" style={{ height: 64 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/gg-mark.png"
                  alt="Graphene Gangway"
                  style={{ height: 64, width: 'auto' }}
                />
              </Link>
            </div>

            {/* Desktop: left links */}
            <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
              {leftLinks.map((link) => (
                <NavItem key={link.label} link={link} />
              ))}
            </div>

            {/* Desktop: center logo — fills full navbar height, base-aligned */}
            <div className="hidden md:flex mx-8 flex-shrink-0 items-end" style={{ height: 64 }}>
              <Link href="/" className="block" style={{ height: 64 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/gg-mark.png"
                  alt="Graphene Gangway"
                  style={{ height: 64, width: 'auto' }}
                />
              </Link>
            </div>

            {/* Desktop: right links + auth */}
            <div className="hidden flex-1 items-center gap-8 md:flex">
              {rightLinks.map((link) => (
                <NavItem key={link.label} link={link} />
              ))}
              <div className="ml-auto">
                <AuthButton />
              </div>
            </div>

            {/* Mobile: hamburger */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="inline-flex items-center justify-center rounded-md p-2 text-ice-white/70 transition-colors hover:text-cyan-neon"
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
