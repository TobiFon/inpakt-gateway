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
      className="p-8 sm:p-10 border border-cream-border shadow-card h-full flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gold-warm text-gold-deep border border-gold-border flex items-center justify-center shadow-xs">
            <CreditCard className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-charcoal-900">
            {t("paypalTitle")}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6 font-normal">
          {t("paypalDesc")}
        </p>

        <div className="p-5 rounded-2xl bg-cream-50 border border-cream-border text-xs sm:text-sm text-charcoal-700 leading-relaxed space-y-2">
          <span className="font-bold text-charcoal-900 block">
            {t("futurePaymentsTitle")}
          </span>
          <p className="font-normal">{t("futurePaymentsDesc")}</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-cream-border">
        <Button
          href={donationConfig.paypalDonationUrl || "https://paypal.me"}
          external
          variant="gold"
          size="md"
          className="w-full shadow-xs"
          icon={<Heart className="w-4 h-4 fill-current text-white" />}
        >
          {t("paypalButton")}
        </Button>
      </div>
    </Card>
  );
};
