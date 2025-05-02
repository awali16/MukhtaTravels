import { OurServices } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';

export default function ServicePage() {
  return (
    <main className="px-6 border-2 border-red">
      {/* Header */}
      <div className="flex items-center justify-center w-full h-20">
        <h1 className="text-3xl font-bold">Our Services</h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 gap-6 m-6 px-2 lg:px-32 ">
        {OurServices.map((service, index) => (
          
           <div className="p-4 py-8 flex flex-col text-center items-center  border-2 border-yellow-600 rounded-lg w-fit" key={index}>
           <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <Image src={service.img} alt={`${service.title}-icons`} height={40} width={40}></Image>
           </div>
           <div className="flex-grow">
             <h2 className="text-gray-900 text-xl title-font font-bold mb-3">{service.title}</h2>
             <p className="leading-relaxed text-base">{service.description}</p>
           </div>
         </div>
        ))}
      </div>
      
    </main>
  );
}
