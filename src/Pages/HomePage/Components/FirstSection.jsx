import React from "react";
import imagePlaceHolder from "../../../Assets/users.png";
import dart from "../../../Assets/dart-programming-language-icon.png"
import python from "../../../Assets/python.png"
import js from "../../../Assets/js.png"
import Card from "../../../Common/Card";
import { Link } from "react-router-dom";


const FirstSection = () => {
  return (
    <div id="home" className="scroll-mt-16 flex flex-col">
      <section className="flex h-full max-sm:flex-col-reverse">
        <div className="p-8 flex flex-col justify-center w-full">
          <div className="md:text-6xl mb-8">Hi, I'm Chemsdine</div>
          <div className="text-justify font-extralight">
            Over the past <strong>two years</strong>, I've delved into the world of software
            engineering, exploring a spectrum of technologies such as 
            <strong> Node.js, Flutter, Firebase, Django, Django Rest Framework, Firebase,
            Socket.IO, and React.</strong> From backend systems to frontend interfaces
            and mobile applications, I've embraced the challenge of crafting
            solutions that resonate with users and adapt to evolving landscapes.
            <div className="flex-col md:space-x-1 gap-2 md:flex-col ">
              <button className="bg-white shadow-md hover:shadow-xl rounded-full self-baseline px-4 py-1 mt-4">
                Download CV
              </button>
              <button className="bg-white rounded-full self-baseline px-4 py-1 mt-4">
                <Link to="/">See Experience</Link>
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center w-full">
          <img className="h-20" src={imagePlaceHolder} alt="React Jobs" />
        </div>
      </section>
      <div className="flex items-center overflow-auto py-2 justify-around">
        <Card logo={dart} label="Dart"/>
        <Card logo={python} label="Python" />
        <Card logo={js} label="JavaScript"/>
      </div>
    </div>
  );
};

export default FirstSection;
