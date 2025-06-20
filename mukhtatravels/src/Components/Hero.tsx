import React from "react";
const Hero: React.FC = () => {
  return (
    <div className="relative h-[32rem] bg-[url(/MukhtaSolutionsLogo.jpeg)] bg-auto bg-center bg-no-repeat border-b-4 border-red-500">
      <section className="absolute inset-0 bg-black opacity-[.80]">
        <div className="container mx-auto flex h-full px-5 py-24 items-center justify-center text-center text-white">
          <div className="lg:w-2/3 w-full">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-6">
              Welcome to Mukhta Solutions
            </h1>
            <p className="text-xl mb-6">Your Gateway to Kashmir</p>
            <p className="mb-8 text-lg leading-relaxed">
              We are a trusted travel agency registered with the Jammu & Kashmir
              Tourism Department. We are committed to offering you safe,
              reliable, and unforgettable travel experiences across the
              beautiful valley of Kashmir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
