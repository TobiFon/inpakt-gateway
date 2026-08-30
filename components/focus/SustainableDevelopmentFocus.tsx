"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  GraduationCap,
  Users,
  HeartHandshake,
  Sprout,
  Globe,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const PILLAR_IMAGES = {
  pillar1:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  pillar2:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  pillar3:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  pillar4:
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
};

export const SustainableDevelopmentFocus: React.FC = () => {
  const t = useTranslations("sustainableFocus");

  const pillars = [
    {
      id: "pillar1",
      icon: GraduationCap,
      sdg: t("pillar1.sdg"),
      title: t("pillar1.title"),
      description: t("pillar1.description"),
      image: PILLAR_IMAGES.pillar1,
    },
    {
      id: "pillar2",
      icon: Users,
      sdg: t("pillar2.sdg"),
      title: t("pillar2.title"),
      description: t("pillar2.description"),
      image: PILLAR_IMAGES.pillar2,
    },
    {
      id: "pillar3",
      icon: HeartHandshake,
      sdg: t("pillar3.sdg"),
      title: t("pillar3.title"),
      description: t("pillar3.description"),
      image: PILLAR_IMAGES.pillar3,
    },
    {
      id: "pillar4",
      icon: Sprout,
      sdg: t("pillar4.sdg"),
      title: t("pillar4.title"),
      description: t("pillar4.description"),
      image: PILLAR_IMAGES.pillar4,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-subtle/50 via-white to-cream-50 py-16 sm:py-20 border-b border-cream-border">
        <div className="absolute -top-24 left-[20%] w-[550px] h-[400px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -top-24 right-[20%] w-[500px] h-[400px] bg-gold-primary/15 rounded-full blur-[120px] pointer-events-none" />

        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-border bg-gold-warm px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-gold-deep shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-gold-primary" />
              <span>{t("badge")}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-900 leading-[1.12]">
              {t("heroTitlePrefix")}{" "}
              <span className="text-brand-primary">
                {t("heroTitleHighlight")}
              </span>
            </h1>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-cream-border text-left sm:text-center shadow-card gold-border-top">
              <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
                {t("manifesto")}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button
                href="/work"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {t("viewProjectsBtn")}
              </Button>
              <Button href="/contact" variant="outline-dark" size="lg">
                {t("partnerBtn")}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Pillars Grid */}
      <section className="py-16 sm:py-24 bg-cream-50/50">
        <Container>
          <SectionHeading
            eyebrow={t("pillarsEyebrow")}
            title={t("pillarsTitle")}
            highlightedWord={t("pillarsHighlight")}
            description={t("pillarsDescription")}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={pillar.id}
                  variant="white"
                  className="overflow-hidden border border-cream-border shadow-card hover:border-brand-primary/40 flex flex-col group transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-darkest">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gold-primary text-white backdrop-blur-md shadow-xs">
                        {pillar.sdg}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center shrink-0 border border-white/20">
                        <Icon className="w-5 h-5 text-gold-bright" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="pt-4 border-t border-cream-border flex items-center justify-between">
                      <span className="text-xs font-bold text-brand-darkest flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                        {t("sdgAligned")}
                      </span>

                      <Link
                        href="/work"
                        className="text-xs font-bold text-brand-primary hover:text-gold-deep inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        <span>{t("relatedProjects")}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. SDG 17 Multilateral Narrative */}
      <section className="py-16 bg-white border-t border-cream-border">
        <Container size="content">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-warm text-gold-deep border border-gold-border mx-auto mb-2 shadow-xs">
              <Globe className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-serif">
              {t("sdg17Title")}
            </h3>
            <p className="text-sm text-charcoal-600 leading-relaxed font-normal">
              {t("sdg17Desc")}
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};
