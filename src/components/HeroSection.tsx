import { motion } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';

import { WAButtonRound } from './Buttons';
import { fadeInUp } from './variants';

const HeroSection = () => {
  return (
    <div className="relative mt-7 h-screen bg-gray-900">
      <img
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="https://img.freepik.com/premium-vector/boy-sending-text-message-girl-long-distance-relationship-couple-using-chat-applicatio_185694-89.jpg?w=1800"
        alt="Hero Image"
      />
      <div className="absolute inset-0 z-0 bg-gray-900 opacity-20"></div>
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="relative z-10 flex h-full flex-col items-center justify-center"
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
        <WAButtonRound />
      </motion.div>
    </div>
  );
};

export default HeroSection;
