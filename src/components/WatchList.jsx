import React, { useState } from "react";

function WatchList({ watchlist, handleRemoveFromWatchList,setwatchlist }) {
  const [search, setSearch] = useState("");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

//
  let handlesortascending = () => {
   let sortedincreasing = [...watchlist].sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;

    });
    setwatchlist(sortedincreasing);
    console.log(sortedincreasing);
  };


   let handlesortdescending = () => {
    let sorteddecreasing = [...watchlist].sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setwatchlist(sorteddecreasing);
    console.log(sorteddecreasing);
  };




  return (
    <>
      <div className="flex justify-center flex-wrap">
        <div className="flex justify-center h-12 w-36 bg-blue-500 text-white px-4 py-2 rounded-xl m-2 font-bold">
         
          Action
        </div>
        <div className="flex justify-center h-12 w-36 bg-gray-400/50 text-white px-4 py-2 rounded-xl m-2 font-bold">
          
          Comedy
        </div>
        <div className="flex justify-center h-12 w-36 bg-blue-500 text-white px-4 py-2 rounded-xl m-2 font-bold">
         
          Drama
        </div>
      </div>

      <div className=" flex justify-center my-4 ">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          className="h-12 w-72 border bg-gray-200 rounded-2xl text-center"
          placeholder="Search for movies"
        />
      </div>

      <div className="rounded overflow-auto border border-gray-200 p-4 m-8">
        <table className="w-full text-gray-500  text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <div className="flex flex-row gap-5 justify-center">
                    <div className="p-2 hover:cursor-pointer" onClick={handlesortascending}>

                       <i class="fa-solid fa-arrow-up"></i>
                    </div>

                    <div className="p-2">Ratings</div>

                <div className="p-2 hover:cursor-pointer" onClick={handlesortdescending}>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </div>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="w-40 h-24 rounded"
                        src={
                          "https://image.tmdb.org/t/p/w500" +
                          movieObj.backdrop_path
                        }
                        alt="Movie Poster"
                      />
                      <div className="mx-4">{movieObj.title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>Action</td>
                    <td className="text-red-500 font-bold">
                      <button
                        onClick={() => handleRemoveFromWatchList(movieObj)}
                        className="hover:cursor-pointer hover:text-red-700"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
  }

export default WatchList;
