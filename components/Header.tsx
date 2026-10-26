"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, Shield, ArrowRight, Building, Heart, Stethoscope } from "lucide-react";
import { BRAND_INFO } from "@/data/content";

interface HeaderProps {
  onSelectService?: (service: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectService }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (serviceName?: string) => {
    setMobileMenuOpen(false);
    if (serviceName && onSelectService) {
      onSelectService(serviceName);
    }
  };

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <aside aria-label="Operational Hubs & Emergency Lines" className="bg-brand-marine text-white text-xs py-2 px-4 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-brand-gold/20 text-brand-gold border border-brand-gold/40">
              ACTIVE HUBS
            </span>
            <span className="text-slate-200">
              Hyderabad &amp; Bengaluru Operational · SLA-Governed Care
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label={`Call Indian Hub at ${BRAND_INFO.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>{BRAND_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-500">|</span>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-brand-emerald-light transition-colors"
              aria-label={`WhatsApp Support at ${BRAND_INFO.whatsappDisplay}`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-brand-emerald" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header Navigation */}
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-300 ${
          scrolled ? "shadow-md py-2.5" : "py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            
            {/* Official Logo Lockup */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-cerulean rounded-md p-1"
              aria-label="Sustune Care — Home"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/brand/sustune_emblem_standalone.svg"
                  alt="Sustune Care Official Emblem"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain drop-shadow-sm"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-2xl text-brand-marine tracking-tight leading-none">
                  SUSTUNE <span className="text-brand-gold">CARE</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-slate-500 tracking-wider uppercase mt-1">
                  Protected Care · Sustained Dignity
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links - Responsive gap and sizing prevents overlap */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-xs xl:text-sm font-semibold text-slate-700" aria-label="Main Navigation">
              <a href="#home" className="hover:text-brand-cerulean transition-colors py-1">
                Home
              </a>
              <a
                href="#aegis"
                onClick={() => handleNavClick("Aegis Property Stewardship")}
                className="hover:text-brand-cerulean transition-colors flex items-center gap-1.5 py-1 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                <span>Aegis Property</span>
              </a>
              <a
                href="#sparsh"
                onClick={() => handleNavClick("Sparsh Family Care")}
                className="hover:text-brand-cerulean transition-colors flex items-center gap-1.5 py-1 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
                <span>Sparsh Care</span>
              </a>
              <a
                href="#estimator"
                onClick={() => handleNavClick()}
                className="hover:text-brand-gold transition-colors flex items-center gap-1.5 py-1 text-brand-marine font-bold whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <span>Care Estimator</span>
              </a>
              <a href="#story" className="hover:text-brand-cerulean transition-colors py-1 whitespace-nowrap">
                Our Story
              </a>
              <a href="#pillars" className="hover:text-brand-cerulean transition-colors py-1 whitespace-nowrap">
                Governance
              </a>
              <a href="#faq" className="hover:text-brand-cerulean transition-colors py-1 whitespace-nowrap">
                FAQ
              </a>
            </nav>

            {/* Primary Action Button - Non-colliding with shrink-0 and whitespace-nowrap */}
            <div className="hidden sm:flex items-center shrink-0">
              <a
                href="#contact"
                onClick={() => handleNavClick("General Consultation")}
                className="shrink-0 whitespace-nowrap px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-btn bg-brand-cerulean hover:bg-brand-marine text-white font-bold text-xs shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-1.5 xl:gap-2 group"
              >
                <span>Book NRI Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:text-brand-cerulean focus:outline-none focus:ring-2 focus:ring-brand-cerulean"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2.5 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1 font-semibold text-slate-700 text-sm">
              <a
                href="#home"
                onClick={() => handleNavClick()}
                className="px-3 py-2 rounded-md hover:bg-slate-50"
              >
                Home
              </a>
              <a
                href="#solutions"
                onClick={() => handleNavClick()}
                className="px-3 py-2 rounded-md hover:bg-slate-50"
              >
                Solutions Overview
              </a>
              <a
                href="#aegis"
                onClick={() => handleNavClick("Aegis Property Stewardship")}
                className="px-3 py-2 rounded-md hover:bg-amber-50 text-brand-marine flex items-center gap-2"
              >
                <Building className="w-4 h-4 text-brand-gold" />
                <span>Aegis Property Stewardship</span>
              </a>
              <a
                href="#sparsh"
                onClick={() => handleNavClick("Sparsh Family Care")}
                className="px-3 py-2 rounded-md hover:bg-emerald-50 text-brand-marine flex items-center gap-2"
              >
                <Heart className="w-4 h-4 text-brand-emerald" />
                <span>Sparsh Family &amp; Elder Care</span>
              </a>
              <a
                href="#estimator"
                onClick={() => handleNavClick()}
                className="px-3 py-2 rounded-md hover:bg-amber-50 text-brand-marine font-bold flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                <span>Transparent Care Estimator</span>
              </a>
              <a
                href="#home-care"
                onClick={() => handleNavClick("Home Care: Domiciliary & Personal Care")}
                className="px-3 py-2 rounded-md hover:bg-sky-50 text-brand-marine flex items-center gap-2"
              >
                <Stethoscope className="w-4 h-4 text-brand-cerulean" />
                <span>Home &amp; Personal Care</span>
              </a>
              <a
                href="#story"
                onClick={() => handleNavClick()}
                className="px-3 py-2 rounded-md hover:bg-slate-50"
              >
                Our Story &amp; Video
              </a>
              <a
                href="#pillars"
                onClick={() => handleNavClick()}
                className="px-3 py-2 rounded-md hover:bg-slate-50"
              >
                Four Brand Pillars &amp; Governance
              </a>
              <a
                href="#faq"
                onClick={() => handleNavClick()}
                className="px-3 py-2 rounded-md hover:bg-slate-50"
              >
                Frequently Asked Questions
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => handleNavClick("General Consultation")}
                className="w-full text-center py-3 rounded-btn bg-brand-cerulean text-white font-bold text-sm shadow-sm"
              >
                Schedule NRI Consultation
              </a>
              <a
                href={BRAND_INFO.nriSurveyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2 text-xs font-semibold text-slate-600 hover:text-brand-marine"
              >
                Take 2-Min NRI Survey →
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
