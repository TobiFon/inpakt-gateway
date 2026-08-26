export type OpportunityCategory =
  | "scholarship"
  | "training"
  | "internship"
  | "volunteer"
  | "youth"
  | "fellowship"
  | "event";

export type OpportunityLocationType =
  | "Cameroon"
  | "Germany"
  | "Remote"
  | "Bilateral";

export interface Opportunity {
  id: string;
  slug: string;
  title: string;
  category: OpportunityCategory;
  locationType: OpportunityLocationType;
  locationDetails: string;
  summary: string;
  description?: string;
  eligibility?: string[];
  deadline?: string;
  applicationUrl?: string;
  applicationEmail?: string;
  organizer?: string;
  verified: boolean;
}
