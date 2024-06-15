import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false); // Initialize state

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle function
  };

  return (
    <section className="text-teal-600 flex justify-between items-center fixed w-full z-50 p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img className="h-14 w-14" src="./photos/Primary.png" alt="Logo" />
        <h1 className="text-teal-600 text-2xl font-semibold pl-4">
          Parents-follow-up
        </h1>
      </div>

      {/* Menu Toggle Button for Small Screens */}
      <div className="md:hidden">
        <FaBars className="text-black cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Navigation List for Medium and Larger Screens */}
      <nav className="hidden md:flex md:items-center gap-6">
        <NavLink to="/" className="hover:text-teal-600 mx-2">
          Home
        </NavLink>
        <NavLink to="/About" className="hover:text-teal-600 mx-2">
          About
        </NavLink>
        <NavLink to="/level" className="hover:text-teal-600 mx-2">
          Level
        </NavLink>

        <NavLink to="/Contact" className="hover:text-teal-600 mx-2">
          Contact
        </NavLink>
        <NavLink to="/Login" className="hover:text-teal-600 mx-2">
          <button className="bg-teal-600 text-white text-lg rounded-md py-2 px-4 hover:bg-black hover:border-teal-600">
            Login
          </button>
        </NavLink>
      </nav>

      {/* Conditional Rendering of Navigation List for Small Screens */}
      {showMenu && (
        <div className="absolute top-16 right-0 w-full md:hidden bg-white shadow-lg rounded-md p-4">
          <nav className="flex flex-col gap-4">
            <NavLink
              to="/"
              className="hover:text-teal-600 block"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className="hover:text-teal-600 block"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/Courses"
              className="hover:text-teal-600 block"
              onClick={toggleMenu}
            >
              Courses
            </NavLink>
            {/* <NavLink
              to="/Pages"
              className="hover:text-teal-600 block"
              onClick={toggleMenu}
            >
              Pages
            </NavLink> */}
            <NavLink
              to="/Contact"
              className="hover:text-teal-600 block"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            <NavLink
              to="/Login"
              className="hover:text-teal-600 block"
              onClick={toggleMenu}
            >
              <button className="bg-teal-600 text-white text-lg rounded-md py-2 px-4 w-full hover:bg-black hover:border-teal-600">
                Login
              </button>
            </NavLink>
          </nav>
        </div>
      )}
    </section>
  );
};

export default NavBar;
