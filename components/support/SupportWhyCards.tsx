import React from "react";
import { useTranslations } from "next-intl";
import { GraduationCap, Rocket, HandHeart, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const SupportWhyCards: React.FC = () => {
  const t = useTranslations("supportPage");

  const pillars = [
    {
      title: t("why1Title"),
      desc: t("why1Desc"),
      icon: GraduationCap,
    },
    {
      title: t("why2Title"),
      desc: t("why2Desc"),
      icon: Rocket,
    },
    {
      title: t("why3Title"),
      desc: t("why3Desc"),
      icon: HandHeart,
    },
    {
      title: t("why4Title"),
      desc: t("why4Desc"),
      icon: Globe2,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-cream-50/50">
      <Container>
        <SectionHeading eyebrow={t("whyEyebrow")} title={t("whyTitle")} />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const isGold = idx % 2 === 1;

            return (
              <Card
                key={idx}
                variant="white"
                className={`p-6 sm:p-8 border border-cream-border shadow-card flex flex-col justify-between transition-all duration-300 ${
                  isGold
                    ? "hover:border-gold-primary/60"
                    : "hover:border-brand-primary/60"
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-xs ${
                      isGold
                        ? "bg-gold-warm text-gold-deep border border-gold-border"
                        : "bg-brand-subtle text-brand-primary border border-brand-border"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-charcoal-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
