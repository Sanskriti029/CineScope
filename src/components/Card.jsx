import React, { useEffect, useState } from "react";
import WatchList from "./WatchList";
function Card({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj, watchlist) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-75 w-50 bg-center bg-cover rounded-xl hover:scale-110 duration-300 cursor-pointer flex flex-col items-end"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500${poster_path}')`,
      }}
    >
      {doesContain(movieObj, watchlist) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 bg-gray-900/60 rounded-lg text-center items-center flex-col"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 bg-gray-900/60 rounded-lg text-center items-center flex-col"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl bg-gray-900/60 w-full text-center p-2 mt-auto">
        {name}
      </div>
    </div>
  );
}

export default Card;
