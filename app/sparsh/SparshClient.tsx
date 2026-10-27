"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  UserCheck,
  ClipboardCheck,
  PhoneCall,
  Users,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  ArrowRight,
  Clock,
  Sparkles,
  Video,
} from "lucide-react";
import { BackToHome } from "@/components/shared/BackToHome";
import { VideoDeviceCard } from "@/components/VideoDeviceCard";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ServiceCTA } from "@/components/shared/ServiceCTA";
import { VIDEOS } from "@/data/videos";
import { FAQS } from "@/data/faqs";

interface SparshDetailService {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  summary: string;
  details: string[];
  deliverables: string[];
}

const SPARSH_DETAILED_SERVICES: SparshDetailService[] = [
  {
    id: "companions",
    title: "Empathetic Care Companions",
    tagline: "Social Presence & Daily Living Accompaniment",
    iconName: "Heart",
    summary:
      "Language-matched, background-checked companions providing routine check-ins, social engagement, and practical errand support for aging parents.",
    details: [
      "Visits arranged according to your family's schedule (weekly, bi-weekly, or daily).",
      "Companions are matched for regional language fluency (Telugu, Kannada, Hindi) and cultural rapport.",
      "Assistance with recreational outings, temple visits, library trips, and social activities.",
      "Empathetic listening and conversation to actively combat loneliness and emotional isolation.",
    ],
    deliverables: [
      "Language & cultural match guarantee",
      "Post-visit digital status summary",
      "Flexible, no-lock-in visit scheduling",
    ],
  },
  {
    id: "doctor-escorts",
    title: "Doctor Escorts & Health Logs",
    tagline: "Clinical Appointment Escort & Digitized Health Logs",
    iconName: "ClipboardCheck",
    summary:
      "Door-to-door escort to medical consultations, pharmacy fulfillment, and transparent digitized notes delivered directly to NRI sons and daughters.",
    details: [
      "Trained companion arrives at home, assists with transport, and escorts parents into clinic or hospital.",
      "Attends the doctor consultation, records physician instructions, and obtains prescription details.",
      "Coordinates pharmacy fulfillment and verifies medication schedule with designated dosage instructions.",
      "Generates an organized, readable digital consultation summary available for children overseas.",
    ],
    deliverables: [
      "Door-to-door hospital & clinic escort",
      "Digitized physician summary & prescription scan",
      "Medication adherence reminders & pharmacy refill checks",
    ],
  },
  {
    id: "emergency-sops",
    title: "Emergency Response Protocols",
    tagline: "Structured Escalation & Bedside Companion Dispatch",
    iconName: "PhoneCall",
    summary:
      "Documented emergency protocols connecting pre-registered parent profiles with partner hospital networks and immediate on-ground presence.",
    details: [
      "Emergency contact profile established during onboarding, including blood group, medical history, and preferred hospitals.",
      "Pre-mapped emergency ambulance and hospital network dispatch across Hyderabad and Bengaluru.",
      "A vetted Sustune companion dispatches to the hospital to stand bedside until immediate family coordinates.",
      "Direct bridge communication with children abroad, providing objective situational clarity without panic.",
    ],
    deliverables: [
      "Pre-mapped hospital network integration",
      "On-ground bedside companion support",
      "Real-time family communication bridge",
    ],
  },
  {
    id: "help-supervision",
    title: "Domestic Help Supervision",
    tagline: "Screening & Oversight of Household Staff",
    iconName: "Users",
    summary:
      "Screening, attendance management, and operational supervision of cooks, maids, and drivers to alleviate household stress for aging parents.",
    details: [
      "Identity verification and reference checking for domestic workers entering parents' homes.",
      "Establishment of clear task expectations, hygiene standards, and work schedules.",
      "Mediation of disputes or attendance issues to shield parents from stressful confrontation.",
      "Backup coverage coordination when domestic help takes scheduled or unscheduled leave.",
    ],
    deliverables: [
      "Staff identity checks & background screening",
      "Attendance & task adherence oversight",
      "Zero-confrontation mediation for elderly parents",
    ],
  },
];

export const SparshClient: React.FC = () => {
  const sparshVideo = VIDEOS.sparsh;
  const sparshFaqs = FAQS.filter((f) => f.category === "sparsh");
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>("companions");

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <>
      <BackToHome />

      {/* ===== HERO SECTION WITH REAL PHOTO & ORIGINAL PALETTE ===== */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-subtle-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              {/* Left Column: Heading & Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-emerald-light border border-brand-emerald/30 flex items-center justify-center text-brand-emerald font-bold text-xl shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-emerald uppercase tracking-widest block">
                      ELDERLY SUPPORT &amp; FAMILY ASSISTANCE
                    </span>
                    <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-marine tracking-tight">
                      SPARSH Family Care
                    </h1>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                  Compassionate proxy assistance &amp; doctor coordination for aging parents in Hyderabad &amp; Bengaluru. We bridge the anxiety of distance with verified companions who speak their language and honor their dignity.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <Link
                    href="/contact?service=Sparsh%20Family%20Care"
                    className="px-7 py-3.5 rounded-btn bg-brand-emerald hover:bg-brand-emerald-dark text-white font-bold text-xs sm:text-sm shadow-md transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <span>Inquire for Family Care</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#sparsh-video"
                    className="px-6 py-3.5 rounded-btn bg-white border border-slate-200 hover:border-brand-emerald text-slate-700 hover:text-brand-emerald font-semibold text-xs sm:text-sm transition-colors text-center"
                  >
                    Watch Sparsh Film
                  </a>
                </div>

                {/* Scannable Checkmarks */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Language-matched companionship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Doctor accompaniment &amp; health logs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Emergency response protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Domestic help vetting &amp; supervision</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Real Documentary Photograph */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-emerald/30 shadow-xl aspect-[16/10] group">
                  <Image
                    src="/images/sparsh-family-care-hero.jpg"
                    alt="Sparsh Family Care — Compassionate Care Companion Supporting Elderly Indian Parents"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-emerald/90 text-white backdrop-blur-sm">
                      Dignified Bedside Care
                    </span>
                    <p className="text-xs text-slate-200 mt-1 font-medium">
                      Telugu, Kannada &amp; Hindi fluent verified companions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VIDEO SHOWCASE SECTION (ORIGINAL DEVICE FRAME) ===== */}
      <section id="sparsh-video" className="py-20 bg-brand-mist/40 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Video Device Chassis */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full text-center space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-brand-emerald text-[11px] font-bold uppercase tracking-wider border border-brand-emerald/30">
                  <Video className="w-3.5 h-3.5 text-brand-emerald" />
                  <span>Sparsh Family Care Film (46s)</span>
                </div>
                <VideoDeviceCard video={sparshVideo} />
              </div>
            </div>

            {/* Right Column: Narrative & Safeguards */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
                The Sparsh Promise
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-marine tracking-tight">
                Dignified, Culturally Aligned Presence When You Cannot Be There
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Living thousands of miles away shouldn&apos;t mean feeling helpless during parents&apos; routine hospital visits or sudden medical emergencies. Sparsh assigns trained, verified companions who speak their language, understand their habits, and respect their autonomy.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-brand-emerald flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-brand-marine">
                      Multi-Tier Background Vetting
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Every care companion undergoes identity verification, local address checks, and empathy evaluations before meeting your family.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-100 text-brand-cerulean flex items-center justify-center shrink-0">
                    <ClipboardCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-brand-marine">
                      Digital Transparency for Children Overseas
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Receive clear, objective digital notes after every visit and medical appointment so you stay fully informed across time zones.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-brand-gold flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-brand-marine">
                      Rapid Operational Response in Hyderabad &amp; Bengaluru
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      On-ground field teams stationed locally ensure fast coordination for hospital visits, doctor follow-ups, and urgent needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DETAILED SERVICES SECTION WITH READ MORE ===== */}
      <section id="services-detail" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
              Service Specifications
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-marine tracking-tight">
              Documented Sparsh Family Care Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every service is delivered under institutional protocols with real-time reporting to family members abroad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SPARSH_DETAILED_SERVICES.map((srv) => {
              const isExpanded = expandedServiceId === srv.id;
              return (
                <div
                  key={srv.id}
                  className="bg-white rounded-card p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-subtle-card hover:border-brand-emerald/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-brand-emerald uppercase tracking-wider">
                        {srv.tagline}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand-emerald flex items-center justify-center">
                        <Heart className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-brand-marine">
                      {srv.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {srv.summary}
                    </p>

                    {/* Deliverables summary */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {srv.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable "Read More" Detail Drawer */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-100 bg-emerald-50/50 p-4 rounded-xl space-y-3 animate-fadeIn">
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-marine">
                          Service Inclusions &amp; Operational Details:
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-600">
                          {srv.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="text-brand-emerald font-bold mt-0.5">•</span>
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => toggleExpand(srv.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-emerald hover:text-brand-emerald-dark transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? "Hide Details" : "Read More"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <Link
                      href={`/contact?service=${encodeURIComponent("Sparsh: " + srv.title)}`}
                      className="px-4 py-2 rounded-btn bg-slate-100 hover:bg-brand-emerald hover:text-white text-brand-marine text-xs font-bold transition-all"
                    >
                      Enquire for This Service
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SPARSH FAQS SECTION ===== */}
      <section className="py-16 bg-brand-mist/40 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
              Family Care Questions
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-marine tracking-tight">
              Frequently Asked Questions About Sparsh
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear answers regarding emergency turnaround, family transparency, and bundled care arrangements.
            </p>
          </div>

          <FaqAccordion faqs={sparshFaqs} defaultOpenId="faq-1" />
        </div>
      </section>

      {/* ===== ENQUIRY CTA ===== */}
      <ServiceCTA
        serviceName="Sparsh Family Care"
        title="Ready to Support Your Parents with Sparsh?"
        description="Connect with our care coordination team in Hyderabad or Bengaluru to design a personalized support plan for your loved ones."
        variant="emerald"
      />
    </>
  );
};
