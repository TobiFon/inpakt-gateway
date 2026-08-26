import React from "react";
import { useTranslations } from "next-intl";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

interface FocusChallengeApproachProps {
  challengeText: string;
  approachText: string;
}

export const FocusChallengeApproach: React.FC<FocusChallengeApproachProps> = ({
  challengeText,
  approachText,
}) => {
  const t = useTranslations("focusDetail");

  return (
    <section className="py-14 sm:py-18 bg-cream-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenge Matrix */}
          <Card
            variant="white"
            className="p-8 border border-charcoal-900/5 shadow-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-charcoal-900">
                {t("challengeTitle")}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
              {challengeText}
            </p>
          </Card>

          {/* Approach Matrix */}
          <Card
            variant="white"
            className="p-8 border border-charcoal-900/5 shadow-card hover:border-brand-primary/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-subtle text-brand-dark flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-charcoal-900">
                {t("approachTitle")}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
              {approachText}
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
};
