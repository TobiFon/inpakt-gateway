import React from "react";
import { setRequestLocale } from "next-intl/server";
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

export default function SupportPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <SupportHero />
      <SupportWhyCards />
      <DonationMethods />
      <TransparencyPanel />
      <CTASection />
    </div>
  );
}
