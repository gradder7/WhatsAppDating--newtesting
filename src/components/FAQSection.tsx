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
          <h2 className="mb-4 text-3xl font-bold  text-headingColor lg:text-4xl">
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
        <div className="h-full w-full">
          <Image
            src={FAQImg}
            alt="Your-Image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
