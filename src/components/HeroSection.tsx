import { motion } from 'framer-motion';
import Image from 'next/image';
import TypewriterComponent from 'typewriter-effect';

import heroImage from '../../public/assets/images/heroSection.jpg';
import { WAButtonRound } from './Buttons';
import {
  bottomToTopForHeroSec,
  buttonFlowTopDownAnimation,
  topToBottom,
} from './variants';

const HeroSection = () => {
  return (
    <div className="relative mt-7 flex h-screen flex-col justify-end bg-gray-900">
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center"
        variants={topToBottom}
        initial="hidden"
        animate="visible"
      >
        <h1 className="mb-8 text-center text-3xl font-bold text-white md:mb-12 md:text-5xl">
          Welcome to Fate.
        </h1>
        <h2 className="mb-8 text-center text-3xl font-bold text-white md:mb-12 md:text-5xl">
          Meet new people in WhatsApp!
          <TypewriterComponent
            options={{
              strings: ['Chat', 'Strangers', 'Random', 'Whatsapp'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <motion.div
          variants={buttonFlowTopDownAnimation}
          initial="hidden"
          animate="visible"
        >
          <WAButtonRound />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute inset-x-0 bottom-0"
        variants={bottomToTopForHeroSec}
        initial="hidden"
        animate="visible"
      >
        <Image src={heroImage} alt="Hero Image" quality={100} />
      </motion.div>
    </div>
  );
};

export default HeroSection;
