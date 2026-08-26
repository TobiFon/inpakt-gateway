import React from "react";
import { useTranslations } from "next-intl";
import { Sparkles, Handshake, Heart } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const WorkEmptyState: React.FC = () => {
  const t = useTranslations("workPage");

  return (
    <Card
      variant="white"
      className="p-8 sm:p-14 text-center max-w-3xl mx-auto border border-charcoal-900/5 shadow-card"
    >
      <div className="w-16 h-16 rounded-3xl bg-gold-warm text-gold-deep flex items-center justify-center mx-auto mb-6 shadow-sm">
        <Sparkles className="w-8 h-8" />
      </div>

      <span className="text-xs uppercase font-extrabold tracking-widest text-gold-deep">
        {t("emptyBadge")}
      </span>

      <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
        {t("emptyTitle")}
      </h2>

      <p className="mt-4 text-sm sm:text-base text-charcoal-600 leading-relaxed max-w-xl mx-auto">
        {t("emptyDesc")}
      </p>

      <div className="mt-8 p-5 rounded-2xl bg-cream-50 border border-cream-border text-xs sm:text-sm text-charcoal-700 leading-relaxed max-w-lg mx-auto font-medium">
        {t("emptyCallout")}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button
          href="/partnerships"
          variant="primary"
          size="md"
          icon={<Handshake className="w-4 h-4" />}
        >
          {t("proposeCta")}
        </Button>
        <Button
          href="/support"
          variant="secondary"
          size="md"
          icon={<Heart className="w-4 h-4 fill-current text-gold-deep" />}
        >
          {t("supportCta")}
        </Button>
      </div>
    </Card>
  );
};
