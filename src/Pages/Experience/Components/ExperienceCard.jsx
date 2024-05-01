import React from "react";
import { Link } from "react-router-dom";

const ExperienceCard = ({ companyName, position, content, from, to, location }) => {
  return (
    <div>
      <div className="bg-[#0A0C33] shadow-sm shadow-slate-600 justify-between p-12 flex gap-8 text-white rounded-3xl my-4 max-sm:flex-col">
        <div className="md:w-1/4 bg-white">
          <h1>{position}</h1>
          <div className="flex text-xs font-extralight justify-between ">
            <h5>{from} - {to}</h5>
          </div>
          <div className="flex text-xs font-extralight justify-between ">
            <h5>{location}</h5>
          </div>
        </div>
        <div className="space-y-8">
          <h1  className="font-semibold">
            <Link>{companyName}</Link>
          </h1>
          <p className="text-balance font-thin">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
