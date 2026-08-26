import React from "react";
import { useTranslations } from "next-intl";
import { Compass, Eye, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const AboutMissionVision: React.FC = () => {
  const t = useTranslations("aboutPage");

  return (
    <section className="py-16 sm:py-20 bg-cream-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Mission Card */}
          <Card
            variant="white"
            className="p-8 sm:p-10 border border-charcoal-900/5 shadow-card hover:border-brand-primary/30 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-subtle text-brand-dark flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase font-bold tracking-widest text-gold-deep mb-2">
                {t("missionEyebrow")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight mb-4">
                {t("missionTitle")}
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
                {t("missionText")}
              </p>
            </div>
          </Card>

          {/* Vision Card */}
          <Card
            variant="dark"
            className="p-8 sm:p-10 border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-gold-primary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-gold-light flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase font-bold tracking-widest text-gold-light mb-2">
                {t("missionEyebrow")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                {t("visionTitle")}
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                {t("visionText")}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-gold-light font-medium relative z-10">
              <MapPin className="w-4 h-4 shrink-0 text-gold-primary" />
              <span>{t("journeyNote")}</span>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};
