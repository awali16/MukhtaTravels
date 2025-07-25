"use client";
import { OurServices } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl"; 

export default function ServicePage() {
  const t = useTranslations(); 

  return (
    <main className="px-6 py-16">
      {/* Header */}
      <div className="flex flex-col items-center justify-center w-full gap-3">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-green-700 mb-3">
            {t("Our Services")}
          </h1>

          <p className="text-[#00a73e]">
            {t("Mukhta Solutions — Your Gateway to Kashmir")}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="flex flex-col items-center justify-center mt-4">
        <h1 className="text-center max-w-4xl">
          {t(
            "At Mukhta Solutions, we offer a wide range of travel services designed to make your trip to Kashmir smooth, enjoyable, and unforgettable"
          )}{" "}
          {t("Our services include")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 gap-6 m-6 px-2 lg:px-32">
          {OurServices.map((service, index) => (
            <div
              className="p-4 py-8 flex flex-col text-center items-center border-2 border-[green] rounded-lg w-fit"
              key={index}
            >
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-200 text-indigo-500 mb-5 flex-shrink-0">
                <Image
                  src={service.img}
                  alt={`${service.title}-icons`}
                  height={40}
                  width={40}
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-xl font-bold mb-3">
                  {t(service.title)}
                </h2>
                <p className="leading-relaxed text-base text-center">
                  {t(service.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
