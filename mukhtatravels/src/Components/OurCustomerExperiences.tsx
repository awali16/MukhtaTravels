'use client';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./OurCustomerExperiences.css";

export default function OurCustomerExperiences() {
  const settings = {
    // dots: true,
    // dotsClass: "slick-dots custom-dots", // 👈 to apply our custom styling
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280, // large screen
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // medium screen
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // small screen
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // extra small
        settings: {
          slidesToShow: 1,
        },
      },
    ],
     // 👈 to apply our custom styling
  };
  const otherCarousel = {
    infinite: true,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };





  return (
    <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Our Customer Experiences
      </h2>

      <Slider {...settings}>
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="px-3">
            <div className="rounded-md overflow-hidden shadow-md bg-white">
              <div className="relative w-full h-84 flex flex-col items-center justify-center">
                <Image
                  src={`/CustomerReviews/${index + 1}.jpeg`}
                  fill
                  alt={`Customer Review ${index + 1}`}
                  className="object-cover"
                />
                <div className='text-lg font-bold'>{index+1}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
