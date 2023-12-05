import React from "react";
import ole from "../../assets/ole.jpg";

function About() {
    return (
        <div name="about" className="w-full h-screen bg-darkblue text-white">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <h2 className="text-4xl font-bold inline border-b-4 border-pink">
                            About
                        </h2>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
                    <div className="sm:text-right text-4xl ">
                        <p>
                            Hi. I am Ole, nice to meet you. Please take a look
                            around
                        </p>
                    </div>
                    <div>
                        I started web-devleopment two years ago at Noroff School
                        of Technology, since then I have learned to love coding
                        and making websites that are responsive and accessible
                        for everyone! I am just starting my career and would
                        love some feedback from you on my projects.
                    </div>
                </div>
                <div className="mt-6">
                    <img
                        src={ole}
                        className="max-w-[250px] rounded-full border-2 border-orange shadow-2xl"
                        alt="picture of me"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
