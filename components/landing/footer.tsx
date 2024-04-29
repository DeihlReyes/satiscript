import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { headerLinks } from "@/lib/constant";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="rounded-lg dark:shadow dark:bg-[#101421] m-8">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image src={logo} width={100} height={100} alt="Satiscript Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Satiscript
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {headerLinks.map((link, index) => {
              if (index === 2) {
                return
              }
              return (
                  <li key={index}>
                    <Link href={link.route} className="hover:underline me-4 md:me-6">
                      {link.label}
                    </Link>
                  </li>
              );
            })}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link href="#" className="hover:underline">
            Satiscript
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
