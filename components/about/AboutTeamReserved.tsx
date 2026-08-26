import React from "react";
import { useTranslations } from "next-intl";
import { Shield, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const AboutTeamReserved: React.FC = () => {
  const t = useTranslations("aboutPage");

  return (
    <section className="py-14 bg-cream-100 border-t border-cream-border">
      <Container size="content">
        <Card
          variant="white"
          className="p-8 sm:p-10 border border-charcoal-900/5 shadow-card"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-brand-subtle text-brand-dark flex items-center justify-center shrink-0">
              <Building2 className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-widest text-gold-deep">
                  {t("teamEyebrow")}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-dark bg-brand-subtle px-2.5 py-0.5 rounded-full">
                  <Shield className="w-3 h-3 text-brand-medium" /> Eingetragener
                  Verein (e.V.)
                </span>
              </div>
              <h3 className="text-xl font-bold text-charcoal-900">
                {t("teamTitle")}
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                {t("teamNotice")}
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};
