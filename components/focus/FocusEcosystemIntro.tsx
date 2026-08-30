import React from "react";
import { useTranslations } from "next-intl";
import { Network } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const FocusEcosystemIntro: React.FC = () => {
  const t = useTranslations("focusPage");

  return (
    <section className="py-12 sm:py-16 bg-white">
      <Container size="content">
        <Card
          variant="gold-accent"
          className="p-8 sm:p-10 border border-cream-border shadow-card"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-gold-warm text-gold-deep border border-gold-border flex items-center justify-center shrink-0 shadow-xs">
              <Network className="w-7 h-7" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-extrabold tracking-widest text-gold-deep">
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
