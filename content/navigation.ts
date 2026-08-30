import { FocusArea, NavItem } from "@/types/site";

export const headerNavItems: NavItem[] = [
  { key: "about", href: "/about" },
  { key: "focus", href: "/focus" },
  { key: "work", href: "/work" },
  { key: "partnerships", href: "/partnerships" },
  { key: "contact", href: "/contact" },
];

export const allNavItems: NavItem[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "focus", href: "/focus" },
  { key: "work", href: "/work" },
  { key: "partnerships", href: "/partnerships" },
  { key: "support", href: "/support" },
  { key: "contact", href: "/contact" },
];

export const focusAreas: FocusArea[] = [
  {
    id: "education",
    titleKey: "focusAreas.education",
    descKey: "focusAreas.educationDesc",
    slug: "/focus/education",
    iconName: "GraduationCap",
  },
  {
    id: "youth",
    titleKey: "focusAreas.youth",
    descKey: "focusAreas.youthDesc",
    slug: "/focus/youth",
    iconName: "Users",
  },
  {
    id: "health",
    titleKey: "focusAreas.health",
    descKey: "focusAreas.healthDesc",
    slug: "/focus/health",
    iconName: "HeartHandshake",
  },
  {
    id: "environment",
    titleKey: "focusAreas.environment",
    descKey: "focusAreas.environmentDesc",
    slug: "/focus/environment",
    iconName: "Sprout",
  },
  {
    id: "humanitarian",
    titleKey: "focusAreas.humanitarian",
    descKey: "focusAreas.humanitarianDesc",
    slug: "/focus/humanitarian-support",
    iconName: "HandHeart",
  },
];
