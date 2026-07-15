"use client";

import { cn } from "@/lib/utils";
import { type CSSProperties, type ReactNode } from "react";

interface DockProps {
  className?: string;
  children: ReactNode;
}

interface DockIconProps {
  className?: string;
  children?: ReactNode;
}

const BASE_SIZE = 40;
const BASE_ICON_SIZE = 20;

const Dock = ({ className, children }: DockProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-max h-full flex items-end justify-center overflow-visible rounded-full border",
        className
      )}
    >
      {children}
    </div>
  );
};

const DockIcon = ({ className, children }: DockIconProps) => {
  return (
    <div
      style={{ width: BASE_SIZE, height: BASE_SIZE } as CSSProperties}
      className={cn(
        "relative flex aspect-square items-center justify-center rounded-full shrink-0 transition-transform duration-200 ease-out hover:scale-125",
        className
      )}
    >
      <div
        style={{ width: BASE_ICON_SIZE, height: BASE_ICON_SIZE } as CSSProperties}
        className="flex items-center justify-center"
      >
        {children}
      </div>
    </div>
  );
};

export { Dock, DockIcon };
export type { DockProps, DockIconProps };
