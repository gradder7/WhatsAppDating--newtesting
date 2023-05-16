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
