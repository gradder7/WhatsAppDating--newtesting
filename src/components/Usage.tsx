// import { motion, useAnimation } from 'framer-motion';
// import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import WAButton from './Buttons';
import { buttonFlowTopDownAnimation } from './variants';

const Usage = () => {
  // const [ref, inView] = useInView();
  // const animation = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animation.start('visible');
  //   } else {
  //     animation.start('hidden');
  //   }
  // });
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col border-b-2 md:flex-row md:items-center">
        {/* First column */}
        <div className="m-5 p-4 md:w-2/3">
          <h2 className="mb-4 text-2xl font-bold">Heading Text</h2>
          <p className="mb-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
            mauris mauris. Integer convallis, metus nec sagittis egestas, nisi
            diam pulvinar justo, in malesuada tellus elit sit amet elit. Sed
            rhoncus enim vel sem commodo auctor.
          </p>
          <p className="text-lg">
            Phasellus bibendum felis id ipsum condimentum elementum. Duis
            aliquam justo at erat congue luctus. Pellentesque iaculis velit nec
            risus efficitur maximus. Ut vehicula enim at lorem auctor, in ornare
            sapien sagittis.
          </p>
        </div>
        {/* Second column */}
        <div
          // ref={ref}
          className="flex items-center justify-center p-4 md:w-1/3"
        >
          <motion.div
            variants={buttonFlowTopDownAnimation}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <h3 className="mb-2 text-lg font-bold">Use Now</h3>
            <WAButton />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Usage;
