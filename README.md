# Paintstar Atelier - Fine Art Digital Oil Portrait Studio

A bespoke fine-art digital portrait studio website inspired by **[Oilpixel](https://www.oilpixel.com)**, built for luxury client presentation, high conversion, and seamless ordering.

---

## 🎨 Distinctive Design & Architectural Features

1. **Brand Aesthetic & Philosophy**:
   - Signature Headline: *"Digital Oil Portrait Paintings"*
   - Slogan: *"Painted, not prompted."* (Countering automated AI filters by showcasing authentic human brushstrokes and master craftsmanship).
   - Color Palette: Rich Obsidian (`#0B1012`), Clean Canvas White (`#FFFFFF`), and Vibrant Scarlet Accent (`#FF543E`).

2. **Luxury Canvas Preloader** (`Preloader.tsx`):
   - Full-screen ambient dark preloader with animated atelier emblem and progress line, smoothly fading out upon load.

3. **Minimal Top Navigation** (`TopNavbar.tsx`):
   - Fine-art brand logotype with diamond-accented `"Make My Painting"` action button featuring dual-slide typography transitions.

4. **Floating Dynamic Island Dock** (`FloatingIslandDock.tsx`):
   - Glassmorphism capsule dock (`backdrop-blur-[24px]`) fixed at the bottom center.
   - Real-time active section detector (Home &rarr; Self Portraits &rarr; Children &rarr; Family &rarr; Couple &rarr; Restoration &rarr; Master Artist &rarr; Stories).
   - Expands into an elegant modal directory with flyout categories, direct studio phone (`+91 97246 52407`), and email links.

5. **Morphing Canvas Showcase Hero** (`HeroSection.tsx`):
   - Cinematic layered framing with automatic portrait cycling, matting borders, and fluid editorial typography.

6. **Asymmetrical Editorial Gallery Showcases** (`GalleryShowcase.tsx`):
   - 5 sequentially numbered galleries:
     - **Gallery 01**: Self Portrait Paintings
     - **Gallery 02**: Children's Portrait Paintings
     - **Gallery 03**: Family Portrait Paintings
     - **Gallery 04**: Couple & Wedding Paintings
     - **Gallery 05**: Photo Restoration & Antique Enhancement
   - Alternating multi-span magazine layout with hover zoom (`scale-105`), metadata badges, and the Oilpixel expanding dot `"VIEW ALL"` button.

7. **Interactive Before & After Photo Restoration Slider** (`BeforeAfterSlider.tsx`):
   - Real-time drag divider comparing original faded/damaged vintage photos with vibrant, hand-painted digital oil canvas art.

8. **Master Artist & Atelier Narrative** (`ArtistCraftStory.tsx`):
   - "Pixel by pixel" philosophy breakdown with atelier metrics (21+ Years, 16k+ Portraits, 100% Hand-Painted).
   - 4-step workflow breakdown from photograph to royal stretched canvas.

9. **Client Stories & Heirloom Testimonials** (`TestimonialsSection.tsx`):
   - Verified client reviews with ratings, portrait tags, and ready-to-hang framing showcase.

10. **Off-Canvas Consultation & Quote Drawer** (`ConsultationDrawer.tsx`):
    - Slides smoothly from the right (*"Let's revive your wall"*).
    - Quick phone & WhatsApp links.
    - Reference photo drag-and-drop file upload with live thumbnail preview.
    - Framing preference selector (Floating Wood Frame, Museum Gallery Wrap, Rolled Canvas).
    - One-click WhatsApp message generation with pre-filled commission specs.

11. **Artwork Inspection Modal** (`PaintingDetailModal.tsx`):
    - Click any painting to inspect archival canvas details, dimensions, and trigger instant commission inquiries.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Smooth Scroll**: Lenis Smooth Scroll (`@studio-freight/lenis`)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

---

## 🚀 Running the Project

```bash
# Start local development server (already live at http://localhost:3000)
npm run dev

# Run production build
npm run build

# Start production server
npm run start
```
