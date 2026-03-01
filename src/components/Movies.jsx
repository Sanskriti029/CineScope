import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import Pagination from "./pagination";
import Banner from './Banner';

function Movies({ handleAddtoWatchList, handleRemoveFromWatchList, watchlist }) {
  const [movies, Setmovies] = useState([]);
  const [pageNo, SetpageNo] = useState(1);
  const [bannerMovie, setBannerMovie] = useState(null);

  const handleprevious = () => {
    if (pageNo > 1) {
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
        Setmovies(res.data.results);
        setBannerMovie(res.data.results[0]);
      });
  }, [pageNo]);

  return (
    <div>
      {bannerMovie && <Banner movieObj={bannerMovie} />}

      <div className="p-5 m-5">
        <div className="text-center font-bold text-2xl">Trending movies</div>

        <div className="flex flex-row flex-wrap m-10 mb-10 gap-2 justify-around">
          {movies.map((movieObj) => {
            return (
              <Card
                key={movieObj.id}
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

        <Pagination pageNo={pageNo} handlePrevious={handleprevious} handleNext={handleNext} />
      </div>
    </div>
  );
}

export default Movies;
