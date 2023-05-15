// import { motion } from 'framer-motion';
// import Link from 'next/link';

// // const PolicyLink = ({ href, text }) => (
// //   <Link href={href}>
// //     <a className="text-blue-500 hover:underline">{text}</a>
// //   </Link>
// // );
// interface PolicyLinkProps {
//   href: string;
//   text: string;
// }

// const PolicyLink: React.FC<PolicyLinkProps> = ({ href, text }) => (
//   <Link href={href}>
//     <h1 className="text-blue-500 hover:underline">{text}</h1>
//   </Link>
// );

// const PrivacyPolicy = () => (
//   <div className="container mx-auto py-20 px-4 md:px-8 lg:px-16">
//     <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//       {/* Sidebar navigation */}
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 }}
//         className="mb-8 md:col-span-1 md:mb-0"
//       >
//         <nav className="sticky top-20 md:mt-24">
//           <ul className="space-y-4">
//             <li>
//               <PolicyLink href="#intro" text="Introduction" />
//             </li>
//             <li>
//               <PolicyLink href="#data-collection" text="Data Collection" />
//             </li>
//             <li>
//               <PolicyLink href="#cookies" text="Cookies" />
//             </li>
//             <li>
//               <PolicyLink
//                 href="#use-of-information"
//                 text="Use of Information"
//               />
//             </li>
//             <li>
//               <PolicyLink href="#data-security" text="Data Security" />
//             </li>
//           </ul>
//         </nav>
//       </motion.div>
//       {/* Main content */}
//       <motion.div
//         initial={{ opacity: 0, x: 10 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.2 }}
//         className="md:col-span-2"
//       >
//         <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>
//         <section id="intro" className="mb-6  mt-16 ">
//           <h2 className="mb-4 text-2xl font-bold">Introduction</h2>
//           <p className="leading-6 text-gray-700">
//             Our website is committed to protecting the privacy and security of
//             its personal information. This Privacy Policy explains how we
//             collect, use, and safeguard the personal information provided to us
//             through the website.
//           </p>
//         </section>

//         <section id="data-collection" className="mb-6">
//           <h2 className="mb-4 text-2xl font-bold">Data Collection</h2>
//           <p className="leading-6 text-gray-700">
//             We collect personal information from our users when they voluntarily
//             provide it to us through the website, such as when they register for
//             an account or sign up for our newsletter. This personal information
//             may include their name, email address, and other contact
//             information.
//           </p>
//         </section>

//         <section id="cookies" className="mt-32 mb-6">
//           <h2 className="mb-4 text-2xl font-bold">Cookies</h2>
//           <p className="leading-6 text-gray-700">
//             Our website uses cookies to enhance the user experience and provide
//             personalized content and advertising. Cookies are small data files
//             that are placed on a device when they visit our website. Users can
//             control the use of cookies through their browser settings.
//           </p>
//         </section>

//         <section id="use-of-information" className="mb-6">
//           <h2 className="mb-4 text-2xl font-bold">Use of Information</h2>
//           <p className="leading-6 text-gray-700">
//             We may use the personal information collected from our users to
//             provide them with requested products, services, or information, to
//             improve our website and services, to personalize their user
//             experience, or to communicate with them regarding updates or
//             promotional offers. We may also share their information with trusted
//             third-party service providers who assist us in operating our website
//             or conducting our business.
//           </p>
//         </section>
//         <section id="data-security" className="mb-6">
//           <h2 className="mb-4 text-2xl font-bold">Data Security</h2>
//           <p className="leading-6 text-gray-700">
//             We take appropriate measures to ensure the security of the personal
//             information provided to us through the website. However, no data
//             transmission over the internet or storage system can be guaranteed
//             to be 100% secure. Therefore, while we strive to protect personal
//             information, we cannot guarantee its absolute security.
//           </p>
//         </section>

//         <section className="mb-6">
//           <h2 className="mb-4 text-2xl font-bold">
//             Changes to This Privacy Policy
//           </h2>
//           <p className="leading-6 text-gray-700">
//             We may update this Privacy Policy from time to time. Users are
//             encouraged to review this page periodically for any changes. By
//             continuing to use our website, users acknowledge and agree to any
//             updates or modifications to this Privacy Policy.
//           </p>
//         </section>

//         <section className="mb-6">
//           <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
//           <p className="leading-6 text-gray-700">
//             If you have any questions or concerns regarding this Privacy Policy,
//             please contact us at privacy@ourwebsite.com.
//           </p>
//         </section>
//       </motion.div>
//     </div>
//   </div>
// );
// export default PrivacyPolicy;

import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto mt-20 py-10 px-8 md:px-32 lg:px-16">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="mb-8 text-center text-3xl font-bold text-headingColor"
      >
        Privacy Policy
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-bold text-headingColor">
            Introduction
          </h2>
          <p className="leading-6 text-subContentColor">
            Our website is committed to protecting the privacy and security of
            its personal information. This Privacy Policy explains how we
            collect, use, and safeguard the personal information provided to us
            through the website.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-bold text-headingColor">
            Data Collection
          </h2>
          <p className="leading-6  text-subContentColor">
            We collect personal information from our users when they voluntarily
            provide it to us through the website, such as when they register for
            an account or sign up for our newsletter. This personal information
            may include their name, email address, and other contact
            information.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-bold text-headingColor">Cookies</h2>
          <p className="leading-6  text-subContentColor">
            Our website uses cookies to enhance the user experience and provide
            personalized content and advertising. Cookies are small data files
            that are placed on a device when they visit our website. Users can
            control the use of cookies through their browser settings.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-bold text-headingColor">
            Use of Information
          </h2>
          <p className="leading-6 text-subContentColor">
            We use personal information collected from our users to provide them
            with the products and services they request, to improve our website,
            and to communicate with them about our products, services, and
            promotions. We do not sell or share personal information with third
            parties unless required by law.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-bold text-headingColor">
            Data Security
          </h2>
          <p className="leading-6 text-subContentColor">
            We take reasonable measures to protect the personal information
            provided to us from unauthorized access, use, or disclosure.
            However, no method of transmission over the internet or electronic
            storage is completely secure, so we cannot guarantee its absolute
            security.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-bold text-headingColor">
            Changes to this Privacy Policy
          </h2>
          <p className="leading-6 text-subContentColor">
            We reserve the right to modify this Privacy Policy at any time. Any
            changes will be effective immediately upon posting to the website.
            Your continued use of the website following any such changes
            constitutes your acceptxance of the new Privacy Policy.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
