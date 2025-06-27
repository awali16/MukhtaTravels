import React from "react";
import { useTranslations } from "next-intl";
const Hero: React.FC = () => {
  const t = useTranslations();
  return (
    <div className="relative h-[32rem] bg-[url(/MukhtaSolutionsLogo.jpeg)] bg-auto bg-center bg-no-repeat">
      <section className="absolute inset-0 bg-black opacity-[.80]">
        <div className="container mx-auto flex h-full px-5 py-24 items-center justify-center text-center text-white">
          <div className="lg:w-2/3 w-full">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-6">
              {t("Welcome to Mukhta Solutions")}
            </h1>
            <p className="text-xl mb-6">{t("Your Gateway to Kashmir")}</p>
            <p className="mb-8 text-lg leading-relaxed">
              {t(
                "We are a trusted travel agency registered with the Jammu & Kashmir Tourism Department"
              )}{" "}
              {t(
                "We are committed to offering you safe, reliable, and unforgettable travel experiences across the beautiful valley of Kashmir"
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
