"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <section className="bg-blue-900 h-[calc(100vh-7rem)] py-40 overflow-x-none">
      <div className="mx-auto">
        <div className="flex">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                404
              </h2>
              <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                Oops! That page can’t be found
              </h4>
              <div className="flex justify-center gap-4">
                <Link
                  href="/"
                  className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-blue-800"
                >
                  Go To Home
                </Link>

                <button
                  onClick={() => router.back()}
                  className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-blue-800"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
