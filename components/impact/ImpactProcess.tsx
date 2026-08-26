import React from "react";
import { useTranslations } from "next-intl";
import { Handshake, Users2, HeartHandshake, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ImpactStep } from "./ImpactStep";

export const ImpactProcess: React.FC = () => {
  const t = useTranslations("howWeWork");

  const steps = [
    {
      num: "01",
      title: t("step1Title"),
      desc: t("step1Desc"),
      icon: Handshake,
    },
    {
      num: "02",
      title: t("step2Title"),
      desc: t("step2Desc"),
      icon: Users2,
    },
    {
      num: "03",
      title: t("step3Title"),
      desc: t("step3Desc"),
      icon: HeartHandshake,
    },
    {
      num: "04",
      title: t("step4Title"),
      desc: t("step4Desc"),
      icon: TrendingUp,
    },
  ];

  return (
    <div className="bg-cream-100 rounded-3xl p-6 sm:p-8 border border-cream-border h-full flex flex-col justify-between">
      <div>
        <p className="text-xs uppercase font-bold tracking-widest text-gold-deep mb-1">
          {t("eyebrow")}
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-tight leading-snug mb-6">
          {t("title")}
        </h3>

        <div className="space-y-6">
          {steps.map((step) => (
            <ImpactStep
              key={step.num}
              stepNumber={step.num}
              title={step.title}
              description={step.desc}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
