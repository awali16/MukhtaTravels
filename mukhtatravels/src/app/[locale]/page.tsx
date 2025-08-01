"use client";
import React from "react";
import Hero from "@/Components/Hero";
import dynamic from "next/dynamic";
import OurPackages from "@/Components/OurPackages";
import OurCustomerExperiences from "@/Components/OurCustomerExperiences";
// import CustomerReviews from "@/Components/CustomerReviews";
// Dynamically import useForm to ensure it's only loaded on the client
const DynamicContactForm = dynamic(() => import("@/Components/ContactForm"), {
  ssr: false, // Disable SSR for this component
});

export default function Home() {
  return (
    <>
      <Hero />
      <DynamicContactForm />
      <OurPackages />
      <OurCustomerExperiences />
      {/* <CustomerReviews/> */}
    </>
  );
}
