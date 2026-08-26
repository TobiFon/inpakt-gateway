"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Landmark, Copy, Check } from "lucide-react";
import { donationConfig } from "@/content/donation";
import { Card } from "@/components/ui/Card";

export const BankTransferCard: React.FC = () => {
  const t = useTranslations("supportPage");
  const [copied, setCopied] = useState(false);

  const handleCopyIban = () => {
    navigator.clipboard.writeText(donationConfig.bank.iban.replace(/\s+/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <Card
      variant="white"
      className="p-8 sm:p-10 border border-charcoal-900/5 shadow-card h-full flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-subtle text-brand-dark flex items-center justify-center">
            <Landmark className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-charcoal-900">
            {t("bankTitle")}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
          {t("bankDesc")}
        </p>

        {/* Bank Parameters Table */}
        <div className="space-y-3.5 text-xs sm:text-sm bg-cream-50 p-5 rounded-2xl border border-cream-border">
          <div>
            <span className="text-xs text-charcoal-500 block font-medium">
              {t("fieldAccountHolder")}
            </span>
            <span className="font-bold text-charcoal-900">
              {donationConfig.bank.accountHolder}
            </span>
          </div>

          <div>
            <span className="text-xs text-charcoal-500 block font-medium">
              {t("fieldBank")}
            </span>
            <span className="font-semibold text-charcoal-900">
              {donationConfig.bank.bankName}
            </span>
          </div>

          <div>
            <span className="text-xs text-charcoal-500 block font-medium">
              {t("fieldIban")}
            </span>
            <span className="font-mono font-bold text-charcoal-900 tracking-wider">
              {donationConfig.bank.iban}
            </span>
          </div>

          <div>
            <span className="text-xs text-charcoal-500 block font-medium">
              {t("fieldBic")}
            </span>
            <span className="font-mono font-semibold text-charcoal-900">
              {donationConfig.bank.bic}
            </span>
          </div>

          <div>
            <span className="text-xs text-charcoal-500 block font-medium">
              {t("fieldReference")}
            </span>
            <span className="font-medium text-charcoal-800">
              {donationConfig.bank.referencePrefix}
            </span>
          </div>
        </div>
      </div>

      {/* Copy Trigger */}
      <div className="mt-6 pt-4 border-t border-charcoal-900/5">
        <button
          onClick={handleCopyIban}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-brand-primary text-white text-xs sm:text-sm font-semibold hover:bg-brand-dark transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-gold-light" />
              <span>{t("copied")}</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>{t("copyIban")}</span>
            </>
          )}
        </button>
      </div>
    </Card>
  );
};
