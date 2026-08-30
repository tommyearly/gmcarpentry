import { Resend } from "resend";
import { business } from "@/config/business";
import { getInlineEmailAttachments, type EmailImageMode } from "@/lib/email-assets";
import { renderBrandedEmail, type EmailDetail } from "@/lib/email-template";
import { enquiryTypeLabels, intendedUseLabels } from "@/lib/validation";
import { firstName, formatTimestampIE } from "@/lib/utils";
import type { EnquiryRequest } from "@/types/enquiry";

type MailOptions = { imageMode?: EmailImageMode };

type ComposedEmail = {
  subject: string;
  html: string;
  text: string;
};

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

function getBusinessInbox() {
  return process.env.CONTACT_TO_EMAIL?.trim() || business.contactEmail || business.email;
}

async function sendWithResend(payload: EmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !from) {
    throw new Error("Email is not configured. Set RESEND_API_KEY and EMAIL_FROM.");
  }
  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from,
    to: payload.to,
    subject: payload.subject,
    html: payload.html,
    text: payload.text,
    replyTo: payload.replyTo,
    attachments: getInlineEmailAttachments().map((file) => ({
      filename: file.filename,
      content: file.content,
      contentType: file.contentType,
      inlineContentId: file.inlineContentId,
    })),
  });
  if (result.error) throw new Error(result.error.message);
  return result;
}

export async function sendEmail(payload: EmailPayload) {
  const provider = (process.env.EMAIL_PROVIDER || "resend").toLowerCase();
  if (provider === "resend") return sendWithResend(payload);
  throw new Error(`Unsupported EMAIL_PROVIDER: ${provider}`);
}

function typeLabel(value?: string) {
  if (!value) return "Not specified";
  return enquiryTypeLabels[value as keyof typeof enquiryTypeLabels] || value;
}

function intendedUseLabel(value?: string) {
  if (!value) return "Not specified";
  return intendedUseLabels[value as keyof typeof intendedUseLabels] || value;
}

function enquiryDetails(enquiry: EnquiryRequest, forBusiness: boolean): EmailDetail[] {
  const details: EmailDetail[] = [
    { label: "Reference", value: enquiry.reference },
    { label: "Name", value: enquiry.name },
    {
      label: "Phone",
      value: enquiry.phone,
      href: forBusiness ? `tel:${enquiry.phone.replace(/\s+/g, "")}` : undefined,
    },
    {
      label: "Email",
      value: enquiry.email,
      href: forBusiness ? `mailto:${enquiry.email}` : undefined,
    },
    { label: "Area", value: enquiry.area },
    { label: "Enquiry type", value: typeLabel(enquiry.enquiryType) },
    { label: "Intended use", value: intendedUseLabel(enquiry.intendedUse) },
    { label: "Preferred callback", value: enquiry.callbackTime || "Not specified" },
    { label: "Message", value: enquiry.message || "None" },
  ];

  if (forBusiness) {
    details.push(
      { label: "Submitted", value: formatTimestampIE(enquiry.createdAt) },
      { label: "Source URL", value: enquiry.sourceUrl || "—" },
      { label: "Referrer", value: enquiry.referrer || "—" },
      { label: "UTM source", value: enquiry.utmSource || "—" },
      { label: "UTM medium", value: enquiry.utmMedium || "—" },
      { label: "UTM campaign", value: enquiry.utmCampaign || "—" },
      { label: "UTM term", value: enquiry.utmTerm || "—" },
      { label: "UTM content", value: enquiry.utmContent || "—" },
    );
  }

  return details;
}

function enquiryText(enquiry: EnquiryRequest) {
  return [
    `Reference: ${enquiry.reference}`,
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    `Email: ${enquiry.email}`,
    `Area: ${enquiry.area}`,
    `Type: ${typeLabel(enquiry.enquiryType)}`,
    `Intended use: ${intendedUseLabel(enquiry.intendedUse)}`,
    `Callback: ${enquiry.callbackTime || "Not specified"}`,
    `Message: ${enquiry.message || "None"}`,
    `Submitted: ${enquiry.createdAt}`,
    `Source: ${enquiry.sourceUrl || "—"}`,
    `Referrer: ${enquiry.referrer || "—"}`,
    `UTM: ${[enquiry.utmSource, enquiry.utmMedium, enquiry.utmCampaign, enquiry.utmTerm, enquiry.utmContent].filter(Boolean).join(" / ") || "—"}`,
  ].join("\n");
}

export function enquiryCustomerEmail(enquiry: EnquiryRequest, options: MailOptions = {}): ComposedEmail {
  const imageMode = options.imageMode ?? "cid";
  const subject = "Thanks — we've received your project enquiry";
  const html = renderBrandedEmail({
    title: "Thanks — we've received your project enquiry.",
    preheader: `Reference ${enquiry.reference}. A member of the GM team will be in touch.`,
    introHtml: `<p style="margin:0 0 10px;">Hi ${firstName(enquiry.name)},</p>
      <p style="margin:0;">Thank you for contacting GM Carpentry & Construction. Your enquiry has been received. This is not a confirmed booking — a member of the team will review it and contact you to discuss the project and the next steps.</p>`,
    details: enquiryDetails(enquiry, false),
    extraHtml: `<h2 style="margin:28px 0 8px;font-size:18px;color:#141614;font-weight:400;">What happens next?</h2>
      <p style="margin:0;">A member of the GM Carpentry team will review your enquiry and contact you to discuss the project and the next steps.</p>`,
    buttons: [
      { label: "View GM Carpentry", href: "https://gmcarpentry.ie/", primary: true },
      { label: `Call ${business.phone}`, href: `tel:${business.phone.replace(/\s+/g, "")}` },
    ],
    imageMode,
  });

  const text = `Hi ${firstName(enquiry.name)},

Thank you for contacting GM Carpentry & Construction. Your enquiry has been received.

${enquiryText(enquiry)}

What happens next?
A member of the GM Carpentry team will review your enquiry and contact you to discuss the project and the next steps.

This is not a confirmed booking.

GM Carpentry & Construction
${business.phone}
${business.email}
gmcarpentry.ie`;

  return { subject, html, text };
}

export function enquiryBusinessEmail(enquiry: EnquiryRequest, options: MailOptions = {}): ComposedEmail {
  const imageMode = options.imageMode ?? "cid";
  const subject = `New enquiry ${enquiry.reference} — ${enquiry.name} — ${typeLabel(enquiry.enquiryType)}`;
  const html = renderBrandedEmail({
    title: "New project enquiry",
    preheader: `${enquiry.name} · ${typeLabel(enquiry.enquiryType)} · ${enquiry.area}`,
    introHtml: `<p style="margin:0;">A customer submitted a free consultation request on the website.</p>`,
    details: enquiryDetails(enquiry, true),
    noticeHtml: "<strong>Action needed:</strong> Call or email the customer to discuss the project. This is a request, not a confirmed booking.",
    buttons: [
      { label: `Call ${enquiry.phone}`, href: `tel:${enquiry.phone.replace(/\s+/g, "")}`, primary: true },
      { label: "Email customer", href: `mailto:${enquiry.email}` },
    ],
    imageMode,
  });

  const text = `New project enquiry\n\n${enquiryText(enquiry)}\n\nAction needed: contact the customer.`;
  return { subject, html, text };
}

export async function sendEnquiryEmails(enquiry: EnquiryRequest) {
  const businessTo = getBusinessInbox();
  const publicReplyTo = business.email;
  const businessMail = enquiryBusinessEmail(enquiry, { imageMode: "cid" });
  const customerMail = enquiryCustomerEmail(enquiry, { imageMode: "cid" });

  await Promise.all([
    sendEmail({ to: businessTo, replyTo: enquiry.email, ...businessMail }),
    sendEmail({ to: enquiry.email, replyTo: publicReplyTo, ...customerMail }),
  ]);
}
