import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import { bottomToTop, topToBottom } from './variants';

const ProductSection = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  React.useEffect(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [animation, inView]);

  return (
    <section ref={ref} className="flex flex-col py-20 px-6 md:flex-row">
      <motion.div
        className="flex items-center justify-center md:w-1/2"
        initial="hidden"
        animate={animation}
        variants={topToBottom}
      >
        <div className="mx-auto max-w-xs md:max-w-full">
          <img
            src="https://talk2stranger.com/talk2/img/profile.svg"
            alt="Product Image"
            width={400}
            height={400}
          />
        </div>
      </motion.div>
      <motion.div
        className="mt-8 md:mt-0 md:w-1/2 md:pl-10"
        variants={bottomToTop}
        animate={animation}
      >
        <h2 className="mb-6 text-4xl  font-bold">
          Introducing Our New Product
        </h2>
        <p className="mb-6 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi, libero illo quia voluptatibus error ipsum
          provident, sed atque nam aspernatur rem deserunt ipsa facere accusamus
          aut tempora adipisci ut sint vero maxime facilis sapiente! Ipsum esse
          iure assumenda inventore. Eveniet voluptatum quos iste blanditiis qui
          assumenda dolor provident culpa ea.
        </p>
        <motion.button
          className="rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-6 py-3 text-white shadow-md transition-shadow duration-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ProductSection;

// import React from 'react';

// const ProductSection = () => {
//   return (
//     <section className="flex flex-col py-20 px-6 md:flex-row">
//       <div className="flex items-center justify-center md:w-1/2">
//         <div className="mx-auto max-w-xs md:max-w-full">
//           <img
//             src="https://chathub.cam/img/mock-main.jpg"
//             alt="Product Image"
//             width={250}
//             height={100}
//           />
//         </div>
//       </div>
//       <div className="mt-8 md:mt-0 md:w-1/2 md:pl-10">
//         <h2 className="mb-6 text-4xl font-bold">Introducing Our New Product</h2>
//         <p className="mb-6 text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
//           risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
//           ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
//           massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
//           nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
//           sit amet erat. Duis semper.
//         </p>
//         <button className="rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-6 py-3 text-white shadow-md transition-shadow duration-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300">
//           Learn More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;

// working good

// import { motion, useAnimation } from 'framer-motion';
// import React from 'react';
// import { useInView } from 'react-intersection-observer';

// const ProductSection = () => {
//   const { ref, inView } = useInView();
//   const animation = useAnimation();

//   const variants = {
//     visible: { opacity: 1, x: 0 },
//     hidden: { opacity: 0, x: -100 },
//   };

//   React.useEffect(() => {
//     if (inView) {
//       animation.start('visible');
//     } else {
//       animation.start('hidden');
//     }
//   }, [animation, inView]);

//   return (
//     <motion.section
//       className="flex flex-col py-20 px-6 md:flex-row"
//       ref={ref}
//       initial="hidden"
//       animate={animation}
//       variants={variants}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="flex items-center justify-center md:w-1/2">
//         <div className="mx-auto max-w-xs md:max-w-full">
//           <img
//             src="https://chathub.cam/img/mock-main.jpg"
//             alt="Product Image"
//             width={250}
//             height={100}
//           />
//         </div>
//       </div>
//       <div className="mt-8 md:mt-0 md:w-1/2 md:pl-10">
//         <motion.h2 className="mb-6 text-4xl font-bold">
//           Introducing Our New Product
//         </motion.h2>
//         <motion.p className="mb-6 text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
//           risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
//           ultricies sed, dolor.
//         </motion.p>
//         <motion.button
//           className="rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-6 py-3 text-white shadow-md transition-shadow duration-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Learn More
//         </motion.button>
//       </div>
//     </motion.section>
//   );
// };

// export default ProductSection;
