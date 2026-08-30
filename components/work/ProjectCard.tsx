import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  Image as ImageIcon,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Project } from "@/types/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const t = useTranslations("workPage");

  return (
    <Card
      variant="white"
      className="h-full flex flex-col justify-between overflow-hidden border border-cream-border shadow-card hover:border-brand-primary/40 hover:shadow-card-hover transition-all duration-300 group"
    >
      <div>
        {project.coverImage && (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-darkest">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-brand-primary text-white backdrop-blur-md shadow-xs border border-white/20">
                {project.focusArea}
              </span>
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/60 text-white backdrop-blur-md border border-white/15">
                  <ImageIcon className="w-3 h-3 text-gold-bright" />
                  <span>
                    {t("photosCount", { count: project.gallery.length + 1 })}
                  </span>
                </span>
              </div>
            )}

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
              <span className="flex items-center gap-1 bg-black/60 px-3 py-0.5 rounded-full backdrop-blur-md border border-white/15">
                <MapPin className="w-3.5 h-3.5 text-gold-bright" />
                {project.location}
              </span>
              <span className="text-[11px] font-extrabold text-gold-bright uppercase tracking-wider">
                {project.country}
              </span>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-7">
          <h3 className="text-lg sm:text-xl font-bold text-charcoal-900 group-hover:text-brand-primary transition-colors mb-3 leading-snug">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-5 font-normal">
            {project.summary}
          </p>

          {project.activities && project.activities.length > 0 && (
            <div className="space-y-2 pt-4 border-t border-cream-border">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-brand-primary">
                {t("keyActivities")}
              </p>
              <ul className="space-y-1.5">
                {project.activities.slice(0, 2).map((act, i) => (
                  <li
                    key={i}
                    className="text-xs text-charcoal-700 flex items-start gap-2 font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="px-6 pb-6 pt-2">
        <Link
          href={`/work/${project.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-brand-subtle text-brand-darkest border border-brand-border hover:bg-brand-primary hover:text-white text-xs font-bold transition-all duration-200 shadow-xs"
        >
          <span>{t("exploreProject")}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </Card>
  );
};
