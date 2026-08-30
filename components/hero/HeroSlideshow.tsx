"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface SlideMetadata {
  id: string;
  key: "slide1" | "slide2" | "slide3" | "slide4";
  image: string;
}

const SLIDES: SlideMetadata[] = [
  {
    id: "slide-1",
    key: "slide1",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "slide-2",
    key: "slide2",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "slide-3",
    key: "slide3",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "slide-4",
    key: "slide4",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  },
];

export const HeroSlideshow: React.FC = () => {
  const t = useTranslations("hero");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative w-full max-w-lg mx-auto lg:max-w-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-primary/20 via-gold-primary/20 to-brand-medium/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative overflow-hidden rounded-3xl border border-cream-border bg-white shadow-xl gold-border-top">
        <Link
          href="/work"
          className="relative block aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden cursor-pointer bg-brand-darkest"
          title={t("secondaryCta")}
        >
          {SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            const title = t(`slides.${slide.key}.title`);
            const category = t(`slides.${slide.key}.category`);
            const location = t(`slides.${slide.key}.location`);

            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 z-10 scale-100"
                    : "opacity-0 z-0 scale-105"
                } transition-transform duration-1000`}
              >
                <Image
                  src={slide.image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-primary/90 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20 shadow-xs">
                      <Sparkles className="w-3 h-3 text-gold-bright" />
                      {category}
                    </span>
                    <span className="text-xs text-white/90 font-semibold drop-shadow-xs">
                      {location}
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-3">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-gold-bright transition-colors drop-shadow-xs">
                      {title}
                    </h3>
                    <span className="flex items-center gap-1 text-xs font-bold text-white shrink-0 bg-white/20 hover:bg-gold-primary hover:text-white px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 transition-all">
                      <span>{t("slideAction")}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Link>

        {/* Controls */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-white border-t border-cream-border">
          <div className="flex items-center gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-gold-primary"
                    : "w-2 bg-cream-border hover:bg-charcoal-400"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={prevSlide}
              className="p-1.5 rounded-full text-charcoal-700 hover:text-brand-primary hover:bg-cream-100 transition-colors cursor-pointer border border-cream-border"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="p-1.5 rounded-full text-charcoal-700 hover:text-brand-primary hover:bg-cream-100 transition-colors cursor-pointer border border-cream-border"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
