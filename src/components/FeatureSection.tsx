// import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
// import Image from 'next/image';
// import React from 'react';

// import cycleImg from '../../public/assets/images/cycleImage.png';

// const ImageTextSection = () => {
//   return (
//     <div className="container mx-auto px-4 md:px-8">
//       <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
//         <div>
//           <Image src={cycleImg} alt="Your Image" />
//         </div>
//         <div>
//           <div className="mb-4 flex items-center">
//             {/* icon */}
//             <Diversity1OutlinedIcon
//               style={{ color: 'rgb(30 58 138)', marginRight: '10px' }}
//             />
//             <span className="text-sm text-blue-500">Small text after icon</span>
//           </div>
//           <h2 className="mb-4 text-3xl font-bold text-blue-900">
//             Section Heading
//           </h2>
//           <p className=" text-blue-700">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
//             asperiores culpa quae porro! Voluptatem alias quae vel porro debitis
//             illo harum rem labore eos aspernatur. Alias quas molestiae odit vel
//             quia quis cum id natus nesciunt quos impedit fuga non cumque maxime
//             minus, ad dicta rerum error unde? Maiores, dolores.
//           </p>
//           <button className=" mt-12 flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600">
//             Get Started
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="ml-2 h-5 w-5"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M14.707 10l-4.147-4.146a.5.5 0 01.708-.708l4.5 4.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 11-.708-.708L14.707 10z"
//                 clipRule="evenodd"
//               />
//               <path
//                 fillRule="evenodd"
//                 d="M5 10a.5.5 0 01.5-.5h8.793l-1.646-1.646a.5.5 0 11.708-.708l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 11-.708-.708L14.293 10H5.5A.5.5 0 015 10z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageTextSection;

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
          <div className="hidden md:block">
            {/* Replace with your desktop image */}
            <Image src={cycleImg} alt="CycleImage" />
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
          <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">
            Always By Your Side
          </h2>
          <p className=" text-subContentColor">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
            asperiores culpa quae porro! Voluptatem alias quae vel porro
            debitis.
            <br />
            <br />
            illo harum rem labore eos aspernatur. Alias quas molestiae odit vel
            quia quis cum id natus nesciunt quos impedit fuga non cumque maxime
            minus, ad dicta rerum error unde? Maiores, dolores.
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
