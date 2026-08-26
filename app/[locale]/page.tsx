// app/[locale]/page.tsx
import React from "react";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/hero/Hero";
import { FocusGrid } from "@/components/focus/FocusGrid";
import { HomeBilateralBridge } from "@/components/home/HomeBilateralBridge";
import { ImpactPillars } from "@/components/impact/ImpactPillars";
import { HomeEngagementMatrix } from "@/components/home/HomeEngagementMatrix";
import { HomeRoadmap } from "@/components/home/HomeRoadmap";
import { HomeStoriesTeaser } from "@/components/home/HomeStoriesTeaser";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { CTASection } from "@/components/shared/CTASection";

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero with Animated Cameroon ↔ Germany Connection */}
      <Hero />

      {/* 2. Five Interconnected Focus Areas */}
      <FocusGrid />

      {/* 3. The Bilateral Reciprocity Bridge (Cameroon ↔ Germany) */}
      <HomeBilateralBridge />

      {/* 4. The Model: Process & Core Impact Principles */}
      <ImpactPillars />

      {/* 5. Four Pathways of Engagement (Donors, Universities, Youth, Volunteers) */}
      <HomeEngagementMatrix />

      {/* 6. Transparent Strategic Roadmap */}
      <HomeRoadmap />

      {/* 7. Stories, Field Reports & Insights Teaser */}
      <HomeStoriesTeaser />

      {/* 8. Comprehensive Interactive FAQ Section */}
      <HomeFAQ />

      {/* 9. Support & Partnership Conversion Banner */}
      <CTASection />
    </div>
  );
}
