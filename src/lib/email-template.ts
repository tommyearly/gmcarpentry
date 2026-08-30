import { business } from "@/config/business";
import { emailImageSrc, type EmailImageMode } from "@/lib/email-assets";
import { absoluteUrl } from "@/lib/utils";

const COLORS = {
  bg: "#F4F0E8",
  card: "#FBFAF7",
  border: "#D8D4CB",
  text: "#1C211C",
  muted: "#5C6158",
  charcoal: "#141614",
  gold: "#C9A227",
  goldSoft: "#F7EFC8",
  cream: "#F4F0E8",
  white: "#FBFAF7",
} as const;

export type EmailDetail = {
  label: string;
  value: string;
  href?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderDetailsTable(details: EmailDetail[]) {
  const rows = details
    .filter((item) => item.value.trim().length > 0)
    .map((item) => {
      const inner = item.href
        ? `<a href="${escapeHtml(item.href)}" style="color:${COLORS.charcoal};font-weight:700;text-decoration:none;">${escapeHtml(item.value).replace(/\n/g, "<br/>")}</a>`
        : escapeHtml(item.value).replace(/\n/g, "<br/>");
      return `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid ${COLORS.border};width:38%;vertical-align:top;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:${COLORS.muted};font-weight:700;">
          ${escapeHtml(item.label)}
        </td>
        <td style="padding:10px 0;border-bottom:1px solid ${COLORS.border};vertical-align:top;font-size:15px;line-height:1.5;color:${COLORS.text};font-weight:600;">
          ${inner}
        </td>
      </tr>`;
    })
    .join("");

  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:20px 0 8px;border-collapse:collapse;">${rows}</table>`;
}

type BrandedEmailOptions = {
  title: string;
  preheader?: string;
  introHtml: string;
  details?: EmailDetail[];
  noticeHtml?: string;
  extraHtml?: string;
  buttons?: { label: string; href: string; primary?: boolean }[];
  imageMode?: EmailImageMode;
};

export function renderBrandedEmail({
  title,
  preheader = "",
  introHtml,
  details = [],
  noticeHtml,
  extraHtml = "",
  buttons = [],
  imageMode = "cid",
}: BrandedEmailOptions) {
  const logoUrl = emailImageSrc(imageMode, absoluteUrl("/images/email/logo-email.png"));
  const siteUrl = absoluteUrl("/");
  const detailsHtml = details.length ? renderDetailsTable(details) : "";
  const buttonHtml = buttons
    .map((button) => {
      const bg = button.primary ? COLORS.gold : COLORS.charcoal;
      const color = button.primary ? COLORS.charcoal : COLORS.white;
      return `<a href="${escapeHtml(button.href)}" style="display:inline-block;margin:0 8px 8px 0;background:${bg};color:${color};text-decoration:none;font-size:13px;font-weight:700;padding:12px 16px;border-radius:4px;">${escapeHtml(button.label)}</a>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html lang="en-IE">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${COLORS.bg};font-family:Georgia,'Times New Roman',serif;color:${COLORS.text};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${COLORS.bg};padding:28px 14px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:580px;background:${COLORS.card};border:1px solid ${COLORS.border};">
          <tr>
            <td style="height:4px;line-height:4px;font-size:0;background:${COLORS.gold};">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:28px 28px 8px;background:${COLORS.charcoal};" align="center">
              <a href="${siteUrl}" style="text-decoration:none;">
                <img src="${logoUrl}" width="140" alt="GM Carpentry & Construction" style="display:block;margin:0 auto 12px;max-width:140px;height:auto;" />
              </a>
              <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${COLORS.gold};font-weight:700;font-family:Arial,Helvetica,sans-serif;">There's another room above you.</div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px 6px;">
              <h1 style="margin:0;font-size:26px;line-height:1.25;color:${COLORS.charcoal};font-weight:400;">${escapeHtml(title)}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 28px 8px;font-size:15px;line-height:1.65;color:${COLORS.muted};font-family:Arial,Helvetica,sans-serif;">
              ${introHtml}
              ${detailsHtml}
              ${
                noticeHtml
                  ? `<div style="margin:18px 0 4px;padding:14px 16px;background:${COLORS.goldSoft};border-left:3px solid ${COLORS.gold};font-size:14px;line-height:1.55;color:${COLORS.charcoal};">${noticeHtml}</div>`
                  : ""
              }
              ${extraHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:18px 28px 28px;font-family:Arial,Helvetica,sans-serif;">
              ${buttonHtml}
              <p style="margin:18px 0 0;font-size:12px;line-height:1.5;color:${COLORS.muted};">
                GM Carpentry & Construction · Priest Town, Kilbride, Dublin 15<br/>
                <a href="${siteUrl}" style="color:${COLORS.charcoal};text-decoration:none;">gmcarpentry.ie</a>
                · <a href="tel:+353876159429" style="color:${COLORS.charcoal};text-decoration:none;">${escapeHtml(business.phone)}</a>
                · <a href="mailto:${escapeHtml(business.email)}" style="color:${COLORS.charcoal};text-decoration:none;">${escapeHtml(business.email)}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
