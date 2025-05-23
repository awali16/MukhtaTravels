"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { NavigationMenu } from '@/lib/constants';



const Header: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState(false);
    const [mounted, setMounted] = useState(false);

    const handleToggleMenu = () => {

        setShowMenu(prev => !prev);
    };
    ;


    const handleNavigation = (href: string) => {
        router.push(href);
        setShowMenu(false);
    };

    useEffect(() => {
        setMounted(true);
    }, [pathname]);

    if (!mounted) return null;

    return (
        <>
        <div className="h-8 bg-green-700 text-white flex items-center justify-center gap-6 text-sm px-4">
            <a href="mailto:mukhtasolutions@gmail.com" className="hover:underline">
                mukhtasolutions@gmail.com
            </a>
            <span className="hidden sm:inline-block">|</span>
            <a href="tel:+917006062987" className="hover:underline">
                +91 70060 62987
            </a>
        </div>

        <header className="header  flex items-center justify-center w-full h-20 px-4 bg-blue-500 text-white relative">
            <div className="logo flex items-center w-full gap-2">
                <Link href="/" className='flex items-center gap-2'>
                    <Image
                        src={"https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"}
                        alt=''
                        width={80}
                        height={80} />
                    <h1 className="logo text-lg">Mukhta Solutions</h1>
                </Link>
            </div>
            <nav className="nav hidden lg:flex  items-center justify-center w-full">
                <ul className='flex items-center justify-start gap-8'>
                    {NavigationMenu.map((item, index) => {
                        return <Link href={item.href} key={index} className="relative group">
                            <li>
                                {item.name}
                                <span className={`absolute  -bottom-0.5  h-[2px] bg-white transition-all duration-300 ease-in-out  mt-2 ${pathname === item.href ? "w-full left-0" : "left-1/2 w-0 group-hover:w-full group-hover:left-0"}`}></span>
                            </li>
                        </Link>
                    }
                    )}

                </ul>
            </nav>
            {/* this div is a placeholder for alignment of the header items */}
            <div className='w-full'></div>

            <div className='text-white  lg:hidden' onClick={handleToggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            <div className={`flex fixed top-0 right-0 h-screen w-full z-50 lg:hidden 
            transition-transform duration-500
            ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}
            >

                <div className={`h-full w-[35%] ${showMenu ? 'opacity-[.75] bg-black' : 'bg-transparent bg-opacity-0 backdrop-blur-none'}`} onClick={handleToggleMenu}>

                </div>

                <div
                    className="relative h-full w-[65%] bg-green-600 opacity-100 ml-auto py-16 px-4 transition-transform duration-300"

                >
                    <div className='absolute top-4 right-4' onClick={handleToggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="flex items-center justify-center mb-10">
                        <div className="logo flex flex-col items-center justify-center gap-2">
                            <Image
                                src={"https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"}
                                alt=''
                                width={80}
                                height={80} />
                            <h1 className="logo text-lg">Mukhta Travels</h1>
                        </div>
                    </div>
                    <ul className="flex flex-col items-center justify-center gap-4 text-white">
                        {NavigationMenu.map((item, index) => {
                            return <li className="relative group" key={index} onClick={() => handleNavigation(item.href)}>
                                {item.name}
                                <span className={`absolute  -bottom-0.5  h-[2px] bg-white transition-all duration-300 ease-in-out  mt-2 ${pathname === item.href ? "w-full left-0" : "left-1/2 w-0 group-hover:w-full group-hover:left-0"}`}></span>
                            </li>
                        }
                        )}
                    </ul>
                </div>
            </div>
        </header>
        </>
    );
}
export default Header;