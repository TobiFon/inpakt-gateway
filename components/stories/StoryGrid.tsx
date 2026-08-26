import React from "react";
import { Story } from "@/types/story";
import { Container } from "@/components/ui/Container";
import { StoryCard } from "./StoryCard";
import { StoriesEmptyState } from "./StoriesEmptyState";

interface StoryGridProps {
  initialStories: Story[];
}

export const StoryGrid: React.FC<StoryGridProps> = ({ initialStories }) => {
  const verifiedStories = initialStories.filter((s) => s.verified);

  return (
    <section className="py-12 sm:py-16 bg-cream-50">
      <Container>
        {verifiedStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verifiedStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        ) : (
          <StoriesEmptyState />
        )}
      </Container>
    </section>
  );
};
