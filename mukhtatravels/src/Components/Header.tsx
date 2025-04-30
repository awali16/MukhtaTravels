"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { NavigationMenu } from '@/lib/constants';



const Header: React.FC = () => {
    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState(false);

    const HandleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        setShowMenu(false);
    }, [pathname]);

    return (
        <header className="header  flex items-center justify-center w-full h-20 px-4 bg-blue-500 text-white relative">

            <div className="logo flex items-center w-full gap-2">
                <Link href="/" className='flex items-center gap-2'>
                    <Image
                        src={"https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"}
                        alt=''
                        width={80}
                        height={80} />
                    <h1 className="logo text-lg">Mukhta Travels</h1>
                </Link>
            </div>
            <nav className="nav hidden lg:flex  items-center justify-center w-full">
                <ul className='flex items-center justify-start gap-8'>
                {NavigationMenu.map((item, index) => (
                    <Link href={item.href} key={index} className="relative group">
                        <li>
                        {item.name}
                        <span className="absolute left-1/2 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 mt-2"></span>
                        </li>
                    </Link>
                ))}

                </ul>
            </nav>
            {/* this div is a placeholder for alignment of the header items */}
            <div className='w-full'></div>

            <div className='text-white  lg:hidden' onClick={HandleShowMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            <div className={`fixed top-0 right-0 h-screen w-full z-50 lg:hidden
                ${showMenu ? 'bg-opacity-25 backdrop-blur-sm' : 'bg-opacity-0 backdrop-blur-none'}
                transition-transform duration-500
                ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}
                onClick={() => setShowMenu(false)}
            >
                <div
                    className="relative h-full w-[65%] bg-green-600 ml-auto py-16 px-4 transition-transform duration-300"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className='absolute top-4 right-4' onClick={HandleShowMenu}>
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
                    {NavigationMenu.map((item, index) => (
                        <Link href={item.href} key={index} className="relative group">
                            <li>
                            {item.name}
                            <span className="absolute left-1/2 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 mt-2"></span>
                            </li>
                        </Link>
                        ))}
                    </ul>
                </div>
            </div>

        </header>
    );
}
export default Header;