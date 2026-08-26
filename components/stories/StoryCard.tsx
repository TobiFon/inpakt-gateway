import React from "react";
import { Link } from "@/i18n/routing";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Story } from "@/types/story";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <Link href={`/stories/${story.slug}`} className="group block h-full">
      <Card
        variant="white"
        className="h-full flex flex-col justify-between p-6 sm:p-8 border border-charcoal-900/5 shadow-card hover:border-brand-primary/30 transition-all duration-300"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="green" size="sm">
              {story.category.replace("-", " ").toUpperCase()}
            </Badge>
            <div className="flex items-center gap-3 text-xs text-charcoal-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {story.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {story.readingTimeMinutes} min
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-charcoal-900 group-hover:text-brand-primary transition-colors mb-3">
            {story.title}
          </h3>

          <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
            {story.summary}
          </p>
        </div>

        <div className="pt-4 border-t border-charcoal-900/5 flex items-center justify-between text-xs font-semibold text-brand-primary group-hover:text-gold-deep">
          <span>Read Story</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
};
