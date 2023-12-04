import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Navbar() {
  const [burger, setBurger] = useState(false);
  const handleClick = () => setBurger(!burger);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-darkblue text-white">
      <div>
        <h1 className="z-11">OMK</h1>
      </div>

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!burger ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile Menu */}
      <ul
        className={
          !burger
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-darkblue flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/*Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-orange">
            <a
              href="/"
              className="flex justify-between items-center w-full text-black"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-white"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#1C5A8D]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-white"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#C089E0]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-black"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
