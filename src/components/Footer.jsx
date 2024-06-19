import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io';
import { BsInstagram } from 'react-icons/bs';
import { HiMiniArrowSmallRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-teal-950 text-white mt-0 pl-20 pr-20 justify-center">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h1 className="text-3xl mb-4">Quick link</h1>

            <div className="flex items-center mb-2">
              <HiMiniArrowSmallRight className="mr-2" />
              <Link to="./About">
                <p>About Us</p>
              </Link>
            </div>
            <div className="flex items-center mb-2">
              <HiMiniArrowSmallRight className="mr-2" />
              <Link to="./Contact">
                <p>Contact Us</p>
              </Link>
            </div>
            <div className="flex items-center">
              <HiMiniArrowSmallRight className="mr-2" />
              <Link to="./Level">
                <p>Levels</p>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-3xl mb-4">Contact</h3>
            <div className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2" />
              <p>+250 793200567</p>
            </div>
            <div className="flex items-center mb-4">
              <MdOutlineEmail className="mr-2" />
              <Link to="./">
                <p>Wisdomschool@gmail.com</p>
              </Link>
            </div>
            <div className="flex space-x-4">
              <AiFillTwitterCircle className="text-2xl" />
              <BsFacebook className="text-2xl" />
              <IoLogoYoutube className="text-2xl" />
              <BsInstagram className="text-2xl" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl mb-4">Gallery</h1>
            <div className="flex flex-wrap gap-4">
              <div
                className="bg-center w-16 h-16"
                style={{
                  backgroundImage: 'url(./photos/photo2.jpg)',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="bg-center w-16 h-16"
                style={{
                  backgroundImage: 'url(./photos/photo3.jpg)',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="bg-center w-16 h-16"
                style={{
                  backgroundImage: 'url(./photos/photo4.jpg)',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="bg-center w-16 h-16"
                style={{
                  backgroundImage: 'url(./photos/photo4.jpg)',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="bg-center w-16 h-16"
                style={{
                  backgroundImage: 'url(./photos/photo2.jpg)',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="bg-center w-16 h-16"
                style={{
                  backgroundImage: 'url(./photos/photo7.jpg)',
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl mb-4">Developers</h3>
            <div className="flex items-center mb-2">
              <HiMiniArrowSmallRight className="mr-2" />
              <p>Documentation</p>
            </div>
            <div className="flex items-center mb-2">
              <HiMiniArrowSmallRight className="mr-2" />

              <p>API</p>
            </div>
            <div className="flex items-center mb-2">
              <HiMiniArrowSmallRight className="mr-2" />
              <p>Open source</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
