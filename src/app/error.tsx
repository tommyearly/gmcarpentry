"use client";

import { Button } from "@/components/ui/Button";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="container-site py-24">
      <h1 className="section-title text-charcoal">Something went wrong.</h1>
      <p className="lead mt-4">Please try again, or call 087 615 9429.</p>
      <div className="mt-8 flex gap-3">
        <Button type="button" onClick={reset}>
          Try again
        </Button>
        <Button href="/contact" variant="outline">
          Contact
        </Button>
      </div>
    </section>
  );
}
