import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full h-screen pt-33  ">
      <div className="bg-black relative h-[100%]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(./photos/image.png)' }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-12">
          <div className="flex justify-center items-center">
            <h1 className="text-teal-600 text-2xl md:text-3xl lg:text-4xl mb-4">
              PARENTS-FOLLOW-UP
            </h1>
          </div>
          <p className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug mb-4">
            Empowering Parents to Support Child's 
            <br />
            Platform
          </p>
          <p className="text-white text-sm md:text-lg font-semibold mb-6">
            The good practice of helping children to revise studies at home is
            <br />
            to establish a consistent study routine, allocating specific times
            each day for review sessions.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link to="/About">
              <button className="bg-teal-600 text-white text-base md:text-lg lg:text-xl rounded-md py-3 px-8 hover:border-teal-600">
                Read more
              </button>
            </Link>
            <Link to="/Login">
              <button className="bg-white text-black text-base md:text-lg lg:text-xl rounded-md py-3 px-9  hover:border-teal-600">
                Join now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
