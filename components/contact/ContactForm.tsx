"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ContactFormData } from "@/types/form";

export const ContactForm: React.FC = () => {
  const t = useTranslations("contactPage");

  const [formData, setFormData] = useState<
    ContactFormData & { honeypot?: string }
  >({
    name: "",
    email: "",
    category: "general",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          category: formData.category,
          subject: formData.subject,
          message: formData.message,
          website: formData.honeypot,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(
          data.error ||
            "Unable to process your message at this time. Please check your fields and try again."
        );
      }
    } catch {
      setErrorMessage(
        "Network connection error. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card
      variant="gold-accent"
      className="p-8 sm:p-12 border border-cream-border shadow-card"
    >
      {isSubmitted ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 rounded-full bg-brand-subtle text-brand-primary border border-brand-border flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-charcoal-900">
            {t("successTitle")}
          </h3>
          <p className="text-sm sm:text-base text-charcoal-600 max-w-md mx-auto leading-relaxed font-medium">
            {t("successMessage")}
          </p>
        </div>
      ) : (
        <div>
          <div className="mb-8">
            <p className="text-xs uppercase font-extrabold tracking-widest text-gold-deep mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-primary" />
              {t("formEyebrow")}
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal-900">
              {t("formTitle")}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-charcoal-600 leading-relaxed font-medium">
              {t("formSubtitle")}
            </p>
          </div>

          {errorMessage && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 text-red-700 border border-red-200 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) =>
                setFormData({ ...formData, honeypot: e.target.value })
              }
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2">
                  {t("fieldName")} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-cream-border bg-white text-sm text-charcoal-900 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2">
                  {t("fieldEmail")} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-cream-border bg-white text-sm text-charcoal-900 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2">
                  {t("fieldCategory")} *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value as ContactFormData["category"],
                    })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-cream-border bg-white text-sm text-charcoal-900 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 focus:outline-none transition-colors"
                >
                  <option value="general">{t("catGeneral")}</option>
                  <option value="partnership">{t("catPartnership")}</option>
                  <option value="donation">{t("catDonation")}</option>
                  <option value="volunteer">{t("catVolunteer")}</option>
                  <option value="media">{t("catMedia")}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2">
                  {t("fieldSubject")} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-cream-border bg-white text-sm text-charcoal-900 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2">
                {t("fieldMessage")} *
              </label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-2xl border border-cream-border bg-white text-sm text-charcoal-900 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 focus:outline-none transition-colors leading-relaxed"
              />
            </div>

            {/* Submit Button: Green */}
            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-md"
                disabled={isSubmitting}
                icon={<Send className="w-4 h-4" />}
              >
                {isSubmitting ? t("submitting") : t("submitButton")}
              </Button>
            </div>
          </form>
        </div>
      )}
    </Card>
  );
};
