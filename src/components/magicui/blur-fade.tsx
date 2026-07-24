import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  // Use the opacity-preserving entrance for above-the-fold LCP elements so the
  // element stays a valid Largest Contentful Paint candidate.
  eager?: boolean;
}

const BlurFade = ({
  children,
  className,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  eager = false,
}: BlurFadeProps) => {
  return (
    <div
      className={cn(eager ? "blur-fade-eager" : "blur-fade", className)}
      style={
        {
          "--blur-fade-delay": `${0.04 + delay}s`,
          "--blur-fade-duration": `${duration}s`,
          "--blur-fade-y": `${-yOffset}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default BlurFade;
