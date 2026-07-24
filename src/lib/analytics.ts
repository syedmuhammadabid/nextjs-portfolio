/**
 * Google Analytics 4 helpers.
 *
 * The measurement ID is read from the public env var so it is available in the
 * browser bundle. Leaving it empty disables GA entirely (no script is injected,
 * no events are sent) - handy for local development or preview deploys.
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

/** GA is only "enabled" when a measurement ID is configured. */
export const isAnalyticsEnabled = GA_MEASUREMENT_ID.length > 0;

type GtagParams = Record<string, unknown>;

/**
 * Send a custom event to GA4.
 *
 * Thin wrapper around the global `gtag` that the @next/third-parties
 * <GoogleAnalytics /> component injects. It is a no-op on the server, when GA is
 * disabled, or before the gtag script has loaded, so it is always safe to call.
 */
export function trackEvent(name: string, params: GtagParams = {}): void {
  if (!isAnalyticsEnabled) return;
  if (typeof window === "undefined") return;

  const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;

  gtag("event", name, params);
}
