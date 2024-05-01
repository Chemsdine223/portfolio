import React from "react";

const TechStack = ({ list, image, label, imagesList }) => {
  return (
    <div>
      <div className="">
        <div className="flex mb-2 justify-center">
          {/* <img className="h-[24px]" src={image} alt="React Jobs" /> */}
          <div className="font-extralight" >{label}</div>
        </div>

        <div className="flex flex-col space-y-2">
          {imagesList &&
            Object.keys(imagesList).map((key) => (
              <div className="flex" key={key}>
                <div className="mr-2 w-[24px] h-[24px] flex items-center justify-center">
                  <img className="h-[24px]" src={imagesList[key]} alt="none" />
                </div>

                {/* Use the key as the name */}
                <div className="font-medium">{key}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
