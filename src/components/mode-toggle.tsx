"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      aria-label="Toggle theme"
      className={cn(className)}
      onClick={() => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        trackEvent("theme_toggle", { theme: nextTheme });
        setTheme(nextTheme);
      }}
    >
      <SunIcon className="h-full w-full" />
      <MoonIcon className="hidden h-full w-full" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
