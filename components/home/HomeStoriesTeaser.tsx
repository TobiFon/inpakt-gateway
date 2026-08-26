// components/home/HomeStoriesTeaser.tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Newspaper, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const HomeStoriesTeaser: React.FC = () => {
  const t = useTranslations("storiesPage");

  return (
    <section className="py-16 sm:py-24 bg-cream-100 border-t border-cream-border">
      <Container>
        <SectionHeading
          eyebrow={t("badge")}
          title={t("heroTitle")}
          highlightedWord={t("heroHighlight")}
          description={t("heroSubtitle")}
        />

        <div className="mt-12 max-w-3xl mx-auto">
          <Card
            variant="white"
            className="p-8 sm:p-12 text-center border border-charcoal-900/5 shadow-card space-y-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-subtle text-brand-dark flex items-center justify-center mx-auto shadow-sm">
              <BookOpen className="w-7 h-7" />
            </div>

            <span className="text-xs uppercase font-extrabold tracking-widest text-gold-deep block">
              {t("emptyBadge")}
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
              {t("emptyTitle")}
            </h3>

            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed max-w-xl mx-auto">
              {t("emptyDesc")}
            </p>

            <div className="p-4 rounded-xl bg-cream-50 border border-cream-border text-xs sm:text-sm text-charcoal-700 leading-relaxed max-w-lg mx-auto font-medium">
              {t("emptyCallout")}
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/stories"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Browse All Stories & News
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="md"
                icon={<Newspaper className="w-4 h-4 text-gold-deep" />}
              >
                {t("submitStoryCta")}
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};
