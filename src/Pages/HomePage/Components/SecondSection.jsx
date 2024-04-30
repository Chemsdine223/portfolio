import React from "react";

// import dart from "../Assets/dart-programming-language-icon.png";
// import python from "../Assets/python.png";
// import js from "../Assets/js.png";
import imagePlaceHolder from "../../../Assets/notebook.png";

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
      <div className="flex justify-around bg-red-200">
        <div className=" bg-slate-600 ">
          <div className="flex">
          <img className="h-[24px]" src={imagePlaceHolder} alt="React Jobs" />
            <div>Front-End</div>
          </div>

          <div className="flex flex-col items-center">
          <div className="flex">
            <div>Logo</div>
            <div>JS</div>
          </div>
          <div>Node</div>
          <div>React</div>
          <div>Firebase</div>
          </div>
        </div>
        <div className="">
          <div>JS</div>
          <div>Node</div>
          <div>React</div>
          <div>Firebase</div>
        </div>
        <div className="">
          <div>JS</div>
          <div>Node</div>
          <div>React</div>
          <div>Firebase</div>
        </div>
      </div>
      {/* <div className="justify-center bg-orange-100 flex">
        <div className="">
          <div>JS</div>
          <div>Node</div>
          <div>React</div>
          <div>Firebase</div>
        </div>
        <div className="bg-green-500 w-full">
          <div>For the Front-End</div>
          <div>Node</div>
          <div>React</div>
          <div>Firebase</div>
        </div>
        <div className="bg-green-500 w-full">
          <div>JS</div>
          <div>Node</div>
          <div>React</div>
          <div>Firebase</div>
        </div>
      </div> */}
    </div>
  );
};

export default SecondSection;
