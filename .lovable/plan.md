

# Plan: Redesign Gallery UI + Add Video Preview on Home Page

## 1. Gallery Page Redesign

**Problem**: Descriptions only show on hover (invisible on mobile), and the layout lacks visual impact.

**New design**: Each gallery card is a glass card with the image on top and caption + description always visible below — no hover-to-reveal.

- Image fills the top portion with rounded corners, slight zoom on hover
- Below the image: caption in bold, description in muted text — always visible
- Grid layout: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` with consistent card heights using aspect-ratio on images
- Lightbox stays but also shows caption + description below the enlarged image

**File**: `src/pages/Gallery.tsx`

## 2. Home Page — Gallery Preview Section

Add a new section between "Why Choose Us" and the "Quick Contact Strip" showing 3-4 gallery images in a horizontal row with descriptions visible, plus a "View Gallery" link.

**File**: `src/pages/Index.tsx` — import `galleryImages` from siteData, render first 4 items

## 3. Home Page — Looping Video Section

Add a cinematic video background section on the home page (between Hero and Featured Products). Uses a free stock metalworking/manufacturing video from a public CDN (e.g., Pexels video embed or a direct MP4 URL).

- Full-width section with a `<video>` element: `autoPlay`, `muted`, `loop`, `playsInline`
- Dark gradient overlay with a tagline like "Crafting Quality Since Day One"
- Glassmorphism overlay text box
- Video source stored in `siteData.ts` for easy editing

**Files**: `src/pages/Index.tsx`, `src/lib/siteData.ts` (add `heroVideoUrl`), `src/lib/translations.ts` (add video section text)

## 4. Translation Keys

Add to `translations.ts`:
- `home.video.heading` / `home.video.sub` (EN + AM)
- `home.gallery.heading1` / `home.gallery.heading2` / `home.gallery.viewAll` (EN + AM)

## Files Changed

| Action | File |
|---|---|
| Edit | `src/pages/Gallery.tsx` — redesign cards with always-visible descriptions |
| Edit | `src/pages/Index.tsx` — add gallery preview section + video section |
| Edit | `src/lib/siteData.ts` — add `heroVideoUrl` |
| Edit | `src/lib/translations.ts` — add new translation keys |

