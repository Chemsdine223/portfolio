import React from "react";
import { Link } from "react-router-dom";

import LinkedIn from "../Assets/linkedin.png";
import github from "../Assets/github.png";
import mail from "../Assets/mail.png";

const Footer = () => {
  return (
    <div className=" bg-slate-50 border-t-[.5px] border-t-slate-200 bottom-0 p-3 mt-2">
      <div className="rounded-lg p-4 flex justify-between">
        <div className="">Follow me</div>
        <div className="font-extralight">Chemsdine223@gmail.com</div>
        <div className="flex gap-2">
          <Link className="cursor-pointer">
            <img className="h-8" src={LinkedIn} color="red" alt="LinkedIn" />
          </Link>
          <Link className="cursor-pointer">
            <a
              href="https://github.com/Chemsdine223"
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer"
            >
              <img className="h-8" src={github} alt="LinkedIn" />
            </a>
          </Link>
          <Link className="cursor-pointer">
            <img className="h-8" src={mail} alt="LinkedIn" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
