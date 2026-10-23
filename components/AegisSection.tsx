"use client";

import React from "react";
import { Building, ShieldCheck, UserCheck, Key, FileCheck2, Wrench, ArrowRight, Video } from "lucide-react";
import { AEGIS_SERVICES } from "@/data/content";
import { VIDEOS, VideoConfig } from "@/data/videos";
import { VideoDeviceCard } from "./VideoDeviceCard";

interface AegisSectionProps {
  onSelectService: (service: string) => void;
  onOpenVideoModal: (video: VideoConfig) => void;
}

export const AegisSection: React.FC<AegisSectionProps> = ({ onSelectService, onOpenVideoModal }) => {
  const aegisVid = VIDEOS.aegis;

  const handleInquire = () => {
    onSelectService("Aegis Property Stewardship");
    const formElement = document.getElementById("contact");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "UserCheck":
        return <UserCheck className="w-5 h-5 text-brand-gold" />;
      case "ShieldAlert":
        return <Key className="w-5 h-5 text-brand-gold" />;
      case "FileCheck2":
        return <FileCheck2 className="w-5 h-5 text-brand-gold" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-brand-gold" />;
      default:
        return <Building className="w-5 h-5 text-brand-gold" />;
    }
  };

  return (
    <section id="aegis" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Container Card */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-amber-50/30 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-subtle-card relative overflow-hidden">
          
          {/* Subtle Decorative Background Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-slate-200 gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold-light border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold text-2xl shrink-0">
                <Building className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
                  Real Estate &amp; Asset Protection
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-marine tracking-tight">
                  AEGIS Property Stewardship
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Dedicated NRI Real Estate Guardianship in Hyderabad &amp; Bengaluru
                </p>
              </div>
            </div>

            <button
              onClick={handleInquire}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn bg-brand-marine hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-colors shrink-0"
            >
              <span>Inquire for Property Stewardship</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Main Content Grid: Video Panel + Service Cards */}
          <div className="grid lg:grid-cols-12 gap-10 mt-10 items-center">
            
            {/* Left Media Panel: Video A (Aegis Property Video) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full text-center space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-brand-bronze text-[11px] font-bold uppercase tracking-wider">
                  <Video className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Aegis Stewardship Film (38s)</span>
                </div>
                <VideoDeviceCard
                  video={aegisVid}
                  onOpenModal={onOpenVideoModal}
                />
              </div>
            </div>

            {/* Right Information & 4 Service Offerings */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-xl text-brand-marine">
                  Eliminating the Anxiety of Remote Indian Landlordship
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Managing physical property across multiple time zones is fraught with friction—from unverified tenants and unauthorized boundary encroachment to delayed rental remittances and neglected maintenance. Aegis provides an institutional corporate shield with complete legal accountability.
                </p>
              </div>

              {/* 4 Core Services Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {AEGIS_SERVICES.map((srv, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-gold/60 hover:shadow-md transition-all duration-200 space-y-2.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-gold-light border border-brand-gold/20 flex items-center justify-center">
                      {getServiceIcon(srv.iconName)}
                    </div>
                    <h4 className="font-heading font-bold text-sm text-brand-marine">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* FEMA & Regulatory Notice Box */}
              <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200 text-xs text-slate-700 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong>FEMA &amp; RBI Compliance:</strong> All rental transactions are processed strictly via audited NRE/NRO banking channels with computerized tax receipts and transparent accounting records.
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
