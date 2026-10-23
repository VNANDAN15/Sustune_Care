"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

interface CareSelectorSectionProps {
  onSelectService: (service: string) => void;
}

const CARE_OPTIONS = {
  companion: {
    key: "companion",
    title: "Standard Supported Living Package",
    hours: "10 – 20 Hours / Week",
    desc: "Ideal for older adults desiring to remain safe at home with meal prep, medicine prompts, transport to appointments, and daily social wellness.",
    features: [
      "Certified Support Worker",
      "Bi-weekly clinical log",
      "Zero long-term lock-in",
    ],
    defaultService: "Home Care: Domiciliary & Personal Care",
  },
  rehab: {
    key: "rehab",
    title: "Post-Acute Hospital Reablement Program",
    hours: "25 – 40 Hours / Week",
    desc: "Structured transitional care following surgical procedures or fractures. Focuses on physical reconditioning, wound inspection, and reducing hospital re-admission risk.",
    features: [
      "Clinical RN Oversight",
      "Coordinated Physio Exercise",
      "Medication Titration",
    ],
    defaultService: "Home Care: Post-Acute & Reablement",
  },
  livein: {
    key: "livein",
    title: "24/7 Dedicated Live-In Sanctuary Care",
    hours: "Continuous Round-The-Clock",
    desc: "A carefully matched resident care specialist residing in the home. Provides constant peace of mind for clients with advanced dementia or significant mobility needs.",
    features: [
      "Dedicated Caregiver Pair",
      "24/7 On-Call Escalation",
      "Full Domestic & Health Support",
    ],
    defaultService: "Home Care: Complex Live-In Care",
  },
};

export const CareSelectorSection: React.FC<CareSelectorSectionProps> = ({ onSelectService }) => {
  const [selectedKey, setSelectedKey] = useState<"companion" | "rehab" | "livein">("companion");

  const currentOption = CARE_OPTIONS[selectedKey];

  const handleRequestProposal = () => {
    onSelectService(currentOption.defaultService);
    const formElement = document.getElementById("contact");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="care-selector" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-brand-marine rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          
          {/* Subtle Heraldic Emblem Watermark in background */}
          <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none w-72 h-72">
            <Image
              src="/brand/sustune_emblem_standalone.svg"
              alt=""
              width={288}
              height={288}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Section Header */}
          <div className="max-w-2xl space-y-3 mb-8 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Self-Assessment Tool
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl tracking-tight text-white">
              Calculate Recommended Care Level
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Select the primary scenario to view recommended weekly coverage hours and service structure.
            </p>
          </div>

          {/* Interactive Scenario Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 relative z-10" role="tablist" aria-label="Care Calculator Scenarios">
            <button
              role="tab"
              aria-selected={selectedKey === "companion"}
              onClick={() => setSelectedKey("companion")}
              className={`py-3.5 px-4 rounded-xl text-left text-xs font-semibold transition-all border ${
                selectedKey === "companion"
                  ? "border-brand-gold bg-white/20 text-white shadow-md ring-1 ring-brand-gold"
                  : "bg-white/10 hover:bg-white/15 border-white/10 text-slate-300"
              }`}
            >
              1. Companionship &amp; Chores
            </button>

            <button
              role="tab"
              aria-selected={selectedKey === "rehab"}
              onClick={() => setSelectedKey("rehab")}
              className={`py-3.5 px-4 rounded-xl text-left text-xs font-semibold transition-all border ${
                selectedKey === "rehab"
                  ? "border-brand-gold bg-white/20 text-white shadow-md ring-1 ring-brand-gold"
                  : "bg-white/10 hover:bg-white/15 border-white/10 text-slate-300"
              }`}
            >
              2. Post-Hospital Rehab
            </button>

            <button
              role="tab"
              aria-selected={selectedKey === "livein"}
              onClick={() => setSelectedKey("livein")}
              className={`py-3.5 px-4 rounded-xl text-left text-xs font-semibold transition-all border ${
                selectedKey === "livein"
                  ? "border-brand-gold bg-white/20 text-white shadow-md ring-1 ring-brand-gold"
                  : "bg-white/10 hover:bg-white/15 border-white/10 text-slate-300"
              }`}
            >
              3. Round-The-Clock Support
            </button>
          </div>

          {/* Dynamic Output Box */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 space-y-5 relative z-10">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-white/10 pb-5">
              <div>
                <span className="text-xs text-brand-gold uppercase font-bold tracking-wider">
                  Recommended Pathway
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-0.5">
                  {currentOption.title}
                </h3>
              </div>
              <div className="sm:text-right">
                <span className="text-xs text-slate-300">Target Coverage:</span>
                <div className="text-base sm:text-lg font-heading font-extrabold text-white flex items-center sm:justify-end gap-1.5 mt-0.5">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span>{currentOption.hours}</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {currentOption.desc}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1.5 sm:space-y-0 sm:space-x-4 text-xs text-slate-300 flex flex-col sm:flex-row">
                {currentOption.features.map((feat, idx) => (
                  <span key={idx} className="flex items-center gap-1.5">
                    <span className="text-brand-gold">•</span>
                    <span>{feat}</span>
                  </span>
                ))}
              </div>

              <button
                onClick={handleRequestProposal}
                className="px-6 py-3 text-xs font-bold bg-brand-gold hover:bg-amber-400 text-brand-marine rounded-btn shadow-md transition-all shrink-0 flex items-center gap-2"
              >
                <span>Request Detailed Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
