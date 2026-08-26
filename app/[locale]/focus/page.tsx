import React from "react";
import { FocusLandingHero } from "@/components/focus/FocusLandingHero";
import { FocusEcosystemIntro } from "@/components/focus/FocusEcosystemIntro";
import { FocusDetailedGrid } from "@/components/focus/FocusDetailedGrid";
import { CTASection } from "@/components/shared/CTASection";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return createSiteMetadata({
    title: "Our Focus Areas",
    description:
      "Explore Impakt Gateway e.V.’s five key areas of impact: Education, Youth, Health, Environment, and Humanitarian Support.",
    locale,
    pathname: "/focus",
  });
}

export default function FocusLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <FocusLandingHero />

      {/* 2. Integrated Ecosystem Overview */}
      <FocusEcosystemIntro />

      {/* 3. Five Detailed Focus Cards Grid */}
      <FocusDetailedGrid />

      {/* 4. Conversion CTA Banner */}
      <CTASection />
    </div>
  );
}
