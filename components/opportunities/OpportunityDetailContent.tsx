import React from "react";
import { useTranslations } from "next-intl";
import { Sparkles, CheckCircle2, FileText } from "lucide-react";
import { Opportunity } from "@/types/opportunity";
import { Card } from "@/components/ui/Card";

interface OpportunityDetailContentProps {
  opportunity: Opportunity;
}

export const OpportunityDetailContent: React.FC<
  OpportunityDetailContentProps
> = ({ opportunity }) => {
  const t = useTranslations("opportunityDetail");

  return (
    <div className="space-y-8">
      {/* 1. Overview & Scope */}
      <Card
        variant="white"
        className="p-8 border border-charcoal-900/5 shadow-card"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-brand-subtle text-brand-dark flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-charcoal-900">
            {t("overviewTitle")}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          {opportunity.description || opportunity.summary}
        </p>
      </Card>

      {/* 2. Eligibility Criteria */}
      {opportunity.eligibility && opportunity.eligibility.length > 0 && (
        <Card
          variant="white"
          className="p-8 border border-charcoal-900/5 shadow-card"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gold-warm text-gold-deep flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-charcoal-900">
              {t("eligibilityTitle")}
            </h2>
          </div>
          <ul className="space-y-3">
            {opportunity.eligibility.map((criterion, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-charcoal-700"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-medium shrink-0 mt-0.5" />
                <span>{criterion}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* 3. Application Instructions */}
      <Card
        variant="white"
        className="p-8 border border-charcoal-900/5 shadow-card"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-brand-subtle text-brand-dark flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-charcoal-900">
            {t("instructionsTitle")}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          Applications are managed directly in collaboration with our verified
          partners. Please review the eligibility guidelines and ensure all
          required documentation is prepared prior to submission.
        </p>
      </Card>
    </div>
  );
};
