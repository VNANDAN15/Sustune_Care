export interface ServicePillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  features: string[];
}

export interface BrandPillar {
  id: string;
  title: string;
  symbol: string;
  meaning: string;
  description: string;
  iconName: string;
  colorClass: string;
  borderColorClass: string;
}

export interface Leader {
  name: string;
  initial: string;
  role: string;
  focus: string;
  description: string;
}

export interface TrustComparisonRow {
  pillar: string;
  sustune: string;
  brokers: string;
  relatives: string;
}

export const BRAND_INFO = {
  name: "Sustune Care",
  legalName: "Sustune Care Private Limited",
  tagline: "Protected Care. Sustained Dignity.",
  subTagline: "Institutional Asset Stewardship & Family Care for Global Indians",
  domain: "www.sustunecare.com",
  phone: "+91 89856 34239",
  phoneDisplay: "+91 89856 34239",
  whatsapp: "+91 89856 34239",
  whatsappDisplay: "+91 89856 34239",
  email: "contact@sustunecare.com",
  secondaryEmail: "sustunecare@gmail.com",
  headquarters: "Hyderabad, Telangana, India",
  regionalHub: "Bengaluru, Karnataka, India",
  experienceTagline: "Executive Team with 20+ Years of Professional Experience",
  nriSurveyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdCuTEI5h1hxB0yzlwRM-U_6RDU2JQ-FCXwimKynh4RM0IJzA/viewform",
};

export const FOUR_BRAND_PILLARS: BrandPillar[] = [
  {
    id: "governance",
    title: "Protected Governance",
    symbol: "Outer Heraldic Shield",
    meaning: "Architectural safety, patient security, and clinical compliance.",
    description: "Multi-tier police verification, legally binding Pvt Ltd SLAs, and continuous quality audits.",
    iconName: "ShieldCheck",
    colorClass: "text-brand-gold bg-brand-gold-light",
    borderColorClass: "hover:border-brand-gold/60",
  },
  {
    id: "shelter",
    title: "Home Comfort & Shelter",
    symbol: "Sheltering Gable & 4-Pane Grid",
    meaning: "Residential preservation and domestic comfort.",
    description: "Preserving familiar home routines with dignified proxy care delivered directly at your residence.",
    iconName: "Home",
    colorClass: "text-brand-cerulean bg-sky-50",
    borderColorClass: "hover:border-brand-cerulean/60",
  },
  {
    id: "vitality",
    title: "Sustainable Vitality",
    symbol: "Fluid Dual-Loop 'S' Ribbon",
    meaning: "Continuous recovery and environmental stewardship.",
    description: "Zero single-use waste protocols, green route logistics, and active recovery milestones.",
    iconName: "Leaf",
    colorClass: "text-brand-emerald bg-brand-emerald-light",
    borderColorClass: "hover:border-brand-emerald/60",
  },
  {
    id: "empathy",
    title: "Empathetic Hands",
    symbol: "Foundational Supporting Palms",
    meaning: "Direct bedside warmth and unconditional dignity.",
    description: "Culturally aligned companions selected for emotional warmth, active listening, and human dignity.",
    iconName: "HeartHandshake",
    colorClass: "text-brand-marine bg-slate-100",
    borderColorClass: "hover:border-brand-marine/60",
  },
];

export const AEGIS_SERVICES = [
  {
    title: "Tenant Scouting & Screening",
    description: "Police-verified background checks, lease agreements, and reliable tenant management.",
    iconName: "UserCheck",
  },
  {
    title: "Vacant Asset Guardianship",
    description: "Perimeter security checks, routine ventilation, key custody, and encroachment prevention.",
    iconName: "ShieldAlert",
  },
  {
    title: "Remittance & Tax Management",
    description: "FEMA-compliant rental deposits into NRE/NRO accounts and municipal tax payments.",
    iconName: "FileCheck2",
  },
  {
    title: "Inspection & Structural Upkeep",
    description: "HD video walkthrough audits, plumbing/electrical repairs, and renovation oversight.",
    iconName: "Wrench",
  },
];

export const SPARSH_SERVICES = [
  {
    title: "Empathetic Care Companions",
    description: "Language-matched companions for routine check-ins, social interaction, and errand support.",
    iconName: "UserHeart",
  },
  {
    title: "Doctor Escorts & Health Logs",
    description: "Hospital accompaniment, pharmacy refills, and real-time digitized medical logs for NRI children.",
    iconName: "ClipboardCheck",
  },
  {
    title: "24/7 Emergency SOP Response",
    description: "Hospital network escalation protocols with fast on-ground companion dispatch.",
    iconName: "PhoneCall",
  },
  {
    title: "Domestic Help Supervision",
    description: "Screening and managing cooks, drivers, and maids to ease parents' daily household burden.",
    iconName: "Users",
  },
];

export const HOME_CARE_SERVICES = [
  {
    title: "Domiciliary & Personal Care",
    badge: "Daily Living",
    description: "Support with daily routines, hygiene, mobility assistance, medication adherence reminders, and nutritious meal preparation.",
    features: [
      "Morning and evening personal care routines",
      "Medication adherence & digital reminders",
      "Dignified mobility and hygiene support",
    ],
    cta: "Inquire Personal Care",
    defaultService: "Home Care: Domiciliary & Personal Care",
  },
  {
    title: "Post-Acute & Reablement",
    badge: "Specialized",
    featured: true,
    description: "Targeted post-hospital recovery, fracture rehabilitation, and transitional support to restore independence and prevent hospital readmissions.",
    features: [
      "Coordinated physical exercise schedules",
      "Vitals tracking & clinical observations",
      "Hospital-to-home transitional bridge",
    ],
    cta: "Inquire Reablement",
    defaultService: "Home Care: Post-Acute & Reablement",
  },
  {
    title: "Complex Live-In Care",
    badge: "24/7 Support",
    description: "Round-the-clock dedicated clinical companionship for progressive memory care, advanced dementia, or high-dependency mobility needs.",
    features: [
      "Dedicated resident caregiver pairing",
      "Specialized memory & cognitive engagement",
      "24/7 clinical supervisor escalation",
    ],
    cta: "Inquire Live-In Support",
    defaultService: "Home Care: Complex Live-In Care",
  },
];

export const CARE_LEVEL_OPTIONS = {
  companion: {
    key: "companion",
    title: "Supported Living & Companionship",
    hours: "10 – 20 Hours / Week",
    description: "Ideal for independent older adults who benefit from meal support, medication prompts, escort to temple/doctors, and active social interaction.",
    features: [
      "Language-matched certified support companion",
      "Bi-weekly digital health and wellness log",
      "Flexible schedule with no long-term lock-in",
    ],
    defaultService: "Sparsh Family Care",
  },
  rehab: {
    key: "rehab",
    title: "Post-Acute Reablement & Therapy Bridge",
    hours: "25 – 40 Hours / Week",
    description: "Structured transitional care following surgical discharge or orthopedic treatment. Focuses on physical reconditioning and vitals monitoring.",
    features: [
      "Clinical nurse triage check-ins",
      "Physiotherapy and mobility routine coordination",
      "Continuous vitals and recovery milestone tracking",
    ],
    defaultService: "Home Care: Post-Acute & Reablement",
  },
  livein: {
    key: "livein",
    title: "24/7 Dedicated Live-In Care",
    hours: "Continuous Round-the-Clock",
    description: "A vetted, dedicated resident care specialist staying in the home to provide constant security for seniors with advanced dementia or limited mobility.",
    features: [
      "Dedicated primary caregiver pairing",
      "24/7 on-call emergency escalation protocol",
      "Comprehensive domestic and personal care management",
    ],
    defaultService: "Home Care: Complex Live-In Care",
  },
};

export const LEADERSHIP_TEAM: Leader[] = [
  {
    name: "Shiva",
    initial: "S",
    role: "Founder, Chairman & CEO",
    focus: "Global Vision & Diaspora Relations",
    description: "Directs international engagement across US, UK, and Australian NRI communities, leading investor relations and corporate governance.",
  },
  {
    name: "Ram",
    initial: "R",
    role: "Principal Co-founder & CBO",
    focus: "Commercial Growth & Remittances",
    description: "Oversees business development, institutional partnerships, and FEMA-compliant cross-border financial remittance frameworks.",
  },
  {
    name: "Pramod",
    initial: "P",
    role: "Co-founder & COO",
    focus: "Ground SLA Operations",
    description: "Directs city field operations in Hyderabad and Bengaluru, managing property stewards, care companions, and vendor networks.",
  },
  {
    name: "Sailaja",
    initial: "S",
    role: "Co-founder & CHRO",
    focus: "People & Empathy Standards",
    description: "Spearheads recruitment, multi-tier background vetting, caregiver empathy training, and client experience quality control.",
  },
];

export const TRUST_COMPARISON_DATA: TrustComparisonRow[] = [
  {
    pillar: "Legal Accountability",
    sustune: "Pvt Ltd Registered Entity with legally binding SLA contracts",
    brokers: "Informal verbal promises with zero enforceable recourse",
    relatives: "Social friction, guilt, and no contractual obligation",
  },
  {
    pillar: "Background Vetting",
    sustune: "Multi-tier police verification, ID check, and practical competency tests",
    brokers: "Unvetted freelance workers with zero screening",
    relatives: "Unregulated personal referrals based on word-of-mouth",
  },
  {
    pillar: "Digital Reporting",
    sustune: "24/7 NRI Client Portal, HD photo/video audits & electronic logs",
    brokers: "Ad-hoc, inconsistent phone calls and vague text updates",
    relatives: "Occasional awkward updates; fear of burdening family",
  },
  {
    pillar: "Emergency Medical SOP",
    sustune: "Pre-mapped hospital network protocol with guaranteed ground dispatch",
    brokers: "Not offered",
    relatives: "Constrained by personal schedule, traffic, or location",
  },
  {
    pillar: "Financial Compliance",
    sustune: "FEMA & RBI NRE/NRO banking trails, GST invoices, and transparent escrow",
    brokers: "Cash-based transactions with hidden commissions and opaque charges",
    relatives: "Uncomfortable financial reconciliations and delayed reimbursements",
  },
];
