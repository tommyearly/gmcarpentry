import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Email signature",
  description: "GM Carpentry email signature preview.",
  path: "/email-signature",
  noIndex: true,
});

export default function EmailSignaturePage() {
  return (
    <iframe title="Email signature" src="/email-signature.html" className="min-h-screen w-full border-0" />
  );
}
