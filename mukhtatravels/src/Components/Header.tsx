"use client";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { NavigationMenu } from "@/lib/constants";
import LanguageSwitcher from "./LanguageSwitcher";
// Adjust the import path as necessary

const Header: React.FC = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  // const params = useParams();
  // const locale = typeof params?.locale === "string" ? params.locale : "en"; // fallback to 'en'
  const [showMenu, setShowMenu] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const handleNavigation = (href: string) => {
    router.push(href);
    setShowMenu(false);
  };

  useEffect(() => {
    setMounted(true);
  }, [pathname]);

  if (!mounted) return null;

  return (
    <>
      <Marquee pauseOnHover={true} speed={25}  className="bg-[#00a73e] text-white">
        <div className="h-8 w-full bg-[#00a73e] text-white flex items-center justify-center gap-6 text-sm px-4">
          <a
            href="mailto:mukhtasolutions@gmail.com"
            className="hover:underline"
          >
            {"mukhtasolutions@gmail.com"}
          </a>
          <span className="hidden sm:inline-block">|</span>
          <a href="tel:+917006062987" className="hover:underline">
            {"+91 70060 62987"}
          </a>
        </div>
      </Marquee>

      <header className="header  flex items-center lg:justify-center justify-between w-full h-20 lg:pl-10 px-4 bg-blue-500 text-white relative overflow-x-none">
        <div className="logo flex items-center w-full gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-14 w-14 rounded-full overflow-hidden">
              <Image
                src={"/MukhtaSolutionsLogo.jpeg"}
                alt=""
                fill
                className="rounded-full"
              />
            </div>

            <h1 className="logo text-lg">{t("Mukhta Solutions")}</h1>
          </Link>
        </div>
        <nav className="nav hidden lg:flex  items-center justify-center w-full">
          <ul className="flex items-center justify-start gap-8">
            {NavigationMenu.map((item, index) => {
              return (
                <Link href={item.href} key={index} className="relative group">
                  <li>
                    {t(item.name)}
                    <span
                      className={`absolute  -bottom-0.5  h-[2px] bg-white transition-all duration-300 ease-in-out  mt-2 ${
                        pathname === item.href
                          ? "w-full left-0"
                          : "left-1/2 w-0 group-hover:w-full group-hover:left-0"
                      }`}
                    ></span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>

        <div className="w-full hidden lg:inline-block"></div>
        {/* Hamburger Menu Icon for Mobile */}
        <div>
          <LanguageSwitcher />
        </div>
        <div
          className="text-white  lg:hidden  cursor-pointer"
          onClick={handleToggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        {/* Mobile Menu drawer */}
        <div
          className={`flex fixed top-0 right-0 h-screen w-full z-50 lg:hidden 
            transition-transform duration-500
            ${showMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          <div
            className={`h-full w-[35%] ${
              showMenu
                ? "opacity-[.75] bg-black"
                : "bg-transparent bg-opacity-0 backdrop-blur-none"
            }`}
            onClick={handleToggleMenu}
          ></div>

          <div className="relative h-full w-[65%] bg-green-600 opacity-100 ml-auto py-16 px-4 transition-transform duration-300">
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={handleToggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center mb-10">
              <div className="logo flex flex-col items-center justify-center gap-2">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image src={"/MukhtaSolutionsLogo.jpeg"} fill alt="" />
                </div>
                <h1 className="logo text-lg">{t("Mukhta Solutions")}</h1>
              </div>
            </div>
            <ul className="flex flex-col items-center justify-center gap-4 text-white">
              {NavigationMenu.map((item, index) => {
                return (
                  <li
                    className="relative group cursor-pointer"
                    key={index}
                    onClick={() => handleNavigation(item.href)}
                  >
                    {t(item.name)}
                    <span
                      className={`absolute  -bottom-0.5  h-[2px] bg-white transition-all duration-300 ease-in-out  mt-2 ${
                        pathname === item.href
                          ? "w-full left-0"
                          : "left-1/2 w-0 group-hover:w-full group-hover:left-0"
                      }`}
                    ></span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
