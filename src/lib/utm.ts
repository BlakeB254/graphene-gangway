"use client";

const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const UTM_STORAGE_KEY = "gg_utm";
const UTM_EXPIRY_DAYS = 30;

export type UTMData = Partial<Record<(typeof UTM_PARAMS)[number], string>> & {
  landing_page?: string;
  referrer?: string;
  captured_at?: string;
};

export function captureUTMParams(): UTMData | null {
  if (typeof window === "undefined") return null;

  const url = new URL(window.location.href);
  const hasUTM = UTM_PARAMS.some((p) => url.searchParams.has(p));

  if (!hasUTM) return getStoredUTM();

  const data: UTMData = {
    landing_page: window.location.pathname,
    referrer: document.referrer || undefined,
    captured_at: new Date().toISOString(),
  };

  for (const param of UTM_PARAMS) {
    const value = url.searchParams.get(param);
    if (value) data[param] = value;
  }

  try {
    const expiry = Date.now() + UTM_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify({ data, expiry }));
  } catch {
    // localStorage not available
  }

  return data;
}

export function getStoredUTM(): UTMData | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) return null;

    const { data, expiry } = JSON.parse(raw);
    if (Date.now() > expiry) {
      localStorage.removeItem(UTM_STORAGE_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

export function clearUTMData() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(UTM_STORAGE_KEY);
  } catch {
    // noop
  }
}
