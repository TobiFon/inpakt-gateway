import React from "react";
import { useTranslations } from "next-intl";
import { Mail, MapPin, Share2 } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { SocialLinks } from "@/components/shared/SocialLinks";

export const ContactMethods: React.FC = () => {
  const t = useTranslations("contactPage");

  return (
    <div className="space-y-6">
      {/* Email Card */}
      <Card
        variant="white"
        className="p-7 border border-cream-border shadow-card"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-subtle text-brand-primary border border-brand-border flex items-center justify-center shrink-0 shadow-xs">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-base text-charcoal-900 mb-1">
              {t("emailCardTitle")}
            </h3>
            <p className="text-xs text-charcoal-600 mb-3">
              {t("emailCardDesc")}
            </p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-sm font-bold text-brand-primary hover:text-gold-deep transition-colors"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>
      </Card>

      {/* Address Card */}
      <Card
        variant="white"
        className="p-7 border border-cream-border shadow-card"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gold-warm text-gold-deep border border-gold-border flex items-center justify-center shrink-0 shadow-xs">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-base text-charcoal-900">
              {t("locationsCardTitle")}
            </h3>

            <div className="text-xs text-charcoal-700 space-y-1">
              <p className="font-bold text-brand-darkest flex items-center gap-1.5">
                <span>🇩🇪</span> {t("headquartersTitle")}
              </p>
              <p className="text-charcoal-600 pl-5 whitespace-pre-line">
                {t("headquartersDesc")}
              </p>
            </div>

            <div className="text-xs text-charcoal-700 space-y-1 pt-2 border-t border-cream-border">
              <p className="font-bold text-brand-darkest flex items-center gap-1.5">
                <span>🌍</span> {t("liaisonTitle")}
              </p>
              <p className="text-charcoal-600 pl-5 whitespace-pre-line">
                {t("liaisonDesc")}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Social Network Card */}
      <Card
        variant="white"
        className="p-7 border border-cream-border shadow-card"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-subtle text-brand-primary border border-brand-border flex items-center justify-center shrink-0 shadow-xs">
            <Share2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-base text-charcoal-900 mb-1">
              {t("socialsCardTitle")}
            </h3>
            <p className="text-xs text-charcoal-600 mb-3">
              {t("socialsCardDesc")}
            </p>
            <SocialLinks variant="brand" size="sm" />
          </div>
        </div>
      </Card>
    </div>
  );
};
