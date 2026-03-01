import React from "react";

function Pagination({ handlePrevious, handleNext,pageNo}) {
  return (
    <div className="bg-gray-400 mt-8 p-4  flex justify-center">


      <div className="px-8 cursor-pointer" onClick={handlePrevious}><span className="text-xl font-bold">&larr;</span></div>
      <div className="font-bold">{pageNo}</div>
      <div className="px-8 cursor-pointer" onClick={handleNext}><span className="text-xl font-bold">&rarr;</span></div>
    </div>
  );
}

export default Pagination;
