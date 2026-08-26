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
        className="p-7 border border-charcoal-900/5 shadow-card"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-subtle text-brand-dark flex items-center justify-center shrink-0">
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
              className="text-sm font-semibold text-brand-primary hover:text-gold-deep transition-colors"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>
      </Card>

      {/* Locations Card */}
      <Card
        variant="white"
        className="p-7 border border-charcoal-900/5 shadow-card"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gold-warm text-gold-deep flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-base text-charcoal-900 mb-1">
              {t("locationsCardTitle")}
            </h3>
            <p className="text-xs text-charcoal-600 mb-2">
              {t("locationsCardDesc")}
            </p>
            <span className="text-sm font-semibold text-charcoal-900">
              Germany 🇩🇪 & Cameroon 🇨🇲
            </span>
          </div>
        </div>
      </Card>

      {/* Social Network Card */}
      <Card
        variant="white"
        className="p-7 border border-charcoal-900/5 shadow-card"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-subtle text-brand-dark flex items-center justify-center shrink-0">
            <Share2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-base text-charcoal-900 mb-1">
              {t("socialsCardTitle")}
            </h3>
            <p className="text-xs text-charcoal-600 mb-3">
              {t("socialsCardDesc")}
            </p>
            <SocialLinks variant="dark" size="sm" />
          </div>
        </div>
      </Card>
    </div>
  );
};
