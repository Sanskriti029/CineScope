import React from "react";

function Pagination({ handlePrevious, handleNext,pageNo}) {
  return (
    <div className="bg-gray-400 mt-8 p-4  flex justify-center">


      <div className="px-8  hover: cursor-pointer" onClick={handlePrevious}><i className="fa-solid fa-arrow-left"></i></div>
      <div className="font-bold ">{pageNo}</div>
      <div className=" px-8  hover: cursor-pointer" onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  );
}

export default Pagination;
