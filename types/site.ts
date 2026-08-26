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

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  focusArea: FocusAreaId;
  location: string;
  summary: string;
  verified: boolean;
  coverImage?: string;
}

export interface OpportunityItem {
  id: string;
  slug: string;
  title: string;
  category:
    | "scholarship"
    | "training"
    | "internship"
    | "volunteer"
    | "youth"
    | "fellowship";
  location: string;
  deadline?: string;
  summary: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  country: "Germany" | "Cameroon" | "International";
  type: "institution" | "ngo" | "university" | "business" | "donor";
  logoUrl?: string;
  websiteUrl?: string;
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
