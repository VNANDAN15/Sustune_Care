"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, ChevronDown } from "lucide-react";
import { FAQS, FaqItem } from "@/data/faqs";

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [filter, setFilter] = useState<"all" | "aegis" | "sparsh" | "governance">("all");

  const filteredFaqs = filter === "all" ? FAQS : FAQS.filter((f) => f.category === filter);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-brand-mist/40 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cerulean">
            Clarity &amp; Reassurance
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-marine tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Answers to common questions regarding property stewardship, parental care coordination, and compliance.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="FAQ Categories">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === "all"
                ? "bg-brand-marine text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Questions ({FAQS.length})
          </button>
          <button
            onClick={() => setFilter("aegis")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === "aegis"
                ? "bg-brand-gold text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Aegis Property
          </button>
          <button
            onClick={() => setFilter("sparsh")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === "sparsh"
                ? "bg-brand-emerald text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Sparsh &amp; Family Care
          </button>
          <button
            onClick={() => setFilter("governance")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === "governance"
                ? "bg-brand-cerulean text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Governance &amp; Staffing
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-brand-gold/60 shadow-sm ring-1 ring-brand-gold/20" : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 font-heading font-bold text-sm text-brand-marine flex justify-between items-center gap-4 focus:outline-none focus:ring-2 focus:ring-brand-cerulean rounded-xl"
                >
                  <span className="flex-1">{faq.question}</span>
                  <span className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-brand-marine">
                    {isOpen ? <Minus className="w-4 h-4 text-brand-gold" /> : <Plus className="w-4 h-4 text-slate-500" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
