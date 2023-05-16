import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';
import React from 'react';

import heroImage from '../../public/assets/images/HeroImage.png';

const HeroSection = () => {
  return (
    // items-center justify-center
    <div className=" mt-10 flex min-h-screen items-center justify-center  py-20 md:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-bold leading-[40px] text-headingColor xl:text-6xl xl:leading-[67px]">
              Explore the Thrill, <br /> of Random Chats with Strangers <br />
              on WhatsApp
            </h1>
            <p className="mb-8 text-lg text-subContentColor">
              Connect, Communicate, Create Memories with Strangers <br /> and
              Experience the Excitement of Random Chats <br /> on WhatsApp
            </p>
            <button className="flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600 md:px-14 md:py-5">
              Get Started
              <EastIcon
                style={{ width: '20px', marginLeft: '6px', marginTop: '2px' }}
              />
            </button>
          </div>
          <div className="h-full w-full">
            <Image
              src={heroImage}
              alt="Your Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
