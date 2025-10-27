import React from "react";
import { cn } from "../../utils";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-orange-100 bg-white shadow-md hover:shadow-lg transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={cn("p-6 sm:p-8", className)} {...props}>
      {children}
    </div>
  );
}
