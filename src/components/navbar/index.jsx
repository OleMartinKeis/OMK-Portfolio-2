import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

function Navbar() {
    const [burger, setBurger] = useState(false);
    const handleClick = () => setBurger(!burger);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-darkblue text-white">
            <div>
                <h1 className="z-11 text-2xl text-orange">OMK</h1>
            </div>

            <ul className="hidden md:flex">
                <li className="hover:text-pink hover:scale-110 duration-300">
                    <Link to="home" smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="hover:text-pink hover:scale-110 duration-300">
                    <Link to="about" smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li className="hover:text-pink hover:scale-110 duration-300">
                    <Link to="skills" smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="hover:text-pink hover:scale-110 duration-300">
                    <Link to="work" smooth={true} offset={50} duration={500}>
                        Work
                    </Link>
                </li>
                <li className="hover:text-pink hover:scale-110 duration-300">
                    <Link to="contact" smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </li>
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
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="home"
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="about"
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="skills"
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="work"
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Work
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="contact"
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-orange">
                        <a
                            href="https://www.linkedin.com/in/ole-martin-keiseraas-615a19152/"
                            className="flex justify-between items-center w-full text-black"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]">
                        <a
                            href="https://github.com/OleMartinKeis"
                            className="flex justify-between items-center w-full text-white"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#1C5A8D]">
                        <Link
                            to="contact"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="flex justify-between items-center w-full text-white"
                        >
                            Email <HiOutlineMail size={30} />
                        </Link>
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
