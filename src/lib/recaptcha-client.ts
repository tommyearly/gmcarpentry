export function getRecaptchaSiteKey() {
  return process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() || "";
}

export function isRecaptchaEnabledClient() {
  return Boolean(getRecaptchaSiteKey());
}
