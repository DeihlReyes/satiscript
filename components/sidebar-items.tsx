"use client";

import Link from "next/link";
import { Shapes } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import routes from "@/lib/constant";

const SideBarItems = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navigateTo = (href: string) => () => {
    router.push(href);
  };
  return (
    <div>
      <Link href="/dashboard" className="mb-14 flex items-center pl-3">
        <div className="relative mr-4 h-8 w-8">
          <Shapes className="absolute h-full w-full text-primary" />
        </div>
        <h1 className="text-2xl font-bold">CSATify</h1>
      </Link>
      <ul className="space-y-1">
        {routes.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              onClick={navigateTo(route.href)}
              className={cn(
                "group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition-colors duration-200 ease-in-out hover:bg-[#0d0d0d]/10 dark:hover:bg-[#fefefe]/10",
                pathname === route.href
                  ? "bg-[#5b5b5b]/10 dark:bg-[#fefefe]/10"
                  : "bg-[transparent]"
              )}>
              <p className="flex flex-1 items-center">
                <route.icon className="mr-3 h-5 w-5" />
                {route.label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarItems;
