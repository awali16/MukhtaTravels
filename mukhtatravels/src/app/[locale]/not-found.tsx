"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../globals.css";
// import Header from "@/Components/Header";
// import {useTranslations} from 'next-intl';
export default function NotFound() {
  const router = useRouter();
  // const t = useTranslations();
  const t = (value: string) => {
    return value;
  };
  return (
    <>
      {/* <Header/> */}
      <section className="bg-blue-900 h-[100dvh] py-40 overflow-x-none">
        <div className="mx-auto">
          <div className="flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                  {t("404")}
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                  {t("Oops! That page can’t be found")}
                </h4>
                <div className="flex justify-center gap-4">
                  <Link
                    href="/"
                    className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-blue-800"
                  >
                    {t("Go To Home")}
                  </Link>

                  <button
                    onClick={() => router.back()}
                    className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-blue-800"
                  >
                    {t("Go Back")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
