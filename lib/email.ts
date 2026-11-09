import { Resend } from "resend";
import { CONTACT_INFO } from "./constants";

export const RECEIVING_EMAIL: string =
  process.env.NOTIFICATION_EMAIL ||
  CONTACT_INFO.receivingEmail ||
  "fclerencef@impaktgateway.de";

export const PARTNERSHIP_RECEIVING_EMAIL: string =
  process.env.PARTNERSHIP_NOTIFICATION_EMAIL ||
  CONTACT_INFO.partnershipEmail ||
  RECEIVING_EMAIL;

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Impakt Gateway <contact@impaktgateway.de>";

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
  if (!resend) {
    console.warn(
      "[Resend] RESEND_API_KEY is not set in environment variables. Simulated email for:",
      RECEIVING_EMAIL,
      { name, email, subject }
    );
    return { success: true, simulated: true };
  }

  const emailHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; border: 1px solid #e7e2d7; border-radius: 16px; background-color: #faf9f6;">
      <div style="margin-bottom: 20px;">
        <span style="font-size: 11px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: #15803d; background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 4px 12px; border-radius: 9999px;">
          Website Inquiry
        </span>
      </div>
      
      <h2 style="color: #101614; margin-top: 6px; font-size: 20px; font-weight: 700;">New Contact Form Submission</h2>
      <hr style="border: none; border-top: 1px solid #e7e2d7; margin: 18px 0;" />
      
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 7px 0; color: #667870; width: 120px;"><strong>Sender:</strong></td>
          <td style="padding: 7px 0; color: #101614; font-weight: 600;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 7px 0; color: #667870;"><strong>Email:</strong></td>
          <td style="padding: 7px 0; color: #15803d;"><a href="mailto:${email}" style="color: #15803d; text-decoration: underline; font-weight: 600;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 7px 0; color: #667870;"><strong>Category:</strong></td>
          <td style="padding: 7px 0; color: #101614; text-transform: capitalize;">${category}</td>
        </tr>
        <tr>
          <td style="padding: 7px 0; color: #667870;"><strong>Subject:</strong></td>
          <td style="padding: 7px 0; color: #101614; font-weight: bold;">${subject}</td>
        </tr>
      </table>
      
      <div style="margin-top: 20px; padding: 18px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e7e2d7;">
        <span style="font-size: 11px; font-weight: bold; color: #667870; display: block; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Message:</span>
        <p style="white-space: pre-wrap; margin: 0; color: #1d2723; font-size: 14px; line-height: 1.6;">${message}</p>
      </div>
      
      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e7e2d7; font-size: 11px; color: #8e9e97; text-align: center;">
        Impakt Gateway e.V. • Amtsgericht Charlottenburg (VR 42655 B) • Berlin, Deutschland
      </div>
    </div>
  `;

  return await resend.emails.send({
    from: FROM_EMAIL,
    to: [RECEIVING_EMAIL],
    reply_to: email,
    subject: `[Website Inquiry] ${subject} (from ${name})`,
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
  if (!resend) {
    console.warn(
      "[Resend] RESEND_API_KEY is not set in environment variables. Simulated partnership email for:",
      PARTNERSHIP_RECEIVING_EMAIL,
      { fullName, organization, email }
    );
    return { success: true, simulated: true };
  }

  const emailHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; border: 1px solid #e7e2d7; border-radius: 16px; background-color: #faf9f6;">
      <div style="margin-bottom: 20px;">
        <span style="font-size: 11px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: #d99227; background-color: #fdf6ea; border: 1px solid #f5d8a0; padding: 4px 12px; border-radius: 9999px;">
          Partnership Proposal
        </span>
      </div>

      <h2 style="color: #101614; margin-top: 6px; font-size: 20px; font-weight: 700;">New Bilateral Partnership Inquiry</h2>
      <hr style="border: none; border-top: 1px solid #e7e2d7; margin: 18px 0;" />

      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 7px 0; color: #667870; width: 140px;"><strong>Contact Person:</strong></td>
          <td style="padding: 7px 0; color: #101614; font-weight: 600;">${fullName}</td>
        </tr>
        <tr>
          <td style="padding: 7px 0; color: #667870;"><strong>Organization:</strong></td>
          <td style="padding: 7px 0; color: #101614; font-weight: bold;">${organization}</td>
        </tr>
        <tr>
          <td style="padding: 7px 0; color: #667870;"><strong>Country / Seat:</strong></td>
          <td style="padding: 7px 0; color: #101614;">${country}</td>
        </tr>
        <tr>
          <td style="padding: 7px 0; color: #667870;"><strong>Email:</strong></td>
          <td style="padding: 7px 0; color: #15803d;"><a href="mailto:${email}" style="color: #15803d; text-decoration: underline; font-weight: 600;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 7px 0; color: #667870;"><strong>Org Type:</strong></td>
          <td style="padding: 7px 0; color: #101614; text-transform: capitalize;">${organizationType}</td>
        </tr>
        <tr>
          <td style="padding: 7px 0; color: #667870;"><strong>Focus Area:</strong></td>
          <td style="padding: 7px 0; color: #101614; text-transform: capitalize;">${focusArea}</td>
        </tr>
      </table>

      ${
        message
          ? `
          <div style="margin-top: 20px; padding: 18px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e7e2d7;">
            <span style="font-size: 11px; font-weight: bold; color: #667870; display: block; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Proposal Concept:</span>
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

  return await resend.emails.send({
    from: FROM_EMAIL,
    to: [PARTNERSHIP_RECEIVING_EMAIL],
    reply_to: email,
    subject: `[Partnership Proposal] ${organization} (${fullName})`,
    html: emailHtml,
  });
}
