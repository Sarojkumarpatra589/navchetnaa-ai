import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contactSchema";

// Simple in-memory rate limiter per IP (max 5 submissions per 15 minutes)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submissions from this network. Please wait 15 minutes or reach us via WhatsApp.",
        },
        { status: 429 }
      );
    }

    const rawBody = await request.json();
    const parsed = contactFormSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please review the highlighted fields and try again.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // 1. Honeypot spam check (bots fill hidden fields; humans leave them blank)
    if (data.website && data.website.trim().length > 0) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 2. Minimum human interaction time check (reject instant automated POSTs < 2.5s)
    if (data.formStartedAt && Date.now() - data.formStartedAt < 2500) {
      return NextResponse.json(
        {
          success: false,
          message: "Submission detected too quickly. Please review your details and submit again.",
        },
        { status: 400 }
      );
    }

    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "contact.navchetnaa@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    // 3. Configurable Email Provider Dispatch (Resend API)
    if (resendApiKey && resendApiKey.trim().length > 0) {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; color: #101820; max-width: 640px;">
          <h2 style="border-bottom: 2px solid #8CEE3F; padding-bottom: 8px;">
            New Project Inquiry — NAVCHETNAA AI
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px; border: 1px solid #E7ECEF;"><strong>Full Name</strong></td><td style="padding: 8px; border: 1px solid #E7ECEF;">${escapeHtml(data.fullName)}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #E7ECEF;"><strong>Business Email</strong></td><td style="padding: 8px; border: 1px solid #E7ECEF;">${escapeHtml(data.businessEmail)}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #E7ECEF;"><strong>Phone / WhatsApp</strong></td><td style="padding: 8px; border: 1px solid #E7ECEF;">${escapeHtml(data.phone)}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #E7ECEF;"><strong>Company</strong></td><td style="padding: 8px; border: 1px solid #E7ECEF;">${escapeHtml(data.company)}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #E7ECEF;"><strong>Country</strong></td><td style="padding: 8px; border: 1px solid #E7ECEF;">${escapeHtml(data.country)}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #E7ECEF;"><strong>Required Service</strong></td><td style="padding: 8px; border: 1px solid #E7ECEF;">${escapeHtml(data.service)}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #E7ECEF;"><strong>Estimated Budget</strong></td><td style="padding: 8px; border: 1px solid #E7ECEF;">${escapeHtml(data.budget)}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #E7ECEF;"><strong>Timeline</strong></td><td style="padding: 8px; border: 1px solid #E7ECEF;">${escapeHtml(data.timeline)}</td></tr>
          </table>
          <div style="margin-top: 18px; padding: 14px; background: #F7F9FA; border-left: 3px solid #8CEE3F;">
            <strong>Project Description:</strong>
            <p style="white-space: pre-wrap; margin-top: 8px;">${escapeHtml(data.description)}</p>
          </div>
        </div>
      `;

      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "NAVCHETNAA AI Inquiries <onboarding@resend.dev>",
          to: [receiverEmail],
          reply_to: data.businessEmail,
          subject: `New Project Inquiry: ${data.fullName} (${data.company}) — ${data.service}`,
          html: emailHtml,
        }),
      });

      if (!emailResponse.ok) {
        console.error("Email provider rejected request:", await emailResponse.text());
        return NextResponse.json(
          {
            success: false,
            message:
              "We could not dispatch your inquiry via email right now. Please contact us directly at contact.navchetnaa@gmail.com or WhatsApp.",
          },
          { status: 502 }
        );
      }
    } else {
      // Structured server log when RESEND_API_KEY is not yet configured in local/staging env
      console.info("[NAVCHETNAA AI Contact Inquiry Received]", {
        fullName: data.fullName,
        businessEmail: data.businessEmail,
        company: data.company,
        service: data.service,
        budget: data.budget,
        timeline: data.timeline,
        submittedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your project inquiry has been confirmed.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected server error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}