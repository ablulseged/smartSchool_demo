// Minimal Sheet replacement — no radix-ui dependency
import React, { createContext, useContext, useState } from "react";

const SheetContext = createContext<{ open: boolean; setOpen: (v: boolean) => void }>({
  open: false, setOpen: () => { }
});

export const Sheet = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return <SheetContext.Provider value={{ open, setOpen }}>{children}</SheetContext.Provider>;
};

export const SheetTrigger = ({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) => {
  const { setOpen } = useContext(SheetContext);
  return <span onClick={() => setOpen(true)} className="cursor-pointer">{children}</span>;
};

export const SheetClose = ({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) => {
  const { setOpen } = useContext(SheetContext);
  return <span onClick={() => setOpen(false)}>{children}</span>;
};

export const SheetPortal = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const SheetOverlay = () => null;

export const SheetContent = ({ children, side = "right", className = "", ...props }: {
  children: React.ReactNode; side?: string; className?: string;[key: string]: any
}) => {
  const { open, setOpen } = useContext(SheetContext);
  return (
    <>
      {open && <div className="fixed inset-0 z-40 bg-black/60" onClick={() => setOpen(false)} />}
      <div className={`fixed inset-y-0 ${side === "left" ? "left-0" : "right-0"} z-50 w-72 bg-white shadow-xl transition-transform duration-300 ${open ? "translate-x-0" : side === "left" ? "-translate-x-full" : "translate-x-full"} ${className}`}>
        <button onClick={() => setOpen(false)} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </>
  );
};

export const SheetHeader = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex flex-col space-y-2 ${className}`}>{children}</div>
);

export const SheetFooter = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}>{children}</div>
);

export const SheetTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>
);

export const SheetDescription = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-sm text-gray-500 ${className}`}>{children}</p>
);
