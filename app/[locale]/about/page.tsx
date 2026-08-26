import React from "react";
import { AboutMissionVision } from "@/components/about/AboutMissionVision";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutConnection } from "@/components/about/AboutConnection";
import { AboutTeamReserved } from "@/components/about/AboutTeamReserved";
import { CTASection } from "@/components/shared/CTASection";
import { createSiteMetadata } from "@/lib/seo";
import { AboutHero } from "@/components/about/AboutHero";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return createSiteMetadata({
    title: "About Us",
    description:
      "Impakt Gateway e.V. is a Germany-registered non-profit connecting institutions, resources and people between Cameroon and Germany.",
    locale,
    pathname: "/about",
  });
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <AboutHero />

      {/* 2. Mission & Vision */}
      <AboutMissionVision />

      {/* 3. Guiding Principles */}
      <AboutPrinciples />

      {/* 4. Cameroon ↔ Germany Connection Logic */}
      <AboutConnection />

      {/* 5. Governance & Registered Foundation Notice */}
      <AboutTeamReserved />

      {/* 6. Conversion CTA */}
      <CTASection />
    </div>
  );
}
