import React from "react";
import { PartnershipsHero } from "@/components/partnerships/PartnershipsHero";
import { PartnershipTypes } from "@/components/partnerships/PartnershipTypes";
import { PartnershipValueProp } from "@/components/partnerships/PartnershipValueProp";
import { PartnershipForm } from "@/components/partnerships/PartnershipForm";
import { CTASection } from "@/components/shared/CTASection";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return createSiteMetadata({
    title: "Partnerships & Collaboration",
    description:
      "Partner with Impakt Gateway e.V. to create meaningful, sustainable development initiatives between Cameroon and Germany.",
    locale,
    pathname: "/partnerships",
  });
}

export default function PartnershipsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Partnerships Hero */}
      <PartnershipsHero />

      {/* 2. Who Can Partner */}
      <PartnershipTypes />

      {/* 3. The Value Proposition */}
      <PartnershipValueProp />

      {/* 4. Interactive Partnership Enquiry Form */}
      <PartnershipForm />

      {/* 5. Global Conversion Banner */}
      <CTASection />
    </div>
  );
}
