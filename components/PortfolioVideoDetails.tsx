"use client";

import { useEffect, useRef, useState } from "react";
import { getYouTubeVideoId, loadYouTubeIframeApi } from "../lib/youtube-player";

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

function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;
  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`
    : `${minutes}:${String(remainder).padStart(2, "0")}`;
}

export default function PortfolioVideoDetails({
  videoUrl,
  fallbackTitle,
  fallbackChannel,
  fallbackDuration,
}: PortfolioVideoDetailsProps) {
  const youtubeId = getYouTubeVideoId(videoUrl);
  const playerHost = useRef<HTMLDivElement>(null);
  const [metadata, setMetadata] = useState<VideoMetadata | null>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    if (!youtubeId || !playerHost.current) return;

    let cancelled = false;
    let player: import("../lib/youtube-player").YouTubePlayer | null = null;
    let pollTimer: number | undefined;

    const createPlayer = () => {
      if (cancelled || !playerHost.current) return;

      // YouTube's player API supplies the runtime; oEmbed consistently supplies
      // the public title and channel name, including when the hidden player omits its author.
      const oEmbedUrl = `https://noembed.com/embed?url=${encodeURIComponent(videoUrl)}`;
      fetch(oEmbedUrl)
        .then((response) => response.ok ? response.json() as Promise<{ title?: string; author_name?: string }> : null)
        .then((details) => {
          if (!details || cancelled) return;
          setMetadata((current) => ({
            title: current?.title || details.title || "",
            channel: details.author_name || current?.channel || "",
            duration: current?.duration || "",
          }));
        })
        .catch(() => undefined);

      loadYouTubeIframeApi()
        .then((api) => {
          if (cancelled || !playerHost.current) return;
          player = new api.Player(playerHost.current, {
            videoId: youtubeId,
            playerVars: {
              autoplay: 0,
              controls: 0,
              disablekb: 1,
              enablejsapi: 1,
              fs: 0,
              origin: window.location.origin,
              playsinline: 1,
              rel: 0,
            },
            events: {
              onReady: (event) => {
                let attempts = 0;
                const readDetails = () => {
                  if (cancelled) return;
                  const details = event.target.getVideoData();
                  const seconds = event.target.getDuration();
                  if (details.title || details.author) {
                    setMetadata((current) => ({
                      title: current?.title || details.title || "",
                      channel: current?.channel || details.author || "",
                      duration: seconds > 0 ? formatDuration(seconds) : current?.duration || "",
                    }));
                  }
                  attempts += 1;
                  if (attempts < 12 && (!details.title || seconds <= 0)) {
                    pollTimer = window.setTimeout(readDetails, 500);
                  }
                };
                readDetails();
              },
              onError: () => setUnavailable(true),
            },
          });
        })
        .catch(() => setUnavailable(true));
    };

    const host = playerHost.current;
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          createPlayer();
        }
      }, { rootMargin: "240px" });
      observer.observe(host);
      return () => {
        cancelled = true;
        observer.disconnect();
        if (pollTimer) window.clearTimeout(pollTimer);
        player?.destroy();
      };
    }

    createPlayer();
    return () => {
      cancelled = true;
      if (pollTimer) window.clearTimeout(pollTimer);
      player?.destroy();
    };
  }, [youtubeId]);

  const title = youtubeId
    ? metadata?.title || (unavailable ? "Video details unavailable" : "Loading video details…")
    : fallbackTitle;
  const channel = youtubeId
    ? metadata?.channel || ""
    : fallbackChannel;
  const duration = youtubeId
    ? metadata?.duration || ""
    : fallbackDuration;
  const info = [channel, duration].filter(Boolean).join(" • ");

  return (
    <>
      {youtubeId && <div ref={playerHost} aria-hidden="true" className="sr-only" />}
      <h3 className="mb-1 text-xl font-bold text-[var(--primary)] transition-colors group-hover:text-[var(--accent)]">
        {title}
      </h3>
      {info && <p className="text-sm text-[var(--secondary)]">{info}</p>}
    </>
  );
}
