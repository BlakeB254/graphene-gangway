"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const menuVariants: Variants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "tween" as const,
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: { type: "tween" as const, duration: 0.25, ease: "easeIn" },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const socialIcons = [
  { key: "instagram" as const, Icon: Instagram },
  { key: "twitter" as const, Icon: Twitter },
  { key: "facebook" as const, Icon: Facebook },
  { key: "youtube" as const, Icon: Youtube },
];

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  function handleClose() {
    setExpandedGroup(null);
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="mobile-backdrop"
            className="fixed inset-0 z-40 bg-dark-deep/60"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleClose}
          />

          {/* Menu Panel */}
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-dark-deep/98 backdrop-blur-xl"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                type="button"
                onClick={handleClose}
                className="rounded-full p-2 text-ice-white/70 transition-colors hover:text-cyan-neon"
                aria-label="Close menu"
              >
                <X className="h-8 w-8 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-1 flex-col items-center justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.label}
                  variants={linkVariants}
                  className="flex flex-col items-center"
                >
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedGroup(
                            expandedGroup === link.label ? null : link.label
                          )
                        }
                        className="flex items-center gap-2 text-3xl font-[family-name:var(--font-display)] tracking-wider text-ice-white transition-colors hover:text-cyan-neon"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "h-6 w-6 transition-transform duration-200",
                            expandedGroup === link.label && "rotate-180"
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedGroup === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 flex flex-col items-center gap-3">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={handleClose}
                                  className="text-lg text-ice-white/50 transition-colors hover:text-cyan-neon"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={handleClose}
                      className="text-3xl font-[family-name:var(--font-display)] tracking-wider text-ice-white transition-colors hover:text-cyan-neon"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 pb-12">
              {socialIcons.map(({ key, Icon }) => (
                <a
                  key={key}
                  href={SOCIAL_LINKS[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ice-white/40 transition-colors hover:text-cyan-neon"
                  aria-label={key}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
