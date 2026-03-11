# Graphene Gangway — Complete Site Redesign Design Spec

> Approved by user on 2026-03-11. "I trust you, no more questions do what you think is best."

## Decisions Made

1. **Option A** — Keep existing fonts (Bebas Neue, Caveat, Outfit, JetBrains Mono), route groups, and brand identity. Extend the design system with new tokens.
2. **Programs System** — Full CMS (Option C). Each program is a mini landing page composed of admin-managed sections. Data in Neon + CDX sync.
3. **YN Academy** — Becomes one program card in `/programs`. The `/yna/*` portal routes stay intact.
4. **Outreach** — Content folds into `/community` page.
5. **Merch** — Stays as-is for now.
6. **Services** — Old `/services` stays live until 5 new service pages built.
7. **Blog, About, Contact** — Redesigned incrementally; old pages stay until replacements ready.

## Decomposition (10 Batches)

| Batch | Scope | Dependencies |
|-------|-------|-------------|
| 1 | Design system tokens, shared components, nav/footer update, /go/ layout | None |
| 2 | Programs CMS (DB + Admin CRUD + public pages), seed YN Academy | Batch 1 |
| 3 | Homepage redesign (all 9 sections) | Batches 1, 2 |
| 4 | 5 Service pages | Batches 1, 3 |
| 5 | Pricing + Packages pages (interactive calculator) | Batches 1, 4 |
| 6 | Community page (Chicago Data Portal map, stats) | Batch 1 |
| 7 | Stripe + Checkout + n8n + Cal.com + Forms | Batches 1, 5 |
| 8 | 10 Ad landing pages (/go/*) | Batches 1, 4, 5 |
| 9 | Blog (MDX) + Case Studies + Portfolio gallery | Batch 1 |
| 10 | Analytics (GA4/GTM/pixels), UTM, email nurture | Batches 7, 8 |

## Nav Structure (Post-Redesign)

```
Home | Services ▾ | Programs ▾ | Packages | Our Community | Portfolio | About
         ├─ Brand Kit          ├─ YN Academy
         ├─ Biz Starter        ├─ [future programs]
         ├─ Web Development
         ├─ Automations
         └─ AI Knowledge Base
```

Secondary: Pricing, Blog, Case Studies, Assessment in footer or secondary nav.

## Brand Colors (Preserved)

- Primary accent: `#00F0FF` (cyan neon)
- Background: `#1A1D24` (dark deep)
- Surface: `#2A2D35` (dark surface)
- Border: `#32363F` (dark mid)
- Text: `#E8FEFF` (ice white)
- Dim accent: `#00B8C4` (cyan dim)
- Deep accent: `#004D52` (teal deep)

## New Extended Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-success` | `#22C55E` | Confirmation, "included free" badges |
| `--brand-warning` | `#F59E0B` | Urgency, "limited time" badges |
| `--brand-accent-hover` | `#00D4E0` | Hover states (cyan darkened ~15%) |
| `--brand-accent-light` | `#66F5FF` | Subtle highlights, glow borders |
| `--brand-glow` | `rgba(0, 240, 255, 0.3)` | CTA glow effect |

## Programs Data Model

Flexible JSONB sections approach:

- `programs` table — core metadata (slug, title, status, hero_image, display_order, external_link)
- `program_sections` table — ordered sections per program (section_type + JSONB content)
- Section types: rich_text, testimonials, faq, timeline, gallery, stats, documents, cta, video, embed
