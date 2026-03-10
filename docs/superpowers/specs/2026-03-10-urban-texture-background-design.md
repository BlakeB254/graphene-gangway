# Urban Texture Background — Design Spec

## Summary
A full-viewport animated SVG background layer for Graphene Gangway that renders urban textures (sidewalk cracks, graffiti tags, chain-link fence fragments, circuit traces, spray paint halos) in brand cyan. Textures cycle in and out on staggered timers so only 2-3 are visible at any moment. Appears on all pages, sits behind all content.

## Decisions
- **Approach**: Pure SVG + CSS animations (no video, no JS animation loop)
- **Visibility**: Bold accent — opacity 0.15-0.25 when visible, 0 when dormant
- **Animation**: Cycling flicker — fade in (0.4s) → hold (3-5s) → fade out (0.6s) → dormant (variable delay)
- **Scope**: Global background on all pages, `position: fixed`, `z-index: 0`, `pointer-events: none`

## Component
**File**: `src/components/backgrounds/UrbanTextures.tsx`
- `"use client"` component
- Fixed position, full viewport, z-0
- Contains 5 SVG texture groups, each with its own CSS animation class

## Texture Layers

| Texture | Content | Placement | Cycle |
|---------|---------|-----------|-------|
| Sidewalk Cracks | 4-5 jagged fracture paths | Spread across viewport | ~10s cycle, 0s delay |
| Graffiti Tags | 3-4 text marks ("GG", "NORTH LAWNDALE", etc.) | Scattered, rotated | ~10s cycle, 2s delay |
| Chain-Link Fence | 2 diamond-mesh fragments | Viewport edges/corners | ~10s cycle, 4s delay |
| Circuit Traces | 3 right-angle paths with node dots | Mid-viewport | ~12s cycle, 7s delay |
| Spray Paint Halos | 3-4 radial gradient circles | Random positions | ~10s cycle, 9s delay |

## Animation Timing
- Staggered delays ensure only 2-3 textures visible simultaneously
- CSS `@keyframes` with `animation-delay` offsets — no JS runtime
- Each texture fades in quickly (0.4s), holds at target opacity (3-5s), fades out slowly (0.6s)
- Remaining cycle time is dormant (opacity: 0)

## Integration
- Add `<UrbanTextures />` in `src/app/(main)/layout.tsx`
- Hero section's `bg-black` sticky container naturally masks background
- Coexists with or replaces FloatingOrbs (same z-layer strategy)
- No scroll-linked behavior, no interaction with content

## Mobile
- Same component, same animations
- SVG is negligible bandwidth/battery cost
- No fallback needed

## Branch
- Preview branch: `feature/urban-texture-bg`
