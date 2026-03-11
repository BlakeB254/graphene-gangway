"use client";

/* ── Analytics event helper ──────────────────── */

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params?: EventParams) {
  // Google Analytics 4
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as any).gtag("event", name, params);
  }

  // Meta Pixel
  if (typeof window !== "undefined" && "fbq" in window) {
    (window as any).fbq("trackCustom", name, params);
  }
}

/* ── Predefined conversion events ────────────── */

export function trackPageView(url: string) {
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as any).gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
}

export function trackLead(params: { source: string; service?: string }) {
  trackEvent("generate_lead", params);
  if (typeof window !== "undefined" && "fbq" in window) {
    (window as any).fbq("track", "Lead", params);
  }
}

export function trackBeginCheckout(params: { service: string; tier: string; value?: number }) {
  trackEvent("begin_checkout", params);
  if (typeof window !== "undefined" && "fbq" in window) {
    (window as any).fbq("track", "InitiateCheckout", params);
  }
}

export function trackPurchase(params: { service: string; tier: string; value: number }) {
  trackEvent("purchase", { ...params, currency: "USD" });
  if (typeof window !== "undefined" && "fbq" in window) {
    (window as any).fbq("track", "Purchase", { ...params, currency: "USD" });
  }
}

export function trackAssessmentComplete(params: { recommendation: string }) {
  trackEvent("assessment_complete", params);
}

export function trackContactFormSubmit() {
  trackEvent("contact_form_submit");
  if (typeof window !== "undefined" && "fbq" in window) {
    (window as any).fbq("track", "Contact");
  }
}
