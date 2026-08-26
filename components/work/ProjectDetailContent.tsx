import React from "react";
import { useTranslations } from "next-intl";
import { AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/Card";

interface ProjectDetailContentProps {
  project: Project;
}

export const ProjectDetailContent: React.FC<ProjectDetailContentProps> = ({
  project,
}) => {
  const t = useTranslations("projectDetail");

  return (
    <div className="space-y-8">
      {/* 1. Context & Challenge */}
      {project.challenge && (
        <Card
          variant="white"
          className="p-8 border border-charcoal-900/5 shadow-card"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-charcoal-900">
              {t("challengeTitle")}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            {project.challenge}
          </p>
        </Card>
      )}

      {/* 2. Strategic Approach */}
      {project.approach && (
        <Card
          variant="white"
          className="p-8 border border-charcoal-900/5 shadow-card hover:border-brand-primary/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-subtle text-brand-dark flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-charcoal-900">
              {t("approachTitle")}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            {project.approach}
          </p>
        </Card>
      )}

      {/* 3. Sustainable Impact Perspective */}
      <Card
        variant="white"
        className="p-8 border border-charcoal-900/5 shadow-card"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gold-warm text-gold-deep flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-charcoal-900">
            {t("impactTitle")}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          {project.summary}
        </p>
      </Card>
    </div>
  );
};
