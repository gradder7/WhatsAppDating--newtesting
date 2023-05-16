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
