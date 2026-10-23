"use client";

import React from "react";
import { CheckCircle2, XCircle, AlertTriangle, ShieldCheck } from "lucide-react";
import { TRUST_COMPARISON_DATA } from "@/data/content";

export const WhyUsTable: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-marine">
            Institutional Standard
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-marine tracking-tight">
            Why Sustune Care Outperforms Informal Alternatives
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Compare institutional corporate accountability with informal brokers or burdened local relatives.
          </p>
        </div>

        {/* Responsive Comparison Table Container */}
        <div className="overflow-x-auto rounded-3xl shadow-subtle-card border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-brand-marine text-white">
                <th scope="col" className="py-5 px-6 font-heading font-bold text-sm w-1/4">
                  Key Evaluation Pillars
                </th>
                <th scope="col" className="py-5 px-6 font-heading font-bold text-sm text-brand-gold uppercase tracking-wider bg-slate-900/60 w-1/3">
                  Sustune Care (Institutional)
                </th>
                <th scope="col" className="py-5 px-6 font-heading font-bold text-sm text-slate-300 w-1/5">
                  Local Brokers &amp; Agents
                </th>
                <th scope="col" className="py-5 px-6 font-heading font-bold text-sm text-slate-300 w-1/5">
                  Friends &amp; Relatives
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {TRUST_COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-4 px-6 font-heading font-bold text-slate-800 text-xs sm:text-sm">
                    {row.pillar}
                  </td>
                  <td className="py-4 px-6 font-semibold text-brand-emerald bg-emerald-50/40 text-xs sm:text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>{row.sustune}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-xs">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.brokers}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-xs">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{row.relatives}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
