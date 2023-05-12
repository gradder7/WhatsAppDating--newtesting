// import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
// import React from 'react';

// const WorkSection = () => {
//   return (
//     <section className="">
//       <div className="container mx-auto mt-16 px-4 md:mt-28 md:px-8">
//         <div className="mb-4 flex items-center">
//           {/* icon */}
//           <Diversity1OutlinedIcon
//             style={{ color: 'rgb(30 58 138)', marginRight: '10px' }}
//           />
//           <span className="text-sm text-blue-500">WE ARE HAPPY TO HELP</span>
//         </div>
//         <h2 className="mb-4 text-3xl font-bold text-blue-900">How it Works?</h2>
//         <p className=" text-blue-700">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
//           asperiores culpa quae porro! Voluptatem alias quae vel porro debitis.
//           <br />
//         </p>
//       </div>
//     </section>
//   );
// };

// export default WorkSection;

import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import React from 'react';

const WorkSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex items-center">
          <Diversity1OutlinedIcon
            style={{ color: 'rgb(30 58 138)', marginRight: '10px' }}
          />
          <span className="text-sm font-medium text-blue-500">
            WE ARE HAPPY TO HELP
          </span>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-headingColor">
          How it Works?
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* card bg change */}
          <div className="rounded-lg p-6">
            <div className="flex items-center">
              <div className=" flex h-10 w-12 items-center justify-center rounded-full bg-blue-500">
                <span className="  text-xl font-medium text-white">1</span>
              </div>
              <div className="" style={{ width: '100%', marginLeft: '10px' }}>
                {/* <div
                  style={{
                    borderTop: '2px dotted rgb(59 130 246)',
                    height: '2px',
                  }}
                ></div> */}
              </div>
            </div>
            <h3 className="my-4 text-xl font-bold text-headingColor">Step 1</h3>
            <p className="leading-relaxed text-subContentColor">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              quaerat?
            </p>
          </div>
          <div className="rounded-lg p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
              <span className="text-xl font-medium text-white">2</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-headingColor">Step 2</h3>
            <p className="leading-relaxed text-subContentColor">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              quaerat?
            </p>
          </div>
          <div className="rounded-l p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
              <span className="text-xl font-medium text-white">3</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-headingColor">Step 3</h3>
            <p className="leading-relaxed text-subContentColor">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              quaerat?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
