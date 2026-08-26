import { FocusAreaId } from "./site";

export type ProjectStatus = "in-preparation" | "active" | "completed";

export interface Project {
  id: string;
  slug: string;
  title: string;
  focusArea: FocusAreaId;
  location: string;
  country: "Cameroon" | "Germany" | "Bilateral";
  summary: string;
  challenge?: string;
  approach?: string;
  status: ProjectStatus;
  verified: boolean;
  coverImage?: string;
  partners?: string[];
  date?: string;
}
