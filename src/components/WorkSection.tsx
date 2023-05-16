import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import React from 'react';

const WorkSection = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto">
        <div className="mb-4 flex items-center">
          {/* icon */}
          <Diversity1OutlinedIcon
            style={{ color: 'rgb(30 58 138)', marginRight: '10px' }}
          />
          <span className="text-sm font-medium text-blue-500">OUR PROCESS</span>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-headingColor lg:text-4xl">
          How it Works?
        </h2>
        <p className="leading-relaxed text-subContentColor">
          Ignite Your Curiosity and Connect with Strangers through Random Chats
          on WhatsApp.
        </p>
        <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-3">
          {/* card bg change */}
          <div className="dotted__responsive rounded-lg pl-0">
            <div className="flex items-center">
              <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                <span className="  text-xl font-medium text-white">1</span>
              </div>
            </div>
            <h3 className="my-4 text-xl font-bold text-headingColor">Step 1</h3>
            <p className="leading-relaxed text-subContentColor">
              Send a &ldquo;Hi&rdquo; message to our WhatsApp number to get
              started.
            </p>
          </div>
          <div className=" dotted__responsive rounded-lg pl-0">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
              <span className="text-xl font-medium text-white">2</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-headingColor">Step 2</h3>
            <p className="leading-relaxed text-subContentColor">
              Fill out your profile with information about yourself, including
              your interests, and gender.
            </p>
          </div>
          <div className="dotted__responsive rounded-l pl-0">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
              <span className="text-xl font-medium text-white">3</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-headingColor">Step 3</h3>
            <p className="leading-relaxed text-subContentColor">
              Start chatting anonymously with strangers who share similar
              interests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
