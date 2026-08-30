"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { displayEmail, displayPhone } from "@/config/business";
import { RecaptchaNotice, executeRecaptcha, prepareRecaptcha } from "@/components/forms/RecaptchaWidget";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { isRecaptchaEnabledClient } from "@/lib/recaptcha-client";
import { cn } from "@/lib/utils";

type Props = {
  defaultType?: string;
  variant?: "card" | "hero";
};

export function ShortEnquiryForm({ defaultType = "full-attic", variant = "card" }: Props) {
  const startedAt = useMemo(() => Date.now(), []);
  const captchaEnabled = isRecaptchaEnabledClient();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    message: "",
    privacyAccepted: false,
    website: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const submittingRef = useRef(false);

  useEffect(() => {
    void prepareRecaptcha();
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;
    submittingRef.current = true;
    setStatus("loading");
    setErrors({});
    const fallback = `We couldn't send this automatically. Call ${displayPhone()} or email ${displayEmail()}.`;
    try {
      let captchaToken = "";
      if (captchaEnabled) captchaToken = await executeRecaptcha("enquiry");
      const q = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          enquiryType: defaultType,
          formStartedAt: startedAt,
          captchaToken,
          sourceUrl: typeof window !== "undefined" ? window.location.href : "",
          referrer: typeof document !== "undefined" ? document.referrer : "",
          utmSource: q.get("utm_source") || "",
          utmMedium: q.get("utm_medium") || "",
          utmCampaign: q.get("utm_campaign") || "",
          utmTerm: q.get("utm_term") || "",
          utmContent: q.get("utm_content") || "",
        }),
      });
      const data = (await response.json()) as { message?: string; fieldErrors?: Record<string, string> };
      if (!response.ok) {
        if (data.fieldErrors) setErrors(data.fieldErrors);
        setErrorMessage(data.message || fallback);
        setStatus("error");
        return;
      }
      setStatus("success");
      track("enquiry_submit", { type: defaultType, source: "short" });
    } catch {
      setErrorMessage(fallback);
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  }

  const field = "field-premium w-full rounded-xl border border-border bg-bg-soft px-4 py-3 text-text outline-none focus:border-purple";
  const wrap =
    variant === "hero"
      ? "rounded-[1.25rem] border border-white/80 bg-white p-5 text-purple-deep shadow-[0_24px_60px_rgba(18,36,29,0.28)] md:p-7"
      : "surface p-5 md:p-7";

  if (status === "success") {
    return (
      <div className={`${wrap} motion-scale is-inview`}>
        <h3 className="text-xl font-bold text-purple-deep">Estimate request received</h3>
        <p className="mt-2 text-text-muted">The team will contact you to discuss the project. This is not a confirmed booking.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={wrap} noValidate>
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-purple">Enquire</p>
      <h3 className="mt-1 text-2xl font-bold tracking-tight text-purple-deep">Get a free estimate</h3>
      <div className="mt-5 grid gap-4">
        <label>
          <span className="mb-2 block text-sm">Name</span>
          <input className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" required />
          {errors.name ? <span className="text-sm text-danger">{errors.name}</span> : null}
        </label>
        <label>
          <span className="mb-2 block text-sm">Phone</span>
          <input className={field} type="tel" inputMode="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} autoComplete="tel" required />
          {errors.phone ? <span className="text-sm text-danger">{errors.phone}</span> : null}
        </label>
        <label>
          <span className="mb-2 block text-sm">Email</span>
          <input className={field} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} autoComplete="email" required />
          {errors.email ? <span className="text-sm text-danger">{errors.email}</span> : null}
        </label>
        <label>
          <span className="mb-2 block text-sm">Area</span>
          <input className={field} value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} autoComplete="address-level2" required />
          {errors.area ? <span className="text-sm text-danger">{errors.area}</span> : null}
        </label>
        <label>
          <span className="mb-2 block text-sm">Message</span>
          <textarea className={cn(field, "min-h-28")} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
          {errors.message ? <span className="text-sm text-danger">{errors.message}</span> : null}
        </label>
      </div>
      <div className="absolute -left-[9999px] overflow-hidden" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
      </div>
      <label className="mt-4 flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" className="mt-1" checked={form.privacyAccepted} onChange={(e) => setForm({ ...form, privacyAccepted: e.target.checked })} />
        <span>
          I agree to the <Link href="/privacy-policy" className="underline-offset-2 hover:underline">Privacy Policy</Link>.
        </span>
      </label>
      <RecaptchaNotice />
      {status === "error" ? <p className="mt-3 text-sm text-danger">{errorMessage}</p> : null}
      <Button type="submit" className="mt-5 w-full" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Get a free estimate"}
      </Button>
    </form>
  );
}
