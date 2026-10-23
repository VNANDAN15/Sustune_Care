"use client";

import React, { useState } from "react";
import { Building, Heart, Stethoscope, ArrowRight, CheckCircle2, ShieldCheck, UserCheck, PhoneCall } from "lucide-react";

interface ServiceDiscoveryProps {
  onSelectService: (service: string) => void;
}

export const ServiceDiscovery: React.FC<ServiceDiscoveryProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<"aegis" | "sparsh" | "homeCare">("aegis");

  const handlePathwaySelect = (serviceName: string, targetId: string) => {
    onSelectService(serviceName);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInquiryJump = (serviceName: string) => {
    onSelectService(serviceName);
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="solutions" className="py-20 bg-brand-mist/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-cerulean">
            Unified Service Discovery
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-marine tracking-tight">
            Integrated Support Across Asset &amp; Family Needs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Eliminating the friction of remote management with transparent digital reporting, verified field staff, and institutional governance. Choose a pathway tailored to your family&apos;s exact requirements.
          </p>
        </div>

        {/* Interactive Tab Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10" role="tablist" aria-label="Service Pathways">
          
          <button
            role="tab"
            aria-selected={activeTab === "aegis"}
            aria-controls="panel-aegis"
            id="tab-aegis"
            onClick={() => setActiveTab("aegis")}
            className={`p-4 rounded-xl text-left border transition-all duration-200 flex items-center gap-3.5 ${
              activeTab === "aegis"
                ? "bg-white border-brand-gold shadow-md ring-2 ring-brand-gold/20"
                : "bg-white/60 border-slate-200 hover:bg-white text-slate-700"
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
              activeTab === "aegis" ? "bg-brand-gold-light text-brand-gold" : "bg-slate-100 text-slate-500"
            }`}>
              <Building className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-gold">Pathway 01</div>
              <div className="font-heading font-bold text-sm text-brand-marine">Aegis Property</div>
            </div>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === "sparsh"}
            aria-controls="panel-sparsh"
            id="tab-sparsh"
            onClick={() => setActiveTab("sparsh")}
            className={`p-4 rounded-xl text-left border transition-all duration-200 flex items-center gap-3.5 ${
              activeTab === "sparsh"
                ? "bg-white border-brand-emerald shadow-md ring-2 ring-brand-emerald/20"
                : "bg-white/60 border-slate-200 hover:bg-white text-slate-700"
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
              activeTab === "sparsh" ? "bg-brand-emerald-light text-brand-emerald" : "bg-slate-100 text-slate-500"
            }`}>
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-emerald">Pathway 02</div>
              <div className="font-heading font-bold text-sm text-brand-marine">Sparsh Family Care</div>
            </div>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === "homeCare"}
            aria-controls="panel-homeCare"
            id="tab-homeCare"
            onClick={() => setActiveTab("homeCare")}
            className={`p-4 rounded-xl text-left border transition-all duration-200 flex items-center gap-3.5 ${
              activeTab === "homeCare"
                ? "bg-white border-brand-cerulean shadow-md ring-2 ring-brand-cerulean/20"
                : "bg-white/60 border-slate-200 hover:bg-white text-slate-700"
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
              activeTab === "homeCare" ? "bg-sky-50 text-brand-cerulean" : "bg-slate-100 text-slate-500"
            }`}>
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-cerulean">Pathway 03</div>
              <div className="font-heading font-bold text-sm text-brand-marine">Home &amp; Personal Care</div>
            </div>
          </button>

        </div>

        {/* Dynamic Service Pathway Content Panel */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-subtle-card max-w-5xl mx-auto">
          
          {/* Pathway 1: Aegis Property Stewardship */}
          {activeTab === "aegis" && (
            <div id="panel-aegis" role="tabpanel" aria-labelledby="tab-aegis" className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                    Real Estate &amp; Asset Protection
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-brand-marine">
                    Aegis Property Stewardship
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Who it is for: <strong>Non-Resident Indian (NRI) property owners</strong> with vacant land, villas, or tenanted apartments in Hyderabad &amp; Bengaluru.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handlePathwaySelect("Aegis Property Stewardship", "aegis")}
                    className="px-4 py-2 text-xs font-bold text-brand-marine border border-slate-300 rounded-btn hover:bg-slate-50 transition-colors"
                  >
                    View Section &amp; Film
                  </button>
                  <button
                    onClick={() => handleInquiryJump("Aegis Property Stewardship")}
                    className="px-5 py-2 text-xs font-bold text-white bg-brand-marine hover:bg-slate-800 rounded-btn transition-colors"
                  >
                    Inquire for Property
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-brand-marine flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    <span>What it includes</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tenant vetting &amp; police checks, vacant plot boundary surveillance, key custody, FEMA-compliant rent deposits into NRE/NRO accounts, and HD video walkthrough audits.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-brand-marine flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-brand-gold" />
                    <span>How it works</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A dedicated ground steward conducts structured bi-monthly visits, verifies maintenance requirements, and uploads tamper-proof digital logs to your NRI portal.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-brand-marine flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-gold" />
                    <span>What to do next</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit your property details via our consultation form to receive a structured stewardship proposal with clear SLA timelines.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Pathway 2: Sparsh Family Care */}
          {activeTab === "sparsh" && (
            <div id="panel-sparsh" role="tabpanel" aria-labelledby="tab-sparsh" className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
                    Elderly Support &amp; Healthcare Assistance
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-brand-marine">
                    Sparsh Family Care
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Who it is for: <strong>Sons and daughters living abroad or in other cities</strong> needing dependable, compassionate local assistance for aging parents.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handlePathwaySelect("Sparsh Family Care", "sparsh")}
                    className="px-4 py-2 text-xs font-bold text-brand-marine border border-slate-300 rounded-btn hover:bg-slate-50 transition-colors"
                  >
                    View Section &amp; Film
                  </button>
                  <button
                    onClick={() => handleInquiryJump("Sparsh Family Care")}
                    className="px-5 py-2 text-xs font-bold text-white bg-brand-emerald hover:bg-brand-emerald-dark rounded-btn transition-colors"
                  >
                    Inquire for Family Care
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-brand-marine flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                    <span>What it includes</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Language-matched care companions, hospital escort &amp; doctor appointment coordination, prescription refills, domestic staff vetting, and 24/7 emergency response protocols.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-brand-marine flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-brand-emerald" />
                    <span>How it works</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A dedicated companion visits regularly, builds trust, manages errands, and logs health check summaries for family members via secure real-time reports.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-brand-marine flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-emerald" />
                    <span>What to do next</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Schedule a family discovery call to discuss parental medical routines, preferred language, and visit frequency in Hyderabad or Bengaluru.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Pathway 3: Home & Personal Care */}
          {activeTab === "homeCare" && (
            <div id="panel-homeCare" role="tabpanel" aria-labelledby="tab-homeCare" className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-cerulean">
                    Clinical Domiciliary &amp; Supported Living
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-brand-marine">
                    Home &amp; Personal Care
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Who it is for: <strong>Individuals recovering from surgery or illness</strong>, or older adults requiring daily living hygiene, mobility aid, or complex live-in care.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handlePathwaySelect("Home Care: Domiciliary & Personal Care", "home-care")}
                    className="px-4 py-2 text-xs font-bold text-brand-marine border border-slate-300 rounded-btn hover:bg-slate-50 transition-colors"
                  >
                    View Section &amp; Calculator
                  </button>
                  <button
                    onClick={() => handleInquiryJump("Home Care: Domiciliary & Personal Care")}
                    className="px-5 py-2 text-xs font-bold text-white bg-brand-cerulean hover:bg-brand-marine rounded-btn transition-colors"
                  >
                    Request Care Assessment
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-brand-marine flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-cerulean" />
                    <span>What it includes</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Personal hygiene &amp; mobility assistance, post-hospital reablement, physiotherapy routine coordination, electronic medication administration logs, and 24-hour live-in support.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-brand-marine flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-brand-cerulean" />
                    <span>How it works</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A registered nursing supervisor conducts an intake assessment, develops an individualized care plan, and assigns certified carers with continuous oversight.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-brand-marine flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-cerulean" />
                    <span>What to do next</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Use our interactive care level selector below to estimate weekly support hours, or request a confidential in-home clinical triage consultation.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
