"use client";

import { usePathname } from "next/navigation";
import React from "react";

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
    <header className="flex flex-row w-full justify-between py-8 px-12 border-b shadow-sm shadow-slate-200">
      <h1 className="text-xl font-bold tracking-wider">{formattedPathname}</h1>
      <p className="text-md font-semibold">{currentDate}</p>
    </header>
  );
};

export default Navbar;