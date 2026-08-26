import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Story } from "@/types/story";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

interface StoryDetailHeroProps {
  story: Story;
}

export const StoryDetailHero: React.FC<StoryDetailHeroProps> = ({ story }) => {
  const t = useTranslations("storyDetail");

  return (
    <section className="relative bg-brand-darkest text-white pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden border-b border-white/10">
      {/* Glow Effect */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-primary/25 rounded-full blur-[100px] pointer-events-none" />

      <Container size="content">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-gold-light transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t("backToStories")}</span>
          </Link>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="gold" dot>
              {story.category.replace("-", " ").toUpperCase()}
            </Badge>
            <span className="inline-flex items-center gap-1 text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-gold-light" />
              {story.date}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-white/80 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <Clock className="w-3.5 h-3.5 text-brand-medium" />
              {story.readingTimeMinutes} {t("minRead")}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {story.title}
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
            {story.summary}
          </p>

          {story.author && (
            <div className="pt-2 flex items-center gap-2 text-xs text-white/70">
              <User className="w-3.5 h-3.5 text-gold-primary" />
              <span>
                {t("authorBy")} {story.author.name}
                {story.author.role ? ` (${story.author.role})` : ""}
              </span>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
