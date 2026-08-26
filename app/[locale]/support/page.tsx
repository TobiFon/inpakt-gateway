import React from "react";
import { SupportHero } from "@/components/support/SupportHero";
import { SupportWhyCards } from "@/components/support/SupportWhyCards";
import { DonationMethods } from "@/components/support/DonationMethods";
import { TransparencyPanel } from "@/components/support/TransparencyPanel";
import { CTASection } from "@/components/shared/CTASection";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return createSiteMetadata({
    title: "Support Our Work",
    description:
      "Support Impakt Gateway e.V. with transparent financial contributions powering bilateral education, youth innovation and community impact.",
    locale,
    pathname: "/support",
  });
}

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Support Hero */}
      <SupportHero />

      {/* 2. What Support Enables */}
      <SupportWhyCards />

      {/* 3. Direct Contribution & Bank Details Panel */}
      <DonationMethods />

      {/* 4. German Non-Profit Transparency & Tax Deductibility */}
      <TransparencyPanel />

      {/* 5. Global Conversion Banner */}
      <CTASection />
    </div>
  );
}
