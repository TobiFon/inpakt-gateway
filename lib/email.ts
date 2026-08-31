import { Resend } from "resend";
import { CONTACT_INFO } from "./constants";

export const RECEIVING_EMAIL = CONTACT_INFO.receivingEmail;

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

interface SendContactEmailParams {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
}

export async function sendContactEmail({
  name,
  email,
  category,
  subject,
  message,
}: SendContactEmailParams) {
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "Impakt Gateway <onboarding@resend.dev>";

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e7e2d7; border-radius: 12px; background-color: #faf9f6;">
      <h2 style="color: #15803d; margin-top: 0;">New Contact Inquiry — Impakt Gateway</h2>
      <hr style="border: none; border-top: 1px solid #e7e2d7; margin: 15px 0;" />
      <p><strong>Sender Name:</strong> ${name}</p>
      <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Category:</strong> ${category}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <div style="margin-top: 15px; padding: 15px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e7e2d7;">
        <strong>Message:</strong>
        <p style="white-space: pre-wrap; margin-top: 8px; color: #1d2723;">${message}</p>
      </div>
      <hr style="border: none; border-top: 1px solid #e7e2d7; margin: 20px 0 10px;" />
      <p style="font-size: 12px; color: #667870; margin: 0;">Impakt Gateway e.V. • Africa ↔ Germany Collaboration</p>
    </div>
  `;

  if (!resend) {
    console.warn(
      "[Resend] RESEND_API_KEY is not set. Simulating contact email transmission to:",
      RECEIVING_EMAIL,
      { name, email, category, subject }
    );
    return { success: true, simulated: true };
  }

  return await resend.emails.send({
    from: fromEmail,
    to: [RECEIVING_EMAIL],
    reply_to: email,
    subject: `[Contact Form] ${subject} (from ${name})`,
    html: emailHtml,
  });
}

interface SendPartnershipEmailParams {
  fullName: string;
  organization: string;
  country: string;
  email: string;
  organizationType: string;
  focusArea: string;
  message?: string;
}

export async function sendPartnershipEmail({
  fullName,
  organization,
  country,
  email,
  organizationType,
  focusArea,
  message,
}: SendPartnershipEmailParams) {
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "Impakt Gateway <onboarding@resend.dev>";

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e7e2d7; border-radius: 12px; background-color: #faf9f6;">
      <h2 style="color: #d99227; margin-top: 0;">New Partnership Proposal — Impakt Gateway</h2>
      <hr style="border: none; border-top: 1px solid #e7e2d7; margin: 15px 0;" />
      <p><strong>Contact Person:</strong> ${fullName}</p>
      <p><strong>Organization:</strong> ${organization}</p>
      <p><strong>Country / Headquarters:</strong> ${country}</p>
      <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Organization Type:</strong> ${organizationType}</p>
      <p><strong>Focus Area:</strong> ${focusArea}</p>
      ${
        message
          ? `<div style="margin-top: 15px; padding: 15px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e7e2d7;">
              <strong>Proposal / Concept:</strong>
              <p style="white-space: pre-wrap; margin-top: 8px; color: #1d2723;">${message}</p>
            </div>`
          : ""
      }
      <hr style="border: none; border-top: 1px solid #e7e2d7; margin: 20px 0 10px;" />
      <p style="font-size: 12px; color: #667870; margin: 0;">Impakt Gateway e.V. • Africa ↔ Germany Collaboration</p>
    </div>
  `;

  if (!resend) {
    console.warn(
      "[Resend] RESEND_API_KEY is not set. Simulating partnership email transmission to:",
      RECEIVING_EMAIL,
      { fullName, organization, country, email }
    );
    return { success: true, simulated: true };
  }

  return await resend.emails.send({
    from: fromEmail,
    to: [RECEIVING_EMAIL],
    reply_to: email,
    subject: `[Partnership Proposal] ${organization} (${fullName})`,
    html: emailHtml,
  });
}
