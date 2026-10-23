"use client";

import React from "react";
import { Users, Shield, Award } from "lucide-react";
import { LEADERSHIP_TEAM, BRAND_INFO } from "@/data/content";

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-brand-mist/30 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold-light text-brand-bronze text-xs font-bold uppercase tracking-wider border border-brand-gold/30">
            <Award className="w-3.5 h-3.5 text-brand-gold" />
            <span>{BRAND_INFO.experienceTagline}</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-marine tracking-tight">
            Backed by Experienced Founders &amp; Domain Leaders
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A clear executive hierarchy driving global diaspora engagement, corporate compliance, and ground-level SLA execution across India.
          </p>
        </div>

        {/* 4 Leaders Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_TEAM.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-brand-gold/60 hover:shadow-subtle-card transition-all duration-200 text-center flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Monogram Badge */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-marine to-brand-gold p-0.5 mx-auto shadow-md transition-transform duration-300 group-hover:scale-105">
                  <div className="w-full h-full bg-brand-marine rounded-full flex items-center justify-center text-white font-heading font-bold text-xl">
                    {leader.initial}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg text-brand-marine group-hover:text-brand-cerulean transition-colors">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                    {leader.role}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500">
                    {leader.focus}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {leader.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
                Sustune Care Executive Committee
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
