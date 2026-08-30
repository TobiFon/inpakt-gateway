import { NextRequest, NextResponse } from "next/server";
import { validatePartnershipPayload } from "@/lib/validation";
import { sendPartnershipEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = validatePartnershipPayload(body);

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

    // Send email to fclerencef@gmail.com via Resend
    await sendPartnershipEmail({
      fullName: sanitizedData.fullName,
      organization: sanitizedData.organization,
      country: sanitizedData.country,
      email: sanitizedData.email,
      organizationType: sanitizedData.organizationType,
      focusArea: sanitizedData.focusArea,
      message: sanitizedData.message,
    });

    console.info("[Impakt Gateway API] New Partnership Proposal Received & Dispatched:", {
      fullName: sanitizedData.fullName,
      organization: sanitizedData.organization,
      country: sanitizedData.country,
      email: sanitizedData.email,
      organizationType: sanitizedData.organizationType,
      focusArea: sanitizedData.focusArea,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your partnership inquiry has been received successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "[Impakt Gateway API Error] Partnership submission failed:",
      error
    );
    return NextResponse.json(
      {
        success: false,
        error:
          "An internal error occurred while processing your proposal. Please try again later.",
      },
      { status: 500 }
    );
  }
}
