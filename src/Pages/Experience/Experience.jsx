import React from "react";
import ExperienceCard from "./Components/ExperienceCard";

const Experience = () => {
  return (
    <>
      <div
        id="experience"
        className="scroll-mt-20 flex flex-col justify-around"
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
            "Since August,2022, I immersed in practical learning and professional growth. Working on diverse projects, I honed skills in frontend technologies like React and Flutter, as well as backend frameworks like Node.js, Django, and Firebase. Collaborating with talented teams, I contributed to innovative solutions and gained insights into industry best practices. From mentorship programs to hands-on experience, Next.mr provided an environment for continuous learning and personal development. I'm grateful for the opportunity to work on impactful projects and develop the skills necessary to thrive in software engineering."
          }
          location={"Nouakchott, Mauritania"}
        />
        <ExperienceCard
          companyName={"Syskat Technology"}
          position={"Internship"}
          content={
            "At Syskat, my four-month internship provided me with a fresh perspective and valuable experience. Working alongside seasoned professionals, broadening my skills in software development. This experience not only enriched my academic journey but also prepared me for the challenges of the professional world."
          }
          from={"March 2023"}
          to={"July 2023"}
          location={"Nouakchott, Mauritania"}
        />
      </div>
    </>
  );
};

export default Experience;
