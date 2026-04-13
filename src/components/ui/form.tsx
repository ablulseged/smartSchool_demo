// Minimal form stubs — no radix-ui / react-hook-form
import React from "react";

export const Form = ({ children, ...props }: React.FormHTMLAttributes<HTMLFormElement>) => (
  <form {...props}>{children}</form>
);

export const FormField = ({ render }: { render: (props: any) => React.ReactNode; name?: string; control?: any }) =>
  render({ field: {} }) as React.ReactElement;

export const FormItem = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`space-y-1 ${className}`}>{children}</div>
);

export const FormLabel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <label className={`text-sm font-medium ${className}`}>{children}</label>
);

export const FormControl = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export const FormMessage = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) =>
  children ? <p className={`text-sm text-red-500 ${className}`}>{children}</p> : null;

export const FormDescription = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) =>
  children ? <p className={`text-sm text-gray-500 ${className}`}>{children}</p> : null;
