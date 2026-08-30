export type RecaptchaVerifyResult =
  | { ok: true; score?: number; action?: string }
  | { ok: false; reason: string };

function minScore() {
  const raw = process.env.RECAPTCHA_MIN_SCORE?.trim();
  const parsed = raw ? Number(raw) : 0.5;
  return Number.isFinite(parsed) ? parsed : 0.5;
}

export function isRecaptchaConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() && process.env.RECAPTCHA_SECRET_KEY?.trim(),
  );
}

export function getRecaptchaSiteKey() {
  return process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() || "";
}

export async function verifyRecaptchaToken(
  token: string | undefined,
  remoteIp?: string,
  expectedAction?: string,
): Promise<RecaptchaVerifyResult> {
  if (!isRecaptchaConfigured()) {
    return { ok: true };
  }

  if (!token?.trim()) {
    return { ok: false, reason: "Security check failed. Please refresh and try again." };
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY!.trim();
  const body = new URLSearchParams({
    secret,
    response: token.trim(),
  });
  if (remoteIp && remoteIp !== "unknown") {
    body.set("remoteip", remoteIp);
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    return { ok: false, reason: "reCAPTCHA verification failed. Please try again." };
  }

  const data = (await response.json()) as {
    success?: boolean;
    score?: number;
    action?: string;
  };

  if (!data.success) {
    return { ok: false, reason: "reCAPTCHA check failed. Please try again." };
  }

  if (expectedAction && data.action && data.action !== expectedAction) {
    return { ok: false, reason: "reCAPTCHA action mismatch. Please try again." };
  }

  const score = typeof data.score === "number" ? data.score : 0;
  if (score < minScore()) {
    return {
      ok: false,
      reason: "Your request looked automated. Please try again or call us.",
    };
  }

  return { ok: true, score: data.score, action: data.action };
}
