import React from "react";
import { cn } from "../../utils/cn";

export function GridBackground({
  className = "",
  children,
  mask = true,
}) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center bg-white dark:bg-black",
        className
      )}
    >
      {/* Dot background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial gradient mask */}
      {mask && (
        <div
          className="
            pointer-events-none absolute inset-0
            flex items-center justify-center
            bg-white dark:bg-black
            [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
          "
        />
      )}

      {/* Content */}
      {children && (
        <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          {children}
        </div>
      )}
    </div>
  );
}
