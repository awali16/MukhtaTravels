"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavigationMenu } from "@/lib/constants"; 
import { useTranslations } from "next-intl";// Adjust the import path as necessary

const Footer: React.FC = () => {
  const t= useTranslations(); // Use the correct namespace for translations
  const pathname = usePathname();
  return (
    <footer className="bg-gray-900 text-white pt-10 ">
      <div className=" px-8 sm:px-8 lg:px-44 grid grid-cols-1 md:grid-cols-3 pb-8 lg:pb-2 gap-8">
        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">{t("Navigation")}</h3>
          <ul className="space-y-2">
            {/* Map through NavigationMenu items */}
            {NavigationMenu.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  } transition relative group`}
                >
                  {t(item.name)}
                  <span
                    className={`absolute  -bottom-0.5  h-[2px] bg-white transition-all duration-300 ease-in-out  mt-2 ${
                      pathname === item.href
                        ? "w-full left-0 text-white"
                        : "left-1/2 w-0 group-hover:w-full group-hover:left-0"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">{t("Follow Us")}</h3>
          <div className="flex space-x-6 text-xl">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Company Logos */}
        <div className="w-64  text-center  flex flex-col items-start justify-start ">
          <div className="relative flex title-font font-medium items-center  justify-start  text-white-900 h-16 w-16 rounded-full overflow-hidden mb-6">
            <Image
              src={"/MukhtaSolutionsLogo.jpeg"}
              fill
              alt={t("logo")}
              className="object-cover"
            />
          </div>
          <p className="text-xl">{t("Mukhta Solutions")}</p>
          <p className="mt-2 text-sm text-gray-500 ">
            {t("Your Gateway to Kashmir")}
          </p>
        </div>

        {/* Base footer */}
        <div className=" flex flex-col md:flex-row items-center justify-start  col-span-1 md:col-span-3 mt-10 text-center text-gray-500 text-sm py-4 gap-4 lg:gap-0">
          <div>
            <p>{t("© 2025 Mukhta Solutions, All rights reserved")}</p>
          </div>
          <div>
            <p>
              &nbsp;{t("Designed & Developed by")}{" "}
              <Link
                href="https://asifwali.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                Mohammad Asif
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
