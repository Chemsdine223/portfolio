import React from "react";
import { Link } from "react-router-dom";
import LinkedIn from "../Assets/linkedin.png";
import github from "../Assets/github.png";
import mail from "../Assets/mail.png";

const NavBar = ({ scrollToSection }) => {
  return (
    <div className="bg-white bg-opacity-85 backdrop-blur-sm w-screen sticky top-0 flex border-b-[.5px] border-b-slate-200 justify-center p-2">
      <nav className="flex text-gray-900 font-extralight text-md max-sm:text-xs p-2 max-sm:hidden items-center justify-evenly w-full lg:w-1/2  rounded-2xl">
        <Link
          to="/"
          onClick={() => scrollToSection("home")}
          className="cursor-pointer font-extralight hover:text-gray-800 hover:font-normal"
        >
          ChemsDine
        </Link>
        <Link
          to="/"
          onClick={() => scrollToSection("education")}
          className="cursor-pointer font-extralight hover:text-gray-800 hover:font-normal"
        >
          Education
        </Link>
        <Link
          to="/"
          onClick={() => scrollToSection("experience")}
          className="cursor-pointer font-extralight hover:text-gray-800 hover:font-normal"
        >
          Experience
        </Link>
        <div className="flex gap-2">
          <a href="https://www.linkedin.com/in/chems-dine-39aa882b8" rel="noreferrer" target="_blank" className="cursor-pointer"><img className="h-8" src={LinkedIn} color="red" alt="LinkedIn" /></a>
          <a href="https://github.com/Chemsdine223" rel="noreferrer" target="_blank" className="cursor-pointer"><img className="h-8" src={github} alt="LinkedIn" /></a>
          <a href="/" className="cursor-pointer"><img className="h-8" src={mail} alt="LinkedIn" /></a>
        </div>
      </nav>
      <nav className="lg:hidden md:hidden text-white flex items-center w-full justify-end">
        Menu
      </nav>
    </div>
  );
};

export default NavBar;
