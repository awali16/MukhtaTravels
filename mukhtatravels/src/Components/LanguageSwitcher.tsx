"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { RxGlobe } from "react-icons/rx";

const locales = [
  { code: "en", label: "English", flag: "us", visibleName: "en" },
  { code: "ur", label: "اردو", flag: "pk", visibleName: "ار" },
];

export default function LanguageSwitcher() {
  const [langDropdown, setLangDropdown] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const currentLocale = useLocale();
  const pathWithoutLocale = pathname.replace(/^\/(en|ur)/, "") || "/";

  const handleLanguageChange = (code: string) => {
    setLangDropdown(false);
    window.location.href = `/${code}${pathWithoutLocale}`;
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setLangDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentLang = locales.find((l) => l.code === currentLocale);

  return (
    <li ref={dropdownRef} className="relative flex flex-col items-end mr-2">
      <div
        className="flex items-center justify-center gap-2 px-2 py-2  hover:bg-[#00a73e] bg-blue-500 rounded cursor-pointer 
        shadow-[0_0_5px_rgba(0,0,0,0.4)]"
        onClick={() => setLangDropdown((prev) => !prev)}
      >
        <div className="flex items-center justify-center gap-1">
          <RxGlobe
            className="h-5 w-5"
            style={{ transform: "rotateY(180deg)" }}
          />

          <span className="uppercase">{currentLang?.visibleName}</span>
        </div>

        {/* <IoIosArrowDropdown
          className={`p-0 ] h-6 w-6 transition-transform duration-200 ${
            langDropdown ? "rotate-180" : ""
          }`} */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`font-bold h-4 w-4 transition-transform duration-200 ${
            langDropdown ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {langDropdown && (
        <ul className="absolute -right-.5 top-8.5 z-50 mt-2 w-fit bg-blue-500 rounded shadow-lg border border-[#00a73e]">
          {locales.map(({ code, label }) => (
            <li key={code}>
              <button
                onClick={() => handleLanguageChange(code)}
                className="flex w-full items-center  gap-2 px-4 py-2 hover:bg-[#00a73e]"
              >
                {/* <span className={`fi fi-${flag}`} /> */}
                
                <span>{label}</span>
                {/* <span className="uppercase text-xs">{`(${flag})`}</span> */}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
