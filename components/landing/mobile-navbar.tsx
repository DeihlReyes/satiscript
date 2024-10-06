"use client";

import { Menu, Shapes } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import routes, { headerLinks } from "@/lib/constant";
import Image from "next/image";
import logo from "@/public/assets/Satiscript.svg";
import Link from "next/link";

export const MobileNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navigateTo = (href: string) => () => {
    router.push(href);
  };

  return (
    <Sheet>
      <SheetTrigger className="flex transition hover:opacity-75 lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent
        onCloseAutoFocus={(event) => event.preventDefault()}
        side="right"
        className="flex h-full flex-col space-y-8 p-0"
      >
        <SheetHeader className="px-4 py-8 mt-1">
          <div>
            <div className="flex items-center pt-2">
              <div className="relative mr-4 h-8 w-8">
                <Image
                  src={logo}
                  alt="Satiscript"
                  width={20}
                  height={20}
                  className="mr-3"
                />
              </div>
              <h1 className="text-2xl font-bold">Satiscript</h1>
            </div>
          </div>
        </SheetHeader>
        <SheetFooter>
          <div className="flex w-full flex-col px-4">
            {headerLinks.map((link, index) => {
              if (index === 2) return null;
              return (
                <ul key={index}>
                  <li
                    key={link.route}
                    className="flex-center p-medium-16 whitespace-nowrap transition-all ease-in-out duration-300 border-b-2 border-transparent hover:border-foreground py-3"
                  >
                    <Link href={link.route}>{link.label}</Link>
                  </li>
                </ul>
              );
            })}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
