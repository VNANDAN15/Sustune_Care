"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceDiscovery } from "@/components/ServiceDiscovery";
import { AegisSection } from "@/components/AegisSection";
import { SparshSection } from "@/components/SparshSection";
import { HomeCareSection } from "@/components/HomeCareSection";
import { CareSelectorSection } from "@/components/CareSelectorSection";
import { BrandStorySection } from "@/components/BrandStorySection";
import { PillarsSection } from "@/components/PillarsSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { WhyUsTable } from "@/components/WhyUsTable";
import { FaqSection } from "@/components/FaqSection";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { VideoPlayerModal } from "@/components/VideoPlayerModal";
import { VideoConfig } from "@/data/videos";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>("Aegis Property Stewardship");
  const [activeModalVideo, setActiveModalVideo] = useState<VideoConfig | null>(null);

  const handleSelectService = (service: string) => {
    setSelectedService(service);
  };

  const handleOpenVideoModal = (video: VideoConfig) => {
    setActiveModalVideo(video);
  };

  const handleCloseVideoModal = () => {
    setActiveModalVideo(null);
  };

  return (
    <>
      {/* Sticky Header with navigation and operational badges */}
      <Header onSelectService={handleSelectService} />

      {/* Main Content Area */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        
        {/* 1. Hero Section (with Launch Video) */}
        <Hero
          onSelectService={handleSelectService}
          onOpenVideoModal={handleOpenVideoModal}
        />

        {/* 2. Interactive Service Discovery Pathways */}
        <ServiceDiscovery onSelectService={handleSelectService} />

        {/* 3. Aegis Property Stewardship Section (with Aegis Video) */}
        <AegisSection
          onSelectService={handleSelectService}
          onOpenVideoModal={handleOpenVideoModal}
        />

        {/* 4. Sparsh Family Care Section (with Sparsh Video) */}
        <SparshSection
          onSelectService={handleSelectService}
          onOpenVideoModal={handleOpenVideoModal}
        />

        {/* 5. Home and Personal Care Clinical Pathways */}
        <HomeCareSection onSelectService={handleSelectService} />

        {/* 6. Self-Assessment Tool: Calculate Recommended Care Level (#care-selector) */}
        <CareSelectorSection onSelectService={handleSelectService} />

        {/* 7. About Sustune Care / Our Story Section (with Introduction Video) */}
        <BrandStorySection onOpenVideoModal={handleOpenVideoModal} />

        {/* 8. Four Brand Pillars & Clinical Governance */}
        <PillarsSection />

        {/* 9. Leadership and Governance */}
        <LeadershipSection />

        {/* 10. Institutional Standard & Comparison Matrix */}
        <WhyUsTable />

        {/* 11. Frequently Asked Questions */}
        <FaqSection />

        {/* 12. Consultation & Enquiry Form (NRI-Aware with Real Endpoint) */}
        <EnquiryForm preselectedService={selectedService} />

      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* High-Definition Accessible Video Player Modal */}
      <VideoPlayerModal
        video={activeModalVideo}
        isOpen={Boolean(activeModalVideo)}
        onClose={handleCloseVideoModal}
      />
    </>
  );
}
