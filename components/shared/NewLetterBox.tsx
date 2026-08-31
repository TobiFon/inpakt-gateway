"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const NewsletterBox: React.FC = () => {
  const t = useTranslations("actions");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <Card
      variant="gold-accent"
      className="p-8 sm:p-10 border border-cream-border shadow-card max-w-3xl mx-auto my-12"
    >
      {submitted ? (
        <div className="text-center py-4 flex items-center justify-center gap-3 text-brand-primary font-bold">
          <CheckCircle2 className="w-5 h-5 text-gold-primary" />
          <span>
            Thank you for subscribing! We will keep you updated on bilateral
            initiatives.
          </span>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-gold-deep flex items-center gap-1.5 justify-center sm:justify-start">
              <Mail className="w-3.5 h-3.5 text-gold-primary" />
              STAY INFORMED
            </span>
            <h3 className="font-serif text-xl font-bold text-charcoal-900">
              Subscribe to Initiative Updates
            </h3>
            <p className="text-xs text-charcoal-600 font-medium">
              Get notified when new bilateral calls, training workshops, and
              programs are launched.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex items-center gap-2 w-full sm:w-auto shrink-0"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2.5 rounded-full border border-cream-border bg-cream-50 text-xs sm:text-sm text-charcoal-900 focus:bg-white focus:border-gold-primary focus:outline-none transition-colors"
            />
            <Button
              variant="gold"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Join
            </Button>
          </form>
        </div>
      )}
    </Card>
  );
};
