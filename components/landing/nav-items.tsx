import { headerLinks } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";
import { getSession } from "@/lib/auth";
import { Button } from "../ui/button";

const NavItems = async () => {
  const session = await getSession();

  return (
    <ul className="flex flex-col w-full items-center justify-between gap-12 md:flex-row">
      <li className="flex flex-col justify-center items-center whitespace-nowrap transition-all ease-in-out duration-300 border-b-2 border-transparent hover:border-foreground">
        <Link
          className="flex flex-col justify-center items-center font-semibold"
          href={headerLinks[0].route}
        >
          {headerLinks[0].label}
        </Link>
      </li>
      <li className="flex flex-col justify-center items-center whitespace-nowrap transition-all ease-in-out duration-300 border-b-2 border-transparent hover:border-foreground">
        <Link
          className="flex flex-col justify-center items-center font-semibold"
          href={headerLinks[1].route}
        >
          {headerLinks[1].label}
        </Link>
      </li>
      <li className="flex flex-col justify-center items-center whitespace-nowrap md:mx-[5%] border-none transition-all ease-in-out duration-300 border-b-2 border-transparent hover:border-foreground">
        <Link
          className="flex flex-col justify-center items-center font-extrabold text-2xl"
          href={headerLinks[2].route}
        >
          <Image src={logo} alt="Satiscript" width={70} height={70} />
          {headerLinks[2].label}
        </Link>
      </li>
      <li className="flex flex-col justify-center items-center whitespace-nowrap transition-all ease-in-out duration-300 border-b-2 border-transparent hover:border-foreground">
        <Link
          className="flex flex-col justify-center items-center font-semibold"
          href={headerLinks[3].route}
        >
          {headerLinks[3].label}
        </Link>
      </li>
      <li className="flex flex-col justify-center items-center whitespace-nowrap transition-all ease-in-out duration-300">
        <Link
          className="flex flex-col justify-center items-center font-semibold"
          href={session ? "/dashboard" : "/sign-in"}
        >
          <Button className="flex justify-center items-center w-32 font-bold dark:text-foreground">
            {session ? "Dashboard" : "Sign In"}
          </Button>
        </Link>
      </li>
    </ul>
  );
};

export default NavItems;
