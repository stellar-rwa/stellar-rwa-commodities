# Design Specification: StellarCommodity "Institutional Luxury"

This document outlines the visual philosophy and technical prompts used to create the world-breaking premium landing page for the StellarCommodity RWA platform.

## 1. Design Philosophy
The core concept is **"Institutional Luxury."** It bridges the gap between the raw power of the Stellar blockchain and the refined, exclusive nature of high-end physical commodities (Gold, Rare Earths, Energy).

### Key Pillars:
- **World-Breaking Scale**: Using oversized, cinematic typography to convey authority and market dominance.
- **Atmospheric Depth**: Leveraging mesh gradients and glassmorphism to create a "digital vault" atmosphere.
- **Sophisticated Clarity**: High-contrast typography paired with a muted, professional color palette to ensure data is the hero.

---

## 2. Color Palette (Obsidian & Gold)

| Element | Color Code | Tailwind Class | Rationale |
| :--- | :--- | :--- | :--- |
| **Base Background** | `#020617` | `bg-[#020617]` | A deep Obsidian Night that provides maximum contrast for gold accents. |
| **Primary Accent** | `#EAB308` | `text-gold` | Polished Gold. Conveys wealth, scarcity, and value. |
| **Body Typography** | `#D4D4D8` | `text-zinc-300` | Zinc-300. Softer than pure white to reduce eye strain while maintaining premium legibility. |
| **Secondary Labels**| `#71717A` | `text-zinc-500` | Zinc-500. For meta-data and lower-hierarchy labels. |
| **Positive Trend**  | `#10B981` | `text-emerald` | Emerald Green. Represents growth and liquidity. |
| **Negative Trend**  | `#F43F5E` | `text-ruby` | Ruby Red. Represents market adjustments. |

---

## 3. Visual Language & FX

### Glassmorphism System
- **Surface**: `rgba(15, 23, 42, 0.8)`
- **Blur**: `backdrop-filter: blur(16px)`
- **Border**: `1px solid rgba(255, 255, 255, 0.08)`
- **Shadow**: Deep, multi-layered shadows to simulate cards floating in a void.

### Cinematic Typography
- **Headings**: `Syne` or `Inter` (Black/ExtraBold weights).
- **Scale**: `text-5xl` scaled to `text-8xl` on large displays.
- **Emphasis**: Italicized gold gradients for primary keywords (e.g., *COMMODITIES*).

---

## 4. The "World Breaking" Prompt

If you were to recreate this aesthetic in an AI design tool or code, use this prompt:

> **"Create a high-fidelity institutional FinTech landing page for a Real-World Asset (RWA) platform. The aesthetic is 'Obsidian Luxury.' Use a deep black background (#020617) with subtle, animated mesh gradients in gold and deep blue. Implement oversized, cinematic headers using the 'Syne' font with tight letter spacing. Commodity cards should use advanced glassmorphism (16px blur) with ultra-thin white borders (8% opacity). The primary accent is Polished Gold (#EAB308) used for Keyword Gradients and call-to-action buttons. Body text must be Zinc-300 for high-contrast readability. Visuals should feel like a premium digital vault—secure, professional, and world-breaking in scale."**

---

## 5. Implementation Notes
- **Framer Motion**: All cards and sections use staggered entrance animations to create a "settling" effect upon load.
- **Responsiveness**: Typography scales dynamically to prevent overflow while maintaining impact on ultra-wide monitors.
- **Iconography**: Minimalist, thin-stroke icons (Lucide) in Slate-400 to avoid visual clutter.
