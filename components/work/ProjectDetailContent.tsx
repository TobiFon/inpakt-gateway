import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Image as ImageIcon,
} from "lucide-react";
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
      {/* 1. Media Gallery & Photos */}
      {((project.gallery && project.gallery.length > 0) ||
        project.coverImage) && (
        <Card
          variant="white"
          className="p-6 sm:p-8 border border-cream-border shadow-card overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-subtle text-brand-primary border border-brand-border flex items-center justify-center">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-charcoal-900 font-serif">
                {t("mediaTitle")}
              </h2>
              <p className="text-xs text-charcoal-500 font-medium">
                {t("mediaSubtitle")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.coverImage && (
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xs bg-brand-darkest group border border-cream-border">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} cover`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            {project.gallery?.map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xs bg-brand-darkest group border border-cream-border"
              >
                <Image
                  src={imgUrl}
                  alt={`${project.title} photo ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* 2. Key Activities */}
      {project.activities && project.activities.length > 0 && (
        <Card
          variant="white"
          className="p-6 sm:p-8 border border-cream-border shadow-card"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gold-warm text-gold-deep border border-gold-border flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-charcoal-900 font-serif">
              {t("activitiesTitle")}
            </h2>
          </div>
          <ul className="space-y-3">
            {project.activities.map((activity, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-charcoal-700 font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* 3. Challenge */}
      {project.challenge && (
        <Card
          variant="white"
          className="p-8 border border-cream-border shadow-card"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 border border-red-200 flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-charcoal-900 font-serif">
              {t("challengeTitle")}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            {project.challenge}
          </p>
        </Card>
      )}

      {/* 4. Strategic Approach */}
      {project.approach && (
        <Card
          variant="white"
          className="p-8 border border-cream-border shadow-card hover:border-brand-primary/40"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-subtle text-brand-darkest border border-brand-border flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-brand-primary" />
            </div>
            <h2 className="text-xl font-bold text-charcoal-900 font-serif">
              {t("approachTitle")}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            {project.approach}
          </p>
        </Card>
      )}

      {/* 5. Intended & Verified Impact */}
      <Card
        variant="white"
        className="p-8 border border-cream-border shadow-card"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gold-warm text-gold-deep border border-gold-border flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-charcoal-900 font-serif">
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
