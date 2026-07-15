import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
}

const BlurFadeText = ({
  text,
  className,
  duration = 0.4,
  delay = 0,
  yOffset = 8,
}: BlurFadeTextProps) => {
  return (
    <div className="flex">
      <span
        className={cn("blur-fade inline-block", className)}
        style={
          {
            "--blur-fade-delay": `${delay}s`,
            "--blur-fade-duration": `${duration}s`,
            "--blur-fade-y": `${-yOffset}px`,
            "--blur-fade-blur": "8px",
          } as CSSProperties
        }
      >
        {text}
      </span>
    </div>
  );
};

export default BlurFadeText;
