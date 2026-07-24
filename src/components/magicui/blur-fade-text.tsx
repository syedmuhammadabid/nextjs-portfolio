import { cn } from "@/lib/utils";
import type { CSSProperties, ElementType } from "react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  // Lets callers control the rendered element (e.g. render the hero greeting as
  // an <h1>) without changing the visual styling. Defaults to a <span>.
  as?: ElementType;
  // Use the opacity-preserving entrance for above-the-fold LCP elements so the
  // element stays a valid Largest Contentful Paint candidate.
  eager?: boolean;
}

const BlurFadeText = ({
  text,
  className,
  duration = 0.4,
  delay = 0,
  yOffset = 8,
  as: Component = "span",
  eager = false,
}: BlurFadeTextProps) => {
  return (
    <div className="flex">
      <Component
        className={cn(
          eager ? "blur-fade-eager" : "blur-fade",
          "inline-block",
          className
        )}
        style={
          {
            "--blur-fade-delay": `${delay}s`,
            "--blur-fade-duration": `${duration}s`,
            "--blur-fade-y": `${-yOffset}px`,
          } as CSSProperties
        }
      >
        {text}
      </Component>
    </div>
  );
};

export default BlurFadeText;
