import React from "react"; 
import computer from "../../../Assets/notebook.png";
import server from "../../../Assets/database-storage.png";

import TechStack from "./TechStack";
import { frontEnd, backEnd, languages } from "../../../Common/Constants";


const SecondSection = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="max-sm:hidden flex flex-col py-2 font-light">
        <div className="text-start text-6xl">These are the technologies</div>
        <div className="text-start text-6xl">I’ve been using</div>
      </div>
      <div className="flex justify-center">
        <div className="text-center text-2xl w-1/2 md:hidden">
          These are the technologies I've been using
        </div>
      </div>
      <div className="flex justify-around my-12">
        <TechStack image={computer} label="Front-End" imagesList={frontEnd} />
        <TechStack image={server} label="Back-End" imagesList={backEnd}/>
        <TechStack image={languages} label="Languages" imagesList={languages} />
      </div>
    </div>
  );
};

export default SecondSection;
