import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { bottomToTop, topToBottom } from './variants';

const Benifits2 = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-12 px-4 md:flex-row md:px-24 lg:px-48"
    >
      <motion.div
        variants={bottomToTop}
        animate={inView ? 'visible' : 'hidden'}
        className="w-full md:w-1/2 md:pl-8"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Title of the text
        </h2>
        <p className="mb-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </p>
      </motion.div>

      <motion.div
        animate={animation}
        variants={topToBottom}
        className="mb-8 w-full md:mb-0 md:mr-10 md:w-1/2"
      >
        <img
          src="https://shagle.com/assets/img/landing/benefits.svg"
          alt="Image"
          width={500}
          height={500}
        />
      </motion.div>
    </div>
  );
};
export default Benifits2;
