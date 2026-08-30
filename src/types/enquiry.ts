import type { enquiryTypes, intendedUses } from "@/lib/validation";

export type EnquiryRequest = {
  id: string;
  reference: string;
  createdAt: string;
  enquiryType: (typeof enquiryTypes)[number] | string;
  intendedUse?: (typeof intendedUses)[number] | string;
  area: string;
  message?: string;
  name: string;
  phone: string;
  email: string;
  callbackTime?: string;
  sourceUrl?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
};
