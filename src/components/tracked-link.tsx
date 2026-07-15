"use client";

import Link from "next/link";
import { forwardRef, type ComponentProps, type MouseEvent } from "react";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  /** GA4 event name to send on click, e.g. "project_click". */
  event: string;
  /** Extra parameters to attach to the GA4 event. */
  eventParams?: Record<string, unknown>;
};

/**
 * `next/link` that fires a named GA4 event when clicked. Use for any internal or
 * external navigation you want to attribute (project cards, education, blog
 * posts, pagination, etc.). Falls back gracefully when analytics is disabled.
 */
export const TrackedLink = forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  function TrackedLink({ event, eventParams, onClick, ...props }, ref) {
    return (
      <Link
        ref={ref}
        {...props}
        onClick={(e: MouseEvent<HTMLAnchorElement>) => {
          trackEvent(event, eventParams);
          onClick?.(e);
        }}
      />
    );
  }
);

type TrackedAnchorProps = ComponentProps<"a"> & {
  event: string;
  eventParams?: Record<string, unknown>;
};

/**
 * Plain `<a>` that fires a named GA4 event on click, with ref forwarding so it
 * works as a Radix `asChild` trigger (e.g. inside a Tooltip in the navbar).
 */
export const TrackedAnchor = forwardRef<HTMLAnchorElement, TrackedAnchorProps>(
  function TrackedAnchor({ event, eventParams, onClick, ...props }, ref) {
    return (
      <a
        ref={ref}
        {...props}
        onClick={(e: MouseEvent<HTMLAnchorElement>) => {
          trackEvent(event, eventParams);
          onClick?.(e);
        }}
      />
    );
  }
);
