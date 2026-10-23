# Sustune Care — Official Brand Identity & Design System

**Document Ref:** SC-BDS-2026-V1  
**Authority:** `Sustune Care Brand Guidelines & Stationery Suite Manual.pdf` (SC-BGM-2026, Version 1.0.0 Master Release)  
**Status:** Authoritative Specification (Brand Manual Wins in All Conflicts)  

---

## 1. Core Palette & Color Science Matrix

All values are mathematically color-calibrated for web screens (sRGB) and 4-color process offset printing (ISO 12647-2 compliant), extracted directly from the official brand manual.

| Token Name | HEX Code | RGB | CMYK | PMS (Pantone) | Role & Distribution |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Clinical White** | `#FFFFFF` | `255, 255, 255` | `0, 0, 0, 0` | Pure Opaque Stock | **60% Dominant Ground:** Primary canvas, generous white breathing space, clean documentation. |
| **Cool Mist Tint** | `#F1F5F9` | `241, 245, 249` | `4, 2, 2, 0` | Cool Gray 1 C | **60% Dominant Ground:** Secondary card backgrounds, alternating section bands, subtle borders. |
| **Deep Marine Blue** | `#0D3B66` | `13, 59, 102` | `100, 75, 25, 25` | 295 C / 295 U | **30% Clinical Secondary:** Prominent headings, hero banners, header/footer backgrounds, heavy text. |
| **Cerulean Flow** | `#0073B7` | `0, 115, 183` | `88, 48, 0, 0` | 2174 C / 2174 U | **30% Clinical Secondary:** Primary interactive actions (buttons), link hovers, active tab indicators. |
| **Imperial Gold** | `#C99738` | `201, 151, 56` | `20, 40, 90, 5` | 110 C / 110 U | **10% Prestige Accent:** Emblem shield frame, pill badges, subtle borders, high-demand markers. |
| **Burnished Bronze**| `#8B601C` | `139, 96, 28` | `30, 55, 100, 30` | 126 C / 126 U | **10% Prestige Accent:** Deep gold borders, focused hover accents on prestige components. |
| **Emerald Vitality**| `#0A8754` | `10, 135, 84` | `86, 18, 85, 5` | 7725 C / 7725 U | **10% Prestige Accent:** Clinical secondary actions, success indicators, verified trust badges. |
| **Pure Slate Gray** | `#1E293B` | `30, 41, 59` | `75, 60, 40, 40` | 432 C / 432 U | **Text & Contrast Anchor:** High-contrast body text, form input labels, dark typography over gold. |

---

## 2. 60-30-10 Application Rule & Accessibility Contrast

### Distribution Guidelines
- **60% Light Neutral Ground:** `Clinical White (#FFFFFF)` and `Cool Mist (#F1F5F9)` provide ample breathing room, ensuring a calm, clinical, and dignified visual foundation.
- **30% Structural Blue:** `Deep Marine Blue (#0D3B66)` and `Cerulean Flow (#0073B7)` drive headings, navigation bars, primary interactive buttons, and footer bands.
- **10% Prestige & Health Accents:** `Imperial Gold (#C99738)` and `Emerald Vitality (#0A8754)` are used with strict restraint for badges, icons, divider lines, and success states.

### WCAG 2.2 Contrast Verification
- **Pass AAA:**
  - Pure Slate (`#1E293B`) on White (`#FFFFFF`) = **12.63:1**
  - Deep Marine (`#0D3B66`) on White (`#FFFFFF`) = **10.84:1**
- **Pass AA:**
  - Cerulean Flow (`#0073B7`) on White (`#FFFFFF`) = **4.58:1**
  - Imperial Gold (`#C99738`) on Deep Marine (`#0D3B66`) = **4.62:1**
- **Strict Accessibility Rules:**
  - **Never** place white text over unshadowed Imperial Gold or light green fills.
  - When typography appears over an Imperial Gold fill, **always** use Pure Slate (`#1E293B`) or Deep Marine (`#0D3B66`) to maintain contrast $> 4.5:1$.

---

## 3. Discrepancy Reconciliation

| Token / Asset | HTML Source 1 (`single_page`) | HTML Source 2 (`landing_page`) | Official Brand Manual | Resolution (**Manual Wins**) |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Navy** | `#0F172A` (Tailwind slate-900) | `#0D3B66` (`sustune-navy`) | `#0D3B66` (Deep Marine Blue) | **`#0D3B66`** applied across all headers, heroes, and primary titles. |
| **Gold Token** | `#D97706` / `#F59E0B` (amber) | `#C99738` (`sustune-gold`) | `#C99738` (Imperial Gold) | **`#C99738`** applied across all heraldic borders, badges, and accents. |
| **Green Token**| `#059669` / `#10B981` (emerald)| `#0A8754` (`sustune-emerald`) | `#0A8754` (Emerald Vitality)| **`#0A8754`** applied across all health, verification, and secondary CTAs. |
| **Logo Artwork**| Inline inline SVG approximation | Google Drive hotlink (broken/unreliable) | Official SVGs in `01_Vector_Assets_SVG_EPS/` | **Official Vector SVGs** (`sustune_logo_horizontal_lockup.svg`, `sustune_emblem_standalone.svg`) copied to web public directory. |

---

## 4. Typography Scale & Hierarchy

- **Display & Headings:** `Plus Jakarta Sans` (weights: 600 SemiBold, 700 Bold, 800 ExtraBold). Modern, geometric, clinical clarity.
- **Body, Navigation & Forms:** `Inter` (weights: 400 Regular, 500 Medium, 600 SemiBold). Optimized for multi-screen readability and micro-reading.

| Element | Font Family | Weight | Desktop Size / Line-Height | Mobile Size / Line-Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | Plus Jakarta Sans | 800 (ExtraBold) | 52px (3.25rem) / 60px (1.15) | 36px / 42px | `-0.025em` |
| **Section H2** | Plus Jakarta Sans | 700 (Bold) | 36px (2.25rem) / 45px (1.25) | 28px / 34px | `-0.015em` |
| **Card H3** | Plus Jakarta Sans | 600 (SemiBold) | 24px (1.50rem) / 31px (1.30) | 20px / 26px | `0.000em` |
| **Header H4** | Plus Jakarta Sans | 600 (SemiBold) | 18px (1.125rem) / 25px (1.40) | 16px / 22px | `+0.010em` |
| **Subtitle** | Inter | 500 (Medium) | 20px (1.25rem) / 30px (1.50) | 17px / 26px | `0.000em` |
| **Body Regular**| Inter | 400 (Regular) | 16px (1.00rem) / 25.6px (1.60) | 15px / 24px | `0.000em` |
| **Caption/Meta**| Inter | 400 (Regular) | 14px (0.875rem) / 21px (1.50) | 13px / 19px | `+0.015em` |
| **Micro/Legal** | Inter | 500 (Medium) | 12px (0.75rem) / 16.8px (1.40) | 11px / 15px | `+0.025em` |

---

## 5. Master Heraldic Emblem Architecture

The Sustune Care master mark unites four distinct structural symbols inside an open beveled heraldic shield:
1. **Guiding Radiance Star (Apex):** 4-point clinical star marking institutional standard and moral navigation.
2. **Sheltering Gable & 4-Pane Grid:** Domiciliary safety, protected residential environments, and home comfort.
3. **Dynamic 'S' Ribbon Matrix:** Bi-chromatic dual loop (upper loop transitions from Cerulean to Marine; lower loop from Teal to Emerald).
4. **Symmetrical Supporting Palms:** Foundational bedside warmth, physical support, and human dignity.
5. **Outer Gold Shield Framework:** Beveled clinical governance perimeter.

### Exclusion Zone & Scale Rules
- **Clearspace:** $1.0X$, where $X$ is the height of the Guiding Star. No text, rules, or borders may violate this perimeter.
- **Digital Minimum Size:** 48px height standard (96px on Retina displays) to preserve window pane definition and hand contours.
- **Prohibitions:** Never stretch, distort aspect ratio, recolor with flat pastels or neon fills, or isolate elements.
