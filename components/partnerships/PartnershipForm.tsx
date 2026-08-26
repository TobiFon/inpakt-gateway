"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PartnershipFormData } from "@/types/form";

export const PartnershipForm: React.FC = () => {
  const t = useTranslations("partnershipsPage");

  const [formData, setFormData] = useState<
    PartnershipFormData & { honeypot?: string }
  >({
    fullName: "",
    organization: "",
    country: "",
    email: "",
    organizationType: "institution",
    focusArea: "multi-sector",
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
      const res = await fetch("/api/partnership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          organization: formData.organization,
          country: formData.country,
          email: formData.email,
          organizationType: formData.organizationType,
          focusArea: formData.focusArea,
          message: formData.message,
          website: formData.honeypot, // Honeypot field
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(
          data.error ||
            "Unable to process your partnership inquiry at this time. Please check your fields and try again."
        );
      }
    } catch (err) {
      setErrorMessage(
        "Network connection error. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-cream-50" id="proposal-form">
      <Container size="content">
        <Card
          variant="white"
          className="p-8 sm:p-12 border border-charcoal-900/5 shadow-card"
        >
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-brand-subtle text-brand-dark flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal-900">
                {t("successTitle")}
              </h3>
              <p className="text-sm sm:text-base text-charcoal-600 max-w-md mx-auto leading-relaxed">
                {t("successMessage")}
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-8">
                <p className="text-xs uppercase font-bold tracking-widest text-gold-deep mb-2">
                  {t("formEyebrow")}
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
                  {t("formTitle")}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-charcoal-600 leading-relaxed">
                  {t("formSubtitle")}
                </p>
              </div>

              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-700 border border-red-200 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field for spam prevention */}
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
                  {/* Contact Person */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2">
                      {t("fieldName")} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-900/10 bg-cream-50 text-sm text-charcoal-900 focus:bg-white focus:border-brand-primary focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Organization Name */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2">
                      {t("fieldOrg")} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-900/10 bg-cream-50 text-sm text-charcoal-900 focus:bg-white focus:border-brand-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
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
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-900/10 bg-cream-50 text-sm text-charcoal-900 focus:bg-white focus:border-brand-primary focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2">
                      {t("fieldCountry")} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Germany, Cameroon, France..."
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-900/10 bg-cream-50 text-sm text-charcoal-900 focus:bg-white focus:border-brand-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Organization Type */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2">
                      {t("fieldOrgType")} *
                    </label>
                    <select
                      value={formData.organizationType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organizationType: e.target
                            .value as PartnershipFormData["organizationType"],
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-900/10 bg-cream-50 text-sm text-charcoal-900 focus:bg-white focus:border-brand-primary focus:outline-none transition-colors"
                    >
                      <option value="institution">{t("optInstitution")}</option>
                      <option value="ngo">{t("optNgo")}</option>
                      <option value="business">{t("optBusiness")}</option>
                      <option value="donor">{t("optDonor")}</option>
                      <option value="individual">{t("optIndividual")}</option>
                      <option value="other">{t("optOther")}</option>
                    </select>
                  </div>

                  {/* Area of Shared Interest */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2">
                      {t("fieldFocus")} *
                    </label>
                    <select
                      value={formData.focusArea}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          focusArea: e.target
                            .value as PartnershipFormData["focusArea"],
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-900/10 bg-cream-50 text-sm text-charcoal-900 focus:bg-white focus:border-brand-primary focus:outline-none transition-colors"
                    >
                      <option value="multi-sector">{t("optAllFocus")}</option>
                      <option value="education">Education</option>
                      <option value="youth">Youth</option>
                      <option value="health">Health</option>
                      <option value="environment">Environment</option>
                      <option value="humanitarian">Humanitarian Support</option>
                    </select>
                  </div>
                </div>

                {/* Proposal Message */}
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
                    className="w-full px-4 py-3 rounded-xl border border-charcoal-900/10 bg-cream-50 text-sm text-charcoal-900 focus:bg-white focus:border-brand-primary focus:outline-none transition-colors leading-relaxed"
                  />
                </div>

                {/* Submit Trigger */}
                <div className="pt-2">
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
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
      </Container>
    </section>
  );
};
