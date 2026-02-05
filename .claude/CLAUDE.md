# Graphene Gangway — Project Conventions

## Stack
- **Framework:** Next.js 16.1.6 (App Router, `src/` dir)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 with `@theme inline {}` tokens
- **UI:** shadcn/ui (new-york style, lucide icons)
- **Animation:** framer-motion
- **State:** Zustand (when needed)
- **Auth:** Magic link via Neon + Resend
- **Database:** Neon (PostgreSQL serverless)
- **Deploy:** Vercel + Cloudflare DNS

## Brand System
- **Theme:** Dark portal — `#1A1D24` backgrounds, `#00F0FF` cyan neon accent
- **Fonts:** Bebas Neue (display), Caveat (script), Outfit (body), JetBrains Mono (mono)
- **Logo:** `/public/logos/graphene-gangway-transparent.png`
- **Glow effects:** `glow-cyan`, `text-glow-cyan`, `corner-frame` CSS utilities

## Key Patterns
- Route protection via `src/proxy.ts` (NOT middleware.ts — Next.js 16 convention)
- `proxy()` export, NOT `middleware()`
- httpOnly cookies for sessions (`gg_session`)
- Tailwind v4: custom tokens in `@theme inline {}` block in globals.css
- Google Fonts via `next/font/google` with CSS variables
- All animations: framer-motion with `useInView`, `useScroll`

## File Structure
- `src/components/layout/` — Navbar, Footer, MobileMenu
- `src/components/animations/` — ScrollReveal, ParallaxLayer, GlowDivider, etc.
- `src/components/backgrounds/` — HexGrid, PortalVortex, FilmGrain
- `src/components/home/` — Homepage sections
- `src/lib/` — Auth, session, email, db, utilities
- `src/lib/shared/` — Constants, types shared between client/server

## Rules
1. No pricing in frontend UI
2. All data through API routes
3. Use `cn()` from `@/lib/utils` for conditional classes
4. Server components by default, `"use client"` only when needed
5. Dev login route blocked in production
