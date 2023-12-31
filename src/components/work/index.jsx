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
                        <div className="opacity-0 group-hover:opacity-100 duration-300">
                            <span className="text-base font-bold text-white tracking-wider">
                                <p>VenueVista</p>
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
                        <div className="opacity-0 group-hover:opacity-100 duration-300">
                            <span className="text-base font-bold text-white tracking-wider">
                                <p>Find.no</p>
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
                        <div className="opacity-0 group-hover:opacity-100  duration-300">
                            <span className="text-base font-bold text-white tracking-wider"></span>
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
                    <div>
                        <p className="text-xl font-bold md:hidden  text-orange">
                            VenueVista
                        </p>
                        <p className="text-lg">
                            React JS Application, TailwindCSS where users can
                            book holidays at user created venues. Here you can
                            create an account, log in, create venues and much
                            more! Please take a look. Created using a public API
                            from Noroff.
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold md:hidden text-orange">
                            Find.no
                        </p>
                        <p className="text-lg">
                            React JS Application, React Bootstrap page inspired
                            by the Norwegian finn.no. Here you can create an
                            account, log in, create items for sale and much
                            more! Please take a look. Created using a public API
                            from Noroff.
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold md:hidden text-orange">
                            AuctIT
                        </p>
                        <p className="text-lg">
                            JS Application, Auction site where users can bid on
                            items. Built using Sass and Bootstrap. Here you can
                            create an account, log in, create items to auction
                            and bid on other users items and much more! Please
                            take a look. Created using a public API from Noroff.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
