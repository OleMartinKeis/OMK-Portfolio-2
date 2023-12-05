import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
    return (
        <div name="home" className="w-full h-screen bg-darkblue">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-orange">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
                    Ole Martin Keiseraas
                </h1>
                <h2 className="text-3xl sm:text-4xl text-pink">
                    I am a Frontend Developer
                </h2>
                <p className="text-[#ccd6f6] py-4 max-w-[700px]">
                    I specialize in creating and building exceptional digital
                    experiences. Currently I am focused on building responsive
                    web-applications, and learning more advanced JavaScript.
                </p>
                <div>
                    <button className="text-orange group border-2 border-orange rounded-md px-6 py-3 my-2 flex items-center hover:bg-orange hover:text-black duration-300">
                        View Work
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-2" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
