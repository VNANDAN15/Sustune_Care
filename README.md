# Sustune Care — Premium Unified Web & SaaS-Ready Platform

[![Brand Identity](https://img.shields.io/badge/Brand%20Manual-SC--BGM--2026-0D3B66?style=flat-square)](docs/brand-system.md)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict%20v5-0073B7?style=flat-square)](tsconfig.json)
[![Next.js](https://img.shields.io/badge/Next.js-App%20Router-1E293B?style=flat-square)](next.config.mjs)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Brand%20Tokens-0A8754?style=flat-square)](tailwind.config.ts)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AA-C99738?style=flat-square)](docs/implementation-audit.md)

Production-quality, unified web application for **Sustune Care Private Limited**, bridging the anxiety of distance for Global Indians through institutional real estate stewardship and dignified proxy family healthcare.

---

## 1. Project Architecture

This application unifies all approved Sustune Care business offerings under one coherent parent brand identity:

1. **Aegis Property Stewardship:** Real estate oversight, tenant background checks, boundary monitoring, FEMA-compliant rental remittances into NRE/NRO accounts, and HD video walkthrough audits for NRI property owners.
2. **Sparsh Family Care:** Dedicated language-matched care companions, hospital escort, doctor visit logs, 24/7 emergency response protocols, and domestic staff supervision.
3. **Home & Personal Care:** Domiciliary support, post-hospital surgical reablement, and 24/7 complex live-in care with interactive weekly care level calculator.
4. **The Four Brand Pillars:** Protected Governance, Home Comfort & Shelter, Sustainable Vitality, and Empathetic Hands.
5. **Verified Governance & Leadership:** Real founders (Shiva, Ram, Pramod, Sailaja), 20+ years of collective executive experience, and operational management centers in Hyderabad and Bengaluru.

---

## 2. Integrated 9:16 Vertical Video Suite

All 4 official high-definition recordings are integrated into dedicated luxury mobile device mockup frames with on-demand buffering (`preload="none"`), custom play overlays, and accessible playback modals:

| Section | Video Placement | Original Source File | Web Serving File | Duration | Resolution / Aspect |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Section 2 (Hero)** | Brand Launch Showcase | `sustune care launch video.mp4` | `/videos/sustune-care-launch.mp4` | 22.0s | $2160 \times 3840$ (9:16) |
| **Section 5 (Aegis)** | Property Stewardship | `AEGIS Vid001 dt 14th Oct.mp4` | `/videos/aegis-property-stewardship.mp4` | 38.2s | $2160 \times 3840$ (9:16) |
| **Section 6 (Sparsh)**| Family & Elder Care | `sparsh updated video1.mp4` | `/videos/sparsh-family-care.mp4` | 46.5s | $2160 \times 3840$ (9:16) |
| **Section 8 (Story)** | Unified Narrative Film | `SCIntro  Introduction Video.mp4` | `/videos/sustune-care-introduction.mp4` | 42.9s | $2160 \times 3840$ (9:16) |

*Full technical audit, frame rates, audio bitrates, and accessibility tracks are documented in [`docs/video-integration.md`](docs/video-integration.md).*

---

## 3. Official Brand Palette (Design Tokens)

Conforming strictly to `Sustune Care Brand Guidelines & Stationery Suite Manual.pdf`:

- **Clinical White (`#FFFFFF`) & Cool Mist (`#F1F5F9`)** — 60% Dominant Ground
- **Deep Marine Blue (`#0D3B66`) & Cerulean Flow (`#0073B7`)** — 30% Structural Action & Headers
- **Imperial Gold (`#C99738`), Burnished Bronze (`#8B601C`) & Emerald Vitality (`#0A8754`)** — 10% Prestige Accents
- **Pure Slate Gray (`#1E293B`)** — Typography & High-Contrast Forms

*See [`docs/brand-system.md`](docs/brand-system.md) for complete WCAG 2.2 contrast matrices.*

---

## 4. Getting Started & Local Execution

### Prerequisites
- **Node.js:** v18.17+ or v20+ / v22+
- **npm:** v9+ or v10+

### Setup Commands
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

### Validation & Quality Assurance Commands
```bash
# Type-check TypeScript codebase (zero emit errors)
npm run type-check

# Run production build
npm run build

# Start production server
npm run start
```

---

## 5. Form Handling & Backend Integration

The consultation intake form at `/api/enquiry` provides:
- **Server-Side Validation:** Validates required fields, email formatting, phone numbers, and country codes.
- **NRI Telephony & Timezone Support:** Country code selector (default +91, with US/UK/UAE/AUS support) and preferred callback time zone selector.
- **Anti-Spam Protection:** In-memory rate limiting and invisible bot honeypot detection.
- **Honest Feedback (Operating Rule 4):** Submissions are verified against the server. No artificial success alerts are displayed unless authenticated.
- **Environment Configuration:** Copy `.env.example` to `.env.local` to configure external email providers (Resend, SendGrid, or SMTP).

---

## 6. Project Documentation Index

- [`docs/implementation-audit.md`](docs/implementation-audit.md) — Comprehensive resource inventory, asset audit, and technical stack decisions.
- [`docs/brand-system.md`](docs/brand-system.md) — Authoritative brand manual specification, color science, typography scale, and discrepancy resolutions.
- [`docs/content-review.md`](docs/content-review.md) — Content verification, DPDP Act 2023 legal review, and pending corporate signoffs.
- [`docs/video-integration.md`](docs/video-integration.md) — Complete video property audit, 9:16 mobile frame architecture, and performance analysis.
