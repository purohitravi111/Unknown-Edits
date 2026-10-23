"use client";

import { useEffect, useState } from "react";

interface PortfolioVideoDetailsProps {
  videoUrl: string;
  fallbackTitle: string;
  fallbackChannel: string;
  fallbackDuration: string;
}

interface VideoMetadata {
  title: string;
  channel: string;
  duration: string;
}

export default function PortfolioVideoDetails({
  videoUrl,
  fallbackTitle,
  fallbackChannel,
  fallbackDuration,
}: PortfolioVideoDetailsProps) {
  const [metadata, setMetadata] = useState<VideoMetadata | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const params = new URLSearchParams({ url: videoUrl });

    fetch(`/api/video-metadata?${params}`, { signal: controller.signal })
      .then((response) => response.ok ? response.json() as Promise<VideoMetadata> : null)
      .then((details) => {
        if (details?.title) setMetadata(details);
      })
      .catch(() => undefined);

    return () => controller.abort();
  }, [videoUrl]);

  const title = metadata?.title || fallbackTitle;
  const channel = metadata?.channel || fallbackChannel;
  const duration = metadata?.duration || fallbackDuration;
  const info = [channel, duration].filter(Boolean).join(" • ");

  return (
    <>
      <h3 className="mb-1 text-xl font-bold text-[var(--primary)] transition-colors group-hover:text-[var(--accent)]">
        {title}
      </h3>
      {info && <p className="text-sm text-[var(--secondary)]">{info}</p>}
    </>
  );
}
