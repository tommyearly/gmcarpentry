"use client";

import { getRecaptchaSiteKey, isRecaptchaEnabledClient } from "@/lib/recaptcha-client";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

let scriptLoading: Promise<void> | null = null;

function loadRecaptchaV3(siteKey: string) {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.grecaptcha?.execute) return Promise.resolve();
  if (scriptLoading) return scriptLoading;

  scriptLoading = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-gm-recaptcha-v3="1"]');
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("reCAPTCHA failed to load")));
      if (window.grecaptcha?.execute) resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.async = true;
    script.defer = true;
    script.dataset.gmRecaptchaV3 = "1";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("reCAPTCHA failed to load"));
    document.head.appendChild(script);
  });

  return scriptLoading;
}

export async function prepareRecaptcha() {
  const siteKey = getRecaptchaSiteKey();
  if (!siteKey) return;
  await loadRecaptchaV3(siteKey);
}

export async function executeRecaptcha(action: string): Promise<string> {
  const siteKey = getRecaptchaSiteKey();
  if (!siteKey) return "";
  await loadRecaptchaV3(siteKey);
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha?.ready || !window.grecaptcha.execute) {
      reject(new Error("reCAPTCHA is not available"));
      return;
    }
    window.grecaptcha.ready(() => {
      window.grecaptcha!.execute(siteKey, { action }).then(resolve).catch(reject);
    });
  });
}

export function RecaptchaNotice({ className }: { className?: string }) {
  if (!isRecaptchaEnabledClient()) return null;
  return (
    <p className={className ?? "mt-5 text-xs leading-relaxed text-subtle"}>
      This site is protected by reCAPTCHA and the Google{" "}
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-2 hover:underline">
        Privacy Policy
      </a>{" "}
      and{" "}
      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-2 hover:underline">
        Terms of Service
      </a>{" "}
      apply.
    </p>
  );
}
