import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-site py-24">
      <p className="eyebrow mb-4">404</p>
      <h1 className="display max-w-4xl text-purple-deep">
        Looks like this space hasn’t been converted yet
      </h1>
      <p className="lead mt-6">The page isn’t here. These are.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/attic-conversions">Attic conversions</Button>
        <Button href="/projects" variant="outline">
          Recent projects
        </Button>
        <Button href="/contact" variant="outline">
          Contact
        </Button>
      </div>
    </section>
  );
}
