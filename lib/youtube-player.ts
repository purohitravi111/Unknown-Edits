export interface YouTubeVideoData {
  title: string;
  author: string;
}

export interface YouTubePlayer {
  getVideoData(): YouTubeVideoData;
  getDuration(): number;
  destroy(): void;
}

interface YouTubePlayerEvent {
  target: YouTubePlayer;
}

interface YouTubePlayerOptions {
  videoId: string;
  playerVars: Record<string, string | number>;
  events: {
    onReady: (event: YouTubePlayerEvent) => void;
    onError: () => void;
  };
}

interface YouTubeApi {
  Player: new (element: HTMLElement, options: YouTubePlayerOptions) => YouTubePlayer;
}

declare global {
  interface Window {
    YT?: YouTubeApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<YouTubeApi> | null = null;

export function getYouTubeVideoId(value: string): string | null {
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

export function loadYouTubeIframeApi(): Promise<YouTubeApi> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;

  apiPromise = new Promise<YouTubeApi>((resolve, reject) => {
    const timeout = window.setTimeout(() => reject(new Error("YouTube player API timed out")), 15000);
    const previousCallback = window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      window.clearTimeout(timeout);
      if (window.YT?.Player) resolve(window.YT);
      else reject(new Error("YouTube player API did not initialize"));
    };

    const scriptExists = document.querySelector<HTMLScriptElement>('script[src="https://www.youtube.com/iframe_api"]');
    if (!scriptExists) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.onerror = () => {
        window.clearTimeout(timeout);
        reject(new Error("Could not load YouTube player API"));
      };
      document.head.appendChild(script);
    }
  }).catch((error: unknown) => {
    apiPromise = null;
    throw error;
  });

  return apiPromise;
}
