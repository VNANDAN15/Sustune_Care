"use client";

import React from "react";
import { Heart, UserCheck, ClipboardCheck, PhoneCall, Users, ArrowRight, Video, ShieldCheck } from "lucide-react";
import { SPARSH_SERVICES } from "@/data/content";
import { VIDEOS, VideoConfig } from "@/data/videos";
import { VideoDeviceCard } from "./VideoDeviceCard";

interface SparshSectionProps {
  onSelectService: (service: string) => void;
  onOpenVideoModal: (video: VideoConfig) => void;
}

export const SparshSection: React.FC<SparshSectionProps> = ({ onSelectService, onOpenVideoModal }) => {
  const sparshVid = VIDEOS.sparsh;

  const handleInquire = () => {
    onSelectService("Sparsh Family Care");
    const formElement = document.getElementById("contact");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "UserHeart":
        return <Heart className="w-5 h-5 text-brand-emerald" />;
      case "ClipboardCheck":
        return <ClipboardCheck className="w-5 h-5 text-brand-emerald" />;
      case "PhoneCall":
        return <PhoneCall className="w-5 h-5 text-brand-emerald" />;
      case "Users":
        return <Users className="w-5 h-5 text-brand-emerald" />;
      default:
        return <Heart className="w-5 h-5 text-brand-emerald" />;
    }
  };

  return (
    <section id="sparsh" className="py-20 bg-brand-mist/40 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Container Card */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-subtle-card relative overflow-hidden">
          
          {/* Subtle Decorative Background Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-emerald/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-slate-200 gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-emerald-light border border-brand-emerald/30 flex items-center justify-center text-brand-emerald font-bold text-2xl shrink-0">
                <Heart className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-emerald uppercase tracking-widest">
                  Elderly Support &amp; Family Assistance
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-marine tracking-tight">
                  SPARSH Family Care
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Compassionate Proxy Assistance &amp; Doctor Coordination for Aging Parents
                </p>
              </div>
            </div>

            <button
              onClick={handleInquire}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn bg-brand-emerald hover:bg-brand-emerald-dark text-white font-bold text-xs shadow-md transition-colors shrink-0"
            >
              <span>Inquire for Family Care</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Main Content Grid: Video Panel + Service Cards */}
          <div className="grid lg:grid-cols-12 gap-10 mt-10 items-center">
            
            {/* Left Media Panel: Video C (Sparsh Family Video) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full text-center space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-brand-emerald-dark text-[11px] font-bold uppercase tracking-wider">
                  <Video className="w-3.5 h-3.5 text-brand-emerald" />
                  <span>Sparsh Family Film (46s)</span>
                </div>
                <VideoDeviceCard
                  video={sparshVid}
                  onOpenModal={onOpenVideoModal}
                />
              </div>
            </div>

            {/* Right Information & 4 Service Offerings */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-xl text-brand-marine">
                  Bedside Warmth &amp; Reassurance When Miles Apart
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Living overseas should never mean helpless anxiety when your parents face health check-ups, medication routines, or unexpected domestic emergencies. Sparsh connects your family with background-verified, language-matched companions who treat your elders with unconditional dignity.
                </p>
              </div>

              {/* 4 Core Services Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {SPARSH_SERVICES.map((srv, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-emerald/60 hover:shadow-md transition-all duration-200 space-y-2.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-emerald-light border border-brand-emerald/20 flex items-center justify-center">
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

              {/* Transparent Oversight Notice */}
              <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200 text-xs text-slate-700 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong>Digital Health &amp; Visit Logs:</strong> After every companion visit or hospital escort, detailed summaries—including doctor instructions and prescription updates—are logged directly to designated family members.
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
