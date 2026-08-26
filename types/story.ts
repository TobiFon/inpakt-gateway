export type StoryCategory =
  | "announcement"
  | "initiative-update"
  | "community-story"
  | "insight";

export interface Story {
  id: string;
  slug: string;
  title: string;
  category: StoryCategory;
  date: string;
  readingTimeMinutes: number;
  summary: string;
  content: string;
  author?: {
    name: string;
    role?: string;
  };
  coverImage?: string;
  verified: boolean;
}
