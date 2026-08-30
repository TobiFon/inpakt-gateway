import React from "react";
import { useTranslations } from "next-intl";
import { ShieldCheck, FileCheck2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const TransparencyPanel: React.FC = () => {
  const t = useTranslations("supportPage");

  return (
    <section className="py-16 sm:py-24 bg-cream-50/50">
      <Container size="content">
        <Card
          variant="gold-accent"
          className="p-8 sm:p-12 border border-cream-border shadow-card"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-brand-subtle text-brand-primary border border-brand-border flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-widest text-gold-deep">
                {t("transparencyEyebrow")}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal-900">
                {t("transparencyTitle")}
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-normal">
                {t("transparencyText1")}
              </p>
              <div className="pt-3 flex items-start gap-3 text-xs sm:text-sm text-charcoal-800 font-semibold">
                <FileCheck2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <span>{t("transparencyText2")}</span>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};
