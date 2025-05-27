
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pt-10">
            <div className=" px-8 sm:px-8 lg:px-44 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* <!-- Navigation Links --> */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Navigation</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
                        <li><a href="/services" className="text-gray-400 hover:text-white transition">Services</a></li>
                        <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                        <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* <!-- Social Media Links --> */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-6 text-xl">
                        <Link
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <FaFacebookF />
                        </Link>
                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <FaInstagram />
                        </Link>
                    </div>
                </div>

                {/* <!-- Social Media Logos --> */}
                <div className="w-64  text-center  flex flex-col items-start justify-start">
                    <div className="flex title-font font-medium items-center md:justify-start  text-white-900">
                        <Image src={"/MukhtaSolutionsLogo.jpeg"} width={30} height={30} alt='logo' className="w-16 h-16 text-white p-2  rounded-full" />
                        
                    </div>
                    <p className="ml-2 text-xl">Mukhta Solutions</p>
                    <p className="ml-2 mt-2 text-sm text-gray-500 ">Your Gateway to Kashmir</p>
                </div>
                {/* base footer  */}
                <div className=" flex flex-col md:flex-row items-center justify-start  col-span-1 md:col-span-3 mt-10 text-center text-gray-500 text-sm py-4 gap-4 lg:gap-0">
                    <div className=''>
                        <p>© 2025 Mukhta Solutions,  All rights reserved.</p>
                    </div>
                    <div>
                        <p>&nbsp;Designed & Developed by {" "}
                            <Link
                                href="https://asifwali.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 hover:underline"
                            >
                                Mohammad Asif
                            </Link></p>
                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer;
