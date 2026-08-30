import React from "react";
import { useTranslations } from "next-intl";
import { Compass, Eye, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const AboutMissionVision: React.FC = () => {
  const t = useTranslations("aboutPage");

  return (
    <section className="py-16 sm:py-20 bg-cream-50/50">
      <Container>
        <Card
          variant="gold-accent"
          className="p-8 sm:p-12 border border-cream-border shadow-card hover:border-brand-primary/40 relative overflow-hidden"
        >
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 relative z-10">
            {/* Mission Column */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-subtle text-brand-primary border border-brand-border flex items-center justify-center mb-6 shadow-xs">
                  <Compass className="w-6 h-6" />
                </div>
                <p className="text-xs uppercase font-extrabold tracking-widest text-brand-primary mb-2">
                  {t("missionEyebrow")}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight mb-4">
                  {t("missionTitle")}
                </h2>
                <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
                  {t("missionText")}
                </p>
              </div>
            </div>

            {/* Vision Column */}
            <div className="flex flex-col justify-between lg:border-l lg:border-cream-border lg:pl-12 pt-8 lg:pt-0 border-t border-cream-border lg:border-t-0">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-warm text-gold-deep border border-gold-border flex items-center justify-center mb-6 shadow-xs">
                  <Eye className="w-6 h-6" />
                </div>
                <p className="text-xs uppercase font-extrabold tracking-widest text-gold-deep mb-2">
                  OUR HORIZON & VISION
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight mb-4">
                  {t("visionTitle")}
                </h2>
                <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
                  {t("visionText")}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-cream-border flex items-center gap-2 text-xs text-brand-darkest font-semibold">
                <Sparkles className="w-4 h-4 shrink-0 text-gold-primary" />
                <span>{t("journeyNote")}</span>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};
