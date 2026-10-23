"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, MessageSquare, ShieldCheck, Send, CheckCircle2, AlertCircle, Loader2, Globe } from "lucide-react";
import { BRAND_INFO } from "@/data/content";

interface EnquiryFormProps {
  preselectedService: string;
}

const COUNTRY_CODES = [
  { code: "+91", country: "India (IN)" },
  { code: "+1", country: "United States (US) / Canada (CA)" },
  { code: "+44", country: "United Kingdom (UK)" },
  { code: "+971", country: "United Arab Emirates (UAE)" },
  { code: "+61", country: "Australia (AU)" },
  { code: "+65", country: "Singapore (SG)" },
  { code: "+966", country: "Saudi Arabia (KSA)" },
  { code: "+49", country: "Germany (DE)" },
  { code: "+33", country: "France (FR)" },
  { code: "+Other", country: "Other Country Code" },
];

const TIMEZONES = [
  "IST (India Standard Time · UTC+5:30)",
  "EST (US Eastern Time · UTC-5)",
  "CST (US Central Time · UTC-6)",
  "PST (US Pacific Time · UTC-8)",
  "GMT / BST (United Kingdom · UTC+0 / +1)",
  "GST (Gulf Standard Time · UAE · UTC+4)",
  "AEST (Australian Eastern · UTC+10)",
  "SGT (Singapore Time · UTC+8)",
];

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    countryOfResidence: "USA",
    serviceInterest: "Aegis Property Stewardship",
    targetCity: "Hyderabad",
    preferredTime: "Morning",
    timeZone: "EST (US Eastern Time · UTC-5)",
    notes: "",
    consent: false,
    botField: "", // Spam Honeypot
  });

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    timestamp?: string;
  } | null>(null);

  // Sync preselected service whenever changed from outside CTAs
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceInterest: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Please enter your full name (minimum 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, "").length < 6) {
      errors.phone = "Please enter a valid phone number with numbers only.";
    }
    if (!formData.consent) {
      errors.consent = "You must confirm consent to submit an inquiry.";
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    const errors = validate();
    setValidationErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitResult({
          success: true,
          message: data.message,
          timestamp: data.timestamp,
        });
        // Reset sensitive text fields while preserving location/preferences
        setFormData((prev) => ({
          ...prev,
          name: "",
          email: "",
          phone: "",
          notes: "",
          consent: false,
        }));
      } else {
        setSubmitResult({
          success: false,
          message: data.error || "Failed to submit inquiry. Please review your details and try again.",
        });
        if (data.validationErrors) {
          setValidationErrors(data.validationErrors);
        }
      }
    } catch (err) {
      setSubmitResult({
        success: false,
        message: "Network communication error. Please check your internet connection or email us directly at contact@sustunecare.com.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Verified Contact Details & Office Hubs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
                Connect With Leadership
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-marine tracking-tight">
                Schedule Your NRI Consultation
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Whether you require vacant plot stewardship in Hyderabad or medical companion support for parents in Bengaluru, our executive team is ready to structure a tailored agreement.
              </p>
            </div>

            {/* Verified Contact Cards */}
            <div className="space-y-3.5 pt-2">
              
              {/* Telephone */}
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-cerulean transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-cerulean text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Direct Phone (India Operations)
                  </div>
                  <div className="font-heading font-bold text-sm sm:text-base text-brand-marine group-hover:text-brand-cerulean transition-colors">
                    {BRAND_INFO.phoneDisplay}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Monday – Saturday, 9:00 AM – 8:00 PM IST
                  </div>
                </div>
              </a>

              {/* WhatsApp NRI Line */}
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-emerald transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-emerald text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    WhatsApp Support
                  </div>
                  <div className="font-heading font-bold text-sm sm:text-base text-brand-marine group-hover:text-brand-emerald transition-colors">
                    {BRAND_INFO.whatsappDisplay}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Direct consultation &amp; chat via WhatsApp
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-gold transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-gold text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Corporate Email Communications
                  </div>
                  <div className="font-heading font-bold text-sm sm:text-base text-brand-marine group-hover:text-brand-gold transition-colors">
                    {BRAND_INFO.email}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Inquiries reviewed directly by executive management
                  </div>
                </div>
              </a>

              {/* Operational Hubs */}
              <div className="p-4 rounded-2xl bg-brand-mist/50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-marine">
                  <MapPin className="w-4 h-4 text-brand-cerulean shrink-0" />
                  <span>Ground Operational Hubs</span>
                </div>
                <div className="text-xs text-slate-600 space-y-1 pl-6">
                  <p><strong>Hyderabad:</strong> Telangana Principal Operations Center</p>
                  <p><strong>Bengaluru:</strong> Karnataka Regional Management Hub</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Unified Consultation and Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-subtle-card">
              
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6">
                <div>
                  <span className="text-xs font-bold text-brand-cerulean uppercase tracking-wider">
                    Structured Consultation Intake
                  </span>
                  <h3 className="font-heading font-bold text-xl text-brand-marine">
                    Inquiry &amp; Callback Request
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-emerald-light text-brand-emerald border border-brand-emerald/30">
                  SSL Encrypted
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Honeypot anti-spam field (hidden from view) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="botField">Leave this field blank</label>
                  <input
                    type="text"
                    id="botField"
                    name="botField"
                    tabIndex={-1}
                    value={formData.botField}
                    onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                  />
                </div>

                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="e.g. Shiva Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-btn border focus:outline-none focus:ring-2 ${
                        validationErrors.name ? "border-rose-400 focus:ring-rose-200" : "border-slate-300 focus:ring-brand-cerulean"
                      }`}
                    />
                    {validationErrors.name && (
                      <p className="text-[11px] text-rose-500 mt-1">{validationErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="form-email" className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-btn border focus:outline-none focus:ring-2 ${
                        validationErrors.email ? "border-rose-400 focus:ring-rose-200" : "border-slate-300 focus:ring-brand-cerulean"
                      }`}
                    />
                    {validationErrors.email && (
                      <p className="text-[11px] text-rose-500 mt-1">{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Country Code & Phone Input */}
                <div className="grid sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-5">
                    <label htmlFor="form-country-code" className="block text-xs font-bold text-slate-700 mb-1">
                      Country Code <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="form-country-code"
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-white rounded-btn border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-cerulean truncate"
                    >
                      {COUNTRY_CODES.map((item, idx) => (
                        <option key={idx} value={item.code}>
                          {item.code} — {item.country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-7">
                    <label htmlFor="form-phone" className="block text-xs font-bold text-slate-700 mb-1">
                      Phone / WhatsApp Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      placeholder="e.g. 89856 34239"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-btn border focus:outline-none focus:ring-2 ${
                        validationErrors.phone ? "border-rose-400 focus:ring-rose-200" : "border-slate-300 focus:ring-brand-cerulean"
                      }`}
                    />
                    {validationErrors.phone && (
                      <p className="text-[11px] text-rose-500 mt-1">{validationErrors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Service of Interest & Target City in India */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-service" className="block text-xs font-bold text-slate-700 mb-1">
                      Primary Service of Interest <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="form-service"
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-btn border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-cerulean"
                    >
                      <option value="Aegis Property Stewardship">Aegis Property Stewardship</option>
                      <option value="Sparsh Family Care">Sparsh Family Care</option>
                      <option value="Bundled (Aegis + Sparsh)">Bundled (Aegis + Sparsh)</option>
                      <option value="Home Care: Domiciliary & Personal Care">Home Care: Domiciliary &amp; Personal Care</option>
                      <option value="Home Care: Post-Acute & Reablement">Home Care: Post-Acute &amp; Reablement</option>
                      <option value="Home Care: Complex Live-In Care">Home Care: Complex Live-In Care</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form-city" className="block text-xs font-bold text-slate-700 mb-1">
                      Target City in India <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="form-city"
                      value={formData.targetCity}
                      onChange={(e) => setFormData({ ...formData, targetCity: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-btn border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-cerulean"
                    >
                      <option value="Hyderabad">Hyderabad (Telangana)</option>
                      <option value="Bengaluru">Bengaluru (Karnataka)</option>
                      <option value="Both Cities">Both Hyderabad &amp; Bengaluru</option>
                      <option value="Other Location">Other City in India</option>
                    </select>
                  </div>
                </div>

                {/* NRI Country of Residence & Preferred Time Zone Callback */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-residence" className="block text-xs font-bold text-slate-700 mb-1">
                      Your Country of Residence
                    </label>
                    <select
                      id="form-residence"
                      value={formData.countryOfResidence}
                      onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-btn border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-cerulean"
                    >
                      <option value="USA">United States (USA)</option>
                      <option value="UK">United Kingdom (UK)</option>
                      <option value="UAE">United Arab Emirates (UAE)</option>
                      <option value="Australia">Australia</option>
                      <option value="Canada">Canada</option>
                      <option value="Singapore">Singapore</option>
                      <option value="India">India</option>
                      <option value="Other">Other Country</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form-timezone" className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Callback Timezone
                    </label>
                    <select
                      id="form-timezone"
                      value={formData.timeZone}
                      onChange={(e) => setFormData({ ...formData, timeZone: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-white rounded-btn border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-cerulean truncate"
                    >
                      {TIMEZONES.map((tz, idx) => (
                        <option key={idx} value={tz}>
                          {tz}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Specific Requirements / Notes */}
                <div>
                  <label htmlFor="form-notes" className="block text-xs font-bold text-slate-700 mb-1">
                    Specific Requirements or Property/Parent Details
                  </label>
                  <textarea
                    id="form-notes"
                    rows={3}
                    placeholder="Describe property locations, parent care routines, frequency of visits, or timeline..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-btn border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-cerulean"
                  ></textarea>
                </div>

                {/* Consent Acknowledgment Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-brand-cerulean focus:ring-brand-cerulean h-4 w-4 shrink-0"
                    />
                    <span className="text-xs text-slate-600 leading-relaxed">
                      I consent to Sustune Care contacting me regarding this service consultation via phone, email, or WhatsApp. We respect privacy and do not sell or distribute personal information. <span className="text-rose-500">*</span>
                    </span>
                  </label>
                  {validationErrors.consent && (
                    <p className="text-[11px] text-rose-500 mt-1">{validationErrors.consent}</p>
                  )}
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-btn bg-brand-cerulean hover:bg-brand-marine text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Validating &amp; Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Strategy Callback</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

              {/* Submit Feedback Notification (Honest reporting — never displays false success) */}
              {submitResult && (
                <div
                  className={`mt-4 p-4 rounded-xl text-xs font-semibold flex items-start gap-3 animate-in fade-in duration-200 ${
                    submitResult.success
                      ? "bg-emerald-50 border border-emerald-200 text-emerald-900"
                      : "bg-rose-50 border border-rose-200 text-rose-900"
                  }`}
                  role="status"
                >
                  {submitResult.success ? (
                    <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <p className="font-bold">
                      {submitResult.success ? "Inquiry Confirmed & Logged" : "Submission Notice"}
                    </p>
                    <p className="leading-relaxed font-normal">{submitResult.message}</p>
                    {submitResult.timestamp && (
                      <p className="text-[10px] text-emerald-700 font-mono">
                        Server Timestamp: {submitResult.timestamp}
                      </p>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
