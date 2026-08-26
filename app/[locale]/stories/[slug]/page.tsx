import React from "react";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/routing";
import { stories } from "@/content/stories";
import { Container } from "@/components/ui/Container";
import { StoryDetailHero } from "@/components/stories/StoryDetailHero";
import { StoryDetailContent } from "@/components/stories/StoryDetailContent";
import { CTASection } from "@/components/shared/CTASection";
import { createSiteMetadata } from "@/lib/seo";

export function generateStaticParams() {
  const verifiedStories = stories.filter((s) => s.verified);
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const story of verifiedStories) {
      params.push({ locale, slug: story.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const story = stories.find((s) => s.slug === slug && s.verified);

  if (!story) {
    return {
      title: "Story Not Found",
    };
  }

  return createSiteMetadata({
    title: story.title,
    description: story.summary,
    locale,
    pathname: `/stories/${story.slug}`,
    type: "article",
  });
}

export default function StoryDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const story = stories.find((s) => s.slug === slug && s.verified);

  if (!story) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Article Hero */}
      <StoryDetailHero story={story} />

      {/* 2. Article Body */}
      <section className="py-12 sm:py-16 bg-cream-50">
        <Container size="content">
          <StoryDetailContent story={story} />
        </Container>
      </section>

      {/* 3. Conversion CTA */}
      <CTASection />
    </div>
  );
}
