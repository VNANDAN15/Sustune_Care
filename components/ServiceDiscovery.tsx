"use client";

import React from "react";
import { Building, Heart, Stethoscope, ArrowRight, ShieldCheck, CheckCircle2, Video } from "lucide-react";

interface ServiceDiscoveryProps {
  onSelectService: (service: string) => void;
}

export const ServiceDiscovery: React.FC<ServiceDiscoveryProps> = ({ onSelectService }) => {
  const scrollTo = (targetId: string, serviceName: string) => {
    onSelectService(serviceName);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pathways = [
    {
      id: "aegis",
      title: "Aegis Property Stewardship",
      tagline: "Institutional Real Estate & Asset Protection",
      badge: "Pathway 01 · Real Estate",
      badgeColor: "bg-brand-gold-light text-brand-gold border-brand-gold/30",
      accentBorder: "hover:border-brand-gold hover:shadow-subtle-gold",
      btnBg: "bg-brand-marine hover:bg-slate-800 text-white",
      icon: Building,
      iconColor: "text-brand-gold",
      iconBg: "bg-amber-100",
      summary: "Eliminate remote landlord anxiety with rigorous on-ground vacant plot surveillance, tenant vetting, and transparent video walkthroughs.",
      highlights: [
        "Bi-monthly video inspection walkthroughs",
        "FEMA & RBI compliant rental escrow",
        "Direct police verification & background checks",
      ],
      serviceName: "Aegis Property Stewardship",
    },
    {
      id: "sparsh",
      title: "Sparsh Family & Elder Care",
      tagline: "Empathetic Proxy Healthcare for Aging Parents",
      badge: "Pathway 02 · Family & Healthcare",
      badgeColor: "bg-brand-emerald-light text-brand-emerald border-brand-emerald/30",
      accentBorder: "hover:border-brand-emerald hover:shadow-subtle-emerald",
      btnBg: "bg-brand-emerald hover:bg-brand-emerald-dark text-white",
      icon: Heart,
      iconColor: "text-brand-emerald",
      iconBg: "bg-emerald-100",
      summary: "Compassionate proxy family presence in India. We escort your parents to doctors, coordinate medications, and provide 24/7 emergency SOS support.",
      highlights: [
        "Language-matched, verified care companions",
        "Physician consultation notes direct to app",
        "24/7 dedicated SOS hospital dispatch",
      ],
      serviceName: "Sparsh Family Care",
    },
    {
      id: "home-care",
      title: "Home & Personal Care",
      tagline: "Nurse-Supervised Domiciliary Care Ecosystem",
      badge: "Pathway 03 · Clinical Support",
      badgeColor: "bg-sky-50 text-brand-cerulean border-brand-cerulean/30",
      accentBorder: "hover:border-brand-cerulean hover:shadow-subtle-glow",
      btnBg: "bg-brand-cerulean hover:bg-brand-marine text-white",
      icon: Stethoscope,
      iconColor: "text-brand-cerulean",
      iconBg: "bg-sky-100",
      summary: "Tailored in-home assistance from part-time supported living and post-acute surgical rehabilitation to full 24/7 resident live-in caregivers.",
      highlights: [
        "Registered Nurse (RN) clinical care plans",
        "Post-op rehabilitation & physio support",
        "Zero long-term lock-ins with flexible tiers",
      ],
      serviceName: "Home Care: Domiciliary & Personal Care",
    },
  ];

  return (
    <section id="solutions" className="py-16 sm:py-20 bg-brand-mist/50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-cerulean">
            Unified Service Framework
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-marine tracking-tight">
            Integrated Solutions Across Asset &amp; Family Care
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Eliminating remote friction with transparent digital reporting, verified field staff, and institutional governance.
          </p>
        </div>

        {/* 3 Streamlined Pathway Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pathways.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm transition-all duration-300 flex flex-col justify-between group ${item.accentBorder}`}
              >
                <div className="space-y-5">
                  {/* Badge & Icon Row */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl ${item.iconBg} flex items-center justify-center ${item.iconColor} shadow-inner`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-heading font-bold text-xl text-brand-marine group-hover:text-brand-cerulean transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Concise Summary */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id, item.serviceName)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 ${item.btnBg}`}
                  >
                    <span>Explore Pathway &amp; Film</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
