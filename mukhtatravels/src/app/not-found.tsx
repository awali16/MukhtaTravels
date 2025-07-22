"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import Header from "@/Components/Header";
// import Footer from "@/Components/Footer";

export default function NotFound() {
  const router = useRouter();
  const t = (key: string) => key; // Fallback to key if messages are not available

  return (
    <>
      <section className="bg-blue-900 h-[100dvh] py-72 overflow-x-none">
        <div className="mx-auto max-w-[400px] text-center">
          <h2 className="text-[50px] sm:text-[80px] md:text-[100px] font-bold text-white mb-2">
            {t("404")}
          </h2>
          <h4 className="text-[22px] font-semibold text-white mb-3">
            {t("Oops! That page can’t be found")}
          </h4>
          <div className="flex justify-center gap-4">
            <Link
              href="/"
              className="border px-8 py-3 text-white hover:bg-white hover:text-blue-800"
            >
              {t("Go To Home")}
            </Link>
            <button
              onClick={() => router.back()}
              className="border px-8 py-3 text-white hover:bg-white hover:text-blue-800"
            >
              {t("Go Back")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
