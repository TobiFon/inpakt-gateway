"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "./ProjectCard";
import { WorkEmptyState } from "./WorkEmptyState";
import { Project } from "@/types/projects";
import { FilterCategory, ProjectFilters } from "./ProjectFilter";

interface ProjectGridProps {
  initialProjects: Project[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  initialProjects,
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const filteredProjects = initialProjects.filter((proj) => {
    if (!proj.verified) return false;
    if (activeCategory === "all") return true;
    return proj.focusArea === activeCategory;
  });

  return (
    <section className="py-12 sm:py-16 bg-cream-50">
      <Container>
        {/* Interactive Filters Bar */}
        <ProjectFilters
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Dynamic Project List or Transparent Empty State */}
        <div className="mt-8">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <WorkEmptyState />
          )}
        </div>
      </Container>
    </section>
  );
};
