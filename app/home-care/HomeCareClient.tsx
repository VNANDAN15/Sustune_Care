"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope,
  Activity,
  Heart,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Clock,
  Sparkles,
  Award,
} from "lucide-react";
import { BackToHome } from "@/components/shared/BackToHome";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ServiceCTA } from "@/components/shared/ServiceCTA";
import { FAQS } from "@/data/faqs";

interface HomeCareDetailService {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  featured?: boolean;
  summary: string;
  features: string[];
  inclusions: string[];
  deliverables: string[];
  serviceParam: string;
}

const DETAILED_HOME_CARE_SERVICES: HomeCareDetailService[] = [
  {
    id: "domiciliary",
    title: "Domiciliary & Personal Care",
    badge: "Daily Living Support",
    tagline: "Assisted Living in the Comfort of Familiar Home",
    summary:
      "Support with daily morning and evening routines, dignified hygiene care, mobility assistance, medication adherence reminders, and wholesome meal preparation.",
    features: [
      "Morning and evening personal care routines",
      "Medication adherence & digital reminders",
      "Dignified mobility and hygiene support",
      "Nutritious dietary assistance & hydration tracking",
    ],
    inclusions: [
      "Assistance with bathing, grooming, and dressing with unconditional privacy and dignity.",
      "Gentle transfers between bed, chair, and wheelchair to prevent falls or strain.",
      "Timely medication prompts following prescribed dosage instructions.",
      "Light housekeeping of the senior's immediate living area and meal assistance.",
    ],
    deliverables: [
      "Daily personal routine support",
      "Medication adherence tracking",
      "Mobility & fall-prevention assistance",
    ],
    serviceParam: "Home Care: Domiciliary & Personal Care",
  },
  {
    id: "reablement",
    title: "Post-Acute & Reablement",
    badge: "Transitional Recovery",
    featured: true,
    tagline: "Hospital-to-Home Recovery & Rehabilitation Bridge",
    summary:
      "Targeted post-hospital recovery, orthopedic fracture rehabilitation, and transitional support structured to safely restore independence and prevent hospital readmissions.",
    features: [
      "Coordinated physical exercise & recovery schedules",
      "Vitals tracking & clinical observations",
      "Hospital-to-home transitional bridge",
      "Supervised recovery milestone monitoring",
    ],
    inclusions: [
      "Structured recovery plans coordinated with your family doctor or surgeon's discharge notes.",
      "Regular vitals monitoring (blood pressure, blood glucose, oxygen saturation, temperature).",
      "Assistance with prescribed physiotherapy routines and gentle physical reconditioning.",
      "Wound dressing coordination and surgical site observation for early infection prevention.",
    ],
    deliverables: [
      "Discharge-to-home recovery pathway",
      "Daily vitals log direct to children overseas",
      "Assisted mobility & rehabilitation exercise routines",
    ],
    serviceParam: "Home Care: Post-Acute & Reablement",
  },
  {
    id: "live-in",
    title: "Complex Live-In Care",
    badge: "Continuous Assistance",
    tagline: "Dedicated Resident Care Specialist & Supervision",
    summary:
      "Dedicated resident care companionship for seniors with progressive memory care needs, advanced dementia, stroke recovery, or high-dependency mobility limitations.",
    features: [
      "Dedicated resident caregiver pairing",
      "Specialized memory & cognitive engagement",
      "Emergency clinical supervisor escalation",
      "Continuous companionship and nighttime monitoring",
    ],
    inclusions: [
      "A vetted, trained care specialist resides in the home to provide round-the-clock peace of mind.",
      "Specialized memory care routines designed to manage dementia, wander prevention, and sundowning.",
      "Support with nighttime transfers, restroom assistance, and sleep routine maintenance.",
      "Regular check-ins by clinical supervisors to evaluate care plan progress and staff wellness.",
    ],
    deliverables: [
      "Dedicated primary caregiver pairing",
      "Nighttime safety & transfer support",
      "Clinical supervisor escalation protocols",
    ],
    serviceParam: "Home Care: Complex Live-In Care",
  },
];

export const HomeCareClient: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("reablement");
  const homeCareFaqs = FAQS.filter((f) => f.category === "sparsh" || f.category === "governance");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <BackToHome />

      {/* ===== HERO SECTION WITH REAL PHOTO & ORIGINAL PALETTE ===== */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 via-white to-sky-50/40 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-subtle-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cerulean/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              {/* Left Column: Heading & Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-brand-cerulean/30 flex items-center justify-center text-brand-cerulean font-bold text-xl shrink-0">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-cerulean uppercase tracking-widest block">
                      CLINICAL &amp; SUPPORTED LIVING PATHWAYS
                    </span>
                    <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-marine tracking-tight">
                      Home &amp; Personal Care
                    </h1>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                  Targeted in-home assistance designed around personal routines. We integrate clinical safety and rehabilitation into residential homes without disruption across Hyderabad &amp; Bengaluru.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <Link
                    href="/contact?service=Home%20Care%3A%20Domiciliary%20%26%20Personal%20Care"
                    className="px-7 py-3.5 rounded-btn bg-brand-cerulean hover:bg-brand-marine text-white font-bold text-xs sm:text-sm shadow-md transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <span>Request Home Care Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#care-pathways"
                    className="px-6 py-3.5 rounded-btn bg-white border border-slate-200 hover:border-brand-cerulean text-slate-700 hover:text-brand-cerulean font-semibold text-xs sm:text-sm transition-colors text-center"
                  >
                    Explore Care Levels
                  </a>
                </div>

                {/* Scannable Checkmarks */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Domiciliary &amp; personal hygiene care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Post-acute hospital recovery bridge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Continuous live-in care specialist pairing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Supervised individualized care plans</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Real Professional Home Care Photo */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-cerulean/30 shadow-xl aspect-[16/10] group">
                  <Image
                    src="/images/home-care-hero.jpg"
                    alt="Home and Personal Care — Certified Healthcare Practitioner Assisting Senior with Mobility"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-cerulean/90 text-white backdrop-blur-sm">
                      Rehabilitation Bridge
                    </span>
                    <p className="text-xs text-slate-200 mt-1 font-medium">
                      Physiotherapy routines &amp; vitals tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLINICAL GOVERNANCE NOTICE BOX ===== */}
      <section className="py-8 bg-brand-mist/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-brand-cerulean flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <p className="leading-relaxed">
                <strong className="text-brand-marine font-bold">Clinical Governance Standard:</strong> Care plans are structured under operational supervisor oversight, respecting medical discharge instructions and mapped to personal comfort and mobility needs.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-slate-500 font-medium">
              <span>Active in Hyderabad &amp; Bengaluru</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3 CORE CARE PATHWAYS ===== */}
      <section id="care-pathways" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cerulean">
              Care Pathways
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-marine tracking-tight">
              Three Distinct Levels of Residential Support
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every individual requires different degrees of assistance. Choose the pathway that best aligns with your family&apos;s current circumstances.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {DETAILED_HOME_CARE_SERVICES.map((srv) => {
              const isExpanded = expandedId === srv.id;
              return (
                <div
                  key={srv.id}
                  className={`bg-white rounded-card overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                    srv.featured
                      ? "border-brand-gold shadow-md ring-1 ring-brand-gold/40 relative"
                      : "border-slate-200/90 shadow-sm hover:shadow-subtle-card hover:border-brand-cerulean/50"
                  }`}
                >
                  {srv.featured && (
                    <div className="bg-brand-gold text-white text-[10px] font-extrabold uppercase px-3 py-1.5 text-center tracking-wider">
                      HIGH DEMAND TRANSITIONAL PATHWAY
                    </div>
                  )}

                  <div className="p-6 sm:p-8 space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-100 text-brand-marine">
                        {srv.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-cerulean flex items-center justify-center">
                        <Activity className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-xl text-brand-marine">
                        {srv.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 mt-1">
                        {srv.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {srv.summary}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                      {srv.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expandable "Read More" Detail Drawer */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-100 bg-sky-50/50 p-4 rounded-xl space-y-3 animate-fadeIn">
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-marine">
                          Full Plan Specifications:
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-600">
                          {srv.inclusions.map((inc, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2">
                              <span className="text-brand-cerulean font-bold mt-0.5">•</span>
                              <span className="leading-relaxed">{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-8 pt-0 space-y-3 border-t border-slate-100 mt-auto">
                    <div className="flex items-center justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => toggleExpand(srv.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cerulean hover:text-brand-marine transition-colors"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "Hide Details" : "Read More"}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <span className="text-[10px] text-slate-400 font-medium">
                        Hyderabad &amp; Bengaluru
                      </span>
                    </div>

                    <Link
                      href={`/contact?service=${encodeURIComponent(srv.serviceParam)}`}
                      className={`w-full py-3 px-4 rounded-btn text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 ${
                        srv.featured
                          ? "bg-brand-cerulean hover:bg-brand-marine text-white"
                          : "bg-slate-100 hover:bg-brand-cerulean hover:text-white text-brand-marine"
                      }`}
                    >
                      <span>Inquire This Care Level</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOME CARE FAQS ===== */}
      <section className="py-16 bg-brand-mist/40 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cerulean">
              Care Guidance
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-marine tracking-tight">
              Frequently Asked Questions About Home Care
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Details on turnaround times, caregiver supervision, and care plan customizability.
            </p>
          </div>

          <FaqAccordion faqs={homeCareFaqs} defaultOpenId="faq-1" />
        </div>
      </section>

      {/* ===== ENQUIRY CTA ===== */}
      <ServiceCTA
        serviceName="Home & Personal Care"
        title="Discuss Your Home Care Requirements"
        description="Our clinical operations team will evaluate your family's specific needs and propose an individualized care arrangement."
        variant="cerulean"
      />
    </>
  );
};
