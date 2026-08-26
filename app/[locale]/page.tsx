import React from "react";
import { Hero } from "@/components/hero/Hero";
import { FocusGrid } from "@/components/focus/FocusGrid";
import { ImpactPillars } from "@/components/impact/ImpactPillars";
import { CTASection } from "@/components/shared/CTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero with Cameroon <-> Germany Interactive World Map */}
      <Hero />

      {/* 2. Five Focus Areas Ecosystem */}
      <FocusGrid />

      {/* 3. The Model & Impact Architecture */}
      <ImpactPillars />

      {/* 4. Support & Partnership Conversion Banner */}
      <CTASection />
    </div>
  );
}
