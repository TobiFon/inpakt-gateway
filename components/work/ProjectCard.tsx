import React from "react";
import { Link } from "@/i18n/routing";
import { ArrowRight, MapPin, Building2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Project } from "@/types/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/work/${project.slug}`} className="group block h-full">
      <Card
        variant="white"
        className="h-full flex flex-col justify-between p-6 sm:p-8 border border-charcoal-900/5 shadow-card hover:border-brand-primary/30 transition-all duration-300"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="green" size="sm">
              {project.focusArea}
            </Badge>
            <span className="flex items-center gap-1 text-xs text-charcoal-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-gold-deep" />
              {project.location}
            </span>
          </div>

          <h3 className="text-xl font-bold text-charcoal-900 group-hover:text-brand-primary transition-colors mb-3">
            {project.title}
          </h3>

          <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
            {project.summary}
          </p>
        </div>

        <div className="pt-4 border-t border-charcoal-900/5 flex items-center justify-between">
          <span className="text-xs font-semibold text-brand-primary group-hover:text-gold-deep flex items-center gap-1">
            View Details{" "}
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Card>
    </Link>
  );
};
