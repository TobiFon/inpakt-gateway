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
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FocusCard } from "./FocusCard";

export const FocusGrid: React.FC = () => {
  const tSec = useTranslations("focusSection");
  const tFocus = useTranslations("focusAreas");

  const focusData = [
    {
      id: "education",
      index: "01",
      title: tFocus("education"),
      desc: tFocus("educationDesc"),
      href: "/focus/education",
      icon: GraduationCap,
    },
    {
      id: "youth",
      index: "02",
      title: tFocus("youth"),
      desc: tFocus("youthDesc"),
      href: "/focus/youth",
      icon: Users,
    },
    {
      id: "health",
      index: "03",
      title: tFocus("health"),
      desc: tFocus("healthDesc"),
      href: "/focus/health",
      icon: HeartHandshake,
    },
    {
      id: "environment",
      index: "04",
      title: tFocus("environment"),
      desc: tFocus("environmentDesc"),
      href: "/focus/environment",
      icon: Sprout,
    },
    {
      id: "humanitarian",
      index: "05",
      title: tFocus("humanitarian"),
      desc: tFocus("humanitarianDesc"),
      href: "/focus/humanitarian-support",
      icon: HandHeart,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-cream-50/50 border-b border-cream-border">
      <Container>
        <SectionHeading
          eyebrow={tSec("eyebrow")}
          title={tSec("title")}
          highlightedWord={tSec("highlight")}
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {focusData.map((item) => (
            <FocusCard
              key={item.id}
              index={item.index}
              title={item.title}
              description={item.desc}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
