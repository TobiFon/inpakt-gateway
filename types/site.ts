export type Locale = "en" | "de" | "fr";

export type FocusAreaId =
  | "education"
  | "youth"
  | "health"
  | "environment"
  | "humanitarian";

export interface FocusArea {
  id: FocusAreaId;
  titleKey: string;
  descKey: string;
  slug: string;
  iconName: string;
}

export interface NavItem {
  key: string;
  href: string;
}

export interface SiteMeta {
  name: string;
  legalName: string;
  registrationCountry: string;
  primaryEmail: string;
  phone?: string;
  socials: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
}
