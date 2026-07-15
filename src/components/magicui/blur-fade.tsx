import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
}

const BlurFade = ({
  children,
  className,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
}: BlurFadeProps) => {
  return (
    <div
      className={cn("blur-fade", className)}
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
