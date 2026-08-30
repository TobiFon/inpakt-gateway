import React from "react";
import { useTranslations } from "next-intl";
import { Globe2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

interface FocusBilateralDimensionProps {
  bilateralDesc: string;
  actions: string[];
}

export const FocusBilateralDimension: React.FC<
  FocusBilateralDimensionProps
> = ({ bilateralDesc, actions }) => {
  const t = useTranslations("focusDetail");

  return (
    <section className="py-14 sm:py-18 bg-white border-y border-cream-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Bilateral Bridge Card */}
          <div className="lg:col-span-5">
            <Card
              variant="dark"
              className="p-8 sm:p-10 border border-white/15 h-full flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-gold-bright border border-white/20 flex items-center justify-center mb-6">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t("bilateralTitle")}
                </h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  {bilateralDesc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 text-xs font-bold text-gold-bright flex items-center gap-2">
                <span>Africa 🌍</span>
                <span>↔</span>
                <span>Germany 🇩🇪</span>
              </div>
            </Card>
          </div>

          {/* Right: Key Priority Action List */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <Card
              variant="white"
              className="p-8 sm:p-10 border border-cream-border shadow-card"
            >
              <h3 className="text-xl font-bold text-charcoal-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-primary" />
                <span>{t("actionsTitle")}</span>
              </h3>
              <div className="space-y-4">
                {actions.map((action, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-cream-50 border border-cream-border flex items-start gap-3.5 hover:border-brand-primary/30 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-brand-primary text-white text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      {idx + 1}
                    </span>
                    <p className="text-sm font-semibold text-charcoal-800 leading-relaxed">
                      {action}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
