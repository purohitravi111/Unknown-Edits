export type VideoSource =
  | { kind: "embed"; embedUrl: string; thumbnailUrl: string | null }
  | { kind: "file"; fileUrl: string; thumbnailUrl: string | null }
  | { kind: "link"; linkUrl: string; thumbnailUrl: string | null };

function parsed(url: string): URL | null {
  try {
    return new URL(url);
  } catch {
    return null;
  }
}

function hostOf(url: URL): string {
  return url.hostname.toLowerCase().replace(/^www\./, "");
}

export function getVideoSource(
  videoUrl: string,
  customEmbedUrl?: string,
  customThumbnailUrl?: string
): VideoSource {
  const thumbnail = customThumbnailUrl?.trim() || null;
  const url = parsed(videoUrl);
  if (!url) return { kind: "link", linkUrl: videoUrl, thumbnailUrl: thumbnail };

  if (customEmbedUrl?.trim()) {
    return { kind: "embed", embedUrl: customEmbedUrl.trim(), thumbnailUrl: thumbnail };
  }

  const host = hostOf(url);
  let id: string | null = null;

  if (host === "youtu.be") {
    id = url.pathname.split("/").filter(Boolean)[0] || null;
  } else if (["youtube.com", "m.youtube.com", "youtube-nocookie.com"].includes(host)) {
    const parts = url.pathname.split("/").filter(Boolean);
    id = url.pathname === "/watch"
      ? url.searchParams.get("v")
      : parts[0] === "embed" || parts[0] === "shorts" || parts[0] === "live"
        ? parts[1] || null
        : null;
  }
  if (id && /^[\w-]{11}$/.test(id)) {
    return {
      kind: "embed",
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&rel=0&playsinline=1`,
      thumbnailUrl: thumbnail || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
    };
  }

  if (host === "instagram.com") {
    const parts = url.pathname.split("/").filter(Boolean);
    if (["reel", "reels", "p", "tv"].includes(parts[0]) && parts[1]) {
      const kind = parts[0] === "reels" ? "reel" : parts[0];
      return {
        kind: "embed",
        embedUrl: `https://www.instagram.com/${kind}/${encodeURIComponent(parts[1])}/embed/`,
        thumbnailUrl: thumbnail
      };
    }
  }

  if (host === "tiktok.com" || host.endsWith(".tiktok.com")) {
    const parts = url.pathname.split("/").filter(Boolean);
    const idIndex = parts.indexOf("video");
    const id = idIndex >= 0 ? parts[idIndex + 1] : null;
    if (id && /^\d+$/.test(id)) {
      return {
        kind: "embed",
        embedUrl: `https://www.tiktok.com/player/v1/${id}?controls=1&progress_bar=1&play_button=1&volume_control=1&fullscreen_button=1`,
        thumbnailUrl: thumbnail
      };
    }
  }

  if (host === "vimeo.com" || host.endsWith(".vimeo.com")) {
    const match = url.pathname.match(/(?:video\/)?(\d+)/);
    if (match) {
      return {
        kind: "embed",
        embedUrl: `https://player.vimeo.com/video/${match[1]}?autoplay=1&muted=1`,
        thumbnailUrl: thumbnail
      };
    }
  }

  if (/\.(mp4|webm|ogg)(?:$|\/)/i.test(url.pathname)) {
    return { kind: "file", fileUrl: videoUrl, thumbnailUrl: thumbnail };
  }

  return { kind: "link", linkUrl: videoUrl, thumbnailUrl: thumbnail };
}
