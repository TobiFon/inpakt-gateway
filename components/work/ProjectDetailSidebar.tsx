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
        className="p-6 sm:p-8 border border-charcoal-900/5 shadow-card"
      >
        <h3 className="text-base font-bold text-charcoal-900 mb-5">
          {t("sidebarDetails")}
        </h3>

        <div className="space-y-4 text-sm">
          {/* Location item */}
          <div className="flex items-start gap-3 pb-3 border-b border-charcoal-900/5">
            <MapPin className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-charcoal-500 block">
                {t("sidebarLocation")}
              </span>
              <span className="font-semibold text-charcoal-900">
                {project.location}
              </span>
            </div>
          </div>

          {/* Status item */}
          <div className="flex items-start gap-3 pb-3 border-b border-charcoal-900/5">
            <Activity className="w-4 h-4 text-brand-medium shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-charcoal-500 block">
                {t("sidebarStatus")}
              </span>
              <span className="font-semibold text-charcoal-900">
                {statusLabels[project.status]}
              </span>
            </div>
          </div>

          {/* Focus area item */}
          <div className="flex items-start gap-3 pb-3 border-b border-charcoal-900/5">
            <Layers className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-charcoal-500 block">
                {t("sidebarFocus")}
              </span>
              <span className="font-semibold text-charcoal-900 capitalize">
                {project.focusArea}
              </span>
            </div>
          </div>

          {/* Participating partners (if available) */}
          {project.partners && project.partners.length > 0 && (
            <div className="flex items-start gap-3">
              <Handshake className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-charcoal-500 block">
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
        <div className="mt-8 pt-6 border-t border-charcoal-900/5 space-y-3">
          <Button
            href="/support"
            variant="gold"
            size="md"
            className="w-full"
            icon={<Heart className="w-4 h-4 fill-current text-brand-darkest" />}
          >
            {t("supportThisProject")}
          </Button>
          <Button
            href="/partnerships"
            variant="secondary"
            size="md"
            className="w-full"
            icon={<Handshake className="w-4 h-4" />}
          >
            {t("partnerOnThis")}
          </Button>
        </div>
      </Card>
    </div>
  );
};
