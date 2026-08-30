"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Heart, Users2, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const CTASection: React.FC = () => {
  const t = useTranslations("cta");

  return (
    <section className="py-14 sm:py-18">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-darkest via-brand-dark to-brand-primary text-white p-8 sm:p-12 lg:p-16 overflow-hidden border border-brand-border/30 shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-primary/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-light/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold-bright text-xs font-extrabold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
              <span>{t("pillTag")}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {t("bannerHeadline")}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl font-sans">
              {t("bannerSubline")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href="/support"
                variant="gold"
                size="lg"
                className="shadow-lg hover:shadow-xl"
                icon={<Heart className="w-4 h-4 fill-current text-white" />}
              >
                {t("supportCta")}
              </Button>
              <Button
                href="/partnerships"
                variant="outline-light"
                size="lg"
                icon={<Users2 className="w-4 h-4 text-gold-bright" />}
              >
                {t("partnerCta")}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
