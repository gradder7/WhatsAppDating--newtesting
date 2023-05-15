import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Image from 'next/image';
import React from 'react';

import FAQImg from '../../public/assets/images/faq.png';
import faqData from './faqData';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [selectedFaq, setSelectedFaq] = React.useState<number | null>(null);

  return (
    <div className="container  mx-auto md:py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
        <div>
          <div className="mb-4 flex items-center">
            {/* icon */}
            <Diversity1OutlinedIcon
              style={{ color: 'rgb(30 58 138)', marginRight: '10px' }}
            />
            <span className="text-sm text-blue-500">WE ARE HAPPY TO HELP</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold  text-headingColor md:text-4xl">
            FAQ
          </h2>
          <ul className="space-y-4">
            {faqData.map((item: FaqItem, index: number) => (
              <li key={index}>
                <button
                  className={`${
                    index === selectedFaq ? 'bg-gray-100' : ''
                  } flex cursor-pointer items-center space-x-2  rounded-md py-2 px-4 text-blue-700 hover:bg-gray-100`}
                  // sets the index of the clicked item, or null if the clicked item is already selected
                  onClick={() =>
                    setSelectedFaq(selectedFaq === index ? null : index)
                  }
                >
                  {selectedFaq === index ? (
                    <KeyboardArrowDownOutlinedIcon />
                  ) : (
                    <KeyboardArrowRightOutlinedIcon />
                  )}
                  {item.question}
                </button>

                {selectedFaq === index && (
                  <div>
                    <p
                      className="mt-2
                      px-10
                      text-gray-500
                      "
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={FAQImg} alt="Your-Image" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;

// faq section
// import Image from 'next/image';
// import React from 'react';

// import FAQImg from '../../public/assets/images/FAQ.png';

// const ImageTextSection = () => {
//   return (
//     <div className="container mx-auto px-4 md:px-8">
//       <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
//         <div>
//           <div className="mb-4 flex items-center">
//             {/* icon */}
//             <span className="text-sm text-gray-500">Small text after icon</span>
//           </div>
//           <h2 className="mb-4 text-3xl font-bold">Section Heading</h2>
//         </div>
//         <div>
//           <Image src={FAQImg} alt="Your Image" />
//         </div>
//       </div>
//     </div>
//   );
// };

// import Image from 'next/image';
// import React, { useState } from 'react';

// import FAQImg from '../../public/assets/images/FAQ.png';

// const faqs = [
//   {
//     question: 'Question 1',
//     answer: 'Answer 1',
//   },
//   {
//     question: 'Question 2',
//     answer: 'Answer 2',
//   },
//   {
//     question: 'Question 3',
//     answer: 'Answer 3',
//   },
// ];

// const FaqSection = () => {
//   const [selectedFaq, setSelectedFaq] = useState(null);

//   const handleFaqClick = (index: number | React.SetStateAction<null>) => {
//     if (selectedFaq === index) {
//       setSelectedFaq(null);
//     } else {
//       setSelectedFaq(index);
//     }
//   };

//   return (
//     <div className="bg-gray-50 py-16">
//       <div className="container mx-auto px-4 md:px-8">
//         <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
//           <div>
//             <h2 className="mb-4 text-3xl font-bold">FAQs</h2>
//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <div key={index}>
//                   <button
//                     className="w-full text-left text-lg font-medium"
//                     onClick={() => handleFaqClick(index)}
//                   >
//                     {faq.question}
//                   </button>
//                   {selectedFaq === index && (
//                     <div className="mt-2 text-gray-600">{faq.answer}</div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <Image src={FAQImg} alt="FAQ" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FaqSection;
