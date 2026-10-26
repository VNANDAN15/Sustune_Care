"use client";

import React, { useState } from "react";
import {
  Calculator,
  ShieldCheck,
  Building,
  Heart,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  MessageCircle,
  HelpCircle,
  Percent,
} from "lucide-react";
import { BRAND_INFO } from "@/data/content";

interface DiasporaEstimatorSectionProps {
  onSelectPlan?: (details: {
    serviceName: string;
    hub: string;
    scope: string;
    rent: number;
    sparshTier: string;
    monthlyFee: string;
    summaryText: string;
  }) => void;
}

type CurrencyCode = "USD" | "INR" | "GBP" | "EUR" | "AED" | "CAD" | "AUD";

interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number;
  label: string;
}

const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: "USD", symbol: "$", rate: 1, label: "USD ($)" },
  INR: { code: "INR", symbol: "₹", rate: 84.5, label: "INR (₹)" },
  GBP: { code: "GBP", symbol: "£", rate: 0.79, label: "GBP (£)" },
  EUR: { code: "EUR", symbol: "€", rate: 0.92, label: "EUR (€)" },
  AED: { code: "AED", symbol: "AED ", rate: 3.67, label: "AED (د.إ)" },
  CAD: { code: "CAD", symbol: "CA$", rate: 1.36, label: "CAD ($)" },
  AUD: { code: "AUD", symbol: "A$", rate: 1.52, label: "AUD ($)" },
};

const HUBS = ["Bengaluru", "Hyderabad", "Delhi NCR", "Pune", "Chennai"] as const;

export const DiasporaEstimatorSection: React.FC<DiasporaEstimatorSectionProps> = ({
  onSelectPlan,
}) => {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [hub, setHub] = useState<string>("Bengaluru");
  const [scope, setScope] = useState<"bundle" | "aegis" | "sparsh">("bundle");
  const [propertyType, setPropertyType] = useState<"2bhk" | "3bhk" | "villa">("3bhk");
  const [propertyRent, setPropertyRent] = useState<number>(65000);
  const [sparshTier, setSparshTier] = useState<"essential" | "comprehensive" | "concierge">("comprehensive");

  // Calculate Base Fees in USD
  const getAegisUSD = () => {
    if (scope === "sparsh") return 0;
    const rentUSD = propertyRent / 84.5;
    return Math.max(50, Math.round(rentUSD * 0.08));
  };

  const getSparshUSD = () => {
    if (scope === "aegis") return 0;
    switch (sparshTier) {
      case "essential":
        return 55;
      case "comprehensive":
        return 118;
      case "concierge":
        return 195;
      default:
        return 118;
    }
  };

  const aegisUSD = getAegisUSD();
  const sparshUSD = getSparshUSD();
  const subtotalUSD = aegisUSD + sparshUSD;
  const synergyDiscountUSD = scope === "bundle" ? Math.round(subtotalUSD * 0.15) : 0;
  const netTotalUSD = subtotalUSD - synergyDiscountUSD;
  const annualProtectionUSD = Math.round(netTotalUSD * 2.8 * 12);

  // Currency Converter & Formatter
  const formatPrice = (usdAmount: number) => {
    const curr = CURRENCIES[currency];
    const converted = Math.round(usdAmount * curr.rate);
    if (currency === "INR") {
      return `₹${converted.toLocaleString("en-IN")}`;
    }
    return `${curr.symbol}${converted.toLocaleString("en-US")}`;
  };

  // WhatsApp Message
  const getWhatsAppUrl = () => {
    const formattedFee = formatPrice(netTotalUSD);
    const scopeLabel =
      scope === "bundle"
        ? "Dual-Shield Bundle (Aegis + Sparsh)"
        : scope === "aegis"
        ? "Aegis Property Stewardship"
        : "Sparsh Family & Elder Care";

    const text = `Hi Sustune Care,
I used the Transparent Diaspora Care Estimator on the website:
- Target Hub: ${hub}
- Scope of Care: ${scopeLabel}
${scope !== "sparsh" ? `- Property Rent: ₹${propertyRent.toLocaleString("en-IN")}/mo (${propertyType.toUpperCase()})` : ""}
${scope !== "aegis" ? `- Sparsh Health Tier: ${sparshTier.toUpperCase()}` : ""}
- Estimated Investment: ${formattedFee}/month
I would like to lock in this plan and schedule a consultation.`;

    return `https://wa.me/${BRAND_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
  };

  const handleLockInPlan = () => {
    const scopeLabel =
      scope === "bundle"
        ? "Bundled (Aegis + Sparsh)"
        : scope === "aegis"
        ? "Aegis Property Stewardship"
        : "Sparsh Family Care";

    const summaryText = `[Estimator Quote: Hub: ${hub} | Scope: ${scopeLabel} | Rent: ₹${propertyRent.toLocaleString("en-IN")} | Sparsh: ${sparshTier} | Estimated: ${formatPrice(netTotalUSD)}/mo]`;

    if (onSelectPlan) {
      onSelectPlan({
        serviceName: scopeLabel,
        hub,
        scope,
        rent: propertyRent,
        sparshTier,
        monthlyFee: formatPrice(netTotalUSD),
        summaryText,
      });
    }

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="estimator"
      className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 scroll-mt-20 relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-brand-cerulean/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-5 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-marine text-xs font-bold uppercase tracking-wider shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-brand-gold" />
            <span>Interactive TCO &amp; ROI Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-marine font-heading tracking-tight leading-tight">
            Transparent Diaspora Care Estimator
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            Estimate your monthly investment in INR or your local overseas currency ({currency}).
            Zero hidden broker markups, guaranteed institutional service contracts.
          </p>

          {/* Currency Switcher Bar */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 mr-2">Display Currency:</span>
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  currency === c
                    ? "bg-brand-marine text-brand-gold shadow-sm ring-1 ring-brand-gold/50"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Target Metropolitan Hub */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3.5">
                1. Select Target Metropolitan Hub in India
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {HUBS.map((cityName) => (
                  <button
                    key={cityName}
                    type="button"
                    onClick={() => setHub(cityName)}
                    className={`py-3 px-3.5 rounded-2xl text-xs font-bold border transition-all text-left flex items-center justify-between cursor-pointer ${
                      hub === cityName
                        ? "border-brand-cerulean bg-sky-50 text-brand-cerulean ring-2 ring-brand-cerulean/20 shadow-xs"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{cityName}</span>
                    {hub === cityName && (
                      <CheckCircle2 className="w-4 h-4 text-brand-cerulean shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scope of Stewardship */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3.5">
                2. Select Scope of Stewardship
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Bundle */}
                <button
                  type="button"
                  onClick={() => setScope("bundle")}
                  className={`p-3.5 rounded-2xl text-xs font-bold border transition-all text-left flex flex-col justify-between gap-2.5 cursor-pointer ${
                    scope === "bundle"
                      ? "border-brand-gold bg-amber-50/60 text-brand-marine ring-2 ring-brand-gold/30 shadow-sm"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Layers className="w-4 h-4 text-brand-gold" />
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-brand-gold text-white rounded-full shadow-xs">
                      15% Rebate
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-brand-marine">Dual-Shield Bundle</div>
                    <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                      Property + Parental Care
                    </div>
                  </div>
                </button>

                {/* Aegis Only */}
                <button
                  type="button"
                  onClick={() => setScope("aegis")}
                  className={`p-3.5 rounded-2xl text-xs font-bold border transition-all text-left flex flex-col justify-between gap-2.5 cursor-pointer ${
                    scope === "aegis"
                      ? "border-brand-cerulean bg-sky-50 text-brand-cerulean ring-2 ring-brand-cerulean/20 shadow-sm"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <Building className="w-4 h-4 text-brand-cerulean" />
                  <div>
                    <div className="text-sm font-extrabold text-brand-marine">Aegis Property</div>
                    <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                      Rental, Escrow &amp; Audits
                    </div>
                  </div>
                </button>

                {/* Sparsh Only */}
                <button
                  type="button"
                  onClick={() => setScope("sparsh")}
                  className={`p-3.5 rounded-2xl text-xs font-bold border transition-all text-left flex flex-col justify-between gap-2.5 cursor-pointer ${
                    scope === "sparsh"
                      ? "border-brand-emerald bg-emerald-50 text-brand-emerald ring-2 ring-brand-emerald/20 shadow-sm"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <Heart className="w-4 h-4 text-brand-emerald" />
                  <div>
                    <div className="text-sm font-extrabold text-brand-marine">Sparsh Care</div>
                    <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                      24/7 SOS &amp; OPD Escorts
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* 3. Property Configuration (When Bundle or Aegis) */}
            {(scope === "bundle" || scope === "aegis") && (
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-brand-gold" />
                    <span>3. Property Type &amp; Monthly Rental Yield</span>
                  </label>
                  <span className="text-xs font-extrabold text-brand-marine bg-amber-50 px-2.5 py-1 rounded-lg border border-brand-gold/30">
                    ₹{propertyRent.toLocaleString("en-IN")} / mo
                  </span>
                </div>

                {/* Presets */}
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setPropertyType("2bhk");
                      setPropertyRent(35000);
                    }}
                    className={`py-2.5 px-2 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                      propertyType === "2bhk"
                        ? "border-brand-gold bg-amber-50 text-brand-marine shadow-xs"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    2BHK Apartment
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPropertyType("3bhk");
                      setPropertyRent(65000);
                    }}
                    className={`py-2.5 px-2 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                      propertyType === "3bhk"
                        ? "border-brand-gold bg-amber-50 text-brand-marine shadow-xs"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    3-4BHK Luxury
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPropertyType("villa");
                      setPropertyRent(150000);
                    }}
                    className={`py-2.5 px-2 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                      propertyType === "villa"
                        ? "border-brand-gold bg-amber-50 text-brand-marine shadow-xs"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    Gated Villa
                  </button>
                </div>

                {/* Slider */}
                <div className="pt-2">
                  <input
                    type="range"
                    min={25000}
                    max={250000}
                    step={5000}
                    value={propertyRent}
                    onChange={(e) => setPropertyRent(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                    aria-label="Adjust monthly property rent"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-semibold pt-1">
                    <span>₹25,000 (~$295)</span>
                    <span>₹1,25,000 (~$1,480)</span>
                    <span>₹2,50,000+ (~$2,950)</span>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Sparsh Healthcare Tier (When Bundle or Sparsh) */}
            {(scope === "bundle" || scope === "sparsh") && (
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 animate-in fade-in duration-200">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-brand-emerald" />
                  <span>4. Sparsh Parental Healthcare Tier</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  {/* Essential SOS */}
                  <button
                    type="button"
                    onClick={() => setSparshTier("essential")}
                    className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                      sparshTier === "essential"
                        ? "border-brand-emerald bg-emerald-50 text-brand-emerald ring-2 ring-brand-emerald/20 shadow-xs"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="text-xs font-extrabold text-brand-marine">Essential SOS</div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      24/7 Ambulance + Monthly Vitals
                    </div>
                  </button>

                  {/* Comprehensive */}
                  <button
                    type="button"
                    onClick={() => setSparshTier("comprehensive")}
                    className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer relative ${
                      sparshTier === "comprehensive"
                        ? "border-brand-emerald bg-emerald-50 text-brand-emerald ring-2 ring-brand-emerald/20 shadow-xs"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className="absolute -top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-brand-emerald text-white shadow-xs">
                      Popular
                    </span>
                    <div className="text-xs font-extrabold text-brand-marine">Comprehensive</div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Doctor Escorts + Bi-Weekly Vitals
                    </div>
                  </button>

                  {/* Concierge */}
                  <button
                    type="button"
                    onClick={() => setSparshTier("concierge")}
                    className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                      sparshTier === "concierge"
                        ? "border-brand-emerald bg-emerald-50 text-brand-emerald ring-2 ring-brand-emerald/20 shadow-xs"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="text-xs font-extrabold text-brand-marine">Full Concierge</div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Unlimited OPD + 3x Weekly Visits
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Synergy Advantage Callout */}
            {scope === "bundle" && (
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-brand-gold/30 flex items-start gap-3.5">
                <Sparkles className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 space-y-1">
                  <p className="font-bold text-brand-marine">
                    Diaspora Bundle Advantage: 15% Synergy Rebate Applied
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Unified monthly reporting, dedicated dual account steward back in India, and prioritized 24/7 hotline dispatch across GMT, EST, PST, GST &amp; AEST.
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Live Estimate Summary Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-brand-marine via-slate-900 to-brand-marine text-white border border-brand-gold/40 shadow-2xl space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-gold">
                    Live Estimate Summary
                  </span>
                  <h3 className="text-lg font-extrabold font-heading text-white">
                    {hub} Hub Plan
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-xl bg-slate-800/90 border border-brand-gold/40 text-xs font-bold text-amber-300">
                  {currency}
                </div>
              </div>

              {/* Line Items Breakdown */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                {(scope === "bundle" || scope === "aegis") && (
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-brand-gold" />
                      Aegis Asset Stewardship
                    </span>
                    <span className="font-extrabold text-white">
                      {formatPrice(aegisUSD)} / mo
                    </span>
                  </div>
                )}

                {(scope === "bundle" || scope === "sparsh") && (
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-brand-emerald" />
                      Sparsh Care ({sparshTier})
                    </span>
                    <span className="font-extrabold text-white">
                      {formatPrice(sparshUSD)} / mo
                    </span>
                  </div>
                )}

                {scope === "bundle" && (
                  <div className="flex justify-between items-center text-emerald-400 font-bold pt-1 border-t border-white/5">
                    <span className="flex items-center gap-1.5">
                      <Percent className="w-3.5 h-3.5" />
                      Dual-Shield Synergy Rebate (15%)
                    </span>
                    <span>- {formatPrice(synergyDiscountUSD)} / mo</span>
                  </div>
                )}

                {/* Net Monthly Fee */}
                <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs text-slate-300 font-medium">Total Net Monthly Fee</span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-0.5">
                      {formatPrice(netTotalUSD)}
                      <span className="text-xs font-normal text-slate-300"> / month</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                  Billed quarterly or annually. Cancel or pause anytime with a 30-day notice. Full GST invoice provided.
                </p>
              </div>

              {/* Annual Protection ROI Highlight */}
              <div className="p-4 rounded-2xl bg-white/5 border border-emerald-500/30 backdrop-blur-md space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>Estimated Annual Financial Protection:</span>
                </div>
                <div className="text-xl font-extrabold text-white">
                  ~ {formatPrice(annualProtectionUSD)} / year
                </div>
                <p className="text-[10px] text-slate-300 leading-tight">
                  Calculated based on zero rent vacancy loss, avoided contractor inflation, preventive property maintenance, and eliminating distress international emergency flights.
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleLockInPlan}
                  className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-brand-gold to-amber-500 hover:brightness-110 shadow-lg transition-all text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Lock In This Plan &amp; Schedule Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-brand-emerald hover:bg-brand-emerald-dark transition-all text-center flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Confirmation</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
