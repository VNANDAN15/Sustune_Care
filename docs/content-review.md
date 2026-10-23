# Sustune Care — Content Audit & Compliance Review

**Document Ref:** SC-CR-2026-V1  
**Status:** Active Governance Document  
**Operating Rule Compliance:** Absolute fidelity to verified sources; zero invented claims.  

---

## 1. Verified vs. Unverified Claims Review

| Item / Claim | Source Material | Audit Finding | Implementation Decision |
| :--- | :--- | :--- | :--- |
| **Contact Phone Numbers** | `Sustune_All_Visiting_Cards.pdf` vs. Manual Page 5 | Visiting card contains `+91 89856 34239` (India) and `+1 206 713 6114` (US/WhatsApp). Manual page 5 has illustrative placeholder `+1 (555) 019-2834`. | **Verified:** Use visiting card numbers. The manual phone number is documented as a stationery design placeholder and rejected from production code. |
| **Corporate Email** | Visiting cards & HTML files | Visiting cards use `contact@sustunecare.com`. `sustune_care_single_page_website.html` also mentions `sustunecare@gmail.com`. | **Verified:** Set primary corporate email to `contact@sustunecare.com` across all links and UI. Document Gmail address as legacy routing fallback. |
| **Headquarters & Hubs** | Visiting cards & HTML files | Visiting cards state `Hyderabad, Telangana, India`. HTML files state Hyderabad Principal Office and Bengaluru Operational Hub. | **Verified:** Display Hyderabad as Principal Headquarters and Bengaluru as Operational Hub. Do not invent international street addresses. |
| **Leadership Team** | `sustune_care_single_page_website.html` | Four verified co-founders: **Shiva** (Founder, Chairman & CEO), **Ram** (Principal Co-founder & CBO), **Pramod** (Co-founder & COO), and **Sailaja** (Co-founder & CHRO). | **Verified:** Present exact names and verified executive roles. Flag in section 3 below that full surname biographies require corporate signoff before final publishing. |
| **Dr. Evelyn Vance Profile** | Brand Manual Page 5 | Manual features *"Dr. Evelyn Vance, MD, Chief Medical Officer & Clinical Director"*. | **Unverified (Placeholder):** Documented as an agency template persona for stationery proofs. Not present in visiting cards or operational leadership roster. Excluded from leadership section to prevent false claims. |
| **Registration / ISO / CQC** | Brand Manual Page 6 & `landing_page.html` | Mention of *"Healthcare Registration No: 09841243"*, *"ISO 9001"*, and *"CQC Certified"*. | **Pending Official Verification:** CQC (Care Quality Commission) is a UK statutory regulator, while Sustune Care operates primarily in Hyderabad/Bengaluru, India. These badges are tagged as *"Governance Framework Alignment"* rather than statutory accreditation until legal certificates are deposited. |
| **Customer Testimonials & Statistics** | None supplied in repository | No authenticated customer quotes, review tallies, or verified patient percentages were provided. | **Strictly Omitted:** In accordance with Operating Rule 1, zero synthetic testimonials or arbitrary star ratings are included. Instead, credibility is built on transparent institutional comparison tables, leadership profiles, and verified service workflows. |
| **Video Captions & Transcripts**| `Sustune_videos/` directory | None of the 4 video files contain embedded closed caption tracks or external `.vtt` / `.srt` subtitle files. | **Pending Production Assets:** Accessible `<track kind="captions">` integration points are coded into all video components. Listed as "Captions Pending" in `docs/video-integration.md`. |

---

## 2. Privacy, Consent & Regulatory Compliance (DPDP Act 2023)

### Consent Wording Review
The consultation and inquiry form collects user information (Name, Email, Telephone, Country, Property/Care City, Requirements).

- **Legal Notice:** Consent text explicitly outlines actual data use:
  > *"By submitting this inquiry, you consent to Sustune Care contacting you via phone, email, or WhatsApp regarding your requested services. We never sell or share your personal information with unverified third parties."*
- **Regulatory Requirement:** India's **Digital Personal Data Protection Act, 2023 (DPDP Act)** requires clear notice, specified purpose, and simple withdrawal mechanisms. A formal review by legal counsel must be completed prior to collecting high-volume health intake records.
- **Form Submission Integrity (Operating Rule 4):**
  - The frontend never presents an artificial *"Inquiry Sent Successfully"* banner without an authenticated server response.
  - The server route handler (`/api/enquiry`) validates inputs server-side, logs sanitized records, checks honeypots, and informs the client truthfully whether an email transport was dispatched or logged locally.

---

## 3. Pending Approvals & Integration Points

1. **Leadership Surnames & Portraits:**
   - Source files identify executives by given name (Shiva, Ram, Pramod, Sailaja). High-resolution leadership photographs and complete legal surnames should be provided in Phase 2.
2. **Third-Party Email Credentials:**
   - Environment variables (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `RESEND_API_KEY`) are documented in `.env.example`. Until credentials are provided, submissions are safely captured via local server logs.
3. **Closed Captions (`.vtt`):**
   - Transcripts for the four 9:16 vertical videos should be transcribed and placed in `public/videos/captions/`.
4. **NRI Survey Form Link:**
   - Verified active Google Form link: `https://docs.google.com/forms/d/e/1FAIpQLSdCuTEI5h1hxB0yzlwRM-U_6RDU2JQ-FCXwimKynh4RM0IJzA/viewform` is linked directly with clear external link indicators.
