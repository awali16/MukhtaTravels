"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const locales = [
  { code: "en", label: "English", flag: "us" },
  { code: "ur", label: "اردو", flag: "pk" },
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
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
    <li ref={dropdownRef} className="relative border-2 border-[red] flex flex-col items-end">
      <button
        onClick={() => setLangDropdown((prev) => !prev)}
        className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100"
      >
        <span className={`fi fi-${currentLang?.flag}`} />
        <span>{currentLang?.label}</span>
      </button>

      {langDropdown && (
        <ul className="absolute right-0 z-50 mt-2 w-40 bg-blue-600 border border-[red] rounded shadow-lg">
          {locales.map(({ code, label, flag }) => (
            <li key={code}>
              <button
                onClick={() => handleLanguageChange(code)}
                className="flex w-full items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <span className={`fi fi-${flag}`} />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
