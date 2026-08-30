import React from "react";
import { useTranslations } from "next-intl";
import { MapPin, Activity, Layers, Handshake, Heart } from "lucide-react";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface ProjectDetailSidebarProps {
  project: Project;
}

export const ProjectDetailSidebar: React.FC<ProjectDetailSidebarProps> = ({
  project,
}) => {
  const t = useTranslations("projectDetail");

  const statusLabels = {
    "in-preparation": t("statusInPrep"),
    active: t("statusActive"),
    completed: t("statusCompleted"),
  };

  return (
    <div className="space-y-6">
      <Card
        variant="white"
        className="p-6 sm:p-8 border border-cream-border shadow-card"
      >
        <h3 className="text-base font-bold text-charcoal-900 mb-5 pb-3 border-b border-cream-border">
          {t("sidebarDetails")}
        </h3>

        <div className="space-y-4 text-sm">
          {/* Location */}
          <div className="flex items-start gap-3 pb-3 border-b border-cream-border">
            <MapPin className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-charcoal-500 block font-semibold">
                {t("sidebarLocation")}
              </span>
              <span className="font-bold text-charcoal-900">
                {project.location}
              </span>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-start gap-3 pb-3 border-b border-cream-border">
            <Activity className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-charcoal-500 block font-semibold">
                {t("sidebarStatus")}
              </span>
              <span className="font-bold text-charcoal-900">
                {statusLabels[project.status]}
              </span>
            </div>
          </div>

          {/* Focus Area */}
          <div className="flex items-start gap-3 pb-3 border-b border-cream-border">
            <Layers className="w-4 h-4 text-brand-darkest shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-charcoal-500 block font-semibold">
                {t("sidebarFocus")}
              </span>
              <span className="font-bold text-charcoal-900 capitalize">
                {project.focusArea}
              </span>
            </div>
          </div>

          {/* Partners */}
          {project.partners && project.partners.length > 0 && (
            <div className="flex items-start gap-3">
              <Handshake className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-charcoal-500 block font-semibold">
                  {t("sidebarPartners")}
                </span>
                <ul className="mt-1 space-y-1 font-medium text-charcoal-800">
                  {project.partners.map((partner, idx) => (
                    <li key={idx}>• {partner}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Action CTAs */}
        <div className="mt-8 pt-6 border-t border-cream-border space-y-3">
          <Button
            href="/support"
            variant="gold"
            size="md"
            className="w-full shadow-xs"
            icon={<Heart className="w-4 h-4 fill-current text-white" />}
          >
            {t("supportThisProject")}
          </Button>
          <Button
            href="/partnerships"
            variant="outline-dark"
            size="md"
            className="w-full"
            icon={<Handshake className="w-4 h-4 text-brand-primary" />}
          >
            {t("partnerOnThis")}
          </Button>
        </div>
      </Card>
    </div>
  );
};
