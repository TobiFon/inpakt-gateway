import React from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const PartnershipsHero: React.FC = () => {
  const t = useTranslations("partnershipsPage");

  return (
    <section className="relative bg-gradient-to-b from-brand-subtle/60 via-white to-cream-50 text-charcoal-900 pt-14 sm:pt-20 pb-16 sm:pb-20 overflow-hidden border-b border-cream-border">
      {/* Background Dual Glow */}
      <div className="absolute -top-24 left-[20%] w-[550px] h-[380px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-20 right-[20%] w-[480px] h-[380px] bg-gold-primary/15 rounded-full blur-[120px] pointer-events-none" />

      <Container size="content">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="gold" dot>
            {t("badge")}
          </Badge>

          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-[1.15]">
            {t("heroTitle")}{" "}
            <span className="text-brand-primary">{t("heroHighlight")}</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto font-medium">
            {t("heroSubtitle")}
          </p>
        </div>
      </Container>
    </section>
  );
};
