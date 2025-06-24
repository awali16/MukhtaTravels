// pages/about.js or components/AboutPage.jsx

import React from "react";
import {useTranslations} from 'next-intl';

const AboutPage = () => {
  const t = useTranslations();
  return (
    <div className="px-6 sm:px-10 lg:px-40 py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-6">
            {t("About Us")}
          </h1>
        </div>

        <p className="text-lg mb-4">
          Welcome to <strong>Mukhta Solutions</strong> — your trusted travel
          partner in the breathtaking land of Kashmir. We are a registered
          travel agency under the Jammu & Kashmir Tourism Department, committed
          to offering safe, reliable, and memorable travel experiences across
          the valley.
        </p>

        <p className="text-lg mb-4">
          At Mukhta Solutions, we specialize in customized tours, hotel
          bookings, transport services, adventure activities, and complete
          travel solutions tailored to your needs. With our deep local knowledge
          and passion for hospitality, we aim to showcase the real beauty,
          culture, and warmth of Kashmir to travelers from all over the world.
        </p>

        <p className="text-lg mb-4">
          Our team ensures every journey is well-planned, comfortable, and
          unforgettable. Whether you’re seeking a relaxing holiday, a honeymoon
          retreat, or a thrilling adventure, Mukhta Solutions is here to turn
          your travel dreams into reality.
        </p>

        <p className="text-lg mt-6 italic text-green-800 font-medium">
          Discover the magic of Kashmir with Mukhta Solutions — where every trip
          becomes a beautiful story.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
