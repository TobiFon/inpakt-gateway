"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export type FAQCategory = "all" | "about" | "support" | "partners" | "youth";

interface FAQItem {
  id: string;
  category: FAQCategory;
  questionKey: string;
  answerKey: string;
}

export const HomeFAQ: React.FC = () => {
  const t = useTranslations("faqSection");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("all");

  const faqItems: FAQItem[] = [
    {
      id: "who-we-are",
      category: "about",
      questionKey: "q1",
      answerKey: "a1",
    },
    {
      id: "what-we-do",
      category: "about",
      questionKey: "q2",
      answerKey: "a2",
    },
    {
      id: "where-we-work",
      category: "about",
      questionKey: "q3",
      answerKey: "a3",
    },
    {
      id: "projects-supported",
      category: "about",
      questionKey: "q4",
      answerKey: "a4",
    },
    {
      id: "how-to-donate",
      category: "support",
      questionKey: "q5",
      answerKey: "a5",
    },
    {
      id: "how-to-volunteer",
      category: "partners",
      questionKey: "q6",
      answerKey: "a6",
    },
    {
      id: "how-to-partner",
      category: "partners",
      questionKey: "q7",
      answerKey: "a7",
    },
    {
      id: "youth-opportunities",
      category: "youth",
      questionKey: "q8",
      answerKey: "a8",
    },
    {
      id: "financial-transparency",
      category: "support",
      questionKey: "q9",
      answerKey: "a9",
    },
    {
      id: "how-to-contact",
      category: "about",
      questionKey: "q10",
      answerKey: "a10",
    },
  ];

  const filteredItems = faqItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-cream-50" id="faq">
      <Container size="content">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          highlightedWord={t("titleHighlight")}
          description={t("description")}
        />

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {(
            [
              { id: "all", label: t("filterAll") },
              { id: "about", label: t("filterAbout") },
              { id: "support", label: t("filterSupport") },
              { id: "partners", label: t("filterPartners") },
              { id: "youth", label: t("filterYouth") },
            ] as const
          ).map((filter) => {
            const isActive = activeCategory === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => {
                  setActiveCategory(filter.id);
                  setOpenIndex(0);
                }}
                className={cn(
                  "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none whitespace-nowrap",
                  isActive
                    ? "bg-brand-primary text-white shadow-sm"
                    : "bg-white text-charcoal-700 border border-charcoal-900/10 hover:bg-cream-100 hover:text-brand-dark"
                )}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="mt-10 space-y-3.5">
          {filteredItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Card
                key={item.id}
                variant="white"
                className="border border-charcoal-900/5 shadow-sm hover:border-brand-primary/30 transition-colors p-0 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle
                      className={cn(
                        "w-5 h-5 shrink-0 transition-colors",
                        isOpen ? "text-gold-deep" : "text-brand-medium"
                      )}
                    />
                    <h3 className="font-bold text-base sm:text-lg text-charcoal-900 leading-snug">
                      {t(item.questionKey)}
                    </h3>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-charcoal-500 shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180 text-brand-primary"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out border-t border-charcoal-900/5",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-3 text-sm sm:text-base text-charcoal-600 leading-relaxed bg-cream-50/50">
                      <p className="whitespace-pre-line">{t(item.answerKey)}</p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
