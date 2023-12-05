import React from "react";
import css from "../../assets/css.png";
import github from "../../assets/github.png";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";

function Skills() {
  return (
    <div name="skills" className="bg-darkblue text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <h2 className="text-4xl text-orange inline">Skills</h2>
        <p className="border-b-4 border-pink px-4 py-1">
          These are the technologies I've worked with
        </p>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center py-8">
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img src={html} className="w-20 mx-auto" alt="HTML icon" />
          <p className="my-4">HTML</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img src={css} className="w-20 mx-auto" alt="css icon" />
          <p className="my-4">CSS</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img
            src={javascript}
            className="w-20 mx-auto"
            alt="JavaScript icon"
          />
          <p className="my-4">JavaScript</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img src={github} className="w-20 mx-auto" alt="GitHub icon" />
          <p className="my-4">GitHub</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img src={react} className="w-20 mx-auto" alt="React icon" />
          <p className="my-4">React</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img src={tailwind} className="w-20 mx-auto" alt="TailWind icon" />
          <p className="my-4">TailWind CSS</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
