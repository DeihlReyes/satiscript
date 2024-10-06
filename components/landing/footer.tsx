import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";
import { headerLinks } from "@/lib/constant";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 lg:items-center">
          <div className="flex flex-col items-start max-w-md">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src={logo}
                width={50}
                height={50}
                alt="Satiscript Logo"
                className="mr-3"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Satiscript
              </span>
            </Link>
            <p className="text-sm mt-2">
              Revolutionizing call center performance with AI-powered sentiment
              analysis and real-time script suggestions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {headerLinks.map((link, index) => {
                if (index === 2) return null;
                return (
                  <li key={index}>
                    <Link
                      href={link.route}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <div className="flex flex-col sm:flex-row justify-center items-center w-full">
          <p className="text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Satiscript. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
