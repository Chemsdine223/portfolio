import React from "react";
import ExperienceCard from "./Components/ExperienceCard";

const Experience = () => {
  return (
    <>
      <div
        id="experience"
        className="scroll-mt-10 flex flex-col justify-around"
      >
        <div className="">
          <div className="flex my-3 justify-center">
            <div className="w-1/2 flex text-gray-700 justify-center text-center">
              <p>
                &lt; Here, you can know me a little more and see my whole
                experience as a <strong> Software Engineer.</strong>
                &gt;
              </p>
            </div>
          </div>
        </div>
        <ExperienceCard
          companyName={"Next Technology"}
          position={"Flutter Developer"}
          from={"August 2022"}
          to={"Now"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum qui consequatur incidunt nisi saepe illum molestias repellendus nemo perferendis deleniti laudantium alias enim consectetur, mollitia magni nihil dolores voluptatem!"
          }
        />
        <ExperienceCard
          companyName={"Syskat Technology"}
          position={"Internship"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum qui consequatur incidunt nisi saepe illum molestias repellendus nemo perferendis deleniti laudantium alias enim consectetur, mollitia magni nihil dolores voluptatem!"
          }
        />
      </div>
    </>
  );
};

export default Experience;
