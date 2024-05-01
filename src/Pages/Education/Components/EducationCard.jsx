import React from "react";

const EducationCard = ({ certificate, title, date, url }) => {
  return (
    <div className="border-gray-300 bg-white my-4 rounded-2xl p-10 flex items-center justify-between border-[.5px]">
      <div>
        <h1 className="text-green-500">{title}</h1>
        <h2>{certificate}</h2>
        <h2>{date}</h2>
      </div>
      {url && <a target="_blank" rel="noreferrer" href={url}>View Certificate</a>}  
    </div>
  );
};

export default EducationCard;
