import React from "react";
import { Story } from "@/types/story";
import { Card } from "@/components/ui/Card";

interface StoryDetailContentProps {
  story: Story;
}

export const StoryDetailContent: React.FC<StoryDetailContentProps> = ({
  story,
}) => {
  return (
    <Card
      variant="white"
      className="p-8 sm:p-14 border border-charcoal-900/5 shadow-card"
    >
      <div className="prose prose-sm sm:prose-base max-w-none text-charcoal-700 leading-relaxed space-y-6">
        <p className="text-lg font-medium text-charcoal-900 leading-relaxed">
          {story.summary}
        </p>
        <div className="whitespace-pre-line">{story.content}</div>
      </div>
    </Card>
  );
};
