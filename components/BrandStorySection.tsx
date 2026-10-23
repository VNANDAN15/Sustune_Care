"use client";

import React from "react";
import { ShieldCheck, Video, Globe2, Compass, HeartHandshake, CheckCircle2 } from "lucide-react";
import { BRAND_INFO } from "@/data/content";
import { VIDEOS, VideoConfig } from "@/data/videos";
import { VideoDeviceCard } from "./VideoDeviceCard";

interface BrandStorySectionProps {
  onOpenVideoModal: (video: VideoConfig) => void;
}

export const BrandStorySection: React.FC<BrandStorySectionProps> = ({ onOpenVideoModal }) => {
  const introVid = VIDEOS.intro;

  return (
    <section id="story" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-brand-gold/30 scroll-mt-20">
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cerulean/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Our Purpose &amp; Story
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
            One Unified Organization. Two Vital Lifelines.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Sustune Care was founded by experienced leaders to resolve the dual anxieties of global Indians—protecting multi-generational family real estate while ensuring dignified, trustworthy support for aging loved ones.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Media Panel: Video B (Introduction Video) in Luxury Device Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-brand-gold text-[11px] font-bold uppercase tracking-wider border border-brand-gold/30">
                <Video className="w-3.5 h-3.5 text-brand-gold" />
                <span>Our Unified Story Film (42s)</span>
              </div>
              <VideoDeviceCard
                video={introVid}
                onOpenModal={onOpenVideoModal}
              />
            </div>
          </div>

          {/* Right Text Column: The Brand Core Story & Ethos */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                Bridging the Gap Between Distant Careers and Home Responsibilities
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Operating at the convergence of clinical governance and person-centered compassion, our mission is to safeguard well-being in the home and community through sustainable, zero-waste protocols, carbon-conscious logistics, and transparent corporate oversight.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Rather than forcing families to juggle fragmented local brokers for property management and unregulated registry workers for elderly support, Sustune Care provides a singular institutional umbrella backed by enforceable Service Level Agreements.
              </p>
            </div>

            {/* Core Values / Architectural Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2 text-brand-gold text-xs font-bold">
                  <Globe2 className="w-4 h-4" />
                  <span>Global Diaspora Focus</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineered specifically for non-resident Indians residing in the US, UK, UAE, and Australia with time-zone-aware communication.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2 text-brand-emerald text-xs font-bold">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Person-Centered Empathy</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Caregivers and stewards are screened for emotional warmth and verified with local police background checks.
                </p>
              </div>
            </div>

            {/* Corporate Summary Quote */}
            <div className="p-4 rounded-xl bg-brand-marine/70 border border-brand-gold/30 text-xs text-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
              <div className="leading-relaxed italic">
                &ldquo;Built upon our heraldic ethos—a protective shield, a sheltering home, nurturing palms, and dynamic vitality—we deliver gold-standard stewardship with unwavering integrity.&rdquo;
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
