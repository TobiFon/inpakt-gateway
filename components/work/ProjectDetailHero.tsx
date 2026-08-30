import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowLeft, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Project } from "@/types/projects";

interface ProjectDetailHeroProps {
  project: Project;
}

export const ProjectDetailHero: React.FC<ProjectDetailHeroProps> = ({
  project,
}) => {
  const t = useTranslations("projectDetail");

  const statusLabels = {
    "in-preparation": t("statusInPrep"),
    active: t("statusActive"),
    completed: t("statusCompleted"),
  };

  const statusVariant = {
    "in-preparation": "gold",
    active: "green",
    completed: "neutral",
  } as const;

  return (
    <section className="relative bg-gradient-to-b from-brand-subtle/60 via-white to-cream-50 text-charcoal-900 pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden border-b border-cream-border">
      {/* Background Dual Glow */}
      <div className="absolute -top-20 left-[20%] w-[500px] h-[350px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-20 right-[20%] w-[450px] h-[350px] bg-gold-primary/15 rounded-full blur-[120px] pointer-events-none" />

      <Container size="content">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-darkest hover:text-brand-primary transition-colors bg-white px-3.5 py-1.5 rounded-full border border-cream-border shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t("backToWork")}</span>
          </Link>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="green" dot>
              {project.focusArea.toUpperCase()}
            </Badge>
            <Badge variant={statusVariant[project.status]}>
              {statusLabels[project.status]}
            </Badge>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-charcoal-700 bg-white px-3 py-1 rounded-full border border-cream-border shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-gold-primary" />
              {project.location}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl font-medium">
            {project.summary}
          </p>
        </div>
      </Container>
    </section>
  );
};
