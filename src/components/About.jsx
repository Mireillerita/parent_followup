import React from 'react';
import { FaGraduationCap, FaBookOpen, FaHome } from 'react-icons/fa';
import { PiChatCircleDotsLight } from 'react-icons/pi';
import { HiMiniArrowSmallRight } from 'react-icons/hi2';

const About = () => {
  return (
    <div className="w-full pt-40 pb-4">
      <div className="text-center mb-8 md:mb-12 flex flex-col md:flex-row items-center justify-center">
        <span className="block w-10 h-2 bg-teal-900 mx-4"></span>
        <h1 className="text-teal-900 font-bold font-serif text-[24px] md:text-[32px] lg:text-[40px]">
          ABOUT US
        </h1>
        <span className="block w-10 h-2 bg-teal-900 mx-4"></span>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly gap-6 pl-20 pr-20">
        <div className="text-teal-600 bg-teal-100 hover:bg-teal-600 hover:text-white w-full md:w-80 h-64 p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out">
          <FaHome className="w-16 h-16 mb-2" />
          <h2 className="text-black hover:text-white text-xl">Home</h2>
          <p className="text-black hover:text-white text-center">
            Welcome to Parents-followUp, your partner in guiding your children's
            educational journey at home.
          </p>
        </div>
        <div className="text-teal-600 bg-teal-100 hover:bg-teal-600 hover:text-white w-full md:w-80 h-64 p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out">
          <FaGraduationCap className="w-16 h-16 mb-2" />
          <h2 className="text-black hover:text-white text-xl">
            Skilled Students
          </h2>
          <p className="text-black hover:text-white text-center">
            our mission is to empower parents with
          </p>
          <p className="text-black hover:text-white text-center"></p>
          <p className="text-black hover:text-white text-center">
            resources to effectively assist their children with their studies
          </p>
        </div>

        <div className="text-teal-600 bg-teal-100 hover:bg-teal-600 hover:text-white w-full md:w-80 h-64 p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out">
          <FaBookOpen className="w-16 h-16 mb-2" />
          <h2 className="text-black hover:text-white text-xl">Book Library</h2>
          <p className="text-black hover:text-white text-center">
            We offer a variety of resources designed to help parents support
            their children's education.
          </p>
        </div>

        <div className="text-teal-600 bg-teal-100 hover:bg-teal-600 hover:text-white w-full md:w-80 h-64 p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out">
          <PiChatCircleDotsLight className="w-16 h-16 mb-2" />
          <h2 className="text-black hover:text-white text-xl">Chat</h2>
          <p className="text-black hover:text-white text-center">
            we offers information about the chat feature for parents to
            communicate with their child's teacher
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly mt-28 gap-8">
        <div
          className="bg-center bg-cover w-full md:w-96 h-64 md:h-96 flex pl-5 pr-5"
          style={{ backgroundImage: 'url(./childbooks.jpg)' }}
        ></div>
        <div className="w-full md:w-1/2 flex flex-col justify-center pl-20 pr-20">
          <h2 className="text-teal-600 text-2xl mb-4">About Us</h2>
          <p className="text-4xl mb-4">Welcome to Parents-followUp</p>

          <div className="mt-5 mb-4">
            <p className="mb-2">
              Welcome to Parents-followUp, your partner in supporting your
              children's education at home. Our mission is to empower parents
              with resources and strategies to enhance learning outside the
              classroom. We offer expert advice, interactive tools, and a
              supportive community, along with a chat feature for direc
              communication with your child's teacher. Together, we can ensure
              every child reaches their full potential.
            </p>
          </div>
          <div className="mt-9">
            <div className="flex items-center mb-2">
              <HiMiniArrowSmallRight className="text-teal-600 text-2xl mr-2" />
              <p>Best performance</p>
            </div>
            <div className="flex items-center mb-2">
              <HiMiniArrowSmallRight className="text-teal-600 text-2xl mr-2" />
              <p>Chat of parents and the facilitators of their children</p>
            </div>
            <div className="flex items-center">
              <HiMiniArrowSmallRight className="text-teal-600 text-2xl mr-2" />
              <p>Library</p>
            </div>
          </div>
          <div className="mt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
