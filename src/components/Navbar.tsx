// import { motion } from 'framer-motion';
// import Link from 'next/link';

// import WAButton from './Buttons';

// export default function Navbar() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 3 }}
//       transition={{ duration: 1, ease: 'easeInOut' }}
//       // eslint-disable-next-line tailwindcss/no-custom-classname
//       className="shadow-black-600/20 sticky top-0 z-30 mr-12 -mb-20 flex w-full justify-between bg-white p-2 shadow-xl sm:px-4 md:py-0"
//     >
//       <div className="flex items-center py-2">
//         <div className="mr-4 flex gap-4 text-black">
//           <Link className="mr-2" href="/">
//             <h1 className="text-xl md:text-2xl">FATE</h1>
//           </Link>
//         </div>
//       </div>
//       <div className="flex items-center py-2">
//         {/* <p className="text-sm md:text-lg">Your Text Here</p> */}
//         <WAButton />
//       </div>
//     </motion.div>
//   );
// }

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import logo from '../../public/assets/images/logoFate.png';
import WAButton from './Buttons';

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  const variants = {
    hidden: { y: '-100%' },
    visible: { y: '0%' },
  };

  return (
    <motion.div
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.2, ease: 'linear' }}
      className={`sticky top-0 z-30 mr-12 -mb-20 flex w-full justify-between bg-white p-2 shadow-xl sm:px-4 md:py-0`}
    >
      <div className="flex items-center">
        <div className="mr-4 flex gap-4 text-black">
          <Link className="mr-2" href="/">
            <Image
              src={logo}
              alt="logo_Fate"
              width={65}
              height={50}
              quality={100}
            />
          </Link>
        </div>
      </div>
      <div className=" flex items-center">
        <WAButton />
      </div>
    </motion.div>
  );
}

// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <div className="shadow-black-600/20 sticky top-0 z-30 mr-12 -mb-20 flex w-full grow  justify-end bg-white p-2 shadow-xl sm:px-4 md:py-0">
//       <div className="flex items-center py-2">
//         <div className="mr-4 flex gap-4 text-black">
//           <Link className="mr-2 text-sm md:text-lg " href={`/`}>
//             Home
//           </Link>
//           <Link className="mr-2 text-sm md:text-lg" href={`/`}>
//             Explore
//           </Link>

//           <div className="flex items-center">
//             <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap text-sm md:w-max md:text-lg"></p>
//           </div>
//         </div>
//         <button className=" rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 md:mr-5 md:px-5 md:py-2.5 md:text-sm">
//           WhatsApp
//         </button>
//       </div>
//     </div>
//   );
// }

// import { motion } from 'framer-motion';
// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 3 }}
//       transition={{ duration: 1 }}
//       className="shadow-black-600/20 sticky top-0 z-30 mr-12 -mb-20 flex w-full grow  justify-end bg-white p-2 shadow-xl sm:px-4 md:py-0"
//     >
//       <div className="flex items-center py-2">
//         <div className="mr-4 flex gap-4 text-black">
//           <Link className="mr-2 text-sm md:text-lg " href={`/`}>
//             Home
//           </Link>
//           <Link className="mr-2 text-sm md:text-lg" href={`/`}>
//             Explore
//           </Link>

//           <div className="flex items-center">
//             <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap text-sm md:w-max md:text-lg"></p>
//           </div>
//         </div>
//         <button className=" rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 md:mr-5 md:px-5 md:py-2.5 md:text-sm">
//           WhatsApp
//         </button>
//       </div>
//     </motion.div>
//   );
// }
