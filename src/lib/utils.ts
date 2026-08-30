export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(path = "/") {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://gmcarpentry.ie";
  if (path.startsWith("http")) return path;
  return `${base.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}

export function firstName(fullName: string) {
  return fullName.trim().split(/\s+/)[0] || fullName;
}

export function sanitizeText(value: string, max = 2000) {
  return value.replace(/[<>]/g, "").trim().slice(0, max);
}

export function generateReference(prefix = "GM") {
  const now = new Date();
  const yyyy = String(now.getFullYear());
  const rand = Math.random().toString(10).slice(2, 8).padStart(6, "0");
  return `${prefix}-${yyyy}-${rand}`;
}

export function generateId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `id_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function formatTimestampIE(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-IE", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
