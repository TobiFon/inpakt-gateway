import React from "react";
import { useTranslations } from "next-intl";
import { Globe2, Sparkles, Network, Target, Sprout } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ImpactProcess } from "./ImpactProcess";

export const ImpactPillars: React.FC = () => {
  const t = useTranslations("impactPillars");

  const pillars = [
    {
      title: t("pillar1Title"),
      desc: t("pillar1Desc"),
      icon: Network,
    },
    {
      title: t("pillar2Title"),
      desc: t("pillar2Desc"),
      icon: Sparkles,
    },
    {
      title: t("pillar3Title"),
      desc: t("pillar3Desc"),
      icon: Globe2,
    },
    {
      title: t("pillar4Title"),
      desc: t("pillar4Desc"),
      icon: Target,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-cream-50 border-t border-cream-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Authentic Editorial & 4 Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            {/* Top Narrative Card with Sprout Motif */}
            <div className="bg-brand-darkest text-white rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-brand-primary/30 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold-primary/20 text-gold-light flex items-center justify-center">
                  <Sprout className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase font-bold tracking-widest text-gold-light">
                  {t("eyebrow")}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {t("title")}{" "}
                <span className="text-gold-primary">{t("titleHighlight")}</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                {t("description")}
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-charcoal-900/5 shadow-card hover:border-brand-primary/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-subtle text-brand-dark flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-sm text-charcoal-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-charcoal-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 4-Step Process Card */}
          <div className="lg:col-span-5">
            <ImpactProcess />
          </div>
        </div>
      </Container>
    </section>
  );
};
