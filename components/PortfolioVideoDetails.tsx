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

function compactVideoTitle(fullTitle: string, channel: string): string {
  // YouTube titles often append search keywords after a vertical bar. Keep
  // the main title segment, filling short titles from the next segment while
  // excluding channel-name words and limiting the card label to four words.
  const segments = fullTitle.split("|").map((segment) => segment.trim()).filter(Boolean);
  const mainTitle = segments[0] || fullTitle.trim();
  const channelWords = new Set(channel.toLowerCase().split(/\s+/).filter(Boolean));
  const cleanWords = (value: string) => value
    .split(/\s+/)
    .map((word) => word.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ""))
    .filter(Boolean);
  const mainWords = cleanWords(mainTitle);
  const words = [...mainWords];

  if (words.length < 3) {
    for (const word of cleanWords(segments.slice(1).join(" "))) {
      if (channelWords.has(word.toLowerCase()) || words.includes(word)) continue;
      words.push(word);
      if (words.length === 4) break;
    }
  }

  const visibleWords = words.slice(0, 4);
  const hasMore = mainWords.length > 4 || words.length > visibleWords.length || segments.length > 1;
  return `${visibleWords.join(" ")}${hasMore ? "…" : ""}` || mainTitle;
}

export default function PortfolioVideoDetails({
  videoUrl,
  fallbackTitle,
  fallbackChannel,
  fallbackDuration,
}: PortfolioVideoDetailsProps) {
  const youtubeId = getYouTubeVideoId(videoUrl);
  const metadataRegion = useRef<HTMLDivElement>(null);
  const playerHost = useRef<HTMLDivElement>(null);
  const [metadata, setMetadata] = useState<VideoMetadata | null>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    if (!youtubeId) return;

    let cancelled = false;
    const metadataUrl = `/api/video-metadata?url=${encodeURIComponent(videoUrl)}`;
    fetch(metadataUrl)
      .then((response) => response.ok ? response.json() as Promise<{ title?: string; channel?: string }> : null)
      .then((details) => {
        if (!details || cancelled) return;
        setMetadata((current) => ({
          title: details.title || current?.title || "",
          channel: details.channel || current?.channel || "",
          duration: current?.duration || "",
        }));
      })
      .catch(() => undefined);

    return () => { cancelled = true; };
  }, [youtubeId, videoUrl]);

  useEffect(() => {
    if (!youtubeId || !playerHost.current || !metadataRegion.current) return;

    let cancelled = false;
    let player: import("../lib/youtube-player").YouTubePlayer | null = null;
    let pollTimer: number | undefined;

    const createPlayer = () => {
      if (cancelled || !playerHost.current) return;
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
                event.target.cueVideoById(youtubeId);
                readDetails();
              },
              onStateChange: (event) => {
                if (event.data === 5) {
                  const details = event.target.getVideoData();
                  const seconds = event.target.getDuration();
                  setMetadata((current) => ({
                    title: current?.title || details.title || "",
                    channel: current?.channel || details.author || "",
                    duration: seconds > 0 ? formatDuration(seconds) : current?.duration || "",
                  }));
                }
              },
              onError: () => setUnavailable(true),
            },
          });
        })
        .catch(() => setUnavailable(true));
    };

    const host = metadataRegion.current;
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
  const cardTitle = compactVideoTitle(title, channel);

  return (
    <div ref={metadataRegion}>
      {youtubeId && <div ref={playerHost} aria-hidden="true" className="pointer-events-none fixed -left-[10000px] top-0 h-[200px] w-[200px]" />}
      <h3
        title={title}
        aria-label={title}
        className="mb-1 text-xl font-bold text-[var(--primary)] transition-colors group-hover:text-[var(--accent)]"
      >
        {cardTitle}
      </h3>
      {info && <p className="text-sm text-[var(--secondary)]">{info}</p>}
    </div>
  );
}
