import React from "react";
import { OpportunitiesHero } from "@/components/opportunities/OpportunitiesHero";
import { OpportunitiesGrid } from "@/components/opportunities/OpportunitiesGrid";
import { CTASection } from "@/components/shared/CTASection";
import { opportunities } from "@/content/opportunities";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return createSiteMetadata({
    title: "Opportunities Hub",
    description:
      "Explore scholarships, mentorship programs, training, internships and bilateral exchange opportunities between Cameroon and Germany.",
    locale,
    pathname: "/opportunities",
  });
}

export default function OpportunitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Page Hero */}
      <OpportunitiesHero />

      {/* 2. Interactive Filters & Verified Opportunity Grid / Pipeline State */}
      <OpportunitiesGrid initialOpportunities={opportunities} />

      {/* 3. Global Conversion Banner */}
      <CTASection />
    </div>
  );
}
