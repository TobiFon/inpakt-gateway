import React from "react";
import { useTranslations } from "next-intl";
import {
  GraduationCap,
  Users,
  HeartHandshake,
  Sprout,
  HandHeart,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FocusDetailedCard } from "./FocusDetailedCard";

export const FocusDetailedGrid: React.FC = () => {
  const tFocus = useTranslations("focusAreas");
  const tPage = useTranslations("focusPage");

  const focusData = [
    {
      id: "education",
      title: tFocus("education"),
      desc: tFocus("educationDesc"),
      thematicText: tPage("eduThematic"),
      href: "/focus/education",
      icon: GraduationCap,
      badgeIndex: "Pillar 01",
    },
    {
      id: "youth",
      title: tFocus("youth"),
      desc: tFocus("youthDesc"),
      thematicText: tPage("youthThematic"),
      href: "/focus/youth",
      icon: Users,
      badgeIndex: "Pillar 02",
    },
    {
      id: "health",
      title: tFocus("health"),
      desc: tFocus("healthDesc"),
      thematicText: tPage("healthThematic"),
      href: "/focus/health",
      icon: HeartHandshake,
      badgeIndex: "Pillar 03",
    },
    {
      id: "environment",
      title: tFocus("environment"),
      desc: tFocus("environmentDesc"),
      thematicText: tPage("envThematic"),
      href: "/focus/environment",
      icon: Sprout,
      badgeIndex: "Pillar 04",
    },
    {
      id: "humanitarian",
      title: tFocus("humanitarian"),
      desc: tFocus("humanitarianDesc"),
      thematicText: tPage("humanitarianThematic"),
      href: "/focus/humanitarian-support",
      icon: HandHeart,
      badgeIndex: "Pillar 05",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-cream-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusData.map((item) => (
            <FocusDetailedCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.desc}
              thematicText={item.thematicText}
              href={item.href}
              icon={item.icon}
              badgeIndex={item.badgeIndex}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
