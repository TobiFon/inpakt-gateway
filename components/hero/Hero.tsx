// components/hero/Hero.tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Heart, Users2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WorldMapConnection } from "./WorldMapConnection";

export const Hero: React.FC = () => {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-brand-darkest text-white">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/15 blur-[160px]" />

      {/* =========================================================================
          1. DESKTOP WORLD MAP BACKGROUND (lg and above)
          - Container is bound to full section (`inset-0`)
          - Map is anchored to the right
          - Solid dark gradient on the left guarantees clean contrast behind logo & text
      ========================================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block">
        {/* Map Positioned across right 75% */}
        <div className="absolute inset-y-0 left-[24%] right-[-6%] flex items-center justify-center translate-y-3 xl:translate-y-4">
          <WorldMapConnection />
        </div>

        {/* Seamless Left Fade: 100% solid dark behind logo/text, fading into the Atlantic */}
        <div className="absolute inset-y-0 left-0 z-10 w-[56%] bg-gradient-to-r from-brand-darkest via-brand-darkest via-[65%] to-transparent" />

        {/* Top Vignette (protects logo bar) */}
        <div className="absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-brand-darkest via-brand-darkest/80 to-transparent" />

        {/* Bottom Vignette */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-brand-darkest via-brand-darkest/70 to-transparent" />
      </div>

      {/* =========================================================================
          2. MOBILE + TABLET WORLD MAP BACKGROUND (Below lg)
      ========================================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-80 lg:hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-darkest/80 via-brand-darkest/50 to-brand-darkest/90" />
        <div className="absolute inset-0 flex items-center justify-center translate-y-6 scale-[1.15] sm:scale-[1.1]">
          <WorldMapConnection />
        </div>
      </div>

      {/* =========================================================================
          3. HERO NARRATIVE CONTENT
      ========================================================================== */}
      <Container>
        <div className="relative z-20 flex min-h-[600px] items-center py-16 sm:min-h-[660px] sm:py-20 lg:min-h-[680px] lg:py-12 xl:min-h-[720px]">
          <div className="w-full max-w-xl space-y-6">
            {/* Tagline Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-gold-primary" />
              <p className="whitespace-nowrap text-xs font-extrabold uppercase tracking-widest text-gold-light sm:text-sm">
                {t("eyebrow")}
              </p>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
              {t("titlePart1")}{" "}
              <span className="font-normal italic text-gold-primary">
                {t("titleHighlight")}
              </span>
            </h1>

            {/* Description Subtitle */}
            <p className="max-w-xl font-sans text-base leading-relaxed text-white/80 sm:text-lg">
              {t("description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="/support"
                variant="gold"
                size="lg"
                icon={
                  <Heart className="h-4 w-4 fill-current text-brand-darkest" />
                }
              >
                {t("primaryCta")}
              </Button>

              <Button
                href="/partnerships"
                variant="outline-light"
                size="lg"
                icon={<Users2 className="h-4 w-4" />}
              >
                {t("secondaryCta")}
              </Button>
            </div>

            {/* Community Social Proof */}
            <div className="flex items-center gap-3 border-t border-white/10 pt-4">
              <div className="flex shrink-0 -space-x-2 overflow-hidden">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-white ring-2 ring-brand-darkest">
                  CM
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-rich text-xs font-bold text-white ring-2 ring-brand-darkest">
                  DE
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-medium text-xs font-bold text-white ring-2 ring-brand-darkest">
                  IG
                </div>
              </div>

              <div className="text-xs text-white/70">
                <span className="block font-bold text-white">
                  {t("subtextTitle")}
                </span>
                <span>{t("subtextSubtitle")}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
