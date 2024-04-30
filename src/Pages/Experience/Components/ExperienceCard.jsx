import React from "react";
import { Link } from "react-router-dom";

const ExperienceCard = ({ companyName, position, content, from, to, location }) => {
  return (
    <div>
      <div className="bg-[#0A0C33] shadow-sm shadow-slate-600 justify-between p-12 flex gap-8 text-white rounded-3xl my-4 max-sm:flex-col">
        <div className="md:w-1/5">
          <h1>{position}</h1>
          <h3>Contract</h3>
          <div className="flex text-xs justify-between ">
            <h5>{from} - {to}</h5>
          </div>
          <p></p>
        </div>
        <div className="space-y-8">
          <h1  className="font-semibold">
            <Link>{companyName}</Link>
          </h1>
          <p className="text-balance">{content}</p>
          <p className="text-balance">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
