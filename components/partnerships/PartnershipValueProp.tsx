import React from "react";
import { useTranslations } from "next-intl";
import { MapPin, ShieldCheck, Scale, History } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const PartnershipValueProp: React.FC = () => {
  const t = useTranslations("partnershipsPage");

  const values = [
    {
      title: t("val1Title"),
      desc: t("val1Desc"),
      icon: MapPin,
    },
    {
      title: t("val2Title"),
      desc: t("val2Desc"),
      icon: ShieldCheck,
    },
    {
      title: t("val3Title"),
      desc: t("val3Desc"),
      icon: Scale,
    },
    {
      title: t("val4Title"),
      desc: t("val4Desc"),
      icon: History,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-cream-100 border-y border-cream-border">
      <Container>
        <SectionHeading eyebrow={t("valueEyebrow")} title={t("valueTitle")} />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                variant="white"
                className="p-7 sm:p-8 border border-charcoal-900/5 shadow-card flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold-warm text-gold-deep flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-charcoal-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed">
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
