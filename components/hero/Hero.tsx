import React from "react";
import { useTranslations } from "next-intl";
import { Heart, Users2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WorldMapConnection } from "./WorldMapConnection";

export const Hero: React.FC = () => {
  const t = useTranslations("hero");

  return (
    <section className="relative bg-brand-darkest text-white pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden border-b border-white/10">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Hero Narrative Copy */}
          <div className="lg:col-span-6 z-10 space-y-6">
            {/* Tagline Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-primary animate-ping" />
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-gold-light">
                {t("eyebrow")}
              </p>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12]">
              {t("titlePart1")}{" "}
              <span className="text-gold-primary underline decoration-gold-primary/40 decoration-4 underline-offset-8">
                {t("titleHighlight")}
              </span>
            </h1>

            {/* Clear Value Proposition Subtitle */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              {t("description")}
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="/support"
                variant="gold"
                size="lg"
                icon={
                  <Heart className="w-4 h-4 fill-current text-brand-darkest" />
                }
              >
                {t("primaryCta")}
              </Button>
              <Button
                href="/partnerships"
                variant="outline-light"
                size="lg"
                icon={<Users2 className="w-4 h-4" />}
              >
                {t("secondaryCta")}
              </Button>
            </div>

            {/* Human Collaboration & Community Indicator */}
            <div className="pt-4 flex items-center gap-3 border-t border-white/10">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-darkest bg-brand-primary flex items-center justify-center text-xs font-bold text-white">
                  CM
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-darkest bg-gold-rich flex items-center justify-center text-xs font-bold text-white">
                  DE
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-darkest bg-brand-medium flex items-center justify-center text-xs font-bold text-white">
                  IG
                </div>
              </div>
              <div className="text-xs text-white/70">
                <span className="font-semibold text-white block">
                  {t("subtextTitle")}
                </span>
                <span>{t("subtextSubtitle")}</span>
              </div>
            </div>
          </div>

          {/* Right Visual: Signature Cameroon <-> Germany Vector Map */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <WorldMapConnection />
          </div>
        </div>
      </Container>
    </section>
  );
};
