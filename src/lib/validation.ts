import { z } from "zod";

const irishPhoneRegex =
  /^(?:\+353|00353|0)\s?(?:83|85|86|87|89|1|2|4|5|6|7|9)[\d\s-]{6,12}$/;

export const enquiryTypes = [
  "full-attic",
  "dormer",
  "ensuite",
  "stairs",
  "flooring",
  "extension",
  "renovation",
  "carpentry",
  "unsure",
] as const;

export const intendedUses = [
  "bedroom",
  "bedroom-ensuite",
  "office",
  "playroom",
  "living",
  "storage",
  "other",
] as const;

export const enquirySchema = z.object({
  enquiryType: z.enum(enquiryTypes, { required_error: "Choose what you are considering" }),
  intendedUse: z.enum(intendedUses).optional().or(z.literal("")),
  area: z.string().trim().min(2, "Enter your area").max(120),
  message: z.string().trim().max(3000).optional().or(z.literal("")),
  name: z.string().trim().min(2, "Enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid Irish phone number")
    .regex(irishPhoneRegex, "Use an Irish format such as 087… or +353…"),
  email: z.string().trim().email("Enter a valid email address").max(120),
  callbackTime: z.string().trim().max(80).optional().or(z.literal("")),
  privacyAccepted: z.boolean().refine((value) => value === true, {
    message: "Please accept the Privacy Policy",
  }),
  website: z.string().max(0).optional().or(z.literal("")),
  formStartedAt: z.coerce.number().optional(),
  captchaToken: z.string().optional().or(z.literal("")),
  sourceUrl: z.string().trim().max(300).optional().or(z.literal("")),
  referrer: z.string().trim().max(400).optional().or(z.literal("")),
  utmSource: z.string().trim().max(80).optional().or(z.literal("")),
  utmMedium: z.string().trim().max(80).optional().or(z.literal("")),
  utmCampaign: z.string().trim().max(80).optional().or(z.literal("")),
  utmTerm: z.string().trim().max(80).optional().or(z.literal("")),
  utmContent: z.string().trim().max(80).optional().or(z.literal("")),
});

export const shortEnquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid Irish phone number")
    .regex(irishPhoneRegex, "Use an Irish format such as 087… or +353…"),
  email: z.string().trim().email("Enter a valid email address").max(120),
  area: z.string().trim().min(2, "Enter your area").max(120),
  message: z.string().trim().min(8, "Enter a short message").max(3000),
  enquiryType: z.enum(enquiryTypes).optional().or(z.literal("")),
  privacyAccepted: z.boolean().refine((value) => value === true, {
    message: "Please accept the Privacy Policy",
  }),
  website: z.string().max(0).optional().or(z.literal("")),
  formStartedAt: z.coerce.number().optional(),
  captchaToken: z.string().optional().or(z.literal("")),
  sourceUrl: z.string().trim().max(300).optional().or(z.literal("")),
  referrer: z.string().trim().max(400).optional().or(z.literal("")),
  utmSource: z.string().trim().max(80).optional().or(z.literal("")),
  utmMedium: z.string().trim().max(80).optional().or(z.literal("")),
  utmCampaign: z.string().trim().max(80).optional().or(z.literal("")),
  utmTerm: z.string().trim().max(80).optional().or(z.literal("")),
  utmContent: z.string().trim().max(80).optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
export type ShortEnquiryInput = z.infer<typeof shortEnquirySchema>;

export function isTooFast(formStartedAt?: number, minMs = 3000) {
  if (!formStartedAt) return false;
  return Date.now() - formStartedAt < minMs;
}

export const enquiryTypeLabels: Record<(typeof enquiryTypes)[number], string> = {
  "full-attic": "Full attic conversion",
  dormer: "Dormer conversion",
  ensuite: "Attic with en-suite",
  stairs: "Attic stairs",
  flooring: "Attic flooring",
  extension: "Home extension",
  renovation: "Home renovation",
  carpentry: "General carpentry",
  unsure: "Not sure yet",
};

export const intendedUseLabels: Record<(typeof intendedUses)[number], string> = {
  bedroom: "Bedroom",
  "bedroom-ensuite": "Bedroom + en-suite",
  office: "Home office",
  playroom: "Playroom",
  living: "Living space",
  storage: "Storage",
  other: "Other",
};

export function isAtticEnquiry(type?: string) {
  return type === "full-attic" || type === "dormer" || type === "ensuite" || type === "stairs" || type === "flooring" || type === "unsure";
}
