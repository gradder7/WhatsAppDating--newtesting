import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { staggerContainer, topToBottom } from './variants';

const icons = [
  {
    icon: '🚀',
    title: 'Fast',
    description: 'Built on Next.js for lightning fast performance.',
  },
  {
    icon: '💻',
    title: 'Responsive',
    description: 'Fully responsive design using Tailwind CSS.',
  },
  {
    icon: '🔒',
    title: 'Secure',
    description: 'Built with security in mind to keep your data safe.',
  },
  {
    icon: '🎨',
    title: 'Customizable',
    description: 'Easily customize the design to fit your needs.',
  },
  {
    icon: '🌍',
    title: 'Global',
    description: 'Support for multiple languages and locales.',
  },
  {
    icon: '📈',
    title: 'Analytics',
    description: 'Built-in support for analytics tracking.',
  },
];

const Section = () => {
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
    <div className="bg-gray-100 py-16">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        animate={animation}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h3 className="text-3xl font-medium leading-6 text-gray-900">
            Features
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            elit, tristique placerat feugiat eget, dictum eu quam.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {icons.map(({ icon, title, description }) => (
            <motion.div
              variants={topToBottom}
              key={title}
              className="flex flex-col items-center"
            >
              <div className="flex h-16 w-32 items-center justify-center rounded-md bg-indigo-500 text-white">
                {icon}
              </div>
              <h4 className="mt-4 text-lg font-medium text-gray-900">
                {title}
              </h4>
              <p className="mt-2 max-w-2xl text-center text-sm text-gray-500">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Section;
