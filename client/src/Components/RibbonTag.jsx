import React from "react";

const RibbonTag = ({ title, textColor }) => {
  return (
    <h2 className={`text-xl ${textColor} font-semibold flex items-center gap-2`}>
      <span className="w-2 h-6 bg-red-500 rounded"></span>
      {title}
    </h2>
  );
};

export default RibbonTag;
