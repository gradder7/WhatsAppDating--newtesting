import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';
import React from 'react';

import cycleImg from '../../public/assets/images/cycleImage.png';

const FeatureSection = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="md:hidden">
            <Image src={cycleImg} alt="CycleImmage" />
          </div>
          {/* <div className="hidden md:block">
            <Image src={cycleImg} alt="CycleImage" />
          </div> */}
          <div className="mx-auto hidden max-w-7xl md:block">
            <Image
              src={cycleImg}
              alt="CycleImage"
              className="h-auto w-full"
              style={{ height: '500px' }}
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="mb-4 flex items-center">
            {/* icon */}
            <Diversity1OutlinedIcon
              style={{ color: 'rgb(30 58 138)', marginRight: '10px' }}
            />
            <span className="text-sm text-blue-500">WE ARE HAPPY TO HELP</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-blue-900 lg:text-4xl">
            Always By Your Side
          </h2>
          <p className=" text-subContentColor">
            Are you ready for an unforgettable experience? Join our WhatsApp
            community and dive into the world of random chats with strangers.
            Discover the magic of connecting with people from all walks of life
            and immerse yourself in diverse cultures.
            <br />
            With our platform, you can engage in thought-provoking
            conversations, share your passions, and make lasting connections
            with like-minded individuals.
            <br /> <br /> Don&#39;t let the opportunity pass you by – join us
            today and experience the thrill of random chats on WhatsApp.
          </p>

          <div className="mt-8 text-xl font-bold">
            <a
              href="#"
              className="flex items-center text-blue-500 transition duration-300 ease-in-out hover:text-blue-600"
            >
              <span>Get Started</span>

              <EastIcon
                style={{ width: '20px', marginLeft: '6px', marginTop: '2px' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
