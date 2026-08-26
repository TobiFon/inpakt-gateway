import React from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const PartnershipsHero: React.FC = () => {
  const t = useTranslations("partnershipsPage");

  return (
    <section className="relative bg-brand-darkest text-white pt-14 sm:pt-20 pb-16 sm:pb-24 overflow-hidden border-b border-white/10">
      {/* Glow Effect */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-brand-primary/25 rounded-full blur-[110px] pointer-events-none" />

      <Container size="content">
        <div className="text-center space-y-5">
          <Badge variant="gold" dot>
            {t("badge")}
          </Badge>

          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            {" "}
            {t("heroTitle")}{" "}
            <span className="text-gold-primary">{t("heroHighlight")}</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </Container>
    </section>
  );
};
