import { ContactFormData, PartnershipFormData } from "@/types/form";

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function sanitizeString(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .trim()
    .replace(/<[^>]*>?/gm, "")
    .slice(0, 5000);
}

export interface ValidationResult<T> {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: T;
}

export function validateContactPayload(
  body: unknown
): ValidationResult<ContactFormData> {
  const errors: Record<string, string> = {};

  if (!body || typeof body !== "object") {
    return { isValid: false, errors: { form: "Invalid request body." } };
  }

  const data = body as Record<string, unknown>;

  // Anti-Spam Honeypot
  if (
    data.website &&
    typeof data.website === "string" &&
    data.website.length > 0
  ) {
    return { isValid: false, errors: { bot: "Spam detected." } };
  }

  const name = sanitizeString(data.name);
  const email = sanitizeString(data.email);
  const subject = sanitizeString(data.subject);
  const message = sanitizeString(data.message);
  const category = sanitizeString(data.category) as ContactFormData["category"];

  if (!name || name.length < 2) {
    errors.name = "Please provide a valid name (minimum 2 characters).";
  }

  if (!email || !isValidEmail(email)) {
    errors.email = "Please provide a valid email address.";
  }

  if (!subject || subject.length < 3) {
    errors.subject = "Please provide a subject (minimum 3 characters).";
  }

  if (!message || message.length < 10) {
    errors.message = "Please provide a message (minimum 10 characters).";
  }

  const validCategories = [
    "general",
    "partnership",
    "donation",
    "volunteer",
    "media",
  ];
  if (!category || !validCategories.includes(category)) {
    errors.category = "Please select a valid category.";
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    sanitizedData: isValid
      ? {
          name,
          email,
          category,
          subject,
          message,
        }
      : undefined,
  };
}

export function validatePartnershipPayload(
  body: unknown
): ValidationResult<PartnershipFormData> {
  const errors: Record<string, string> = {};

  if (!body || typeof body !== "object") {
    return { isValid: false, errors: { form: "Invalid request body." } };
  }

  const data = body as Record<string, unknown>;

  // Anti-Spam Honeypot
  if (
    data.website &&
    typeof data.website === "string" &&
    data.website.length > 0
  ) {
    return { isValid: false, errors: { bot: "Spam detected." } };
  }

  const fullName = sanitizeString(data.fullName);
  const organization = sanitizeString(data.organization);
  const country = sanitizeString(data.country);
  const email = sanitizeString(data.email);
  const organizationType = sanitizeString(
    data.organizationType
  ) as PartnershipFormData["organizationType"];
  const focusArea = sanitizeString(
    data.focusArea
  ) as PartnershipFormData["focusArea"];
  const message = sanitizeString(data.message);

  if (!fullName || fullName.length < 2) {
    errors.fullName = "Please provide a valid contact name.";
  }

  if (!organization || organization.length < 2) {
    errors.organization = "Please provide your organization name.";
  }

  if (!country || country.length < 2) {
    errors.country = "Please provide your country/headquarters.";
  }

  if (!email || !isValidEmail(email)) {
    errors.email = "Please provide a valid email address.";
  }

  if (!message || message.length < 15) {
    errors.message =
      "Please describe your partnership proposal (minimum 15 characters).";
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    sanitizedData: isValid
      ? {
          fullName,
          organization,
          country,
          email,
          organizationType: organizationType || "institution",
          focusArea: focusArea || "multi-sector",
          message,
        }
      : undefined,
  };
}
