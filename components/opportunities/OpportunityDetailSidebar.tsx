import React from "react";
import { useTranslations } from "next-intl";
import {
  ExternalLink,
  Calendar,
  MapPin,
  Building2,
  Layers,
  Handshake,
  Mail,
} from "lucide-react";
import { Opportunity } from "@/types/opportunity";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface OpportunityDetailSidebarProps {
  opportunity: Opportunity;
}

export const OpportunityDetailSidebar: React.FC<
  OpportunityDetailSidebarProps
> = ({ opportunity }) => {
  const t = useTranslations("opportunityDetail");

  return (
    <div className="space-y-6">
      <Card
        variant="white"
        className="p-6 sm:p-8 border border-charcoal-900/5 shadow-card"
      >
        <h3 className="text-base font-bold text-charcoal-900 mb-5">
          {t("sidebarOverview")}
        </h3>

        <div className="space-y-4 text-sm">
          {/* Category */}
          <div className="flex items-start gap-3 pb-3 border-b border-charcoal-900/5">
            <Layers className="w-4 h-4 text-brand-medium shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-charcoal-500 block">
                {t("sidebarCategory")}
              </span>
              <span className="font-semibold text-charcoal-900 capitalize">
                {opportunity.category}
              </span>
            </div>
          </div>

          {/* Geographic Scope */}
          <div className="flex items-start gap-3 pb-3 border-b border-charcoal-900/5">
            <MapPin className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-charcoal-500 block">
                {t("sidebarLocation")}
              </span>
              <span className="font-semibold text-charcoal-900">
                {opportunity.locationDetails} ({opportunity.locationType})
              </span>
            </div>
          </div>

          {/* Deadline */}
          {opportunity.deadline && (
            <div className="flex items-start gap-3 pb-3 border-b border-charcoal-900/5">
              <Calendar className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-charcoal-500 block">
                  {t("sidebarDeadline")}
                </span>
                <span className="font-semibold text-charcoal-900">
                  {opportunity.deadline}
                </span>
              </div>
            </div>
          )}

          {/* Organizer */}
          {opportunity.organizer && (
            <div className="flex items-start gap-3 pb-3 border-b border-charcoal-900/5">
              <Building2 className="w-4 h-4 text-charcoal-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-charcoal-500 block">
                  {t("sidebarOrganizer")}
                </span>
                <span className="font-semibold text-charcoal-900">
                  {opportunity.organizer}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Action CTAs */}
        <div className="mt-8 pt-6 border-t border-charcoal-900/5 space-y-3">
          {opportunity.applicationUrl ? (
            <Button
              href={opportunity.applicationUrl}
              external
              variant="gold"
              size="md"
              className="w-full"
              icon={<ExternalLink className="w-4 h-4" />}
            >
              {t("applyNow")}
            </Button>
          ) : opportunity.applicationEmail ? (
            <Button
              href={`mailto:${opportunity.applicationEmail}?subject=Application: ${opportunity.title}`}
              variant="gold"
              size="md"
              className="w-full"
              icon={<Mail className="w-4 h-4" />}
            >
              {t("applyNow")}
            </Button>
          ) : (
            <Button
              href="/contact"
              variant="gold"
              size="md"
              className="w-full"
              icon={<Mail className="w-4 h-4" />}
            >
              {t("contactOrganizer")}
            </Button>
          )}

          <Button
            href="/partnerships#proposal-form"
            variant="secondary"
            size="md"
            className="w-full"
            icon={<Handshake className="w-4 h-4" />}
          >
            {t("shareCall")}
          </Button>
        </div>
      </Card>
    </div>
  );
};
