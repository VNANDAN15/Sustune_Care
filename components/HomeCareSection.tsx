"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { HOME_CARE_SERVICES } from "@/data/content";

interface HomeCareSectionProps {
  onSelectService: (service: string) => void;
}

export const HomeCareSection: React.FC<HomeCareSectionProps> = ({ onSelectService }) => {
  const handleInquirePlan = (serviceName: string) => {
    onSelectService(serviceName);
    const formElement = document.getElementById("contact");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home-care" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cerulean">
              Clinical &amp; Supported Living Pathways
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-marine tracking-tight">
              Home &amp; Personal Care Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Targeted assistance designed around personal routines. We integrate clinical safety into residential homes without disruption.
            </p>
          </div>

          <div className="text-xs text-slate-500 max-w-sm">
            <span className="font-bold text-brand-marine">Clinical Note:</span> Care plans are structured under registered nurse supervision and mapped to individual mobility and comfort requirements.
          </div>
        </div>

        {/* 3 Core Clinical Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {HOME_CARE_SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden border flex flex-col justify-between transition-all duration-200 ${
                srv.featured
                  ? "bg-white border-brand-gold shadow-lg ring-1 ring-brand-gold/30 relative"
                  : "bg-white border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {srv.featured && (
                <div className="bg-brand-gold text-white text-[10px] font-extrabold uppercase px-3 py-1 text-center tracking-wider">
                  HIGH DEMAND CLINICAL PATHWAY
                </div>
              )}

              <div className="p-6 sm:p-7 space-y-4">
                <div className="inline-block px-2.5 py-1 rounded text-[11px] font-bold tracking-wide uppercase bg-slate-100 text-brand-marine">
                  {srv.badge}
                </div>

                <h3 className="font-heading font-bold text-xl text-brand-marine">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {srv.description}
                </p>

                <ul className="text-xs text-slate-700 space-y-2.5 pt-3 border-t border-slate-100">
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <button
                  onClick={() => handleInquirePlan(srv.defaultService)}
                  className={`w-full py-3 px-4 text-xs font-bold rounded-btn transition-colors flex items-center justify-center gap-2 ${
                    srv.featured
                      ? "bg-brand-gold hover:bg-brand-bronze text-white shadow-sm"
                      : "bg-white border border-brand-cerulean text-brand-cerulean hover:bg-brand-cerulean hover:text-white"
                  }`}
                >
                  <span>{srv.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
