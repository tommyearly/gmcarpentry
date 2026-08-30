"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { Video } from "@/data/videos";

export function VideoCard({ video }: { video: Video }) {
  const [active, setActive] = useState(false);

  return (
    <figure className="card-lift surface overflow-hidden">
      <div className="relative aspect-video overflow-hidden bg-purple-deep">
        {active ? (
          <iframe
            title={video.title}
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            className="focus-ring group absolute inset-0"
            onClick={() => setActive(true)}
          >
            <Image src={video.poster} alt="" fill className="object-cover opacity-80" sizes="(max-width: 768px) 100vw, 50vw" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-gold text-[#2a1a00] shadow-[0_12px_28px_rgba(232,185,35,0.35)]">
                <Play className="size-6 fill-current" />
              </span>
            </span>
            <span className="sr-only">Play {video.title}</span>
          </button>
        )}
      </div>
      <figcaption className="p-5">
        <p className="font-bold text-purple-deep">{video.title}</p>
        <p className="mt-1 text-sm text-text-muted">{video.description}</p>
      </figcaption>
    </figure>
  );
}
