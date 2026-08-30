"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Heart, Users2, Globe2, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroSlideshow } from "./HeroSlideshow";

export const Hero: React.FC = () => {
  const t = useTranslations("hero");

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-subtle/50 via-white to-cream-50/70 border-b border-cream-border">
      {/* Background Dual Ambient Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[-5%] h-[550px] w-[550px] rounded-full bg-brand-primary/10 blur-[130px]" />
        <div className="absolute right-[5%] top-[10%] h-[480px] w-[480px] rounded-full bg-gold-primary/15 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-subtle-grid" />
      </div>

      <Container>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-14 sm:py-20 lg:py-24">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold-border/90 bg-gold-warm px-4 py-2 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-primary/80" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-primary" />
              </span>

              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold-deep sm:text-xs">
                {t("eyebrow")}
              </p>

              <span className="h-3 w-px bg-gold-border" />

              <Globe2 className="h-3.5 w-3.5 text-brand-primary" />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl font-bold leading-[1.08] tracking-tight text-charcoal-900 sm:text-5xl lg:text-[3.75rem] xl:text-[4.2rem]">
              {t("titlePart1")}{" "}
              <span className="relative inline-block font-extrabold text-brand-primary">
                {t("titleHighlight")}
              </span>
            </h1>

            {/* Decorative Brand Divider */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-1.5 w-12 rounded-full bg-brand-primary" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold-primary" />
              <span className="h-0.5 w-28 bg-gradient-to-r from-gold-primary to-transparent" />
            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-600 sm:text-lg">
              {t("description")}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href="/support"
                variant="gold"
                size="lg"
                className="shadow-md hover:shadow-lg"
                icon={
                  <Heart className="h-[18px] w-[18px] fill-current text-white" />
                }
              >
                {t("primaryCta")}
              </Button>

              <Button
                href="/work"
                variant="outline-dark"
                size="lg"
                className="border-cream-border text-charcoal-900 hover:border-brand-primary hover:text-brand-primary"
                icon={
                  <Users2 className="h-[18px] w-[18px] text-brand-primary" />
                }
              >
                {t("secondaryCta")}
              </Button>
            </div>

            {/* Bottom Bilateral Indicator */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 h-10 px-3.5 rounded-2xl border border-cream-border bg-white shadow-xs text-xs font-bold text-charcoal-900">
                  <span>🇩🇪</span> {t("badgeGermany")}
                </div>

                <div className="relative flex w-12 items-center justify-center">
                  <span className="absolute h-0.5 w-full bg-gradient-to-r from-brand-primary via-gold-primary to-brand-primary" />
                  <div className="relative flex items-center justify-center rounded-full bg-white shadow-xs p-1 border border-cream-border text-gold-primary">
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>

                <div className="flex items-center gap-1.5 h-10 px-3.5 rounded-2xl border border-cream-border bg-white shadow-xs text-xs font-bold text-charcoal-900">
                  <span>🌍</span> {t("badgeAfrica")}
                </div>
              </div>

              <div className="hidden h-8 w-px bg-cream-border sm:block" />

              <div className="flex items-center gap-2 text-xs text-charcoal-600 sm:text-sm font-medium">
                <Sparkles className="h-4 w-4 text-gold-primary shrink-0" />
                <span>
                  <strong className="text-charcoal-900 font-bold">
                    {t("subtextTitle")}
                  </strong>{" "}
                  — {t("subtextSubtitle")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Slideshow */}
          <div className="lg:col-span-5 w-full">
            <HeroSlideshow />
          </div>
        </div>
      </Container>
    </section>
  );
};
