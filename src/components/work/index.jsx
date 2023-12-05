import React from "react";
import VenueVista from "../../assets/VenueVista.jpg";
import find from "../../assets/find.jpg";
import AuctIT from "../../assets/AuctIT.jpg";

function Work() {
    return (
        <div name="work" className="bg-darkblue md:h-screen w-full text-white">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h2 className="text-4xl text-orange inline font-bold">
                        Work
                    </h2>
                    <p className="border-b-4 border-pink px-4 py-1">
                        Check out some of my recent work
                    </p>
                </div>

                <div className="grid sm:grid-col-2 md:grid-cols-3 gap-4">
                    <div
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto card-div"
                        style={{ backgroundImage: `url(${VenueVista})` }}
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-base font-bold text-white tracking-wider">
                                React Application, using Tailwind to create a
                                booking page for Hotels/Apartments
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://omk-holidaze.netlify.app/">
                                    <button className="text-orange border-2 border-orange rounded-md px-4 py-3 m-2 text-center  hover:bg-orange hover:text-black duration-300">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/OleMartinKeis/Ole-Martin-Keiseraas-PE2/">
                                    <button className="text-orange border-2 border-orange rounded-md px-4 py-3 m-2 text-center  hover:bg-orange hover:text-black duration-300">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto card-div"
                        style={{ backgroundImage: `url(${find})` }}
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-base font-bold text-white tracking-wider">
                                React Application, using Bootstrap to create a
                                webpage inspired by finn.no
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://imaginative-panda-b057eb.netlify.app/">
                                    <button className="text-orange border-2 border-orange rounded-md px-4 py-3 m-2 text-center hover:bg-orange hover:text-black duration-300">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/OleMartinKeis/Frontend-Frameworks-CA-Ole-Martin-Keiseraas">
                                    <button className="text-orange border-2 border-orange rounded-md px-4 py-3 m-2 text-center  hover:bg-orange hover:text-black duration-300">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto card-div"
                        style={{ backgroundImage: `url(${AuctIT})` }}
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-base font-bold text-white tracking-wider">
                                React Application, using Bootstrap to create a
                                webpage inspired by finn.no
                            </span>
                            <span className="textlg font-bold text-white tracking-wider"></span>
                            <div className="pt-8 text-center">
                                <a href="https://benevolent-wisp-36e8ad.netlify.app/">
                                    <button className="text-orange border-2 border-orange rounded-md px-4 py-3 m-2 text-center  hover:bg-orange hover:text-black duration-300">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/OleMartinKeis/OMK-Semester-project-2">
                                    <button className="text-orange border-2 border-orange rounded-md px-4 py-3 m-2 text-center  hover:bg-orange hover:text-black duration-300">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
