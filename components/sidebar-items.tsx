"use client";

import Link from "next/link";
import { Shapes } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import routes from "@/lib/constant";
import Image from 'next/image'
import logo from '@/public/assets/logo.png'

const SideBarItems = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navigateTo = (href: string) => () => {
    router.push(href);
  };
  return (
    <div>
      <Link href="/dashboard" className="mb-14 flex flex-col justify-center items-center gap-3">
        <Image
          src={logo}
          alt="Satiscript"
          width={100}
          height={100}
        />
        <h1 className="text-lg lg:text-2xl font-bold">Satiscript</h1>
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
