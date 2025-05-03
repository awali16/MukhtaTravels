// pages/contact.js or components/ContactPage.jsx

import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-white px-6 sm:px-10 lg:px-40 py-16 text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We’d love to hear from you! Whether you’re planning your dream trip to Kashmir or simply have questions
            about our services, the team at Mukhta Solutions is here to assist you.
          </p>
        </div>

        {/* Contact Info Box */}
        <div className="bg-gray-50 rounded-lg shadow-md p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Get in Touch</h2>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>

                <strong className="hidden md:inline-block lg:inline-block">Email:</strong>{" "}
                <a href="mailto:mukhtasolutions@gmail.com" className="text-green-700 hover:underline">
                  mukhtasolutions@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-green-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <strong className="hidden md:inline-block lg:inline-block">Phone/WhatsApp:</strong>{" "}
                <a href="tel:+917006062987" className="text-green-700 hover:underline">
                  +91 70060 62987
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <strong className="hidden md:inline-block lg:inline-block">Location:</strong>{" "}
                <a
                  href="https://www.google.com/maps?q=34.1494,74.8707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:underline"
                >
                  Tailbal Road, Shalimar, J&amp;K, India
                </a>
              </li>

            </ul>
          </div>

          <p className="text-lg text-gray-600">
            Feel free to call, message, or email us — we’re ready to help you start your unforgettable journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
