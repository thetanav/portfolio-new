"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

interface RainbowAvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "size-16",
  md: "size-20",
  lg: "size-28",
  xl: "size-32"
};

export const RainbowAvatar = React.forwardRef<
  React.ElementRef<typeof Avatar>,
  RainbowAvatarProps
>(({ className, src, alt, fallback, size = "lg", ...props }, ref) => {
  return (
    <div className={cn("relative", className)}>
      <Avatar
        ref={ref}
        className={cn(
          sizeClasses[size],
          "border relative z-10",
          // Rainbow border effect
          "bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
          "bg-[length:200%]",
          "[background-clip:padding-box,border-box,border-box]",
          "[background-origin:border-box]",
          "[border:calc(0.125rem)_solid_transparent]",
          "animate-rainbow",
          // Dark mode support
          "dark:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(#0a0a0a_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]"
        )}
        {...props}
      >
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>

      {/* Rainbow shadow effect */}
      <div
        className={cn(
          "absolute -bottom-2 left-1/2 z-0",
          "h-1/3 w-3/5 -translate-x-1/2",
          "animate-rainbow",
          "bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
          "bg-[length:200%]",
          "[filter:blur(0.75rem)]",
          "opacity-60"
        )}
      />
    </div>
  );
});

RainbowAvatar.displayName = "RainbowAvatar";
