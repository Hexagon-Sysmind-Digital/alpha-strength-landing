import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        // base style (Alpha Strength look)
        "rounded-2xl border border-white/10 bg-white/5",
        // interaction
        "transition-all duration-300",
        "hover:-translate-y-2 hover:bg-white/10",
        "hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]",
        className
      )}
      {...props}
    />
  );
}