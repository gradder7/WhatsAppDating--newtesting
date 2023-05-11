// import Head from 'next/head';

// export default function About() {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center py-2">
//       <Head>
//         <title>About Us</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="flex flex-1 flex-col items-center justify-center px-20 text-center">
//         <h1 className="text-5xl font-bold">About Us</h1>

//         <div className="mt-8 text-xl">
//           <p className="mb-4">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
//             ullamcorper elit id elit sodales venenatis. Integer malesuada
//             lacinia ligula, ac sollicitudin massa imperdiet sed. Nulla facilisi.
//           </p>
//           <p className="mb-4">
//             Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
//             posuere cubilia curae; Nulla facilisi. Donec vel augue vitae est
//             accumsan rhoncus vel ac velit.
//           </p>
//           <p>
//             Aliquam malesuada sagittis odio ac pulvinar. Etiam euismod velit id
//             diam euismod, vel congue sapien hendrerit. Donec euismod mollis
//             dolor, at egestas purus.
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }

import React from 'react';

const About = () => {
  return (
    <div className="mt-32 flex min-h-screen flex-col">
      <div className="mx-auto max-w-7xl grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            About Us
          </h2>
          <p className="leading-7 text-gray-700">
            Our website uses cookies to enhance the user experience and provide
            personalized content and advertising. Cookies are small data files
            that are placed on a device when they visit our website. Users can
            control the use of cookies through their browser settings. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Asperiores iste
            at voluptates reprehenderit quia quidem possimus dolores. Sapiente
            aliquid blanditiis facilis, optio maxime amet eaque dolore eos sequi
            corporis voluptatum dolorem quis fugit autem quibusdam quod alias.
            Voluptas, optio? Nemo ad tempore laborum et beatae eum temporibus
            deserunt neque a!
          </p>
          <p className="leading-7 text-gray-700">
            Our website uses cookies to enhance the user experience and provide
            personalized content and advertising. Cookies are small data files
            that are placed on a device when they visit our website. Users can
            control the use of cookies through their browser settings.
          </p>
          <p className="leading-7 text-gray-700">
            Our website uses cookies to enhance the user experience and provide
            personalized content and advertising. Cookies are small data files
            that are placed on a device when they visit our website. Users can
            control the use of cookies through their browser settings.
          </p>

          {/* <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="h-40 w-full bg-gray-800"></div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  John Doe
                </h3>
                <p className="text-gray-500">CEO & Founder</p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-600"
                  >
                    <svg
                      className="mr-1 inline-block h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 2.00244H2C0.9 2.00244 0 2.90244 0 4.00244V20.0024C0 21.1024 0.9 22.0024 2 22.0024H22C23.1 22.0024 24 21.1024 24 20.0024V4.00244C24 2.90244 23.1 2.00244 22 2.00244ZM22 20.0024H2V8.00244L12 14.0024L22 8.00244V20.0024Z"
                        fill="#4A5568"
                      />
                    </svg>
                    john@doe.com
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="h-40 w-full bg-gray-800"></div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Jane Smith
                </h3>
                <p className="text-gray-500">Creative Director</p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-600"
                  >
                    <svg
                      className="mr-1 inline-block h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 2.00244H2C0.9 2.00244 0 2.90244 0 4.00244V20.0024C0 21.1024 0.9 22.0024 2 22.0024H22C23.1 22.0024 24 21.1024 24 20.0024V4.00244C24 2.90244 23.1 2.00244 22 2.00244ZM22 20.0024H2V8.00244L12 14.0024L22 8.00244V20.0024Z"
                        fill="#4A5568"
                      />
                    </svg>
                    jane@smith.com
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="h-40 w-full bg-gray-800"></div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Max Williams
                </h3>
                <p className="text-gray-500">Marketing Manager</p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-600"
                  >
                    <svg
                      className="mr-1 inline-block h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 2.00244H2C0.9 2.00244 0 2.90244 0 4.00244V20.0024C0 21.1024 0.9 22.0024 2 22.0024H22C23.1 22.0024 24 21.1024 24 20.0024V4.00244C24 2.90244 23.1 2.00244 22 2.00244ZM22 20.0024H2V8.00244L12 14.0024L22 8.00244V20.0024Z"
                        fill="#4A5568"
                      />
                    </svg>
                    max@williams.com
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
