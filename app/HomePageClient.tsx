"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building,
  Heart,
  Stethoscope,
  CheckCircle2,
  ShieldCheck,
  Home,
  Leaf,
  HeartHandshake,
  Calendar,
  FileText,
  Sparkles,
} from "lucide-react";
import { BRAND_INFO, FOUR_BRAND_PILLARS } from "@/data/content";
import { VIDEOS } from "@/data/videos";
import { VideoDeviceCard } from "@/components/VideoDeviceCard";

export const HomePageClient: React.FC = () => {
  const launchVideo = VIDEOS.launch;

  const pillarsIconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
    Home: <Home className="w-5 h-5" />,
    Leaf: <Leaf className="w-5 h-5" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  };

  return (
    <>
      {/* ===== HERO SECTION — ORIGINAL RICH DEEP MARINE PALETTE ===== */}
      <section
        id="home"
        className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-brand-marine via-brand-marine-deep to-brand-marine text-white border-b border-brand-gold/30"
      >
        {/* Subtle Pattern & Radial Glow Backdrop */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C99738_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cerulean/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Headline & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Operational Status Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-brand-gold/40 text-brand-gold text-xs font-semibold tracking-wide uppercase shadow-sm">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Institutional Oversight · Hyderabad &amp; Bengaluru Hubs</span>
              </div>

              {/* Display H1 Typography */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
                Bridging the <br />
                <span className="bg-gradient-to-r from-brand-gold via-amber-300 to-brand-gold bg-clip-text text-transparent">
                  Anxiety of Distance
                </span>{" "}
                for Global Indians
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Institutional asset stewardship and compassionate family healthcare in Hyderabad &amp; Bengaluru, designed specifically for non-resident Indians.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  href="/contact"
                  className="px-7 py-4 rounded-btn bg-brand-cerulean hover:bg-white hover:text-brand-marine text-white font-bold text-sm shadow-lg hover:shadow-subtle-glow transition-all duration-200 text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

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

              {/* Trust Indicators Metrics */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                <div>
                  <div className="font-heading font-extrabold text-xl sm:text-2xl text-white">FEMA / RBI</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">Banking Trails Followed</div>
                </div>
                <div>
                  <div className="font-heading font-extrabold text-xl sm:text-2xl text-brand-emerald">Pvt Ltd</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">Registered Entity</div>
                </div>
                <div>
                  <div className="font-heading font-extrabold text-xl sm:text-2xl text-brand-gold">Dual Arm</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">Asset &amp; Family Care</div>
                </div>
              </div>
            </div>

            {/* Right: Launch Video in Luxury Device Chassis */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full text-center space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  Official Brand Launch Film
                </span>
                <VideoDeviceCard video={launchVideo} priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE PATHWAYS WITH REAL PHOTOGRAPHY ===== */}
      <section id="services" className="py-20 bg-brand-mist/40 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cerulean">
              Our Dedicated Service Arms
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-marine tracking-tight">
              One Organization. Specialized Dedicated Arms.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore our core pathways below. Each operates with dedicated personnel, specialized protocols, and complete digital transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Aegis Card */}
            <div className="bg-white rounded-card overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-subtle-card hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Real High-End Property Photo */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/aegis-property-stewardship-hero.jpg"
                    alt="Aegis Property Stewardship — Luxury Residential Assets"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-marine/90 text-brand-gold border border-brand-gold/40 backdrop-blur-sm">
                    Property Stewardship
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-brand-marine group-hover:text-brand-cerulean transition-colors">
                      Aegis Property Stewardship
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      NRI Real Estate Guardianship in Hyderabad &amp; Bengaluru
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Institutional oversight for your Indian property — from tenant screening and vacant asset guardianship to HD video walkthroughs and remittance coordination.
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Tenant vetting &amp; lease management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>HD video inspection walkthroughs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>FEMA-guided rental remittances</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 mt-4 border-t border-slate-100">
                <Link
                  href="/aegis"
                  className="w-full py-3 px-4 rounded-btn text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 bg-brand-marine hover:bg-slate-800 text-white"
                >
                  <span>Explore Aegis Property</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Sparsh Card */}
            <div className="bg-white rounded-card overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-subtle-card hover:border-brand-emerald/60 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Real Warm Family Care Photo */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/sparsh-family-care-hero.jpg"
                    alt="Sparsh Family Care — Compassionate Companion Supporting Senior Parents"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-marine/90 text-brand-emerald-light border border-brand-emerald/40 backdrop-blur-sm">
                    Family &amp; Elder Care
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-brand-marine group-hover:text-brand-cerulean transition-colors">
                      Sparsh Family Care
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Compassionate Proxy Assistance &amp; Doctor Coordination
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Background-verified, language-matched companions who escort your parents to doctor visits, coordinate medications, and provide genuine presence.
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Companion visits &amp; social interaction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Doctor escorts &amp; digitized health logs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Emergency response protocols</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 mt-4 border-t border-slate-100">
                <Link
                  href="/sparsh"
                  className="w-full py-3 px-4 rounded-btn text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 bg-brand-emerald hover:bg-brand-emerald-dark text-white"
                >
                  <span>Explore Sparsh Family Care</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Home Care Card */}
            <div className="bg-white rounded-card overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-subtle-card hover:border-brand-cerulean/60 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Real Professional Home Care Photo */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/home-care-hero.jpg"
                    alt="Home and Personal Care — In-Home Supported Living & Recovery"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-marine/90 text-sky-200 border border-brand-cerulean/40 backdrop-blur-sm">
                    In-Home Supported Living
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-brand-marine group-hover:text-brand-cerulean transition-colors">
                      Home &amp; Personal Care
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Assisted Living, Reablement &amp; Live-In Support
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    From daily personal care routines and post-hospital orthopedic rehabilitation to complex round-the-clock live-in companion specialists.
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Domiciliary &amp; personal hygiene care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Post-acute hospital recovery bridge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Complex live-in care specialist pairing</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 mt-4 border-t border-slate-100">
                <Link
                  href="/home-care"
                  className="w-full py-3 px-4 rounded-btn text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 bg-brand-cerulean hover:bg-brand-marine text-white"
                >
                  <span>Explore Home Care</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOUR BRAND PILLARS (Original Card Layout) ===== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Our Foundation
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-marine tracking-tight">
              The Four Pillars of Sustune Care
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every operation across property stewardship and family healthcare is anchored in the geometric symbiosis of our heraldic emblem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_BRAND_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className={`p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-subtle-card ${pillar.borderColorClass} flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${pillar.colorClass}`}>
                    {pillarsIconMap[pillar.iconName] || <ShieldCheck className="w-6 h-6" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Symbol: {pillar.symbol}
                    </span>
                    <h3 className="font-heading font-bold text-base text-brand-marine mt-0.5">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-cerulean hover:text-brand-marine transition-colors"
            >
              <span>Learn about our Corporate Story, Governance &amp; Founders</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CONSULTATION CTA ===== */}
      <section className="py-20 bg-brand-marine text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C99738_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl tracking-tight">
            Ready to Protect What Matters Most?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether you need property oversight or compassionate family care support, our executive team is ready to structure a tailored agreement for your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-brand-cerulean hover:bg-white hover:text-brand-marine text-white font-bold text-sm shadow-lg transition-all duration-200"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={BRAND_INFO.nriSurveyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-btn bg-slate-800/90 border border-slate-700 hover:border-brand-gold text-slate-200 font-semibold text-sm transition-all"
            >
              <span>Take 2-Min NRI Survey</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
