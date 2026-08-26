import { NextRequest, NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = validateContactPayload(body);

    if (!validation.isValid || !validation.sanitizedData) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const { sanitizedData } = validation;

    // Log clean contact inquiry in server logs
    console.info("[Impakt Gateway API] New Contact Inquiry Received:", {
      name: sanitizedData.name,
      email: sanitizedData.email,
      category: sanitizedData.category,
      subject: sanitizedData.subject,
      timestamp: new Date().toISOString(),
    });

    // Ready for webhook or email transport integration (e.g. Resend / SendGrid / Nodemailer)

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "[Impakt Gateway API Error] Contact submission failed:",
      error
    );
    return NextResponse.json(
      {
        success: false,
        error:
          "An internal error occurred while processing your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
