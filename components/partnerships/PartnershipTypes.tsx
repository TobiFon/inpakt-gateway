import React from "react";
import { useTranslations } from "next-intl";
import {
  GraduationCap,
  Landmark,
  Briefcase,
  HeartHandshake,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const PartnershipTypes: React.FC = () => {
  const t = useTranslations("partnershipsPage");

  const partnerTypes = [
    {
      title: t("type1Title"),
      desc: t("type1Desc"),
      icon: GraduationCap,
    },
    {
      title: t("type2Title"),
      desc: t("type2Desc"),
      icon: Landmark,
    },
    {
      title: t("type3Title"),
      desc: t("type3Desc"),
      icon: Briefcase,
    },
    {
      title: t("type4Title"),
      desc: t("type4Desc"),
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-cream-50">
      <Container>
        <SectionHeading eyebrow={t("typesEyebrow")} title={t("typesTitle")} />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                variant="white"
                className="p-6 sm:p-8 border border-charcoal-900/5 shadow-card hover:border-brand-primary/30 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-subtle text-brand-dark flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-charcoal-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
