import { Resend } from "resend";
import { CONTACT_INFO } from "./constants";

// The primary destination for form alerts
export const RECEIVING_EMAIL =
  process.env.NOTIFICATION_EMAIL || CONTACT_INFO.email;

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Official sender from your verified domain
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ||
  "Impakt Gateway <notifications@impakt-gateway.org>";

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
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e7e2d7; border-radius: 16px; background-color: #faf9f6;">
      <div style="margin-bottom: 20px;">
        <span style="font-size: 11px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: #15803d; background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 4px 10px; border-radius: 9999px;">
          Website Inquiry
        </span>
      </div>
      
      <h2 style="color: #101614; margin-top: 8px; font-size: 20px;">New Contact Message</h2>
      <hr style="border: none; border-top: 1px solid #e7e2d7; margin: 16px 0;" />
      
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 6px 0; color: #667870; width: 120px;"><strong>Sender:</strong></td>
          <td style="padding: 6px 0; color: #101614;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #667870;"><strong>Email:</strong></td>
          <td style="padding: 6px 0; color: #15803d;"><a href="mailto:${email}" style="color: #15803d; text-decoration: underline;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #667870;"><strong>Category:</strong></td>
          <td style="padding: 6px 0; color: #101614; text-transform: capitalize;">${category}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #667870;"><strong>Subject:</strong></td>
          <td style="padding: 6px 0; color: #101614; font-weight: bold;">${subject}</td>
        </tr>
      </table>
      
      <div style="margin-top: 20px; padding: 16px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e7e2d7;">
        <span style="font-size: 12px; font-weight: bold; color: #667870; display: block; margin-bottom: 8px; text-transform: uppercase;">Message Content:</span>
        <p style="white-space: pre-wrap; margin: 0; color: #1d2723; font-size: 14px; line-height: 1.6;">${message}</p>
      </div>
      
      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e7e2d7; font-size: 11px; color: #8e9e97; text-align: center;">
        Impakt Gateway e.V. • Amtsgericht Charlottenburg (VR 42655 B) • Berlin, Deutschland
      </div>
    </div>
  `;

  if (!resend) {
    console.warn(
      "[Resend Simulated] RESEND_API_KEY is not set. Contact email recorded for:",
      RECEIVING_EMAIL,
      { name, email, subject }
    );
    return { success: true, simulated: true };
  }

  return await resend.emails.send({
    from: FROM_EMAIL,
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
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e7e2d7; border-radius: 16px; background-color: #faf9f6;">
      <div style="margin-bottom: 20px;">
        <span style="font-size: 11px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: #d99227; background-color: #fdf6ea; border: 1px solid #f5d8a0; padding: 4px 10px; border-radius: 9999px;">
          Partnership Proposal
        </span>
      </div>

      <h2 style="color: #101614; margin-top: 8px; font-size: 20px;">New Partnership Inquiry</h2>
      <hr style="border: none; border-top: 1px solid #e7e2d7; margin: 16px 0;" />

      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 6px 0; color: #667870; width: 140px;"><strong>Contact Person:</strong></td>
          <td style="padding: 6px 0; color: #101614;">${fullName}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #667870;"><strong>Organization:</strong></td>
          <td style="padding: 6px 0; color: #101614; font-weight: bold;">${organization}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #667870;"><strong>Country / Seat:</strong></td>
          <td style="padding: 6px 0; color: #101614;">${country}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #667870;"><strong>Email Address:</strong></td>
          <td style="padding: 6px 0; color: #15803d;"><a href="mailto:${email}" style="color: #15803d; text-decoration: underline;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #667870;"><strong>Organization Type:</strong></td>
          <td style="padding: 6px 0; color: #101614; text-transform: capitalize;">${organizationType}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #667870;"><strong>Focus Area:</strong></td>
          <td style="padding: 6px 0; color: #101614; text-transform: capitalize;">${focusArea}</td>
        </tr>
      </table>

      ${
        message
          ? `
          <div style="margin-top: 20px; padding: 16px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e7e2d7;">
            <span style="font-size: 12px; font-weight: bold; color: #667870; display: block; margin-bottom: 8px; text-transform: uppercase;">Proposal / Concept:</span>
            <p style="white-space: pre-wrap; margin: 0; color: #1d2723; font-size: 14px; line-height: 1.6;">${message}</p>
          </div>
          `
          : ""
      }

      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e7e2d7; font-size: 11px; color: #8e9e97; text-align: center;">
        Impakt Gateway e.V. • Amtsgericht Charlottenburg (VR 42655 B) • Berlin, Deutschland
      </div>
    </div>
  `;

  if (!resend) {
    console.warn(
      "[Resend Simulated] RESEND_API_KEY is not set. Partnership proposal recorded for:",
      RECEIVING_EMAIL,
      { fullName, organization, country, email }
    );
    return { success: true, simulated: true };
  }

  return await resend.emails.send({
    from: FROM_EMAIL,
    to: [RECEIVING_EMAIL],
    reply_to: email,
    subject: `[Partnership Proposal] ${organization} (${fullName})`,
    html: emailHtml,
  });
}
