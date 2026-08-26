"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Heart, Users2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const CTASection: React.FC = () => {
  const t = useTranslations("cta");

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="relative rounded-3xl bg-brand-darkest text-white p-8 sm:p-12 lg:p-14 overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-primary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {t("bannerHeadline")}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-sans">
              {t("bannerSubline")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href="/support"
                variant="gold"
                size="lg"
                icon={
                  <Heart className="w-4 h-4 fill-current text-brand-darkest" />
                }
              >
                {t("supportCta")}
              </Button>
              <Button
                href="/partnerships"
                variant="outline-light"
                size="lg"
                icon={<Users2 className="w-4 h-4" />}
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
