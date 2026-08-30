import { displayPhone } from "@/config/business";
import { TrackedTelLink } from "@/components/seo/TrackedTelLink";

export function AnnouncementBar() {
  return (
    <div className="bg-purple text-white">
      <div className="container-site flex flex-col gap-1 py-2 text-center text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white/85 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>Dublin attic conversion specialists · Free consultation &amp; estimate</p>
        <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span className="hidden sm:inline">Priest Town, Kilbride, Dublin 15</span>
          <TrackedTelLink source="announcement" className="focus-ring rounded text-gold hover:text-white">
            {displayPhone()}
          </TrackedTelLink>
        </p>
      </div>
    </div>
  );
}
