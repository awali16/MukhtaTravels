import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="header  flex items-center justify-center w-full h-20 px-10 mt-[1.5px] bg-blue-500 text-white">

            <div className="logo flex items-center w-full">
                <Image 
                    src={"https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"}   
                    alt='' 
                    width={80} 
                    height={80} />
                <h1 className="logo">Mukhta Travels</h1>
            </div>
            <nav className="nav flex items-center justify-center w-full">
                <ul className='flex items-center justify-start gap-4'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
            {/* this div is a placeholder for alignment of the header items */}
            <div className='w-full'>

            </div>
        </header>
    );
}
export default Header;