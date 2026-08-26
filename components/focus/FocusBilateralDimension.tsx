import React from "react";
import { useTranslations } from "next-intl";
import { Globe2, ArrowRight } from "lucide-react";
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
    <section className="py-14 sm:py-18 bg-cream-100 border-y border-cream-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Bilateral Concept Card */}
          <div className="lg:col-span-5">
            <Card
              variant="dark"
              className="p-8 sm:p-10 border border-white/10 h-full flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-gold-light flex items-center justify-center mb-6">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t("bilateralTitle")}
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {bilateralDesc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-xs font-semibold text-gold-light">
                Cameroon 🇨🇲 ↔ Germany 🇩🇪
              </div>
            </Card>
          </div>

          {/* Right: Key Priority Action List */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <Card
              variant="white"
              className="p-8 sm:p-10 border border-charcoal-900/5 shadow-card"
            >
              <h3 className="text-xl font-bold text-charcoal-900 mb-6">
                {t("actionsTitle")}
              </h3>
              <div className="space-y-4">
                {actions.map((action, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-cream-50 border border-cream-border flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-brand-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm font-medium text-charcoal-800 leading-relaxed">
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
