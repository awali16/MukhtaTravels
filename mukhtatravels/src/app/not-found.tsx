"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import Header from "@/Components/Header";
// import Footer from "@/Components/Footer";

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <section className="bg-blue-900 h-[100dvh] overflow-x-none flex flex-col items-center py-16">
        <Image
          src={"/Found_nothing.png"}
          height={250}
          width={250}
          alt="not-found"
          className="mb-6 rounded-md"
        />
        <div className="flex items-center justify-center gap-6">
          {/* Home Button */}
          <Link
            href="/"
            className="flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-800 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>

          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-800 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
