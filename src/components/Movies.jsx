import React, { use, useState } from "react";
import Card from "./Card";
import { useEffect } from "react";
import axios from "axios";
import Pagination from "./pagination";

function Movies({handleAddtoWatchList ,handleRemoveFromWatchList,watchlist}) {
  const [movies, Setmovies] = useState([]);
  const [pageNo, SetpageNo] = useState(1);

  const handleprevious  = () => {
    if(pageNo==1){
      SetpageNo(pageNo)
    }
    else{
    SetpageNo(pageNo - 1);
    }
  };
    const handleNext = () => {
    SetpageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=c78d1d9a288816b22cdc4bef943cbb2e&language=en-US&page=${pageNo}`,
      )
      .then(function (res) {
        console.log(res.data.results);
        Setmovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5 m-5">
      <div className="text-center font-bold text-2xl">Trending movies</div>

      <div className="flex flex-row flex-wrap m-10 mb-10 gap-2 justify-around">
        {movies.map((movieObj) => {
          return (
            <Card key ={movieObj.id}
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddtoWatchList={handleAddtoWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              watchlist={watchlist}
            />
          );
        })}
      </div>

      <Pagination pageNo={pageNo} handlePrevious={handleprevious} handleNext={handleNext}/>
    </div>
  );
}

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=c78d1d9a288816b22cdc4bef943cbb2e&language=en-US&page=1
