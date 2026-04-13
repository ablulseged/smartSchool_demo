import React from "react";

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; size?: string; asChild?: boolean }>(
  ({ className = "", children, asChild, ...props }, ref) => (
    <button ref={ref} className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors focus:outline-none disabled:opacity-50 ${className}`} {...props}>
      {children}
    </button>
  )
);
Button.displayName = "Button";
