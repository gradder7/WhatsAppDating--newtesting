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

// export default ImageTextSection;

// import Image from 'next/image';
// import React, { useState } from 'react';

// import FAQImg from '../../public/assets/images/FAQ.png';

// const ImageTextSection = () => {
//   const [faq, setFaq] = useState([
//     {
//       question: 'What is Lorem Ipsum?',
//       answer:
//         'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//     },
//     {
//       question: 'Why do we use it?',
//       answer:
//         'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//     },
//     {
//       question: 'Where does it come from?',
//       answer:
//         'Contrary to popular belief, Lorem Ipsum is not simply random text.',
//     },
//     {
//       question: 'Where can I get some?',
//       answer:
//         'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
//     },
//   ]);

//   const [selectedFaq, setSelectedFaq] = useState(0);

//   return (
//     <div className="container mx-auto mt-8 px-4 md:px-8 lg:mt-12">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
//         <div>
//           <div className="mb-4 flex items-center">
//             {/* icon */}
//             <span className="text-sm text-gray-500">Small text after icon</span>
//           </div>
//           <h2 className="mb-4 text-3xl font-bold">Section Heading</h2>
//           <ul className="space-y-4">
//             {faq.map((item, index) => (
//               <li
//                 key={index}
//                 className={`${
//                   index === selectedFaq ? 'bg-gray-100' : ''
//                 } flex cursor-pointer items-center space-x-2 rounded-md py-2 px-4 hover:bg-gray-100`}
//                 onClick={() => setSelectedFaq(index)}
//               >
//                 <svg
//                   className="h-5 w-5 shrink-0"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M9 18l6-6-6-6"></path>
//                 </svg>
//                 <span>{item.question}</span>
//               </li>
//             ))}
//           </ul>
//           <p className="mt-4 text-gray-500">
//             {selectedFaq !== null ? faq[selectedFaq].answer : ''}
//           </p>
//         </div>
//         <div>
//           <Image src={FAQImg} alt="Your Image" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageTextSection;

// import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
// import Image from 'next/image';
// import React, { useState } from 'react';

// import FAQImg from '../../public/assets/images/faq.png';

// interface FaqItem {
//   question: string;
//   answer: string;
// }

// const ImageTextSection: React.FC = () => {
//   const [faq, setFaq] = useState<FaqItem[]>([
//     {
//       question: 'What is Lorem Ipsum?',
//       answer:
//         'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//     },
//     {
//       question: 'Why do we use it?',
//       answer:
//         'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//     },
//     {
//       question: 'Where does it come from?',
//       answer:
//         'Contrary to popular belief, Lorem Ipsum is not simply random text.',
//     },
//     {
//       question: 'Where can I get some?',
//       answer:
//         'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
//     },
//   ]);

//   const [selectedFaq, setSelectedFaq] = useState<number | null>(0);

//   return (
//     <div className="container  mx-auto mt-14 px-4 md:px-8">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
//         <div>
//           <div className="mb-4 flex items-center">
//             {/* icon */}
//             <Diversity1OutlinedIcon
//               style={{ color: 'rgb(30 58 138)', marginRight: '10px' }}
//             />
//             <span className="text-sm text-blue-500">WE ARE HAPPY TO HELP</span>
//           </div>
//           <h2 className="mb-4 text-3xl  font-bold text-blue-900">FAQ</h2>
//           <ul className="space-y-4">
//             {faq.map((item, index) => (
//               <li
//                 key={index}
//                 className={`${
//                   index === selectedFaq ? 'bg-gray-100' : ''
//                 } flex cursor-pointer items-center space-x-2  rounded-md py-2 px-4 text-blue-700 hover:bg-gray-100`}
//                 onClick={() => setSelectedFaq(index)}
//               >
//                 <svg
//                   className="h-5 w-5 shrink-0"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M9 18l6-6-6-6"></path>
//                 </svg>
//                 <span>{item.question}</span>
//               </li>
//             ))}
//           </ul>
//           <p className="mt-4 text-gray-500">
//             {selectedFaq !== null ? faq[selectedFaq].answer : ''}
//           </p>
//         </div>
//         <div>
//           <Image src={FAQImg} alt="Your Image" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageTextSection;

// import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
// import Image from 'next/image';
// import React, { useState } from 'react';

// import FAQImg from '../../public/assets/images/faq.png';

// interface FaqItem {
//   question: string;
//   answer: string;
// }

// const ImageTextSection: React.FC = () => {
//   const [faq, setFaq] = useState<FaqItem[]>([
//     {
//       question: 'What is Lorem Ipsum?',
//       answer:
//         'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//     },
//     {
//       question: 'Why do we use it?',
//       answer:
//         'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//     },
//     {
//       question: 'Where does it come from?',
//       answer:
//         'Contrary to popular belief, Lorem Ipsum is not simply random text.',
//     },
//     {
//       question: 'Where can I get some?',
//       answer:
//         'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
//     },
//   ]);

//   const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

//   return (
//     <div className="container  mx-auto mt-14 px-4 md:px-8">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
//         <div>
//           <div className="mb-4 flex items-center">
//             {/* icon */}
//             <Diversity1OutlinedIcon
//               style={{ color: 'rgb(30 58 138)', marginRight: '10px' }}
//             />
//             <span className="text-sm text-blue-500">WE ARE HAPPY TO HELP</span>
//           </div>
//           <h2 className="mb-4 text-3xl  font-bold text-blue-900">FAQ</h2>
//           <ul className="space-y-4">
//             {faq.map((item, index) => (
//               <li
//                 key={index}
//                 className={`${
//                   index === selectedFaq ? 'bg-gray-100' : ''
//                 } flex cursor-pointer items-center space-x-2  rounded-md py-2 px-4 text-blue-700 hover:bg-gray-100`}
//                 onClick={() =>
//                   setSelectedFaq(selectedFaq === index ? null : index)
//                 }
//               >
//                 <svg
//                   className="h-5 w-5 shrink-0"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M9 18l6-6-6-6"></path>
//                 </svg>
//                 <span>{item.question}</span>
//                 {selectedFaq === index && (
//                   <p className="mt-2 text-gray-500">{item.answer}</p>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <Image src={FAQImg} alt="Your Image" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageTextSection;

import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import Image from 'next/image';
import React, { useState } from 'react';

import FAQImg from '../../public/assets/images/faq.png';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [faq, setFaq] = useState<FaqItem[]>([
    {
      question: 'What is Lorem Ipsum?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'Why do we use it?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      question: 'Where does it come from?',
      answer:
        'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    },
    {
      question: 'Where can I get some?',
      answer:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
  ]);

  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  return (
    <div className="container  mx-auto mt-16 px-4 md:mt-32 md:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
        <div>
          <div className="mb-4 flex items-center">
            {/* icon */}
            <Diversity1OutlinedIcon
              style={{ color: 'rgb(30 58 138)', marginRight: '10px' }}
            />
            <span className="text-sm text-blue-500">WE ARE HAPPY TO HELP</span>
          </div>
          <h2 className="mb-4 text-3xl  font-bold text-blue-900">FAQ</h2>
          <ul className="space-y-4">
            {faq.map((item, index) => (
              <li
                key={index}
                className={`${
                  index === selectedFaq ? 'bg-gray-100' : ''
                } flex cursor-pointer items-center space-x-2  rounded-md py-2 px-4 text-blue-700 hover:bg-gray-100`}
                onClick={() =>
                  setSelectedFaq(selectedFaq === index ? null : index)
                }
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
                <h1>{item.question}</h1>
                {selectedFaq === index && (
                  <p className="mt-2 text-gray-500">{item.answer}</p>
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
