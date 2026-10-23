"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Home, Leaf, HeartHandshake, CheckCircle2, Award, FileCheck } from "lucide-react";
import { FOUR_BRAND_PILLARS } from "@/data/content";

export const PillarsSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6" />;
      case "Home":
        return <Home className="w-6 h-6" />;
      case "Leaf":
        return <Leaf className="w-6 h-6" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6" />;
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <section id="pillars" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Our Brand Architecture
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-marine tracking-tight">
            The Four Pillars of Sustune Care
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every operation across property stewardship and family healthcare is anchored in the geometric symbiosis of our heraldic emblem.
          </p>
        </div>

        {/* Four Brand Pillars 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUR_BRAND_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className={`p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${pillar.borderColorClass} flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${pillar.colorClass}`}>
                  {getPillarIcon(pillar.iconName)}
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Symbol: {pillar.symbol}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-brand-marine">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] text-slate-500 italic">
                {pillar.meaning}
              </div>
            </div>
          ))}
        </div>

        {/* Heraldic Emblem Geometry & Clinical Governance Deep Dive */}
        <div className="grid lg:grid-cols-12 gap-10 items-center bg-brand-mist/50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          
          {/* Left Emblem Art & Visual Anatomy */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-4">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 drop-shadow-md">
              <Image
                src="/brand/sustune_emblem_standalone.svg"
                alt="Sustune Care Master Heraldic Mark Anatomy"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading font-bold text-base text-brand-marine">
                Master Heraldic Insignia
              </h4>
              <p className="text-xs text-slate-500 max-w-xs">
                Guiding Star · Sheltering Roof · Dynamic Dual loop · Supporting Palms · Protective Shield
              </p>
            </div>
          </div>

          {/* Right Governance & Standards Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cerulean">
                Safety &amp; Compliance Standards
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-marine">
                Clinical Governance That Leaves Nothing to Chance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unlike informal registries or unmonitored local agents, Sustune Care operates under strict supervisory frameworks. Every operational protocol is validated against safety guidelines and transparent reporting trails.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-brand-emerald flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-marine">
                    Continuous Background &amp; Competency Vetting
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Multi-tier reference checks, police identity verification, and hands-on caregiver and steward training.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-brand-emerald flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-marine">
                    Real-Time Electronic Medication &amp; Property Logs
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Digital timestamp verification for visits and medication administration, accessible to family members abroad in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-brand-emerald flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-marine">
                    Zero-Waste &amp; Carbon-Conscious Operational Logistics
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Compostable consumables, 100% FSC-certified print suite, and localized route clustering to reduce vehicle emissions across Hyderabad and Bengaluru.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
