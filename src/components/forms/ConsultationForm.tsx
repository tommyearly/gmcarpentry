"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { displayEmail, displayPhone } from "@/config/business";
import { RecaptchaNotice, executeRecaptcha, prepareRecaptcha } from "@/components/forms/RecaptchaWidget";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { isRecaptchaEnabledClient } from "@/lib/recaptcha-client";
import { enquiryTypeLabels, intendedUseLabels, isAtticEnquiry } from "@/lib/validation";
import { cn } from "@/lib/utils";

type FormState = {
  enquiryType: string;
  intendedUse: string;
  area: string;
  message: string;
  name: string;
  phone: string;
  email: string;
  callbackTime: string;
  privacyAccepted: boolean;
  website: string;
};

const initial: FormState = {
  enquiryType: "",
  intendedUse: "",
  area: "",
  message: "",
  name: "",
  phone: "",
  email: "",
  callbackTime: "",
  privacyAccepted: false,
  website: "",
};

function utm() {
  if (typeof window === "undefined") return {};
  const q = new URLSearchParams(window.location.search);
  return {
    sourceUrl: window.location.href,
    referrer: document.referrer,
    utmSource: q.get("utm_source") || "",
    utmMedium: q.get("utm_medium") || "",
    utmCampaign: q.get("utm_campaign") || "",
    utmTerm: q.get("utm_term") || "",
    utmContent: q.get("utm_content") || "",
  };
}

export function ConsultationForm() {
  const startedAt = useMemo(() => Date.now(), []);
  const captchaEnabled = isRecaptchaEnabledClient();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [reference, setReference] = useState("");
  const submittingRef = useRef(false);

  useEffect(() => {
    void prepareRecaptcha();
    track("enquiry_open", { source: "consultation" });
  }, []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const showUse = isAtticEnquiry(form.enquiryType);
  const totalSteps = showUse ? 5 : 4;

  function next() {
    if (step === 1 && !form.enquiryType) {
      setErrors({ enquiryType: "Choose what you are considering" });
      return;
    }
    if (step === 2 && showUse && !form.intendedUse) {
      setErrors({ intendedUse: "Choose what you would like the space to become" });
      return;
    }
    if ((step === 2 && !showUse) || (step === 3 && showUse)) {
      if (form.area.trim().length < 2) {
        setErrors({ area: "Enter your area" });
        return;
      }
    }
    setErrors({});
    setStep((s) => Math.min(totalSteps, s + 1));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < totalSteps) {
      next();
      return;
    }
    if (submittingRef.current) return;
    submittingRef.current = true;
    setStatus("loading");
    setErrors({});
    setErrorMessage("");
    const fallback = `We couldn't send your enquiry automatically. Please call ${displayPhone()} or email ${displayEmail()}.`;

    try {
      let captchaToken = "";
      if (captchaEnabled) {
        captchaToken = await executeRecaptcha("enquiry");
        if (!captchaToken) throw new Error("captcha");
      }
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          formStartedAt: startedAt,
          captchaToken,
          ...utm(),
        }),
      });
      const data = (await response.json()) as {
        message?: string;
        reference?: string;
        fieldErrors?: Record<string, string>;
      };
      if (!response.ok) {
        if (data.fieldErrors) setErrors(data.fieldErrors);
        setErrorMessage(data.message || fallback);
        setStatus("error");
        return;
      }
      setReference(data.reference || "");
      setStatus("success");
      track("enquiry_submit", { type: form.enquiryType });
    } catch {
      setErrorMessage(fallback);
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  }

  if (status === "success") {
    return (
      <div className="surface motion-scale is-inview p-6 md:p-8">
        <p className="eyebrow mb-3">Received</p>
        <h3 className="text-2xl font-semibold text-charcoal">Thanks — we’ve received your project enquiry.</h3>
        <p className="mt-3 text-muted">
          Reference <strong className="text-charcoal">{reference}</strong>. This is not a confirmed booking. A member of the GM Carpentry team will review your enquiry and contact you to discuss the next steps.
        </p>
      </div>
    );
  }

  const field = "field-premium w-full rounded-xl border border-border bg-bg-soft px-4 py-3 text-text outline-none focus:border-purple";

  return (
    <form onSubmit={onSubmit} className="surface p-5 md:p-8" noValidate>
      <p className="eyebrow mb-3">Free consultation</p>
      <h2 className="text-3xl font-semibold tracking-tight text-charcoal">See what’s possible with your attic.</h2>
      <p className="mt-3 text-muted">Tell us a little about your home and what you’d like to create.</p>
      <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-subtle">
        Step {step} of {totalSteps}
      </p>

      {step === 1 ? (
        <fieldset className="mt-6">
          <legend className="mb-3 font-semibold text-charcoal">What are you considering?</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {Object.entries(enquiryTypeLabels).map(([value, label]) => (
              <label
                key={value}
                className={cn(
                  "cursor-pointer rounded-xl border px-3 py-3 text-sm",
                  form.enquiryType === value ? "border-gold bg-gold-soft" : "border-border bg-white",
                )}
              >
                <input
                  type="radio"
                  className="sr-only"
                  name="enquiryType"
                  value={value}
                  checked={form.enquiryType === value}
                  onChange={() => update("enquiryType", value)}
                />
                {label}
              </label>
            ))}
          </div>
          {errors.enquiryType ? <p className="mt-2 text-sm text-danger">{errors.enquiryType}</p> : null}
        </fieldset>
      ) : null}

      {step === 2 && showUse ? (
        <fieldset className="mt-6">
          <legend className="mb-3 font-semibold text-charcoal">What would you like the space to become?</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {Object.entries(intendedUseLabels).map(([value, label]) => (
              <label
                key={value}
                className={cn(
                  "cursor-pointer rounded-xl border px-3 py-3 text-sm",
                  form.intendedUse === value ? "border-gold bg-gold-soft" : "border-border bg-white",
                )}
              >
                <input
                  type="radio"
                  className="sr-only"
                  name="intendedUse"
                  value={value}
                  checked={form.intendedUse === value}
                  onChange={() => update("intendedUse", value)}
                />
                {label}
              </label>
            ))}
          </div>
          {errors.intendedUse ? <p className="mt-2 text-sm text-danger">{errors.intendedUse}</p> : null}
        </fieldset>
      ) : null}

      {(step === 2 && !showUse) || (step === 3 && showUse) ? (
        <label className="mt-6 block">
          <span className="mb-2 block text-sm font-medium">Property location / area</span>
          <input className={field} value={form.area} onChange={(e) => update("area", e.target.value)} autoComplete="address-level2" />
          {errors.area ? <span className="mt-1 block text-sm text-danger">{errors.area}</span> : null}
        </label>
      ) : null}

      {(step === 3 && !showUse) || (step === 4 && showUse) ? (
        <label className="mt-6 block">
          <span className="mb-2 block text-sm font-medium">Project details</span>
          <textarea
            className={cn(field, "min-h-32")}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Anything useful — house type, what you’d like the room to become, questions."
          />
        </label>
      ) : null}

      {step === totalSteps ? (
        <div className="mt-6 grid gap-4">
          <label>
            <span className="mb-2 block text-sm font-medium">Name</span>
            <input className={field} value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" required />
            {errors.name ? <span className="mt-1 block text-sm text-danger">{errors.name}</span> : null}
          </label>
          <label>
            <span className="mb-2 block text-sm font-medium">Phone</span>
            <input className={field} type="tel" inputMode="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" required />
            {errors.phone ? <span className="mt-1 block text-sm text-danger">{errors.phone}</span> : null}
          </label>
          <label>
            <span className="mb-2 block text-sm font-medium">Email</span>
            <input className={field} type="email" inputMode="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" required />
            {errors.email ? <span className="mt-1 block text-sm text-danger">{errors.email}</span> : null}
          </label>
          <label>
            <span className="mb-2 block text-sm font-medium">Preferred callback time (optional)</span>
            <input className={field} value={form.callbackTime} onChange={(e) => update("callbackTime", e.target.value)} />
          </label>
        </div>
      ) : null}

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} />
        </label>
      </div>

      {step === totalSteps ? (
        <label className="mt-5 flex items-start gap-3 text-sm text-muted">
          <input
            type="checkbox"
            className="mt-1 size-4 accent-[var(--gm-gold)]"
            checked={form.privacyAccepted}
            onChange={(e) => update("privacyAccepted", e.target.checked)}
          />
          <span>
            I agree to the{" "}
            <Link href="/privacy-policy" className="underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            .
            {errors.privacyAccepted ? <span className="mt-1 block text-danger">{errors.privacyAccepted}</span> : null}
          </span>
        </label>
      ) : null}

      <RecaptchaNotice />
      {status === "error" && errorMessage ? (
        <p className="mt-4 border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger">{errorMessage}</p>
      ) : null}

      <div className="mt-6 flex gap-3">
        {step > 1 ? (
          <Button type="button" variant="outline" onClick={() => setStep((s) => s - 1)}>
            Back
          </Button>
        ) : null}
        <Button type="submit" className="flex-1" disabled={status === "loading"}>
          {step < totalSteps ? "Continue" : status === "loading" ? "Sending…" : "Request my free consultation"}
        </Button>
      </div>
    </form>
  );
}
