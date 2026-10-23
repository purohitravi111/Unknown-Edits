import { NextRequest, NextResponse } from "next/server";

export const revalidate = 3600;

function isYouTubeUrl(value: string): boolean {
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    if (host === "youtu.be") return /^[\w-]{11}$/.test(url.pathname.split("/").filter(Boolean)[0] ?? "");
    if (!["youtube.com", "m.youtube.com", "youtube-nocookie.com"].includes(host)) return false;
    const parts = url.pathname.split("/").filter(Boolean);
    const id = url.pathname === "/watch"
      ? url.searchParams.get("v")
      : ["embed", "shorts", "live"].includes(parts[0])
        ? parts[1]
        : null;
    return Boolean(id && /^[\w-]{11}$/.test(id));
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  const videoUrl = request.nextUrl.searchParams.get("url") ?? "";
  if (!isYouTubeUrl(videoUrl)) {
    return NextResponse.json({ error: "Only public YouTube links are supported." }, { status: 400 });
  }

  try {
    const endpoint = new URL("https://www.youtube.com/oembed");
    endpoint.searchParams.set("url", videoUrl);
    endpoint.searchParams.set("format", "json");
    const response = await fetch(endpoint, { next: { revalidate: 3600 } });
    if (!response.ok) throw new Error("YouTube metadata is unavailable");
    const data = await response.json() as { title?: string; author_name?: string };
    return NextResponse.json({ title: data.title ?? "", channel: data.author_name ?? "" });
  } catch {
    return NextResponse.json({ error: "Could not load video details." }, { status: 502 });
  }
}
