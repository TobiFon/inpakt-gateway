import React from "react";
import { useTranslations } from "next-intl";
import {
  ArrowLeftRight,
  CheckCircle2,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const HomeBilateralBridge: React.FC = () => {
  const t = useTranslations("bilateralSection");

  const germanyItems = [
    t("dePoint1"),
    t("dePoint2"),
    t("dePoint3"),
    t("dePoint4"),
  ];

  const cameroonItems = [
    t("cmPoint1"),
    t("cmPoint2"),
    t("cmPoint3"),
    t("cmPoint4"),
  ];

  return (
    <section className="py-16 sm:py-24 bg-cream-100 border-y border-cream-border">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          highlightedWord={t("titleHighlight")}
          description={t("description")}
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-11 gap-6 items-stretch">
          {/* Germany Side */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Card
              variant="white"
              className="p-7 sm:p-9 border border-charcoal-900/5 shadow-card h-full flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-warm text-gold-deep text-xs font-bold uppercase tracking-wider mb-6">
                  <span>🇩🇪</span> {t("germanyBadge")}
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">
                  {t("germanyTitle")}
                </h3>
                <ul className="space-y-3.5">
                  {germanyItems.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-charcoal-700 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal-900/5 text-xs text-charcoal-500 font-medium">
                {t("germanyFooter")}
              </div>
            </Card>
          </div>

          {/* Reciprocal Gateway Core Icon */}
          <div className="lg:col-span-1 flex items-center justify-center py-4">
            <div className="w-14 h-14 rounded-full bg-brand-primary text-gold-light flex items-center justify-center shadow-glow">
              <ArrowLeftRight className="w-6 h-6" />
            </div>
          </div>

          {/* Cameroon Side */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Card
              variant="white"
              className="p-7 sm:p-9 border border-charcoal-900/5 shadow-card h-full flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle text-brand-dark text-xs font-bold uppercase tracking-wider mb-6">
                  <span>🇨🇲</span> {t("cameroonBadge")}
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">
                  {t("cameroonTitle")}
                </h3>
                <ul className="space-y-3.5">
                  {cameroonItems.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-charcoal-700 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-medium shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal-900/5 text-xs text-charcoal-500 font-medium">
                {t("cameroonFooter")}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
