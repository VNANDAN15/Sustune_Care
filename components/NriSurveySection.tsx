"use client";

import React from "react";
import { ClipboardList, ExternalLink, Clock, Shield } from "lucide-react";
import { BRAND_INFO } from "@/data/content";

export const NriSurveySection: React.FC = () => {
  return (
    <section id="survey" className="py-16 bg-gradient-to-r from-brand-marine via-slate-900 to-brand-marine text-white relative overflow-hidden border-b border-brand-gold/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-slate-800/80 rounded-3xl p-8 sm:p-12 border border-slate-700/80 shadow-2xl backdrop-blur-md">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider border border-brand-gold/30">
                <ClipboardList className="w-3.5 h-3.5" />
                <span>NRI Pulse Research</span>
              </span>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Help Us Tailor Services for Your City Back Home
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Managing physical real estate and caring for aging parents thousands of miles away is one of the hardest challenges for the Global Indian diaspora. Take our brief 2-minute survey to shape our operational expansion in Hyderabad &amp; Bengaluru.
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span>Takes 2 Minutes</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-brand-emerald" />
                  <span>100% Confidential</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-2">
              <a
                href={BRAND_INFO.nriSurveyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-btn bg-brand-emerald hover:bg-brand-emerald-dark text-white font-bold text-sm text-center shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Complete 2-Min Survey</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-[11px] text-slate-400 text-center lg:text-right">
                Opens official Sustune Care Google Form
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
