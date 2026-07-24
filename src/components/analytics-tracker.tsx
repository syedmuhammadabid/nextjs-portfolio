"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Global interaction tracker.
 *
 * Attaches a single delegated listener (capture phase) to the document so every
 * click/auxclick anywhere on the page is captured - including elements added
 * later - without wiring handlers into individual components. For each event it
 * resolves the nearest meaningful target (link, button, or labelled control),
 * derives a human-readable label plus the enclosing <section> id, and forwards a
 * GA4 event.
 *
 * Note: GA4 "Enhanced measurement" already tracks page_view, scroll, outbound
 * clicks, site search and file downloads automatically. This adds granular,
 * per-element click tracking on top of that.
 */
export default function AnalyticsTracker() {
  useEffect(() => {
    const getLabel = (el: HTMLElement): string => {
      const aria = el.getAttribute("aria-label");
      if (aria) return aria.trim();
      const title = el.getAttribute("title");
      if (title) return title.trim();
      const text = el.textContent?.replace(/\s+/g, " ").trim();
      if (text) return text.slice(0, 120);
      const alt = el.querySelector("img")?.getAttribute("alt");
      if (alt) return alt.trim();
      return "(no label)";
    };

    const handleClick = (event: Event) => {
      const path = event.composedPath?.() ?? [];
      // Find the closest interactive ancestor along the event path.
      const target = (path.find(
        (node) =>
          node instanceof HTMLElement &&
          node.closest("a, button, [role='button'], [role='link'], input, select, textarea, summary, label")
      ) as HTMLElement | undefined) ?? (event.target as HTMLElement | null)?.closest?.(
        "a, button, [role='button'], [role='link'], input, select, textarea, summary, label"
      );

      if (!target) return;

      const tag = target.tagName.toLowerCase();
      const sectionEl = target.closest<HTMLElement>("[data-section]");
      const section =
        target.closest("section")?.id ||
        sectionEl?.dataset.section ||
        "unknown";

      const params: Record<string, unknown> = {
        element_tag: tag,
        element_label: getLabel(target),
        section,
        event_type: event.type, // "click" or "auxclick" (middle/right)
      };

      if (target.id) params.element_id = target.id;

      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (anchor?.href) {
        params.link_url = anchor.href;
        params.link_target = anchor.target || "_self";
        try {
          params.outbound = new URL(anchor.href).hostname !== window.location.hostname;
        } catch {
          params.outbound = false;
        }
      }

      trackEvent("ui_click", params);
    };

    document.addEventListener("click", handleClick, { capture: true });
    // auxclick captures middle-click / right-click (opening links in new tabs).
    document.addEventListener("auxclick", handleClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      document.removeEventListener("auxclick", handleClick, { capture: true });
    };
  }, []);

  return null;
}
