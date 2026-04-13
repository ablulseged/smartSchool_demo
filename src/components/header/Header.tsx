"use client";
import { useState } from "react";

// Inline SVG icons — no external icon libraries needed
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

export default function Header() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <header className="my-2 rounded-sm flex justify-between items-center text-center fixed z-10">
        <div className="relative h-8 search partie1">
          <div className="relative">
            <input
              type="text"
              placeholder={!isFocused ? "Search..." : ""}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="InputSEARCH pr-10 p-2 rounded-lg outline-none"
            />
            {!isFocused ? (
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <SearchIcon />
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 partie2">
          <div>
            <BellIcon />
          </div>
          <div className="flex flex-col mr-1">
            <div className="text-base">Mamadou Ba</div>
            <div className="text-xs">Student</div>
          </div>
          <div className="bg-black w-10 h-10 rounded-2xl"></div>
        </div>
      </header>
    </>
  );
}
