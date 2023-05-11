import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  bottomToTop,
  leftToRight,
  staggerContainer,
  topToBottom,
} from './variants';

const Benifits1 = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [animation, inView]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center bg-gray-200 py-12 px-4 md:flex-row md:px-24 lg:px-48"
    >
      {/* Image on left */}
      <motion.div
        className="mb-8 w-full md:mb-0 md:mr-10 md:w-1/2"
        animate={animation}
        variants={leftToRight}
      >
        <img
          src="https://shagle.com/assets/img/landing/free.svg"
          alt="Image"
          width={500}
          height={500}
        />
      </motion.div>

      {/* Text on right */}
      <motion.div
        className="w-full md:w-1/2 md:pl-8"
        animate={animation}
        variants={bottomToTop}
      >
        <h2 className="mb-4 text-center text-3xl font-bold  md:text-4xl lg:text-left">
          Title of the text
        </h2>
        <p className="mb-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </p>

        {/* Icons below text */}
        <motion.div
          variants={staggerContainer}
          animate={animation}
          className="flex justify-between"
          style={{ gap: '10px' }}
        >
          <motion.div
            variants={topToBottom}
            className="flex flex-col items-center"
          >
            <AddReactionOutlinedIcon
              style={{ color: 'orange', width: '50px', height: '50px' }}
            />
            <p className="mt-2">Free</p>
          </motion.div>
          <motion.div
            variants={topToBottom}
            className="flex flex-col items-center"
          >
            <Diversity1OutlinedIcon
              style={{ color: 'orange', width: '50px', height: '50px' }}
            />
            <p className="mt-2">Connect</p>
          </motion.div>
          <motion.div
            variants={topToBottom}
            className="flex flex-col items-center"
          >
            <SentimentSatisfiedOutlinedIcon
              style={{ color: 'orange', width: '50px', height: '50px' }}
            />
            <p className="mt-2">Fun</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Benifits1;

// // const Feature = () => {
//   return (
//     <div className="w-full bg-gray-100 py-16 px-4">
//       <div className="flex flex-col items-center justify-between md:flex-row">
//         <div className="mb-16 md:mb-0 md:w-1/2">
//           <img
//             src="https://shagle.com/assets/img/landing/free.svg"
//             alt="Product Image"
//             width={500}
//             height={500}
//             className="rounded-lg"
//           />
//         </div>
//         <div className="md:w-1/2">
//           <h2 className="mb-8 text-3xl font-bold text-gray-800">
//             Product Name
//           </h2>
//           <p className="mb-8 leading-relaxed text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
//             metus ut nunc maximus feugiat.
//           </p>
//           <div className="flex flex-wrap justify-center">
//             <div className="mb-8 flex w-full flex-col items-center justify-center md:mb-0 md:w-1/3">
//               <div className="mr-4 md:mr-8">
//                 <AddReactionOutlinedIcon
//                   style={{ color: 'orange', width: '50px', height: '50px' }}
//                 />
//                 <div className="text-center">
//                   <p className="mb-2 font-bold text-gray-800">Join Free</p>
//                 </div>
//               </div>
//             </div>
//             <div className="mb-8 flex w-full flex-col items-center justify-center md:mb-0 md:w-1/3">
//               <div className="mr-4 md:mr-8">
//                 <Diversity1OutlinedIcon
//                   style={{ color: 'orange', width: '50px', height: '50px' }}
//                 />
//                 <div className="text-center">
//                   <p className="mb-2 font-bold text-gray-800">Feature 2</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex w-full flex-col items-center justify-center md:w-1/3">
//               <div className="mr-4 md:mr-8">
//                 <SentimentSatisfiedOutlinedIcon
//                   style={{ color: 'orange', width: '50px', height: '50px' }}
//                 />
//                 <div className="text-center">
//                   <p className="mb-2 font-bold text-gray-800">Feature 3</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Feature;
