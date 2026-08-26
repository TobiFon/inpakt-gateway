import React from "react";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/routing";
import { opportunities } from "@/content/opportunities";
import { Container } from "@/components/ui/Container";
import { OpportunityDetailHero } from "@/components/opportunities/OpportunityDetailHero";
import { OpportunityDetailContent } from "@/components/opportunities/OpportunityDetailContent";
import { OpportunityDetailSidebar } from "@/components/opportunities/OpportunityDetailSidebar";
import { CTASection } from "@/components/shared/CTASection";
import { createSiteMetadata } from "@/lib/seo";

export function generateStaticParams() {
  const verifiedOpportunities = opportunities.filter((o) => o.verified);
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const opp of verifiedOpportunities) {
      params.push({ locale, slug: opp.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const opportunity = opportunities.find((o) => o.slug === slug && o.verified);

  if (!opportunity) {
    return {
      title: "Opportunity Not Found",
    };
  }

  return createSiteMetadata({
    title: opportunity.title,
    description: opportunity.summary,
    locale,
    pathname: `/opportunities/${opportunity.slug}`,
  });
}

export default function OpportunityDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const opportunity = opportunities.find((o) => o.slug === slug && o.verified);

  if (!opportunity) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Detail Hero */}
      <OpportunityDetailHero opportunity={opportunity} />

      {/* 2. Detail Main Content & Metadata Sidebar */}
      <section className="py-12 sm:py-16 bg-cream-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              <OpportunityDetailContent opportunity={opportunity} />
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <OpportunityDetailSidebar opportunity={opportunity} />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Global Conversion Banner */}
      <CTASection />
    </div>
  );
}
