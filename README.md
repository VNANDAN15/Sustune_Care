# Sustune Care — Multi-Page Enterprise Web Platform

[![Brand Identity](https://img.shields.io/badge/Brand%20Manual-SC--BGM--2026-0D3B66?style=flat-square)](docs/brand-system.md)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict%20v5-0073B7?style=flat-square)](tsconfig.json)
[![Next.js](https://img.shields.io/badge/Next.js-App%20Router%20v14.2.15-1E293B?style=flat-square)](next.config.mjs)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Brand%20Tokens-0A8754?style=flat-square)](tailwind.config.ts)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AA-C99738?style=flat-square)](docs/implementation-audit.md)

Production-ready, visual-first multi-page web platform for **Sustune Care Private Limited**, bridging the anxiety of distance for Global Indians through institutional real estate stewardship and dignified proxy family healthcare in Hyderabad & Bengaluru.

---

## 1. Multi-Page Architecture & Route Map

The long single-page brochure has been upgraded to a dedicated multi-page website sharing a unified brand identity, light header with full-colour horizontal logo, and footer:

| Route | Page | Purpose & Key Features |
|---|---|---|
| [`/`](app/page.tsx) | **Home** | Visual-first hero with portrait launch film, 3 service pathways, 4 brand pillars summary, and consultation CTA. |
| [`/sparsh`](app/sparsh/page.tsx) | **Sparsh Family Care** | Compassionate proxy family support, 9:16 portrait video, scannable bullets, 4 expandable service specifications, and "Enquire About Family Care" action. |
| [`/aegis`](app/aegis/page.tsx) | **Aegis Property Stewardship** | NRI real estate guardianship, 9:16 portrait video, 4-step stewardship roadmap, 4 expandable service specifications, and "Enquire About Property Management" action. |
| [`/home-care`](app/home-care/page.tsx) | **Home & Personal Care** | Supported living & transitional care: Domiciliary & Personal Care, Post-Acute & Reablement, Complex Live-In Care, with expandable details and preselected CTAs. |
| [`/about`](app/about/page.tsx) | **About Sustune Care** | Corporate purpose, SCIntro video, heraldic four brand pillars, leadership committee, and service synergy. |
| [`/contact`](app/contact/page.tsx) | **Contact & Consultation** | International country code selector (+91 default), callback timezone selector, service preselection from URL parameters, verified contact info, and server-side validated API. |

Every inner page includes an accessible `<BackToHome />` navigation button linking back to `/`.

---

## 2. Mandatory Review Requirements (Shiva Sir's Review)

- **R1. Genuine Multi-Page Website:** **VERIFIED** — Real Next.js App Router routes with shared light header, footer, and Back to Home links.
- **R2. Dedicated Sparsh Family Care Page:** **VERIFIED** — Route `/sparsh` with compassionate intro, actual Sparsh video, scannable bullets, and expandable Read More detail drawers.
- **R3. Dedicated Aegis Property Stewardship Page:** **VERIFIED** — Route `/aegis` with premium property hero, actual Aegis video, 4-step roadmap, and expandable Read More drawers.
- **R4. Visual-First Presentation:** **VERIFIED** — Clean layout, portrait brand film beside hero, concise headlines, and zero dense text blocks.
- **R5. Correct Logo Treatment:** **VERIFIED** — Original `/brand/sustune_logo_horizontal_lockup.svg` rendered in light header. No CSS recreation.
- **R6. Unobstructed Videos:** **VERIFIED** — All 4 portrait videos integrated in custom 9:16 mockup frames with poster facades, on-demand playback, accessible controls, and pending caption tracks.

---

## 3. Official Video Suite Specification

All 4 official high-definition recordings are integrated into dedicated 9:16 portrait frames with zero initial video preloading (`preload="none"`), poster images, and native controls:

| Page / Placement | Video Title | Source File | Web Serving File | Duration | Aspect |
|---|---|---|---|---|---|
| **`/` (Hero)** | Brand Launch Film | `sustune care launch video.mp4` | `/videos/sustune-care-launch.mp4` | 22.0s | 9:16 Portrait |
| **`/aegis`** | Aegis Stewardship Film | `AEGIS Vid001 dt 14th Oct.mp4` | `/videos/aegis-property-stewardship.mp4` | 38.2s | 9:16 Portrait |
| **`/sparsh`** | Sparsh Family Care Film | `sparsh updated video1.mp4` | `/videos/sparsh-family-care.mp4` | 46.5s | 9:16 Portrait |
| **`/about`** | Corporate Story Film | `SCIntro  Introduction Video.mp4` | `/videos/sustune-care-introduction.mp4` | 42.9s | 9:16 Portrait |

*Detailed technical specifications, bitrates, and CDN recommendations in [`docs/video-integration.md`](docs/video-integration.md).*

---

## 4. Official Brand Palette (Design Tokens)

Strictly conforming to the *Sustune Care Brand Guidelines & Stationery Suite Manual*:

- **Clinical White (`#FFFFFF`) & Cool Mist (`#F1F5F9`)** — ~60% Light background ground
- **Deep Marine Blue (`#0D3B66`) & Cerulean Flow (`#0073B7`)** — ~30% Headings, structural actions, and nav
- **Imperial Gold (`#C99738`), Burnished Bronze (`#8B601C`) & Emerald Vitality (`#0A8754`)** — ~10% Prestige accents
- **Pure Slate Gray (`#1E293B`)** — High-contrast typography

*Detailed WCAG 2.2 AA contrast matrix in [`docs/brand-system.md`](docs/brand-system.md).*

---

## 5. Development & Verification Commands

### Prerequisites
- **Node.js:** v18.17+ or v20+ / v22+
- **npm:** v9+ or v10+

### Run Locally
```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

### Build & Verification Commands
```bash
# Type-check TypeScript codebase
npm run type-check

# Run production build (validates all routes and prerendered pages)
npm run build

# Start production server
npm run start
```

---

## 6. Form Handling & Backend Integration

The consultation intake form connects to `/api/enquiry`:
- **Server-Side Validation:** Validates full name, email format, telephone digits, service selection, and consent.
- **NRI Telephony & Timezone Support:** Country code selector (default +91, with US/UK/UAE/AUS support) and preferred callback time zone selector.
- **Spam Protection:** In-memory rate limiting and invisible bot honeypot detection.
- **Honest Feedback (Operating Rule 5):** No false success messages. Only genuine submissions accepted by the backend display confirmation.
- **Environment Configuration:** Copy `.env.example` to `.env.local` to configure external email providers (Resend, SendGrid, or SMTP).

---

## 7. Project Documentation Index

- [`docs/implementation-audit.md`](docs/implementation-audit.md) — Multi-page transformation audit, Shiva Sir's requirements verification, content map, and assets inventory.
- [`docs/brand-system.md`](docs/brand-system.md) — Official brand manual specification, color tokens, typography, and logo usage rules.
- [`docs/content-review.md`](docs/content-review.md) — Comprehensive claims audit, items removed/hidden, items flagged for legal/company approval, and missing assets.
- [`docs/video-integration.md`](docs/video-integration.md) — Video integration report, aspect ratio handling, performance optimizations, and accessibility.
