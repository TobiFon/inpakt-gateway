import React from "react";
import { useTranslations } from "next-intl";
import { ArrowLeftRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const AboutConnection: React.FC = () => {
  const t = useTranslations("aboutPage");

  const germanyPoints = [
    t("germanyItem1"),
    t("germanyItem2"),
    t("germanyItem3"),
    t("germanyItem4"),
  ];

  const cameroonPoints = [
    t("cameroonItem1"),
    t("cameroonItem2"),
    t("cameroonItem3"),
    t("cameroonItem4"),
  ];

  return (
    <section className="py-16 sm:py-20 bg-cream-50">
      <Container>
        <SectionHeading
          eyebrow={t("connectionEyebrow")}
          title={t("connectionTitle")}
          description={t("connectionDescription")}
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
          {/* Germany Column */}
          <div className="lg:col-span-5">
            <Card
              variant="white"
              className="p-7 sm:p-8 border border-charcoal-900/5 shadow-card hover:border-gold-primary/40"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-warm text-gold-deep text-xs font-bold uppercase tracking-wider mb-5">
                <span>🇩🇪</span> {t("germanyCardTitle")}
              </div>
              <ul className="space-y-3.5">
                {germanyPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-charcoal-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Central Exchange Indicator */}
          <div className="lg:col-span-1 flex items-center justify-center py-2">
            <div className="w-12 h-12 rounded-full bg-brand-primary text-gold-light flex items-center justify-center shadow-glow">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
          </div>

          {/* Cameroon Column */}
          <div className="lg:col-span-5">
            <Card
              variant="white"
              className="p-7 sm:p-8 border border-charcoal-900/5 shadow-card hover:border-brand-primary/40"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-subtle text-brand-dark text-xs font-bold uppercase tracking-wider mb-5">
                <span>🇨🇲</span> {t("cameroonCardTitle")}
              </div>
              <ul className="space-y-3.5">
                {cameroonPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-charcoal-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-medium shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
