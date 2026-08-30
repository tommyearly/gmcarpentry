import { Hammer, Home, Layers, MapPin, Ruler, ShieldCheck } from "lucide-react";
import { Stagger } from "@/components/motion/Stagger";
import { StaggerItem } from "@/components/motion/StaggerItem";

const items = [
  { label: "Dublin Based", icon: MapPin },
  { label: "Attic Specialists", icon: Home },
  { label: "Free Consultation", icon: Ruler },
  { label: "Free Estimate", icon: ShieldCheck },
  { label: "Stairs & En-suites", icon: Layers },
  { label: "Qualified Tradesmen", icon: Hammer },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-white/80 backdrop-blur-sm">
      <Stagger className="container-site grid grid-cols-2 gap-4 py-8 md:grid-cols-3 lg:grid-cols-6">
        {items.map((item, index) => (
          <StaggerItem key={item.label} index={index} className="flex items-center gap-3">
            <div className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-soft to-purple-soft text-purple">
              <item.icon className="size-5" aria-hidden="true" />
            </div>
            <p className="text-sm font-bold tracking-tight text-text sm:text-base">{item.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
