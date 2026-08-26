import React from "react";
import { useTranslations } from "next-intl";
import { Sparkles, Network } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const FocusEcosystemIntro: React.FC = () => {
  const t = useTranslations("focusPage");

  return (
    <section className="py-12 sm:py-16 bg-cream-50">
      <Container size="content">
        <Card
          variant="white"
          className="p-8 sm:p-10 border border-charcoal-900/5 shadow-card"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-12 h-12 rounded-2xl bg-gold-warm text-gold-deep flex items-center justify-center shrink-0">
              <Network className="w-6 h-6" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-widest text-gold-deep">
                  {t("ecosystemEyebrow")}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900">
                {t("ecosystemTitle")}
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
                {t("ecosystemDesc")}
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};
