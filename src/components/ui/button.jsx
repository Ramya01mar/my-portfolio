import React from "react";
import { cn } from "../../utils";

export function Button({
  children,
  className = "",
  asChild = false,
  onClick,
  ...props
}) {
  const Comp = asChild ? "a" : "button";
  return (
    <Comp
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2",
        "bg-orange-600 text-white hover:bg-orange-700 shadow-sm hover:shadow-md active:scale-95",
        "px-5 py-2.5 text-sm sm:text-base",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
