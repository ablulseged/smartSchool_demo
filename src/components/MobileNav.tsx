"use client";
import { UserContext } from "@/hooks/useUser";
import { AdminLinks, EtudiantLinks, ProfesseurLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";

const MobileNav = ({ user: layoutUser }: { user?: any }) => {
  const user = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const links: any[] =
    user.userRole === "admin"
      ? AdminLinks
      : user.userRole === "professeur"
        ? ProfesseurLinks
        : user.userRole === "etudiant"
          ? EtudiantLinks
          : [];
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      {/* Hamburger button */}
      <button onClick={() => setIsOpen(true)} className="cursor-pointer">
        <Image
          src="/icons/hamburger.svg"
          alt="menu"
          width={30}
          height={30}
        />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <Link href="/" className="flex items-center gap-2 px-4 pt-6">
          <Image src="/logo.ico" alt="logo" width={34} height={34} />
          <h1 className="text-xl font-bold text-black">Technolab ISTA</h1>
        </Link>

        {/* Navigation links */}
        <nav className="flex flex-col gap-4 pt-10 px-4">
          {links.map((item) => {
            const isActive =
              pathname === item.path ||
              (pathname && pathname.startsWith(`${user.userRole}/${item.path}/`));
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "mobilenav-sheet_close flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                  {
                    "bg-bank-gradient text-white": isActive,
                    "text-gray-700 hover:bg-gray-100": !isActive,
                  },
                  item.title === "Profile" ? "mt-8" : ""
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={20}
                  height={20}
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
                <p className={cn("text-base font-semibold", { "text-white": isActive })}>
                  {item.title}
                </p>
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default MobileNav;
