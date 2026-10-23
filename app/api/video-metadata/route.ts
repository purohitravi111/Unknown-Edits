import { NextRequest, NextResponse } from "next/server";

export const revalidate = 3600;

function youtubeId(value: string): string | null {
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    let id: string | null = null;

    if (host === "youtu.be") {
      id = url.pathname.split("/").filter(Boolean)[0] ?? null;
    } else if (["youtube.com", "m.youtube.com", "youtube-nocookie.com"].includes(host)) {
      const parts = url.pathname.split("/").filter(Boolean);
      id = url.pathname === "/watch"
        ? url.searchParams.get("v")
        : ["embed", "shorts", "live"].includes(parts[0])
          ? parts[1] ?? null
          : null;
    }

    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

function extractObject(source: string, marker: string): Record<string, unknown> | null {
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) return null;
  const start = source.indexOf("{", markerIndex + marker.length);
  if (start < 0) return null;

  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === '"') inString = true;
    else if (char === "{") depth += 1;
    else if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        try {
          return JSON.parse(source.slice(start, index + 1)) as Record<string, unknown>;
        } catch {
          return null;
        }
      }
    }
  }
  return null;
}

function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;
  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`
    : `${minutes}:${String(remainder).padStart(2, "0")}`;
}

export async function GET(request: NextRequest) {
  const videoUrl = request.nextUrl.searchParams.get("url") ?? "";
  const id = youtubeId(videoUrl);
  if (!id) {
    return NextResponse.json({ error: "Only public YouTube links are supported." }, { status: 400 });
  }

  try {
    const response = await fetch(`https://www.youtube.com/watch?v=${id}&hl=en`, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; PortfolioMetadata/1.0)" },
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error("YouTube metadata is unavailable");

    const html = await response.text();
    const player = extractObject(html, "ytInitialPlayerResponse =")
      ?? extractObject(html, '"ytInitialPlayerResponse":');
    const details = player?.videoDetails as Record<string, unknown> | undefined;

    if (!details || details.isPrivate === true || details.isUnpluggedCorpus === true) {
      throw new Error("Video details are unavailable");
    }

    const title = typeof details.title === "string" ? details.title : "";
    const channel = typeof details.author === "string" ? details.author : "";
    const seconds = Number(details.lengthSeconds);
    return NextResponse.json({
      title,
      channel,
      duration: Number.isFinite(seconds) && seconds >= 0 ? formatDuration(seconds) : "",
    });
  } catch {
    return NextResponse.json({ error: "Could not load video details." }, { status: 502 });
  }
}
