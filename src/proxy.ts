import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "gmcarpentry.ie";

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") || "").toLowerCase();
  const proto = (request.headers.get("x-forwarded-proto") || request.nextUrl.protocol.replace(":", "")).toLowerCase();

  const isLocal =
    host.startsWith("localhost") || host.startsWith("127.0.0.1") || host.endsWith(".local");
  const isVercelPreview = host.endsWith(".vercel.app");

  if (isLocal || isVercelPreview) {
    return NextResponse.next();
  }

  const needsApex = host === "www.gmcarpentry.ie" || host.startsWith("www.gmcarpentry.ie:");
  const needsHttps = proto === "http";

  if (!needsApex && !needsHttps && host === CANONICAL_HOST) {
    return NextResponse.next();
  }

  if (needsApex || needsHttps || host !== CANONICAL_HOST) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)"],
};
