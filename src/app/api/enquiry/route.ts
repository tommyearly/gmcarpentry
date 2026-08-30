import { NextResponse } from "next/server";
import { sendEnquiryEmails } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { isRecaptchaConfigured, verifyRecaptchaToken } from "@/lib/recaptcha";
import { generateId, generateReference, sanitizeText } from "@/lib/utils";
import { enquirySchema, isTooFast, shortEnquirySchema } from "@/lib/validation";
import type { EnquiryRequest } from "@/types/enquiry";

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const limited = rateLimit(`enquiry:${ip}`, 5, 60_000);
    if (!limited.success) {
      return NextResponse.json(
        { message: "Too many requests. Please wait a moment and try again." },
        { status: 429 },
      );
    }

    let body: Record<string, unknown>;
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch {
      return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
    }

    if (body.website) {
      return NextResponse.json({ ok: true, reference: generateReference() });
    }

    if (isTooFast(body.formStartedAt as number | undefined)) {
      return NextResponse.json(
        { message: "Please take a moment to complete the form and try again." },
        { status: 400 },
      );
    }

    const captcha = await verifyRecaptchaToken(
      typeof body.captchaToken === "string" ? body.captchaToken : undefined,
      ip,
      "enquiry",
    );
    if (!captcha.ok) {
      return NextResponse.json(
        {
          message: captcha.reason,
          fieldErrors: isRecaptchaConfigured() ? { captchaToken: captcha.reason } : undefined,
        },
        { status: 400 },
      );
    }

    const parsed = enquirySchema.safeParse(body);
    const short = parsed.success ? parsed : shortEnquirySchema.safeParse(body);
    if (!short.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of short.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      return NextResponse.json({ message: "Please check the highlighted fields.", fieldErrors }, { status: 400 });
    }

    const data = short.data;
    const enquiry: EnquiryRequest = {
      id: generateId(),
      reference: generateReference(),
      createdAt: new Date().toISOString(),
      enquiryType: "enquiryType" in data && data.enquiryType ? String(data.enquiryType) : "unsure",
      intendedUse: "intendedUse" in data ? data.intendedUse : undefined,
      area: sanitizeText(data.area, 120),
      message: data.message ? sanitizeText(data.message, 3000) : undefined,
      name: sanitizeText(data.name, 100),
      phone: sanitizeText(data.phone, 40),
      email: sanitizeText(data.email, 120),
      callbackTime: "callbackTime" in data && data.callbackTime ? sanitizeText(String(data.callbackTime), 80) : undefined,
      sourceUrl: data.sourceUrl ? sanitizeText(data.sourceUrl, 300) : undefined,
      referrer: data.referrer ? sanitizeText(data.referrer, 400) : undefined,
      utmSource: data.utmSource ? sanitizeText(data.utmSource, 80) : undefined,
      utmMedium: data.utmMedium ? sanitizeText(data.utmMedium, 80) : undefined,
      utmCampaign: data.utmCampaign ? sanitizeText(data.utmCampaign, 80) : undefined,
      utmTerm: data.utmTerm ? sanitizeText(data.utmTerm, 80) : undefined,
      utmContent: data.utmContent ? sanitizeText(data.utmContent, 80) : undefined,
    };

    await sendEnquiryEmails(enquiry);

    return NextResponse.json({
      ok: true,
      reference: enquiry.reference,
      message: "Thanks — we've received your project enquiry.",
    });
  } catch (error) {
    console.error("Enquiry failed", error instanceof Error ? error.message : "unknown");
    return NextResponse.json(
      {
        message:
          "We couldn't send your enquiry automatically. Please call 087 615 9429 or email info@gmcarpentry.ie.",
      },
      { status: 500 },
    );
  }
}
