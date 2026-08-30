import { displayPhone, telHref } from "@/config/business";
import { Button } from "@/components/ui/Button";

type Props = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "What’s above your ceiling?",
  description = "Tell GM Carpentry what you’re thinking and arrange a free consultation to explore your attic-conversion options.",
}: Props) {
  return (
    <section className="bg-purple py-16 text-white md:py-24">
      <div className="container-site flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow text-white">GM Carpentry &amp; Construction</p>
          <h2 className="display-md mt-3 text-white">{title}</h2>
          <p className="mt-4 max-w-xl text-lg text-white/75">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" size="lg">
            Get a free consultation
          </Button>
          <Button href={telHref()} size="lg" variant="ghost">
            Call {displayPhone()}
          </Button>
        </div>
      </div>
    </section>
  );
}
