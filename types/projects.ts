import { FocusAreaId, Locale } from "./site";

export type ProjectStatus = "in-preparation" | "active" | "completed";

export interface ProjectMedia {
  type: "image" | "video";
  url: string;
  caption?: string;
}

export interface LocalizedProjectContent {
  title: string;
  location: string;
  country: string;
  summary: string;
  challenge?: string;
  approach?: string;
  activities?: string[];
  partners?: string[];
}

export interface ProjectSource {
  id: string;
  slug: string;
  focusArea: FocusAreaId;
  status: ProjectStatus;
  verified: boolean;
  coverImage?: string;
  gallery?: string[];
  media?: ProjectMedia[];
  date?: string;
  locales: Record<Locale, LocalizedProjectContent>;
}

export interface Project extends LocalizedProjectContent {
  id: string;
  slug: string;
  focusArea: FocusAreaId;
  status: ProjectStatus;
  verified: boolean;
  coverImage?: string;
  gallery?: string[];
  media?: ProjectMedia[];
  date?: string;
  locales?: Record<Locale, LocalizedProjectContent>;
}

export type LocalizedProject = Project;
