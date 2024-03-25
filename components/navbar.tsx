"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { MobileSidebar } from "./mobile-sidebar";

const Navbar = () => {
  const pathname = usePathname();
  const formattedPathname =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="flex flex-row w-full justify-between py-8 px-8 lg:px-12 border-b shadow-sm shadow-slate-200">
      <h1 className="text-xl font-bold tracking-wider">{formattedPathname}</h1>
      <p className="hidden lg:block text-md font-semibold">{currentDate}</p>
      <MobileSidebar />
    </header>
  );
};

export default Navbar;
