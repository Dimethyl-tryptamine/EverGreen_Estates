import React from "react";

const Slider = ({ content }) => {
  return (
    <div className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#228000] scrollbar-track-[#141616] flex flex-col absolute right-3 top-0 ">
      {/* Add the style directly to make the scrollbar thumb rounded */}
      {content}
    </div>
  );
};

export default Slider;
