import React from "react";
import { useTranslations } from "next-intl";
import { CreditCard, Heart } from "lucide-react";
import { donationConfig } from "@/content/donation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const PayPalCard: React.FC = () => {
  const t = useTranslations("supportPage");

  return (
    <Card
      variant="white"
      className="p-8 sm:p-10 border border-charcoal-900/5 shadow-card h-full flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gold-warm text-gold-deep flex items-center justify-center">
            <CreditCard className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-charcoal-900">
            {t("paypalTitle")}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
          {t("paypalDesc")}
        </p>

        <div className="p-5 rounded-2xl bg-cream-50 border border-cream-border text-xs sm:text-sm text-charcoal-700 leading-relaxed space-y-2">
          <span className="font-bold text-charcoal-900 block">
            {t("futurePaymentsTitle")}
          </span>
          <p>{t("futurePaymentsDesc")}</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-charcoal-900/5">
        <Button
          href={donationConfig.paypalDonationUrl || "https://paypal.me"}
          external
          variant="gold"
          size="md"
          className="w-full"
          icon={<Heart className="w-4 h-4 fill-current text-brand-darkest" />}
        >
          {t("paypalButton")}
        </Button>
      </div>
    </Card>
  );
};
