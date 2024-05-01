import React from "react";
import EducationCard from "./Components/EducationCard";

const Education = () => {
  return (
    <div id="education">
      <div className="flex text-gray-700 justify-center text-center">
        <p>&lt; Here is more about my education /&gt;</p>
      </div>
      <EducationCard certificate="Licence en Developpement informatique" title={"ISCAE"} date={"2024"}  />
      <EducationCard certificate="Responsive Web Design" title={"FreeCodeCamp.org"} url={"https://www.freecodecamp.org/certification/fcc65b96fca-ebef-409d-95a7-53568d08bbfe/responsive-web-design"} date={"2024"}  />
    </div>
  );
};

export default Education;


// FR AR // 
// Trésorie // 
