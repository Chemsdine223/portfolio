import React from "react";
import FirstSection from "./Components/FirstSection";
import SecondSection from "./Components/SecondSection";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";

const HomePage = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <Experience />
      <Education />
      {/* <div className="h-screen bg-orange-500 w-screen">3</div>
    <div className="h-screen bg-blue-500 w-screen">4</div> */}
    </div>
  );
};

export default HomePage;
