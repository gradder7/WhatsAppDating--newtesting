import Image from 'next/image';
import React from 'react';

import heroImage from '../../public/assets/images/HeroImage.png';

const HeroSection = () => {
  return (
    <div className="mt-12 flex min-h-screen items-center justify-center px-4 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-bold text-headingColor md:text-5xl">
              The Best <br />
              Relationship
              <br />
              Coaching Service
            </h1>
            <p className="mb-8 text-lg text-subContentColor md:text-xl">
              Your text goes here. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <button className="flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600 md:px-14 md:py-5">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 10l-4.147-4.146a.5.5 0 01.708-.708l4.5 4.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 11-.708-.708L14.707 10z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M5 10a.5.5 0 01.5-.5h8.793l-1.646-1.646a.5.5 0 11.708-.708l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 11-.708-.708L14.293 10H5.5A.5.5 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div>
            <Image src={heroImage} alt="Your Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// const HeroSection = () => {
//   return (
//     <div className="mt-12 flex min-h-screen items-center justify-center px-4 py-12 md:py-24">
//       <div className="container mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//           <div className="flex flex-col justify-center">
//             <h1 className="mb-4 text-4xl font-bold text-blue-900 md:text-5xl">
//               The Best <br />
//               Relationship
//               <br />
//               Coaching Service
//             </h1>
//             <p className="mb-8 text-lg text-blue-600 md:text-xl">
//               Your text goes here. Lorem ipsum dolor sit amet, consectetur
//               adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//               dolore magna aliqua.
//             </p>
//             <button className="inline-block rounded-sm bg-blue-500 py-2 px-3 font-bold text-white shadow-md hover:bg-blue-600 md:w-auto md:px-4">
//               Click me
//             </button>
//           </div>
//           <div className="flex justify-center">
//             <div>
//               <Image src={heroImage} alt="Your image description" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HeroSection;
