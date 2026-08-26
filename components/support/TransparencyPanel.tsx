import React from "react";
import { useTranslations } from "next-intl";
import { ShieldCheck, FileCheck2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const TransparencyPanel: React.FC = () => {
  const t = useTranslations("supportPage");

  return (
    <section className="py-16 sm:py-20 bg-cream-50">
      <Container size="content">
        <Card
          variant="white"
          className="p-8 sm:p-12 border border-charcoal-900/5 shadow-card"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-brand-subtle text-brand-dark flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-gold-deep">
                {t("transparencyEyebrow")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
                {t("transparencyTitle")}
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
                {t("transparencyText1")}
              </p>
              <div className="pt-2 flex items-start gap-3 text-xs sm:text-sm text-charcoal-800 font-medium">
                <FileCheck2 className="w-4 h-4 text-brand-medium shrink-0 mt-0.5" />
                <span>{t("transparencyText2")}</span>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};
