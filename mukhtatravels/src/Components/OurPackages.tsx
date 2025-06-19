"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./OurCustomerExperiences.css";

const OurPackages: React.FC = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Our Packages
      </h2>

      <Slider {...settings}>
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="px-3">
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              {/* Big image */}
              <div className="relative w-full h-84">
                <Image
                  src={`/OurPackages/${index + 1}.jpeg`}
                  fill
                  alt={`Package ${index + 1}`}
                  className="object-cover"
                />
              </div>

              {/* Text content */}
              {/* <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Package {index + 1}
                </h3>
                <p className="text-gray-600 text-sm">
                  A short description of Package {index + 1}. Explore stunning destinations curated for you.
                </p>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurPackages;

