import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-gray-400">
        <div className="container mx-auto px-4 py-12 md:flex md:items-center md:justify-between">
          <div className=" md:flex md:flex-wrap md:items-center">
            <div className="mb-4 md:mb-0 md:mr-6">
              <span className="font-bold uppercase">FATE</span>
            </div>
            <div>
              <span className="mr-4 block md:inline-block">
                <Link href="/privacy">
                  <span className="cursor-pointer hover:text-white">
                    Privacy Policy
                  </span>
                </Link>
              </span>
              <span className="mr-4 block md:inline-block">
                <Link href="/tandc">
                  <span className="cursor-pointer hover:text-white">
                    Terms and Conditions
                  </span>
                </Link>
              </span>
              <span className="block md:inline-block">
                <Link href="/about-us">
                  <span className="cursor-pointer hover:text-white">
                    About Us
                  </span>
                </Link>
              </span>
            </div>
          </div>
          <div className="mt-8 text-sm md:mt-0">
            <span>
              &copy; {new Date().getFullYear()} FATE. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
// import Link from 'next/link';
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-gray-400">
//       <div className="container mx-auto px-4 py-8 md:flex md:items-center md:justify-between">
//         <div className="mb-4 text-center md:mb-0 md:mr-6 md:text-left">
//           <span className="font-bold uppercase">FATE</span>
//         </div>
//         <div className="flex flex-wrap justify-around md:justify-start">
//           <div className="mr-5 mb-2">
//             <Link href="/privacy-policy">
//               <span className="cursor-pointer hover:text-white">
//                 Privacy Policy
//               </span>
//             </Link>
//           </div>
//           <div className="mr-5 mb-2">
//             <Link href="/terms-and-conditions">
//               <span className="cursor-pointer hover:text-white">T & C</span>
//             </Link>
//           </div>
//           <div className="mb-2">
//             <Link href="/about-us">
//               <span className="cursor-pointer hover:text-white">About Us</span>
//             </Link>
//           </div>
//         </div>
//         <div className="mt-8 text-center md:mt-0">
//           <span>
//             &copy; {new Date().getFullYear()} FATE. All rights reserved.
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
