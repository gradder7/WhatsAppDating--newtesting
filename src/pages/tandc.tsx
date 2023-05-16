import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto mt-20 px-8 py-10  md:px-32  lg:px-16">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="mb-8 text-center text-3xl font-bold text-headingColor"
      >
        Terms and Conditions
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            semper justo. Sed sed purus quis neque tempus molestie sed vel elit.
            Integer in tellus sit amet est vestibulum sollicitudin eu ac lectus.
            Aenean bibendum ex euismod odio posuere malesuada.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-bold text-headingColor">
            Data Collection
          </h2>
          <p className="leading-6 text-subContentColor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            semper justo. Sed sed purus quis neque tempus molestie sed vel elit.
            Integer in tellus sit amet est vestibulum sollicitudin eu ac lectus.
            Aenean bibendum ex euismod odio posuere malesuada.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-bold text-headingColor">Cookies</h2>
          <p className="leading-6 text-subContentColor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            semper justo. Sed sed purus quis neque tempus molestie sed vel elit.
            Integer in tellus sit amet est vestibulum sollicitudin eu ac lectus.
            Aenean bibendum ex euismod odio posuere malesuada.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-bold text-headingColor">
            Use of Information
          </h2>
          <p className="leading-6 text-subContentColor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            semper justo. Sed sed purus quis neque tempus molestie sed vel elit.
            Integer in tellus sit amet est vestibulum sollicitudin eu ac lectus.
            Aenean bibendum ex euismod odio posuere malesuada.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-bold text-headingColor">
            Data Security
          </h2>
          <p className=" leading-6 text-subContentColor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            semper justo. Sed sed purus quis neque tempus molestie sed vel elit.
            Integer in tellus sit amet est vestibulum sollicitudin eu ac lectus.
            Aenean bibendum ex euismod odio posuere malesuada.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
