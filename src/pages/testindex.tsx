import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import Carousel from '@/components/Carousel';
import Constants from '@/components/Constants';

const Index = () => {
  return (
    <div>
      <section className="grid h-screen w-full grid-flow-row sm:grid-cols-12">
        {/* Left Col */}
        <div className="mx-5 flex flex-col items-center justify-center pt-10 sm:mx-10 sm:min-h-screen sm:pt-0 md:col-span-12">
          <h2 className="items-center justify-center px-10 py-4 text-center text-5xl font-medium leading-[4rem] text-gray-700 sm:text-5xl md:text-5xl">
            Meet new people in WhatsApp!
          </h2>
          <Link
            href={Constants.whatsapp}
            target="_blank"
            className="my-8 cursor-pointer items-center rounded-lg bg-yellow-400 px-4 py-2 text-xl font-bold text-gray-800 transition duration-500 ease-in-out hover:bg-green-500 group-hover:text-white"
          >
            Try Now
          </Link>
          <h3 className="py-4 text-2xl font-normal text-gray-700 sm:text-xl lg:text-2xl">
            Now in Delhi, India
          </h3>
          {/* <div className="absolute top-0 left-4 -z-10 h-40 w-40 animate-blob rounded-full bg-red-300 opacity-70 mix-blend-multiply blur-xl sm:h-60 sm:w-60"></div> */}
          <div className="absolute top-44 right-20 -z-10 h-40 w-40 animate-blob rounded-full bg-green-300 opacity-70 mix-blend-multiply blur-xl delay-300 sm:right-1/2 sm:h-72 sm:w-72 sm:opacity-40"></div>
          <div className="absolute bottom-16 left-1/2 -z-10 h-40 w-40 animate-blob rounded-full bg-orange-300 opacity-40 mix-blend-multiply blur-xl delay-700 sm:bottom-20 sm:right-1/2 sm:h-80 sm:w-80"></div>
        </div>
      </section>
      <section className="flex h-full w-full flex-col pb-20">
        <div className="flex h-fit w-full flex-col items-center justify-center sm:hidden">
          <Carousel />
          <Link
            href={Constants.whatsapp}
            target="_blank"
            className="my-8 cursor-pointer items-center rounded-lg bg-yellow-400 px-4 py-2 text-xl font-bold text-gray-800 transition duration-500 ease-in-out hover:bg-green-500 group-hover:text-white"
          >
            WhatsApp Now
          </Link>
        </div>
        <div className="hidden h-fit w-full items-center justify-center pb-10 sm:grid sm:grid-cols-12 ">
          <div className="sm:col-span-3 md:col-span-2 lg:col-span-1" />
          <Image
            className="sm:col-span-3 md:col-span-4 lg:col-span-5"
            src="/assets/images/fate v1_1.png"
            alt="Hero"
            width={1000}
            height={1000}
          />
          <Image
            className="sm:col-span-3 md:col-span-4 lg:col-span-5"
            src="/assets/images/fate v1_2.png"
            alt="Hero"
            width={1000}
            height={1000}
          />
          <div className="sm:col-span-3 md:col-span-2 lg:col-span-1" />
        </div>
        <div className="hidden w-full justify-center sm:flex">
          <Link
            href={Constants.whatsapp}
            target="_blank"
            className="my-8 cursor-pointer items-center rounded-lg bg-yellow-400 px-4 py-2 text-xl font-bold text-gray-800 transition duration-500 ease-in-out hover:bg-green-500 group-hover:text-white"
          >
            WhatsApp Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
