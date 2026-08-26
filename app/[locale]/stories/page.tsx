import React from "react";
import { StoriesHero } from "@/components/stories/StoriesHero";
import { StoryGrid } from "@/components/stories/StoryGrid";
import { CTASection } from "@/components/shared/CTASection";
import { stories } from "@/content/stories";
import { createSiteMetadata } from "@/lib/seo";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return createSiteMetadata({
    title: "News & Stories",
    description:
      "Read latest updates, bilateral partnership stories and community perspectives from Impakt Gateway e.V.",
    locale,
    pathname: "/stories",
  });
}

export default function StoriesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Stories Hero */}
      <StoriesHero />

      {/* 2. Story Grid or Transparent Launch State */}
      <StoryGrid initialStories={stories} />

      {/* 3. Conversion Banner */}
      <CTASection />
    </div>
  );
}
