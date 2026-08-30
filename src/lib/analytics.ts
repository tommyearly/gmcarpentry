"use client";

export type AnalyticsEvent =
  | "phone_click"
  | "email_click"
  | "enquiry_open"
  | "enquiry_submit"
  | "service_cta"
  | "project_cta";

export function track(event: AnalyticsEvent, detail?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const payload = { event, ...detail };
  const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  if (Array.isArray(dataLayer)) {
    dataLayer.push(payload);
  }
  window.dispatchEvent(new CustomEvent("gm:analytics", { detail: payload }));
}
