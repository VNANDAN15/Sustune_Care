"use client";

import React from "react";
import { ShieldCheck, Calendar, FileText, ArrowRight, CheckCircle2, Building, Heart, Sparkles } from "lucide-react";
import { BRAND_INFO } from "@/data/content";
import { VIDEOS, VideoConfig } from "@/data/videos";
import { VideoDeviceCard } from "./VideoDeviceCard";

interface HeroProps {
  onSelectService: (service: string) => void;
  onOpenVideoModal: (video: VideoConfig) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectService, onOpenVideoModal }) => {
  const launchVideo = VIDEOS.launch;

  return (
    <section
      id="home"
      className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-brand-marine via-brand-marine-deep to-brand-marine text-white border-b border-brand-gold/30"
    >
      {/* Subtle Pattern & Radial Glow Backdrop */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C99738_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cerulean/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Operational Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-brand-gold/40 text-brand-gold text-xs font-semibold tracking-wide uppercase shadow-sm">
              <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Institutional Oversight · Hyderabad &amp; Bengaluru Hubs</span>
            </div>

            {/* Display H1 Typography Specification */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
              Bridging the <br />
              <span className="bg-gradient-to-r from-brand-gold via-amber-300 to-brand-gold bg-clip-text text-transparent">
                Anxiety of Distance
              </span>{" "}
              for Global Indians
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Sustune Care provides an institutional shield for non-resident Indians. Protect your multi-generational real estate assets and secure empathetic, proxy family healthcare in India with 100% SLA compliance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#contact"
                onClick={() => onSelectService("Bundled (Aegis + Sparsh)")}
                className="px-7 py-4 rounded-btn bg-brand-cerulean hover:bg-white hover:text-brand-marine text-white font-bold text-sm shadow-lg hover:shadow-subtle-glow transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book NRI Strategy Consultation</span>
              </a>

              <a
                href={BRAND_INFO.nriSurveyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-btn bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-brand-gold font-semibold text-sm transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-brand-gold" />
                <span>Take 2-Min NRI Survey</span>
              </a>
            </div>

            {/* Trust Proof Metrics Counter */}
            <div className="pt-8 border-t border-slate-800 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-white">100%</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">FEMA &amp; RBI Compliant</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-brand-emerald">24/7</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">NRI Client Portal</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-brand-gold">Dual Arm</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Asset &amp; Family Care</div>
              </div>
            </div>

            {/* Quick Service Anchor Pathway */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Quick Discovery:</span>
              <a
                href="#aegis"
                onClick={() => onSelectService("Aegis Property Stewardship")}
                className="hover:text-brand-gold underline decoration-brand-gold/50 flex items-center gap-1"
              >
                <Building className="w-3.5 h-3.5 text-brand-gold" />
                Aegis Property
              </a>
              <span className="text-slate-600">•</span>
              <a
                href="#sparsh"
                onClick={() => onSelectService("Sparsh Family Care")}
                className="hover:text-brand-emerald underline decoration-brand-emerald/50 flex items-center gap-1"
              >
                <Heart className="w-3.5 h-3.5 text-brand-emerald" />
                Sparsh Family Care
              </a>
              <span className="text-slate-600">•</span>
              <a
                href="#home-care"
                onClick={() => onSelectService("Home Care: Domiciliary & Personal Care")}
                className="hover:text-brand-cerulean underline decoration-brand-cerulean/50 flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-cerulean" />
                Home &amp; Personal Care
              </a>
            </div>

          </div>

          {/* Right Column: Video D (Brand Film Launch Video) in Luxury Device Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                Watch Official Brand Launch Video
              </span>
              <VideoDeviceCard
                video={launchVideo}
                onOpenModal={onOpenVideoModal}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
