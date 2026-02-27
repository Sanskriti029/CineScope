import React, { useEffect, useState } from "react";

import genreids from "../utility/genre"; 

function WatchList({ watchlist, handleRemoveFromWatchList,setwatchlist }) {


  const [search, setSearch] = useState("");
  const[genrelist,setgenrelist]= useState(['All genres'])
  const [currGenre , setCurrGenre] = useState('All Genres')


  //searching 
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };



  let handleFilter = (genre)=>{
     setCurrGenre(genre)
  }


// soting based on rating
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




useEffect(() => {
  let temp = watchlist.map((movieObj) => {
    return genreids[movieObj.genre_ids[0]];
  });

  let uniqueGenres = Array.from(new Set(temp));

  setgenrelist(["All Genres", ...uniqueGenres]);
}, [watchlist]);




  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genrelist.map((genre)=>{
           return <div onClick={()=>handleFilter(genre)} className={ currGenre==genre?"flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4" :'flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4' }>
           {genre}
         </div>
        })}


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

                       <i className="fa-solid fa-arrow-up"></i>
                    </div>

                    <div className="p-2">Ratings</div>

                <div className="p-2 hover:cursor-pointer" onClick={handlesortdescending}>
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </div>

              <th>Popularity</th>
              <th>Genres</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.filter((movieObj)=>{
              if(currGenre =='All Genres'){
                return true
              }
              else{
                return genreids[movieObj.genre_ids[0]]==currGenre;
              }
            })
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
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
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
